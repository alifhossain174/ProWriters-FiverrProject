<?php

namespace App\Http\Controllers\Admin\Business;

use App\Enums\ServiceType;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAssignmentRequest;
use App\Models\Business\Assignment;
use App\Models\Business\AuthorLevel;
use App\Models\Business\Service;
use App\Models\Business\Urgency;
use Illuminate\Http\Request;

class AssignmentController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return inertia('Admin/Business/Assignments/Index', [
            'data' => function () {
                // ALWAYS included on first visit
                // OPTIONALLY included on partial reloads
                // ONLY evaluated when needed
                return [
                    'title'       => __('Assignments'),
                    'services'    => Service::active()->get(),

                ];
            },
            'filters'     => $request->only('filters'),
            'assignments' => Assignment::withWhereHas('service', function ($q) use ($request) {
                $q->select(['id', 'name']);

                if ($request->filled('filters.service_id') && $request->filters['service_id']) {
                    $q->where('id', $request->filters['service_id']);
                }

            })
                ->when($request->filled('filters.search'), function ($q) use ($request) {
                    return $q->where('name', 'like', '%' . $request->filters['search'] . '%');
                })

                ->orderBy('name', 'ASC')
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),
        ]);
    }


    public function create()
    {
        return inertia()->modal('Admin/Business/Assignments/Create', [
            'data' => [
                'title'                => __('Add assignment'),
                'urls'                 => [
                    'submit_form' => route('admin.assignments.store'),
                ],
                'dropdowns'            => [
                    'services'          => Service::active()->get(),
                    'author_levels' => AuthorLevel::get(),
                    'urgencies'         => Urgency::all(),
                ],
                'service_types'        => ServiceType::getForFrontEnd(),
                'url_query_parameters' => $this->getQueryParameterPreviousUrl(),
            ],
        ])->baseRoute('admin.assignments.index', $this->getQueryParameterPreviousUrl());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAssignmentRequest $request)
    {
        Assignment::create($request->validated());

        return redirect()->route('admin.assignments.index', $request->url_query_parameters)->withSuccess(__('Successfully created'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Assignment $assignment)
    {
        return inertia()->modal('Admin/Business/Assignments/Create', [
            'data'            => [
                'title'                => __('Edit Assignment'),
                'urls'                 => [
                    'submit_form' => route('admin.assignments.update', $assignment->id),
                ],
                'dropdowns'            => [
                    'services'          => Service::active()->get(),
                    'author_levels' => AuthorLevel::get(),
                    'urgencies'         => Urgency::all(),
                ],
                'service_types'        => ServiceType::getForFrontEnd(),
                'url_query_parameters' => $this->getQueryParameterPreviousUrl(),
            ],
            'existing_record' => $assignment,
        ])->baseRoute('admin.assignments.index', $this->getQueryParameterPreviousUrl());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreAssignmentRequest $request, Assignment $assignment)
    {
        $assignment->fill($request->validated())->update();

        return redirect()->route('admin.assignments.index', $request->url_query_parameters)->withSuccess(__('Successfully updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Assignment $assignment)
    {
        $redirect = redirect()->route('admin.assignments.index', $this->getQueryParameterPreviousUrl());
        try {
            $assignment->delete();
            $redirect->withSuccess(__('Successfully deleted'));
        } catch (\Illuminate\Database\QueryException$e) {
            $redirect->withFail(__('You cannot delete the item as it is associated with one or multiple orders'));
        } catch (\Exception$e) {
            $redirect->withFail(__('Could not perform the requested action'));
        }

        return $redirect;
    }

    private function getQueryParameterPreviousUrl()
    {
        $parsed_url = parse_url(url()->previous());
        if (isset($parsed_url['query']) && $parsed_url['query']) {
            return $parsed_url['query'];
        };
    }
}

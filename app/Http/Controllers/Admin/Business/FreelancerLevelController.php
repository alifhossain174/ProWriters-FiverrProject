<?php

namespace App\Http\Controllers\Admin\Business;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFreelancerLevelRequest;
use App\Models\Business\FreelancerLevel;
use Illuminate\Http\Request;

class FreelancerLevelController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return inertia('Admin/Business/FreelancerLevels/Index', [
            'data'              => [
                'title' => __('Freelancer Levels'),
            ],
            'filters'           => $request->only('filters'),
            'freelancer_levels' => FreelancerLevel::query()
                ->when($request->filled('filters.search'), function ($q) use ($request) {
                    return $q->where('name', 'like', '%' . $request->filters['search'] . '%');
                })
                ->orderBy('numeric_value', 'ASC')
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia()->modal('Admin/Business/FreelancerLevels/Create', [
            'data' => [
                'title'     => __('Add Freelancer Level'),
                'dropdowns' => FreelancerLevel::dropdowns(),
            ],
        ])->baseRoute($this->getRedirectRoute());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFreelancerLevelRequest $request)
    {
        $data = $request->validated();
        FreelancerLevel::create(array_merge($data, $this->markPopularAndDefault($data['is_default'], $data['is_popular'])));

        return redirect()->route($this->getRedirectRoute())->withSuccess(__('Successfully created'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(FreelancerLevel $freelancerLevel)
    {
        return inertia()->modal('Admin/Business/FreelancerLevels/Create', [
            'data'            => [
                'title'     => __('Edit Freelancer Level'),
                'dropdowns' => FreelancerLevel::dropdowns(),
            ],
            'existing_record' => $freelancerLevel,
        ])->baseRoute($this->getRedirectRoute());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreFreelancerLevelRequest $request, FreelancerLevel $freelancerLevel)
    {
        $data = $request->validated();

        $freelancerLevel->fill($data)->update();

        $boolean_columns = null;

        if ($data['is_popular']) {
            $boolean_columns['is_popular'] = null;
        }

        if ($data['is_default']) {
            $boolean_columns['is_default'] = null;
        }
        if ($boolean_columns) {
            FreelancerLevel::where('id', '<>', $freelancerLevel->id)->update($boolean_columns);
        }

        return redirect()->route($this->getRedirectRoute())->withSuccess(__('Successfully updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(FreelancerLevel $freelancerLevel)
    {
        $redirect = redirect()->route($this->getRedirectRoute());

        if ($freelancerLevel->is_default == true) {
            $redirect->withFail(__('Cannot delete a default level'));
        } else if ($freelancerLevel->is_popular == true) {
            $redirect->withFail(__('Cannot delete a popular level'));
        } else {
            try {
                $freelancerLevel->delete();
                $redirect->withSuccess(__('Successfully deleted'));
            } catch (\Illuminate\Database\QueryException$e) {
                $redirect->withFail(__('You cannot delete the item as it is associated with one or multiple orders'));
            } catch (\Exception$e) {
                $redirect->withFail(__('Could not perform the requested action'));
            }
        }

        return $redirect;
    }

    private function getRedirectRoute()
    {
        return 'admin.freelancerLevels.index';
    }

    private function markPopularAndDefault($is_default, $is_popular)
    {
        $data = [
            'is_default' => $is_default,
            'is_popular' => $is_popular,
        ];
        $is_default_count = FreelancerLevel::where('is_default', true)->count();
        $is_popular_count = FreelancerLevel::where('is_popular', true)->count();

        if ($is_default_count == 0) {
            $data['is_default'] = true;
        }
        if ($is_popular_count == 0) {
            $data['is_popular'] = true;
        }

        return $data;
    }
}

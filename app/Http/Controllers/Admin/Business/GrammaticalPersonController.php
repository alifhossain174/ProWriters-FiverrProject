<?php

namespace App\Http\Controllers\Admin\Business;

use App\Http\Controllers\Controller;
use App\Models\Business\GrammaticalPerson;
use Illuminate\Http\Request;

class GrammaticalPersonController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return inertia('Admin/Business/GrammaticalPeople/Index', [
            'data'               => [
                'title' => __('Grammatical People'),
            ],
            'filters'            => $request->only('filters'),
            'grammatical_people' => GrammaticalPerson::query()
                ->when($request->filled('filters.search'), function ($q) use ($request) {
                    return $q->where('name', 'like', '%' . $request->filters['search'] . '%');
                })
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
        return inertia()->modal('Admin/Business/GrammaticalPeople/Create', [
            'data' => [
                'title' => __('Add Grammatical Person'),
            ],
        ])->baseRoute($this->getRedirectRoute());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        GrammaticalPerson::create($request->validate([
            'name' => 'required|string|max:192|unique:grammatical_people,name',
        ]));

        return redirect()->route($this->getRedirectRoute())->withSuccess(__('Successfully created'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(GrammaticalPerson $grammaticalPerson)
    {
        return inertia()->modal('Admin/Business/GrammaticalPeople/Create', [
            'data'            => [
                'title' => __('Edit Grammatical Person'),
            ],
            'existing_record' => $grammaticalPerson,
        ])->baseRoute($this->getRedirectRoute());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GrammaticalPerson $grammaticalPerson)
    {
        $grammaticalPerson->fill($request->validate([
            'name' => 'required|string|max:192|unique:grammatical_people,name,' . $grammaticalPerson->id,
        ]))->update();

        return redirect()->route($this->getRedirectRoute())->withSuccess(__('Successfully updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(GrammaticalPerson $grammaticalPerson)
    {
        $redirect = redirect()->route($this->getRedirectRoute());
        try {
            $grammaticalPerson->delete();
            $redirect->withSuccess(__('Successfully deleted'));
        } catch (\Illuminate\Database\QueryException$e) {
            $redirect->withFail(__('You cannot delete the item as it is associated with one or multiple orders'));
        } catch (\Exception$e) {
            $redirect->withFail(__('Could not perform the requested action'));
        }

        return $redirect;
    }

    private function getRedirectRoute()
    {
        return 'admin.grammaticalPeople.index';
    }
}

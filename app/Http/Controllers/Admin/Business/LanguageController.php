<?php

namespace App\Http\Controllers\Admin\Business;

use App\Http\Controllers\Controller;
use App\Models\Business\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return inertia('Admin/Business/Languages/Index', [
            'data'      => [
                'title' => __('Languages'),
            ],
            'filters'   => $request->only('filters'),
            'languages' => Language::query()
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
        return inertia()->modal('Admin/Business/Languages/Create', [
            'data' => [
                'title' => __('Add Language'),
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
        $data = $request->validate([
            'name'       => 'required|string|max:192|unique:languages,name',
            'percentage' => config('app.validation_rules.percentage'),
        ]);
        $data['available_for_content_writing'] = true;
        Language::create($data);

        return redirect()->route($this->getRedirectRoute())->withSuccess(__('Successfully created'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Language $language)
    {
        return inertia()->modal('Admin/Business/Languages/Create', [
            'data'            => [
                'title' => __('Edit Language'),
            ],
            'existing_record' => $language,
        ])->baseRoute($this->getRedirectRoute());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Language $language)
    {
        $data = $request->validate([
            'name'       => 'required|string|max:192|unique:languages,name,' . $language->id,
            'percentage' => config('app.validation_rules.percentage'),

        ]);

        $data['available_for_content_writing'] = true;

        $language->fill($data)->update();

        return redirect()->route($this->getRedirectRoute())->withSuccess(__('Successfully updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Language $language)
    {
        $redirect = redirect()->route($this->getRedirectRoute());

        try {
            $language->delete();
            $redirect->withSuccess(__('Successfully deleted'));
        } catch (\Illuminate\Database\QueryException$e) {
            $redirect->withFail(__('You cannot delete the service as it is associated with one or multiple orders'));
        } catch (\Exception$e) {
            $redirect->withFail(__('Could not perform the requested action'));
        }
        return $redirect;
    }

    private function getRedirectRoute()
    {
        return 'admin.languages.index';
    }
}

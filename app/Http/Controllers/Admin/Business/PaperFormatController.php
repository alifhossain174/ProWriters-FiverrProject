<?php

namespace App\Http\Controllers\Admin\Business;

use App\Http\Controllers\Controller;
use App\Models\Business\PaperFormat;
use Illuminate\Http\Request;

class PaperFormatController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return inertia('Admin/Business/PaperFormats/Index', [
            'data'          => [
                'title' => __('Paper Formats'),
            ],
            'filters'       => $request->only('filters'),
            'paper_formats' => PaperFormat::query()
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
        return inertia()->modal('Admin/Business/PaperFormats/Create', [
            'data' => [
                'title' => __('Add Paper Format'),
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
        PaperFormat::create($request->validate([
            'name' => 'required|string|max:192|unique:paper_formats,name',
        ]));

        return redirect()->route($this->getRedirectRoute())->withSuccess(__('Successfully created'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(PaperFormat $paperFormat)
    {
        return inertia()->modal('Admin/Business/PaperFormats/Create', [
            'data'            => [
                'title' => __('Edit Paper Format'),
            ],
            'existing_record' => $paperFormat,
        ])->baseRoute($this->getRedirectRoute());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PaperFormat $paperFormat)
    {
        $paperFormat->fill($request->validate([
            'name' => 'required|string|max:192|unique:paper_formats,name,' . $paperFormat->id,

        ]))->update();

        return redirect()->route($this->getRedirectRoute())->withSuccess(__('Successfully updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PaperFormat $paperFormat)
    {
        $redirect = redirect()->route($this->getRedirectRoute());
        try {
            $paperFormat->delete();
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
        return 'admin.paperFormats.index';
    }
}

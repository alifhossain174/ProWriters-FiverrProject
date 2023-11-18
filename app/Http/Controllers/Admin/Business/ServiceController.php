<?php

namespace App\Http\Controllers\Admin\Business;

use App\Enums\ServiceType;
use App\Http\Controllers\Controller;
use App\Models\Business\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('Admin/Business/Services/Index', [
            'data' => [
                'title'    => __('Services'),
                'icons'    => ServiceType::icons(),
                'services' => Service::all(),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        return inertia()->modal('Admin/Business/Services/Edit', [
            'data'            => [
                'title'         => __('Edit Service'),
                'service_types' => ServiceType::getForFrontEnd(),
            ],
            'existing_record' => $service,
        ])->baseRoute('admin.services.index');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
        $service->fill($request->validate([
            'name'                              => 'required|max:192',
            'minimum_order_quantity'            => 'required|integer',
            'allowed_file_extensions'           => 'required|max:192',
            'maximum_file_size'                 => 'required|integer',
            'maximum_number_of_files_to_upload' => 'required|integer',
            'disable_writing'                   => 'nullable|boolean',
            'disable_editing'                   => 'nullable|boolean',
            'disable_proofreading'              => 'nullable|boolean',
            'inactive'                          => 'nullable|boolean',
        ]))->update();

        return redirect()->route('admin.services.index')->withSuccess(__('Successfully updated'));
    }

}

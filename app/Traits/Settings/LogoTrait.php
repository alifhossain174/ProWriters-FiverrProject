<?php

namespace App\Traits\Settings;

use App\Models\Setting;
use Illuminate\Http\Request;

trait LogoTrait
{

    public function logoAndImages()
    {
        return inertia('Admin/Settings/LogoAndImages', [
            'records' => $this->getRecords(array_keys(Setting::logoAndImagesFields())),
            'data'    => [
                'title' => __('Logo and Images'),
            ],
        ]);

    }

    public function updateLogoAndImages(Request $request)
    {
        $this->saveRecords($request->validate(Setting::logoAndImagesFields()));
        return redirect()->back()->withSuccess(__('Successfully updated'));
    }

}

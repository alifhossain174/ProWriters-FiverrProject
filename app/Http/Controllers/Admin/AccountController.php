<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Services\AvatarUploadService;
use Illuminate\Validation\Rules\Password;
use App\Http\Requests\ChangeProfilePhotoRequest;

class AccountController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        return inertia('Admin/Account/Edit', [
            'data' => [
                'title' => __('Contact Information'),
                'urls' => [
                    'submit_form' => route('admin.account.update'),
                ]
            ],
            'admin' => auth()->user(),
        ]);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . auth()->user()->id,
            'phone' => 'required|string|max:255',
        ]);

        $user = auth()->user();
        $user->update($data);

        return redirect()->back()->withSuccess(__('Account updated successfully.'));
    }

    function location(Request $request)
    {
        $admin = auth()->user();

        return inertia('Admin/Account/Location', [
            'data' => [
                'title' => __('Location'),
                'urls' => [
                    'submit_form' => route('admin.account.location.update'),
                ],
                'dropdowns' => [
                    'countries' => Country::all(),
                    'timezones' => User::getTimeZones(),
                ]
            ],
            'admin' => $admin,
        ]);
    }

    public function updateLocation(Request $request)
    {
        $data = $request->validate([
            'country_code' => 'required',
            'timezone' => 'required',
        ]);

        auth()->user()->update([
            'country_code' => $data['country_code'],
            'timezone' => $data['timezone'],
        ]);

        return redirect()->back()->withSuccess(__('Account updated successfully'));
    }



    public function password(Request $request)
    {
        return inertia('Admin/Account/ChangePassword', [
            'data' => [
                'title' => __('Change Password'),
                'urls' => [
                    'submit_form' => route('admin.account.password.update'),
                ]
            ],
            'admin' => auth()->user(),
        ]);
    }

    public function updatePassword(Request $request)
    {
        $password = auth()->user()->password;

        $request->validate([
            'current_password' => [
                'required',
                function ($attribute, $value, $fail) use ($password) {
                    if (!Hash::check($value, $password)) {
                        return $fail(__('Current password is not valid'));
                    }
                }
            ],
            'password' => ['required', Password::min(8)
                ->mixedCase()
                ->numbers()
                ->symbols()
                ->uncompromised(), 'confirmed', 'different:current_password'],
        ]);



        $user = auth()->user();
        $user->password = Hash::make($request->password);
        $user->save();

     

        return redirect()->back()->withSuccess(__('Password updated successfully'));
    }



    public function avatar()
    {
        return inertia('Admin/Account/Avatar', [
            'data' => [
                'title' => __('Change Avatar'),
                'urls' => [
                    'submit_form' => route('admin.account.avatar.update'),
                ]
            ],
            'admin' => auth()->user(),
        ]);
    }

    public function updateAvatar(ChangeProfilePhotoRequest $request, AvatarUploadService $avatar)
    {
        // Log user's activity        
        if ($avatar->upload($request, auth()->user())) {
            return redirect()->back()->withSuccess(__('Avatar updated successfully'));
        } else {
            return redirect()->back()->withError(__('Avatar could not be updated'));
        }
    }


}

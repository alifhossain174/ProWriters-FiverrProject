<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChangeProfilePhotoRequest;
use App\Models\Country;
use App\Models\Locale\SystemLanguage;
use App\Models\User;
use App\Services\AvatarUploadService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AccountController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        return inertia('Customer/Account/Edit', [
            'data'     => [
                'title'     => __('General'),
                'urls'      => [
                    'submit_form' => route('customer.account.update'),
                ],
                'dropdowns' => [
                    'countries' => Country::all(),
                    'timezones' => User::getTimeZones(),
                ],
            ],
            'customer' => auth()->user(),
        ]);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'first_name'   => 'required|string|max:255',
            'last_name'    => 'required|string|max:255',
            'email'        => 'required|string|email|max:255|unique:users,email,' . auth()->user()->id,
            'phone'        => 'required|string|max:255',
            'country_code' => 'required',
            'timezone'     => 'required',
        ]);

        $user = auth()->user();
        $user->update($data);

        return redirect()->back()->withSuccess(__('Account updated successfully.'));
    }

    public function password(Request $request)
    {
        return inertia('Customer/Account/ChangePassword', [
            'data'     => [
                'title' => __('Change Password'),
                'urls'  => [
                    'submit_form' => route('customer.account.password.update'),
                ],
            ],
            'customer' => auth()->user(),
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
                },
            ],
            'password'         => ['required', Password::min(8)
                    ->mixedCase()
                    ->numbers()
                    ->symbols()
                    ->uncompromised(), 'confirmed', 'different:current_password'],
        ]);

        $user           = auth()->user();
        $user->password = Hash::make($request->password);
        $user->save();
   
        return redirect()->back()->withSuccess(__('Password updated successfully'));
    }

    public function avatar()
    {
        return inertia('Customer/Account/Avatar', [
            'data'     => [
                'title' => __('Change Avatar'),
                'urls'  => [
                    'submit_form' => route('customer.account.avatar.update'),
                ],
            ],
            'customer' => auth()->user(),
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

    public function language()
    {
        return inertia('Customer/Account/ChangeLanguage', [
            'data'     => [
                'title'     => __('Change Language'),
                'dropdowns' => [
                    'languages' => SystemLanguage::all(),
                ],
                'urls'      => [
                    'submit_form' => route('customer.account.language.update'),
                ],
            ],
            'customer' => auth()->user(),
        ]);
    }

    public function updateLanguage(Request $request)
    {
        $request->validate([
            'language' => 'required',
        ]);

        $url     = route('customer.account.language');
        $string  = parse_url($url, PHP_URL_PATH);
        $prefix  = substr($string, 1, 2);
        $new_url = str_replace($prefix, $request->language, $url);

        // Save
        $user           = auth()->user();
        $user->language = $request->language;
        $user->save();

        return redirect()->to($new_url);
    }
}

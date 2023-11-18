<?php

namespace App\Http\Controllers\Author;

use App\Models\User;
use App\Models\Country;
use Illuminate\Http\Request;
use App\Models\Business\Service;
use App\Models\Business\Subject;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\Locale\SystemLanguage;
use App\Services\AvatarUploadService;
use App\Models\Author\EducationLevel;
use Illuminate\Validation\Rules\Password;
use App\Models\Author\AuthorProfile;
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
        return inertia('Author/Account/Edit', [
            'data'       => [
                'title' => __('Contact Information'),
                'urls'  => [
                    'submit_form' => route('author.account.update'),
                ],
            ],
            'author' => auth()->user(),
        ]);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|string|email|max:255|unique:users,email,' . auth()->user()->id,
            'phone'      => 'required|string|max:255',
        ]);

        $user = auth()->user();
        $user->update($data);

        return redirect()->back()->withSuccess(__('Account updated successfully.'));
    }

    public function location(Request $request)
    {
        $author          = auth()->user();
        $author->profile = AuthorProfile::where('user_id', auth()->user()->id)->get()->first();

        return inertia('Author/Account/Location', [
            'data'       => [
                'title'     => __('Location'),
                'urls'      => [
                    'submit_form' => route('author.account.location.update'),
                ],
                'dropdowns' => [
                    'countries' => Country::all(),
                    'timezones' => User::getTimeZones(),
                ],
            ],
            'author' => $author,
        ]);
    }

    public function updateLocation(Request $request)
    {
        $data = $request->validate([
            'address'      => 'required|string|max:400',
            'state'        => 'required|string|max:192',
            'city'         => 'required|string|max:192',
            'country_code' => 'required',
            'timezone'     => 'required',
        ]);

        AuthorProfile::where('user_id', auth()->user()->id)->update([
            'address' => $data['address'],
            'state'   => $data['state'],
            'city'    => $data['city'],
        ]);

        auth()->user()->update([
            'country_code' => $data['country_code'],
            'timezone'     => $data['timezone'],
        ]);

        return redirect()->back()->withSuccess(__('Account updated successfully.'));
    }

    public function skill(Request $request)
    {
        $author          = auth()->user();
        $author->profile = AuthorProfile::where('user_id', auth()->user()->id)->get()->first();

        return inertia('Author/Account/Skill', [
            'data'       => [
                'title'     => __('Skill & Experience'),
                'urls'      => [
                    'submit_form' => route('author.account.skill.update'),
                ],
                'dropdowns' => [
                    'education_levels' => EducationLevel::all(),
                    'subjects'         => Subject::all(),
                ],
            ],
            'author' => $author,
        ]);
    }

    public function updateSkill(Request $request)
    {
        $data = $request->validate([
            'education_level_id'   => 'required',
            'years_of_experience'  => 'required|integer',
            'subject_id_1'         => 'required',
            'subject_id_2'         => 'required',
            'subject_id_3'         => 'required',
            'blog_url'             => 'nullable',
            'online_portfolio_url' => 'nullable',
            'linked_in_url'        => 'nullable',

        ], [], [
            'education_level_id'   => __('Education Level'),
            'years_of_experience'  => __('Years of Experience'),
            'subject_id_1'         => __('Area of Expertise'),
            'subject_id_2'         => __('Area of Expertise'),
            'subject_id_3'         => __('Area of Expertise'),
            'blog_url'             => __('Blog URL'),
            'online_portfolio_url' => __('Online Portfolio URL'),
            'linked_in_url'        => __('LinkedIn URL'),
        ]);

        AuthorProfile::where('user_id', auth()->user()->id)->update([
            'education_level_id'   => $data['education_level_id'],
            'years_of_experience'  => $data['years_of_experience'],
            'subject_id_1'         => $data['subject_id_1'],
            'subject_id_2'         => $data['subject_id_2'],
            'subject_id_3'         => $data['subject_id_3'],
            'blog_url'             => $data['blog_url'],
            'online_portfolio_url' => $data['online_portfolio_url'],
            'linked_in_url'        => $data['linked_in_url'],
        ]);

        return redirect()->back()->withSuccess(__('Successfully updated'));
    }

    public function password(Request $request)
    {
        return inertia('Author/Account/ChangePassword', [
            'data'       => [
                'title' => __('Change Password'),
                'urls'  => [
                    'submit_form' => route('author.account.password.update'),
                ],
            ],
            'author' => auth()->user(),
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
        return inertia('Author/Account/Avatar', [
            'data'       => [
                'title' => __('Change Avatar'),
                'urls'  => [
                    'submit_form' => route('author.account.avatar.update'),
                ],
            ],
            'author' => auth()->user(),
        ]);
    }

    public function updateAvatar(ChangeProfilePhotoRequest $request, AvatarUploadService $avatar)
    {         
        if ($avatar->upload($request, auth()->user())) {
            return redirect()->back()->withSuccess(__('Avatar updated successfully'));
        } else {
            return redirect()->back()->withError(__('Avatar could not be updated'));
        }
    }

    public function paymentSettings(Request $request)
    {
        $author          = auth()->user();
        $author->profile = AuthorProfile::select(['payment_method', 'payment_method_details'])
            ->where('user_id', auth()->user()->id)->get()->first();

        return inertia('Author/Account/PaymentSettings', [
            'data'       => [
                'title' => __('Payment Settings'),
                'urls'  => [
                    'submit_form' => route('author.account.payment.settings.update'),
                ],
            ],
            'author' => $author,
        ]);
    }

    public function updatePaymentSettings(Request $request)
    {
        AuthorProfile::where('user_id', auth()->user()->id)->update($request->validate([
            'payment_method'         => 'required|string|max:100',
            'payment_method_details' => 'required|string|max:100',

        ], [], [
            'payment_method'         => __('Payment Method'),
            'payment_method_details' => __('Payment Method Details'),
        ]));

        return redirect()->back()->withSuccess(__('Account updated successfully.'));
    }

    public function bio(Request $request)
    {
        $author          = auth()->user();
        $author->profile = AuthorProfile::select(['bio'])
            ->where('user_id', auth()->user()->id)->get()->first();

        return inertia('Author/Account/Bio', [
            'data'       => [
                'title' => __('Bio'),
                'urls'  => [
                    'submit_form' => route('author.account.bio.update'),
                ],
            ],
            'author' => $author,
        ]);
    }

    public function updateBio(Request $request)
    {
        AuthorProfile::where('user_id', auth()->user()->id)->update($request->validate([
            'bio' => 'required|string|min:100|max:3000',

        ], [], [
            'bio' => __('Bio'),

        ]));

        return redirect()->back()->withSuccess(__('Account updated successfully.'));
    }

    public function language()
    {
        return inertia('Author/Account/ChangeLanguage', [
            'data'     => [
                'title'     => __('Change Language'),
                'dropdowns' => [
                    'languages' => SystemLanguage::all(),
                ],
                'urls'      => [
                    'submit_form' => route('author.account.language.update'),
                ],
            ],
            'author' => auth()->user(),
        ]);
    }

    public function updateLanguage(Request $request)
    {
        $request->validate([
            'language' => 'required',
        ]);

        $url     = route('author.account.language');
        $string  = parse_url($url, PHP_URL_PATH);
        $prefix  = substr($string, 1, 2);
        $new_url = str_replace($prefix, $request->language, $url);

        // Save
        $user           = auth()->user();
        $user->language = $request->language;
        $user->save();

        return redirect()->to($new_url);
    }

    public function profile()
    {
        $user = auth()->user();

        $profile = AuthorProfile::with(['authorLevel'])            
            ->where('user_id', $user->id)->get()->first();

            return inertia('Author/Account/Profile', [
                'data'       => [
                    'title' => __('Your Services and Rates'),
                    'services'  => Service::select(['id', 'name'])->whereIn('id', array_filter([
                        $profile->service_id_1,
                        $profile->service_id_2,
                        $profile->service_id_3,                 
                    ]))->get(),    
                    'author_level' => $profile->authorLevel,
                ],
                'author' => $user,
            ]);
    }
}

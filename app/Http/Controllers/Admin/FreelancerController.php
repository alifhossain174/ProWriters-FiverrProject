<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\ChangeProfilePhotoRequest;
use App\Http\Requests\StoreFreelancerRequest;
use App\Models\Billing\Bill;
use App\Models\Business\FreelancerLevel;
use App\Models\Business\Service;
use App\Models\Business\Subject;
use App\Models\Country;
use App\Models\Freelancer\EducationLevel;
use App\Models\Freelancer\FreelancerProfile;
use App\Models\ProjectManagement\Task;
use App\Models\User;
use App\Services\AvatarUploadService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules\Password;

class FreelancerController extends Controller
{

    public function index(Request $request)
    {
        return inertia('Admin/Freelancers/Index', [
            'data'        => function () {
                // ALWAYS included on first visit
                // OPTIONALLY included on partial reloads
                // ONLY evaluated when needed
                return [
                    'title'     => __('Freelancers'),
                    'dropdowns' => [
                        'services'          => Service::active()->get(),
                        'subjects'          => Subject::all(),
                        'education_levels'  => EducationLevel::all(),
                        'freelancer_levels' => FreelancerLevel::all(),
                    ],
                    'urls'      => [
                        'new_item' => route('admin.freelancers.create'),
                        'search'   => route('admin.freelancers.index'),
                    ],
                ];
            },
            'filters'     => $request->only('filters'),
            'freelancers' => User::freelancers(true)
                ->select(['uuid', 'code', 'first_name', 'last_name', 'email', 'phone', 'photo', 'last_login_at', 'inactive', 'freelancer_levels.name AS freelancer_level_name', 'education_levels.name AS education_level_name'])
                ->join('freelancer_profiles', 'freelancer_profiles.user_id', '=', 'users.id')
                ->join('education_levels', 'education_levels.id', '=', 'freelancer_profiles.education_level_id')
                ->join('freelancer_levels', 'freelancer_levels.id', '=', 'freelancer_profiles.freelancer_level_id')
                ->when($request->filled('filters.name'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {
                        return $subQuery->where('first_name', 'like', '%' . $request->filters['name'] . '%')
                            ->orWhere('last_name', 'like', '%' . $request->filters['name'] . '%');
                    });
                })
                ->when($request->filled('filters.code'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {
                        return $subQuery->where('code', 'like', '%' . $request->filters['code'] . '%');
                    });
                })
                ->when($request->filled('filters.email'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {
                        return $subQuery->where('email', 'like', '%' . $request->filters['email'] . '%');
                    });
                })
                ->when($request->filled('filters.education_level_id'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {
                        return $subQuery
                            ->where('education_level_id', $request->filters['education_level_id']);
                    });
                })
                ->when($request->filled('filters.freelancer_level_id'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {
                        return $subQuery
                            ->where('freelancer_level_id', $request->filters['freelancer_level_id']);
                    });
                })
                ->when($request->filled('filters.service_id'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {
                        return $subQuery
                            ->where('service_id_1', $request->filters['service_id'])
                            ->orWhere('service_id_2', $request->filters['service_id'])
                            ->orWhere('service_id_3', $request->filters['service_id']);
                    });
                })
                ->when($request->filled('filters.subject_id'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {
                        return $subQuery
                            ->where('subject_id_1', $request->filters['subject_id'])
                            ->orWhere('subject_id_2', $request->filters['subject_id'])
                            ->orWhere('subject_id_3', $request->filters['subject_id'])
                            ->orWhere('subject_id_4', $request->filters['subject_id'])
                            ->orWhere('subject_id_5', $request->filters['subject_id']);
                    });
                })

                ->when(!(is_boolean_true($request->input('filters.inactive'))), function ($q) {
                    return $q->active();
                })
                ->orderBy('users.id', 'ASC')
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),
        ]);
    }

    public function create()
    {
        return inertia()->modal('Admin/Freelancers/Create', [
            'data' => [
                'title'     => __('Add freelancer'),
                'urls'      => [
                    'submit_form' => route('admin.freelancers.store'),
                ],
                'dropdowns' => [
                    'countries'         => Country::all(),
                    'timezones'         => User::getTimeZones(),
                    'education_levels'  => EducationLevel::all(),
                    'subjects'          => Subject::all(),
                    'services'          => Service::all(),
                    'freelancer_levels' => FreelancerLevel::all(),
                ],
            ],
        ])->baseRoute('admin.freelancers.index');
    }

    public function store(StoreFreelancerRequest $request, UserService $userService)
    {
        $user = $userService->createFreelancer($request->validated());
        return redirect()->route('admin.freelancers.show', $user->uuid)->withSuccess(__('Successfully created'));
    }

    public function show(User $user)
    {
        $user->load('country');

        $user->profile = FreelancerProfile::with(['educationLevel', 'freelancerLevel'])
            ->where('user_id', $user->id)->get()->first();

        return inertia('Admin/Freelancers/Show', [
            'data' => [
                'title'      => __('Freelancer Profile'),
                'services'   => Service::select(['id', 'name'])->whereIn('id', array_filter([
                    $user->profile->service_id_1,
                    $user->profile->service_id_2,
                    $user->profile->service_id_3,
                ]))->get(),

                'subjects' => Subject::whereIn('id', array_filter([
                    $user->profile->subject_id_1,
                    $user->profile->subject_id_2,
                    $user->profile->subject_id_3,
                    $user->profile->subject_id_4,
                    $user->profile->subject_id_5,
                ]))->get(),
            ],
            'freelancer' => $user,
        ]);
    }

    public function edit(User $user)
    {
        $freelancer = $user->only([
            'id',
            'uuid',
            'photo',
            'small_avatar',
            'first_name',
            'last_name',
            'email',
            'phone',
            'country_code',
            'timezone',
            'language',
            'inactive',
        ]);
        $freelancer['profile'] = FreelancerProfile::where('user_id', $user->id)->get()->first();

        return inertia('Admin/Freelancers/Edit', [
            'data'       => [
                'title'     => __('Edit Profile'),
                'urls'      => [
                    'submit_form' => route('admin.freelancers.update', $user->uuid),
                ],
                'dropdowns' => [
                    'countries'         => Country::all(),
                    'timezones'         => User::getTimeZones(),
                    'education_levels'  => EducationLevel::all(),
                    'subjects'          => Subject::all(),
                    'services'          => Service::all(),
                    'freelancer_levels' => FreelancerLevel::all(),
                ],
            ],
            'freelancer' => $freelancer,
        ]);
    }

    public function update(StoreFreelancerRequest $request, User $user, FreelancerProfile $userProfile)
    {
        $data = $request->validated();

        User::find($user->id)->fill($data)->update();

        foreach ($data as $key => $value) {
            if (in_array($key, $userProfile->getFillable())) {
                $profile_data[$key] = $value;
            }
        }

        FreelancerProfile::where('user_id', $user->id)->update($profile_data);

        return redirect()->route('admin.freelancers.show', $user->uuid)->withSuccess(__('Successfully updated'));
    }

    public function destroy(User $user)
    {
        $redirect = redirect()->route('admin.freelancers.index');

        DB::beginTransaction();

        try {

            FreelancerProfile::where('user_id', $user->id)->delete();
            $user->delete();
            $redirect->withSuccess(__('Successfully deleted'));
            DB::commit();
            
        } catch (\Illuminate\Database\QueryException$e) {
            $redirect->withFail(__('You cannot delete the user as he/she is associated with one or multiple entities'));
            DB::rollback();
        } catch (\Exception$e) {
            $redirect->withFail(__('Could not perform the requested action'));
            DB::rollback();
        }

        return $redirect;
    }

    public function password(User $user)
    {
        return inertia()->modal('Admin/Shared/ChangePassword', [
            'data' => [
                'title' => __('Change Password'),
                'urls'  => [
                    'submit_form' => route('admin.freelancers.password.update', $user->uuid),
                ],
            ],
        ])->baseRoute('admin.freelancers.show', $user->uuid);
    }

    public function updatePassword(ChangePasswordRequest $request, User $user, UserService $userService)
    {
        $userService->changePassword($user, $request->password);

        return redirect()->route('admin.freelancers.show', $user->uuid)->withSuccess(__('Successfully updated'));
    }

    public function avatar(User $user)
    {
        return inertia()->modal('Admin/Shared/ChangeAvatar', [
            'data' => [
                'title' => __('Change Avatar'),
                'urls'  => [
                    'submit_form' => route('admin.freelancers.avatar.update', $user->uuid),
                ],
            ],
        ])->baseRoute('admin.freelancers.show', $user->uuid);
    }

    public function updateAvatar(ChangeProfilePhotoRequest $request, User $user, AvatarUploadService $avatar)
    {
        if ($avatar->upload($request, $user)) {
            return redirect()->route('admin.freelancers.show', $user->uuid)->withSuccess(__('Successfully updated'));
        } else {
            return redirect()->back()->withError(__('Avatar could not be updated'));
        }
    }

    public function tasks(Request $request, User $user)
    {
        return inertia('Admin/Freelancers/Tasks', [
            'data'       => [
                'title' => __('Tasks'),
            ],
            'freelancer' => $user,
            'filters'    => $request->only('filters'),
            'tasks'      => Task::with(['status', 'service'])
                ->where('freelancer_id', $user->id)
                ->orderBy('id', 'DESC')
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),
        ]);
    }

    public function bills(Request $request, User $user)
    {
        return inertia('Admin/Freelancers/Bills', [
            'data'       => [
                'title' => __('Bills'),
            ],
            'freelancer' => $user,
            'filters'    => $request->only('filters'),
            'bills'      => Bill::where('freelancer_id', $user->id)
                ->orderBy('id', 'DESC')
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),
        ]);
    }

    // public function search(Request $request)
    // {
    //     $data = User::freelancers()->select(['id', 'first_name', 'last_name', 'email'])
    //         ->where('first_name', 'like', '%' . $request->q . '%')
    //         ->orWhere('last_name', 'like', '%' . $request->q . '%')
    //         ->orWhere('email', 'like', '%' . $request->q . '%')
    //     // ->orderBy('first_name', 'ASC')
    //         ->get();

    //     if ($request->q) {
    //         return response()->json(['items' => $data, 'total_count' => $data->count()]);
    //     }
    // }

}

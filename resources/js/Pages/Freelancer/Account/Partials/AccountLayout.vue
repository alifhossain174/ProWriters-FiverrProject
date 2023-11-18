<template>
  <section class="d-flex align-items-end navbar-background">
    <div class="container pt-4 pt-lg-0">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="mb-4 mt-4">
            <div class="mx-auto">
              <img
                alt="Image placeholder"
                :src="freelancer.small_avatar"
                class="
                  card-profile-image
                  avatar
                  rounded-circle
                  shadow
                  hover-shadow-lg
                  freelancer-avatar
                "
              />
            </div>

            <span class="h2 mb-0 text-white d-block">{{
              freelancer.full_name
            }}</span>
            <div class="text-white">
              {{ freelancer.code }}
            </div>
            <div>
              <span class="badge bg-secondary me-2">{{
                __("Freelancer")
              }}</span>

              <span v-if="freelancer.inactive" class="badge bg-danger">{{
                __("Inactive")
              }}</span>
            </div>
          </div>

          <!-- Account navigation -->
          <!-- <div class="d-flex">
            <div class="btn-group" role="group">
              <Link
                :href="route('admin.freelancers.edit', freelancer.uuid)"
                class="btn btn-light"
              >
                <i class="fa-solid fa-user"></i>
                {{ __("Edit Profile") }}
              </Link>

              <Link
                class="btn btn-light"
                :href="route('admin.freelancers.show', freelancer.uuid)"
              >
                <i class="far fa-address-card"></i> {{ __("Profile") }}
              </Link>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>

  <section class="pt-md-5 pt-lg-0">
    <div class="container page-container">
      <div class="row mt-4">
        <div class="col-md-4">
          <ul class="list-group sticky-top">
            <li class="list-group-item">
              <div>
                <Link :href="route('freelancer.account.edit')">{{
                  __("Contact Information")
                }}</Link>
              </div>
            </li>
            <li class="list-group-item">
              <div>
                <Link :href="route('freelancer.account.location')">{{
                  __("Location")
                }}</Link>
              </div>
            </li>
             <li class="list-group-item">
              <div>
                <Link :href="route('freelancer.account.bio')">{{
                  __("Bio")
                }}</Link>
              </div>
            </li>
            <li class="list-group-item">
              <div>
                <Link :href="route('freelancer.account.skill')">{{
                  __("Skill & Experience")
                }}</Link>
              </div>
            </li>
            <li class="list-group-item">
              <div>
                <Link :href="route('freelancer.account.payment.settings')">{{
                  __("Payment")
                }}</Link>
              </div>
            </li>
            <li class="list-group-item">
              <div>
                <Link :href="route('freelancer.account.avatar')">{{
                  __("Avatar")
                }}</Link>
              </div>
            </li>
            <li class="list-group-item">
              <div>
                <Link :href="route('freelancer.account.password')">{{
                  __("Password")
                }}</Link>
              </div>
            </li>
            <li class="list-group-item" v-if="!$page.props.is_single_language">
              <div>
                <Link :href="route('freelancer.account.language')">{{
                  __("Language")
                }}</Link>
              </div>
            </li>
            <li class="list-group-item">
              <div>
                <Link :href="route('freelancer.account.profile')">{{
                  __("Your Services and Rates")
                }}</Link>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-md-8">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["freelancer"],
};
</script>
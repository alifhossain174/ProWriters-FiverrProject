<template>
  <AppHead :title="data.title" />
  <ProfileLayout :freelancer="freelancer">
    <div class="card">
      <div class="card-body">
        <h5>{{ __("Career Summary") }}</h5>
        <div class="pre-formatted" v-html="freelancer.profile.bio"></div>
        <hr />

        <h5>{{ __("General Information") }}</h5>
        <table class="table table-bordered">
          <tr v-for="(row, index) in general" :key="index">
            <td class="text-muted text-left">{{ row.label }}</td>
            <td class="text-left">{{ row.value }}</td>
          </tr>
        </table>

        <h5>{{ __("Services") }}</h5>
        <template v-for="(service, index) in data.services" :key="index">
          <span
            v-if="service"
            class="badge badge-lg badge-soft-primary me-2 mb-2"
            >{{ service.name }}</span
          >
        </template>

        <hr />
        <h5>{{ __("Subjects") }}</h5>
        <template v-for="(subject, index) in data.subjects" :key="index">
          <span
            v-if="subject"
            class="badge badge-lg badge-soft-primary me-2 mb-2"
            >{{ subject.name }}</span
          >
        </template>

        <hr />
        <h5>{{ __("Freelancer Level") }} {{ __("&") }} {{ __("Rate") }}</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>{{ __("Name") }}</th>
              <th class="text-end">{{ __("Writing") }}</th>
              <th class="text-end">{{ __("Editing") }}</th>
              <th class="text-end">{{ __("Proofreading") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-muted text-left">
                {{ freelancer.profile.freelancer_level.name }}
              </td>
              <td class="text-end">
                {{
                  freelancer.profile.freelancer_level
                    .freelancer_price_per_word_writing
                }}
                <div>
                  <small class="text-muted">{{ __("Per word price") }}</small>
                </div>
              </td>
              <td class="text-end">
                {{
                  freelancer.profile.freelancer_level
                    .freelancer_price_per_word_editing
                }}
                <div>
                  <small class="text-muted">{{ __("Per word price") }}</small>
                </div>
              </td>
              <td class="text-end">
                {{
                  freelancer.profile.freelancer_level
                    .freelancer_price_per_word_proofreading
                }}
                <div>
                  <small class="text-muted">{{ __("Per word price") }}</small>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <h5>{{ __("Payment method") }}</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>{{ __("Name") }}</th>
              <th>{{ __("Details") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-muted">
                {{ freelancer.profile.payment_method }}
              </td>
              <td>
                {{ freelancer.profile.payment_method_details }}
              </td>
            </tr>
          </tbody>
        </table>

        <h5>{{ __("Links") }}</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>{{ __("Name") }}</th>
              <th>{{ __("URL") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(link, index) in links" :key="index">
              <td class="text-muted">
                {{ link.label }}
              </td>
              <td>
                <a v-if="link.value" target="_blank" :href="link.value"
                  >{{ __("Visit") }}
                  <i class="fa-solid fa-up-right-from-square"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </ProfileLayout>
</template>

<script>
import ProfileLayout from "./Partials/ProfileLayout.vue";
export default {
  props: ["data", "freelancer"],
  components: {
    ProfileLayout,
  },
  data() {
    return {
      subjects: [
        this.getValue(this.freelancer.profile.subject_1, "name"),
        this.getValue(this.freelancer.profile.subject_2, "name"),
        this.getValue(this.freelancer.profile.subject_3, "name"),
        this.getValue(this.freelancer.profile.subject_4, "name"),
        this.getValue(this.freelancer.profile.subject_4, "name"),
      ],
      services: [
        this.getValue(this.freelancer.profile.service_1, "name"),
        this.getValue(this.freelancer.profile.service_2, "name"),
        this.getValue(this.freelancer.profile.service_3, "name"),
      ],
      general: [
        { label: this.__("ID"), value: this.freelancer.code },
        { label: this.__("Email"), value: this.freelancer.email },
        { label: this.__("Phone"), value: this.freelancer.phone },
        {
          label: this.__("Education Level"),
          value: this.freelancer.profile.education_level.name,
        },
        {
          label: this.__("Years of experience"),
          value: this.freelancer.profile.years_of_experience,
        },
        {
          label: this.__("Address"),
          value: this.freelancer.profile.address,
        },
        {
          label: this.__("City"),
          value: this.freelancer.profile.city,
        },
        {
          label: this.__("State"),
          value: this.freelancer.profile.state,
        },
        {
          label: this.__("Country"),
          value: this.freelancer.country.name,
        },
      ],
      links: [
        {
          label: this.__("Blog"),
          value: this.getValue(this.freelancer.profile, "blog_url"),
        },
        {
          label: this.__("Portfolio"),
          value: this.getValue(this.freelancer.profile, "online_portfolio_url"),
        },
        {
          label: this.__("Linkedin"),
          value: this.getValue(this.freelancer.profile, "linked_in_url"),
        },
      ],
    };
  },
  methods: {
    getValue(data, key) {
      if (data) {
        return Object.hasOwn(data, key) ? data[key] : null;
      }
      return null;
    },
  },
};
</script>
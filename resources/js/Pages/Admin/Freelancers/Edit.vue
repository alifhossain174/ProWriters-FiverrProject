<template>
  <AppHead :title="data.title" />
  <ProfileLayout :freelancer="freelancer">
    <div class="card">
      <div class="card-header h5">
        {{ data.title }}
      </div>
      <div class="card-body">
        <form @submit.prevent="form.patch(data.urls.submit_form, formConfig)">
          <div class="row">
            <div class="col">
              <Input
                v-model="form.first_name"
                :label="__('First Name')"
                name="first_name"
                :required="true"
              />
            </div>
            <div class="col">
              <Input
                v-model="form.last_name"
                :label="__('Last Name')"
                name="last_name"
                :required="true"
              />
            </div>
          </div>
          <Input
            type="email"
            v-model="form.email"
            :label="__('Email')"
            name="email"
            :required="true"
          />
          <Phone v-model="form.phone" :label="__('Phone')"/>

          <div class="w-100 p-2 bg-light mb-2 h5">{{ __("Location") }}</div>
          <div class="p-2">
            <TextArea
              v-model="form.address"
              :label="__('Address')"
              name="address"
            />
            <div class="row">
              <div class="col-md-6">
                <Input v-model="form.city" :label="__('City')" name="city" />
              </div>
              <div class="col-md-6">
                <Input v-model="form.state" :label="__('State')" name="state" />
              </div>
            </div>

            <Select
              :searchable="true"
              :reduce_key="'code'"
              :clearable="true"
              :options="data.dropdowns.countries"
              v-model="form.country_code"
              :label="__('Country')"
              :required="true"
              name="country"
            />

            <Select
              :searchable="true"
              :options="data.dropdowns.timezones"
              v-model="form.timezone"
              :label="__('Timezone')"
              :required="true"
              name="timezone"
            />
          </div>

          <div class="w-100 p-2 bg-light mb-2 h5">
            {{ __("Experience & Skill") }}
          </div>
          <div class="p-2">
            <div class="row">
              <div class="col-md-6">
                <Select
                  :searchable="true"
                  :clearable="true"
                  :options="data.dropdowns.education_levels"
                  v-model="form.education_level_id"
                  :label="__('Level of Education')"
                  :required="true"
                  name="education_level_id"
                />
              </div>
              <div class="col-md-6">
                <Input
                  type="number"
                  v-model="form.years_of_experience"
                  :label="__('Years of Experience')"
                  name="years_of_experience"
                />
              </div>
            </div>

            <Select
              :searchable="true"
              :clearable="true"
              :options="data.dropdowns.freelancer_levels"
              v-model="form.freelancer_level_id"
              :label="__('Freelancer Level')"
              :required="true"
              name="freelancer_level_id"
            />

            <Select
              :searchable="true"
              :clearable="false"
              :options="data.dropdowns.services"
              v-model="form.service_id_1"
              :label="__('Service 1')"
              :required="true"
              name="service_id_1"
            />

            <Select
              :searchable="true"
              :clearable="true"
              :options="data.dropdowns.services"
              v-model="form.service_id_2"
              :label="__('Service 2')"              
              name="service_id_2"
            />

            <Select
              :searchable="true"
              :clearable="true"
              :options="data.dropdowns.services"
              v-model="form.service_id_3"
              :label="__('Service 3')"
              name="service_id_3"
            />

            <Select
              :searchable="true"
              :clearable="false"
              :options="data.dropdowns.subjects"
              v-model="form.subject_id_1"
              :label="__('Subject 1')"
              :required="true"
              name="subject_id_1"
            />

            <Select
              :searchable="true"
              :clearable="true"
              :options="data.dropdowns.subjects"
              v-model="form.subject_id_2"
              :label="__('Subject 2')"
              name="subject_id_2"
            />
            <Select
              :searchable="true"
              :clearable="true"
              :options="data.dropdowns.subjects"
              v-model="form.subject_id_3"
              :label="__('Subject 3')"
              name="subject_id_3"
            />
            <Select
              :searchable="true"
              :clearable="true"
              :options="data.dropdowns.subjects"
              v-model="form.subject_id_4"
              :label="__('Subject 4')"
              name="subject_id_4"
            />
            <Select
              :searchable="true"
              :clearable="true"
              :options="data.dropdowns.subjects"
              v-model="form.subject_id_5"
              :label="__('Subject 5')"
              name="subject_id_5"
            />
          </div>

          <div class="w-100 p-2 bg-light mb-2 h5">
            {{ __("Payment Settings") }}
          </div>
          <div class="p-2">
            <Input
              v-model="form.payment_method"
              :label="__('Preferred method for receiving payment')"
              name="payment_method"
              :required="true"
              :placeholder="__('e.g. Paypal, Stripe, etc.')"
            />
            <Input
              v-model="form.payment_method_details"
              :label="__('Payment method details')"
              name="payment_method_details"
              :required="true"
              :placeholder="__('e.g. Email for your Paypal account')"
            />
          </div>

          <div class="w-100 p-2 bg-light mb-2 h5">{{ __("Links") }}</div>
          <div class="p-2">
            <Input
              v-model="form.blog_url"
              :label="__('Blog URL')"
              name="blog_url"
            />
            <Input
              v-model="form.online_portfolio_url"
              :label="__('Online Portfolio URL')"
              name="online_portfolio_url"
            />
            <Input
              v-model="form.linked_in_url"
              :label="__('Linkedin Public Profile URL')"
              name="linked_in_url"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">{{ __("About the freelancer") }} </label>
            <Editor v-model="form.bio" :height="'150px'" />
            <ValidationError name="bio" />
          </div>

          <div class="mt-4">
            <CheckBox
              v-model="form.inactive"
              name="inactive"
              :label="__('Inactive')"
            />
          </div>

          <SubmitButton :disabled="form.disabled" />
        </form>
      </div>
    </div>
  </ProfileLayout>
</template>

<script>
import {
  Input,
  TextArea,
  SubmitButton,
  Phone,
  Select,
  CheckBox,
} from "../../../components/Form/Index.js";
import Editor from "../../../components/Editor.vue";

import ProfileLayout from "./Partials/ProfileLayout.vue";
export default {
  props: ["data", "freelancer"],
  components: {
    ProfileLayout,
    Input,
    TextArea,
    SubmitButton,
    Phone,
    Editor,
    Select,
    CheckBox,
  },
  data() {
    return {
      form: this.$inertia.form({
        inactive: this.freelancer.inactive,
        first_name: this.freelancer.first_name,
        last_name: this.freelancer.last_name,
        email: this.freelancer.email,
        phone: this.freelancer.phone,
        bio: this.freelancer.profile.bio,
        address: this.freelancer.profile.address,
        state: this.freelancer.profile.state,
        city: this.freelancer.profile.city,
        country_code: this.freelancer.country_code,
        timezone: this.freelancer.timezone,
        payment_method: this.freelancer.profile.payment_method,
        payment_method_details: this.freelancer.profile.payment_method_details,
        education_level_id: this.freelancer.profile.education_level_id,
        years_of_experience: this.freelancer.profile.years_of_experience,
        freelancer_level_id: this.freelancer.profile.freelancer_level_id,

        service_id_1: this.freelancer.profile.service_id_1,
        service_id_2: this.freelancer.profile.service_id_2,
        service_id_3: this.freelancer.profile.service_id_3,

        subject_id_1: this.freelancer.profile.subject_id_1,
        subject_id_2: this.freelancer.profile.subject_id_2,
        subject_id_3: this.freelancer.profile.subject_id_3,
        subject_id_4: this.freelancer.profile.subject_id_4,
        subject_id_5: this.freelancer.profile.subject_id_5,
        blog_url: this.freelancer.profile.blog_url,
        online_portfolio_url: this.freelancer.profile.online_portfolio_url,
        linked_in_url: this.freelancer.profile.linked_in_url,
      }),
      formConfig: {
        preserveScroll: false,
      },
    };
  },
};
</script>
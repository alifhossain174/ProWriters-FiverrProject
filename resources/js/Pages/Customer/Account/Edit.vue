<template>
  <AppHead :title="data.title" />
  <AccountLayout :customer="customer">
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
          <Phone v-model="form.phone" :label="__('Phone')" :required="true" />

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
            :label="__('Time Zone')"
            :required="true"
            name="timezone"
          />

          <SubmitButton :disabled="form.disabled" />
        </form>
      </div>
    </div>
  </AccountLayout>
</template>

<script>
import AccountLayout from "./Partials/AccountLayout.vue";

import {
  Input,
  TextArea,
  SubmitButton,
  Phone,
  Select,
} from "../../../components/Form/Index.js";

export default {
  props: ["data", "customer"],
  components: {
    AccountLayout,
    Input,
    TextArea,
    SubmitButton,
    Phone,
    Select,
  },
  data() {
    return {
      form: this.$inertia.form({
        first_name: this.customer.first_name,
        last_name: this.customer.last_name,
        email: this.customer.email,
        phone: this.customer.phone,
        country_code: this.customer.country_code,
        timezone: this.customer.timezone,
      }),
      formConfig: {
        preserveScroll: false,
      },
    };
  },
};
</script>
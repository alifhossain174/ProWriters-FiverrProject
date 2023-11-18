<template>
  <AppHead :title="data.title" />
  <AccountLayout :admin="admin">
    <div class="card">
      <div class="card-header h5">
        {{ data.title }}
      </div>
      <div class="card-body">
        <form @submit.prevent="form.patch(data.urls.submit_form, formConfig)">
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
  props: ["data", "admin"],
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
        country_code: this.admin.country_code,
        timezone: this.admin.timezone,
      }),
      formConfig: {
        preserveScroll: false,
      },
    };
  },
};
</script>
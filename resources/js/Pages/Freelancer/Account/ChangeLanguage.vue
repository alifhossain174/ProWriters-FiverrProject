<template>
  <AppHead :title="data.title" />
  <AccountLayout :freelancer="freelancer">
    <div class="card">
      <div class="card-header h5">
        {{ data.title }}
      </div>
      <div class="card-body">
        <form @submit.prevent="form.patch(data.urls.submit_form, formConfig)">
          <Select
            :reduce_key="'iso_code'"
            :options="data.dropdowns.languages"
            v-model="form.language"
            :label="__('Language')"
            :required="true"
            name="language"
          />

          <SubmitButton :disabled="form.disabled" />
        </form>
      </div>
    </div>
  </AccountLayout>
</template>

<script>
import AccountLayout from "./Partials/AccountLayout.vue";

import { Select, SubmitButton } from "../../../components/Form/Index.js";

export default {
  props: ["data", "freelancer"],
  components: {
    AccountLayout,
    Select,
    SubmitButton,
  },
  data() {
    return {
      form: this.$inertia.form({
        language: this.freelancer.language,
      }),
      formConfig: {
        preserveScroll: false,
        onSuccess: () => location.reload(),
      },
    };
  },
};
</script>
<template>
  <AppHead :title="data.title" />
  <AccountLayout :admin="admin">
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
} from "../../../components/Form/Index.js";

export default {
  props: ["data", "admin"],
  components: {
    AccountLayout,
    Input,
    TextArea,
    SubmitButton,
    Phone,
  },
  data() {
    return {
      form: this.$inertia.form({
        first_name: this.admin.first_name,
        last_name: this.admin.last_name,
        email: this.admin.email,
        phone: this.admin.phone,
      }),
      formConfig: {
        preserveScroll: false,
      },
    };
  },
};
</script>
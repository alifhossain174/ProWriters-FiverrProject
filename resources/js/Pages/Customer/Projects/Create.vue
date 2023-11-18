<template>
  <Modal :title="data.title" size="large">
    <form @submit.prevent="form.post(data.urls.submit_form)">

      <Select
        :searchable="true"       
        :options="data.dropdowns.services"
        v-model="form.service_id"
        :label="__('Service')"
        :required="true"
        name="service_id"
      />

      <div class="row">
        <div class="col-md-6">
          <Input
            v-model="form.first_name"
            name="first_name"
            :label="__('First Name')"
            :required="true"
          />
        </div>
        <div class="col-md-6">
          <Input
            v-model="form.last_name"
            name="last_name"
            :label="__('Last Name')"
            :required="true"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <Input
            v-model="form.email"
            name="email"
            :label="__('Email')"
            :required="true"
          />
        </div>

        <div class="col-md-6">
          <Input
            v-model="form.password"
            name="password"
            :label="__('Password')"
            :required="true"
          />
        </div>
      </div>

     <Content/>
    

      <SubmitButton :disabled="form.processing" />
    </form>
  </Modal>
</template>
  
  <script>
import {
  Input,
  Select,
  CheckBox,
  Phone,
  SubmitButton,
} from "../../../components/Form/Index.js";

import store from "../../../store/CreateOrderStore.js";
import Content from "../../../components/Order/Forms/Content.vue";

export default {
  props: ["data"],
  provide() {
    return {
      $store: this.megaStore,
    };
  },
  components: {
    Input,
    Select,
    CheckBox,
    Phone,
    SubmitButton,
    Academic,
  },
  data() {
    return {
      megaStore: store,
      form: this.$inertia.form({
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        phone: null,
        timezone: null,
        country_code: null,
      }),
    };
  },
};
</script>
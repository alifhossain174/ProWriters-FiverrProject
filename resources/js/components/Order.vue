<template>
  <div>
    <form v-on:submit.prevent>
      <div class="row order-page">
        <div class="col-md-7">
          <div class="card">
            <div class="card-body">
              <SearchCustomer
                v-if="data.is_admin"
                :options="data.customers"
                v-model="$store.state.form.customer_id"
                :label="__('Customer')"
                name="customer_id"
              />
              <Select
                v-model="$store.state.form.service_id"
                :options="data.services"
                :label="__('Service')"
                name="type"
              />

              <Academic
                v-if="
                  $store.state.form.service_id ==
                  data.services_types.academic_writing
                "
              />
              <Content
                v-if="
                  $store.state.form.service_id ==
                  data.services_types.content_writing
                "
              />
              <Resume
                v-if="
                  $store.state.form.service_id ==
                  data.services_types.resume_writing
                "
              />
            </div>
          </div>
        </div>
        <div class="offset-md-1 col-md-4">
          <div class="sticky-top fs-8">
            <OrderSummary/>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Select, SearchCustomer } from "./Form/Index.js";
import Academic from "./Order/Forms/Academic.vue";
import Content from "./Order/Forms/Content.vue";
import Resume from "./Order/Forms/Resume.vue";
import OrderSummary from "./Order/OrderSummary.vue";

export default {
  inject: ["$store"],
  components: {
    Academic,
    Content,
    Resume,
    Select,
    SearchCustomer,
    OrderSummary,
  },
  props: ["data", "initial_records", "errors", "is_on_bidding_mode"],
  watch: {
    errors: function (errors) {
      this.$store.state.errors = errors;
    },
  },
  mounted() {
    this.$store.state.urls = this.data.urls;
    this.$store.state.is_on_bidding_mode = this.is_on_bidding_mode;
    this.$store.state.data = this.data;
    this.$store.methods.setInitial(this.initial_records);
  },
};
</script>
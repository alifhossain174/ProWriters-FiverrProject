<template>
  <AppHead :title="data.title" />
  <div class="container page-container">
    <PageTitle :title="data.title">
      <Link class="btn btn-sm btn-light" :href="route('admin.tasks.index')">
        <i class="fa-solid fa-arrow-left-long"></i> {{ __("Back to Tasks") }}
      </Link>
    </PageTitle>
    <div class="row">
      <div class="col-md-12">
        <Order
          :data="records"
          :initial_records="initial_records"
          :errors="errors"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Order from "../../../components/Order.vue";
import store from "../../../store/CreateOrderStore";

export default {
  provide() {
    return {
      $store: this.megaStore,
    };
  },
  components: {
    Order,
  },
  props: ["data", "initial_records", "errors"],
  data() {
    return {
      megaStore: store,
      records: this.getRecords(),
    };
  },
  methods: {
    getRecords() {
      let records = this.data.dropdowns;
      records["is_admin"] = true;
      return records;
    },
  },
};
</script>
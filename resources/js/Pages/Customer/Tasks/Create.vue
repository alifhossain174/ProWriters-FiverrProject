<template>
  <AppHead :title="data.title" />
  <div class="container page-container">
    <PageTitle :title="data.title">
        <Link :href="route('checkout')" class="btn btn-sm btn-outline-secondary">
          {{ __('View Cart')}} <i class="fa-solid fa-arrow-right-long"></i>
        </Link>
      </PageTitle>
    <div class="row">
      <div class="col-md-12">
        <Order
          :data="data.dropdowns"
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
    };
  },
};
</script>
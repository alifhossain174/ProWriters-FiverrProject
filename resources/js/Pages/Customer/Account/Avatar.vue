<template>
  <AppHead :title="data.title" />
  <AccountLayout :customer="customer">
    <div class="card">
      <div class="card-header h5">
        {{ data.title }}
      </div>
      <div class="card-body">
        <UploadImage :data="data" />
      </div>
    </div>
  </AccountLayout>
</template>

<script>
import AccountLayout from "./Partials/AccountLayout.vue";
import { UploadImage } from "../../../components/Form/Index.js";

export default {
  props: ["data", "customer"],
  components: {
    AccountLayout,
    UploadImage,
  },
};
</script>
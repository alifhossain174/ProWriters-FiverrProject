<template>
  <AppHead :title="title + ' - ' + __('Services & Pricing')" />
  <div class="container mt-4 page-container">
    <div class="row">
        <div class="col-md-3 border-end">
          <div class="card-header">{{ __('Services & Pricing') }}</div>
          <BusinessMenu/>
      </div>
      <div class="offset-md-1 col-md-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import BusinessMenu from './BusinessMenu.vue';
export default {
  props: ["title"],
  components: {
    BusinessMenu,
  }, 
};
</script>
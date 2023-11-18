<template>
  <div class="row mt-3 mb-3">
    <div :class="$slots.default ? 'col-md-6' : 'col-md-12'">
      <h4>{{ title }}</h4>     
    </div>
    <div class="col-md-6 text-end" v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
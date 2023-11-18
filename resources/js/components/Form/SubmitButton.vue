<template>
  <div class="mb-3">
    <button :disabled="disabled" type="submit" class="btn btn-primary">
      <template v-if="button_text"><span v-html="button_text"></span></template>
      <template v-else>
        {{ __("Submit") }}
      </template>
    </button>
  </div>
</template>

<script>
export default {
  props: ["disabled", "button_text"],
};
</script>
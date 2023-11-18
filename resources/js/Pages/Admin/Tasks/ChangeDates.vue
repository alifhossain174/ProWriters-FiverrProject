<template>
  <Modal :title="data.title">
    <form @submit.prevent="form.patch(data.urls.submit_form, formConfig)">

      <DatePicker
        v-model="form.dead_line"
        :label="__('Deadline')"
        name="dead_line"
      />
      
      <DatePicker
        v-model="form.dead_line_for_author"
        :label="__('Deadline for the Author')"
        name="dead_line_for_author"
      />

      <SubmitButton class="mt-4" :disabled="form.disabled" />
    </form>
  </Modal>
</template>
  
  <script>
import { DatePicker, SubmitButton } from "../../../components/Form/Index.js";
export default {
  props: ["task", "data"],
  components: {
    DatePicker,
    SubmitButton,
  },
  data() {
    return {
      form: this.$inertia.form({
        dead_line: this.data.dead_line,
        dead_line_for_author: this.data.dead_line_for_author,
      }),
      formConfig: {
        preserveScroll: false,
      },
    };
  },
};
</script>
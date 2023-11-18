<template>
  <Modal :title="data.title">
    <form
      @submit.prevent="
        existing_record
          ? form.patch(route('admin.grammaticalPeople.update', existing_record.id))
          : form.post(route('admin.grammaticalPeople.store'))
      "
    >
      <Input
        v-model="form.name"
        name="name"
        :label="__('Name')"
        :required="true"
      />
      
      <SubmitButton :disabled="form.processing" />
    </form>
  </Modal>
</template>

<script>
import { Input, SubmitButton } from "../../../../components/Form/Index.js";

export default {
  components: {
    Input,
    SubmitButton,
  },
  props: ["data", "existing_record"],
  data() {
    return {
      form: this.$inertia.form(this.prepareForm()),
    };
  },
  methods: {
    prepareForm() {
      let inputs = {
        name: null,
        percentage: null,
      };
      if (this.existing_record) {
        inputs = { ...inputs, ...this.existing_record };
      }
      return inputs;
    },
  },
};
</script>
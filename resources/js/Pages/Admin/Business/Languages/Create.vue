<template>
  <Modal :title="data.title">
    <form
      @submit.prevent="
        existing_record
          ? form.patch(route('admin.languages.update', existing_record.id))
          : form.post(route('admin.languages.store'))
      "
    >
      <Input
        v-model="form.name"
        name="name"
        :label="__('Name')"
        :required="true"
      />

      <Input
        v-model="form.percentage"
        :label="__('Markup percentage to add to the price of the service')"
        :tooltip="
          __(
            'The markup will be used in calculating the base price of the service'
          )
        "
        name="percentage"
        @keypress="onlyNumber($event, form.percentage)"
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
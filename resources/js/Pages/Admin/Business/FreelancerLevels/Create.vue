<template>
  <Modal :title="data.title">
    <form
      @submit.prevent="
        existing_record
          ? form.patch(
              route('admin.freelancerLevels.update', existing_record.id)
            )
          : form.post(route('admin.freelancerLevels.store'))
      "
    >
      <Input
        v-model="form.name"
        name="name"
        :label="__('Name')"
        :required="true"
      />

      <Input
        v-model="form.description"
        name="description"
        :label="__('Description')"
      />

      <Select
        v-model="form.numeric_value"
        :options="data.dropdowns.numeric_values"
        :label="__('Level in numeric value')"
        name="numeric_value"
      />

      <fieldset class="border rounded-3 p-3 mb-4">
        <legend class="float-none w-auto px-3 fs-8">
          {{ __("Per Word") }} {{ __("Writing Price") }}
        </legend>
        <div class="row fs-8">
          <div class="col-md-6">
            <Input
              v-model="form.customer_price_per_word_writing"
              name="price"
              :label="__('Customer Price')"
              :required="true"
              @keypress="
                onlyNumber($event, form.customer_price_per_word_writing)
              "
            />
          </div>

          <div class="col-md-6">
            <Input
              v-model="form.freelancer_price_per_word_writing"
              name="price"
              :label="__('Freelancer Price')"
              :required="true"
              @keypress="
                onlyNumber($event, form.freelancer_price_per_word_writing)
              "
            />
          </div>
        </div>
      </fieldset>

      <fieldset class="border rounded-3 p-3 mb-4">
        <legend class="float-none w-auto px-3 fs-8">
          {{ __("Per Word") }} {{ __("Editing Price") }}
        </legend>
        <div class="row fs-8">
          <div class="col-md-6">
            <Input
              v-model="form.customer_price_per_word_editing"
              name="price"
              :label="__('Customer Price')"
              :required="true"
              @keypress="
                onlyNumber($event, form.customer_price_per_word_editing)
              "
            />
          </div>

          <div class="col-md-6">
            <Input
              v-model="form.freelancer_price_per_word_editing"
              name="price"
              :label="__('Freelancer Price')"
              :required="true"
              @keypress="
                onlyNumber($event, form.freelancer_price_per_word_editing)
              "
            />
          </div>
        </div>
      </fieldset>

      <fieldset class="border rounded-3 p-3 mb-4">
        <legend class="float-none w-auto px-3 fs-8">
          {{ __("Per Word") }} {{ __("Proofreading Price") }}
        </legend>
        <div class="row fs-8">
          <div class="col-md-6">
            <Input
              v-model="form.customer_price_per_word_proofreading"
              name="price"
              :label="__('Customer Price')"
              :required="true"
              @keypress="
                onlyNumber($event, form.customer_price_per_word_proofreading)
              "
            />
          </div>

          <div class="col-md-6">
            <Input
              v-model="form.freelancer_price_per_word_proofreading"
              name="price"
              :label="__('Freelancer Price')"
              :required="true"
              @keypress="
                onlyNumber($event, form.freelancer_price_per_word_proofreading)
              "
            />
          </div>
        </div>
      </fieldset>

      <Input
        v-model="form.number_of_tasks_at_a_time"
        name="number_of_tasks_at_a_time"
        :label="
          __('Number of tasks the freelancer can have in progress at a time')
        "
        :required="true"        
        :note="__('Enter -1 for unlimited')"
      />

      <CheckBox
        v-model="form.is_popular"
        name="is_popular"
        :label="__('Is Popular')"
      />

      <CheckBox
        v-model="form.is_default"
        name="is_default"
        :label="__('Default Selection')"
      />

      <SubmitButton :disabled="form.processing" />
    </form>
  </Modal>
</template>

<script>
import {
  Input,
  TextArea,
  Select,
  SubmitButton,
  CheckBox,
} from "../../../../components/Form/Index.js";

export default {
  components: {
    Input,
    Select,
    TextArea,
    SubmitButton,
    CheckBox,
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
        description: null,
        is_popular: null,
        is_default: null,
        numeric_value: 1,
        customer_price_per_word_writing: 0,
        freelancer_price_per_word_writing: 0,
        customer_price_per_word_editing: 0,
        freelancer_price_per_word_editing: 0,
        customer_price_per_word_proofreading: 0,
        freelancer_price_per_word_proofreading: 0,
        number_of_tasks_at_a_time: 2,
      };
      if (this.existing_record) {
        inputs = { ...inputs, ...this.existing_record };
      }
      return inputs;
    },
  },
};
</script>
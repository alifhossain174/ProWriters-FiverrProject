<template>
  <div class="mb-2">
    <label class="form-label">
      {{ label }}
      <small v-if="note" class="text-muted">{{ note }}</small>
      <span v-if="required" class="ms-1 required">*</span>
      <span
        v-if="tooltip"
        class="ms-1"
        ref="tooltip"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        :title="tooltip"
        ><i class="fa-solid fa-circle-question"></i
      ></span>
    </label>
    <Datepicker
      :format="(format) ? format : 'yyyy-MM-dd HH:mm:ss'"
      :inputClassName="'form-control form-control-sm'"
      v-model="model"
      
    />

    <ValidationError :name="name" />
  </div>
</template>


<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  props: [
    "modelValue",
    "label",
    "name",   
    "placeholder",
    "required",
    "note",
    "tooltip",
    "format"
  ],
  components: {
    Datepicker,
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
        //return (Number.isNaN(Number(this.modelValue))) ? this.modelValue : Number(this.modelValue);
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

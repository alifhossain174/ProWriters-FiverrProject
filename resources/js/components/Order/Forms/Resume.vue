<template>
  <AssignmentPackageField />
  <div class="card">
    <div class="card-header">
      {{ __("Deliverables") }}
    </div>
    <div class="card-body border pt-4 pb-4 ps-2 pe-2 bg-light fs-8">
      <div
        class="nl2br deliverables"
        v-html="$store.state.assignmentModel.deliverables"
      ></div>
    </div>
  </div>

  <h5 class="card-title">{{ __("Instructions") }}</h5>
  <hr />
  <Input
    v-model="$store.state.form.title"
    name="title"
    :label="__('Title')"
    :required="true"
    :placeholder="__('Enter the title of your paper')"
  />
  <TextArea
    name="instruction"
    v-model="$store.state.form.instruction"
    :label="__('Instructions')"
    :placeholder="
      __('Please provide specific and detailed instructions about your paper')
    "
  />
  <AttachmentField />
  <AdditionalServicesField />
  <ServiceLevels v-if="!$store.state.is_on_bidding_mode" />
</template>

<script>
import { TextArea, Input } from "../../Form/Index.js";
import WorkTypeField from "../Fields/WorkTypeField.vue";
import AssignmentPackageField from "../Fields/AssignmentPackageField.vue";
import ServiceLevels from "../Fields/ServiceLevels.vue";
import AuthorLevels from "../Fields/AuthorLevels.vue";
import AttachmentField from "../Fields/AttachmentField.vue";
import AdditionalServicesField from "../Fields/AdditionalServicesField.vue";

export default {
  inject: ["$store"],
  components: {
    TextArea,
    Input,
    WorkTypeField,
    AssignmentPackageField,
    ServiceLevels,
    AuthorLevels,
    AdditionalServicesField,
    AttachmentField,
  },
};
</script>
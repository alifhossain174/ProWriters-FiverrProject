<template>
  <WorkTypeField />
  <AssignmentField />
  <SubjectField />

  <div class="row">
    <div class="col-md-6">
      <AcademicLevelField />
    </div>
    <div class="col-md-6">
      <UrgencyField />
    </div>
  </div>

  <WordCounter />

  <div class="row">
    <div class="col-md-6">
      <PaperFormatField />
    </div>
    <div class="col-md-6">
      <SourcesField />
    </div>
  </div>

  <h5 class="card-title">{{ __("Additional Paper Details") }}</h5>
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
  <AuthorLevels />
  <AdditionalServicesField />
  <ServiceLevels v-if="!$store.state.is_on_bidding_mode"/>
</template>

<script>
import { TextArea, Input } from "../../Form/Index.js";
import WorkTypeField from "../Fields/WorkTypeField.vue";
import AssignmentField from "../Fields/AssignmentField.vue";
import SubjectField from "../Fields/SubjectField.vue";
import AcademicLevelField from "../Fields/AcademicLevelField.vue";
import PaperFormatField from "../Fields/PaperFormatField.vue";
import UrgencyField from "../Fields/UrgencyField.vue";
import WordCounter from "../Fields/WordCounter.vue";
import SourcesField from "../Fields/SourcesField.vue";
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
    AssignmentField,
    SubjectField,
    AcademicLevelField,
    PaperFormatField,
    UrgencyField,
    WordCounter,
    SourcesField,
    ServiceLevels,
    AuthorLevels,
    AdditionalServicesField,
    AttachmentField,
  },
};
</script>
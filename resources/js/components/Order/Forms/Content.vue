<template>
  <WorkTypeField />
  <AssignmentField />
  <SubjectField />
  <div class="row">
    <div class="col-md-6">
      <LanguageField />
    </div>
    <div class="col-md-6">
      <UrgencyField />
    </div>
  </div>
  <WordCounter />
  <ContentDetails />
  <AttachmentField />
  <AuthorLevels />
  <AdditionalServicesField />
  <ServiceLevels v-if="!$store.state.is_on_bidding_mode"/>
</template>

<script>
import WorkTypeField from "../Fields/WorkTypeField.vue";
import AssignmentField from "../Fields/AssignmentField.vue";
import SubjectField from "../Fields/SubjectField.vue";
import UrgencyField from "../Fields/UrgencyField.vue";
import WordCounter from "../Fields/WordCounter.vue";
import ServiceLevels from "../Fields/ServiceLevels.vue";
import AuthorLevels from "../Fields/AuthorLevels.vue";
import AttachmentField from "../Fields/AttachmentField.vue";
import ContentDetails from "../ContentDetails.vue";
import AdditionalServicesField from "../Fields/AdditionalServicesField.vue";
import LanguageField from "../Fields/LanguageField.vue";

export default {
  inject: ["$store"],
  components: {
    WorkTypeField,
    AssignmentField,
    SubjectField,
    UrgencyField,
    WordCounter,
    ServiceLevels,
    AuthorLevels,
    ContentDetails,
    AdditionalServicesField,
    AttachmentField,
    LanguageField,
  },
};
</script>
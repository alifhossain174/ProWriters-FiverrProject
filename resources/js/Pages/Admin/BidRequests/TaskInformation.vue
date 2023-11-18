<template>
  <BidLayout :bid_request="bid_request" activeTab="brief">
    <AcademicWritingBrief
      v-if="task.service_id == data.service_types.academic_writing"
      :task="task"
      :data="data"
    />
    <ContentWritingBrief
      v-if="task.service_id == data.service_types.content_writing"
      :task="task"
      :data="data"
    />

    <ResumeWritingBrief
      v-if="task.service_id == data.service_types.resume_writing"
      :task="task"
      :data="data"
    />
  </BidLayout>
</template>
  
  <script>
import BidLayout from "./Partials/BidLayout.vue";
import AcademicWritingBrief from "../Tasks/Partials/AcademicWritingBrief.vue";
import ContentWritingBrief from "../Tasks/Partials/ContentWritingBrief.vue";
import ResumeWritingBrief from "../Tasks/Partials/ResumeWritingBrief.vue";

export default {
  props: ["bid_request", "data", "task"],
  components: {
    BidLayout,
    AcademicWritingBrief,
    ContentWritingBrief,
    ResumeWritingBrief,
  },
};
</script>
<template>
  <TaskShowLayout :task="task" :activeTab="'financial'">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <AcademicWritingFinancial v-if="(task.service_id == data.service_types.academic_writing)" :task="task"/>
        <ContentWritingFinancial v-if="(task.service_id == data.service_types.content_writing)" :task="task"/>
        <ResumeWritingFinancial v-if="(task.service_id == data.service_types.resume_writing)" :task="task"/>
      </div>
    </div>
  </TaskShowLayout>
</template>


<script>
import TaskShowLayout from "../Partials/TaskShowLayout.vue";
import AcademicWritingFinancial from "./AcademicWritingFinancial.vue";
import ContentWritingFinancial from "./ContentWritingFinancial.vue";
import ResumeWritingFinancial from "./ResumeWritingFinancial.vue";

export default {
  props: ["data", "task"],
  components: {
    TaskShowLayout,
    AcademicWritingFinancial,
    ContentWritingFinancial,
    ResumeWritingFinancial,
  },
  data() {
    return {};
  },
};
</script>

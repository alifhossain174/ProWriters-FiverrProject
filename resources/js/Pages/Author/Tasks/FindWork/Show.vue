<template>
  <AppHead :title="data.title" />
  <div class="container page-container">
    <PageTitle :title="data.title">
      <button type="button" class="btn btn-sm btn-success me-2" @click="acceptTask">
        <i class="fa-sharp fa-solid fa-rocket"></i> {{ __("Accept this task") }}
      </button>
      <Link
        class="btn btn-sm btn-light"
        :href="route('author.tasks.index')"
      >
        <i class="fa-solid fa-arrow-left-long"></i>
        {{ __("Back to Tasks") }}
      </Link>
    </PageTitle>
    <div class="row">
      <div class="col-md-12">
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
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <h5 class="mb-4">{{ __("Attachments") }}</h5>
        <AttachmentList :attachments="task.attachments" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskShowLayout from "../Partials/TaskShowLayout.vue";
import AcademicWritingBrief from "../Partials/AcademicWritingBrief.vue";
import ContentWritingBrief from "../Partials/ContentWritingBrief.vue";
import ResumeWritingBrief from "../Partials/ResumeWritingBrief.vue";
import AttachmentList from "../../../../components/AttachmentList.vue";

export default {
  props: ["task", "data"],
  components: {
    TaskShowLayout,
    AcademicWritingBrief,
    ContentWritingBrief,
    ResumeWritingBrief,
    AttachmentList,
  },
  methods: {
    acceptTask() {
      let scope = this;
      this.confirmDialog(this.__("Accept"), function () {
        scope.$inertia.post(route("author.find.work.accept", scope.task.uuid));
      });
    },
  },
};
</script>
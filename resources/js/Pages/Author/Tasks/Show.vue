<template>
  <TaskShowLayout :task="task" activeTab="general">
    <Rating :task="task" />

    <div class="d-flex flex-row-reverse bd-highlight">
      <Link class="btn btn-sm btn-light" :href="route('author.tasks.index')">
        <i class="fa-solid fa-arrow-left-long"></i> {{ __("Back to Tasks") }}
      </Link>

      <Link
        v-if="data.allow.archiving"
        class="btn btn-sm btn-outline-secondary me-2"
        :href="route('author.tasks.archive', task.uuid)"
        method="post"
        as="button"
        type="button"
        preserve-scroll
      >
        <i class="fa-solid fa-box-archive"></i> {{ __("Archive") }}
      </Link>

      <Link
        v-if="data.allow.unarchiving"
        class="btn btn-sm btn-outline-warning me-2"
        :href="route('author.tasks.unarchive', task.uuid)"
        method="post"
        as="button"
        type="button"
        preserve-scroll
      >
        <i class="fa-solid fa-box-open"></i> {{ __("Unarchive") }}
      </Link>

      <Link
        v-if="isStartWorkingButtonEnabled"
        class="btn btn-sm btn-success me-2"
        :href="route('author.tasks.start_working', task.uuid)"
        method="post"
        as="button"
        type="button"
      >
        <i class="fas fa-rocket"></i> {{ __("Start Working") }}
      </Link>

      <DialogLink
        v-if="isSubmitWorkButtonEnabled"
        :href="data.urls.submit_work"
        class="btn btn-sm btn-primary me-2"
      >
        <i class="fas fa-file-upload"></i> {{ __("Submit Work") }}</DialogLink
      >
    </div>

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
  </TaskShowLayout>
</template>

<script>
import TaskShowLayout from "./Partials/TaskShowLayout.vue";
import AcademicWritingBrief from "./Partials/AcademicWritingBrief.vue";
import ContentWritingBrief from "./Partials/ContentWritingBrief.vue";
import ResumeWritingBrief from "./Partials/ResumeWritingBrief.vue";
import Rating from "./Partials/Rating.vue";

export default {
  props: ["task", "data"],
  components: {
    TaskShowLayout,
    AcademicWritingBrief,
    ContentWritingBrief,
    ResumeWritingBrief,
    Rating,
  },
  computed: {
    isStartWorkingButtonEnabled() {
      return this.data.statuses_allows_start_working.includes(parseInt(this.task.task_status_id));
    },
    isSubmitWorkButtonEnabled() {
      return this.data.statuses_allows_submitting_work.includes(parseInt(this.task.task_status_id));
    },
  },
};
</script>

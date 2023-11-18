<template>
  <TaskShowLayout :task="task" activeTab="general">
    
    <DownloadWork :task="task" :data="data"/>     

    <div class="d-flex flex-row-reverse bd-highlight mb-4">
      <Link class="btn btn-sm btn-light" :href="route('customer.tasks.index')">
        <i class="fa-solid fa-arrow-left-long"></i> {{ __("Back to Tasks") }}
      </Link>

      <Link
        v-if="data.allow.archiving"
        class="btn btn-sm btn-secondary me-2"
        :href="route('customer.tasks.archive', task.uuid)"
        method="post"
        as="button"
        type="button"
        preserve-scroll
      >
        <i class="fa-solid fa-box-archive"></i> {{ __("Archive") }}
      </Link>

      <Link
        v-if="data.allow.unarchiving"
        class="btn btn-sm btn-warning me-2"
        :href="route('customer.tasks.unarchive', task.uuid)"
        method="post"
        as="button"
        type="button"
        preserve-scroll
      >
        <i class="fa-solid fa-box-open"></i> {{ __("Unarchive") }}
      </Link>

      <DialogLink
        v-if="data.allow.extending_deadline"
        class="btn btn-sm btn-success me-2"
        :href="route('customer.tasks.extend.deadline', task.uuid)"
      >
        <i class="fa-regular fa-clock"></i> {{ __("Extend Deadline") }}
      </DialogLink>
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
import DownloadWork from "./Partials/DownloadWork.vue";
import AcademicWritingBrief from "./Partials/AcademicWritingBrief.vue";
import ContentWritingBrief from "./Partials/ContentWritingBrief.vue";
import ResumeWritingBrief from "./Partials/ResumeWritingBrief.vue";

export default {
  props: ["task", "data"],
  components: {
    TaskShowLayout,
    AcademicWritingBrief,
    ContentWritingBrief,
    ResumeWritingBrief,
    DownloadWork,
  },
};
</script>
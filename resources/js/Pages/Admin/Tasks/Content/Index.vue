<template>
  <TaskShowLayout :task="task" activeTab="content">
    <div class="row">
      <div class="col-md-8">
        <ContentPreview
          :content_preview="content_preview"
          :url_post_comment="
            route('admin.tasks.content.comment', this.task.uuid)
          "
        />
      </div>
      <div class="col-md-4">
        <DownloadWork :task="task" :data="data"/>
      </div>
    </div>
  </TaskShowLayout>
</template>

<script>
import TaskShowLayout from "../Partials/TaskShowLayout.vue";
import DownloadWork from "../Partials/DownloadWork.vue";
import ContentPreview from "../../../../components/ContentPreview.vue";

export default {
  props: ["task", "content_preview", "data"],
  components: {
    TaskShowLayout,
    DownloadWork,
    ContentPreview,
  },
};
</script>

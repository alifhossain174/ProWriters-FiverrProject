<template>
  <TaskShowLayout :task="task" :activeTab="tab">
    <div class="d-flex justify-content-between">
      <div>
        <h4>{{ __("Messages") }}</h4>
        <p class="text-muted">
          <small>{{ __("Sorted based on most recent comment") }}</small>
        </p>
      </div>
      <div>
        <DialogLink
          :href="data.urls.new_message"
          class="btn btn-sm btn-primary"
        >
          {{ __("New Message") }}</DialogLink
        >
      </div>
    </div>
    <DiscussionBoard :messages="messages" :data="data" />
  </TaskShowLayout>
</template>

<script>
import TaskShowLayout from "../Partials/TaskShowLayout.vue";
import DiscussionBoard from "../../../../components/DiscussionBoard.vue";

export default {
  props: ["task", "data", "messages", "tab"],
  components: {
    TaskShowLayout,
    DiscussionBoard,
  },
};
</script>
<template>
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ __("General Information") }}</h5>
          <div class="p-2 task-card">
            <div class="border-bottom mb-2 pb-2">
              <small class="text-muted fw-bolder">{{ __("Customer") }}</small>
              <div>
                <Link
                  :href="route('admin.customers.show', task.customer.uuid)"
                  >{{ task.customer.full_name }}</Link
                >
              </div>
            </div>

            <div class="border-bottom mb-2 pb-2">
              <small class="text-muted fw-bolder">{{ __("Author") }}</small>
              <div v-if="task.author">
                <Link
                  :href="route('admin.authors.show', task.author.uuid)"
                  >{{ task.author.full_name }}</Link
                >
              </div>
              <div v-else>{{ __("Not assigned") }}</div>
            </div>

            <div class="border-bottom mb-2 pb-2">
              <small class="text-muted fw-bolder">{{ __("Editor") }}</small>
              <div v-if="task.editor">
                <Link
                  v-if="hasRole(ADMIN_ROLES.SUPER_ADMIN)"
                  :href="route('admin.users.show', task.editor.uuid)"
                  >{{ task.editor.full_name }}</Link
                >
                <span v-else>{{ task.editor.full_name }}</span>
              </div>
              <div v-else>{{ __("Not assigned") }}</div>
            </div>

            <div
              v-for="(brief, index) in briefs"
              class="border-bottom mb-2 pb-2"
              :key="index"
            >
              <small class="text-muted fw-bolder">{{ brief.label }}</small>
              <div class="">{{ brief.value }}</div>
            </div>
          </div>
        </div>
      </div>
      <AdditionalServiceSection :task="task" />
    </div>
    <div class="col-md-8">
      <small class="text-muted">{{ __("Title") }}</small>
      <div class="lead">{{ task.title }}</div>
      <hr />

      <div class="mt-2 mb-2" v-for="(detail, index) in details" :key="index">
        <small class="text-muted">{{ detail.label }}</small>
        <div class="text-break" v-html="detail.value"></div>
        <hr />
      </div>

      <div
        class="alert alert-success"
        v-if="task.task_status_id == data.task_status_submitted_for_approval"
      >
        {{ __("Your content is ready for download") }}.
        {{ __("Please click") }}
        <Link :href="route('customer.tasks.content', task.uuid)">{{
          __("here")
        }}</Link>
        {{ __("to see your files") }}.
      </div>
    </div>
  </div>
</template>
 
 <script>
import AdditionalServiceSection from "./AdditionalServiceSection.vue";

export default {
  props: ["task", "data"],
  components: {
    AdditionalServiceSection,
  },
  data() {
    return {
      briefs: [
        { label: this.__("Service"), value: this.task.service.name },
        {
          label: this.__("Assignment") + " / " + this.__("Package"),
          value: this.task.details.assignment.name,
        },

        { label: this.__("Urgency"), value: this.task.urgency.name },

        {
          label: this.__("Author Level"),
          value: this.task.author_level.name,
        },
        {
          label: this.__("Service Level"),
          value: this.task.service_level.name,
        },
        {
          label: this.__("Created"),
          value: this.localDateTime(this.task.created_at),
        },
        {
          label: this.__("Deadline"),
          value: this.localDateTime(this.task.dead_line),
        },
        {
          label: this.__("Deadline for Author"),
          value: this.localDateTime(this.task.dead_line_for_author),
        },
        {
          label: this.__("Revisions"),
          value:
            this.task.revisions_taken + " / " + this.task.revisions_allowed,
        },      
        {
          label: this.__("Total Price"),
          value: this.formatMoney(this.task.total),
        },
      ],
      details: [
        {
          label: this.__("Instructions"),
          value: this.task.details.instruction,
        },
      ],
    };
  },
};
</script>
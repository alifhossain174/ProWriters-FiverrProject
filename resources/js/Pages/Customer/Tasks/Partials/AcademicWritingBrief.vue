<template>
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ __("General Information") }}</h5>
          <div class="p-2 task-card">
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
          label: this.__("Work Type"),
          value: this.data.work_types[this.task.details.work_type_id],
        },
        {
          label: this.__("Assignment"),
          value: this.task.details.assignment.name,
        },
        { label: this.__("Subject"), value: this.task.details.subject.name },
        {
          label: this.__("Academic Level"),
          value: this.task.details.academic_level.name,
        },
        { label: this.__("Urgency"), value: this.task.urgency.name },
        {
          label: this.__("Paper Format"),
          value: this.task.details.paper_format.name,
        },
        {
          label: this.__("Quantity"),
          value:
            this.task.details.quantity +
            " " +
            this.data.unit_types[this.task.details.unit_name],
        },
        {
          label: this.__("Number of sources"),
          value: this.task.details.number_of_sources,
        },
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
          label: this.__("Revisions"),
          value:
            this.task.revisions_taken + " / " + this.task.revisions_allowed,
        },
        {
          label: this.__("Project"),
          value: this.task.project ? this.task.project.name : this.__("N/A"),
        },
        {
          label: this.__("Total Cost"),
          value: this.formatMoney(this.task.total),
        },
      ],
      details: [
        {
          label: this.__("Quantity"),
          value: this.task.details.number_of_words_and_pages,
        },
        {
          label: this.__("Instructions"),
          value: this.task.details.instruction,
        },
      ],
    };
  },
};
</script>
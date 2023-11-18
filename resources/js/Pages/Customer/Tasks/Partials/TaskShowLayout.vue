<template>
  <AppHead :title="task.number" />
  <section
    class="header-account-page d-flex align-items-end navbar-background pt-80"
    data-offset-top="#header-main"
  >
    <div class="container pt-4 pt-lg-0">
      <div class="row mt-3">
        <div class="col-lg-12">
          <div class="text-end text-white">
            <Countdown :until="task.dead_line"/>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <h4 class="text-white">{{ task.number }}</h4>
            <div>
              <span class="text-white">{{ __("Status") }} : </span>
              <span
                class="badge me-2"
                :style="{
                  color: task.status.color,
                  'background-color': task.status.bg_color,
                }"
                >{{ task.status.name }}</span
              >
              <span class="badge bg-danger" v-if="!task.invoice_id">{{
                __("Not Invoiced")
              }}</span>
            </div>
          </div>

          <!-- Account navigation -->
          <div class="d-flex mt-4 fs-8">
            <ul class="nav nav-tabs task-navigation" id="myTab" role="tablist">
              <li class="nav-item">
                <Link
                  class="nav-link"
                  :class="{ active: isActiveTab('general') }"
                  :href="route('customer.tasks.show', task.uuid)"
                  aria-selected="true"
                  >{{ __("Task Information") }}</Link
                >
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  :class="{ active: isActiveTab('discussions') }"
                  :href="route('customer.tasks.discussions.index', task.uuid)"
                  >{{ __("Discussions") }}</Link
                >
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  :class="{ active: isActiveTab('attachment') }"
                  :href="route('customer.tasks.attachments.index', task.uuid)"
                  >{{ __("Attachments") }}</Link
                >
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  :class="{ active: isActiveTab('financial') }"
                  :href="route('customer.tasks.financial', task.uuid)"
                  >{{ __("Financial") }}</Link
                >
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  :class="{ active: isActiveTab('content') }"
                  :href="route('customer.tasks.content', task.uuid)"
                  >{{ __("Content") }}</Link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container page-container mt-3">
    <div class="row">
      <div class="col-md-12">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "../../../../components/Countdown.vue";
export default {
  components: {
    Countdown,
  },
  props: ["task", "activeTab"],
  methods: {
    isActiveTab(tab) {
      return this.activeTab == tab ? true : false;
    },
  },
};
</script>
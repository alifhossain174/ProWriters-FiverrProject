<template>
  <AppHead :title="data.title" />
  <div class="container page-container mt-3">
    <div class="row mt-4 mb-4">
      <div class="col-md-6 mb-4 mb-md-0">
        <h4>{{ data.title }}</h4>
        <span v-if="bid_request.is_closed" class="badge text-bg-danger">{{
          __("Closed")
        }}</span>
        <span v-else class="badge text-bg-success">{{ __("Open") }}</span>
      </div>

      <div class="col-md-6 text-md-end">
        <Link
          :href="route('author.bidRequests.index')"
          class="btn btn-sm btn-light me-2"
        >
          <i class="fa-solid fa-left-long"></i> {{ __("back to") }}
          {{ __("Bid Requests") }}
        </Link>
        <Link
          v-if="!bid_request.is_closed && !data.bid"
          :href="route('author.bidRequests.bids.create', bid_request.uuid)"
          class="btn btn-sm btn-primary"
        >
          <i class="fa-regular fa-rectangle-list"></i>
          {{ __("Bid for this Job") }}
        </Link>

        <button
          v-if="!bid_request.is_closed && data.bid"
          class="btn btn-sm btn-danger"
          type="button"
          @click="withdrawBid"
        >
          <i class="fa-regular fa-rectangle-list"></i>
          {{ __("Withdraw Bid") }}
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="text-md-end fs-7 mb-4 mb-md-0">
          <span class="text-primary"
            >{{ __("Budget") }} : {{ formatMoney(bid_request.budget) }}</span
          >
          <span v-if="data.bid" class="text-success"
            >, {{ __("Bidding Amount") }} :
            {{ formatMoney(data.bid.total) }}</span
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
      </div>
    </div>
  </div>
</template>

<script>
import AcademicWritingBrief from "../Tasks/Partials/AcademicWritingBrief.vue";
import ContentWritingBrief from "../Tasks/Partials/ContentWritingBrief.vue";
import ResumeWritingBrief from "../Tasks/Partials/ResumeWritingBrief.vue";

export default {
  props: ["bid_request", "data", "task"],
  components: {
    AcademicWritingBrief,
    ContentWritingBrief,
    ResumeWritingBrief,
  },
  methods: {
    withdrawBid() {
      let scope = this;
      this.confirmDialog(this.__("Yes, Withdraw my bid"), function () {
        scope.$inertia.delete(
          route("author.bids.destroy", scope.data.bid.uuid),
          {
            preserveState: false,
          }
        );
      });
    },
  },
};
</script>
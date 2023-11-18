<template>
  <AppHead :title="data.title" />
  <div class="container page-container">
    <PageTitle :title="data.title" />

    <div class="row mt-2">
      <div
        class="col-md-6 mb-2 mb-md-0"
        v-for="(statistic, index) in statistics"
        :key="index"
      >
        <div class="d-flex bg-light p-3">
          <div class="flex-shrink-0 align-middle statistics-box">
            <div :class="statistic.bg_color">
              <i class="fa-solid fa-wallet align-middle"></i>
            </div>
          </div>
          <div class="flex-grow-1 ms-2">
            <div class="text-uppercase fs-9 lh-sm">
              {{ statistic.title }}
            </div>
            <div class="fs-5 lh-1 fw-bold">
              <i class="fas fa-spinner fa-spin" v-if="!statistic.data"></i>
              <span v-else v-text="statistic.data.value"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-6">
        <fieldset class="border rounded-3 p-3 mb-4 h-100">
          <legend class="float-none w-auto px-3 fs-6">
            {{ __("Tasks in progress") }}
          </legend>

          <Table :options="tableOptions" :tableStyle="'table-striped'">
            <template v-slot>
              <tr class="mb-2" v-for="(task, index) in data.tasks_in_progress" :key="index">
                <td class="col-md-3">
                  <Link :href="route('freelancer.tasks.show', task.uuid)">{{
                    task.number
                  }}</Link>
                  <div>
                    <small class="text-muted">{{ task.service.name }}</small>
                  </div>
                </td>
                <td class="col-md-2">
                  {{ localDate(task.dead_line_for_freelancer) }}
                </td>
                <td class="col-md-2 text-end">
                  {{ formatMoney(task.freelancer_payment_amount) }}
                </td>
              </tr>
            </template>
          </Table>
        </fieldset>
      </div>

      <div class="col-md-6">
        <fieldset class="border rounded-3 p-3 mb-4  h-100">
          <legend class="float-none w-auto px-3 fs-6">
            {{ __("Tasks requires revision") }}
          </legend>

          <Table :options="tableOptions" :tableStyle="'table-striped'">
            <template v-slot>
              <tr class="mb-2" v-for="(task, index) in data.tasks_requires_revision" :key="index">
                <td class="col-md-3">
                  <Link :href="route('freelancer.tasks.show', task.uuid)">{{
                    task.number
                  }}</Link>
                  <div>
                    <small class="text-muted">{{ task.service.name }}</small>
                  </div>
                </td>
                <td class="col-md-2">
                  {{ localDate(task.dead_line_for_freelancer) }}
                </td>
                <td class="col-md-2 text-end">
                  {{ formatMoney(task.freelancer_payment_amount) }}
                </td>
              </tr>
            </template>
          </Table>
        </fieldset>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Table from "../../components/Table.vue";
export default {
  components: {
    Table,
  },
  props: ["data"],
  created() {
    this.getStatistics();
  },
  data() {
    return {
      statistics: [
        {
          name: "tasks_in_progress",
          title: this.__("Tasks in progress"),
          bg_color: "bg-purple",
          data: null,
        },
        {
          name: "tasks_requires_revision",
          title: this.__("Tasks requires revision"),
          bg_color: "bg-green",
          data: null,
        },
        // {
        //   name: "number_of_messages",
        //   title: this.__("Messages"),
        //   bg_color: "bg-red",
        //   data: null,
        // },
      ],
      tableOptions: {
        titles: [
          {
            name: this.__("Details"),
            className: "col-md-3",
          },
          {
            name: this.__("Deadline"),
            className: "col-md-2",
          },
          {
            name: this.__("Total"),
            className: "col-md-2 text-end",
          },
        ],
      },
    };
  },
  methods: {
    getStatistics() {
      let scope = this;
      axios
        .post(route("freelancer.dashboard.statistics"))
        .then(function (response) {
          for (let index = 0; index < scope.statistics.length; index++) {
            const statistic_name = scope.statistics[index].name;
            scope.statistics[index].data = response.data[statistic_name];
          }
        });
    },
  },
};
</script>
  
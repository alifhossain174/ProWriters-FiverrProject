<template>
  <BusinessLayout :title="data.title">
    <TitleBar
      :title="data.title"
      :create_link="route('admin.assignments.create')"
    />
    <Search
      :url="route('admin.assignments.index')"
      :filters="filters.filters"
      :services="data.services"
    />

    <Table
      :options="tableOptions"
      :links="assignments.links"
      :total="assignments.total"
      :tableStyle="'fs-8'"
    >
      <template v-slot>
        <tr v-for="(assignment, index) in assignments.data" :key="index">
          <td>
            <Link :href="route('admin.assignments.edit', assignment.id)">{{
              assignment.name
            }}</Link>
          </td>
          <td>
            {{ assignment.service.name }}
          </td>
          <td class="text-end">
            {{ formatMoney(assignment.price) }}
          </td>
          <td class="col-md-2 text-end">
            <DestroyButton
              :delete_url="route('admin.assignments.destroy', { assignment : assignment.id, _query : filters})"
            />
          </td>
        </tr>
      </template>
    </Table>
  </BusinessLayout>
</template>

<script>
import BusinessLayout from "../Partials/BusinessLayout.vue";
import Search from "./Search.vue";
import TitleBar from "../Partials/TitleBar.vue";
import DestroyButton from "../../../../components/Form/DestroyButton.vue";

import Table from "../../../../components/Table.vue";

export default {
  components: {
    BusinessLayout,
    Search,
    Table,
    TitleBar,
    DestroyButton,
  },
  props: ["data", "assignments", "filters"],
  data() {
    return {
      tableOptions: {
        titles: [
          {
            name: this.__("Name"),
            className: "col-md-5",
          },
          {
            name: this.__("Service"),
            className: "col-md-3",
          },
          {
            name: this.__("Price"),
            className: "col-md-3 text-end",
          },
          {
            name: this.__("Action"),
            className: "col-md-1 text-end",
          },
        ],
      },
    };
  },
};
</script>
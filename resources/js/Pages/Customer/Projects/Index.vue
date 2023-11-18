<template>
  <AppHead :title="data.title" />
  <div class="container page-container">
    <PageTitle :title="data.title">
        <AddButton :href="route('customer.projects.create')" />
    </PageTitle>
    <div class="row">
      <div class="col-md-12">
        <Table
          :options="tableOptions"
          :links="projects.links"
          :total="projects.total"
          :tableStyle="'fs-8'"
        >
          <template v-slot>
            <tr v-for="(project, index) in projects.data" :key="index">
              <td>
                <Link :href="route('customer.projects.show', project.uuid)">{{
                  project.name
                }}</Link>
              </td>
              <td>
                {{ project.service.name }}
              </td>

              <td class="text-end"></td>
            </tr>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>
    
    <script>
import Table from "../../../components/Table.vue";

export default {
  components: {
    Table,
  },
  props: ["data", "projects"],
  data() {
    return {
      tableOptions: {
        titles: [
          {
            name: this.__("Name"),
            className: "",
          },
          {
            name: this.__("Service"),
            className: "",
          },
          {
            name: "",
            className: "",
          },
        ],
      },
    };
  },
};
</script>
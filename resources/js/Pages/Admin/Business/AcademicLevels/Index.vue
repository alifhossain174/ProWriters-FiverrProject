<template>
  <BusinessLayout :title="data.title">
    <TitleBar :title="data.title" :create_link="route('admin.academicLevels.create')"/>
    <SearchBar :url="route('admin.academicLevels.index')" :filters="filters.filters" :hide_inactive_search="true" />
        
    <Table :options="tableOptions" :links="academic_levels.links" :total="academic_levels.total">
      <template v-slot>
        <tr v-for="(academic_level, index) in academic_levels.data" :key="index">
          <td>
            <Link :href="route('admin.academicLevels.edit', academic_level.id)">{{ academic_level.name }}</Link>
          </td>   
          <td class="text-end">
            {{ (academic_level.percentage) ? parseFloat(academic_level.percentage) : 0}}%
          </td>              
          <td class="col-md-2 text-end">
            <DestroyButton :delete_url="route('admin.academicLevels.destroy', academic_level.id)"/>
          </td>
        </tr>
      </template>
    </Table>
  </BusinessLayout>
</template>

<script>
import BusinessLayout from "../Partials/BusinessLayout.vue";
import SearchBar from "../../../../Shared/SearchBar.vue";
import TitleBar from "../Partials/TitleBar.vue";
import DestroyButton from "../../../../components/Form/DestroyButton.vue";

import Table from "../../../../components/Table.vue";

export default {
  components: {
    BusinessLayout,
    SearchBar,
    Table,
    TitleBar,
    DestroyButton,
  },
  props: ["data", "academic_levels", "filters"],
  data() {
    return {
      tableOptions: {
        titles: [
        {
            name: this.__("Name"),
            className: "col-md-6",
          },          
          {
            name: this.__("Markup"),
            className: "col-md-4 text-end",
          },          
          {
            name: this.__("Action"),
            className: "col-md-2 text-end",
          },
        ],
      },
    };
  },
};
</script>
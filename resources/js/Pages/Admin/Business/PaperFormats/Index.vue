<template>
  <BusinessLayout :title="data.title">
    <TitleBar :title="data.title" :create_link="route('admin.paperFormats.create')"/>
    <SearchBar :url="route('admin.paperFormats.index')" :filters="filters.filters" :hide_inactive_search="true" />
        
    <Table :options="tableOptions" :links="paper_formats.links" :total="paper_formats.total">
      <template v-slot>
        <tr v-for="(paperFormat, index) in paper_formats.data" :key="index">
          <td>
            <Link :href="route('admin.paperFormats.edit', paperFormat.id)">{{ paperFormat.name }}</Link>
          </td>                       
          <td class="col-md-2 text-end">
            <DestroyButton :delete_url="route('admin.paperFormats.destroy', paperFormat.id)"/>
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
  props: ["data", "paper_formats", "filters"],
  data() {
    return {
      tableOptions: {
        titles: [
        {
            name: this.__("Name"),
            className: "col-md-6",
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
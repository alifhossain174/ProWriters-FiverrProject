<template>
  <BusinessLayout :title="data.title">
    <TitleBar :title="data.title" :create_link="route('admin.grammaticalPeople.create')"/>
    <SearchBar :url="route('admin.grammaticalPeople.index')" :filters="filters.filters" :hide_inactive_search="true" />
        
    <Table :options="tableOptions" :links="grammatical_people.links" :total="grammatical_people.total">
      <template v-slot>
        <tr v-for="(grammaticalPerson, index) in grammatical_people.data" :key="index">
          <td>
            <Link :href="route('admin.grammaticalPeople.edit', grammaticalPerson.id)">{{ grammaticalPerson.name }}</Link>
          </td>                       
          <td class="col-md-2 text-end">
            <DestroyButton :delete_url="route('admin.grammaticalPeople.destroy', grammaticalPerson.id)"/>
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
  props: ["data", "grammatical_people", "filters"],
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
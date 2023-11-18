<template>
  <BusinessLayout :title="data.title">

    <TitleBar :title="data.title" :create_link="route('admin.freelancerLevels.create')"/>
    <SearchBar :url="route('admin.freelancerLevels.index')" :filters="filters.filters" :hide_inactive_search="true" />
        
    <Table :options="tableOptions" :links="freelancer_levels.links" :total="freelancer_levels.total">
      <template v-slot>
        <tr v-for="(freelancerLevel, index) in freelancer_levels.data" :key="index">
          <td>
            <Link :href="route('admin.freelancerLevels.edit', freelancerLevel.id)">{{ freelancerLevel.name }}</Link>
          </td>
          <td class="text-center">            
            <span v-if="freelancerLevel.is_default"><i class="fa-solid fa-circle-check text-success"></i></span>
          </td>                    
          <td class="text-center">
            {{ freelancerLevel.numeric_value  }}
          </td>  
          <td class="text-center">            
            <span v-if="freelancerLevel.is_popular"><i class="fa-solid fa-circle-check text-success"></i></span>
          </td>                   
          <td class="col-md-2 text-end">
            <DestroyButton :delete_url="route('admin.freelancerLevels.destroy', freelancerLevel.id)"/>
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
  props: ["data", "freelancer_levels", "filters"],
  data() {
    return {
      tableOptions: {
        titles: [
          {
            name: this.__("Name"),
            className: "col-md-4",
          },          
          {
            name: this.__("Default"),
            className: "col-md-2 text-center",
          },          
          {
            name: this.__("Numeric value"),
            className: "col-md-3 text-end",
          }, 
          {
            name: this.__("Popular"),
            className: "col-md-2 text-center",
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
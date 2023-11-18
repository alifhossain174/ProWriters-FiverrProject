<template>
  <AppHead :title="data.title" />
  <div class="container page-container">
    <PageTitle :title="data.title">
      <AddButton :href="data.urls.new_item" />
    </PageTitle>

    <div class="row">
      <div class="col-md-3">
        <Search
          :data="data"
          :filters="filters.filters"
          :only="['freelancers', 'filters']"
        />
      </div>

      <div class="col-md-9">
        <Table
          :options="tableOptions"
          :links="freelancers.links"
          :total="freelancers.total"
          :only="['freelancers', 'filters']"
        >
          <template v-slot>
            <tr v-for="(freelancer, index) in freelancers.data" :key="index">
              <td class="align-middle">
                <img
                  :src="freelancer.small_avatar"
                  class="avatar rounded-circle"
                />
              </td>
              <td class="align-middle">
                <Link
                  :href="route('admin.freelancers.show', freelancer.uuid)"
                  >{{ freelancer.full_name }}</Link
                >
                <div>
                  <small class="text-muted"
                    >{{ __("ID") }}: {{ freelancer.code }}</small
                  >
                </div>
                <div>
                  <small class="text-muted"
                    ><i class="fa-solid fa-medal"></i> {{ __("Level") }} :
                    <span class="text-danger">{{
                      freelancer.freelancer_level_name
                    }}</span></small
                  >
                </div>
                <div v-if="freelancer.inactive"><span class="badge text-bg-danger">{{ __('Inactive')}}</span></div>
              </td>
              <td class="align-middle">
                <div><i class="fa-regular fa-envelope"></i> {{ freelancer.email }}</div>
                <div> <i class="fa-solid fa-phone"></i> {{ freelancer.phone }}</div>
              </td>              
              <td class="align-middle">                
                {{ localDateTime(freelancer.last_login_at) }}
              </td>
            </tr>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./Partials/Search.vue";
import Table from "../../../components/Table.vue";



export default {
  props: ["data", "freelancers", "filters"],
  components: {
    Table,  
    Search,
  },
  data() {
    return {
      tableOptions: {
        titles: [
          {
            name: '',
            className: "",
          },
          {
            name: this.__("Name"),
            className: "",
          },
          {
            name: this.__("Email"),
            className: "",
          },          
          {
            name: this.__("Last login"),
            className: "",
          },
        ],
      },
    };
  },
};
</script>
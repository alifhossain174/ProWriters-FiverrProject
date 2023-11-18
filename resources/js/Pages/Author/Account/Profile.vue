<template>
  <AppHead :title="data.title" />
  <AccountLayout :author="author">
    <div class="card">
      <div class="card-header h5">
        {{ data.title }}
      </div>
      <div class="card-body">
        <h5 class="fs-7">{{ __("Services") }}</h5>
        <template v-for="(service, index) in data.services" :key="index">
          <span
            v-if="service"
            class="badge badge-lg badge-soft-primary me-2 mb-2"
            >{{ service.name }}</span
          >
        </template>

        <hr />
        <h5 class="fs-7">{{ __("Author Level") }} {{ __("&") }} {{ __("Rate") }}</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>{{ __("Name") }}</th>
              <th class="text-end">{{ __("Writing") }}</th>
              <th class="text-end">{{ __("Editing") }}</th>
              <th class="text-end">{{ __("Proofreading") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-muted text-left">
                {{ data.author_level.name }}
              </td>
              <td class="text-end">
                {{
                  data.author_level
                    .author_price_per_word_writing
                }}
                <div>
                  <small class="text-muted">{{ __("Per word price") }}</small>
                </div>
              </td>
              <td class="text-end">
                {{
                  data.author_level
                    .author_price_per_word_editing
                }}
                <div>
                  <small class="text-muted">{{ __("Per word price") }}</small>
                </div>
              </td>
              <td class="text-end">
                {{
                  data.author_level
                    .author_price_per_word_proofreading
                }}
                <div>
                  <small class="text-muted">{{ __("Per word price") }}</small>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AccountLayout>
</template>
  
  <script>
import AccountLayout from "./Partials/AccountLayout.vue";

export default {
  props: ["data", "author"],
  components: {
    AccountLayout,
  },
};
</script>
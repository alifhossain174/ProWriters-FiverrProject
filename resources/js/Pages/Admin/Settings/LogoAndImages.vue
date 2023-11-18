<template>
  <SettingsLayout :title="data.title">
    <form @submit.prevent="form.post(route('admin.settings.logoAndImages.update'))">
      <ActionToolBar
        :disable_save_button="form.processing"
        :toolbar="toolbar"
      />
      <FileChooser
        v-model="form.company_logo"
        name="company_logo"
        :label="__('Logo')"             
      />   
  
    </form>
  </SettingsLayout>
</template>
 
 <script>
import SettingsLayout from "./Partials/SettingsLayout.vue";
import ActionToolBar from "./Partials/ActionToolBar.vue";
import { FileChooser} from "../../../components/Form/Index.js";

export default {
  components: {
    SettingsLayout,
    ActionToolBar,
    FileChooser,   
  },
  props: ["data", "records"],
  data() {
    return {
      form: this.$inertia.form(this.records),
      toolbar: {
        title: this.data.title,
      },
    };
  },
};
</script>
<template>
  <AppHead :title="data.title" />
  <ManageContentLayout :content_language="content_language" :title="data.title">
    <form
      @submit.prevent="
        form.patch(
          route(
            'admin.manage.content.homepage.section.hero.update',
            content_language
          )
        )
      "
    >
      <Input
        v-model="form.title"
        :label="__('Title')"
        name="title"
        :required="true"
      />
      <Input
        v-model="form.sub_title"
        :label="__('Sub Title')"
        name="sub_title"
      />
      <TextArea v-model="form.content" :label="__('Content')" name="content" />

      <Input
        v-model="form.image_alt_text"
        :label="__('Image Alt Text')"
        name="image_alt_text"
      />

      <SubmitButton :disabled="form.processing" />
    </form>
  </ManageContentLayout>
</template>
    
    <script>
import ManageContentLayout from "../Partials/ManageContentLayout.vue";
import {
  Input,
  TextArea,
  FileChooser,
  SubmitButton,
  Select,
  ColorPicker,
} from "../../../../components/Form/Index.js";
export default {
  props: ["data", "existing_record", "content_language"],
  components: {
    ManageContentLayout,
    Input,
    SubmitButton,
    TextArea,
    FileChooser,
    Select,
    ColorPicker,
  },
  data() {
    return {
      form: this.$inertia.form(this.prepareForm()),
      formConfig: {
        preserveScroll: true,
        onSuccess: () => this.form.reset(),
      },
    };
  },
  methods: {
    prepareForm() {
      let inputs = {
        title: null,
        sub_title: null,
        content: null,
        image: null,
        image_alt_text: null,
        image_position: null,
        appearance: {
          bg_color: null,
          text_color: null,
        },
      };
      if (this.existing_record) {
        inputs = { ...inputs, ...this.existing_record };
      }
      return inputs;
    },
  },
};
</script>
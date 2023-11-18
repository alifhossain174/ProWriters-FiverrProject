<template>
  <Modal :title="data.title" size="small">
    <form
      @submit.prevent="
        form.post(route('admin.tasks.update.editor', task.uuid))
      "
    >    
      <div class="mb-4">
        <label class="form-label">{{ __("Editor for the task") }}</label>
        <v-select
          :placeholder="__('Select')"
          class="w-100"
          v-model="form.editor_id"
          :options="data.assignees"
          :reduce="editor => editor.id" 
          label="full_name"
         
          :filter="fuseSearch"
        >
          <template v-slot:option="editor">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <img
                  class="avatar"
                  :src="editor.small_avatar"
                  :alt="editor.full_name"
                  loading="lazy"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <div>{{ editor.full_name }}</div>
                <small class="text-muted">{{ editor.code }}</small>
              </div>
            </div>
          </template>
        </v-select>
        <ValidationError :name="'editor_id'" />
      </div>
      
    

      <SubmitButton :disabled="form.processing" />
    </form>
  </Modal>
</template>


<script>
import {
 
  Select,
  SubmitButton,

} from "../../../components/Form/Index.js";
import Fuse from "fuse.js";

export default {
  props: ["data", "task"],
  components: { 
    Select,
    SubmitButton,
 
  },
  data() {
    return {
      form: this.$inertia.form({
        editor_id: this.task.editor_id,    
      }),
    };
  },
  methods: {
    fuseSearch(options, search) {
      const fuse = new Fuse(options, {
        keys: ["first_name", "last_name", "code"],
        shouldSort: true,
      });
      return search.length
        ? fuse.search(search).map(({ item }) => item)
        : fuse.list;
    },
  },
};
</script>

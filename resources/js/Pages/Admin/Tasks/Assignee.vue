<template>
  <Modal :title="data.title" size="small">
    <form
      @submit.prevent="
        form.post(route('admin.tasks.update.assignee', task.uuid))
      "
    >    
      <div class="mb-2">
        <label class="form-label">{{ __("Author") }}</label>
        <v-select
          :placeholder="__('Select')"
          class="w-100"
          v-model="form.author_id"
          :options="data.assignees"
          :reduce="author => author.id" 
          label="full_name"
         
          :filter="fuseSearch"
        >
          <template v-slot:option="author">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <img
                  class="avatar"
                  :src="author.small_avatar"
                  :alt="author.full_name"
                  loading="lazy"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <div>{{ author.full_name }}</div>
                <small class="text-muted">{{ author.code }}</small>
              </div>
            </div>
          </template>
        </v-select>
        <ValidationError :name="'author_id'" />
      </div>
      
      <DatePicker
        v-model="form.dead_line_for_author"
        :label="__('Due date for the Author')"
        name="dead_line_for_author"
      />

      <Input
        v-model="form.author_payment_amount"
        :label="__('Payment Amount')"
        name="author_payment_amount"
      />

      <SubmitButton :disabled="form.processing" />
    </form>
  </Modal>
</template>


<script>
import {
  Input,
  Select,
  SubmitButton,
  DatePicker,
} from "../../../components/Form/Index.js";
import Fuse from "fuse.js";

export default {
  props: ["data", "task"],
  components: {
    Input,
    Select,
    SubmitButton,
    DatePicker,
  },
  data() {
    return {
      form: this.$inertia.form({
        author_id: this.task.author_id,
        author_payment_amount: (this.task.author_payment_amount) ? parseFloat(
          this.task.author_payment_amount
        ).toFixed(2) : 0,
        dead_line_for_author: this.task.dead_line_for_author,
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

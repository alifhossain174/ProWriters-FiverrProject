<template>
  <Modal :title="data.title">
    <form
    @submit.prevent="
        existing_record
          ? form.patch(route('freelancer.bids.update', existing_record.uuid))
          : form.post(route('freelancer.bidRequests.bids.store', data.bidRequest_uuid))
      "
    >
      <Input
        v-model="form.total"
        name="total"
        :label="__('Bidding Amount')"
        :required="true"
        @keypress="onlyNumber($event, form.total)"
        :tooltip="__('The final amount that will be charged to the customer')"
      />
      <div class="mt-2 mb-2">{{ __('You will receive') }} {{ formatMoney(freelancer_payment_amount) }}</div>

      <SubmitButton :disabled="form.processing" />
    </form>
  </Modal>
</template>

<script>
import {
  Input,
  SubmitButton,
} from "../../../components/Form/Index.js";

export default {
  components: {
    Input,    
    SubmitButton,
  },
  props: ["data", "existing_record"],
  watch: {
    "form.total": {
      handler(newValue, oldValue) {
        this.calculateFreelancerPayment(newValue);
      },
      deep: true,
    },
  },
  data() {
    return {
      form: this.$inertia.form(this.prepareForm()),
      formConfig: {
        preserveScroll: false,
      },
      freelancer_payment_amount: 0,
    };
  },
  methods: {
    prepareForm() {
      let inputs = {
        total: null,
      };
      if (this.existing_record) {
        inputs = { ...inputs, ...this.existing_record };
      }
      return inputs;
    },
    calculateFreelancerPayment(total) {
      total = parseFloat(total);
      let rate = parseFloat(this.data.platform_commission_rate);
      let company_commission = (total * rate) / 100;
      this.freelancer_payment_amount = total - company_commission;
    },
  },
};
</script>
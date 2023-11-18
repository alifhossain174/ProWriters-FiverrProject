<template>
  <div class="shadow-sm p-3 mb-5 bg-white rounded">
    <div v-if="!$store.state.is_on_bidding_mode">
      <h5>{{ __("Order Summary") }}</h5>
      <hr />
      <div>{{ $store.state.serviceModel.name }}</div>
      <div>{{ $store.state.assignmentModel.name }}</div>

      <div class="summary__row">
        <span>{{ __("Deadline") }}:</span
        ><span>{{ $store.state.form.dead_line }}</span>
      </div>

      <table class="table table-sm">
        <tbody>
          <tr>
            <th class="col-md-6">{{ __("Basic Price") }}</th>
            <td class="col-md-6 text-end">
              {{ formatMoneyFromNumber($store.getters.getBasicPrice()) }}
            </td>
          </tr>

          <tr>
            <th class="col-md-6">
              {{ __("Customer Service") }}
            </th>
            <td class="col-md-6 text-end">
              {{ formatMoneyFromNumber(service_level_price) }}
            </td>
          </tr>

          <tr
            v-if="
              $store.state.form.added_services &&
              $store.state.form.added_services.length > 0
            "
          >
            <td colspan="2">
              <div class="mt-3">
                <div style="font-weight: bold">
                  {{ __("Additional Services") }}
                </div>
                <div
                  class="row"
                  v-for="row in $store.state.form.added_services"
                  v-bind:key="row.id"
                >
                  <div class="col-md-6">
                    <div class="pb-2 pt-2 pl-2">{{ row.name }}</div>
                  </div>
                  <div class="col-md-6 text-end">
                    {{ formatMoneyFromNumber(row.calculated_price) }}
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <th class="col-md-6">{{ __("Subtotal") }}</th>
            <td class="col-md-6 text-end">
              {{ formatMoneyFromNumber(sub_total) }}
            </td>
          </tr>

          <tr>
            <th scope="row" style="width: 30%">{{ __("Total") }}</th>
            <td style="width: 80%" class="text-end">
              {{ calculateTotal }}
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="$store.state.data.is_admin">
        <div class="mb-3 form-check">
          <input
            v-model="$store.state.form.is_total_overridden"
            type="checkbox"
            class="form-check-input"
            id="is_total_overridden"
          />
          <label class="form-check-label" for="is_total_overridden">{{
            __("Override Total")
          }}</label>
        </div>
        <Input
          v-if="$store.state.form.is_total_overridden"
          v-model="$store.state.form.updated_total"
          :label="__('Enter updated Total')"
          @keypress="onlyNumber($event, $store.state.form.updated_total)"
        />
      </div>

      <div class="d-grid gap-2">
        <button
          v-if="$store.state.data.is_admin"
          type="button"
          class="btn btn-outline-primary"
          v-on:click.prevent="submit()"
        >
          <span v-if="$store.state.data.is_edit_on_mode">
            <i class="fa-solid fa-pen-to-square"></i> {{ __("Update") }}
          </span>
          <span v-else>
            <i class="fa-solid fa-plus"></i> {{ __("Create Task") }}
          </span>
        </button>
        <button
          v-else
          type="button"
          class="btn btn-success"
          v-on:click.prevent="submit()"
        >
          <i class="fa-solid fa-cart-plus"></i> {{ __("Add to cart") }}
        </button>

        <button
          v-if="!$store.state.data.is_edit_on_mode && $store.state.data.customer_is_allowed_to_pay_later"
          type="button"
          class="btn btn-outline-primary"
          v-on:click.prevent="payLater()"
        >
         <i class="fa-solid fa-money-bill-wave"></i> {{ __("Pay Later") }}
        </button>

      </div>
    </div>
    <div v-else>
      <Input          
          v-model="$store.state.form.budget"
          :label="__('Enter your budget')"
          @keypress="onlyNumber($event, $store.state.form.budget)"
          name="budget"
        />
      <div class="d-grid gap-2">
        <button
          type="button"
          class="btn btn-sm btn-success"
          v-on:click.prevent="sendRequestForBid()"
        >
        <i class="fa-regular fa-paper-plane"></i> {{ __("Send request for Bid") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../../components/Form/Input.vue";

export default {
  inject: ["$store"],
  props: ["is_on_bidding_mode"],
  components: {
    Input,
  },
  data() {
    return {
      base_price: 0,
      service_level_price: 0,
      sub_total: 0,
      currencyPrecision: 4,
    };
  },
  
  computed: {
    calculateTotal: function () {
      let base_price = this.$store.getters.getBasicPrice();

      var additionalServicesPrice = parseFloat(
        this.getAdditionalServicesPrice()
      );

      var serviceLevelPrice = parseFloat(
        this.$store.state.serviceLevelModel.price
      );

      // Calculate sub total
      var sub_total = base_price + serviceLevelPrice + additionalServicesPrice;

      var total = sub_total;
      this.sub_total = sub_total;
      this.service_level_price = serviceLevelPrice;

      if (isNaN(total)) {
        return 0;
      }

      return this.formatMoneyFromNumber(total);
    },
  },
  methods: {
    getAdditionalServicesPrice: function () {
      var amount = 0;
      if (
        this.$store.state.form.added_services &&
        this.$store.state.form.added_services.length > 0
      ) {
        this.$store.state.form.added_services.forEach((row) => {
          amount += parseFloat(row.calculated_price);
        });
      }
      return amount;
    },

    calculatePercentage(basePrice, percentageToAdd) {
      var number = (parseFloat(basePrice) * parseFloat(percentageToAdd)) / 100;
      return Number(parseFloat(number).toFixed(this.currencyPrecision));
    },
    isObjectEmpty(obj) {
      return Object.keys(obj).length === 0 && obj.constructor === Object;
    },
    formatMoneyFromNumber($amount) {
      return this.formatMoney($amount, currencyConfig.currency);
    },
    submit() {
      if (
        this.$store.state.data.is_edit_on_mode &&
        this.$store.state.data.is_admin
      ) {
        this.$inertia.patch(
          this.$store.state.urls["add_to_cart"],
          this.$store.state.form
        );
      } else {
        this.$inertia.post(
          this.$store.state.urls["add_to_cart"],
          this.$store.state.form
        );
      }
    },
    sendRequestForBid() {
      this.$inertia.post(
        this.$store.state.urls["request_for_bid"],
        this.$store.state.form
      );
    },
    payLater() {
      this.$inertia.post(
        this.$store.state.urls["pay_later"],
        this.$store.state.form
      );
    },
  },
};
</script>
<template>
  <div
    class="mt-4"
    v-if="
      $store.state.serviceModel.additional_services &&
      Object.values($store.state.serviceModel.additional_services).length
    "
  >
    <h5 class="card-title">{{ __("Additional Services") }}</h5>

    <div
      class="card mb-3 mt-2"
      v-for="row in $store.state.serviceModel.additional_services"
      v-bind:key="row.id"
    >
      <div class="row no-gutters">
        <div class="col-md-8">
          <div class="card-body">
            <div class="card-title">{{ row.name }}</div>
            <small class="text-muted">{{ row.description }}</small>

            <div
              class="mt-3"
              v-if="row.type == priceTypes.per_entered_quantity"
            >
              <label>{{ __(row.per_entered_quantity_label) }}</label>
              <div :class="$store.getters.constants.style.formGroup">
                <div :class="$store.getters.constants.style.formElement">
                  <InputSpinner
                    @updated="updateAdditionalService(row)"
                    v-model="row.quantity"
                    :step="1"
                    :min="1"
                  ></InputSpinner>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex justify-content-center align-items-center h-100">
            <a
              href="#"
              v-on:click.prevent="additionalServiceChanged(row.id, row)"
            >
              <div
                class="btn btn-sm btn-block"
                v-bind:class="getServiceContainerClass(row.id)"
              >
                <span v-if="addedServiceList(row.id)">
                  <i class="fas fa-check-circle"></i> {{ __("Added") }}
                </span>
                <span v-else>
                  <i class="fas fa-plus"></i> {{ __("Add") }}
                </span>
                {{ formatMoneyFromNumber(getPrice(row)) }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <ErrorField :name="'added_services'"/>
  </div>
</template>

<script>
import InputSpinner from "../../InputSpinner.vue";

export default {
  inject: ["$store"],
  components: {
    InputSpinner,
  },
  data() {
    return {
      priceTypes: {
        fixed: "fixed",
        percentage: "percentage",
        per_unit: "per_unit",
        per_entered_quantity: "per_entered_quantity",
      },
    };
  },
  methods: {
    formatMoneyFromNumber($amount) {
      return this.formatMoney($amount, currencyConfig.currency);
    },
    getPrice(row) {
      if (row.type == this.priceTypes.fixed) {
        return row.price;
      } else if (row.type == this.priceTypes.percentage) {        
        return (row.price / 100) * this.$store.state.base_price;
      } else if (row.type == this.priceTypes.per_unit) {
        return row.price * this.$store.getters.getQuantityInLargestUnitOfMeasurement();
      } else if (row.type == this.priceTypes.per_entered_quantity) {
        return row.price * row.quantity;
      }
    },
    additionalServiceChanged(id, additionalService) {
      var isAlreadyInList = this.addedServiceList(id);
      if (isAlreadyInList) {
        this.$store.state.form.added_services.splice(isAlreadyInList.index, 1);
      } else {
        additionalService.calculated_price = this.getPrice(additionalService);
        this.$store.state.form.added_services.push(additionalService);
      }
    },
    updateAdditionalService(additionalService) {
      var isAlreadyInList = this.addedServiceList(additionalService.id);
      if (isAlreadyInList) {
        additionalService.calculated_price = this.getPrice(additionalService);
        this.$store.state.form.added_services[isAlreadyInList.index] =
          additionalService;
      }
    },
    addedServiceList(id) {
      var status = false;
      this.$store.state.form.added_services.map((item, index) => {
        if (item.id == id) {
          status = {
            index: index,
            value: item,
          };
        }
      });
      return status;
    },
    getServiceContainerClass(additionalServiceId) {
      return {
        "btn-info": this.addedServiceList(additionalServiceId),
        "btn-outline-info": !this.addedServiceList(additionalServiceId),
      };
    },
  },
};
</script>

<template>
  <BusinessLayout :title="data.title">
    <div class="row">
      <div class="col-md-12">
        <h4>{{ data.title }}</h4>
        <hr />
        <div class="list-group list-group-horizontal-md">
          <Link
            v-for="(row, key) in data.services"
            :key="key"
            :href="route('admin.services.edit', row.id)"
            class="list-group-item list-group-item-action d-flex gap-3"
            aria-current="true"
          >
            <img
              width="40"
              height="40"
              :src="data.icons[row.id]"
              alt="twbs"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between align-items-center">
              <div>
                <h6 class="mb-0">{{ row.name }}</h6>
              </div>
              <small class="opacity-50 text-nowrap"
                ><i class="fa-solid fa-angle-right"></i
              ></small>
            </div>
          </Link>
        </div>

        <div class="mt-4 bg-light pt-2 pb-2 text-center mb-2">
          How price calculation works
        </div>
        <fieldset class="border rounded-3 p-3 mb-2">
          <legend
            class="float-none w-auto px-3 fs-8 text-success"
            style="margin-left: auto; margin-right: auto"
          >
            Content Writing
          </legend>

          <table class="table table-sm table-bordered">
            <tr>
              <th>Base Price</th>
              <td>
                = Price per word
                <small>(Based on the selected Author Level)</small> x Number of words
              </td>
            </tr>
          </table>

          <table class="table table-sm table-bordered">
            <tr>
              <td>Assignment Price</td>
              <td>= (defined % of Base Price)</td>
            </tr>
            <tr>
              <td>Subject Price</td>
              <td>= (defined % of Base Price)</td>
            </tr>
            <tr>
              <td>Urgency Price</td>
              <td>= (defined % of Base Price)</td>
            </tr>
            <tr>
              <td>Language Price</td>
              <td>= (defined % of Base Price)</td>
            </tr>
            <tr>
              <th>Total Price</th>
              <td>= Summation of all the above prices</td>
            </tr>
          </table>

          <table class="table table-sm table-bordered">
            <tr>
              <th>Final Price</th>
              <td>= Base Price + Total Price</td>
            </tr>
            <tr>
              <th>Order Total</th>
              <td>= Final Price + Additional Services Price + Customer Service Levels</td>
            </tr>
          </table>
        </fieldset>

        <fieldset class="border rounded-3 p-3 mb-2">
          <legend
            class="float-none w-auto px-3 fs-8 text-success"
            style="margin-left: auto; margin-right: auto"
          >
            Academic Writing
          </legend>

          <table class="table table-sm table-bordered">
            <tr>
              <th>Base Price</th>
              <td>
                = Price per word
                <small>(Based on the selected Author Level)</small> x Number of words
              </td>
            </tr>
          </table>

          <table class="table table-sm table-bordered">
            <tr>
              <td>Assignment Price</td>
              <td>= (defined % of Base Price)</td>
            </tr>
            <tr>
              <td>Subject Price</td>
              <td>= (defined % of Base Price)</td>
            </tr>
            <tr>
              <td>Urgency Price</td>
              <td>= (defined % of Base Price)</td>
            </tr>
            <tr>
              <td>Academic Level Price</td>
              <td>= (defined % of Base Price)</td>
            </tr>
            <tr>
              <th>Total Price</th>
              <td>= Summation of all the above prices</td>
            </tr>
          </table>

          <table class="table table-sm table-bordered">
            <tr>
              <th>Final Price</th>
              <td>= Base Price + Total Price</td>
            </tr>
            <tr>
              <th>Order Total</th>
              <td>= Final Price + Additional Services Price + Customer Service Levels</td>
            </tr>
          </table>
        </fieldset>

        <fieldset class="border rounded-3 p-3 mb-2">
          <legend
            class="float-none w-auto px-3 fs-8 text-success"
            style="margin-left: auto; margin-right: auto"
          >
            Resume Writing
          </legend>

          <table class="table table-sm table-bordered">
            <tr>
              <th>Final Price</th>
              <td>= Fixed Price, defined in Resume Packages</td>
            </tr>
            <tr>
              <th>Order Total</th>
              <td>= Final Price + Additional Services Price + Customer Service Levels</td>
            </tr>
          </table>
        </fieldset>
      </div>
    </div>
  </BusinessLayout>
</template>

<script>
import BusinessLayout from "../Partials/BusinessLayout.vue";

export default {
  components: {
    BusinessLayout,
  },
  props: ["data"],
};
</script>

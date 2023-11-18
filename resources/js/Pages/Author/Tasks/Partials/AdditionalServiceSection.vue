<template>
  <div class="card" v-if="task.additional_services.length > 0">
    <div class="card-body">
      <h5 class="card-title">{{ __("Additional Services") }}</h5>
      <div class="p-2" style="background-color: #f8f8f8">
        <div
          v-for="(service, index) in task.additional_services"
          class="border-bottom mb-2 pb-2"
          :key="index"
        >
          <small class="text-muted fw-bolder">{{ service.name }}</small>
          <table class="table table-sm">           
            <tr>
                <td>{{ __("Quantity") }} :</td>
                <td class="text-end">{{ service.pivot.quantity }}</td>
            </tr>
          </table>          
        </div>
      </div>
    </div>
  </div>
</template>
   
   <script>
export default {
  props: ["task"],
};
</script>
<template>
  <div
    class="modal fade"
    ref="modalComponent"
    id="modalComponent"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" :class="modalSize">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
          <button
            ref="closeButton"
            @click="redirect"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useModal } from "momentum-modal";

export default {
  props: ["title", "size"],
  mounted() {
    this.modalSize = this.size ? this.modalSizes[this.size] : this.modalSize;

    this.myModal = new bootstrap.Modal(this.$refs["modalComponent"], {
      backdrop: "static",
      keyboard: false,
    });
    this.myModal.show();

    // let scope = this;
    // this.$refs["modalComponent"].addEventListener(
    //   "hidePrevented.bs.modal",
    //   function (event) {
    //     scope.$refs["closeButton"].click();        
    //   }
    // );
  },
  watch: {
    show: {
      handler(isShow) {
        // this will be run immediately on component creation.
        if (!isShow && this.myModal) {
          this.myModal.hide();
        }
      },
      // force eager callback execution
      immediate: true,
    },
  },
  data() {
    return {
      redirect: useModal().redirect,
      show: useModal().show,
      myModal: null,
      modalSize: "regular",
      modalSizes: {
        large: "modal-xl",
        regular: "modal-lg",
        small: "modal-custom-small",
        extra_small: "modal-sm",
        full_screen: "modal-fullscreen-sm-down",
      },
    };
  },
};
</script>



  
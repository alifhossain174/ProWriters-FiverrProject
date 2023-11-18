<template>
  <div
    class="mt-4">
    <h5 class="card-title p-2" style="background-color: #eee">
      {{ __("Writer Levels") }}
    </h5>


      <div class="list-group mx-0" v-for="(row, index) in $store.state.data.author_levels"
        v-bind:key="row.id">
    <label class="list-group-item d-flex gap-2" @click.prevent="handleSelectAuthorLevel(row)">
      <input class="form-check-input flex-shrink-0" type="radio" :name="index" :id="index" :value="row.id" v-model="authorLevelId">
      <span>
        <div>{{ row.name }}</div>           
        <small class="d-block text-muted">{{ row.description }}</small>
      </span>
    </label>
     <!-- <div v-if="row.is_popular" class="ribbon blue">
              <span>{{ __("Popular") }}</span>
            </div> -->
 
  </div>
    
  

    <div
      class="mb-3 row mt-4"
      v-if="
        $store.state.authorLevelModel
          .allow_selecting_preferred_author_code
      "
    >
      <label class="col-md-4 col-form-label text-md-end"
        >{{ __("Preferred Writer's ID") }}
        <span
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          :title="
            __(
              'If you already have your favorite writer - type in his/her ID number here'
            )
          "
        >
          <i class="fas fa-question-circle"></i>
        </span>
      </label>
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            v-model="preferred_author_code"
            :readonly="$store.state.form.preferred_author_code"
            @focus="removeError('preferred_author_code')"
          />
          <button
            v-if="!$store.state.form.preferred_author_code"
            @click="handleSelectPreferredAuthor"
            class="btn btn-outline-primary"
            type="button"
            :disabled="!preferred_author_code"
          >
            {{ __("Add") }}
          </button>

          <button
            v-if="$store.state.form.preferred_author_code"
            @click="handleRemovePreferredAuthor"
            class="btn btn-outline-danger"
            type="button"
          >
            {{ __("Remove") }}
          </button>
        </div>

        <div class="text-success" v-if="hidePreferredAuthorAddedSuccess">
          <small>{{ __("Added") }}</small>
        </div>
        <ErrorField :name="'preferred_author_code'"></ErrorField>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["$store"],

  // watch: {
  //   "$store.state.form.author_level_id": {
  //     deep: true,
  //     handler(val, oldVal) {
  //       this.$store.dispatch("setAuthorLevelModel", val);
  //     },
  //   },
  // },
  // computed: {
  //   preferred_author_added() {
  //     return this.$store.state.form.preferred_author_code &&
  //       Object.values(this.$store.state.form.preferred_author_code).length
  //       ? true
  //       : false;
  //   },
  // },
  data() {
    return {
      priceTypes: {
        fixed: "fixed",
        percentage: "percentage",
      },
      errors: {},
      preferred_author_code: this.$store.state.form.preferred_author_code,
      hidePreferredAuthorAddedSuccess: false,
      authorLevelId : this.$store.state.form.author_level_id,
    };
  },
  methods: {
    addError(key, value) {
      this.errors[key] = value;
    },
    removeError(key) {
      delete this.errors[key];
    },
    // getPrice(row) {
    //   if (row.price == 0) {
    //     return this.$store.state.data.texts.Free;
    //   }
    //   if (row.type == this.priceTypes.fixed) {
    //     return "+" + this.formatMoney(row.price);
    //   } else {
    //     return "+" + parseFloat(row.price).toFixed(2) + "%";
    //   }
    // },
    handleSelectAuthorLevel(authorLevel) {      
      this.authorLevelId = authorLevel.id;
      if (authorLevel.id == this.$store.state.form.author_level_id) {
        // Go empty
      } else if (this.preferred_author_code) {
        alert(
          this.$store.state.data.texts
            .author_level_change_preferred_author_selected
        );
      } else {
        this.$store.state.form.author_level_id = authorLevel.id;       
      }
    },

    handleRemovePreferredAuthor() {
      this.preferred_author_code = null;
      this.$store.state.form.preferred_author_code = null;
    },
    handleSelectPreferredAuthor() {
      var self = this;
      self.removeError("preferred_author_code");
     
      if (self.preferred_author_code) {
        self.$store
          .methods.getAuthorLevelById(self.preferred_author_code)
          .then(function (response) {
            if (response.status == 1) {
              if (response.data.status == "success") {
                
                self.$store.state.form.preferred_author_code = self.preferred_author_code;

                self.hidePreferredAuthorAddedSuccess = true;
                setTimeout(
                  () => (self.hidePreferredAuthorAddedSuccess = false),
                  3000
                );
              } else if (response.data.status == "validation_error") {
                // Display Error
                self.addError(
                  "preferred_author_code",
                  response.data.errors.preferred_author_code
                );
                self.preferred_author_code = null;
              } else if (response.data.status == "no_data_found") {
                self.preferred_author_code = null;
              } else {
                self.preferred_author_code = null;
                alert(this.$store.state.data.texts.something_went_wrong);
              }
            }
          });
      } else {
        // Stay silent
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #6f7dfb;

.author-level-box {
  cursor: pointer;
  position: relative;
  border: 1px solid #373f59 !important;

  .name {
    margin-bottom: 15px;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-__form: uppercase;
    __ition: color 0.2s;
  }
}

.author-level-box:hover {
  background: #fefbf5;
  border: 1px solid $primary-color !important;
}

.author-level-box.active {
  color: #fff;
  background: linear-gradient(180deg, #6687f0 0, #8093db 100%);
  border: 2px solid #6787f0;
}

.author-level-box.active::before {
  font-family: "Font Awesome 5 Free";
  content: "\f00c";
  color: $primary-color;
  font-weight: 900;
  display: block;
  position: absolute;
  height: 13px;
  width: 15px;
  top: 9px;
  right: 9px;
}

.ribbon {
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 93px;
  height: 93px;
  text-align: right;
}
.ribbon span {
  font-size: 0.8rem;
  color: #fff;
  text-__form: uppercase;
  text-align: center;
  font-weight: bold;
  line-height: 32px;
  __form: rotate(45deg);
  width: 125px;
  display: block;
  background: #79a70a;
  background: linear-gradient(#9bc90d 0%, #79a70a 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 17px; // change this, if no border
  right: -29px; // change this, if no border
}

.ribbon span::before {
  content: "";
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: -1;
  border-left: 3px solid #79a70a;
  border-right: 3px solid __parent;
  border-bottom: 3px solid __parent;
  border-top: 3px solid #79a70a;
}
.ribbon span::after {
  content: "";
  position: absolute;
  right: 0%;
  top: 100%;
  z-index: -1;
  border-right: 3px solid #79a70a;
  border-left: 3px solid __parent;
  border-bottom: 3px solid __parent;
  border-top: 3px solid #79a70a;
}

.blue span {
  background: linear-gradient(#2989d8 0%, #1e5799 100%);
}
.blue span::before {
  border-left-color: #1e5799;
  border-top-color: #1e5799;
}
.blue span::after {
  border-right-color: #1e5799;
  border-top-color: #1e5799;
}

.author-level-box.active .blue span {
  background: #da722c;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #eee;
}

.separator:not(:empty)::before {
  margin-right: 0.25em;
}

.separator:not(:empty)::after {
  margin-left: 0.25em;
}
</style>
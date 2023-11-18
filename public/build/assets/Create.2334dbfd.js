import{I as f}from"./Input.d98634fc.js";import{T as c}from"./TextArea.328848c0.js";import{C as b}from"./CheckBox.0599dcb1.js";import{S as w}from"./Select.7a96caba.js";import{S as g}from"./SubmitButton.67fd88bd.js";import{_ as V,A as v,w as P,r as t,o as y,b as n,a as i,t as m,D as U}from"./app.2abe2877.js";import"./vanilla-picker.csp.f95a0d4d.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const S={components:{Input:f,Select:w,TextArea:c,SubmitButton:g,CheckBox:b},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let l={name:null,description:null,is_popular:null,is_default:null,numeric_value:1,customer_price_per_word_writing:0,freelancer_price_per_word_writing:0,customer_price_per_word_editing:0,freelancer_price_per_word_editing:0,customer_price_per_word_proofreading:0,freelancer_price_per_word_proofreading:0,number_of_tasks_at_a_time:2};return this.existing_record&&(l={...l,...this.existing_record}),l}}},k={class:"border rounded-3 p-3 mb-4"},C={class:"float-none w-auto px-3 fs-8"},N={class:"row fs-8"},B={class:"col-md-6"},q={class:"col-md-6"},K={class:"border rounded-3 p-3 mb-4"},F={class:"float-none w-auto px-3 fs-8"},I={class:"row fs-8"},D={class:"col-md-6"},W={class:"col-md-6"},L={class:"border rounded-3 p-3 mb-4"},M={class:"float-none w-auto px-3 fs-8"},A={class:"row fs-8"},E={class:"col-md-6"},T={class:"col-md-6"};function j(l,e,_,z,o,G){const s=t("Input"),u=t("Select"),d=t("CheckBox"),p=t("SubmitButton"),a=t("Modal");return y(),v(a,{title:_.data.title},{default:P(()=>[n("form",{onSubmit:e[18]||(e[18]=U(r=>_.existing_record?o.form.patch(l.route("admin.freelancerLevels.update",_.existing_record.id)):o.form.post(l.route("admin.freelancerLevels.store")),["prevent"]))},[i(s,{modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=r=>o.form.name=r),name:"name",label:l.__("Name"),required:!0},null,8,["modelValue","label"]),i(s,{modelValue:o.form.description,"onUpdate:modelValue":e[1]||(e[1]=r=>o.form.description=r),name:"description",label:l.__("Description")},null,8,["modelValue","label"]),i(u,{modelValue:o.form.numeric_value,"onUpdate:modelValue":e[2]||(e[2]=r=>o.form.numeric_value=r),options:_.data.dropdowns.numeric_values,label:l.__("Level in numeric value"),name:"numeric_value"},null,8,["modelValue","options","label"]),n("fieldset",k,[n("legend",C,m(l.__("Per Word"))+" "+m(l.__("Writing Price")),1),n("div",N,[n("div",B,[i(s,{modelValue:o.form.customer_price_per_word_writing,"onUpdate:modelValue":e[3]||(e[3]=r=>o.form.customer_price_per_word_writing=r),name:"price",label:l.__("Customer Price"),required:!0,onKeypress:e[4]||(e[4]=r=>l.onlyNumber(r,o.form.customer_price_per_word_writing))},null,8,["modelValue","label"])]),n("div",q,[i(s,{modelValue:o.form.freelancer_price_per_word_writing,"onUpdate:modelValue":e[5]||(e[5]=r=>o.form.freelancer_price_per_word_writing=r),name:"price",label:l.__("Freelancer Price"),required:!0,onKeypress:e[6]||(e[6]=r=>l.onlyNumber(r,o.form.freelancer_price_per_word_writing))},null,8,["modelValue","label"])])])]),n("fieldset",K,[n("legend",F,m(l.__("Per Word"))+" "+m(l.__("Editing Price")),1),n("div",I,[n("div",D,[i(s,{modelValue:o.form.customer_price_per_word_editing,"onUpdate:modelValue":e[7]||(e[7]=r=>o.form.customer_price_per_word_editing=r),name:"price",label:l.__("Customer Price"),required:!0,onKeypress:e[8]||(e[8]=r=>l.onlyNumber(r,o.form.customer_price_per_word_editing))},null,8,["modelValue","label"])]),n("div",W,[i(s,{modelValue:o.form.freelancer_price_per_word_editing,"onUpdate:modelValue":e[9]||(e[9]=r=>o.form.freelancer_price_per_word_editing=r),name:"price",label:l.__("Freelancer Price"),required:!0,onKeypress:e[10]||(e[10]=r=>l.onlyNumber(r,o.form.freelancer_price_per_word_editing))},null,8,["modelValue","label"])])])]),n("fieldset",L,[n("legend",M,m(l.__("Per Word"))+" "+m(l.__("Proofreading Price")),1),n("div",A,[n("div",E,[i(s,{modelValue:o.form.customer_price_per_word_proofreading,"onUpdate:modelValue":e[11]||(e[11]=r=>o.form.customer_price_per_word_proofreading=r),name:"price",label:l.__("Customer Price"),required:!0,onKeypress:e[12]||(e[12]=r=>l.onlyNumber(r,o.form.customer_price_per_word_proofreading))},null,8,["modelValue","label"])]),n("div",T,[i(s,{modelValue:o.form.freelancer_price_per_word_proofreading,"onUpdate:modelValue":e[13]||(e[13]=r=>o.form.freelancer_price_per_word_proofreading=r),name:"price",label:l.__("Freelancer Price"),required:!0,onKeypress:e[14]||(e[14]=r=>l.onlyNumber(r,o.form.freelancer_price_per_word_proofreading))},null,8,["modelValue","label"])])])]),i(s,{modelValue:o.form.number_of_tasks_at_a_time,"onUpdate:modelValue":e[15]||(e[15]=r=>o.form.number_of_tasks_at_a_time=r),name:"number_of_tasks_at_a_time",label:l.__("Number of tasks the freelancer can have in progress at a time"),required:!0,note:l.__("Enter -1 for unlimited")},null,8,["modelValue","label","note"]),i(d,{modelValue:o.form.is_popular,"onUpdate:modelValue":e[16]||(e[16]=r=>o.form.is_popular=r),name:"is_popular",label:l.__("Is Popular")},null,8,["modelValue","label"]),i(d,{modelValue:o.form.is_default,"onUpdate:modelValue":e[17]||(e[17]=r=>o.form.is_default=r),name:"is_default",label:l.__("Default Selection")},null,8,["modelValue","label"]),i(p,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const x=V(S,[["render",j]]);export{x as default};

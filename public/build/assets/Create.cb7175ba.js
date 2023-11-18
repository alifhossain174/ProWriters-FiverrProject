import{I as S}from"./Input.fe981f88.js";import{T as q}from"./TextArea.1f4fa0b9.js";import{_ as g,A as u,w as p,r as n,o as a,b as s,c as B,t as d,a as i,d as c,D as w}from"./app.571265cd.js";import{S as U}from"./Select.7a1d9270.js";import{S as k}from"./SubmitButton.59cbcabd.js";import"./vanilla-picker.csp.d11a8b31.js";import"./bootstrap.esm.2333d793.js";import"./debounce.94acad4c.js";const C={components:{Input:S,Select:U,TextArea:q,SubmitButton:k},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let t={name:null,type:null,description:null,per_entered_quantity_label:null,price:0,services:[]};return this.existing_record&&(t={...t,...this.existing_record}),t}}},N={key:0,class:"mb-3"},T={class:"form-label"},x={class:"text-muted"};function A(t,r,l,I,o,D){const _=n("v-select"),f=n("ValidationError"),m=n("Input"),b=n("TextArea"),V=n("Select"),y=n("SubmitButton"),v=n("Modal");return a(),u(v,{title:l.data.title},{default:p(()=>[s("form",{onSubmit:r[7]||(r[7]=w(e=>l.existing_record?o.form.patch(t.route("admin.additionalServices.update",l.existing_record.id)):o.form.post(t.route("admin.additionalServices.store")),["prevent"]))},[l.existing_record?c("",!0):(a(),B("div",N,[s("label",T,d(t.__("Price Type")),1),i(_,{reduce:e=>e.id,modelValue:o.form.type,"onUpdate:modelValue":r[0]||(r[0]=e=>o.form.type=e),options:l.data.dropdowns.price_types,label:"name",clearable:!1,searchable:!1,placeholder:t.__("Select")},{option:p(e=>[s("div",null,d(e.name),1),s("small",x,d(e.description),1)]),_:1},8,["reduce","modelValue","options","placeholder"]),i(f,{name:"type"})])),i(m,{modelValue:o.form.name,"onUpdate:modelValue":r[1]||(r[1]=e=>o.form.name=e),name:"name",label:t.__("Name"),required:!0},null,8,["modelValue","label"]),o.form.type==l.data.per_entered_quantity?(a(),u(m,{key:1,modelValue:o.form.per_entered_quantity_label,"onUpdate:modelValue":r[2]||(r[2]=e=>o.form.per_entered_quantity_label=e),name:"per_entered_quantity_label",label:t.__("Quantity Label"),required:!0},null,8,["modelValue","label"])):c("",!0),i(b,{rows:"2",modelValue:o.form.description,"onUpdate:modelValue":r[3]||(r[3]=e=>o.form.description=e),name:"description",label:t.__("Description"),required:!0},null,8,["modelValue","label"]),i(m,{modelValue:o.form.price,"onUpdate:modelValue":r[4]||(r[4]=e=>o.form.price=e),name:"price",label:t.__("Price"),required:!0,onKeypress:r[5]||(r[5]=e=>t.onlyNumber(e,o.form.price))},null,8,["modelValue","label"]),i(V,{multiple:!0,searchable:!0,options:l.data.dropdowns.services,modelValue:o.form.services,"onUpdate:modelValue":r[6]||(r[6]=e=>o.form.services=e),label:t.__("Services"),required:!0,name:"services"},null,8,["options","modelValue","label"]),i(y,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const j=g(C,[["render",A]]);export{j as default};

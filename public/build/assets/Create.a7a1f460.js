import{I as _}from"./Input.22a5d0b7.js";import{_ as f,A as c,w as b,r as m,o as V,b as t,a as r,D as v}from"./app.7185dbf0.js";import{C as S}from"./CheckBox.692c21c3.js";import{S as w}from"./Select.e5dd87a9.js";import{S as B}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import{P as C}from"./Phone.fbcfb39e.js";import{s as q}from"./CreateOrderStore.8f589769.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const U={props:["data"],provide(){return{$store:this.megaStore}},components:{Input:_,Select:w,CheckBox:S,Phone:C,SubmitButton:B,Academic},data(){return{megaStore:q,form:this.$inertia.form({first_name:null,last_name:null,email:null,password:null,phone:null,timezone:null,country_code:null})}}},g={class:"row"},I={class:"col-md-6"},N={class:"col-md-6"},h={class:"row"},k={class:"col-md-6"},M={class:"col-md-6"};function P(s,e,a,z,o,A){const i=m("Select"),n=m("Input"),d=m("Content"),u=m("SubmitButton"),p=m("Modal");return V(),c(p,{title:a.data.title,size:"large"},{default:b(()=>[t("form",{onSubmit:e[5]||(e[5]=v(l=>o.form.post(a.data.urls.submit_form),["prevent"]))},[r(i,{searchable:!0,options:a.data.dropdowns.services,modelValue:o.form.service_id,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.service_id=l),label:s.__("Service"),required:!0,name:"service_id"},null,8,["options","modelValue","label"]),t("div",g,[t("div",I,[r(n,{modelValue:o.form.first_name,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.first_name=l),name:"first_name",label:s.__("First Name"),required:!0},null,8,["modelValue","label"])]),t("div",N,[r(n,{modelValue:o.form.last_name,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.last_name=l),name:"last_name",label:s.__("Last Name"),required:!0},null,8,["modelValue","label"])])]),t("div",h,[t("div",k,[r(n,{modelValue:o.form.email,"onUpdate:modelValue":e[3]||(e[3]=l=>o.form.email=l),name:"email",label:s.__("Email"),required:!0},null,8,["modelValue","label"])]),t("div",M,[r(n,{modelValue:o.form.password,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.password=l),name:"password",label:s.__("Password"),required:!0},null,8,["modelValue","label"])])]),r(d),r(u,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const O=f(U,[["render",P]]);export{O as default};

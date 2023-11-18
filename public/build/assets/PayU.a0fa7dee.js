import{I as p}from"./Input.ae708ed5.js";import{_ as d,c as f,a as l,b as c,D as _,r,o as b}from"./app.969842cf.js";import{C as k}from"./CheckBox.a77c1607.js";import{S as y}from"./Select.df74d481.js";import{S as V}from"./SubmitButton.f6813064.js";import"./vanilla-picker.csp.0ced5960.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ed46515d.js";const v={components:{Select:y,Input:p,CheckBox:k,SubmitButton:V},inject:["data"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let t={name:null,keys:{environment:null,merchant_key:null,merchant_salt:null},inactive:null};return this.data.settings&&(t={...t,...this.data.settings}),t}}},h={class:"mb-3"};function S(t,e,B,U,n,a){const s=r("Select"),m=r("Input"),i=r("CheckBox"),u=r("SubmitButton");return b(),f("form",{onSubmit:e[5]||(e[5]=_(o=>n.form.patch(a.data.urls.submit_form),["prevent"]))},[l(s,{options:a.data.dropdowns.environments,modelValue:n.form.keys.environment,"onUpdate:modelValue":e[0]||(e[0]=o=>n.form.keys.environment=o),name:"keys.environment",label:t.__("Environment"),required:!0},null,8,["options","modelValue","label"]),l(m,{modelValue:n.form.name,"onUpdate:modelValue":e[1]||(e[1]=o=>n.form.name=o),name:"name",label:t.__("Display Name"),required:!0},null,8,["modelValue","label"]),l(m,{modelValue:n.form.keys.merchant_key,"onUpdate:modelValue":e[2]||(e[2]=o=>n.form.keys.merchant_key=o),name:"keys.merchant_key",label:t.__("Merchant Key"),required:!0},null,8,["modelValue","label"]),l(m,{modelValue:n.form.keys.merchant_salt,"onUpdate:modelValue":e[3]||(e[3]=o=>n.form.keys.merchant_salt=o),name:"keys.merchant_salt",label:t.__("Merchant Salt"),required:!0},null,8,["modelValue","label"]),l(i,{modelValue:n.form.inactive,"onUpdate:modelValue":e[4]||(e[4]=o=>n.form.inactive=o),name:"inactive",label:t.__("Inactive")},null,8,["modelValue","label"]),c("div",h,[l(u,{disabled:n.form.processing},null,8,["disabled"])])],32)}const E=d(v,[["render",S]]);export{E as default};

import{I as p}from"./Input.fe981f88.js";import{_ as d,c as b,a as r,b as f,D as y,r as t,o as _}from"./app.571265cd.js";import{C as k}from"./CheckBox.6e2a416e.js";import{S as V}from"./Select.7a1d9270.js";import{S as v}from"./SubmitButton.59cbcabd.js";import"./vanilla-picker.csp.d11a8b31.js";import"./bootstrap.esm.2333d793.js";import"./debounce.94acad4c.js";const c={components:{Select:V,Input:p,CheckBox:k,SubmitButton:v},inject:["data"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let n={name:null,keys:{environment:null,merchant_id:null,public_key:null,private_key:null,is_paypal_enabled:null},inactive:null};return this.data.settings&&(n={...n,...this.data.settings}),n}}},B={class:"mb-3"};function S(n,e,U,I,l,a){const s=t("Select"),m=t("Input"),i=t("CheckBox"),u=t("SubmitButton");return _(),b("form",{onSubmit:e[7]||(e[7]=y(o=>l.form.patch(a.data.urls.submit_form),["prevent"]))},[r(s,{options:a.data.dropdowns.environments,modelValue:l.form.keys.environment,"onUpdate:modelValue":e[0]||(e[0]=o=>l.form.keys.environment=o),name:"keys.environment",label:n.__("Environment"),required:!0},null,8,["options","modelValue","label"]),r(m,{modelValue:l.form.name,"onUpdate:modelValue":e[1]||(e[1]=o=>l.form.name=o),name:"name",label:n.__("Display Name"),required:!0},null,8,["modelValue","label"]),r(m,{modelValue:l.form.keys.merchant_id,"onUpdate:modelValue":e[2]||(e[2]=o=>l.form.keys.merchant_id=o),name:"keys.merchant_id",label:n.__("Merchant Id"),required:!0},null,8,["modelValue","label"]),r(m,{modelValue:l.form.keys.public_key,"onUpdate:modelValue":e[3]||(e[3]=o=>l.form.keys.public_key=o),name:"keys.public_key",label:n.__("Public Key"),required:!0},null,8,["modelValue","label"]),r(m,{modelValue:l.form.keys.private_key,"onUpdate:modelValue":e[4]||(e[4]=o=>l.form.keys.private_key=o),name:"keys.private_key",label:n.__("Private Key"),required:!0},null,8,["modelValue","label"]),r(i,{modelValue:l.form.keys.is_paypal_enabled,"onUpdate:modelValue":e[5]||(e[5]=o=>l.form.keys.is_paypal_enabled=o),name:"keys.is_paypal_enabled",label:n.__("Enable Paypal")},null,8,["modelValue","label"]),r(i,{modelValue:l.form.inactive,"onUpdate:modelValue":e[6]||(e[6]=o=>l.form.inactive=o),name:"inactive",label:n.__("Inactive")},null,8,["modelValue","label"]),f("div",B,[r(u,{disabled:l.form.processing},null,8,["disabled"])])],32)}const F=d(c,[["render",S]]);export{F as default};

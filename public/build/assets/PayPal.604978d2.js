import{I as d}from"./Input.d98634fc.js";import{_ as p,c as f,a as t,b as c,D as _,r,o as b}from"./app.2abe2877.js";import{C as V}from"./CheckBox.0599dcb1.js";import{S as k}from"./Select.7a96caba.js";import{S as v}from"./SubmitButton.67fd88bd.js";import"./vanilla-picker.csp.f95a0d4d.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const y={components:{Select:k,Input:d,CheckBox:V,SubmitButton:v},inject:["data"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let l={name:null,keys:{environment:null,client_id:null,client_secret:null},inactive:null};return this.data.settings&&(l={...l,...this.data.settings}),l}}},S={class:"mb-3"};function B(l,e,C,I,n,i){const s=r("Select"),m=r("Input"),a=r("CheckBox"),u=r("SubmitButton");return b(),f("form",{onSubmit:e[5]||(e[5]=_(o=>n.form.patch(i.data.urls.submit_form),["prevent"]))},[t(s,{options:i.data.dropdowns.environments,modelValue:n.form.keys.environment,"onUpdate:modelValue":e[0]||(e[0]=o=>n.form.keys.environment=o),name:"keys.environment",label:l.__("Environment"),required:!0},null,8,["options","modelValue","label"]),t(m,{modelValue:n.form.name,"onUpdate:modelValue":e[1]||(e[1]=o=>n.form.name=o),name:"name",label:l.__("Display Name"),required:!0},null,8,["modelValue","label"]),t(m,{modelValue:n.form.keys.client_id,"onUpdate:modelValue":e[2]||(e[2]=o=>n.form.keys.client_id=o),name:"keys.client_id",label:l.__("Client Id"),required:!0},null,8,["modelValue","label"]),t(m,{modelValue:n.form.keys.client_secret,"onUpdate:modelValue":e[3]||(e[3]=o=>n.form.keys.client_secret=o),name:"keys.client_secret",label:l.__("Client Secret"),required:!0},null,8,["modelValue","label"]),t(a,{modelValue:n.form.inactive,"onUpdate:modelValue":e[4]||(e[4]=o=>n.form.inactive=o),name:"inactive",label:l.__("Inactive")},null,8,["modelValue","label"]),c("div",S,[t(u,{disabled:n.form.processing},null,8,["disabled"])])],32)}const P=p(y,[["render",B]]);export{P as default};

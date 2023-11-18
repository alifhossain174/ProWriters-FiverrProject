import{I as a}from"./Input.22a5d0b7.js";import{_ as p,c as d,a as r,b as f,D as b,r as m,o as c}from"./app.7185dbf0.js";import{C as k}from"./CheckBox.692c21c3.js";import{S as _}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const y={components:{Input:a,CheckBox:k,SubmitButton:_},inject:["data"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let l={name:null,keys:{public_key:null,secret_key:null},inactive:null};return this.data.settings&&(l={...l,...this.data.settings}),l}}},V={class:"mb-3"};function v(l,e,B,S,o,s){const n=m("Input"),i=m("CheckBox"),u=m("SubmitButton");return c(),d("form",{onSubmit:e[4]||(e[4]=b(t=>o.form.patch(s.data.urls.submit_form),["prevent"]))},[r(n,{modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.name=t),name:"name",label:l.__("Display Name"),required:!0},null,8,["modelValue","label"]),r(n,{modelValue:o.form.keys.public_key,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.keys.public_key=t),name:"keys.public_key",label:l.__("Public Key"),required:!0},null,8,["modelValue","label"]),r(n,{modelValue:o.form.keys.secret_key,"onUpdate:modelValue":e[2]||(e[2]=t=>o.form.keys.secret_key=t),name:"keys.secret_key",label:l.__("Secret Key"),required:!0},null,8,["modelValue","label"]),r(i,{modelValue:o.form.inactive,"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.inactive=t),name:"inactive",label:l.__("Inactive")},null,8,["modelValue","label"]),f("div",V,[r(u,{disabled:o.form.processing},null,8,["disabled"])])],32)}const x=p(y,[["render",v]]);export{x as default};
import{I as a}from"./Input.09d9931c.js";import{_ as p,c as d,a as n,b as f,w as b,f as m,o as c}from"./app.f4b2b251.js";import{C as k}from"./CheckBox.cc62ca79.js";import{S as _}from"./SubmitButton.e555a601.js";import"./vanilla-picker.csp.f644cdcf.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const y={components:{Input:a,CheckBox:k,SubmitButton:_},inject:["data"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let l={name:null,keys:{public_key:null,secret_key:null},inactive:null};return this.data.settings&&(l={...l,...this.data.settings}),l}}},V={class:"mb-3"};function v(l,e,B,S,o,s){const r=m("Input"),i=m("CheckBox"),u=m("SubmitButton");return c(),d("form",{onSubmit:e[4]||(e[4]=b(t=>o.form.patch(s.data.urls.submit_form),["prevent"]))},[n(r,{modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.name=t),name:"name",label:l.__("Display Name"),required:!0},null,8,["modelValue","label"]),n(r,{modelValue:o.form.keys.public_key,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.keys.public_key=t),name:"keys.public_key",label:l.__("Public Key"),required:!0},null,8,["modelValue","label"]),n(r,{modelValue:o.form.keys.secret_key,"onUpdate:modelValue":e[2]||(e[2]=t=>o.form.keys.secret_key=t),name:"keys.secret_key",label:l.__("Secret Key"),required:!0},null,8,["modelValue","label"]),n(i,{modelValue:o.form.inactive,"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.inactive=t),name:"inactive",label:l.__("Inactive")},null,8,["modelValue","label"]),f("div",V,[n(u,{disabled:o.form.processing},null,8,["disabled"])])],32)}const w=p(y,[["render",v]]);export{w as default};
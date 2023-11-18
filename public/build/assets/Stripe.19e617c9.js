import{I as u}from"./Input.09d9931c.js";import{_ as p,c as d,a as r,b,w as f,f as m,o as k}from"./app.f4b2b251.js";import{C as _}from"./CheckBox.cc62ca79.js";import{S as y}from"./Select.319f7f3f.js";import{S as c}from"./SubmitButton.e555a601.js";import"./vanilla-picker.csp.f644cdcf.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const V={components:{Select:y,Input:u,CheckBox:_,SubmitButton:c},inject:["data"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let l={name:null,keys:{publishable_key:null,secret_key:null},inactive:null};return this.data.settings&&(l={...l,...this.data.settings}),l}}},v={class:"mb-3"};function B(l,e,S,h,o,s){const n=m("Input"),a=m("CheckBox"),i=m("SubmitButton");return k(),d("form",{onSubmit:e[4]||(e[4]=f(t=>o.form.patch(s.data.urls.submit_form),["prevent"]))},[r(n,{modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.name=t),name:"name",label:l.__("Display Name"),required:!0},null,8,["modelValue","label"]),r(n,{modelValue:o.form.keys.publishable_key,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.keys.publishable_key=t),name:"keys.publishable_key",label:l.__("Publishable Key"),required:!0},null,8,["modelValue","label"]),r(n,{modelValue:o.form.keys.secret_key,"onUpdate:modelValue":e[2]||(e[2]=t=>o.form.keys.secret_key=t),name:"keys.secret_key",label:l.__("Secret Key"),required:!0},null,8,["modelValue","label"]),r(a,{modelValue:o.form.inactive,"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.inactive=t),name:"inactive",label:l.__("Inactive")},null,8,["modelValue","label"]),b("div",v,[r(i,{disabled:o.form.processing},null,8,["disabled"])])],32)}const F=p(V,[["render",B]]);export{F as default};

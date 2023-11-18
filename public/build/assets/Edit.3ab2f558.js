import f from"./AccountLayout.dda439bb.js";import{I as _}from"./Input.af53aafe.js";import{T as b}from"./TextArea.2a32954b.js";import{_ as V,c as h,a as l,w as y,F as S,r as s,o as v,b as n,t as q,D as w}from"./app.2022c6b3.js";import{S as z}from"./Select.7c90381d.js";import{S as A}from"./SubmitButton.f33bde9e.js";import"./vanilla-picker.csp.7eafc9f1.js";import{P as B}from"./Phone.96a3f90c.js";import"./bootstrap.esm.2333d793.js";import"./debounce.1c99c80a.js";const U={props:["data","customer"],components:{AccountLayout:f,Input:_,TextArea:b,SubmitButton:A,Phone:B,Select:z},data(){return{form:this.$inertia.form({first_name:this.customer.first_name,last_name:this.customer.last_name,email:this.customer.email,phone:this.customer.phone,country_code:this.customer.country_code,timezone:this.customer.timezone}),formConfig:{preserveScroll:!1}}}},C={class:"card"},P={class:"card-header h5"},g={class:"card-body"},I={class:"row"},L={class:"col"},N={class:"col"};function k(r,o,m,E,e,F){const u=s("AppHead"),a=s("Input"),d=s("Phone"),i=s("Select"),c=s("SubmitButton"),p=s("AccountLayout");return v(),h(S,null,[l(u,{title:m.data.title},null,8,["title"]),l(p,{customer:m.customer},{default:y(()=>[n("div",C,[n("div",P,q(m.data.title),1),n("div",g,[n("form",{onSubmit:o[6]||(o[6]=w(t=>e.form.patch(m.data.urls.submit_form,e.formConfig),["prevent"]))},[n("div",I,[n("div",L,[l(a,{modelValue:e.form.first_name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.first_name=t),label:r.__("First Name"),name:"first_name",required:!0},null,8,["modelValue","label"])]),n("div",N,[l(a,{modelValue:e.form.last_name,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.last_name=t),label:r.__("Last Name"),name:"last_name",required:!0},null,8,["modelValue","label"])])]),l(a,{type:"email",modelValue:e.form.email,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.email=t),label:r.__("Email"),name:"email",required:!0},null,8,["modelValue","label"]),l(d,{modelValue:e.form.phone,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.phone=t),label:r.__("Phone"),required:!0},null,8,["modelValue","label"]),l(i,{searchable:!0,reduce_key:"code",clearable:!0,options:m.data.dropdowns.countries,modelValue:e.form.country_code,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.country_code=t),label:r.__("Country"),required:!0,name:"country"},null,8,["options","modelValue","label"]),l(i,{searchable:!0,options:m.data.dropdowns.timezones,modelValue:e.form.timezone,"onUpdate:modelValue":o[5]||(o[5]=t=>e.form.timezone=t),label:r.__("Time Zone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"]),l(c,{disabled:e.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["customer"])],64)}const Q=V(U,[["render",k]]);export{Q as default};

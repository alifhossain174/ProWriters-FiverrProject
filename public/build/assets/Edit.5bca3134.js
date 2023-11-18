import p from"./AccountLayout.6e2c63ca.js";import{I as _}from"./Input.d3e8f5e0.js";import{T as b}from"./TextArea.67869acb.js";import{_ as V,c as h,a as l,y,F as S,f as s,o as v,b as n,t as q,w}from"./app.b345893e.js";import{S as z}from"./Select.ee436180.js";import{S as A}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import{P as B}from"./Phone.39ba4442.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const U={props:["data","customer"],components:{AccountLayout:p,Input:_,TextArea:b,SubmitButton:A,Phone:B,Select:z},data(){return{form:this.$inertia.form({first_name:this.customer.first_name,last_name:this.customer.last_name,email:this.customer.email,phone:this.customer.phone,country_code:this.customer.country_code,timezone:this.customer.timezone}),formConfig:{preserveScroll:!1}}}},C={class:"card"},P={class:"card-header h5"},g={class:"card-body"},I={class:"row"},L={class:"col"},N={class:"col"};function k(m,o,r,E,e,F){const u=s("AppHead"),a=s("Input"),d=s("Phone"),i=s("Select"),c=s("SubmitButton"),f=s("AccountLayout");return v(),h(S,null,[l(u,{title:r.data.title},null,8,["title"]),l(f,{customer:r.customer},{default:y(()=>[n("div",C,[n("div",P,q(r.data.title),1),n("div",g,[n("form",{onSubmit:o[6]||(o[6]=w(t=>e.form.patch(r.data.urls.submit_form,e.formConfig),["prevent"]))},[n("div",I,[n("div",L,[l(a,{modelValue:e.form.first_name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.first_name=t),label:m.__("First Name"),name:"first_name",required:!0},null,8,["modelValue","label"])]),n("div",N,[l(a,{modelValue:e.form.last_name,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.last_name=t),label:m.__("Last Name"),name:"last_name",required:!0},null,8,["modelValue","label"])])]),l(a,{type:"email",modelValue:e.form.email,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.email=t),label:m.__("Email"),name:"email",required:!0},null,8,["modelValue","label"]),l(d,{modelValue:e.form.phone,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.phone=t),label:m.__("Phone"),required:!0},null,8,["modelValue","label"]),l(i,{searchable:!0,reduce_key:"code",clearable:!0,options:r.data.dropdowns.countries,modelValue:e.form.country_code,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.country_code=t),label:m.__("Country"),required:!0,name:"country"},null,8,["options","modelValue","label"]),l(i,{searchable:!0,options:r.data.dropdowns.timezones,modelValue:e.form.timezone,"onUpdate:modelValue":o[5]||(o[5]=t=>e.form.timezone=t),label:m.__("Time Zone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"]),l(c,{disabled:e.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["customer"])],64)}const Q=V(U,[["render",k]]);export{Q as default};

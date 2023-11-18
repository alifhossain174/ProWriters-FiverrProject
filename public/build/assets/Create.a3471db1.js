import{I as c}from"./Input.af53aafe.js";import{_ as V,A as b,w,r as s,o as S,b as n,a as t,t as v,D as B}from"./app.2022c6b3.js";import{C as U}from"./CheckBox.95d1a9af.js";import{S as h}from"./Select.7c90381d.js";import{S as C}from"./SubmitButton.f33bde9e.js";import"./vanilla-picker.csp.7eafc9f1.js";import{P as y}from"./Phone.96a3f90c.js";import{R as k}from"./Radio.9d593d48.js";import"./bootstrap.esm.2333d793.js";import"./debounce.1c99c80a.js";const q={props:["data"],components:{Input:c,Select:h,CheckBox:U,Radio:k,Phone:y,SubmitButton:C},data(){return{form:this.$inertia.form({first_name:null,last_name:null,email:null,password:Math.random().toString(36).slice(2),phone:null,timezone:null,country_code:null,send_notification_email:null,role:null})}}},z={class:"row"},P={class:"col-md-6"},R={class:"col-md-6"},g={class:"row"},I={class:"col-md-6"},M={class:"col-md-6"},N={class:"border rounded-3 p-3"},D={class:"float-none w-auto px-3 fs-8"},A={class:"mt-4"};function E(m,e,r,F,o,L){const a=s("Input"),i=s("Select"),d=s("Phone"),u=s("Radio"),p=s("CheckBox"),_=s("SubmitButton"),f=s("Modal");return S(),b(f,{title:r.data.title,size:"small"},{default:w(()=>[n("form",{onSubmit:e[9]||(e[9]=B(l=>o.form.post(r.data.urls.submit_form),["prevent"]))},[n("div",z,[n("div",P,[t(a,{modelValue:o.form.first_name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.first_name=l),name:"first_name",label:m.__("First Name"),required:!0},null,8,["modelValue","label"])]),n("div",R,[t(a,{modelValue:o.form.last_name,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.last_name=l),name:"last_name",label:m.__("Last Name"),required:!0},null,8,["modelValue","label"])])]),n("div",g,[n("div",I,[t(a,{modelValue:o.form.email,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.email=l),name:"email",label:m.__("Email"),required:!0},null,8,["modelValue","label"])]),n("div",M,[t(a,{modelValue:o.form.password,"onUpdate:modelValue":e[3]||(e[3]=l=>o.form.password=l),name:"password",label:m.__("Password"),required:!0},null,8,["modelValue","label"])])]),t(i,{searchable:!0,reduce_key:"code",clearable:!0,options:r.data.dropdowns.countries,modelValue:o.form.country_code,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.country_code=l),label:m.__("Country"),required:!0,name:"country"},null,8,["options","modelValue","label"]),t(i,{searchable:!0,options:r.data.dropdowns.timezones,modelValue:o.form.timezone,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.timezone=l),label:m.__("Time Zone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"]),t(d,{modelValue:o.form.phone,"onUpdate:modelValue":e[6]||(e[6]=l=>o.form.phone=l),name:"phone",label:m.__("Phone")},null,8,["modelValue","label"]),n("fieldset",N,[n("legend",D,v(m.__("Role")),1),t(u,{options:r.data.roles,modelValue:o.form.role,"onUpdate:modelValue":e[7]||(e[7]=l=>o.form.role=l),name:"role"},null,8,["options","modelValue"])]),n("div",A,[t(p,{modelValue:o.form.send_notification_email,"onUpdate:modelValue":e[8]||(e[8]=l=>o.form.send_notification_email=l),name:"send_notification_email",label:m.__("Send notification email with password")},null,8,["modelValue","label"])]),t(_,{class:"mt-4",disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const X=V(q,[["render",E]]);export{X as default};

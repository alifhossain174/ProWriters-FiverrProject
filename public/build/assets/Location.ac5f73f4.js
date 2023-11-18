import c from"./AccountLayout.8444fe7e.js";import{I as p}from"./Input.22a5d0b7.js";import{T as f}from"./TextArea.21d698c9.js";import{_,c as b,a as n,w as y,F as S,r as a,o as h,b as i,t as V,D as v}from"./app.7185dbf0.js";import{S as z}from"./Select.e5dd87a9.js";import{S as A}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import{P as B}from"./Phone.fbcfb39e.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const w={props:["data","admin"],components:{AccountLayout:c,Input:p,TextArea:f,SubmitButton:A,Phone:B,Select:z},data(){return{form:this.$inertia.form({country_code:this.admin.country_code,timezone:this.admin.timezone}),formConfig:{preserveScroll:!1}}}},C={class:"card"},g={class:"card-header h5"},L={class:"card-body"};function k(m,e,t,x,o,T){const l=a("AppHead"),s=a("Select"),d=a("SubmitButton"),u=a("AccountLayout");return h(),b(S,null,[n(l,{title:t.data.title},null,8,["title"]),n(u,{admin:t.admin},{default:y(()=>[i("div",C,[i("div",g,V(t.data.title),1),i("div",L,[i("form",{onSubmit:e[2]||(e[2]=v(r=>o.form.patch(t.data.urls.submit_form,o.formConfig),["prevent"]))},[n(s,{searchable:!0,reduce_key:"code",clearable:!0,options:t.data.dropdowns.countries,modelValue:o.form.country_code,"onUpdate:modelValue":e[0]||(e[0]=r=>o.form.country_code=r),label:m.__("Country"),required:!0,name:"country"},null,8,["options","modelValue","label"]),n(s,{searchable:!0,options:t.data.dropdowns.timezones,modelValue:o.form.timezone,"onUpdate:modelValue":e[1]||(e[1]=r=>o.form.timezone=r),label:m.__("Time Zone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"]),n(d,{disabled:o.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["admin"])],64)}const Z=_(w,[["render",k]]);export{Z as default};

import d from"./AccountLayout.8f517030.js";import{_ as f,c as p,a,w as _,F as g,r as n,o as b,b as s,t as S,D as h}from"./app.2abe2877.js";import{S as v}from"./Select.7a96caba.js";import{S as y}from"./SubmitButton.67fd88bd.js";import"./vanilla-picker.csp.f95a0d4d.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const B={props:["data","customer"],components:{AccountLayout:d,Select:v,SubmitButton:y},data(){return{form:this.$inertia.form({language:this.customer.language}),formConfig:{preserveScroll:!1,onSuccess:()=>location.reload()}}}},A={class:"card"},C={class:"card-header h5"},L={class:"card-body"};function V(l,t,e,w,o,k){const c=n("AppHead"),i=n("Select"),u=n("SubmitButton"),m=n("AccountLayout");return b(),p(g,null,[a(c,{title:e.data.title},null,8,["title"]),a(m,{customer:e.customer},{default:_(()=>[s("div",A,[s("div",C,S(e.data.title),1),s("div",L,[s("form",{onSubmit:t[1]||(t[1]=h(r=>o.form.patch(e.data.urls.submit_form,o.formConfig),["prevent"]))},[a(i,{reduce_key:"iso_code",options:e.data.dropdowns.languages,modelValue:o.form.language,"onUpdate:modelValue":t[0]||(t[0]=r=>o.form.language=r),label:l.__("Language"),required:!0,name:"language"},null,8,["options","modelValue","label"]),a(u,{disabled:o.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["customer"])],64)}const M=f(B,[["render",V]]);export{M as default};

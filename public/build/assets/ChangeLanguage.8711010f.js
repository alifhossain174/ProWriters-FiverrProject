import d from"./AccountLayout.02c1bd87.js";import{_ as f,c as p,a,w as _,F as g,r as n,o as b,b as r,t as S,D as h}from"./app.1d2673ab.js";import{S as v}from"./Select.97a87473.js";import{S as y}from"./SubmitButton.108d399e.js";import"./vanilla-picker.csp.eccdf93b.js";import"./bootstrap.esm.2333d793.js";import"./debounce.8ee276ba.js";const B={props:["data","freelancer"],components:{AccountLayout:d,Select:v,SubmitButton:y},data(){return{form:this.$inertia.form({language:this.freelancer.language}),formConfig:{preserveScroll:!1,onSuccess:()=>location.reload()}}}},A={class:"card"},C={class:"card-header h5"},L={class:"card-body"};function V(s,t,e,w,o,k){const c=n("AppHead"),i=n("Select"),u=n("SubmitButton"),m=n("AccountLayout");return b(),p(g,null,[a(c,{title:e.data.title},null,8,["title"]),a(m,{freelancer:e.freelancer},{default:_(()=>[r("div",A,[r("div",C,S(e.data.title),1),r("div",L,[r("form",{onSubmit:t[1]||(t[1]=h(l=>o.form.patch(e.data.urls.submit_form,o.formConfig),["prevent"]))},[a(i,{reduce_key:"iso_code",options:e.data.dropdowns.languages,modelValue:o.form.language,"onUpdate:modelValue":t[0]||(t[0]=l=>o.form.language=l),label:s.__("Language"),required:!0,name:"language"},null,8,["options","modelValue","label"]),a(u,{disabled:o.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["freelancer"])],64)}const M=f(B,[["render",V]]);export{M as default};

import f from"./AccountLayout.ee369a12.js";import{E as p}from"./Editor.a5e36bad.js";import{_ as b,c as h,a as e,y as v,F as V,f as r,o as y,b as o,t as n,w as B,d as E}from"./app.f4b2b251.js";import{S}from"./SubmitButton.e555a601.js";import"./vanilla-picker.csp.f644cdcf.js";import"./bootstrap.esm.2333d793.js";import"./vue-quill.snow.1e07b934.js";import"./debounce.b9d72112.js";const g={props:["data","author"],components:{AccountLayout:f,Editor:p,SubmitButton:S},data(){return{form:this.$inertia.form({bio:this.author.profile.bio}),formConfig:{preserveScroll:!1}}}},x={class:"card"},A={class:"card-header h5"},C={class:"card-body"},w={class:"mb-3"},L={class:"form-label"},N=o("span",{class:"required"},"*",-1);function k(l,s,a,F,t,H){const d=r("AppHead"),m=r("Editor"),c=r("ValidationError"),u=r("SubmitButton"),_=r("AccountLayout");return y(),h(V,null,[e(d,{title:a.data.title},null,8,["title"]),e(_,{author:a.author},{default:v(()=>[o("div",x,[o("div",A,n(a.data.title),1),o("div",C,[o("form",{onSubmit:s[1]||(s[1]=B(i=>t.form.patch(a.data.urls.submit_form,t.formConfig),["prevent"]))},[o("div",w,[o("label",L,[E(n(l.__("Tell us about yourself"))+" ",1),N]),e(m,{modelValue:t.form.bio,"onUpdate:modelValue":s[0]||(s[0]=i=>t.form.bio=i),height:"300px"},null,8,["modelValue"]),e(c,{name:"bio"})]),e(u,{disabled:t.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["author"])],64)}const I=b(g,[["render",k]]);export{I as default};

import _ from"./AccountLayout.93257e8d.js";import{I as c}from"./Input.d98634fc.js";import{_ as f,c as w,a as n,w as b,F as V,r as i,o as h,b as e,t as r,D as y}from"./app.2abe2877.js";import{S as q}from"./SubmitButton.67fd88bd.js";import"./vanilla-picker.csp.f95a0d4d.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const v={props:["data","admin"],components:{AccountLayout:_,Input:c,SubmitButton:q},data(){return{form:this.$inertia.form({current_password:null,password:null,password_confirmation:null}),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()}}}},S={class:"card"},C={class:"card-header h5"},B={class:"card-body"},R=e("hr",null,null,-1),g={class:"h5"},A={class:"fs-8 text-muted"};function I(o,s,a,P,t,L){const d=i("AppHead"),u=i("Input"),m=i("SubmitButton"),p=i("AccountLayout");return h(),w(V,null,[n(d,{title:a.data.title},null,8,["title"]),n(p,{admin:a.admin},{default:b(()=>[e("div",S,[e("div",C,r(a.data.title),1),e("div",B,[e("form",{onSubmit:s[3]||(s[3]=y(l=>t.form.patch(a.data.urls.submit_form,t.formConfig),["prevent"]))},[n(u,{modelValue:t.form.current_password,"onUpdate:modelValue":s[0]||(s[0]=l=>t.form.current_password=l),label:o.__("Current Password"),name:"current_password",type:"password",required:!0},null,8,["modelValue","label"]),n(u,{modelValue:t.form.password,"onUpdate:modelValue":s[1]||(s[1]=l=>t.form.password=l),label:o.__("New Password"),name:"password",type:"password",required:!0},null,8,["modelValue","label"]),n(u,{modelValue:t.form.password_confirmation,"onUpdate:modelValue":s[2]||(s[2]=l=>t.form.password_confirmation=l),label:o.__("Password Confirmation"),name:"password_confirmation",type:"password",required:!0},null,8,["modelValue","label"]),n(m,{disabled:t.form.disabled},null,8,["disabled"])],32),R,e("div",g,r(o.__("Rules")),1),e("ul",A,[e("li",null,r(o.__("Require at least 8 characters")),1),e("li",null,r(o.__("Require at least one letter")),1),e("li",null,r(o.__("Require at least one number")),1),e("li",null,r(o.__("Require at least one symbol")),1),e("li",null,r(o.__("Require at least one uppercase and one lowercase letter")),1)])])])]),_:1},8,["admin"])],64)}const M=f(v,[["render",I]]);export{M as default};

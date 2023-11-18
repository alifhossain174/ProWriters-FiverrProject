import _ from"./AccountLayout.db8802aa.js";import{I as c}from"./Input.ae708ed5.js";import{_ as f,c as w,a as n,w as b,F as V,r as u,o as h,b as e,t as s,D as y}from"./app.969842cf.js";import{S as q}from"./SubmitButton.f6813064.js";import"./vanilla-picker.csp.0ced5960.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ed46515d.js";const v={props:["data","freelancer"],components:{AccountLayout:_,Input:c,SubmitButton:q},data(){return{form:this.$inertia.form({current_password:null,password:null,password_confirmation:null}),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()}}}},S={class:"card"},C={class:"card-header h5"},B={class:"card-body"},R=e("hr",null,null,-1),g={class:"h5"},A={class:"fs-8 text-muted"};function I(o,t,a,P,r,L){const d=u("AppHead"),i=u("Input"),m=u("SubmitButton"),p=u("AccountLayout");return h(),w(V,null,[n(d,{title:a.data.title},null,8,["title"]),n(p,{freelancer:a.freelancer},{default:b(()=>[e("div",S,[e("div",C,s(a.data.title),1),e("div",B,[e("form",{onSubmit:t[3]||(t[3]=y(l=>r.form.patch(a.data.urls.submit_form,r.formConfig),["prevent"]))},[n(i,{modelValue:r.form.current_password,"onUpdate:modelValue":t[0]||(t[0]=l=>r.form.current_password=l),label:o.__("Current Password"),name:"current_password",type:"password",required:!0},null,8,["modelValue","label"]),n(i,{modelValue:r.form.password,"onUpdate:modelValue":t[1]||(t[1]=l=>r.form.password=l),label:o.__("New Password"),name:"password",type:"password",required:!0},null,8,["modelValue","label"]),n(i,{modelValue:r.form.password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=l=>r.form.password_confirmation=l),label:o.__("Password Confirmation"),name:"password_confirmation",type:"password",required:!0},null,8,["modelValue","label"]),n(m,{disabled:r.form.disabled},null,8,["disabled"])],32),R,e("div",g,s(o.__("Rules")),1),e("ul",A,[e("li",null,s(o.__("Require at least 8 characters")),1),e("li",null,s(o.__("Require at least one letter")),1),e("li",null,s(o.__("Require at least one number")),1),e("li",null,s(o.__("Require at least one symbol")),1),e("li",null,s(o.__("Require at least one uppercase and one lowercase letter")),1)])])])]),_:1},8,["freelancer"])],64)}const M=f(v,[["render",I]]);export{M as default};

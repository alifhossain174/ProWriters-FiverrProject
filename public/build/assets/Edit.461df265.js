import p from"./AccountLayout.ee369a12.js";import{I as _}from"./Input.09d9931c.js";import{T as c}from"./TextArea.ef7eb61f.js";import{_ as h,c as b,a as l,y as V,F as v,f as n,o as y,b as a,t as S,w as A}from"./app.f4b2b251.js";import{S as B}from"./SubmitButton.e555a601.js";import"./vanilla-picker.csp.f644cdcf.js";import{P}from"./Phone.fd2a9c91.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const g={props:["data","author"],components:{AccountLayout:p,Input:_,TextArea:c,SubmitButton:B,Phone:P},data(){return{form:this.$inertia.form({first_name:this.author.first_name,last_name:this.author.last_name,email:this.author.email,phone:this.author.phone}),formConfig:{preserveScroll:!1}}}},q={class:"card"},w={class:"card-header h5"},C={class:"card-body"},I={class:"row"},L={class:"col"},N={class:"col"};function U(r,o,m,E,e,F){const i=n("AppHead"),s=n("Input"),u=n("Phone"),d=n("SubmitButton"),f=n("AccountLayout");return y(),b(v,null,[l(i,{title:m.data.title},null,8,["title"]),l(f,{author:m.author},{default:V(()=>[a("div",q,[a("div",w,S(m.data.title),1),a("div",C,[a("form",{onSubmit:o[4]||(o[4]=A(t=>e.form.patch(m.data.urls.submit_form,e.formConfig),["prevent"]))},[a("div",I,[a("div",L,[l(s,{modelValue:e.form.first_name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.first_name=t),label:r.__("First Name"),name:"first_name",required:!0},null,8,["modelValue","label"])]),a("div",N,[l(s,{modelValue:e.form.last_name,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.last_name=t),label:r.__("Last Name"),name:"last_name",required:!0},null,8,["modelValue","label"])])]),l(s,{type:"email",modelValue:e.form.email,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.email=t),label:r.__("Email"),name:"email",required:!0},null,8,["modelValue","label"]),l(u,{modelValue:e.form.phone,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.phone=t),label:r.__("Phone"),required:!0},null,8,["modelValue","label"]),l(d,{disabled:e.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["author"])],64)}const J=h(g,[["render",U]]);export{J as default};
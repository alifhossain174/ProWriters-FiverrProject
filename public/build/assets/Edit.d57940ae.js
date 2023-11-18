import p from"./AccountLayout.012491da.js";import{I as _}from"./Input.e65d7326.js";import{T as c}from"./TextArea.3edc019d.js";import{_ as b,c as h,a as l,w as V,F as v,r,o as S,b as n,t as y,D as A}from"./app.94ede146.js";import{S as B}from"./SubmitButton.71e94644.js";import"./vanilla-picker.csp.da387394.js";import{P}from"./Phone.f1ee5e87.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b3e602c6.js";const g={props:["data","freelancer"],components:{AccountLayout:p,Input:_,TextArea:c,SubmitButton:B,Phone:P},data(){return{form:this.$inertia.form({first_name:this.freelancer.first_name,last_name:this.freelancer.last_name,email:this.freelancer.email,phone:this.freelancer.phone}),formConfig:{preserveScroll:!1}}}},q={class:"card"},w={class:"card-header h5"},C={class:"card-body"},I={class:"row"},L={class:"col"},N={class:"col"};function U(a,o,m,E,e,F){const i=r("AppHead"),s=r("Input"),u=r("Phone"),d=r("SubmitButton"),f=r("AccountLayout");return S(),h(v,null,[l(i,{title:m.data.title},null,8,["title"]),l(f,{freelancer:m.freelancer},{default:V(()=>[n("div",q,[n("div",w,y(m.data.title),1),n("div",C,[n("form",{onSubmit:o[4]||(o[4]=A(t=>e.form.patch(m.data.urls.submit_form,e.formConfig),["prevent"]))},[n("div",I,[n("div",L,[l(s,{modelValue:e.form.first_name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.first_name=t),label:a.__("First Name"),name:"first_name",required:!0},null,8,["modelValue","label"])]),n("div",N,[l(s,{modelValue:e.form.last_name,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.last_name=t),label:a.__("Last Name"),name:"last_name",required:!0},null,8,["modelValue","label"])])]),l(s,{type:"email",modelValue:e.form.email,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.email=t),label:a.__("Email"),name:"email",required:!0},null,8,["modelValue","label"]),l(u,{modelValue:e.form.phone,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.phone=t),label:a.__("Phone"),required:!0},null,8,["modelValue","label"]),l(d,{disabled:e.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["freelancer"])],64)}const J=b(g,[["render",U]]);export{J as default};

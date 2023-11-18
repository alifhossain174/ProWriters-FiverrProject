import p from"./AccountLayout.d85c7ef5.js";import{I as _}from"./Input.e1de50c7.js";import{T as b}from"./TextArea.738ba188.js";import{_ as y,c as V,a as r,w as S,F as v,r as s,o as h,b as l,t as A,D as w}from"./app.9acdbdf3.js";import{S as z}from"./Select.d56be4ef.js";import{S as B}from"./SubmitButton.86380d69.js";import"./vanilla-picker.csp.612e0881.js";import{P as C}from"./Phone.0f2d18c0.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ebc76861.js";const T={props:["data","freelancer"],components:{AccountLayout:p,Input:_,TextArea:b,SubmitButton:B,Phone:C,Select:z},data(){return{form:this.$inertia.form({address:this.freelancer.profile.address,state:this.freelancer.profile.state,city:this.freelancer.profile.city,country_code:this.freelancer.country_code,timezone:this.freelancer.timezone}),formConfig:{preserveScroll:!1}}}},U={class:"card"},g={class:"card-header h5"},I={class:"card-body"},L={class:"row"},k={class:"col"},q={class:"col"};function x(a,o,n,D,e,F){const d=s("AppHead"),u=s("TextArea"),m=s("Input"),i=s("Select"),c=s("SubmitButton"),f=s("AccountLayout");return h(),V(v,null,[r(d,{title:n.data.title},null,8,["title"]),r(f,{freelancer:n.freelancer},{default:S(()=>[l("div",U,[l("div",g,A(n.data.title),1),l("div",I,[l("form",{onSubmit:o[5]||(o[5]=w(t=>e.form.patch(n.data.urls.submit_form,e.formConfig),["prevent"]))},[r(u,{modelValue:e.form.address,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.address=t),label:a.__("Address"),name:"address"},null,8,["modelValue","label"]),l("div",L,[l("div",k,[r(m,{modelValue:e.form.city,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.city=t),label:a.__("City"),name:"city"},null,8,["modelValue","label"])]),l("div",q,[r(m,{modelValue:e.form.state,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.state=t),label:a.__("State"),name:"state"},null,8,["modelValue","label"])])]),r(i,{searchable:!0,reduce_key:"code",clearable:!0,options:n.data.dropdowns.countries,modelValue:e.form.country_code,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.country_code=t),label:a.__("Country"),required:!0,name:"country"},null,8,["options","modelValue","label"]),r(i,{searchable:!0,options:n.data.dropdowns.timezones,modelValue:e.form.timezone,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.timezone=t),label:a.__("Time Zone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"]),r(c,{disabled:e.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["freelancer"])],64)}const O=y(T,[["render",x]]);export{O as default};

import c from"./AccountLayout.d7b2f6ee.js";import{I as f}from"./Input.d3e8f5e0.js";import{T as p}from"./TextArea.67869acb.js";import{_,c as b,a as n,y,F as S,f as a,o as h,b as i,t as V,w as v}from"./app.b345893e.js";import{S as z}from"./Select.ee436180.js";import{S as A}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import{P as B}from"./Phone.39ba4442.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const w={props:["data","admin"],components:{AccountLayout:c,Input:f,TextArea:p,SubmitButton:A,Phone:B,Select:z},data(){return{form:this.$inertia.form({country_code:this.admin.country_code,timezone:this.admin.timezone}),formConfig:{preserveScroll:!1}}}},C={class:"card"},g={class:"card-header h5"},L={class:"card-body"};function k(m,e,t,x,o,T){const l=a("AppHead"),s=a("Select"),d=a("SubmitButton"),u=a("AccountLayout");return h(),b(S,null,[n(l,{title:t.data.title},null,8,["title"]),n(u,{admin:t.admin},{default:y(()=>[i("div",C,[i("div",g,V(t.data.title),1),i("div",L,[i("form",{onSubmit:e[2]||(e[2]=v(r=>o.form.patch(t.data.urls.submit_form,o.formConfig),["prevent"]))},[n(s,{searchable:!0,reduce_key:"code",clearable:!0,options:t.data.dropdowns.countries,modelValue:o.form.country_code,"onUpdate:modelValue":e[0]||(e[0]=r=>o.form.country_code=r),label:m.__("Country"),required:!0,name:"country"},null,8,["options","modelValue","label"]),n(s,{searchable:!0,options:t.data.dropdowns.timezones,modelValue:o.form.timezone,"onUpdate:modelValue":e[1]||(e[1]=r=>o.form.timezone=r),label:m.__("Time Zone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"]),n(d,{disabled:o.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["admin"])],64)}const Z=_(w,[["render",k]]);export{Z as default};

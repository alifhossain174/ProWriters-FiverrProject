import{I as _}from"./Input.e1de50c7.js";import{_ as b,A as c,w as V,r as m,o as v,b as s,a as t,D as S}from"./app.9acdbdf3.js";import{C as h}from"./CheckBox.00e9a7bf.js";import{S as B}from"./Select.d56be4ef.js";import{S as C}from"./SubmitButton.86380d69.js";import"./vanilla-picker.csp.612e0881.js";import{P as U}from"./Phone.0f2d18c0.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ebc76861.js";const k={props:["data","user"],components:{Input:_,Select:B,CheckBox:h,Phone:U,SubmitButton:C},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let n={first_name:null,last_name:null,email:null,phone:null,timezone:null,country_code:null,language:null};return this.user&&(n={...n,...this.user}),n}}},w={class:"row"},y={class:"col-md-6"},q={class:"col-md-6"};function z(n,e,r,I,o,P){const a=m("Input"),i=m("Phone"),u=m("Select"),d=m("CheckBox"),p=m("SubmitButton"),f=m("Modal");return v(),c(f,{title:r.data.title},{default:V(()=>[s("form",{onSubmit:e[7]||(e[7]=S(l=>o.form.patch(r.data.urls.submit_form),["prevent"]))},[s("div",w,[s("div",y,[t(a,{modelValue:o.form.first_name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.first_name=l),name:"first_name",label:n.__("First Name"),required:!0},null,8,["modelValue","label"])]),s("div",q,[t(a,{modelValue:o.form.last_name,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.last_name=l),name:"last_name",label:n.__("Last Name"),required:!0},null,8,["modelValue","label"])])]),t(a,{modelValue:o.form.email,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.email=l),name:"email",label:n.__("Email"),required:!0},null,8,["modelValue","label"]),t(i,{modelValue:o.form.phone,"onUpdate:modelValue":e[3]||(e[3]=l=>o.form.phone=l),name:"phone",label:n.__("Phone")},null,8,["modelValue","label"]),t(u,{searchable:!0,reduce_key:"code",clearable:!0,options:r.data.dropdowns.countries,modelValue:o.form.country_code,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.country_code=l),label:n.__("Country"),required:!0,name:"country"},null,8,["options","modelValue","label"]),t(u,{searchable:!0,options:r.data.dropdowns.timezones,modelValue:o.form.timezone,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.timezone=l),label:n.__("Time Zone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"]),t(d,{modelValue:o.form.inactive,"onUpdate:modelValue":e[6]||(e[6]=l=>o.form.inactive=l),name:"inactive",label:n.__("Inactive")},null,8,["modelValue","label"]),t(p,{class:"mt-4",disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const Z=b(k,[["render",z]]);export{Z as default};

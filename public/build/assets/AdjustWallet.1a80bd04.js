import{I as a}from"./Input.e1de50c7.js";import{_ as d,A as f,w as c,r as n,o as _,b,a as l,D as S}from"./app.9acdbdf3.js";import{S as V}from"./Select.d56be4ef.js";import{S as y}from"./SubmitButton.86380d69.js";import"./vanilla-picker.csp.612e0881.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ebc76861.js";const B={props:["data","person"],components:{Input:a,Select:V,SubmitButton:y},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){return{type:"add",amount:null,description:null}}}};function v(r,o,m,w,e,A){const u=n("Select"),s=n("Input"),i=n("SubmitButton"),p=n("Modal");return _(),f(p,{title:m.data.title},{default:c(()=>[b("form",{onSubmit:o[3]||(o[3]=S(t=>e.form.post(m.data.urls.submit_form,e.formConfig),["prevent"]))},[l(u,{options:m.data.dropdowns.adjustment_types,modelValue:e.form.type,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.type=t),label:r.__("Adjustment Type"),required:!0,name:"type"},null,8,["options","modelValue","label"]),l(s,{modelValue:e.form.amount,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.amount=t),name:"amount",label:r.__("Amount"),required:!0},null,8,["modelValue","label"]),l(s,{modelValue:e.form.description,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.description=t),name:"description",label:r.__("Description"),required:!0},null,8,["modelValue","label"]),l(i,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const k=d(B,[["render",v]]);export{k as default};

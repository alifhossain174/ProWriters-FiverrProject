import{I as l}from"./Input.22a5d0b7.js";import{_ as p,A as d,w as f,r as n,o as b,b as c,a as s,D as _}from"./app.7185dbf0.js";import{S as v}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const w={components:{Input:l,SubmitButton:v},props:["data","invoice"],data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){return{amount:this.data.balance_due}}}};function B(e,o,m,S,t,V){const i=n("Input"),a=n("SubmitButton"),u=n("Modal");return b(),d(u,{title:m.data.title},{default:f(()=>[c("form",{onSubmit:o[2]||(o[2]=_(r=>t.form.post(e.route("admin.invoices.adjust.from.wallet.store",m.invoice.uuid),t.formConfig),["prevent"]))},[s(i,{modelValue:t.form.amount,"onUpdate:modelValue":o[0]||(o[0]=r=>t.form.amount=r),name:"amount",label:e.__("Amount"),required:!0,onKeypress:o[1]||(o[1]=r=>e.onlyNumber(r,t.form.amount)),tooltip:e.__("The amount that will be adjusted from wallet")},null,8,["modelValue","label","tooltip"]),s(a,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const F=p(w,[["render",B]]);export{F as default};

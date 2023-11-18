import{I as d}from"./Input.09d9931c.js";import{T as f}from"./TextArea.ef7eb61f.js";import{C as c}from"./CheckBox.cc62ca79.js";import{S as _}from"./Select.319f7f3f.js";import{S as b}from"./SubmitButton.e555a601.js";import{_ as V,g as B,y as x,f as l,o as S,b as g,a as n,w as v}from"./app.f4b2b251.js";import"./vanilla-picker.csp.f644cdcf.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const C={components:{Input:d,Select:_,TextArea:f,SubmitButton:b,CheckBox:c},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let r={name:null,price:null,description:null,is_default:null};return this.existing_record&&(r={...r,...this.existing_record}),r}}};function k(r,e,i,w,o,I){const m=l("Input"),s=l("TextArea"),u=l("CheckBox"),a=l("SubmitButton"),p=l("Modal");return S(),B(p,{title:i.data.title},{default:x(()=>[g("form",{onSubmit:e[5]||(e[5]=v(t=>i.existing_record?o.form.patch(r.route("admin.serviceLevels.update",i.existing_record.id)):o.form.post(r.route("admin.serviceLevels.store")),["prevent"]))},[n(m,{modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.name=t),name:"name",label:r.__("Name"),required:!0},null,8,["modelValue","label"]),n(m,{modelValue:o.form.price,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.price=t),name:"price",label:r.__("Price"),required:!0,onKeypress:e[2]||(e[2]=t=>r.onlyNumber(t,o.form.price))},null,8,["modelValue","label"]),n(s,{modelValue:o.form.description,"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.description=t),name:"description",label:r.__("Description"),rows:"2"},null,8,["modelValue","label"]),n(u,{modelValue:o.form.is_default,"onUpdate:modelValue":e[4]||(e[4]=t=>o.form.is_default=t),name:"is_default",label:r.__("Default Selection")},null,8,["modelValue","label"]),n(a,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const L=V(C,[["render",k]]);export{L as default};

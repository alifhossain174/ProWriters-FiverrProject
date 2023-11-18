import{I as p}from"./Input.22a5d0b7.js";import{_ as d,A as c,w as f,r as l,o as b,b as _,a as s,D as g}from"./app.7185dbf0.js";import{S as v}from"./Select.e5dd87a9.js";import{S as V}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const S={components:{Input:p,Select:v,SubmitButton:V},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let e={name:null,percentage:null,services:[]};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function B(e,o,n,h,t,w){const i=l("Input"),m=l("Select"),a=l("SubmitButton"),u=l("Modal");return b(),c(u,{title:n.data.title},{default:f(()=>[_("form",{onSubmit:o[4]||(o[4]=g(r=>n.existing_record?t.form.patch(e.route("admin.subjects.update",n.existing_record.id)):t.form.post(e.route("admin.subjects.store")),["prevent"]))},[s(i,{modelValue:t.form.name,"onUpdate:modelValue":o[0]||(o[0]=r=>t.form.name=r),name:"name",label:e.__("Name"),required:!0},null,8,["modelValue","label"]),s(i,{modelValue:t.form.percentage,"onUpdate:modelValue":o[1]||(o[1]=r=>t.form.percentage=r),label:e.__("Markup percentage to add to the price of the service"),tooltip:e.__("The markup will be used in calculating the base price of the service"),name:"percentage",onKeypress:o[2]||(o[2]=r=>e.onlyNumber(r,t.form.percentage))},null,8,["modelValue","label","tooltip"]),s(m,{multiple:!0,searchable:!0,options:n.data.dropdowns.services,modelValue:t.form.services,"onUpdate:modelValue":o[3]||(o[3]=r=>t.form.services=r),label:e.__("Services"),required:!0,name:"services"},null,8,["options","modelValue","label"]),s(a,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const q=d(S,[["render",B]]);export{q as default};

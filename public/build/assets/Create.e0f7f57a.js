import{I as p}from"./Input.22a5d0b7.js";import{_ as u,A as d,w as c,r as n,o as f,b as _,a,D as b}from"./app.7185dbf0.js";import{S as g}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const x={components:{Input:p,SubmitButton:g},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let e={name:null,percentage:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function B(e,o,r,h,t,S){const m=n("Input"),s=n("SubmitButton"),l=n("Modal");return f(),d(l,{title:r.data.title},{default:c(()=>[_("form",{onSubmit:o[1]||(o[1]=b(i=>r.existing_record?t.form.patch(e.route("admin.grammaticalPeople.update",r.existing_record.id)):t.form.post(e.route("admin.grammaticalPeople.store")),["prevent"]))},[a(m,{modelValue:t.form.name,"onUpdate:modelValue":o[0]||(o[0]=i=>t.form.name=i),name:"name",label:e.__("Name"),required:!0},null,8,["modelValue","label"]),a(s,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const N=u(x,[["render",B]]);export{N as default};

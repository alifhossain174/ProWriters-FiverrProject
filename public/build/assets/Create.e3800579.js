import{I as l}from"./Input.d3e8f5e0.js";import{_ as u,g as d,y as f,f as n,o as c,b as _,a,w as b}from"./app.b345893e.js";import{S as g}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const x={components:{Input:l,SubmitButton:g},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let e={name:null,percentage:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function B(e,o,r,h,t,S){const m=n("Input"),s=n("SubmitButton"),p=n("Modal");return c(),d(p,{title:r.data.title},{default:f(()=>[_("form",{onSubmit:o[1]||(o[1]=b(i=>r.existing_record?t.form.patch(e.route("admin.paperFormats.update",r.existing_record.id)):t.form.post(e.route("admin.paperFormats.store")),["prevent"]))},[a(m,{modelValue:t.form.name,"onUpdate:modelValue":o[0]||(o[0]=i=>t.form.name=i),name:"name",label:e.__("Name"),required:!0},null,8,["modelValue","label"]),a(s,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const M=u(x,[["render",B]]);export{M as default};
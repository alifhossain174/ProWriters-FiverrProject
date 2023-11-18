import{I as d}from"./Input.ae708ed5.js";import{T as p}from"./TextArea.c8f7119a.js";import{_,A as f,w as g,r as a,o as c,b,a as m,D as x}from"./app.969842cf.js";import{S as V}from"./SubmitButton.f6813064.js";import"./vanilla-picker.csp.0ced5960.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ed46515d.js";const B={components:{Input:d,TextArea:p,SubmitButton:V},props:["data","content_language","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let e={name:null,meta_tags:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function C(e,o,n,S,t,T){const s=a("Input"),i=a("TextArea"),l=a("SubmitButton"),u=a("Modal");return c(),f(u,{title:n.data.title},{default:g(()=>[b("form",{onSubmit:o[2]||(o[2]=x(r=>n.existing_record?t.form.patch(e.route("admin.manage.content.postCategories.update",[n.content_language,n.existing_record.id])):t.form.post(e.route("admin.manage.content.postCategories.store",n.content_language)),["prevent"]))},[m(s,{modelValue:t.form.name,"onUpdate:modelValue":o[0]||(o[0]=r=>t.form.name=r),name:"name",label:e.__("Name"),required:!0},null,8,["modelValue","label"]),m(i,{modelValue:t.form.meta_tags,"onUpdate:modelValue":o[1]||(o[1]=r=>t.form.meta_tags=r),name:"meta_tags",label:e.__("Meta Tags"),required:!0},null,8,["modelValue","label"]),m(l,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const k=_(B,[["render",C]]);export{k as default};
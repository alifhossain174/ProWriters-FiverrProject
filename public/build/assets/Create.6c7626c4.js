import{I as u}from"./Input.fe981f88.js";import{_ as d,A as p,w as c,r,o as f,b as _,a as i,D as g}from"./app.571265cd.js";import{S as b}from"./SubmitButton.59cbcabd.js";import"./vanilla-picker.csp.d11a8b31.js";import"./bootstrap.esm.2333d793.js";import"./debounce.94acad4c.js";const x={components:{Input:u,SubmitButton:b},props:["data","content_language","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let e={name:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function B(e,n,t,h,o,C){const m=r("Input"),s=r("SubmitButton"),l=r("Modal");return f(),p(l,{title:t.data.title},{default:c(()=>[_("form",{onSubmit:n[1]||(n[1]=g(a=>t.existing_record?o.form.patch(e.route("admin.manage.content.faqCategories.update",[t.content_language,t.existing_record.id])):o.form.post(e.route("admin.manage.content.faqCategories.store",t.content_language)),["prevent"]))},[i(m,{modelValue:o.form.name,"onUpdate:modelValue":n[0]||(n[0]=a=>o.form.name=a),name:"name",label:e.__("Name"),required:!0},null,8,["modelValue","label"]),i(s,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const M=d(x,[["render",B]]);export{M as default};

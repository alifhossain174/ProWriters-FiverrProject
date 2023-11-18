import{I as p}from"./Input.d3e8f5e0.js";import{T as c}from"./TextArea.67869acb.js";import{_ as f,g,y as _,f as i,o as b,b as V,a as l,w as S}from"./app.b345893e.js";import{S as x}from"./Select.ee436180.js";import{S as B}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const q={components:{Input:p,TextArea:c,Select:x,SubmitButton:B},props:["data","content_language","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let e={title:null,description:null,categories:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function T(e,o,n,w,t,C){const a=i("Input"),s=i("TextArea"),m=i("Select"),u=i("SubmitButton"),d=i("Modal");return b(),g(d,{title:n.data.title},{default:_(()=>[V("form",{onSubmit:o[3]||(o[3]=S(r=>n.existing_record?t.form.patch(e.route("admin.manage.content.faqQuestions.update",[n.content_language,n.existing_record.id])):t.form.post(e.route("admin.manage.content.faqQuestions.store",n.content_language)),["prevent"]))},[l(a,{modelValue:t.form.title,"onUpdate:modelValue":o[0]||(o[0]=r=>t.form.title=r),name:"title",label:e.__("Title"),required:!0},null,8,["modelValue","label"]),l(s,{modelValue:t.form.description,"onUpdate:modelValue":o[1]||(o[1]=r=>t.form.description=r),name:"description",label:e.__("Description"),required:!0},null,8,["modelValue","label"]),l(m,{multiple:!0,modelValue:t.form.categories,"onUpdate:modelValue":o[2]||(o[2]=r=>t.form.categories=r),options:n.data.dropdowns.categories,name:"categories",label:e.__("Categories"),required:!0},null,8,["modelValue","options","label"]),l(u,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const Q=f(q,[["render",T]]);export{Q as default};

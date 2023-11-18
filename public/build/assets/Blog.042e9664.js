import d from"./ManageContentLayout.d20da0aa.js";import{I as _}from"./Input.9153dc0b.js";import{T as g}from"./TextArea.667d8c75.js";import{_ as f,c,a as l,w as b,F as V,r as a,o as S,b as B,D as T}from"./app.40136f18.js";import{S as x}from"./SubmitButton.96a19e7f.js";import"./vanilla-picker.csp.e27d2510.js";import"./bootstrap.esm.2333d793.js";import"./debounce.84e4095c.js";const C={props:["data","existing_record","content_language"],components:{ManageContentLayout:d,Input:_,SubmitButton:x,TextArea:g},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let e={title:null,sub_title:null,meta_tags:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function A(e,t,r,M,o,v){const i=a("AppHead"),m=a("Input"),s=a("TextArea"),u=a("SubmitButton"),p=a("ManageContentLayout");return S(),c(V,null,[l(i,{title:r.data.title},null,8,["title"]),l(p,{content_language:r.content_language,title:r.data.title},{default:b(()=>[B("form",{onSubmit:t[3]||(t[3]=T(n=>o.form.patch(e.route("admin.manage.content.systemPages.blog.update",r.content_language)),["prevent"]))},[l(m,{modelValue:o.form.title,"onUpdate:modelValue":t[0]||(t[0]=n=>o.form.title=n),label:e.__("Title"),name:"title",required:!0},null,8,["modelValue","label"]),l(m,{modelValue:o.form.sub_title,"onUpdate:modelValue":t[1]||(t[1]=n=>o.form.sub_title=n),label:e.__("Sub Title"),name:"sub_title",required:!0},null,8,["modelValue","label"]),l(s,{modelValue:o.form.meta_tags,"onUpdate:modelValue":t[2]||(t[2]=n=>o.form.meta_tags=n),label:e.__("Meta Tags"),name:"meta_tags"},null,8,["modelValue","label"]),l(u,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const q=f(C,[["render",A]]);export{q as default};

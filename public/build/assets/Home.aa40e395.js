import p from"./ManageContentLayout.22db0968.js";import{I as c}from"./Input.744111e9.js";import{T as g}from"./TextArea.33080630.js";import{_,c as d,a,w as f,F as b,r,o as x,b as h,D as S}from"./app.6486bb89.js";import{S as B}from"./SubmitButton.6b08448a.js";import"./vanilla-picker.csp.273e51c7.js";import"./bootstrap.esm.2333d793.js";import"./debounce.2741a44f.js";const C={props:["data","existing_record","content_language"],components:{ManageContentLayout:p,Input:c,SubmitButton:B,TextArea:g},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let t={title:null,meta_tags:null};return this.existing_record&&(t={...t,...this.existing_record}),t}}};function A(t,e,o,M,n,T){const m=r("AppHead"),i=r("TextArea"),l=r("SubmitButton"),u=r("ManageContentLayout");return x(),d(b,null,[a(m,{title:o.data.title},null,8,["title"]),a(u,{content_language:o.content_language,title:o.data.title},{default:f(()=>[h("form",{onSubmit:e[1]||(e[1]=S(s=>n.form.patch(t.route("admin.manage.content.systemPages.home.update",o.content_language)),["prevent"]))},[a(i,{modelValue:n.form.meta_tags,"onUpdate:modelValue":e[0]||(e[0]=s=>n.form.meta_tags=s),label:t.__("Meta Tags"),name:"meta_tags",required:"true"},null,8,["modelValue","label"]),a(l,{disabled:n.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const I=_(C,[["render",A]]);export{I as default};

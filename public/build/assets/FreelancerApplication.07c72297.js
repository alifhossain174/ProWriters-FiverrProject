import f from"./ManageContentLayout.d20da0aa.js";import{E as b}from"./Editor.6b93cbfb.js";import{I as g}from"./Input.9153dc0b.js";import{T as V}from"./TextArea.667d8c75.js";import{_ as S,c as F,a,w as y,F as c,r as i,o as U,b as r,t as w,D as C}from"./app.40136f18.js";import{S as M}from"./Select.d1ffb357.js";import{S as A}from"./SubmitButton.96a19e7f.js";import"./vanilla-picker.csp.e27d2510.js";import{F as T}from"./FileChooser.07a78c07.js";import"./bootstrap.esm.2333d793.js";import"./vue-quill.snow.1f4bdc13.js";import"./debounce.84e4095c.js";const k={props:["data","existing_record","content_language"],components:{ManageContentLayout:f,Input:g,SubmitButton:A,TextArea:V,FileChooser:T,Select:M,Editor:b},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let o={title:null,sub_title:null,content:null,additional_data:{form_title:null,form_sub_title:null,form_submission_message:null,meta_title:null,meta_description:null,meta_keywords:null,meta_image:null}};return this.existing_record&&(o={...o,...this.existing_record}),o}}},q={class:"border rounded-3 p-3 mb-4"},B={class:"float-none w-auto px-3"};function E(o,e,m,I,t,v){const d=i("AppHead"),n=i("Input"),s=i("Editor"),u=i("FileChooser"),_=i("SubmitButton"),p=i("ManageContentLayout");return U(),F(c,null,[a(d,{title:m.data.title},null,8,["title"]),a(p,{content_language:m.content_language,title:m.data.title},{default:y(()=>[r("form",{onSubmit:e[10]||(e[10]=C(l=>t.form.patch(o.route("admin.manage.content.systemPages.freelancerApplication.update",m.content_language)),["prevent"]))},[a(n,{modelValue:t.form.title,"onUpdate:modelValue":e[0]||(e[0]=l=>t.form.title=l),label:o.__("Title"),name:"title",required:!0},null,8,["modelValue","label"]),a(n,{modelValue:t.form.sub_title,"onUpdate:modelValue":e[1]||(e[1]=l=>t.form.sub_title=l),label:o.__("Sub Title"),name:"sub_title"},null,8,["modelValue","label"]),a(n,{modelValue:t.form.additional_data.form_title,"onUpdate:modelValue":e[2]||(e[2]=l=>t.form.additional_data.form_title=l),label:o.__("Application Form Title"),name:"additional_data.form_title",required:!0},null,8,["modelValue","label"]),a(n,{modelValue:t.form.additional_data.form_sub_title,"onUpdate:modelValue":e[3]||(e[3]=l=>t.form.additional_data.form_sub_title=l),label:o.__("Application Form Sub Title"),name:"additional_data.form_sub_title"},null,8,["modelValue","label"]),a(n,{modelValue:t.form.additional_data.form_submission_message,"onUpdate:modelValue":e[4]||(e[4]=l=>t.form.additional_data.form_submission_message=l),label:o.__("Message to display after successful form submission"),name:"additional_data.form_submission_message",required:!0},null,8,["modelValue","label"]),a(s,{modelValue:t.form.content,"onUpdate:modelValue":e[5]||(e[5]=l=>t.form.content=l),label:o.__("Instruction for Freelancers"),name:"content"},null,8,["modelValue","label"]),r("fieldset",q,[r("legend",B,w(o.__("SEO")),1),a(n,{modelValue:t.form.additional_data.meta_title,"onUpdate:modelValue":e[6]||(e[6]=l=>t.form.additional_data.meta_title=l),label:o.__("Meta Title"),name:"additional_data.meta_title",required:!0},null,8,["modelValue","label"]),a(n,{modelValue:t.form.additional_data.meta_description,"onUpdate:modelValue":e[7]||(e[7]=l=>t.form.additional_data.meta_description=l),label:o.__("Meta Description"),name:"additional_data.meta_description",required:!0},null,8,["modelValue","label"]),a(n,{modelValue:t.form.additional_data.meta_keywords,"onUpdate:modelValue":e[8]||(e[8]=l=>t.form.additional_data.meta_keywords=l),label:o.__("Meta Keywords"),name:"additional_data.meta_keywords",required:!0},null,8,["modelValue","label"]),a(u,{modelValue:t.form.additional_data.meta_image,"onUpdate:modelValue":e[9]||(e[9]=l=>t.form.additional_data.meta_image=l),label:o.__("Meta Image"),name:"additional_data.meta_image"},null,8,["modelValue","label"])]),a(_,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const R=S(k,[["render",E]]);export{R as default};

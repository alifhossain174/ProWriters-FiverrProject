import b from"./ManageContentLayout.8c2555d9.js";import{I as g}from"./Input.8c887a2d.js";import{T as c}from"./TextArea.bedd4e18.js";import{_ as V,c as w,a,w as k,F as C,r as d,o as S,b as n,t as _,D as U}from"./app.1d2673ab.js";import{S as y}from"./Select.97a87473.js";import{S as v}from"./SubmitButton.108d399e.js";import"./vanilla-picker.csp.eccdf93b.js";import{F}from"./FileChooser.8a66f9a3.js";import{C as M}from"./ColorPicker.f65efa27.js";import"./bootstrap.esm.2333d793.js";import"./debounce.8ee276ba.js";const T={props:["data","existing_record","content_language"],components:{ManageContentLayout:b,Input:g,SubmitButton:v,TextArea:c,FileChooser:F,Select:y,ColorPicker:M},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let t={title:null,sub_title:null,additional_data:{welcome_title:null,welcome_sub_title:null,welcome_image:null,welcome_image_alt_text:null,welcome_background_color:null,meta_title:null,meta_description:null,meta_keywords:null,meta_image:null}};return this.existing_record&&(t={...t,...this.existing_record}),t}}},B={class:"border rounded-3 p-3 mb-4"},I={class:"float-none w-auto px-3 fs-6"},P={class:"row"},q={class:"col-md-6"},A={class:"col-md-6"},D={class:"row"},L={class:"col-md-6"},W={class:"border rounded-3 p-3 mb-4"},E={class:"float-none w-auto px-3 fs-6"};function H(t,e,m,N,l,x){const s=d("AppHead"),i=d("Input"),r=d("FileChooser"),u=d("ColorPicker"),p=d("SubmitButton"),f=d("ManageContentLayout");return S(),w(C,null,[a(s,{title:m.data.title},null,8,["title"]),a(f,{content_language:m.content_language,title:m.data.title},{default:k(()=>[n("form",{onSubmit:e[11]||(e[11]=U(o=>l.form.patch(t.route("admin.manage.content.systemPages.forgotPassword.update",m.content_language)),["prevent"]))},[a(i,{modelValue:l.form.title,"onUpdate:modelValue":e[0]||(e[0]=o=>l.form.title=o),label:t.__("Title"),name:"title",required:!0},null,8,["modelValue","label"]),a(i,{modelValue:l.form.sub_title,"onUpdate:modelValue":e[1]||(e[1]=o=>l.form.sub_title=o),label:t.__("Sub Title"),name:"sub_title"},null,8,["modelValue","label"]),n("fieldset",B,[n("legend",I,_(t.__("Welcome Section")),1),a(i,{modelValue:l.form.additional_data.welcome_title,"onUpdate:modelValue":e[2]||(e[2]=o=>l.form.additional_data.welcome_title=o),label:t.__("Welcome Title"),name:"additional_data.welcome_title",required:!0},null,8,["modelValue","label"]),a(i,{modelValue:l.form.additional_data.welcome_sub_title,"onUpdate:modelValue":e[3]||(e[3]=o=>l.form.additional_data.welcome_sub_title=o),label:t.__("Welcome Sub Title"),name:"additional_data.welcome_sub_title"},null,8,["modelValue","label"]),n("div",P,[n("div",q,[a(r,{modelValue:l.form.additional_data.welcome_image,"onUpdate:modelValue":e[4]||(e[4]=o=>l.form.additional_data.welcome_image=o),label:t.__("Image"),name:"additional_data.welcome_image"},null,8,["modelValue","label"])]),n("div",A,[a(i,{modelValue:l.form.additional_data.welcome_image_alt_text,"onUpdate:modelValue":e[5]||(e[5]=o=>l.form.additional_data.welcome_image_alt_text=o),label:t.__("Image Alt Text"),name:"additional_data.welcome_image_alt_text"},null,8,["modelValue","label"])])]),n("div",D,[n("div",L,[a(u,{modelValue:l.form.additional_data.welcome_background_color,"onUpdate:modelValue":e[6]||(e[6]=o=>l.form.additional_data.welcome_background_color=o),label:t.__("Background Color"),name:"additional_data.welcome_background_color"},null,8,["modelValue","label"])])])]),n("fieldset",W,[n("legend",E,_(t.__("SEO")),1),a(i,{modelValue:l.form.additional_data.meta_title,"onUpdate:modelValue":e[7]||(e[7]=o=>l.form.additional_data.meta_title=o),label:t.__("Meta Title"),name:"additional_data.meta_title",required:!0},null,8,["modelValue","label"]),a(i,{modelValue:l.form.additional_data.meta_description,"onUpdate:modelValue":e[8]||(e[8]=o=>l.form.additional_data.meta_description=o),label:t.__("Meta Description"),name:"additional_data.meta_description",required:!0},null,8,["modelValue","label"]),a(i,{modelValue:l.form.additional_data.meta_keywords,"onUpdate:modelValue":e[9]||(e[9]=o=>l.form.additional_data.meta_keywords=o),label:t.__("Meta Keywords"),name:"additional_data.meta_keywords",required:!0},null,8,["modelValue","label"]),a(r,{modelValue:l.form.additional_data.meta_image,"onUpdate:modelValue":e[10]||(e[10]=o=>l.form.additional_data.meta_image=o),label:t.__("Meta Image"),name:"additional_data.meta_image"},null,8,["modelValue","label"])]),a(p,{disabled:l.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const h=V(T,[["render",H]]);export{h as default};

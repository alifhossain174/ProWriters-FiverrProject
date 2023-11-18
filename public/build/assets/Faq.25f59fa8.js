import f from"./ManageContentLayout.d20da0aa.js";import{I as b}from"./Input.9153dc0b.js";import{T as c}from"./TextArea.667d8c75.js";import{_ as V,c as S,a as n,w as C,F,r as a,o as x,b as i,D as T}from"./app.40136f18.js";import{S as v}from"./Select.d1ffb357.js";import{S as I}from"./SubmitButton.96a19e7f.js";import"./vanilla-picker.csp.e27d2510.js";import{F as A}from"./FileChooser.07a78c07.js";import"./bootstrap.esm.2333d793.js";import"./debounce.84e4095c.js";const B={props:["data","existing_record","content_language"],components:{ManageContentLayout:f,Input:b,SubmitButton:I,TextArea:c,FileChooser:A,Select:v},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let l={title:null,sub_title:null,meta_tags:null,image:null,image_alt_text:null,image_position:null};return this.existing_record&&(l={...l,...this.existing_record}),l}}},U={class:"row"},w={class:"col-md-6"},M={class:"col-md-6"};function y(l,e,m,q,t,L){const r=a("AppHead"),s=a("Input"),u=a("FileChooser"),_=a("Select"),p=a("TextArea"),d=a("SubmitButton"),g=a("ManageContentLayout");return x(),S(F,null,[n(r,{title:m.data.title},null,8,["title"]),n(g,{content_language:m.content_language,title:m.data.title},{default:C(()=>[i("form",{onSubmit:e[6]||(e[6]=T(o=>t.form.patch(l.route("admin.manage.content.systemPages.faq.update",m.content_language)),["prevent"]))},[n(s,{modelValue:t.form.title,"onUpdate:modelValue":e[0]||(e[0]=o=>t.form.title=o),label:l.__("Title"),name:"title",required:!0},null,8,["modelValue","label"]),n(s,{modelValue:t.form.sub_title,"onUpdate:modelValue":e[1]||(e[1]=o=>t.form.sub_title=o),label:l.__("Sub Title"),name:"sub_title"},null,8,["modelValue","label"]),n(u,{modelValue:t.form.image,"onUpdate:modelValue":e[2]||(e[2]=o=>t.form.image=o),label:l.__("Image"),name:"image"},null,8,["modelValue","label"]),i("div",U,[i("div",w,[n(_,{modelValue:t.form.image_position,"onUpdate:modelValue":e[3]||(e[3]=o=>t.form.image_position=o),options:m.data.dropdowns.image_positions,label:l.__("Image Position"),name:"image_position"},null,8,["modelValue","options","label"])]),i("div",M,[n(s,{modelValue:t.form.image_alt_text,"onUpdate:modelValue":e[4]||(e[4]=o=>t.form.image_alt_text=o),label:l.__("Image Alt Text"),name:"image_alt_text"},null,8,["modelValue","label"])])]),n(p,{modelValue:t.form.meta_tags,"onUpdate:modelValue":e[5]||(e[5]=o=>t.form.meta_tags=o),label:l.__("Meta Tags"),name:"meta_tags"},null,8,["modelValue","label"]),n(d,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const J=V(B,[["render",y]]);export{J as default};
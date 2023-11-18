import _ from"./ManageContentLayout.eaaa7c59.js";import{I as f}from"./Input.d98634fc.js";import{T as d}from"./TextArea.328848c0.js";import{_ as g,c,a as l,w as b,F as V,r,o as x,b as C,D as S}from"./app.2abe2877.js";import{S as T}from"./Select.7a96caba.js";import{S as A}from"./SubmitButton.67fd88bd.js";import"./vanilla-picker.csp.f95a0d4d.js";import{F as B}from"./FileChooser.280c515b.js";import{C as F}from"./ColorPicker.66ec6bc2.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const I={props:["data","existing_record","content_language"],components:{ManageContentLayout:_,Input:f,SubmitButton:A,TextArea:d,FileChooser:B,Select:T,ColorPicker:F},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let o={title:null,sub_title:null,content:null,image:null,image_alt_text:null,image_position:null,appearance:{bg_color:null,text_color:null}};return this.existing_record&&(o={...o,...this.existing_record}),o}}};function v(o,e,a,M,t,U){const i=r("AppHead"),m=r("Input"),u=r("TextArea"),s=r("SubmitButton"),p=r("ManageContentLayout");return x(),c(V,null,[l(i,{title:a.data.title},null,8,["title"]),l(p,{content_language:a.content_language,title:a.data.title},{default:b(()=>[C("form",{onSubmit:e[4]||(e[4]=S(n=>t.form.patch(o.route("admin.manage.content.homepage.section.hero.update",a.content_language)),["prevent"]))},[l(m,{modelValue:t.form.title,"onUpdate:modelValue":e[0]||(e[0]=n=>t.form.title=n),label:o.__("Title"),name:"title",required:!0},null,8,["modelValue","label"]),l(m,{modelValue:t.form.sub_title,"onUpdate:modelValue":e[1]||(e[1]=n=>t.form.sub_title=n),label:o.__("Sub Title"),name:"sub_title"},null,8,["modelValue","label"]),l(u,{modelValue:t.form.content,"onUpdate:modelValue":e[2]||(e[2]=n=>t.form.content=n),label:o.__("Content"),name:"content"},null,8,["modelValue","label"]),l(m,{modelValue:t.form.image_alt_text,"onUpdate:modelValue":e[3]||(e[3]=n=>t.form.image_alt_text=n),label:o.__("Image Alt Text"),name:"image_alt_text"},null,8,["modelValue","label"]),l(s,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const j=g(I,[["render",v]]);export{j as default};

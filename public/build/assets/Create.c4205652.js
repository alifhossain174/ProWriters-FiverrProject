import S from"./ManageContentLayout.3424297d.js";import{R as w}from"./RichEditor.c5bc22a4.js";import{I as U}from"./Input.22a5d0b7.js";import{T as k}from"./TextArea.21d698c9.js";import{C as B}from"./CheckBox.692c21c3.js";import{S as T}from"./Select.e5dd87a9.js";import{S as v}from"./SubmitButton.78189237.js";import{_ as x,c as A,a as n,w as u,F as I,r as m,o as q,f as F,t as _,b as i,D as P}from"./app.7185dbf0.js";import"./vanilla-picker.csp.ad3cebef.js";import{F as y}from"./FileChooser.226a68a1.js";import{C as L}from"./ColorPicker.9e2ac6fa.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const M={components:{ManageContentLayout:S,Input:U,TextArea:k,Select:T,SubmitButton:v,ColorPicker:L,FileChooser:y,CheckBox:B,RichEditor:w},props:["data","content_language","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},watch:{"form.title":{handler(o,e){this.form.disable_auto_slug_gen||this.createSlug(o)},deep:!0}},methods:{prepareForm(){let o={disable_auto_slug_gen:!1,name:null,title:null,slug:null,sub_title:null,image:null,image_position:null,image_alt_text:null,content:null,meta_tags:null,appearance:{bg_color:null,text_color:null,title_alignment:null,image_alignment:null,header_minimum_height:null}};return this.existing_record&&(o={...o,...this.existing_record}),o},createSlug(o){if(o){let e=o.replace(/\s+$/,"");this.form.slug=e.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}else this.form.slug=null}}},H=i("i",{class:"fa-solid fa-arrow-left-long"},null,-1),E={class:"border rounded-3 p-3 mb-4"},N={class:"float-none w-auto px-3 fs-6"},R={class:"row"},D={class:"col-md-6"},G={class:"col-md-6"},W={class:"row"},j={class:"col-md-4"},z={class:"col-md-4"},J={class:"col-md-4"};function K(o,e,a,O,l,Q){const g=m("AppHead"),p=m("Link"),r=m("Input"),f=m("CheckBox"),b=m("FileChooser"),s=m("Select"),d=m("ColorPicker"),V=m("RichEditor"),c=m("TextArea"),C=m("SubmitButton"),h=m("ManageContentLayout");return q(),A(I,null,[n(g,{title:a.data.title},null,8,["title"]),n(h,{content_language:a.content_language,title:a.data.title},{action:u(()=>[n(p,{class:"btn btn-sm btn-light",href:o.route("admin.manage.content.websitePages.index",a.content_language)},{default:u(()=>[H,F(" "+_(o.__("Back to Website Pages")),1)]),_:1},8,["href"])]),default:u(()=>[i("form",{onSubmit:e[15]||(e[15]=P(t=>a.existing_record?l.form.patch(o.route("admin.manage.content.websitePages.update",[a.content_language,a.existing_record.id])):l.form.post(o.route("admin.manage.content.websitePages.store",a.content_language)),["prevent"]))},[n(r,{modelValue:l.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>l.form.name=t),name:"name",label:o.__("Name"),required:!0},null,8,["modelValue","label"]),i("fieldset",E,[i("legend",N,_(o.__("Header Section")),1),n(f,{modelValue:l.form.disable_auto_slug_gen,"onUpdate:modelValue":e[1]||(e[1]=t=>l.form.disable_auto_slug_gen=t),name:"disable_auto_slug_gen",label:o.__("Disable Auto Slug Generation")},null,8,["modelValue","label"]),n(r,{modelValue:l.form.title,"onUpdate:modelValue":e[2]||(e[2]=t=>l.form.title=t),name:"title",label:o.__("Title"),required:!0},null,8,["modelValue","label"]),n(r,{modelValue:l.form.slug,"onUpdate:modelValue":e[3]||(e[3]=t=>l.form.slug=t),name:"slug",label:o.__("Slug"),required:!0,readonly:!l.form.disable_auto_slug_gen},null,8,["modelValue","label","readonly"]),n(r,{modelValue:l.form.sub_title,"onUpdate:modelValue":e[4]||(e[4]=t=>l.form.sub_title=t),name:"sub_title",label:o.__("Sub Title")},null,8,["modelValue","label"]),n(b,{modelValue:l.form.image,"onUpdate:modelValue":e[5]||(e[5]=t=>l.form.image=t),label:o.__("Image"),name:"image"},null,8,["modelValue","label"]),i("div",R,[i("div",D,[n(s,{modelValue:l.form.image_position,"onUpdate:modelValue":e[6]||(e[6]=t=>l.form.image_position=t),options:a.data.dropdowns.image_positions,label:o.__("Image Position"),name:"image_position"},null,8,["modelValue","options","label"])]),i("div",G,[n(r,{modelValue:l.form.image_alt_text,"onUpdate:modelValue":e[7]||(e[7]=t=>l.form.image_alt_text=t),label:o.__("Image Alt Text"),name:"image_alt_text"},null,8,["modelValue","label"])])]),n(d,{modelValue:l.form.appearance.bg_color,"onUpdate:modelValue":e[8]||(e[8]=t=>l.form.appearance.bg_color=t),label:o.__("Background Color"),name:"appearance.bg_color",required:!0},null,8,["modelValue","label"]),n(d,{modelValue:l.form.appearance.text_color,"onUpdate:modelValue":e[9]||(e[9]=t=>l.form.appearance.text_color=t),label:o.__("Text Color"),name:"appearance.text_color",required:!0},null,8,["modelValue","label"]),i("div",W,[i("div",j,[n(s,{modelValue:l.form.appearance.title_alignment,"onUpdate:modelValue":e[10]||(e[10]=t=>l.form.appearance.title_alignment=t),options:a.data.dropdowns.image_positions,label:o.__("Title Alignment"),name:"appearance.title_alignment"},null,8,["modelValue","options","label"])]),i("div",z,[n(s,{modelValue:l.form.appearance.image_alignment,"onUpdate:modelValue":e[11]||(e[11]=t=>l.form.appearance.image_alignment=t),options:a.data.dropdowns.image_positions,label:o.__("Image Alignment"),name:"appearance.image_alignment"},null,8,["modelValue","options","label"])]),i("div",J,[n(r,{modelValue:l.form.appearance.header_minimum_height,"onUpdate:modelValue":e[12]||(e[12]=t=>l.form.appearance.header_minimum_height=t),label:o.__("Header Minimum Height"),tooltip:o.__("In pixels"),name:"appearance.header_minimum_height",required:!0},null,8,["modelValue","label","tooltip"])])])]),n(V,{modelValue:l.form.content,"onUpdate:modelValue":e[13]||(e[13]=t=>l.form.content=t),label:o.__("Content"),required:!0},null,8,["modelValue","label"]),n(c,{modelValue:l.form.meta_tags,"onUpdate:modelValue":e[14]||(e[14]=t=>l.form.meta_tags=t),label:o.__("Meta Tags"),name:"meta_tags",required:!0},null,8,["modelValue","label"]),n(C,{disabled:l.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const se=x(M,[["render",K]]);export{se as default};

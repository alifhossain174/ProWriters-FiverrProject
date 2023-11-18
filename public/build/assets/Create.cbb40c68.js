import S from"./ManageContentLayout.4a6c8e51.js";import{I as U}from"./Input.8aaee37e.js";import{T}from"./TextArea.6fdedaa7.js";import{C as w}from"./CheckBox.bb9a385d.js";import{S as x}from"./Select.15c2a802.js";import{S as A}from"./SubmitButton.9e7b4015.js";import{_ as B,c as d,a as n,w as g,F as q,r,o as s,f as F,t as i,b as m,d as _,A as c,D as L}from"./app.15906225.js";import"./vanilla-picker.csp.29f78eb8.js";import{F as I}from"./FileChooser.dd04bb33.js";import{R as E}from"./RichEditor.b3412b29.js";import"./bootstrap.esm.2333d793.js";import"./debounce.23c94884.js";const M={components:{ManageContentLayout:S,Input:U,TextArea:T,Select:x,CheckBox:w,RichEditor:E,FileChooser:I,SubmitButton:A},props:["data","content_language","existing_record"],watch:{"form.title":{handler(o,l){this.form.disable_auto_slug_gen||this.createSlug(o)},deep:!0}},data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let o={disable_auto_slug_gen:!1,slug:null,title:null,author_name:null,thumbnail_image:null,thumbnail_image_alt_title:null,cover_image:null,cover_image_alt_title:null,excerpt:null,content:null,meta_tags:null,published:null,disable_auto_slug_gen:null,categories:null};return this.existing_record&&(o={...o,...this.existing_record}),o},createSlug(o){if(o){let l=o.replace(/\s+$/,"");this.form.slug=l.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}else this.form.slug=null}}},N={class:"row"},R={class:"col-md-8"},D={class:"col-md-4"},H={class:"d-grid gap-2 mb-4"},G={class:"border rounded-3 p-3 mb-4"},P={class:"float-none w-auto px-3 fs-8"},j={style:{height:"150px"},class:"w-100 border bg-light"},z=["src"],J={class:"border rounded-3 p-3 mb-4"},K={class:"float-none w-auto px-3 fs-8"},O={style:{height:"150px"},class:"w-100 border bg-light"},Q=["src"];function W(o,l,a,X,e,Y){const V=r("AppHead"),h=r("Link"),u=r("Input"),v=r("Select"),C=r("RichEditor"),f=r("TextArea"),k=r("SubmitButton"),p=r("CheckBox"),b=r("FileChooser"),y=r("ManageContentLayout");return s(),d(q,null,[n(V,{title:a.data.title},null,8,["title"]),n(y,{content_language:a.content_language,title:a.data.title},{action:g(()=>[n(h,{class:"btn btn-sm btn-light",href:o.route("admin.manage.content.posts.index",a.content_language)},{default:g(()=>[F(i(o.__("back to"))+" "+i(o.__("Articles")),1)]),_:1},8,["href"])]),default:g(()=>[m("form",{onSubmit:l[15]||(l[15]=L(t=>a.existing_record?e.form.patch(o.route("admin.manage.content.posts.update",[a.content_language,a.existing_record.id])):e.form.post(o.route("admin.manage.content.posts.store",a.content_language)),["prevent"]))},[m("div",N,[m("div",R,[n(u,{modelValue:e.form.title,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form.title=t),name:"title",label:o.__("Title"),required:!0},null,8,["modelValue","label"]),n(u,{modelValue:e.form.slug,"onUpdate:modelValue":l[1]||(l[1]=t=>e.form.slug=t),name:"slug",label:o.__("Slug"),required:!0,readonly:!e.form.disable_auto_slug_gen},null,8,["modelValue","label","readonly"]),n(v,{multiple:!0,modelValue:e.form.categories,"onUpdate:modelValue":l[2]||(l[2]=t=>e.form.categories=t),options:a.data.dropdowns.categories,name:"categories",label:o.__("Categories"),required:!0},null,8,["modelValue","options","label"]),n(C,{modelValue:e.form.content,"onUpdate:modelValue":l[3]||(l[3]=t=>e.form.content=t),name:"content",label:o.__("Content"),required:!0},null,8,["modelValue","label"]),n(f,{modelValue:e.form.excerpt,"onUpdate:modelValue":l[4]||(l[4]=t=>e.form.excerpt=t),name:"excerpt",label:o.__("Excerpt"),required:!0},null,8,["modelValue","label"]),n(f,{modelValue:e.form.meta_tags,"onUpdate:modelValue":l[5]||(l[5]=t=>e.form.meta_tags=t),name:"meta_tags",label:o.__("Meta Tags"),required:!0},null,8,["modelValue","label"]),n(u,{modelValue:e.form.author_name,"onUpdate:modelValue":l[6]||(l[6]=t=>e.form.author_name=t),name:"author_name",label:o.__("Author Name"),required:!0},null,8,["modelValue","label"])]),m("div",D,[m("div",H,[n(k,{disabled:e.form.processing},null,8,["disabled"])]),n(p,{modelValue:e.form.disable_auto_slug_gen,"onUpdate:modelValue":l[7]||(l[7]=t=>e.form.disable_auto_slug_gen=t),name:"disable_auto_slug_gen",label:o.__("Disable Auto Slug Generation")},null,8,["modelValue","label"]),n(p,{modelValue:e.form.published,"onUpdate:modelValue":l[8]||(l[8]=t=>e.form.published=t),name:"published",label:o.__("Published")},null,8,["modelValue","label"]),m("fieldset",G,[m("legend",P,i(o.__("Thumbnail Image")),1),m("div",j,[m("img",{style:{"max-height":"150px"},src:"/"+e.form.thumbnail_image,class:"img-fluid h-100",alt:""},null,8,z)]),e.form.thumbnail_image?(s(),d("button",{key:0,type:"button",class:"btn btn-link",onClick:l[9]||(l[9]=t=>e.form.thumbnail_image=null)},i(o.__("Clear")),1)):_("",!0),e.form.thumbnail_image?_("",!0):(s(),c(b,{key:1,modelValue:e.form.thumbnail_image,"onUpdate:modelValue":l[10]||(l[10]=t=>e.form.thumbnail_image=t),name:"thumbnail_image"},null,8,["modelValue"])),n(u,{modelValue:e.form.thumbnail_image_alt_title,"onUpdate:modelValue":l[11]||(l[11]=t=>e.form.thumbnail_image_alt_title=t),name:"thumbnail_image_alt_title",label:o.__("ALT Title"),required:!0},null,8,["modelValue","label"])]),m("fieldset",J,[m("legend",K,i(o.__("Cover Image")),1),m("div",O,[m("img",{style:{"max-height":"150px"},src:"/"+e.form.cover_image,class:"img-fluid h-100",alt:""},null,8,Q)]),e.form.cover_image?(s(),d("button",{key:0,type:"button",class:"btn btn-link",onClick:l[12]||(l[12]=t=>e.form.cover_image=null)},i(o.__("Clear")),1)):_("",!0),e.form.cover_image?_("",!0):(s(),c(b,{key:1,modelValue:e.form.cover_image,"onUpdate:modelValue":l[13]||(l[13]=t=>e.form.cover_image=t),name:"cover_image"},null,8,["modelValue"])),n(u,{modelValue:e.form.cover_image_alt_title,"onUpdate:modelValue":l[14]||(l[14]=t=>e.form.cover_image_alt_title=t),name:"cover_image_alt_title",label:o.__("ALT Title"),required:!0},null,8,["modelValue","label"])])])])],32)]),_:1},8,["content_language","title"])],64)}const se=B(M,[["render",W]]);export{se as default};

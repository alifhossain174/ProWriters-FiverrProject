import C from"./ManageContentLayout.eaaa7c59.js";import{I as v}from"./Input.d98634fc.js";import{T as S}from"./TextArea.328848c0.js";import{_ as U,c as _,a,w as T,F as f,r as d,o as c,b as l,q as k,t as p,f as y,D as F}from"./app.2abe2877.js";import{S as I}from"./Select.7a96caba.js";import{S as A}from"./SubmitButton.67fd88bd.js";import"./vanilla-picker.csp.f95a0d4d.js";import{F as w}from"./FileChooser.280c515b.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const q={props:["data","existing_record","content_language"],components:{ManageContentLayout:C,Input:v,SubmitButton:A,TextArea:S,FileChooser:w,Select:I},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let t={title:null,sub_title:null,additional_data:[]};return this.existing_record&&(t={...t,...this.existing_record}),t},addBox(){this.form.additional_data.push({title:null,content:null,image:null,image_alt_text:null})},deleteBox(t){this.form.additional_data.length>1&&this.form.additional_data.splice(t,1)}}},L={class:"card-body"},M={class:"card-title h6"},H=l("hr",null,null,-1),N={class:"row"},D={class:"col-md-6"},W={class:"col-md-6"},x=["onClick"],E=l("i",{class:"far fa-trash-alt"},null,-1),j=[E],z={class:"card"},G={class:"list-group list-group-flush"},J={class:"list-group-item"},K=l("i",{class:"fas fa-plus"},null,-1);function O(t,n,r,P,e,u){const g=d("AppHead"),m=d("Input"),b=d("TextArea"),h=d("FileChooser"),V=d("SubmitButton"),B=d("ManageContentLayout");return c(),_(f,null,[a(g,{title:r.data.title},null,8,["title"]),a(B,{content_language:r.content_language,title:r.data.title},{default:T(()=>[l("form",{onSubmit:n[3]||(n[3]=F(s=>e.form.patch(t.route("admin.manage.content.homepage.section.howItWorks.update",r.content_language)),["prevent"]))},[a(m,{modelValue:e.form.title,"onUpdate:modelValue":n[0]||(n[0]=s=>e.form.title=s),label:t.__("Title"),name:"title",required:!0},null,8,["modelValue","label"]),a(m,{modelValue:e.form.sub_title,"onUpdate:modelValue":n[1]||(n[1]=s=>e.form.sub_title=s),label:t.__("Sub Title"),name:"sub_title"},null,8,["modelValue","label"]),(c(!0),_(f,null,k(e.form.additional_data,(s,o)=>(c(),_("div",{class:"card",key:o},[l("div",L,[l("div",M,p(t.__("Box"))+" "+p(o+1),1),H,a(m,{modelValue:e.form.additional_data[o].title,"onUpdate:modelValue":i=>e.form.additional_data[o].title=i,label:t.__("Title"),required:!0,name:"additional_data."+o+".title"},null,8,["modelValue","onUpdate:modelValue","label","name"]),a(b,{modelValue:e.form.additional_data[o].content,"onUpdate:modelValue":i=>e.form.additional_data[o].content=i,label:t.__("Content"),required:!0,name:"additional_data."+o+".content"},null,8,["modelValue","onUpdate:modelValue","label","name"]),l("div",N,[l("div",D,[a(h,{modelValue:e.form.additional_data[o].image,"onUpdate:modelValue":i=>e.form.additional_data[o].image=i,label:t.__("Image"),required:!0,name:"additional_data."+o+".image"},null,8,["modelValue","onUpdate:modelValue","label","name"])]),l("div",W,[a(m,{modelValue:e.form.additional_data[o].image_alt_text,"onUpdate:modelValue":i=>e.form.additional_data[o].image_alt_text=i,label:t.__("Image Alt Text"),name:"additional_data."+o+".image_alt_text"},null,8,["modelValue","onUpdate:modelValue","label","name"])])]),l("button",{type:"button",class:"btn btn-danger btn-sm",onClick:i=>u.deleteBox(o)},j,8,x)])]))),128)),l("div",z,[l("ul",G,[l("li",J,[l("button",{type:"button",class:"btn btn-sm btn-success",onClick:n[2]||(n[2]=(...s)=>u.addBox&&u.addBox(...s))},[K,y(" "+p(t.__("Add Box")),1)])])])]),a(V,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const at=U(q,[["render",O]]);export{at as default};

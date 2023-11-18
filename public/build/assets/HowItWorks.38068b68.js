import C from"./ManageContentLayout.bbb11f53.js";import{I as v}from"./Input.09d9931c.js";import{T as S}from"./TextArea.ef7eb61f.js";import{_ as U,c as _,a,y,F as f,f as d,o as c,b as l,r as T,t as p,d as k,w as F}from"./app.f4b2b251.js";import{S as I}from"./Select.319f7f3f.js";import{S as A}from"./SubmitButton.e555a601.js";import"./vanilla-picker.csp.f644cdcf.js";import{F as w}from"./FileChooser.f8c14833.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const q={props:["data","existing_record","content_language"],components:{ManageContentLayout:C,Input:v,SubmitButton:A,TextArea:S,FileChooser:w,Select:I},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let t={title:null,sub_title:null,additional_data:[]};return this.existing_record&&(t={...t,...this.existing_record}),t},addBox(){this.form.additional_data.push({title:null,content:null,image:null,image_alt_text:null})},deleteBox(t){this.form.additional_data.length>1&&this.form.additional_data.splice(t,1)}}},L={class:"card-body"},M={class:"card-title h6"},H=l("hr",null,null,-1),N={class:"row"},W={class:"col-md-6"},x={class:"col-md-6"},D=["onClick"],E=l("i",{class:"far fa-trash-alt"},null,-1),j=[E],z={class:"card"},G={class:"list-group list-group-flush"},J={class:"list-group-item"},K=l("i",{class:"fas fa-plus"},null,-1);function O(t,n,r,P,e,u){const g=d("AppHead"),m=d("Input"),b=d("TextArea"),h=d("FileChooser"),V=d("SubmitButton"),B=d("ManageContentLayout");return c(),_(f,null,[a(g,{title:r.data.title},null,8,["title"]),a(B,{content_language:r.content_language,title:r.data.title},{default:y(()=>[l("form",{onSubmit:n[3]||(n[3]=F(s=>e.form.patch(t.route("admin.manage.content.homepage.section.howItWorks.update",r.content_language)),["prevent"]))},[a(m,{modelValue:e.form.title,"onUpdate:modelValue":n[0]||(n[0]=s=>e.form.title=s),label:t.__("Title"),name:"title",required:!0},null,8,["modelValue","label"]),a(m,{modelValue:e.form.sub_title,"onUpdate:modelValue":n[1]||(n[1]=s=>e.form.sub_title=s),label:t.__("Sub Title"),name:"sub_title"},null,8,["modelValue","label"]),(c(!0),_(f,null,T(e.form.additional_data,(s,o)=>(c(),_("div",{class:"card",key:o},[l("div",L,[l("div",M,p(t.__("Box"))+" "+p(o+1),1),H,a(m,{modelValue:e.form.additional_data[o].title,"onUpdate:modelValue":i=>e.form.additional_data[o].title=i,label:t.__("Title"),required:!0,name:"additional_data."+o+".title"},null,8,["modelValue","onUpdate:modelValue","label","name"]),a(b,{modelValue:e.form.additional_data[o].content,"onUpdate:modelValue":i=>e.form.additional_data[o].content=i,label:t.__("Content"),required:!0,name:"additional_data."+o+".content"},null,8,["modelValue","onUpdate:modelValue","label","name"]),l("div",N,[l("div",W,[a(h,{modelValue:e.form.additional_data[o].image,"onUpdate:modelValue":i=>e.form.additional_data[o].image=i,label:t.__("Image"),required:!0,name:"additional_data."+o+".image"},null,8,["modelValue","onUpdate:modelValue","label","name"])]),l("div",x,[a(m,{modelValue:e.form.additional_data[o].image_alt_text,"onUpdate:modelValue":i=>e.form.additional_data[o].image_alt_text=i,label:t.__("Image Alt Text"),name:"additional_data."+o+".image_alt_text"},null,8,["modelValue","onUpdate:modelValue","label","name"])])]),l("button",{type:"button",class:"btn btn-danger btn-sm",onClick:i=>u.deleteBox(o)},j,8,D)])]))),128)),l("div",z,[l("ul",G,[l("li",J,[l("button",{type:"button",class:"btn btn-sm btn-success",onClick:n[2]||(n[2]=(...s)=>u.addBox&&u.addBox(...s))},[K,k(" "+p(t.__("Add Box")),1)])])])]),a(V,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const at=U(q,[["render",O]]);export{at as default};

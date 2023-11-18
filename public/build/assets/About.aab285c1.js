import C from"./ManageContentLayout.4ec028be.js";import{I as v}from"./Input.af53aafe.js";import{T as S}from"./TextArea.2a32954b.js";import{_ as U,c as _,a,w as T,F as f,r as d,o as c,b as l,q as y,t as p,f as A,D as F}from"./app.2022c6b3.js";import{S as k}from"./Select.7c90381d.js";import{S as I}from"./SubmitButton.f33bde9e.js";import"./vanilla-picker.csp.7eafc9f1.js";import{F as q}from"./FileChooser.f2a34e6e.js";import"./bootstrap.esm.2333d793.js";import"./debounce.1c99c80a.js";const w={props:["data","existing_record","content_language"],components:{ManageContentLayout:C,Input:v,SubmitButton:I,TextArea:S,FileChooser:q,Select:k},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let t={title:null,sub_title:null,additional_data:[]};return this.existing_record&&(t={...t,...this.existing_record}),t},addBox(){this.form.additional_data.push({title:null,content:null,image:null,image_alt_text:null})},deleteBox(t){this.form.additional_data.length>1&&this.form.additional_data.splice(t,1)}}},L={class:"card-body"},M={class:"card-title h6"},N=l("hr",null,null,-1),D={class:"row"},H={class:"col-md-6"},x={class:"col-md-6"},E=["onClick"],j=l("i",{class:"far fa-trash-alt"},null,-1),z=[j],G={class:"card"},J={class:"list-group list-group-flush"},K={class:"list-group-item"},O=l("i",{class:"fas fa-plus"},null,-1);function P(t,n,r,Q,e,u){const b=d("AppHead"),m=d("Input"),g=d("TextArea"),h=d("FileChooser"),V=d("SubmitButton"),B=d("ManageContentLayout");return c(),_(f,null,[a(b,{title:r.data.title},null,8,["title"]),a(B,{content_language:r.content_language,title:r.data.title},{default:T(()=>[l("form",{onSubmit:n[3]||(n[3]=F(s=>e.form.patch(t.route("admin.manage.content.homepage.section.about.update",r.content_language)),["prevent"]))},[a(m,{modelValue:e.form.title,"onUpdate:modelValue":n[0]||(n[0]=s=>e.form.title=s),label:t.__("Title"),name:"title",required:!0},null,8,["modelValue","label"]),a(m,{modelValue:e.form.sub_title,"onUpdate:modelValue":n[1]||(n[1]=s=>e.form.sub_title=s),label:t.__("Sub Title"),name:"sub_title"},null,8,["modelValue","label"]),(c(!0),_(f,null,y(e.form.additional_data,(s,o)=>(c(),_("div",{class:"card",key:o},[l("div",L,[l("div",M,p(t.__("Box"))+" "+p(o+1),1),N,a(m,{modelValue:e.form.additional_data[o].title,"onUpdate:modelValue":i=>e.form.additional_data[o].title=i,label:t.__("Title"),required:!0,name:"additional_data."+o+".title"},null,8,["modelValue","onUpdate:modelValue","label","name"]),a(g,{modelValue:e.form.additional_data[o].content,"onUpdate:modelValue":i=>e.form.additional_data[o].content=i,label:t.__("Content"),required:!0,name:"additional_data."+o+".content"},null,8,["modelValue","onUpdate:modelValue","label","name"]),l("div",D,[l("div",H,[a(h,{modelValue:e.form.additional_data[o].image,"onUpdate:modelValue":i=>e.form.additional_data[o].image=i,label:t.__("Image"),required:!0,name:"additional_data."+o+".image"},null,8,["modelValue","onUpdate:modelValue","label","name"])]),l("div",x,[a(m,{modelValue:e.form.additional_data[o].image_alt_text,"onUpdate:modelValue":i=>e.form.additional_data[o].image_alt_text=i,label:t.__("Image Alt Text"),name:"additional_data."+o+".image_alt_text"},null,8,["modelValue","onUpdate:modelValue","label","name"])])]),l("button",{type:"button",class:"btn btn-danger btn-sm",onClick:i=>u.deleteBox(o)},z,8,E)])]))),128)),l("div",G,[l("ul",J,[l("li",K,[l("button",{type:"button",class:"btn btn-sm btn-success",onClick:n[2]||(n[2]=(...s)=>u.addBox&&u.addBox(...s))},[O,A(" "+p(t.__("Add Box")),1)])])])]),a(V,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const at=U(w,[["render",P]]);export{at as default};

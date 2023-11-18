import B from"./ManageContentLayout.d476d9b6.js";import{I as S}from"./Input.c3d1dec4.js";import{T}from"./TextArea.dab2c044.js";import{_ as k,c as _,a as i,w as y,F as b,r,o as p,b as a,q as I,t as c,f as A,D as F}from"./app.f21ad38e.js";import{S as q}from"./Select.bb2757ba.js";import{S as w}from"./SubmitButton.7c32795f.js";import"./vanilla-picker.csp.fb5c8d56.js";import{F as x}from"./FileChooser.786d4bce.js";import{C as L}from"./ColorPicker.a696cc6a.js";import"./bootstrap.esm.2333d793.js";import"./debounce.af629436.js";const M={props:["data","existing_record","content_language"],components:{ManageContentLayout:B,Input:S,SubmitButton:w,TextArea:T,FileChooser:x,Select:q,ColorPicker:L},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let o={title:null,sub_title:null,image:null,image_alt_text:null,image_position:null,appearance:{bg_color:null,text_color:null},additional_data:[]};return this.existing_record&&(o={...o,...this.existing_record}),o},addBox(){this.form.additional_data.push({title:null,content:null,image:null,image_alt_text:null})},deleteBox(o){this.form.additional_data.length>1&&this.form.additional_data.splice(o,1)}}},P={class:"row"},N={class:"col-md-6"},D={class:"col-md-6"},H={class:"card-body"},E={class:"card-title h6"},W=a("hr",null,null,-1),j={class:"row"},z={class:"col-md-6"},G={class:"col-md-6"},J=["onClick"],K=a("i",{class:"far fa-trash-alt"},null,-1),O=[K],Q={class:"card"},R={class:"list-group list-group-flush"},X={class:"list-group-item"},Y=a("i",{class:"fas fa-plus"},null,-1);function Z(o,l,s,$,e,u){const V=r("AppHead"),d=r("Input"),g=r("FileChooser"),h=r("Select"),f=r("ColorPicker"),C=r("TextArea"),U=r("SubmitButton"),v=r("ManageContentLayout");return p(),_(b,null,[i(V,{title:s.data.title},null,8,["title"]),i(v,{content_language:s.content_language,title:s.data.title},{default:y(()=>[a("form",{onSubmit:l[8]||(l[8]=F(t=>e.form.patch(o.route("admin.manage.content.homepage.section.whyChooseUs.update",s.content_language)),["prevent"]))},[i(d,{modelValue:e.form.title,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form.title=t),label:o.__("Title"),name:"title",required:!0},null,8,["modelValue","label"]),i(d,{modelValue:e.form.sub_title,"onUpdate:modelValue":l[1]||(l[1]=t=>e.form.sub_title=t),label:o.__("Sub Title"),name:"sub_title"},null,8,["modelValue","label"]),i(g,{modelValue:e.form.image,"onUpdate:modelValue":l[2]||(l[2]=t=>e.form.image=t),label:o.__("Image"),name:"image",required:!0},null,8,["modelValue","label"]),a("div",P,[a("div",N,[i(h,{modelValue:e.form.image_position,"onUpdate:modelValue":l[3]||(l[3]=t=>e.form.image_position=t),options:s.data.dropdowns.image_positions,label:o.__("Image Position"),name:"image_position",required:!0},null,8,["modelValue","options","label"])]),a("div",D,[i(d,{modelValue:e.form.image_alt_text,"onUpdate:modelValue":l[4]||(l[4]=t=>e.form.image_alt_text=t),label:o.__("Image Alt Text"),name:"image_alt_text"},null,8,["modelValue","label"])])]),i(f,{modelValue:e.form.appearance.bg_color,"onUpdate:modelValue":l[5]||(l[5]=t=>e.form.appearance.bg_color=t),label:o.__("Background Color"),name:"appearance.bg_color"},null,8,["modelValue","label"]),i(f,{modelValue:e.form.appearance.text_color,"onUpdate:modelValue":l[6]||(l[6]=t=>e.form.appearance.text_color=t),label:o.__("Text Color"),name:"appearance.text_color"},null,8,["modelValue","label"]),(p(!0),_(b,null,I(e.form.additional_data,(t,n)=>(p(),_("div",{class:"card",key:n},[a("div",H,[a("div",E,c(o.__("Box"))+" "+c(n+1),1),W,i(d,{modelValue:e.form.additional_data[n].title,"onUpdate:modelValue":m=>e.form.additional_data[n].title=m,label:o.__("Title"),required:!0,name:"additional_data."+n+".title"},null,8,["modelValue","onUpdate:modelValue","label","name"]),i(C,{modelValue:e.form.additional_data[n].content,"onUpdate:modelValue":m=>e.form.additional_data[n].content=m,label:o.__("Content"),required:!0,name:"additional_data."+n+".content"},null,8,["modelValue","onUpdate:modelValue","label","name"]),a("div",j,[a("div",z,[i(g,{modelValue:e.form.additional_data[n].image,"onUpdate:modelValue":m=>e.form.additional_data[n].image=m,label:o.__("Image"),required:!0,name:"additional_data."+n+".image"},null,8,["modelValue","onUpdate:modelValue","label","name"])]),a("div",G,[i(d,{modelValue:e.form.additional_data[n].image_alt_text,"onUpdate:modelValue":m=>e.form.additional_data[n].image_alt_text=m,label:o.__("Image Alt Text"),name:"additional_data."+n+".image_alt_text"},null,8,["modelValue","onUpdate:modelValue","label","name"])])]),a("button",{type:"button",class:"btn btn-danger btn-sm",onClick:m=>u.deleteBox(n)},O,8,J)])]))),128)),a("div",Q,[a("ul",R,[a("li",X,[a("button",{type:"button",class:"btn btn-sm btn-success",onClick:l[7]||(l[7]=(...t)=>u.addBox&&u.addBox(...t))},[Y,A(" "+c(o.__("Add Box")),1)])])])]),i(U,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const ue=k(M,[["render",Z]]);export{ue as default};

import p from"./ManageContentLayout.73fb7423.js";import{I as _}from"./Input.d3e8f5e0.js";import{T as f}from"./TextArea.67869acb.js";import{_ as c,c as g,a as n,y as x,F as b,f as a,o as y,b as V,w as C}from"./app.b345893e.js";import{S}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const B={props:["data","existing_record","content_language"],components:{ManageContentLayout:p,Input:_,SubmitButton:S,TextArea:f},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let t={additional_data:{company_information:null,footer_text:null}};return this.existing_record&&(t={...t,...this.existing_record}),t}}};function F(t,e,r,h,o,A){const l=a("AppHead"),m=a("TextArea"),d=a("Input"),s=a("SubmitButton"),u=a("ManageContentLayout");return y(),g(b,null,[n(l,{title:r.data.title},null,8,["title"]),n(u,{content_language:r.content_language,title:r.data.title},{default:x(()=>[V("form",{onSubmit:e[2]||(e[2]=C(i=>o.form.patch(t.route("admin.manage.content.homepage.section.footer.update",r.content_language)),["prevent"]))},[n(m,{modelValue:o.form.additional_data.company_information,"onUpdate:modelValue":e[0]||(e[0]=i=>o.form.additional_data.company_information=i),label:t.__("Company Information"),name:"additional_data.company_information",required:!0},null,8,["modelValue","label"]),n(d,{modelValue:o.form.additional_data.footer_text,"onUpdate:modelValue":e[1]||(e[1]=i=>o.form.additional_data.footer_text=i),label:t.__("Footer Text"),name:"additional_data.footer_text"},null,8,["modelValue","label"]),n(s,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["content_language","title"])],64)}const N=c(B,[["render",F]]);export{N as default};

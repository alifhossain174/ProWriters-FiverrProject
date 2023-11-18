import{I as f}from"./Input.e65d7326.js";import{T as _}from"./TextArea.3edc019d.js";import{_ as g,A as b,w as V,r as l,o as c,b as C,a as m,D as S}from"./app.94ede146.js";import{S as v}from"./Select.0af50086.js";import{S as B}from"./SubmitButton.71e94644.js";import"./vanilla-picker.csp.da387394.js";import{F}from"./FileChooser.3afe6028.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b3e602c6.js";const q={components:{Input:f,Select:v,TextArea:_,SubmitButton:B,FileChooser:F},props:["data","content_language","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let t={name:null,position:null,rating:5,comment:null};return this.existing_record&&(t={...t,...this.existing_record}),t}}};function x(t,o,r,A,e,U){const a=l("Input"),i=l("FileChooser"),s=l("Select"),u=l("TextArea"),d=l("SubmitButton"),p=l("Modal");return c(),b(p,{title:r.data.title},{default:V(()=>[C("form",{onSubmit:o[5]||(o[5]=S(n=>r.existing_record?e.form.patch(t.route("admin.manage.content.testimonials.update",[r.content_language,r.existing_record.id])):e.form.post(t.route("admin.manage.content.testimonials.store",r.content_language)),["prevent"]))},[m(a,{modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=n=>e.form.name=n),name:"name",label:t.__("Customer Name"),required:!0},null,8,["modelValue","label"]),m(a,{modelValue:e.form.position,"onUpdate:modelValue":o[1]||(o[1]=n=>e.form.position=n),name:"position",label:t.__("Customer Position"),required:!0},null,8,["modelValue","label"]),m(i,{modelValue:e.form.avatar,"onUpdate:modelValue":o[2]||(o[2]=n=>e.form.avatar=n),label:t.__("Customer Avatar"),name:"avatar",required:!0},null,8,["modelValue","label"]),m(s,{options:r.data.dropdowns.ratings,modelValue:e.form.rating,"onUpdate:modelValue":o[3]||(o[3]=n=>e.form.rating=n),label:t.__("Rating"),required:!0,name:"rating"},null,8,["options","modelValue","label"]),m(u,{modelValue:e.form.comment,"onUpdate:modelValue":o[4]||(o[4]=n=>e.form.comment=n),name:"comment",label:t.__("Comment"),required:!0},null,8,["modelValue","label"]),m(d,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const h=g(q,[["render",x]]);export{h as default};

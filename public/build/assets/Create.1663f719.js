import{I as f}from"./Input.d3e8f5e0.js";import{_,g as b,y as V,f as m,o as s,b as v,a as t,c as y,h as c,w as g}from"./app.b345893e.js";import{S}from"./Select.ee436180.js";import{S as q}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import{E as U}from"./Editor.ec6859d9.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";import"./vue-quill.snow.3afa9ab2.js";const w={components:{Input:f,Select:S,Editor:U,SubmitButton:q},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let l={service_id:null,name:null,price:0,author_level_id:null,author_payment_amount:null,urgency_id:null,description:null,deliverables:null,url_query_parameters:this.data.url_query_parameters};return this.existing_record&&(l={...l,...this.existing_record}),l}}},B={key:0};function h(l,o,n,C,e,N){const i=m("Select"),u=m("Input"),a=m("Editor"),d=m("SubmitButton"),p=m("Modal");return s(),b(p,{title:n.data.title},{default:V(()=>[v("form",{onSubmit:o[10]||(o[10]=g(r=>n.existing_record?e.form.patch(n.data.urls.submit_form):e.form.post(n.data.urls.submit_form,e.formConfig),["prevent"]))},[t(i,{searchable:!0,options:n.data.dropdowns.services,modelValue:e.form.service_id,"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.service_id=r),label:l.__("Service"),required:!0,name:"service_id"},null,8,["options","modelValue","label"]),t(u,{modelValue:e.form.name,"onUpdate:modelValue":o[1]||(o[1]=r=>e.form.name=r),name:"name",label:l.__("Name"),required:!0},null,8,["modelValue","label"]),t(u,{modelValue:e.form.price,"onUpdate:modelValue":o[2]||(o[2]=r=>e.form.price=r),name:"price",label:l.__("Price"),required:!0,onKeypress:o[3]||(o[3]=r=>l.onlyNumber(r,e.form.price))},null,8,["modelValue","label"]),e.form.service_id==n.data.service_types.resume_writing?(s(),y("div",B,[t(u,{modelValue:e.form.description,"onUpdate:modelValue":o[4]||(o[4]=r=>e.form.description=r),name:"description",label:l.__("Description"),required:!0},null,8,["modelValue","label"]),t(i,{searchable:!0,options:n.data.dropdowns.author_levels,modelValue:e.form.author_level_id,"onUpdate:modelValue":o[5]||(o[5]=r=>e.form.author_level_id=r),label:l.__("Author Level"),required:!0,name:"author_level_id"},null,8,["options","modelValue","label"]),t(u,{modelValue:e.form.author_payment_amount,"onUpdate:modelValue":o[6]||(o[6]=r=>e.form.author_payment_amount=r),name:"author_payment_amount",label:l.__("Author Payment Amount"),required:!0,onKeypress:o[7]||(o[7]=r=>l.onlyNumber(r,e.form.author_payment_amount))},null,8,["modelValue","label"]),t(i,{searchable:!0,options:n.data.dropdowns.urgencies,modelValue:e.form.urgency_id,"onUpdate:modelValue":o[8]||(o[8]=r=>e.form.urgency_id=r),label:l.__("Turnaround Time"),required:!0,name:"urgency_id"},null,8,["options","modelValue","label"]),t(a,{modelValue:e.form.deliverables,"onUpdate:modelValue":o[9]||(o[9]=r=>e.form.deliverables=r),name:"deliverables",label:l.__("Deliverables"),required:!0},null,8,["modelValue","label"])])):c("",!0),t(d,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const T=_(w,[["render",h]]);export{T as default};

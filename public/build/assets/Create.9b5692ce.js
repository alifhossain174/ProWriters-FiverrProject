import c from"./SettingsLayout.82136bd5.js";import g from"./ActionToolBar.75b52887.js";import{I as V}from"./Input.d98634fc.js";import{T as q}from"./TextArea.328848c0.js";import{C as v}from"./CheckBox.0599dcb1.js";import{_ as B,A as m,w as k,r,o as u,a as n,b as U,d,D as y}from"./app.2abe2877.js";import{S as h}from"./SubmitButton.67fd88bd.js";import"./vanilla-picker.csp.f95a0d4d.js";import"./Menu.e05b7797.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const A={components:{SettingsLayout:c,ActionToolBar:g,Input:V,TextArea:q,CheckBox:v,SubmitButton:h},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm()),toolbar:{title:this.data.title,links:{previous_page:{title:this.data.previous_link_text,url:this.data.urls.previous_page}},hide_save_button:!0}}},methods:{prepareForm(){let l={name:null,description:null,instruction:null,settings:{requires_transaction_number:!1,reference_field_label:null,requires_uploading_attachment:!1,attachment_field_label:null},success_message:null,inactive:null};return this.existing_record&&(l={...l,...this.existing_record}),l}}};function C(l,t,s,S,e,T){const _=r("ActionToolBar"),i=r("Input"),p=r("TextArea"),a=r("CheckBox"),f=r("SubmitButton"),b=r("SettingsLayout");return u(),m(b,{title:s.data.title},{default:k(()=>[n(_,{disable_save_button:e.form.processing,toolbar:e.toolbar},null,8,["disable_save_button","toolbar"]),U("form",{onSubmit:t[9]||(t[9]=y(o=>s.existing_record?e.form.patch(s.data.urls.submit_form):e.form.post(s.data.urls.submit_form),["prevent"]))},[n(i,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.form.name=o),name:"name",label:l.__("Name"),required:!0},null,8,["modelValue","label"]),n(i,{modelValue:e.form.description,"onUpdate:modelValue":t[1]||(t[1]=o=>e.form.description=o),name:"description",label:l.__("Description"),required:!0},null,8,["modelValue","label"]),n(i,{modelValue:e.form.success_message,"onUpdate:modelValue":t[2]||(t[2]=o=>e.form.success_message=o),name:"success_message",label:l.__("Message to display after submitting the payment"),required:!0},null,8,["modelValue","label"]),n(p,{rows:2,modelValue:e.form.instruction,"onUpdate:modelValue":t[3]||(t[3]=o=>e.form.instruction=o),name:"instruction",label:l.__("Instruction to customer"),note:l.__("(e.g bank name, account number, swift code etc.)")},null,8,["modelValue","label","note"]),n(a,{modelValue:e.form.settings.requires_transaction_number,"onUpdate:modelValue":t[4]||(t[4]=o=>e.form.settings.requires_transaction_number=o),label:l.__("Requires Evidence")+" / "+l.__("Transaction Number"),name:"settings.requires_transaction_number"},null,8,["modelValue","label"]),e.form.settings.requires_transaction_number?(u(),m(i,{key:0,modelValue:e.form.settings.reference_field_label,"onUpdate:modelValue":t[5]||(t[5]=o=>e.form.settings.reference_field_label=o),name:"settings.reference_field_label",label:l.__("Field name to display for entering transaction number"),required:!0},null,8,["modelValue","label"])):d("",!0),n(a,{modelValue:e.form.settings.requires_uploading_attachment,"onUpdate:modelValue":t[6]||(t[6]=o=>e.form.settings.requires_uploading_attachment=o),label:l.__("Requires Uploading Attachment"),name:"settings.requires_uploading_attachment"},null,8,["modelValue","label"]),e.form.settings.requires_uploading_attachment?(u(),m(i,{key:1,modelValue:e.form.settings.attachment_field_label,"onUpdate:modelValue":t[7]||(t[7]=o=>e.form.settings.attachment_field_label=o),name:"settings.attachment_field_label",label:l.__("Field name to display for attachment uploading"),required:!0},null,8,["modelValue","label"])):d("",!0),n(a,{modelValue:e.form.inactive,"onUpdate:modelValue":t[8]||(t[8]=o=>e.form.inactive=o),label:l.__("Inactive"),name:"inactive"},null,8,["modelValue","label"]),n(f,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const z=B(A,[["render",C]]);export{z as default};

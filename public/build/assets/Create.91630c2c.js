import g from"./SettingsLayout.6b449363.js";import c from"./ActionToolBar.108e921a.js";import{I as V}from"./Input.d3e8f5e0.js";import{T as q}from"./TextArea.67869acb.js";import{C as v}from"./CheckBox.da7ffbd8.js";import{_ as B,g as m,y as k,f as r,o as u,a as n,b as y,h as d,w as U}from"./app.b345893e.js";import{S as h}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import"./Menu.e3683556.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const C={components:{SettingsLayout:g,ActionToolBar:c,Input:V,TextArea:q,CheckBox:v,SubmitButton:h},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm()),toolbar:{title:this.data.title,links:{previous_page:{title:this.data.previous_link_text,url:this.data.urls.previous_page}},hide_save_button:!0}}},methods:{prepareForm(){let l={name:null,description:null,instruction:null,settings:{requires_transaction_number:!1,reference_field_label:null,requires_uploading_attachment:!1,attachment_field_label:null},success_message:null,inactive:null};return this.existing_record&&(l={...l,...this.existing_record}),l}}};function S(l,t,s,T,e,A){const _=r("ActionToolBar"),i=r("Input"),f=r("TextArea"),a=r("CheckBox"),p=r("SubmitButton"),b=r("SettingsLayout");return u(),m(b,{title:s.data.title},{default:k(()=>[n(_,{disable_save_button:e.form.processing,toolbar:e.toolbar},null,8,["disable_save_button","toolbar"]),y("form",{onSubmit:t[9]||(t[9]=U(o=>s.existing_record?e.form.patch(s.data.urls.submit_form):e.form.post(s.data.urls.submit_form),["prevent"]))},[n(i,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.form.name=o),name:"name",label:l.__("Name"),required:!0},null,8,["modelValue","label"]),n(i,{modelValue:e.form.description,"onUpdate:modelValue":t[1]||(t[1]=o=>e.form.description=o),name:"description",label:l.__("Description"),required:!0},null,8,["modelValue","label"]),n(i,{modelValue:e.form.success_message,"onUpdate:modelValue":t[2]||(t[2]=o=>e.form.success_message=o),name:"success_message",label:l.__("Message to display after submitting the payment"),required:!0},null,8,["modelValue","label"]),n(f,{rows:2,modelValue:e.form.instruction,"onUpdate:modelValue":t[3]||(t[3]=o=>e.form.instruction=o),name:"instruction",label:l.__("Instruction to customer"),note:l.__("(e.g bank name, account number, swift code etc.)")},null,8,["modelValue","label","note"]),n(a,{modelValue:e.form.settings.requires_transaction_number,"onUpdate:modelValue":t[4]||(t[4]=o=>e.form.settings.requires_transaction_number=o),label:l.__("Requires Evidence")+" / "+l.__("Transaction Number"),name:"settings.requires_transaction_number"},null,8,["modelValue","label"]),e.form.settings.requires_transaction_number?(u(),m(i,{key:0,modelValue:e.form.settings.reference_field_label,"onUpdate:modelValue":t[5]||(t[5]=o=>e.form.settings.reference_field_label=o),name:"settings.reference_field_label",label:l.__("Field name to display for entering transaction number"),required:!0},null,8,["modelValue","label"])):d("",!0),n(a,{modelValue:e.form.settings.requires_uploading_attachment,"onUpdate:modelValue":t[6]||(t[6]=o=>e.form.settings.requires_uploading_attachment=o),label:l.__("Requires Uploading Attachment"),name:"settings.requires_uploading_attachment"},null,8,["modelValue","label"]),e.form.settings.requires_uploading_attachment?(u(),m(i,{key:1,modelValue:e.form.settings.attachment_field_label,"onUpdate:modelValue":t[7]||(t[7]=o=>e.form.settings.attachment_field_label=o),name:"settings.attachment_field_label",label:l.__("Field name to display for attachment uploading"),required:!0},null,8,["modelValue","label"])):d("",!0),n(a,{modelValue:e.form.inactive,"onUpdate:modelValue":t[8]||(t[8]=o=>e.form.inactive=o),label:l.__("Inactive"),name:"inactive"},null,8,["modelValue","label"]),n(p,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const z=B(C,[["render",S]]);export{z as default};

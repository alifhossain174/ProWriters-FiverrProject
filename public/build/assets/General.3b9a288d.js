import _ from"./SettingsLayout.1cfec840.js";import f from"./ActionToolBar.3abe18b6.js";import{I as b}from"./Input.3f943b39.js";import{T as V}from"./TextArea.c6c0e162.js";import{C as c}from"./CheckBox.2d1a07e2.js";import{_ as y,A as h,w as g,r as m,o as v,b as i,a as t,D as w}from"./app.707c49f0.js";import"./Menu.69d16eca.js";import"./bootstrap.esm.2333d793.js";const A={components:{SettingsLayout:_,ActionToolBar:f,Input:b,TextArea:V,CheckBox:c},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:"General",hide_save_button:!1}}}},B={class:"row"},k={class:"col"},U={class:"col"},C=i("div",{class:"mt-4"},null,-1);function T(n,o,s,q,e,I){const d=m("ActionToolBar"),a=m("Input"),p=m("TextArea"),r=m("CheckBox"),u=m("SettingsLayout");return v(),h(u,{title:s.data.title},{default:g(()=>[i("form",{onSubmit:o[8]||(o[8]=w(l=>e.form.post(n.route("admin.settings.general.update")),["prevent"]))},[t(d,{disable_save_button:e.form.processing,toolbar:e.toolbar},null,8,["disable_save_button","toolbar"]),t(a,{modelValue:e.form.company_name,"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.company_name=l),name:"company_name",label:n.__("Company Name"),required:!0},null,8,["modelValue","label"]),i("div",B,[i("div",k,[t(a,{modelValue:e.form.company_phone,"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.company_phone=l),name:"company_phone",label:n.__("Phone"),required:!0},null,8,["modelValue","label"])]),i("div",U,[t(a,{modelValue:e.form.company_email,"onUpdate:modelValue":o[2]||(o[2]=l=>e.form.company_email=l),name:"company_email",type:"email",label:n.__("Email"),required:!0},null,8,["modelValue","label"])])]),t(p,{modelValue:e.form.company_address,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.company_address=l),name:"company_address",label:n.__("Address"),required:!0},null,8,["modelValue","label"]),t(a,{modelValue:e.form.company_notification_email,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.company_notification_email=l),name:"company_notification_email",label:n.__("Email address for receiving notifications"),required:!0,tooltip:n.__("All system notification emails will be sent to this address")},null,8,["modelValue","label","tooltip"]),C,t(r,{modelValue:e.form.hide_website,"onUpdate:modelValue":o[5]||(o[5]=l=>e.form.hide_website=l),label:n.__("Hide Website"),name:"hide_website"},null,8,["modelValue","label"]),t(r,{modelValue:e.form.hide_blog,"onUpdate:modelValue":o[6]||(o[6]=l=>e.form.hide_blog=l),label:n.__("Hide Blog"),name:"hide_blog"},null,8,["modelValue","label"]),t(r,{modelValue:e.form.hide_author_application_link_from_website,"onUpdate:modelValue":o[7]||(o[7]=l=>e.form.hide_author_application_link_from_website=l),label:n.__("Hide Author Application Link from Website"),name:"hide_author_application_link_from_website"},null,8,["modelValue","label"])],32)]),_:1},8,["title"])}const M=y(A,[["render",T]]);export{M as default};

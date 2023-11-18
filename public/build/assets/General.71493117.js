import u from"./SettingsLayout.35d111cb.js";import f from"./ActionToolBar.8d830195.js";import{I as b}from"./Input.8c887a2d.js";import{T as c}from"./TextArea.bedd4e18.js";import{C as V}from"./CheckBox.169d0953.js";import{_ as y,A as g,w as v,r as t,o as w,b as i,a as m,D as A}from"./app.1d2673ab.js";import"./Menu.13461a24.js";import"./bootstrap.esm.2333d793.js";const B={components:{SettingsLayout:u,ActionToolBar:f,Input:b,TextArea:c,CheckBox:V},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:"General",hide_save_button:!1}}}},h={class:"row"},k={class:"col"},U={class:"col"},C=i("div",{class:"mt-4"},null,-1);function T(n,o,s,q,e,I){const d=t("ActionToolBar"),a=t("Input"),p=t("TextArea"),r=t("CheckBox"),_=t("SettingsLayout");return w(),g(_,{title:s.data.title},{default:v(()=>[i("form",{onSubmit:o[8]||(o[8]=A(l=>e.form.post(n.route("admin.settings.general.update")),["prevent"]))},[m(d,{disable_save_button:e.form.processing,toolbar:e.toolbar},null,8,["disable_save_button","toolbar"]),m(a,{modelValue:e.form.company_name,"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.company_name=l),name:"company_name",label:n.__("Company Name"),required:!0},null,8,["modelValue","label"]),i("div",h,[i("div",k,[m(a,{modelValue:e.form.company_phone,"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.company_phone=l),name:"company_phone",label:n.__("Phone"),required:!0},null,8,["modelValue","label"])]),i("div",U,[m(a,{modelValue:e.form.company_email,"onUpdate:modelValue":o[2]||(o[2]=l=>e.form.company_email=l),name:"company_email",type:"email",label:n.__("Email"),required:!0},null,8,["modelValue","label"])])]),m(p,{modelValue:e.form.company_address,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.company_address=l),name:"company_address",label:n.__("Address"),required:!0},null,8,["modelValue","label"]),m(a,{modelValue:e.form.company_notification_email,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.company_notification_email=l),name:"company_notification_email",label:n.__("Email address for receiving notifications"),required:!0,tooltip:n.__("All system notification emails will be sent to this address")},null,8,["modelValue","label","tooltip"]),C,m(r,{modelValue:e.form.hide_website,"onUpdate:modelValue":o[5]||(o[5]=l=>e.form.hide_website=l),label:n.__("Hide Website"),name:"hide_website"},null,8,["modelValue","label"]),m(r,{modelValue:e.form.hide_blog,"onUpdate:modelValue":o[6]||(o[6]=l=>e.form.hide_blog=l),label:n.__("Hide Blog"),name:"hide_blog"},null,8,["modelValue","label"]),m(r,{modelValue:e.form.hide_freelancer_application_link_from_website,"onUpdate:modelValue":o[7]||(o[7]=l=>e.form.hide_freelancer_application_link_from_website=l),label:n.__("Hide Freelancer Application Link from Website"),name:"hide_freelancer_application_link_from_website"},null,8,["modelValue","label"])],32)]),_:1},8,["title"])}const F=y(B,[["render",T]]);export{F as default};

import p from"./SettingsLayout.06c9b02c.js";import f from"./ActionToolBar.e718a8e3.js";import{I as _}from"./Input.09d9931c.js";import{_ as d,g as c,y as b,f as e,o as g,b as S,a as r,w as B}from"./app.f4b2b251.js";import{S as v}from"./SubmitButton.e555a601.js";import"./vanilla-picker.csp.f644cdcf.js";import"./Menu.f8829614.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const h={components:{SettingsLayout:p,ActionToolBar:f,Input:_,SubmitButton:v},props:["data"],data(){return{form:this.$inertia.form({email:""}),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()},toolbar:{title:this.data.title,hide_save_button:!0,links:{previous_page:{title:this.data.previous_page_title,url:this.data.urls.previous_page}}}}}};function V(i,o,n,x,t,y){const s=e("ActionToolBar"),l=e("Input"),m=e("SubmitButton"),u=e("SettingsLayout");return g(),c(u,{title:n.data.title},{default:b(()=>[S("form",{onSubmit:o[1]||(o[1]=B(a=>t.form.post(n.data.urls.submit_form,t.formConfig),["prevent"]))},[r(s,{toolbar:t.toolbar},null,8,["toolbar"]),r(l,{modelValue:t.form.email,"onUpdate:modelValue":o[0]||(o[0]=a=>t.form.email=a),name:"email",label:i.__("Enter an email address to test the email configuration"),required:!0},null,8,["modelValue","label"]),r(m,{disabled:t.form.processing,button_text:i.__("Send Email")},null,8,["disabled","button_text"])],32)]),_:1},8,["title"])}const q=d(h,[["render",V]]);export{q as default};
import p from"./SettingsLayout.6b449363.js";import f from"./ActionToolBar.108e921a.js";import{I as _}from"./Input.d3e8f5e0.js";import{_ as d,g as c,y as b,f as e,o as g,b as S,a as r,w as B}from"./app.b345893e.js";import{S as v}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import"./Menu.e3683556.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const h={components:{SettingsLayout:p,ActionToolBar:f,Input:_,SubmitButton:v},props:["data"],data(){return{form:this.$inertia.form({email:""}),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()},toolbar:{title:this.data.title,hide_save_button:!0,links:{previous_page:{title:this.data.previous_page_title,url:this.data.urls.previous_page}}}}}};function V(i,o,n,x,t,y){const s=e("ActionToolBar"),l=e("Input"),m=e("SubmitButton"),u=e("SettingsLayout");return g(),c(u,{title:n.data.title},{default:b(()=>[S("form",{onSubmit:o[1]||(o[1]=B(a=>t.form.post(n.data.urls.submit_form,t.formConfig),["prevent"]))},[r(s,{toolbar:t.toolbar},null,8,["toolbar"]),r(l,{modelValue:t.form.email,"onUpdate:modelValue":o[0]||(o[0]=a=>t.form.email=a),name:"email",label:i.__("Enter an email address to test the email configuration"),required:!0},null,8,["modelValue","label"]),r(m,{disabled:t.form.processing,button_text:i.__("Send Email")},null,8,["disabled","button_text"])],32)]),_:1},8,["title"])}const q=d(h,[["render",V]]);export{q as default};
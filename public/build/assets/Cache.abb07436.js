import l from"./SettingsLayout.c2168136.js";import u from"./ActionToolBar.10bd211b.js";import{I as c}from"./Input.22a5d0b7.js";import{_ as f,A as p,w as _,r as o,o as b,b as d,a as n,D as S}from"./app.7185dbf0.js";import{S as B}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import"./Menu.c473e68b.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const h={components:{SettingsLayout:l,ActionToolBar:u,Input:c,SubmitButton:B},props:["data"],data(){return{form:this.$inertia.form(),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()},toolbar:{title:this.data.title,hide_save_button:!0}}}};function C(s,e,r,g,t,v){const i=o("ActionToolBar"),a=o("SubmitButton"),m=o("SettingsLayout");return b(),p(m,{title:r.data.title},{default:_(()=>[d("form",{onSubmit:e[0]||(e[0]=S(x=>t.form.post(r.data.urls.submit_form,t.formConfig),["prevent"]))},[n(i,{toolbar:t.toolbar},null,8,["toolbar"]),n(a,{disabled:t.form.processing,button_text:s.__("Clear Cache")},null,8,["disabled","button_text"])],32)]),_:1},8,["title"])}const D=f(h,[["render",C]]);export{D as default};

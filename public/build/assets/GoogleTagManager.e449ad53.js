import p from"./SettingsLayout.06c9b02c.js";import g from"./ActionToolBar.e718a8e3.js";import{I as _}from"./Input.09d9931c.js";import{_ as d,g as u,y as f,f as r,o as c,b,a as n,w as B}from"./app.f4b2b251.js";import"./vanilla-picker.csp.f644cdcf.js";import"./Menu.f8829614.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const T={components:{SettingsLayout:p,ActionToolBar:g,Input:_},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}};function v(e,t,l,I,o,V){const s=r("ActionToolBar"),i=r("Input"),m=r("SettingsLayout");return c(),u(m,{title:l.data.title},{default:f(()=>[b("form",{onSubmit:t[1]||(t[1]=B(a=>o.form.post(e.route("admin.settings.googleTagManager.update")),["prevent"]))},[n(s,{disable_save_button:o.form.processing,toolbar:o.toolbar},null,8,["disable_save_button","toolbar"]),n(i,{modelValue:o.form.google_tag_id,"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.google_tag_id=a),name:"google_tag_id",label:e.__("Google Tag Manager ID"),placeholder:e.__("Example: UA-34294382-6")},null,8,["modelValue","label","placeholder"])],32)]),_:1},8,["title"])}const x=d(T,[["render",v]]);export{x as default};
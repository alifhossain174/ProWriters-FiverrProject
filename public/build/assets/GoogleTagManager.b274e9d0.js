import p from"./SettingsLayout.aad8ae28.js";import g from"./ActionToolBar.7ad35adb.js";import{I as _}from"./Input.744111e9.js";import{_ as d,A as u,w as c,r,o as f,b,a as n,D as B}from"./app.6486bb89.js";import"./vanilla-picker.csp.273e51c7.js";import"./Menu.0a37914a.js";import"./bootstrap.esm.2333d793.js";import"./debounce.2741a44f.js";const T={components:{SettingsLayout:p,ActionToolBar:g,Input:_},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}};function v(e,t,l,A,o,I){const s=r("ActionToolBar"),i=r("Input"),m=r("SettingsLayout");return f(),u(m,{title:l.data.title},{default:c(()=>[b("form",{onSubmit:t[1]||(t[1]=B(a=>o.form.post(e.route("admin.settings.googleTagManager.update")),["prevent"]))},[n(s,{disable_save_button:o.form.processing,toolbar:o.toolbar},null,8,["disable_save_button","toolbar"]),n(i,{modelValue:o.form.google_tag_id,"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.google_tag_id=a),name:"google_tag_id",label:e.__("Google Tag Manager ID"),placeholder:e.__("Example: UA-34294382-6")},null,8,["modelValue","label","placeholder"])],32)]),_:1},8,["title"])}const x=d(T,[["render",v]]);export{x as default};

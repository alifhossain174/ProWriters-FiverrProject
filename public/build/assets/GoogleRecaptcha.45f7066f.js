import i from"./SettingsLayout.06c9b02c.js";import u from"./ActionToolBar.e718a8e3.js";import{I as _}from"./Input.09d9931c.js";import{_ as f,g as d,y as b,f as a,o as h,b as V,a as l,w as B}from"./app.f4b2b251.js";import{C as k}from"./CheckBox.cc62ca79.js";import"./vanilla-picker.csp.f644cdcf.js";import"./Menu.f8829614.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const y={components:{SettingsLayout:i,ActionToolBar:u,Input:_,CheckBox:k},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}};function g(r,o,s,C,e,S){const m=a("ActionToolBar"),p=a("CheckBox"),n=a("Input"),c=a("SettingsLayout");return h(),d(c,{title:s.data.title},{default:b(()=>[V("form",{onSubmit:o[3]||(o[3]=B(t=>e.form.post(r.route("admin.settings.recaptcha.update")),["prevent"]))},[l(m,{disable_save_button:e.form.processing,toolbar:e.toolbar},null,8,["disable_save_button","toolbar"]),l(p,{modelValue:e.form.recaptcha_enable,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.recaptcha_enable=t),label:r.__("Enable Recaptcha"),name:"recaptcha_enable"},null,8,["modelValue","label"]),l(n,{modelValue:e.form.recaptcha_site_key,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.recaptcha_site_key=t),name:"recaptcha_site_key",label:r.__("Recaptcha Site Key"),required:!0},null,8,["modelValue","label"]),l(n,{modelValue:e.form.recaptcha_secret,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.recaptcha_secret=t),name:"recaptcha_secret",label:r.__("Recaptcha Secret"),required:!0},null,8,["modelValue","label"])],32)]),_:1},8,["title"])}const q=f(y,[["render",g]]);export{q as default};

import i from"./SettingsLayout.35d111cb.js";import u from"./ActionToolBar.8d830195.js";import{I as _}from"./Input.8c887a2d.js";import{_ as d,A as f,w as b,r as a,o as h,b as V,a as l,D as B}from"./app.1d2673ab.js";import{C as k}from"./CheckBox.169d0953.js";import"./vanilla-picker.csp.eccdf93b.js";import"./Menu.13461a24.js";import"./bootstrap.esm.2333d793.js";import"./debounce.8ee276ba.js";const y={components:{SettingsLayout:i,ActionToolBar:u,Input:_,CheckBox:k},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}};function g(r,o,s,C,e,S){const m=a("ActionToolBar"),p=a("CheckBox"),n=a("Input"),c=a("SettingsLayout");return h(),f(c,{title:s.data.title},{default:b(()=>[V("form",{onSubmit:o[3]||(o[3]=B(t=>e.form.post(r.route("admin.settings.recaptcha.update")),["prevent"]))},[l(m,{disable_save_button:e.form.processing,toolbar:e.toolbar},null,8,["disable_save_button","toolbar"]),l(p,{modelValue:e.form.recaptcha_enable,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.recaptcha_enable=t),label:r.__("Enable Recaptcha"),name:"recaptcha_enable"},null,8,["modelValue","label"]),l(n,{modelValue:e.form.recaptcha_site_key,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.recaptcha_site_key=t),name:"recaptcha_site_key",label:r.__("Recaptcha Site Key"),required:!0},null,8,["modelValue","label"]),l(n,{modelValue:e.form.recaptcha_secret,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.recaptcha_secret=t),name:"recaptcha_secret",label:r.__("Recaptcha Secret"),required:!0},null,8,["modelValue","label"])],32)]),_:1},8,["title"])}const q=d(y,[["render",g]]);export{q as default};
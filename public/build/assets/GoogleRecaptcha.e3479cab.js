import i from"./SettingsLayout.e5b5cc10.js";import u from"./ActionToolBar.df52ca51.js";import{I as _}from"./Input.e1de50c7.js";import{_ as d,A as f,w as b,r as a,o as h,b as V,a as l,D as B}from"./app.9acdbdf3.js";import{C as k}from"./CheckBox.00e9a7bf.js";import"./vanilla-picker.csp.612e0881.js";import"./Menu.7d7df1e3.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ebc76861.js";const y={components:{SettingsLayout:i,ActionToolBar:u,Input:_,CheckBox:k},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}};function g(r,o,s,C,e,S){const m=a("ActionToolBar"),p=a("CheckBox"),n=a("Input"),c=a("SettingsLayout");return h(),f(c,{title:s.data.title},{default:b(()=>[V("form",{onSubmit:o[3]||(o[3]=B(t=>e.form.post(r.route("admin.settings.recaptcha.update")),["prevent"]))},[l(m,{disable_save_button:e.form.processing,toolbar:e.toolbar},null,8,["disable_save_button","toolbar"]),l(p,{modelValue:e.form.recaptcha_enable,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.recaptcha_enable=t),label:r.__("Enable Recaptcha"),name:"recaptcha_enable"},null,8,["modelValue","label"]),l(n,{modelValue:e.form.recaptcha_site_key,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.recaptcha_site_key=t),name:"recaptcha_site_key",label:r.__("Recaptcha Site Key"),required:!0},null,8,["modelValue","label"]),l(n,{modelValue:e.form.recaptcha_secret,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.recaptcha_secret=t),name:"recaptcha_secret",label:r.__("Recaptcha Secret"),required:!0},null,8,["modelValue","label"])],32)]),_:1},8,["title"])}const q=d(y,[["render",g]]);export{q as default};

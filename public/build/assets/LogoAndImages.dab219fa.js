import p from"./SettingsLayout.360222a6.js";import c from"./ActionToolBar.3f2b6130.js";import{_ as d,A as u,w as _,r as e,o as f,b as g,a as s,D as b}from"./app.94ede146.js";import"./vanilla-picker.csp.da387394.js";import{F as y}from"./FileChooser.3afe6028.js";import"./Menu.dea4e458.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b3e602c6.js";const A={components:{SettingsLayout:p,ActionToolBar:c,FileChooser:y},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}};function B(r,t,a,h,o,v){const i=e("ActionToolBar"),l=e("FileChooser"),m=e("SettingsLayout");return f(),u(m,{title:a.data.title},{default:_(()=>[g("form",{onSubmit:t[1]||(t[1]=b(n=>o.form.post(r.route("admin.settings.logoAndImages.update")),["prevent"]))},[s(i,{disable_save_button:o.form.processing,toolbar:o.toolbar},null,8,["disable_save_button","toolbar"]),s(l,{modelValue:o.form.company_logo,"onUpdate:modelValue":t[0]||(t[0]=n=>o.form.company_logo=n),name:"company_logo",label:r.__("Logo")},null,8,["modelValue","label"])],32)]),_:1},8,["title"])}const x=d(A,[["render",B]]);export{x as default};

import{I as p}from"./Input.09d9931c.js";import{_ as f,g as _,y as c,f as r,o as b,b as V,a as n,w as g}from"./app.f4b2b251.js";import{C as y}from"./CheckBox.cc62ca79.js";import{S}from"./Select.319f7f3f.js";import{S as B}from"./SubmitButton.e555a601.js";import"./vanilla-picker.csp.f644cdcf.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const C={components:{Input:p,Select:S,CheckBox:y,SubmitButton:B},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let e={iso_code:null,name:null,country_code:null,layout_direction:null,is_default:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function I(e,t,i,k,o,U){const u=r("Input"),m=r("Select"),a=r("CheckBox"),s=r("SubmitButton"),d=r("Modal");return b(),_(d,{title:i.data.title},{default:c(()=>[V("form",{onSubmit:t[5]||(t[5]=g(l=>i.existing_record?o.form.patch(e.route("admin.settings.systemLanguages.update",i.existing_record.id)):o.form.post(e.route("admin.settings.systemLanguages.store")),["prevent"]))},[n(u,{modelValue:o.form.name,"onUpdate:modelValue":t[0]||(t[0]=l=>o.form.name=l),name:"name",label:e.__("Name"),required:!0},null,8,["modelValue","label"]),n(m,{modelValue:o.form.layout_direction,"onUpdate:modelValue":t[1]||(t[1]=l=>o.form.layout_direction=l),options:i.data.dropdowns.layout_directions,name:"layout_direction",label:e.__("Layout Direction"),required:!0},null,8,["modelValue","options","label"]),n(u,{modelValue:o.form.iso_code,"onUpdate:modelValue":t[2]||(t[2]=l=>o.form.iso_code=l),name:"iso_code",label:e.__("Language ISO"),required:!0,note:e.__("alpha-2 code")},null,8,["modelValue","label","note"]),n(u,{modelValue:o.form.country_code,"onUpdate:modelValue":t[3]||(t[3]=l=>o.form.country_code=l),name:"country_code",label:e.__("Country ISO"),required:!0,note:e.__("alpha-2 code")},null,8,["modelValue","label","note"]),n(a,{modelValue:o.form.is_default,"onUpdate:modelValue":t[4]||(t[4]=l=>o.form.is_default=l),label:e.__("Default"),name:"is_default"},null,8,["modelValue","label"]),n(s,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const D=f(C,[["render",I]]);export{D as default};

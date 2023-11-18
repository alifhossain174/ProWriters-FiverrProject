import{I as p}from"./Input.e65d7326.js";import{_ as d,A as _,w as f,r as l,o as b,b as g,a as r,D as c}from"./app.94ede146.js";import{S as V}from"./Select.0af50086.js";import{S as w}from"./SubmitButton.71e94644.js";import"./vanilla-picker.csp.da387394.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b3e602c6.js";const S={components:{Input:p,Select:V,SubmitButton:w},props:["data","content_language","existing_record"],watch:{"form.position":{handler(e,n){this.form.parent_id=null,this.parent_menus=this.data.dropdowns.parent_menus[e]},deep:!0}},data(){return{parent_menus:[],form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let e={parent_id:null,name:null,position:null,sequence_number:null,website_page_id:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function M(e,n,i,B,o,h){const a=l("Select"),s=l("Input"),m=l("SubmitButton"),u=l("Modal");return b(),_(u,{title:i.data.title},{default:f(()=>[g("form",{onSubmit:n[4]||(n[4]=c(t=>i.existing_record?o.form.patch(e.route("admin.manage.content.websiteMenus.update",[i.content_language,i.existing_record.id])):o.form.post(e.route("admin.manage.content.websiteMenus.store",i.content_language)),["prevent"]))},[r(a,{options:i.data.dropdowns.positions,modelValue:o.form.position,"onUpdate:modelValue":n[0]||(n[0]=t=>o.form.position=t),label:e.__("Menu Position"),required:!0,name:"position"},null,8,["options","modelValue","label"]),r(a,{options:o.parent_menus,modelValue:o.form.parent_id,"onUpdate:modelValue":n[1]||(n[1]=t=>o.form.parent_id=t),label:e.__("Parent Menu"),name:"parent_id"},null,8,["options","modelValue","label"]),r(s,{modelValue:o.form.name,"onUpdate:modelValue":n[2]||(n[2]=t=>o.form.name=t),name:"name",label:e.__("Name"),required:!0},null,8,["modelValue","label"]),r(a,{options:i.data.dropdowns.custom_pages,modelValue:o.form.website_page_id,"onUpdate:modelValue":n[3]||(n[3]=t=>o.form.website_page_id=t),label:e.__("Custom Page"),name:"website_page_id"},null,8,["options","modelValue","label"]),r(m,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const P=d(S,[["render",M]]);export{P as default};

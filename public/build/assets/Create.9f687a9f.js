import{I as u}from"./Input.804a9604.js";import{_ as p,A as d,w as f,r as i,o as c,b as g,a as l,D as b}from"./app.2f940534.js";import{S as _}from"./SubmitButton.0cc09ebe.js";import"./vanilla-picker.csp.5d2100ee.js";import"./bootstrap.esm.2333d793.js";import"./debounce.0b2caf7a.js";const V={components:{Input:u,SubmitButton:_},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let e={name:null,percentage:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}};function h(e,t,n,B,o,v){const a=i("Input"),m=i("SubmitButton"),s=i("Modal");return c(),d(s,{title:n.data.title},{default:f(()=>[g("form",{onSubmit:t[3]||(t[3]=b(r=>n.existing_record?o.form.patch(e.route("admin.languages.update",n.existing_record.id)):o.form.post(e.route("admin.languages.store")),["prevent"]))},[l(a,{modelValue:o.form.name,"onUpdate:modelValue":t[0]||(t[0]=r=>o.form.name=r),name:"name",label:e.__("Name"),required:!0},null,8,["modelValue","label"]),l(a,{modelValue:o.form.percentage,"onUpdate:modelValue":t[1]||(t[1]=r=>o.form.percentage=r),label:e.__("Markup percentage to add to the price of the service"),tooltip:e.__("The markup will be used in calculating the base price of the service"),name:"percentage",onKeypress:t[2]||(t[2]=r=>e.onlyNumber(r,o.form.percentage)),required:!0},null,8,["modelValue","label","tooltip"]),l(m,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const x=p(V,[["render",h]]);export{x as default};

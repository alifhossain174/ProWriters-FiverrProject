import{I as w}from"./Input.e1de50c7.js";import{T as v}from"./TextArea.738ba188.js";import{C as y}from"./CheckBox.00e9a7bf.js";import{S as g}from"./Select.d56be4ef.js";import{S as C}from"./SubmitButton.86380d69.js";import{_ as B,A as p,w as S,r as m,o as s,b as i,a as r,B as U,c as k,d as f,D as q}from"./app.9acdbdf3.js";import"./vanilla-picker.csp.612e0881.js";import{P as N}from"./Phone.0f2d18c0.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ebc76861.js";const P={props:["data","existing_record"],components:{Input:w,TextArea:v,Select:g,CheckBox:y,Phone:N,SubmitButton:C},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let n={first_name:null,last_name:null,email:null,phone:null,country_code:null,timezone:null,allow_paying_later:null,internal_note:null,inactive:null,password:null};return this.existing_record&&(n={...n,...this.existing_record}),n}}},z={class:"row"},A={class:"col-md-6"},I={class:"col-md-6"},T={class:"row"},h={key:0,class:"col-md-6"};function x(n,o,t,F,e,L){const a=m("Input"),_=m("Phone"),u=m("Select"),d=m("CheckBox"),V=m("TextArea"),b=m("SubmitButton"),c=m("Modal");return s(),p(c,{title:t.data.title},{default:S(()=>[i("form",{onSubmit:o[12]||(o[12]=q(l=>t.existing_record?e.form.patch(t.data.urls.submit_form):e.form.post(t.data.urls.submit_form,e.formConfig),["prevent"]))},[i("div",z,[i("div",A,[r(a,{modelValue:e.form.first_name,"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.first_name=l),name:"first_name",label:n.__("First Name"),required:!0},null,8,["modelValue","label"])]),i("div",I,[r(a,{modelValue:e.form.last_name,"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.last_name=l),name:"last_name",label:n.__("Last Name"),required:!0},null,8,["modelValue","label"])])]),i("div",T,[i("div",{class:U([t.existing_record?"col-md-12":"col-md-6"])},[r(a,{modelValue:e.form.email,"onUpdate:modelValue":o[2]||(o[2]=l=>e.form.email=l),name:"email",label:n.__("Email"),required:!0},null,8,["modelValue","label"])],2),t.existing_record?f("",!0):(s(),k("div",h,[r(a,{modelValue:e.form.password,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.password=l),name:"password",label:n.__("Password"),required:!0},null,8,["modelValue","label"])]))]),r(_,{modelValue:e.form.phone,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.phone=l),name:"phone",label:n.__("Phone")},null,8,["modelValue","label"]),r(u,{searchable:!0,reduce_key:"code",clearable:!0,options:t.data.dropdowns.countries,modelValue:e.form.country_code,"onUpdate:modelValue":o[5]||(o[5]=l=>e.form.country_code=l),label:n.__("Country"),required:!0,name:"country"},null,8,["options","modelValue","label"]),r(u,{searchable:!0,options:t.data.dropdowns.timezones,modelValue:e.form.timezone,"onUpdate:modelValue":o[6]||(o[6]=l=>e.form.timezone=l),label:n.__("Time Zone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"]),r(d,{modelValue:e.form.allow_paying_later,"onUpdate:modelValue":o[7]||(o[7]=l=>e.form.allow_paying_later=l),name:"allow_paying_later",label:n.__("Allow Paying Later"),tooltip:n.__("Allow customers to place order without upfront payment. You can create invoice for the tasks later.")},null,8,["modelValue","label","tooltip"]),e.form.allow_credit?(s(),p(a,{key:0,modelValue:e.form.credit_limit,"onUpdate:modelValue":o[8]||(o[8]=l=>e.form.credit_limit=l),name:"credit_limit",label:n.__("Credit Limit"),required:!0,onKeypress:o[9]||(o[9]=l=>n.onlyNumber(l,e.form.credit_limit))},null,8,["modelValue","label"])):f("",!0),r(V,{modelValue:e.form.internal_note,"onUpdate:modelValue":o[10]||(o[10]=l=>e.form.internal_note=l),name:"internal_note",label:n.__("Internal Note")},null,8,["modelValue","label"]),r(d,{modelValue:e.form.inactive,"onUpdate:modelValue":o[11]||(o[11]=l=>e.form.inactive=l),name:"inactive",label:n.__("Inactive")},null,8,["modelValue","label"]),r(b,{disabled:e.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const O=B(P,[["render",x]]);export{O as default};

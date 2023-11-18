import{I as w}from"./Input.3f943b39.js";import{_ as k,A as B,w as N,r as a,o as n,b as s,a as i,f as c,t as u,J as m,Z as y,a1 as v,c as d,q as g,F as h,D as S}from"./app.707c49f0.js";import{S as D}from"./SubmitButton.340390d1.js";import"./vanilla-picker.csp.3171e9bb.js";import"./bootstrap.esm.2333d793.js";import"./debounce.aeb94049.js";const M={components:{Input:w,SubmitButton:D},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let r={percentage:null,name:null,value:null,type:this.existing_record?null:this.data.dropdowns.urgency_types[0].id,type_for_author:this.existing_record?null:this.data.dropdowns.urgency_types[0].id,value_for_author:null};return this.existing_record&&(r={...r,...this.existing_record}),r}}},U={class:"mb-3"},T={class:"form-label"},q=s("span",{class:"required"},"*",-1),F={class:"input-group"},I=["placeholder"],x=["value"],C={class:"mb-3"},E={class:"form-label"},K=s("span",{class:"required"},"*",-1),A={class:"input-group"},J=["placeholder"],L=["value"];function Z(r,o,l,j,t,z){const f=a("Input"),_=a("ValidationError"),b=a("SubmitButton"),V=a("Modal");return n(),B(V,{title:l.data.title},{default:N(()=>[s("form",{onSubmit:o[9]||(o[9]=S(e=>l.existing_record?t.form.patch(r.route("admin.urgencies.update",l.existing_record.id)):t.form.post(r.route("admin.urgencies.store")),["prevent"]))},[i(f,{modelValue:t.form.name,"onUpdate:modelValue":o[0]||(o[0]=e=>t.form.name=e),name:"name",label:r.__("Display Name"),required:!0},null,8,["modelValue","label"]),s("div",U,[s("label",T,[c(u(r.__("Duration and Type"))+" ",1),q]),s("div",F,[m(s("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>t.form.value=e),type:"text",class:"form-control form-control-sm w-75",onKeypress:o[2]||(o[2]=e=>r.onlyNumber(e,t.form.value)),placeholder:r.__(3)},null,40,I),[[y,t.form.value]]),m(s("select",{class:"form-select form-select-sm w-25","onUpdate:modelValue":o[3]||(o[3]=e=>t.form.type=e)},[(n(!0),d(h,null,g(l.data.dropdowns.urgency_types,(e,p)=>(n(),d("option",{value:e.id,key:p},u(e.name),9,x))),128))],512),[[v,t.form.type]])]),i(_,{name:"value"})]),s("div",C,[s("label",E,[c(u(r.__("Duration and Type for Authors"))+" ",1),K]),s("div",A,[m(s("input",{"onUpdate:modelValue":o[4]||(o[4]=e=>t.form.value_for_author=e),type:"text",class:"form-control form-control-sm w-75",onKeypress:o[5]||(o[5]=e=>r.onlyNumber(e,t.form.value_for_author)),placeholder:r.__(2)},null,40,J),[[y,t.form.value_for_author]]),m(s("select",{class:"form-select form-select-sm w-25","onUpdate:modelValue":o[6]||(o[6]=e=>t.form.type_for_author=e)},[(n(!0),d(h,null,g(l.data.dropdowns.urgency_types,(e,p)=>(n(),d("option",{value:e.id,key:p},u(e.name),9,L))),128))],512),[[v,t.form.type_for_author]])]),i(_,{name:"value_for_author"})]),i(f,{modelValue:t.form.percentage,"onUpdate:modelValue":o[7]||(o[7]=e=>t.form.percentage=e),label:r.__("Markup percentage to add to the price of the service"),tooltip:r.__("The markup will be used in calculating the base price of the service"),name:"percentage",onKeypress:o[8]||(o[8]=e=>r.onlyNumber(e,t.form.percentage))},null,8,["modelValue","label","tooltip"]),i(b,{disabled:t.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const W=k(M,[["render",Z]]);export{W as default};
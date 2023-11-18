import{I as w}from"./Input.e1de50c7.js";import{_ as k,A as B,w as N,r as a,o as s,b as l,a as i,f as _,t as m,J as u,U as y,a2 as v,c as d,q as g,F as b,D as S}from"./app.9acdbdf3.js";import{S as U}from"./SubmitButton.86380d69.js";import"./vanilla-picker.csp.612e0881.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ebc76861.js";const D={components:{Input:w,SubmitButton:U},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let t={percentage:null,name:null,value:null,type:this.existing_record?null:this.data.dropdowns.urgency_types[0].id,type_for_freelancer:this.existing_record?null:this.data.dropdowns.urgency_types[0].id,value_for_freelancer:null};return this.existing_record&&(t={...t,...this.existing_record}),t}}},M={class:"mb-3"},F={class:"form-label"},T=l("span",{class:"required"},"*",-1),q={class:"input-group"},I=["placeholder"],x=["value"],C={class:"mb-3"},E={class:"form-label"},K=l("span",{class:"required"},"*",-1),A={class:"input-group"},J=["placeholder"],L=["value"];function j(t,o,n,z,r,G){const f=a("Input"),c=a("ValidationError"),h=a("SubmitButton"),V=a("Modal");return s(),B(V,{title:n.data.title},{default:N(()=>[l("form",{onSubmit:o[9]||(o[9]=S(e=>n.existing_record?r.form.patch(t.route("admin.urgencies.update",n.existing_record.id)):r.form.post(t.route("admin.urgencies.store")),["prevent"]))},[i(f,{modelValue:r.form.name,"onUpdate:modelValue":o[0]||(o[0]=e=>r.form.name=e),name:"name",label:t.__("Display Name"),required:!0},null,8,["modelValue","label"]),l("div",M,[l("label",F,[_(m(t.__("Duration and Type"))+" ",1),T]),l("div",q,[u(l("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>r.form.value=e),type:"text",class:"form-control form-control-sm w-75",onKeypress:o[2]||(o[2]=e=>t.onlyNumber(e,r.form.value)),placeholder:t.__(3)},null,40,I),[[y,r.form.value]]),u(l("select",{class:"form-select form-select-sm w-25","onUpdate:modelValue":o[3]||(o[3]=e=>r.form.type=e)},[(s(!0),d(b,null,g(n.data.dropdowns.urgency_types,(e,p)=>(s(),d("option",{value:e.id,key:p},m(e.name),9,x))),128))],512),[[v,r.form.type]])]),i(c,{name:"value"})]),l("div",C,[l("label",E,[_(m(t.__("Duration and Type for Freelancers"))+" ",1),K]),l("div",A,[u(l("input",{"onUpdate:modelValue":o[4]||(o[4]=e=>r.form.value_for_freelancer=e),type:"text",class:"form-control form-control-sm w-75",onKeypress:o[5]||(o[5]=e=>t.onlyNumber(e,r.form.value_for_freelancer)),placeholder:t.__(2)},null,40,J),[[y,r.form.value_for_freelancer]]),u(l("select",{class:"form-select form-select-sm w-25","onUpdate:modelValue":o[6]||(o[6]=e=>r.form.type_for_freelancer=e)},[(s(!0),d(b,null,g(n.data.dropdowns.urgency_types,(e,p)=>(s(),d("option",{value:e.id,key:p},m(e.name),9,L))),128))],512),[[v,r.form.type_for_freelancer]])]),i(c,{name:"value_for_freelancer"})]),i(f,{modelValue:r.form.percentage,"onUpdate:modelValue":o[7]||(o[7]=e=>r.form.percentage=e),label:t.__("Markup percentage to add to the price of the service"),tooltip:t.__("The markup will be used in calculating the base price of the service"),name:"percentage",onKeypress:o[8]||(o[8]=e=>t.onlyNumber(e,r.form.percentage))},null,8,["modelValue","label","tooltip"]),i(h,{disabled:r.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const X=k(D,[["render",j]]);export{X as default};

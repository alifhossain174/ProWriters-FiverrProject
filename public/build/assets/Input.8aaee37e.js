import{_ as c,r as m,o,c as a,b as s,f as u,t as d,d as n,B as _,a as y}from"./app.15906225.js";const f={props:["modelValue","label","name","type","placeholder","required","note","tooltip","readonly","customStyle"],emits:["update:modelValue"]},p={class:"mb-3"},V={class:"form-label"},h={key:0,class:"text-muted me-1"},b={key:1,class:"required"},v=["title"],g=s("i",{class:"fa-solid fa-circle-question"},null,-1),k=[g],q=["value","type","placeholder","readonly"];function B(l,t,e,N,x,C){const i=m("ValidationError");return o(),a("div",p,[s("label",V,[u(d(e.label)+" ",1),e.note?(o(),a("small",h,d(e.note),1)):n("",!0),e.required?(o(),a("span",b,"*")):n("",!0),e.tooltip?(o(),a("span",{key:2,class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.tooltip},k,8,v)):n("",!0)]),s("input",{value:e.modelValue,onInput:t[0]||(t[0]=r=>l.$emit("update:modelValue",r.target.value)),type:e.type?e.type:"text",class:_(["form-control form-control-sm",[{"is-invalid":l.$page.props.errors[e.name]},e.customStyle]]),placeholder:e.placeholder,onFocus:t[1]||(t[1]=r=>l.$page.props.errors[e.name]=null),readonly:e.readonly?e.readonly:!1},null,42,q),y(i,{name:e.name},null,8,["name"])])}const I=c(f,[["render",B]]);export{I};

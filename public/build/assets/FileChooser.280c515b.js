import{_ as m,r as c,o as s,c as n,b as a,f as p,t as i,d as r,B as _,D as g,a as h}from"./app.2abe2877.js";const f={props:["modelValue","label","name","placeholder","required","note","tooltip"],emits:["update:modelValue"],methods:{loadImageManager(){var o=this;window.open(this.$page.props.auth_user.urls.image_manager,"fm","width=800,height=600"),window.SetUrl=function(t){let e=new URL(t[0].url).pathname;e=e.replace(/^\/|\/$/g,""),o.$emit("update:modelValue",e),o.$emit("change",e)}}}},v={class:"mb-3"},V={class:"form-label"},b={key:0,class:"text-muted"},w={key:1,class:"ms-1 required"},k=["title"],C=a("i",{class:"fa-solid fa-circle-question"},null,-1),F=[C],y={class:"input-group input-group-sm mb-3"},q=["value","placeholder"];function B(o,t,e,I,M,d){const u=c("ValidationError");return s(),n("div",v,[a("div",V,[p(i(e.label)+" ",1),e.note?(s(),n("small",b,i(e.note),1)):r("",!0),e.required?(s(),n("span",w,"*")):r("",!0),e.tooltip?(s(),n("span",{key:2,class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.tooltip},F,8,k)):r("",!0)]),a("div",y,[a("input",{value:e.modelValue,onInput:t[0]||(t[0]=l=>o.$emit("update:modelValue",l.target.value)),type:"text",class:_(["form-control form-control-sm",{"is-invalid":o.$page.props.errors[e.name]}]),placeholder:e.placeholder,onFocus:t[1]||(t[1]=l=>o.$page.props.errors[e.name]=null),id:"inputGroupFile"},null,42,q),a("button",{onClick:t[2]||(t[2]=g((...l)=>d.loadImageManager&&d.loadImageManager(...l),["stop","prevent"])),class:"input-group-text",for:"inputGroupFile"},i(o.__("Choose File")),1)]),h(u,{name:e.name},null,8,["name"])])}const x=m(f,[["render",B]]);export{x as F};

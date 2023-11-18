import{_ as c,f as m,o,c as a,b as n,d as u,t as i,h as s,n as _,a as f}from"./app.b345893e.js";const h={props:["modelValue","label","name","placeholder","required","rows","note","tooltip"],emits:["update:modelValue"],mounted(){this.tooltip&&new Tooltip(this.$refs.tooltip)}},p={class:"mb-3"},V={class:"form-label"},b={key:0,class:"text-muted"},v={key:1,class:"required"},g=["title"],w=n("i",{class:"fa-solid fa-circle-question"},null,-1),k=[w],q=["value","rows","placeholder"];function x(l,t,e,y,N,T){const d=m("ValidationError");return o(),a("div",p,[n("label",V,[u(i(e.label)+" ",1),e.note?(o(),a("small",b,i(e.note),1)):s("",!0),e.required?(o(),a("span",v,"*")):s("",!0),e.tooltip?(o(),a("span",{key:2,class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.tooltip},k,8,g)):s("",!0)]),n("textarea",{value:e.modelValue,onInput:t[0]||(t[0]=r=>l.$emit("update:modelValue",r.target.value)),rows:e.rows?e.rows:4,class:_(["form-control form-control-sm",{"is-invalid":l.$page.props.errors[e.name]}]),placeholder:e.placeholder,onFocus:t[1]||(t[1]=r=>l.$page.props.errors[e.name]=null)},null,42,q),f(d,{name:e.name},null,8,["name"])])}const C=c(h,[["render",x]]);export{C as T};

import{_ as r,r as u,o as a,c as o,b as t,J as _,R as h,f,t as i,d as c,a as b,B as v}from"./app.2f940534.js";const V={props:["modelValue","value","label","name","note","tooltip","bottom_margin"],emits:["update:modelValue"],computed:{model:{get(){return this.value?this.modelValue:Number(this.modelValue)},set(l){this.$emit("update:modelValue",l)}}}},k={class:"form-check"},x=["true-value","id"],g=["for"],C={key:0,class:"text-muted"},B=["title"],N=t("i",{class:"fa-solid fa-circle-question"},null,-1),y=[N];function E(l,s,e,p,D,n){const m=u("ValidationError");return a(),o("div",{class:v(e.bottom_margin?e.bottom_margin:"mb-3")},[t("div",k,[_(t("input",{"true-value":e.value?e.value:1,"false-value":!1,"onUpdate:modelValue":s[0]||(s[0]=d=>n.model=d),class:"form-check-input",type:"checkbox",id:e.name},null,8,x),[[h,n.model]]),t("label",{class:"form-check-label",for:e.name},[f(i(e.label)+" ",1),e.note?(a(),o("small",C,i(e.note),1)):c("",!0),e.tooltip?(a(),o("span",{key:1,class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.tooltip},y,8,B)):c("",!0)],8,g)]),b(m,{name:e.name},null,8,["name"])],2)}const w=r(V,[["render",E]]);export{w as C};

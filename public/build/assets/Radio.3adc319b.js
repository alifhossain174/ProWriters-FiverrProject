import{_ as u,f as p,o as a,c as t,F as d,r as _,e as f,Z as V,b as r,t as h,a as b}from"./app.b345893e.js";const k={props:["modelValue","options","name"],emits:["update:modelValue"],computed:{model:{get(){return this.modelValue},set(o){this.$emit("update:modelValue",o)}}}},v=["value","name","id"],g=["for"];function x(o,n,s,y,B,l){const i=p("ValidationError");return a(),t(d,null,[(a(!0),t(d,null,_(s.options,(e,m)=>(a(),t("div",{class:"form-check",key:m},[f(r("input",{"onUpdate:modelValue":n[0]||(n[0]=c=>l.model=c),value:e.id,class:"form-check-input",type:"radio",name:"btnradio_"+e.id,id:"btnradio_"+e.id},null,8,v),[[V,l.model]]),r("label",{class:"form-check-label",for:"btnradio_"+e.id},h(e.name),9,g)]))),128)),b(i,{name:s.name},null,8,["name"])],64)}const R=u(k,[["render",x]]);export{R};

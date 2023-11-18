import{r,t as o,Z as w,s as l,a as c}from"./vanilla-picker.csp.0ced5960.js";import{_ as V,r as i,o as n,c as s,b as f,f as k,t as m,d as u,a as g}from"./app.969842cf.js";function _(a){r(1,arguments);var e=o(a),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function D(a){r(1,arguments);var e=o(a);return e.setDate(1),e.setHours(0,0,0,0),e}function v(a){r(1,arguments);var e=o(a),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function Y(a){r(1,arguments);var e=o(a),t=new Date(0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const F={props:["modelValue","label","name","placeholder","required","note","tooltip"],components:{Datepicker:w},computed:{model:{get(){return this.modelValue},set(a){this.$emit("update:modelValue",a)}}},data(){return{presetRanges:[{label:"Today",range:[new Date,new Date]},{label:"Yesterday",range:[l(new Date,1),l(new Date,1)]},{label:"Last 7 Days",range:[l(new Date,6),new Date]},{label:"This month",range:[D(new Date),_(new Date)]},{label:"Last month",range:[D(c(new Date,1)),_(c(new Date,1))]},{label:"This year",range:[Y(new Date),v(new Date)]}]}}},M={class:"mb-2"},q={class:"form-label"},x={key:0,class:"text-muted"},N={key:1,class:"ms-1 required"},R=["title"],H=f("i",{class:"fa-solid fa-circle-question"},null,-1),O=[H];function T(a,e,t,B,p,d){const h=i("Datepicker"),b=i("ValidationError");return n(),s("div",M,[f("label",q,[k(m(t.label)+" ",1),t.note?(n(),s("small",x,m(t.note),1)):u("",!0),t.required?(n(),s("span",N,"*")):u("",!0),t.tooltip?(n(),s("span",{key:2,class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:t.tooltip},O,8,R)):u("",!0)]),g(h,{range:"",presetRanges:p.presetRanges,format:"yyyy-MM-dd",inputClassName:"form-control form-control-sm",modelValue:d.model,"onUpdate:modelValue":e[0]||(e[0]=y=>d.model=y)},null,8,["presetRanges","modelValue"]),g(b,{name:t.name},null,8,["name"])])}const L=V(F,[["render",T]]);export{L as D};

import{_ as i,c as e,b as t,t as s,F as r,q as l,d as _,o as a}from"./app.f21ad38e.js";import"./bootstrap.esm.2333d793.js";const m={props:["task"]},u={key:0,class:"card"},b={class:"card-body"},p={class:"card-title"},f={class:"p-2",style:{"background-color":"#f8f8f8"}},h={class:"text-muted fw-bolder"},k={class:"table table-sm"},v={class:"text-end"};function y(o,g,d,S,x,B){return d.task.additional_services.length>0?(a(),e("div",u,[t("div",b,[t("h5",p,s(o.__("Additional Services")),1),t("div",f,[(a(!0),e(r,null,l(d.task.additional_services,(c,n)=>(a(),e("div",{class:"border-bottom mb-2 pb-2",key:n},[t("small",h,s(c.name),1),t("table",k,[t("tr",null,[t("td",null,s(o.__("Quantity"))+" :",1),t("td",v,s(c.pivot.quantity),1)])])]))),128))])])])):_("",!0)}const F=i(m,[["render",y]]);export{F as default};

import{_ as c,r as _,o as n,c as t,b as d,F as s,q as u,B as m,a as k,d as o,t as f}from"./app.9acdbdf3.js";const y={props:["links","total","only"]},g={key:0},h={class:"pagination"},p={key:1,class:"text-center"};function L(l,B,e,N,b,v){const r=_("Link");return n(),t(s,null,[e.total!=0&&e.links.length!=3?(n(),t("nav",g,[d("ul",h,[(n(!0),t(s,null,u(e.links,(a,i)=>(n(),t("li",{class:m(["page-item",{disabled:!a.url}]),key:i},[k(r,{is:"Link",href:a.url,innerHTML:a.label,class:"page-link",only:e.only},null,8,["href","innerHTML","only"])],2))),128))])])):o("",!0),e.total==0?(n(),t("div",p,f(l.__("No record found")),1)):o("",!0)],64)}const C=c(y,[["render",L]]);export{C as P};

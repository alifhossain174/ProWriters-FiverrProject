import m from"./AccountLayout.ee369a12.js";import{_ as p,c as o,a as r,y as f,F as _,f as c,o as d,b as t,t as e,r as v,h as g,d as l}from"./app.f4b2b251.js";import"./bootstrap.esm.2333d793.js";const b={props:["data","author"],components:{AccountLayout:m}},y={class:"card"},w={class:"card-header h5"},A={class:"card-body"},x={class:"fs-7"},L={key:0,class:"badge badge-lg badge-soft-primary me-2 mb-2"},N=t("hr",null,null,-1),P={class:"fs-7"},k={class:"table table-bordered"},V={class:"text-end"},B={class:"text-end"},C={class:"text-end"},E={class:"text-muted text-left"},F={class:"text-end"},H={class:"text-muted"},S={class:"text-end"},D={class:"text-muted"},R={class:"text-end"},T={class:"text-muted"};function W(s,j,a,q,z,G){const i=c("AppHead"),h=c("AccountLayout");return d(),o(_,null,[r(i,{title:a.data.title},null,8,["title"]),r(h,{author:a.author},{default:f(()=>[t("div",y,[t("div",w,e(a.data.title),1),t("div",A,[t("h5",x,e(s.__("Services")),1),(d(!0),o(_,null,v(a.data.services,(n,u)=>(d(),o(_,{key:u},[n?(d(),o("span",L,e(n.name),1)):g("",!0)],64))),128)),N,t("h5",P,e(s.__("Author Level"))+" "+e(s.__("&"))+" "+e(s.__("Rate")),1),t("table",k,[t("thead",null,[t("tr",null,[t("th",null,e(s.__("Name")),1),t("th",V,e(s.__("Writing")),1),t("th",B,e(s.__("Editing")),1),t("th",C,e(s.__("Proofreading")),1)])]),t("tbody",null,[t("tr",null,[t("td",E,e(a.data.author_level.name),1),t("td",F,[l(e(a.data.author_level.author_price_per_word_writing)+" ",1),t("div",null,[t("small",H,e(s.__("Per word price")),1)])]),t("td",S,[l(e(a.data.author_level.author_price_per_word_editing)+" ",1),t("div",null,[t("small",D,e(s.__("Per word price")),1)])]),t("td",R,[l(e(a.data.author_level.author_price_per_word_proofreading)+" ",1),t("div",null,[t("small",T,e(s.__("Per word price")),1)])])])])])])])]),_:1},8,["author"])],64)}const M=p(b,[["render",W]]);export{M as default};

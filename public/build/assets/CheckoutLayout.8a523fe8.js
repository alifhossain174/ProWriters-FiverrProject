import{_ as m,c as h,a as n,b as t,y as c,t as a,z as p,F as f,f as o,o as l,g as u,d as g,h as y}from"./app.b345893e.js";import"./bootstrap.esm.2333d793.js";const v={props:["data","title","is_payment_gateway_page"],methods:{getUrl(){let e=new URLSearchParams(window.location.search).toString();return route("choose_payment_method")+"?"+e}}},k={class:"container page-container"},w=t("i",{class:"fas fa-chevron-left"},null,-1),b={class:"row"},B={class:"col-md-5 d-none d-lg-block"},C={class:"p-5"},L=["src"],N={class:"offset-md-1 col-md-6"},S={class:"card"},T={class:"card-body"},V={class:"d-flex justify-content-between"},P={class:"h4"},U={class:"h4"};function x(e,A,s,F,H,i){const d=o("AppHead"),_=o("Link"),r=o("PageTitle");return l(),h(f,null,[n(d,{title:s.title},null,8,["title"]),t("div",k,[n(r,{title:s.title},{default:c(()=>[s.is_payment_gateway_page?(l(),u(_,{key:0,href:i.getUrl(),class:"btn btn-light btn-sm"},{default:c(()=>[w,g(" "+a(e.__("Back to payment options")),1)]),_:1},8,["href"])):y("",!0)]),_:1},8,["title"]),t("div",b,[t("div",B,[t("div",C,[t("img",{src:e.asset("images/payment.svg"),class:"img-fluid mx-auto"},null,8,L)])]),t("div",N,[t("div",S,[t("div",T,[t("div",V,[t("h4",P,a(e.__("Total")),1),t("div",U,a(e.formatMoney(s.data.total)),1)]),p(e.$slots,"default")])])])])])],64)}const z=m(v,[["render",x]]);export{z as default};

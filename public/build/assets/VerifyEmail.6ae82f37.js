import{_ as d,e as k,c as r,a as n,w as i,F as v,r as s,o as l,b as o,t,d as $,f as c}from"./app.9acdbdf3.js";import b from"./AuthLayout.4ca69e90.js";import"./bootstrap.esm.2333d793.js";const A={};function L(e,u,a,_,p,f){return k(e.$slots,"default")}const V=d(A,[["render",L]]),g={props:["data"],components:{AuthLayout:b},layout:V},B={class:"p-5"},N=o("hr",null,null,-1),C={key:0,class:"alert alert-success",role:"alert"};function E(e,u,a,_,p,f){const m=s("AppHead"),h=s("Link"),y=s("AuthLayout");return l(),r(v,null,[n(m,{title:a.data.title},null,8,["title"]),n(y,{data:a.data.page.additional_data},{default:i(()=>[o("div",B,[o("h3",null,t(e.__("Verify Your Email Address")),1),N,o("div",null,[a.data.resent?(l(),r("div",C,t(e.__("A fresh verification link has been sent to your email address.")),1)):$("",!0),c(" "+t(e.__("Before proceeding, please check your email for a verification link."))+" "+t(e.__("If you did not receive the email"))+", ",1),n(h,{class:"btn btn-link p-0 m-0 align-baseline",href:e.route("verification.resend"),method:"post",as:"button",type:"button"},{default:i(()=>[c(t(e.__("click here to request another")),1)]),_:1},8,["href"])])])]),_:1},8,["data"])],64)}const S=d(g,[["render",E]]);export{S as default};

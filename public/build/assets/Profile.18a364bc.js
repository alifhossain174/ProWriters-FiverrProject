import f from"./AccountLayout.05b71f08.js";import{_ as m,c as l,a as _,w as p,F as o,r as c,o as n,b as e,t,q as v,d as g,f as r}from"./app.2022c6b3.js";import"./bootstrap.esm.2333d793.js";const b={props:["data","freelancer"],components:{AccountLayout:f}},w={class:"card"},y={class:"card-header h5"},x={class:"card-body"},A={class:"fs-7"},L={key:0,class:"badge badge-lg badge-soft-primary me-2 mb-2"},N=e("hr",null,null,-1),P={class:"fs-7"},k={class:"table table-bordered"},V={class:"text-end"},B={class:"text-end"},C={class:"text-end"},F={class:"text-muted text-left"},E={class:"text-end"},H={class:"text-muted"},S={class:"text-end"},q={class:"text-muted"},D={class:"text-end"},R={class:"text-muted"};function T(a,W,s,j,z,G){const i=c("AppHead"),u=c("AccountLayout");return n(),l(o,null,[_(i,{title:s.data.title},null,8,["title"]),_(u,{freelancer:s.freelancer},{default:p(()=>[e("div",w,[e("div",y,t(s.data.title),1),e("div",x,[e("h5",A,t(a.__("Services")),1),(n(!0),l(o,null,v(s.data.services,(d,h)=>(n(),l(o,{key:h},[d?(n(),l("span",L,t(d.name),1)):g("",!0)],64))),128)),N,e("h5",P,t(a.__("Freelancer Level"))+" "+t(a.__("&"))+" "+t(a.__("Rate")),1),e("table",k,[e("thead",null,[e("tr",null,[e("th",null,t(a.__("Name")),1),e("th",V,t(a.__("Writing")),1),e("th",B,t(a.__("Editing")),1),e("th",C,t(a.__("Proofreading")),1)])]),e("tbody",null,[e("tr",null,[e("td",F,t(s.data.freelancer_level.name),1),e("td",E,[r(t(s.data.freelancer_level.freelancer_price_per_word_writing)+" ",1),e("div",null,[e("small",H,t(a.__("Per word price")),1)])]),e("td",S,[r(t(s.data.freelancer_level.freelancer_price_per_word_editing)+" ",1),e("div",null,[e("small",q,t(a.__("Per word price")),1)])]),e("td",D,[r(t(s.data.freelancer_level.freelancer_price_per_word_proofreading)+" ",1),e("div",null,[e("small",R,t(a.__("Per word price")),1)])])])])])])])]),_:1},8,["freelancer"])],64)}const M=m(b,[["render",T]]);export{M as default};

import{P as u}from"./Pagination.c6521de8.js";import{A as h}from"./AttachmentList.05c37f73.js";import{_ as v,r as i,o as s,c as n,F as d,q as y,b as t,t as o,a as p,d as l,A as k}from"./app.2f940534.js";const f={props:["messages","data"],components:{Pagination:u,AttachmentList:h}},b={class:"row"},A={class:"col-md-3 text-center"},g=["src","alt"],L={class:"mt-2"},B={class:"text-muted"},P={key:0},D={key:1},N={key:2},x={class:"col-md-9 comment-body-parent"},C=["innerHTML"],T={key:0},V=t("hr",null,null,-1),w={class:"mb-2 mt-2"},F=t("br",null,null,-1),H=t("br",null,null,-1),M={class:"comment-box-footer"},j={class:"d-flex justify-content-between"},q=t("div",null,null,-1),z={key:0,class:"text-center text-muted"};function E(a,S,c,W,G,I){const _=i("AttachmentList"),r=i("Pagination");return s(),n(d,null,[(s(!0),n(d,null,y(c.messages.data,(e,m)=>(s(),n("div",{class:"comment-box pb-0",key:m},[t("div",b,[t("div",A,[t("img",{class:"avatar",src:e.user.small_avatar,alt:e.user.code,loading:"lazy"},null,8,g),t("div",L,o(e.user.code),1),t("div",B,[e.user.type==c.data.user_types.admin?(s(),n("span",P,o(a.__("Admin")),1)):e.user.type==c.data.user_types.freelancer?(s(),n("span",D,o(a.__("Writer")),1)):(s(),n("span",N,o(a.__("Customer")),1))])]),t("div",x,[t("div",{class:"nl2br",innerHTML:e.body},null,8,C),e.attachments.length>0?(s(),n("div",T,[V,t("div",w,o(a.__("Attachments")),1),p(_,{attachments:e.attachments},null,8,["attachments"])])):l("",!0)])]),F,H,t("div",M,[t("div",j,[t("div",null,o(a.__("Posted"))+" : "+o(a.localDateTime(e.created_at)),1),q])])]))),128)),c.messages.total==0?(s(),n("div",z,o(a.__("No record found")),1)):l("",!0),c.messages.data.length>0?(s(),k(r,{key:1,links:c.messages.links},null,8,["links"])):l("",!0)],64)}const Q=v(f,[["render",E]]);export{Q as D};

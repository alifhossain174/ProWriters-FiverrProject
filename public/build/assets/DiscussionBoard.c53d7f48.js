import{P as u}from"./Pagination.109538d8.js";import{A as h}from"./AttachmentList.75ab43e5.js";import{_ as v,f as i,o as e,c as n,F as d,r as y,b as t,t as o,a as p,h as l,g as k}from"./app.b345893e.js";const f={props:["messages","data"],components:{Pagination:u,AttachmentList:h}},b={class:"row"},g={class:"col-md-3 text-center"},A=["src","alt"],L={class:"mt-2"},B={class:"text-muted"},P={key:0},D={key:1},N={key:2},x={class:"col-md-9 comment-body-parent"},C=["innerHTML"],T={key:0},V=t("hr",null,null,-1),w={class:"mb-2 mt-2"},F=t("br",null,null,-1),H=t("br",null,null,-1),M={class:"comment-box-footer"},j={class:"d-flex justify-content-between"},z=t("div",null,null,-1),E={key:0,class:"text-center text-muted"};function S(a,W,c,q,G,I){const _=i("AttachmentList"),r=i("Pagination");return e(),n(d,null,[(e(!0),n(d,null,y(c.messages.data,(s,m)=>(e(),n("div",{class:"comment-box pb-0",key:m},[t("div",b,[t("div",g,[t("img",{class:"avatar",src:s.user.small_avatar,alt:s.user.code,loading:"lazy"},null,8,A),t("div",L,o(s.user.code),1),t("div",B,[s.user.type==c.data.user_types.admin?(e(),n("span",P,o(a.__("Admin")),1)):s.user.type==c.data.user_types.author?(e(),n("span",D,o(a.__("Writer")),1)):(e(),n("span",N,o(a.__("Customer")),1))])]),t("div",x,[t("div",{class:"nl2br",innerHTML:s.body},null,8,C),s.attachments.length>0?(e(),n("div",T,[V,t("div",w,o(a.__("Attachments")),1),p(_,{attachments:s.attachments},null,8,["attachments"])])):l("",!0)])]),F,H,t("div",M,[t("div",j,[t("div",null,o(a.__("Posted"))+" : "+o(a.localDateTime(s.created_at)),1),z])])]))),128)),c.messages.total==0?(e(),n("div",E,o(a.__("No record found")),1)):l("",!0),c.messages.data.length>0?(e(),k(r,{key:1,links:c.messages.links},null,8,["links"])):l("",!0)],64)}const Q=v(f,[["render",S]]);export{Q as D};

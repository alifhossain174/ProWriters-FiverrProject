import{S as _}from"./Star.0d2fcf73.js";import{A as h}from"./AttachmentList.ddbfaab7.js";import{_ as u,c as a,b as t,t as s,a as r,d as m,r as i,o as c}from"./app.7185dbf0.js";import"./bootstrap.esm.2333d793.js";const k={props:["task","data"],components:{Star:_,AttachmentList:h},data(){return{comment:this.task.submitted_works?this.task.submitted_works[0]:[]}}},b={key:0,class:"card mb-4"},p={class:"card-header"},f={class:"text-muted"},v={class:"card-body"},w={class:"fs-8"},y=["innerHTML"],g={key:0,class:"mt-3"},A=t("hr",null,null,-1),D={class:"mb-4"},L={key:0,class:"card-footer"},S={class:"text-muted mb-2"},B={key:1,class:"text-center border p-4 text-info mb-4"};function N(e,T,o,V,n,x){const d=i("AttachmentList"),l=i("Star");return o.data.allow.download_work?(c(),a("div",b,[t("div",p,[t("div",null,s(e.__("Download Work")),1),t("small",f,s(e.__("Posted"))+" : "+s(e.localDateTime(n.comment.created_at)),1)]),t("div",v,[t("div",w,[t("div",{class:"text-break nl2br",innerHTML:n.comment.message},null,8,y),n.comment.attachments.length>0?(c(),a("div",g,[A,t("div",D,s(e.__("Attachments")),1),r(d,{attachments:n.comment.attachments},null,8,["attachments"])])):m("",!0)]),o.task.show_rating?(c(),a("div",L,[t("small",S,s(e.__("Rating by customer"))+" :",1),r(l,{number:o.task.rating.number,comment:o.task.rating.comment},null,8,["number","comment"])])):m("",!0)])])):(c(),a("div",B,s(e.__("Download link of the content will appear here once it is ready")),1))}const E=u(k,[["render",N]]);export{E as default};

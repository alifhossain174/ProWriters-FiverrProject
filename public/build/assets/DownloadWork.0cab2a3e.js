import{S as l}from"./Star.5d36ca4d.js";import{A as h}from"./AttachmentList.7d74ac80.js";import{_ as u,c as a,b as e,t as s,a as r,d as m,r as i,o as c}from"./app.f21ad38e.js";import"./bootstrap.esm.2333d793.js";const k={props:["task"],components:{Star:l,AttachmentList:h},data(){var t;return{comment:(t=this.task.submitted_works[0])!=null?t:[]}}},p={key:0,class:"card"},b={class:"card-header"},f={class:"text-muted"},v={class:"card-body"},g={class:"fs-8"},y=["innerHTML"],w={key:0,class:"mt-3"},A=e("hr",null,null,-1),D={class:"mb-4"},L={key:0,class:"card-footer"},S={class:"text-muted mb-2"},B={key:1,class:"text-center border p-4 text-danger"};function N(t,T,o,V,n,x){const d=i("AttachmentList"),_=i("Star");return o.task.submitted_works.length>0?(c(),a("div",p,[e("div",b,[e("div",null,s(t.__("Download Work")),1),e("small",f,s(t.__("Posted"))+" : "+s(t.localDateTime(n.comment.created_at)),1)]),e("div",v,[e("div",g,[e("div",{class:"text-break nl2br",innerHTML:n.comment.message},null,8,y),n.comment.attachments.length>0?(c(),a("div",w,[A,e("div",D,s(t.__("Attachments")),1),r(d,{attachments:n.comment.attachments},null,8,["attachments"])])):m("",!0)]),o.task.show_rating?(c(),a("div",L,[e("small",S,s(t.__("Rating"))+" :",1),r(_,{number:o.task.rating.number,comment:o.task.rating.comment},null,8,["number","comment"])])):m("",!0)])])):(c(),a("div",B,s(t.__("Download link of your content will appear here once it is ready")),1))}const E=u(k,[["render",N]]);export{E as default};

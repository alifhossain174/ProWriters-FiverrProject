import{S as k}from"./Star.5ca0ea28.js";import{A as f}from"./AttachmentList.62abc988.js";import{_ as b,c as a,b as e,t as o,a as r,d as i,w as d,r as _,o as n,f as m}from"./app.9acdbdf3.js";import"./bootstrap.esm.2333d793.js";const v={props:["task","data"],components:{Star:k,AttachmentList:f},data(){return{comment:this.task.submitted_works?this.task.submitted_works[0]:[]}}},w={key:0,class:"card mb-4"},g={class:"card-header"},y={class:"text-muted"},p={class:"card-body"},L={class:"fs-8"},A=["innerHTML"],S={key:0,class:"mt-3"},D=e("hr",null,null,-1),N={class:"mb-4"},T={key:0,class:"card-footer"},V=e("i",{class:"fas fa-check-circle"},null,-1),B=e("i",{class:"fa-solid fa-pen-to-square"},null,-1),C={key:1,class:"card-footer"},q=e("i",{class:"fa-regular fa-star"},null,-1),H={key:2,class:"card-footer"},M={class:"text-muted mb-2"},R={key:1,class:"text-center border p-4 text-danger"};function W(t,E,s,P,c,j){const u=_("AttachmentList"),l=_("Link"),h=_("Star");return s.data.allow.download_work?(n(),a("div",w,[e("div",g,[e("div",null,o(t.__("Download Work")),1),e("small",y,o(t.__("Posted"))+" : "+o(t.localDateTime(c.comment.created_at)),1)]),e("div",p,[e("div",L,[e("div",{class:"text-break nl2br",innerHTML:c.comment.message},null,8,A),c.comment.attachments.length>0?(n(),a("div",S,[D,e("div",N,o(t.__("Attachments")),1),r(u,{attachments:c.comment.attachments},null,8,["attachments"])])):i("",!0)]),s.task.allowed_to_accept_or_revise?(n(),a("div",T,[r(l,{href:t.route("customer.tasks.content.accept",s.task.uuid),method:"post",as:"button",type:"button",class:"btn btn-sm btn-primary me-2"},{default:d(()=>[V,m(" "+o(t.__("Accept")),1)]),_:1},8,["href"]),r(l,{href:t.route("customer.tasks.revisions.create",s.task.uuid),class:"btn btn-sm btn-outline-danger me-2"},{default:d(()=>[B,m(" "+o(t.__("Request for revision")),1)]),_:1},8,["href"])])):i("",!0),s.task.allow_customer_to_submit_rating?(n(),a("div",C,[r(l,{class:"btn btn-sm btn-dark",href:t.route("customer.tasks.ratings.create",s.task.uuid)},{default:d(()=>[q,m(" "+o(t.__("Submit your rating")),1)]),_:1},8,["href"])])):i("",!0),s.task.show_rating?(n(),a("div",H,[e("small",M,o(t.__("Rating"))+" :",1),r(h,{number:s.task.rating.number,comment:s.task.rating.comment},null,8,["number","comment"])])):i("",!0)])])):(n(),a("div",R,o(t.__("Download link of your content will appear here once it is ready")),1))}const J=b(v,[["render",W]]);export{J as default};

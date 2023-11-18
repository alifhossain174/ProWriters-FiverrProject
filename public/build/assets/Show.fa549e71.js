import v from"./TaskShowLayout.c70b902e.js";import w from"./AcademicWritingBrief.57131a21.js";import b from"./ContentWritingBrief.43699e67.js";import y from"./ResumeWritingBrief.889c6ef6.js";import{A as W}from"./AttachmentList.05c37f73.js";import{_ as T,c as C,a as i,b as e,w as m,A as c,d as o,t as r,F as L,r as s,o as n,f as _}from"./app.2f940534.js";import"./Countdown.39747f42.js";import"./bootstrap.esm.2333d793.js";import"./AdditionalServiceSection.720b5c5b.js";const N={props:["task","data"],components:{TaskShowLayout:v,AcademicWritingBrief:w,ContentWritingBrief:b,ResumeWritingBrief:y,AttachmentList:W},methods:{acceptTask(){let a=this;this.confirmDialog(this.__("Accept"),function(){a.$inertia.post(route("freelancer.find.work.accept",a.task.uuid))})}}},V={class:"container page-container"},R=e("i",{class:"fa-sharp fa-solid fa-rocket"},null,-1),S=e("i",{class:"fa-solid fa-arrow-left-long"},null,-1),x={class:"row"},D={class:"col-md-12"},F={class:"row"},H={class:"col-md-12"},P={class:"mb-4"};function E(a,d,t,j,q,l){const f=s("AppHead"),k=s("Link"),u=s("PageTitle"),h=s("AcademicWritingBrief"),g=s("ContentWritingBrief"),p=s("ResumeWritingBrief"),B=s("AttachmentList");return n(),C(L,null,[i(f,{title:t.data.title},null,8,["title"]),e("div",V,[i(u,{title:t.data.title},{default:m(()=>[e("button",{type:"button",class:"btn btn-sm btn-success me-2",onClick:d[0]||(d[0]=(...A)=>l.acceptTask&&l.acceptTask(...A))},[R,_(" "+r(a.__("Accept this task")),1)]),i(k,{class:"btn btn-sm btn-light",href:a.route("freelancer.tasks.index")},{default:m(()=>[S,_(" "+r(a.__("Back to Tasks")),1)]),_:1},8,["href"])]),_:1},8,["title"]),e("div",x,[e("div",D,[t.task.service_id==t.data.service_types.academic_writing?(n(),c(h,{key:0,task:t.task,data:t.data},null,8,["task","data"])):o("",!0),t.task.service_id==t.data.service_types.content_writing?(n(),c(g,{key:1,task:t.task,data:t.data},null,8,["task","data"])):o("",!0),t.task.service_id==t.data.service_types.resume_writing?(n(),c(p,{key:2,task:t.task,data:t.data},null,8,["task","data"])):o("",!0)])]),e("div",F,[e("div",H,[e("h5",P,r(a.__("Attachments")),1),i(B,{attachments:t.task.attachments},null,8,["attachments"])])])])],64)}const X=T(N,[["render",E]]);export{X as default};

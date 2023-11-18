import g from"./TaskShowLayout.186b234a.js";import b from"./DownloadWork.0371b52b.js";import w from"./AcademicWritingBrief.d7a5088e.js";import v from"./ContentWritingBrief.ec431c80.js";import y from"./ResumeWritingBrief.da12ff3c.js";import{_ as B,A as a,w as i,r as o,o as n,d as s,b as r,a as W,f as c,t as d}from"./app.571265cd.js";import"./Countdown.02efd5b0.js";import"./bootstrap.esm.2333d793.js";import"./Star.6efe77c3.js";import"./AttachmentList.af84832e.js";import"./AdditionalServiceSection.8dd57d2d.js";const D={props:["task","data"],components:{TaskShowLayout:g,AcademicWritingBrief:w,ContentWritingBrief:v,ResumeWritingBrief:y,DownloadWork:b}},L={class:"d-flex flex-row-reverse bd-highlight mb-4"},C=r("i",{class:"fa-solid fa-arrow-left-long"},null,-1),T=r("i",{class:"fa-solid fa-box-archive"},null,-1),x=r("i",{class:"fa-solid fa-box-open"},null,-1),A=r("i",{class:"fa-regular fa-clock"},null,-1);function S(e,N,t,V,R,E){const u=o("DownloadWork"),l=o("Link"),m=o("DialogLink"),k=o("AcademicWritingBrief"),_=o("ContentWritingBrief"),f=o("ResumeWritingBrief"),h=o("TaskShowLayout");return n(),a(h,{task:t.task,activeTab:"general"},{default:i(()=>[t.data.allow.download_work?(n(),a(u,{key:0,task:t.task},null,8,["task"])):s("",!0),r("div",L,[W(l,{class:"btn btn-sm btn-light",href:e.route("customer.tasks.index")},{default:i(()=>[C,c(" "+d(e.__("Back to Tasks")),1)]),_:1},8,["href"]),t.data.allow.archiving?(n(),a(l,{key:0,class:"btn btn-sm btn-secondary me-2",href:e.route("customer.tasks.archive",t.task.uuid),method:"post",as:"button",type:"button","preserve-scroll":""},{default:i(()=>[T,c(" "+d(e.__("Archive")),1)]),_:1},8,["href"])):s("",!0),t.data.allow.unarchiving?(n(),a(l,{key:1,class:"btn btn-sm btn-warning me-2",href:e.route("customer.tasks.unarchive",t.task.uuid),method:"post",as:"button",type:"button","preserve-scroll":""},{default:i(()=>[x,c(" "+d(e.__("Unarchive")),1)]),_:1},8,["href"])):s("",!0),t.data.allow.extending_deadline?(n(),a(m,{key:2,class:"btn btn-sm btn-success me-2",href:e.route("customer.tasks.extend.deadline",t.task.uuid)},{default:i(()=>[A,c(" "+d(e.__("Extend Deadline")),1)]),_:1},8,["href"])):s("",!0)]),t.task.service_id==t.data.service_types.academic_writing?(n(),a(k,{key:1,task:t.task,data:t.data},null,8,["task","data"])):s("",!0),t.task.service_id==t.data.service_types.content_writing?(n(),a(_,{key:2,task:t.task,data:t.data},null,8,["task","data"])):s("",!0),t.task.service_id==t.data.service_types.resume_writing?(n(),a(f,{key:3,task:t.task,data:t.data},null,8,["task","data"])):s("",!0)]),_:1},8,["task"])}const O=B(D,[["render",S]]);export{O as default};

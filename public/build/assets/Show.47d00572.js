import b from"./TaskShowLayout.7a493cea.js";import g from"./AcademicWritingBrief.2554cec2.js";import w from"./ContentWritingBrief.e7c79b29.js";import v from"./ResumeWritingBrief.a9c6b4ad.js";import{_ as y,A as a,w as i,r,o as s,b as o,a as B,f as l,t as c,d as n}from"./app.40136f18.js";import"./Countdown.ecd1ee44.js";import"./bootstrap.esm.2333d793.js";import"./AdditionalServiceSection.cfc97da6.js";const W={props:["task","data"],components:{TaskShowLayout:b,AcademicWritingBrief:g,ContentWritingBrief:w,ResumeWritingBrief:v},computed:{isStartWorkingButtonEnabled(){return this.data.statuses_allows_start_working.includes(this.task.task_status_id)},isSubmitWorkButtonEnabled(){return this.data.statuses_allows_submitting_work.includes(this.task.task_status_id)}}},S={class:"d-flex flex-row-reverse bd-highlight"},L=o("i",{class:"fa-solid fa-arrow-left-long"},null,-1),C=o("i",{class:"fa-solid fa-box-archive"},null,-1),T=o("i",{class:"fa-solid fa-box-open"},null,-1),A=o("i",{class:"fas fa-rocket"},null,-1),E=o("i",{class:"fas fa-file-upload"},null,-1);function N(e,V,t,D,R,d){const u=r("Link"),_=r("DialogLink"),k=r("AcademicWritingBrief"),f=r("ContentWritingBrief"),m=r("ResumeWritingBrief"),h=r("TaskShowLayout");return s(),a(h,{task:t.task,activeTab:"general"},{default:i(()=>[o("div",S,[B(u,{class:"btn btn-sm btn-light",href:e.route("freelancer.tasks.index")},{default:i(()=>[L,l(" "+c(e.__("Back to Tasks")),1)]),_:1},8,["href"]),t.data.allow.archiving?(s(),a(u,{key:0,class:"btn btn-sm btn-outline-secondary me-2",href:e.route("freelancer.tasks.archive",t.task.uuid),method:"post",as:"button",type:"button","preserve-scroll":""},{default:i(()=>[C,l(" "+c(e.__("Archive")),1)]),_:1},8,["href"])):n("",!0),t.data.allow.unarchiving?(s(),a(u,{key:1,class:"btn btn-sm btn-outline-warning me-2",href:e.route("freelancer.tasks.unarchive",t.task.uuid),method:"post",as:"button",type:"button","preserve-scroll":""},{default:i(()=>[T,l(" "+c(e.__("Unarchive")),1)]),_:1},8,["href"])):n("",!0),d.isStartWorkingButtonEnabled?(s(),a(u,{key:2,class:"btn btn-sm btn-success me-2",href:e.route("freelancer.tasks.start_working",t.task.uuid),method:"post",as:"button",type:"button"},{default:i(()=>[A,l(" "+c(e.__("Start Working")),1)]),_:1},8,["href"])):n("",!0),d.isSubmitWorkButtonEnabled?(s(),a(_,{key:3,href:t.data.urls.submit_work,class:"btn btn-sm btn-primary me-2"},{default:i(()=>[E,l(" "+c(e.__("Submit Work")),1)]),_:1},8,["href"])):n("",!0)]),t.task.service_id==t.data.service_types.academic_writing?(s(),a(k,{key:0,task:t.task,data:t.data},null,8,["task","data"])):n("",!0),t.task.service_id==t.data.service_types.content_writing?(s(),a(f,{key:1,task:t.task,data:t.data},null,8,["task","data"])):n("",!0),t.task.service_id==t.data.service_types.resume_writing?(s(),a(m,{key:2,task:t.task,data:t.data},null,8,["task","data"])):n("",!0)]),_:1},8,["task"])}const H=y(W,[["render",N]]);export{H as default};

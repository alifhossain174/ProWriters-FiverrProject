import y from"./TaskShowLayout.ff79e48b.js";import w from"./AcademicWritingBrief.df684c0a.js";import B from"./ContentWritingBrief.15785cd0.js";import C from"./ResumeWritingBrief.d674fa77.js";import{_ as W,A as r,w as s,r as l,o,b as a,a as u,f as i,t as n,c as A,d}from"./app.571265cd.js";import"./Countdown.02efd5b0.js";import"./bootstrap.esm.2333d793.js";import"./AdditionalServiceSection.ef31fa61.js";const L={props:["task","data"],components:{TaskShowLayout:y,AcademicWritingBrief:w,ContentWritingBrief:B,ResumeWritingBrief:C},methods:{destroy(){this.deleteConfirmDialog(this,route("admin.tasks.destroy",this.task.uuid))}}},D={class:"d-flex justify-content-between flex-sm-row flex-column"},S=a("i",{class:"fa-solid fa-arrow-left-long"},null,-1),T={class:"d-flex flex-row-reverse bd-highlight mb-2"},N=a("i",{class:"fa-regular fa-clock"},null,-1),V=a("i",{class:"fa-solid fa-thumbtack"},null,-1),E=a("i",{class:"fa-solid fa-bars-progress"},null,-1),R=a("i",{class:"fa-regular fa-pen-to-square"},null,-1),q=["href"],j=a("i",{class:"fa-solid fa-trash-can"},null,-1),F=a("i",{class:"fa-solid fa-box-archive"},null,-1),U=a("i",{class:"fa-solid fa-box-open"},null,-1),z=a("i",{class:"fa-solid fa-pen-to-square"},null,-1);function G(e,m,t,H,I,_){const c=l("Link"),f=l("DialogLink"),k=l("AcademicWritingBrief"),h=l("ContentWritingBrief"),b=l("ResumeWritingBrief"),g=l("TaskShowLayout");return o(),r(g,{task:t.task,activeTab:"general"},{default:s(()=>[a("div",D,[a("div",null,[u(c,{class:"btn btn-sm btn-light",href:e.route("admin.tasks.index")},{default:s(()=>[S,i(" "+n(e.__("Back to Tasks")),1)]),_:1},8,["href"])]),a("div",T,[u(f,{class:"btn btn-sm btn-outline-success me-2",href:e.route("admin.tasks.edit.dates",t.task.uuid)},{default:s(()=>[N,i(" "+n(e.__("Change Deadline")),1)]),_:1},8,["href"]),u(f,{href:e.route("admin.tasks.edit.assignee",t.task.uuid),class:"btn btn-sm btn-outline-success me-2"},{default:s(()=>[V,i(" "+n(e.__("Assign Freelancer")),1)]),_:1},8,["href"]),u(f,{href:e.route("admin.tasks.edit.status",t.task.uuid),class:"btn btn-sm btn-outline-success me-2"},{default:s(()=>[E,i(" "+n(e.__("Change Status")),1)]),_:1},8,["href"]),u(f,{href:e.route("admin.tasks.edit.editor",t.task.uuid),class:"btn btn-sm btn-outline-success me-2"},{default:s(()=>[R,i(" "+n(e.__("Assign Editor")),1)]),_:1},8,["href"]),t.task.invoice_id?d("",!0):(o(),A("button",{key:0,onClick:m[0]||(m[0]=(...v)=>_.destroy&&_.destroy(...v)),class:"btn btn-sm btn-outline-danger me-2",href:e.route("admin.tasks.edit",t.task.uuid)},[j,i(" "+n(e.__("Delete")),1)],8,q)),t.data.allow.archiving?(o(),r(c,{key:1,class:"btn btn-sm btn-outline-secondary me-2",href:e.route("admin.tasks.archive",t.task.uuid),method:"post",as:"button",type:"button","preserve-scroll":""},{default:s(()=>[F,i(" "+n(e.__("Archive")),1)]),_:1},8,["href"])):d("",!0),t.data.allow.unarchiving?(o(),r(c,{key:2,class:"btn btn-sm btn-outline-warning me-2",href:e.route("admin.tasks.unarchive",t.task.uuid),method:"post",as:"button",type:"button","preserve-scroll":""},{default:s(()=>[U,i(" "+n(e.__("Unarchive")),1)]),_:1},8,["href"])):d("",!0),t.task.invoice_id?d("",!0):(o(),r(c,{key:3,class:"btn btn-sm btn-outline-primary me-2",href:e.route("admin.tasks.edit",t.task.uuid)},{default:s(()=>[z,i(" "+n(e.__("Edit")),1)]),_:1},8,["href"]))])]),t.task.service_id==t.data.service_types.academic_writing?(o(),r(k,{key:0,task:t.task,data:t.data},null,8,["task","data"])):d("",!0),t.task.service_id==t.data.service_types.content_writing?(o(),r(h,{key:1,task:t.task,data:t.data},null,8,["task","data"])):d("",!0),t.task.service_id==t.data.service_types.resume_writing?(o(),r(b,{key:2,task:t.task,data:t.data},null,8,["task","data"])):d("",!0)]),_:1},8,["task"])}const Z=W(L,[["render",G]]);export{Z as default};
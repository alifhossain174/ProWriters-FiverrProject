import d from"./BidLayout.bdccb97e.js";import _ from"./AcademicWritingBrief.b6643a24.js";import m from"./ContentWritingBrief.bd7098e8.js";import f from"./ResumeWritingBrief.1f9b3cf8.js";import{_ as u,A as e,w as k,r as i,o as a,d as n}from"./app.9acdbdf3.js";import"./bootstrap.esm.2333d793.js";import"./AdditionalServiceSection.dfbf4347.js";const B={props:["bid_request","data","task"],components:{BidLayout:d,AcademicWritingBrief:_,ContentWritingBrief:m,ResumeWritingBrief:f}};function g(l,y,t,W,v,b){const r=i("AcademicWritingBrief"),o=i("ContentWritingBrief"),s=i("ResumeWritingBrief"),c=i("BidLayout");return a(),e(c,{bid_request:t.bid_request,activeTab:"brief"},{default:k(()=>[t.task.service_id==t.data.service_types.academic_writing?(a(),e(r,{key:0,task:t.task,data:t.data},null,8,["task","data"])):n("",!0),t.task.service_id==t.data.service_types.content_writing?(a(),e(o,{key:1,task:t.task,data:t.data},null,8,["task","data"])):n("",!0),t.task.service_id==t.data.service_types.resume_writing?(a(),e(s,{key:2,task:t.task,data:t.data},null,8,["task","data"])):n("",!0)]),_:1},8,["bid_request"])}const h=u(B,[["render",g]]);export{h as default};

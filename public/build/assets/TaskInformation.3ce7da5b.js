import d from"./BidLayout.f6bd616b.js";import _ from"./AcademicWritingBrief.3fafa617.js";import m from"./ContentWritingBrief.b0cd26f3.js";import f from"./ResumeWritingBrief.072e566d.js";import{_ as u,g as e,y as k,f as i,o as a,h as n}from"./app.b345893e.js";import"./bootstrap.esm.2333d793.js";import"./AdditionalServiceSection.5a81a032.js";const B={props:["bid_request","data","task"],components:{BidLayout:d,AcademicWritingBrief:_,ContentWritingBrief:m,ResumeWritingBrief:f}};function g(l,y,t,W,v,b){const r=i("AcademicWritingBrief"),o=i("ContentWritingBrief"),s=i("ResumeWritingBrief"),c=i("BidLayout");return a(),e(c,{bid_request:t.bid_request,activeTab:"brief"},{default:k(()=>[t.task.service_id==t.data.service_types.academic_writing?(a(),e(r,{key:0,task:t.task,data:t.data},null,8,["task","data"])):n("",!0),t.task.service_id==t.data.service_types.content_writing?(a(),e(o,{key:1,task:t.task,data:t.data},null,8,["task","data"])):n("",!0),t.task.service_id==t.data.service_types.resume_writing?(a(),e(s,{key:2,task:t.task,data:t.data},null,8,["task","data"])):n("",!0)]),_:1},8,["bid_request"])}const R=u(B,[["render",g]]);export{R as default};
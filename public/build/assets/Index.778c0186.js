import m from"./TaskShowLayout.1fd61b01.js";import d from"./AcademicWritingFinancial.f1879790.js";import k from"./ContentWritingFinancial.4dede8f8.js";import l from"./ResumeWritingFinancial.d1efc5b0.js";import{_ as u,g as a,y as f,f as n,o as e,b as c,h as i}from"./app.f4b2b251.js";import"./Countdown.b6097b39.js";import"./bootstrap.esm.2333d793.js";const g={props:["data","task"],components:{TaskShowLayout:m,AcademicWritingFinancial:d,ContentWritingFinancial:k,ResumeWritingFinancial:l},data(){return{}}},y={class:"row justify-content-center"},v={class:"col-md-6"};function F(W,h,t,w,C,p){const s=n("AcademicWritingFinancial"),o=n("ContentWritingFinancial"),r=n("ResumeWritingFinancial"),_=n("TaskShowLayout");return e(),a(_,{task:t.task,activeTab:"financial"},{default:f(()=>[c("div",y,[c("div",v,[t.task.service_id==t.data.service_types.academic_writing?(e(),a(s,{key:0,task:t.task},null,8,["task"])):i("",!0),t.task.service_id==t.data.service_types.content_writing?(e(),a(o,{key:1,task:t.task},null,8,["task"])):i("",!0),t.task.service_id==t.data.service_types.resume_writing?(e(),a(r,{key:2,task:t.task},null,8,["task"])):i("",!0)])])]),_:1},8,["task"])}const b=u(g,[["render",F]]);export{b as default};

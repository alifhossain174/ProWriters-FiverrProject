import k from"./TaskShowLayout.25326375.js";import{C as l}from"./CommentMessage.78ea9da2.js";import{_ as u,A as b,w as c,r as o,o as a,c as i,b as s,t as n,a as r,f}from"./app.2022c6b3.js";import"./Countdown.906f9038.js";import"./bootstrap.esm.2333d793.js";import"./AttachmentList.d832300e.js";const h={props:["task","data","tab"],components:{TaskShowLayout:k,CommentMessage:l}},p={key:0},y={class:"btask mt-2 fs-8"},v={class:"bg-light p-2"},g={class:"card"},w={class:"card-body"},T={key:1,class:"text-center"};function C(e,S,t,L,B,x){const m=o("CommentMessage"),_=o("DialogLink"),d=o("TaskShowLayout");return a(),b(d,{task:t.task,activeTab:t.tab},{default:c(()=>[t.task.submitted_works?(a(),i("div",p,[s("div",y,[s("div",v,n(e.__("Submitted Work")),1),s("div",g,[s("div",w,[r(m,{comment:t.task.submitted_works[0]},null,8,["comment"])])])]),r(_,{href:e.route("admin.tasks.qa.create",t.task.uuid),class:"btn btn-primary btn-success"},{default:c(()=>[f(n(e.__("Submit your feedback")),1)]),_:1},8,["href"])])):(a(),i("div",T,n(e.__("There is no work for QA yet")),1))]),_:1},8,["task","activeTab"])}const E=u(h,[["render",C]]);export{E as default};

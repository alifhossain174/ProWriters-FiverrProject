import d from"./TaskShowLayout.ba7c44b9.js";import{D as l}from"./DiscussionBoard.726892ec.js";import{_,A as u,w as n,r as e,o as f,b as s,t as o,a as c,f as p}from"./app.f21ad38e.js";import"./Countdown.761bbdf8.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.2f3d7fa4.js";import"./AttachmentList.7d74ac80.js";const k={props:["task","data","messages","tab"],components:{TaskShowLayout:d,DiscussionBoard:l}},b={class:"d-flex justify-content-between"},g={class:"text-muted"};function h(t,w,a,D,v,y){const i=e("DialogLink"),r=e("DiscussionBoard"),m=e("TaskShowLayout");return f(),u(m,{task:a.task,activeTab:a.tab},{default:n(()=>[s("div",b,[s("div",null,[s("h4",null,o(t.__("Messages")),1),s("p",g,[s("small",null,o(t.__("Sorted based on most recent comment")),1)])]),s("div",null,[c(i,{href:a.data.urls.new_message,class:"btn btn-sm btn-primary"},{default:n(()=>[p(o(t.__("New Message")),1)]),_:1},8,["href"])])]),c(r,{messages:a.messages,data:a.data},null,8,["messages","data"])]),_:1},8,["task","activeTab"])}const C=_(k,[["render",h]]);export{C as default};

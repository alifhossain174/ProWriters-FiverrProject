import r from"./TaskShowLayout.9581becf.js";import{D as m}from"./DiscussionBoard.ec3da740.js";import{_,g as u,y as o,f as s,o as f,b as a,t as e,a as n,d as k}from"./app.f4b2b251.js";import"./Countdown.b6097b39.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.8eecb841.js";import"./AttachmentList.bce7c7f6.js";const b={props:["task","data","messages","tab"],components:{TaskShowLayout:r,DiscussionBoard:m}},g={class:"d-flex justify-content-between"},h={class:"text-muted"};function p(i,w,t,x,y,D){const c=s("DialogLink"),d=s("DiscussionBoard"),l=s("TaskShowLayout");return f(),u(l,{task:t.task,activeTab:t.tab},{default:o(()=>[a("div",g,[a("div",null,[a("h4",null,e(t.data.title),1),a("p",h,[a("small",null,e(t.data.sub_title),1)])]),a("div",null,[n(c,{href:t.data.urls.new_message,class:"btn btn-sm btn-primary"},{default:o(()=>[k(e(i.__("New Message")),1)]),_:1},8,["href"])])]),n(d,{messages:t.messages,data:t.data},null,8,["messages","data"])]),_:1},8,["task","activeTab"])}const C=_(b,[["render",p]]);export{C as default};

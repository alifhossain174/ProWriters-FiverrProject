import d from"./TaskShowLayout.ca690c73.js";import{D as m}from"./DiscussionBoard.8b7aba4e.js";import{_,A as u,w as o,r as s,o as f,b as a,t as e,a as n,f as k}from"./app.9acdbdf3.js";import"./Countdown.8d145ebe.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.ebf8a665.js";import"./AttachmentList.62abc988.js";const b={props:["task","data","messages","tab"],components:{TaskShowLayout:d,DiscussionBoard:m}},h={class:"d-flex justify-content-between"},p={class:"text-muted"};function g(i,w,t,x,D,v){const c=s("DialogLink"),l=s("DiscussionBoard"),r=s("TaskShowLayout");return f(),u(r,{task:t.task,activeTab:t.tab},{default:o(()=>[a("div",h,[a("div",null,[a("h4",null,e(t.data.title),1),a("p",p,[a("small",null,e(t.data.sub_title),1)])]),a("div",null,[n(c,{href:t.data.urls.new_message,class:"btn btn-sm btn-primary"},{default:o(()=>[k(e(i.__("New Message")),1)]),_:1},8,["href"])])]),n(l,{messages:t.messages,data:t.data},null,8,["messages","data"])]),_:1},8,["task","activeTab"])}const C=_(b,[["render",g]]);export{C as default};
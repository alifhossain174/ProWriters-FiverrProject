import d from"./TaskShowLayout.9d3b9598.js";import{D as m}from"./DiscussionBoard.4b9d74c5.js";import{_,A as u,w as o,r as s,o as f,b as a,t as e,a as n,f as k}from"./app.2abe2877.js";import"./Countdown.cf65ad67.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.2b29f722.js";import"./AttachmentList.b0774401.js";const b={props:["task","data","messages","tab"],components:{TaskShowLayout:d,DiscussionBoard:m}},h={class:"d-flex justify-content-between"},p={class:"text-muted"};function g(i,w,t,x,D,v){const c=s("DialogLink"),l=s("DiscussionBoard"),r=s("TaskShowLayout");return f(),u(r,{task:t.task,activeTab:t.tab},{default:o(()=>[a("div",h,[a("div",null,[a("h4",null,e(t.data.title),1),a("p",p,[a("small",null,e(t.data.sub_title),1)])]),a("div",null,[n(c,{href:t.data.urls.new_message,class:"btn btn-sm btn-primary"},{default:o(()=>[k(e(i.__("New Message")),1)]),_:1},8,["href"])])]),n(l,{messages:t.messages,data:t.data},null,8,["messages","data"])]),_:1},8,["task","activeTab"])}const C=_(b,[["render",g]]);export{C as default};

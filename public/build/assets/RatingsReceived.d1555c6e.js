import{P as g}from"./Pagination.3a5daa99.js";import{S as v}from"./Star.6efe77c3.js";import{_ as b,c,a as l,b as e,F as r,q as N,A as P,d,t as i,r as s,o as n,f as m,w as S}from"./app.571265cd.js";import"./bootstrap.esm.2333d793.js";const w={components:{Pagination:g,Star:v},props:["data","ratings","filters"],data(){return{tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-5"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Earnings"),className:"col-md-2 text-end"}]}}}},x={class:"container page-container"},T={class:"row"},y={class:"col-md-12"},A={class:"row mb-2"},B={class:"col-md-6"},D={class:"col-md-6 text-end"},V={class:"text-muted"},C={key:1,class:"text-center"};function L(o,E,t,F,H,R){const _=s("AppHead"),u=s("PageTitle"),h=s("Link"),f=s("Star"),k=s("Pagination");return n(),c(r,null,[l(_,{title:t.data.title},null,8,["title"]),e("div",x,[l(u,{title:t.data.title},null,8,["title"]),e("div",T,[e("div",y,[(n(!0),c(r,null,N(t.ratings.data,(a,p)=>(n(),c("div",{class:"border mb-4 p-4",key:p},[e("div",A,[e("div",B,[m(i(o.__("Associated Task"))+" : ",1),l(h,{href:o.route("freelancer.tasks.show",a.task.uuid)},{default:S(()=>[m(i(a.task.number),1)]),_:2},1032,["href"])]),e("div",D,[e("small",V,i(o.localDateTime(a.created_at)),1)])]),l(f,{number:a.number,comment:a.comment},null,8,["number","comment"])]))),128)),t.ratings.total>0?(n(),P(k,{key:0,total:t.ratings.total,links:t.ratings.links},null,8,["total","links"])):d("",!0),t.ratings.total==0?(n(),c("div",C,i(o.__("No record found")),1)):d("",!0)])])])],64)}const G=b(w,[["render",L]]);export{G as default};

import{P as g}from"./Pagination.109538d8.js";import{S as v}from"./Star.a1a7b4b1.js";import{_ as b,c,a as i,b as e,F as r,r as N,g as P,h as d,t as l,f as s,o,d as m,y as S}from"./app.b345893e.js";import"./bootstrap.esm.2333d793.js";const x={components:{Pagination:g,Star:v},props:["data","ratings","filters"],data(){return{tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-5"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Earnings"),className:"col-md-2 text-end"}]}}}},y={class:"container page-container"},T={class:"row"},w={class:"col-md-12"},B={class:"row mb-2"},D={class:"col-md-6"},V={class:"col-md-6 text-end"},A={class:"text-muted"},C={key:1,class:"text-center"};function L(n,E,t,F,H,R){const _=s("AppHead"),u=s("PageTitle"),h=s("Link"),k=s("Star"),f=s("Pagination");return o(),c(r,null,[i(_,{title:t.data.title},null,8,["title"]),e("div",y,[i(u,{title:t.data.title},null,8,["title"]),e("div",T,[e("div",w,[(o(!0),c(r,null,N(t.ratings.data,(a,p)=>(o(),c("div",{class:"border mb-4 p-4",key:p},[e("div",B,[e("div",D,[m(l(n.__("Associated Task"))+" : ",1),i(h,{href:n.route("author.tasks.show",a.task.uuid)},{default:S(()=>[m(l(a.task.number),1)]),_:2},1032,["href"])]),e("div",V,[e("small",A,l(n.localDateTime(a.created_at)),1)])]),i(k,{number:a.number,comment:a.comment},null,8,["number","comment"])]))),128)),t.ratings.total>0?(o(),P(f,{key:0,total:t.ratings.total,links:t.ratings.links},null,8,["total","links"])):d("",!0),t.ratings.total==0?(o(),c("div",C,l(n.__("No record found")),1)):d("",!0)])])])],64)}const G=b(x,[["render",L]]);export{G as default};

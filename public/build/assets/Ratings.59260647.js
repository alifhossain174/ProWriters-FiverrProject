import{P as b}from"./Pagination.71bd4807.js";import{S as N}from"./Star.5dd848b9.js";import{_ as g,c as i,a as n,b as t,F as _,q as w,A as P,d as u,t as a,r as c,o as d,f as l,w as m}from"./app.707c49f0.js";import"./bootstrap.esm.2333d793.js";const S={components:{Pagination:b,Star:N},props:["data","ratings"],data(){return{tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-5"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Earnings"),className:"col-md-2 text-end"}]}}}},A={class:"container page-container"},T={class:"row"},y={class:"col-md-12"},B={class:"row"},C={class:"col-md-6 mb-3 mb-md-0"},D={class:"col-md-6 text-start text-md-end"},V=t("div",{class:"col-md-12"},[t("hr")],-1),x={class:"row mb-2"},L={class:"col-md-6"},E={class:"col-md-6 text-end"},F={class:"text-muted"},H={key:1,class:"text-center"};function q(s,O,o,R,j,z){const h=c("AppHead"),f=c("PageTitle"),r=c("Link"),k=c("Star"),v=c("Pagination");return d(),i(_,null,[n(h,{title:o.data.title},null,8,["title"]),t("div",A,[n(f,{title:o.data.title},null,8,["title"]),t("div",T,[t("div",y,[(d(!0),i(_,null,w(o.ratings.data,(e,p)=>(d(),i("div",{class:"border mb-4 p-4",key:p},[t("div",B,[t("div",C,[t("div",null,[l(a(s.__("Customer"))+" : ",1),n(r,{href:s.route("admin.customers.show",e.task.customer.uuid)},{default:m(()=>[l(a(e.task.customer.full_name),1)]),_:2},1032,["href"])])]),t("div",D,[t("div",null,[l(a(s.__("Author"))+" : ",1),n(r,{href:s.route("admin.authors.show",e.task.author.uuid)},{default:m(()=>[l(a(e.task.author.full_name),1)]),_:2},1032,["href"])])]),V]),t("div",x,[t("div",L,[l(a(s.__("Associated Task"))+" : ",1),n(r,{href:s.route("author.tasks.show",e.task.uuid)},{default:m(()=>[l(a(e.task.number),1)]),_:2},1032,["href"])]),t("div",E,[t("small",F,a(s.localDateTime(e.created_at)),1)])]),n(k,{number:e.number,comment:e.comment},null,8,["number","comment"])]))),128)),o.ratings.total>0?(d(),P(v,{key:0,total:o.ratings.total,links:o.ratings.links},null,8,["total","links"])):u("",!0),o.ratings.total==0?(d(),i("div",H,a(s.__("No record found")),1)):u("",!0)])])])],64)}const M=g(S,[["render",q]]);export{M as default};

import{P as b}from"./Pagination.2b29f722.js";import{S as N}from"./Star.352b79b4.js";import{_ as g,c as i,a as n,b as e,F as _,q as w,A as P,d as u,t as a,r as c,o as d,f as l,w as m}from"./app.2abe2877.js";import"./bootstrap.esm.2333d793.js";const S={components:{Pagination:b,Star:N},props:["data","ratings"],data(){return{tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-5"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Earnings"),className:"col-md-2 text-end"}]}}}},T={class:"container page-container"},y={class:"row"},A={class:"col-md-12"},B={class:"row"},C={class:"col-md-6 mb-3 mb-md-0"},D={class:"col-md-6 text-start text-md-end"},V=e("div",{class:"col-md-12"},[e("hr")],-1),x={class:"row mb-2"},F={class:"col-md-6"},L={class:"col-md-6 text-end"},E={class:"text-muted"},H={key:1,class:"text-center"};function q(s,O,o,R,j,z){const h=c("AppHead"),f=c("PageTitle"),r=c("Link"),k=c("Star"),v=c("Pagination");return d(),i(_,null,[n(h,{title:o.data.title},null,8,["title"]),e("div",T,[n(f,{title:o.data.title},null,8,["title"]),e("div",y,[e("div",A,[(d(!0),i(_,null,w(o.ratings.data,(t,p)=>(d(),i("div",{class:"border mb-4 p-4",key:p},[e("div",B,[e("div",C,[e("div",null,[l(a(s.__("Customer"))+" : ",1),n(r,{href:s.route("admin.customers.show",t.task.customer.uuid)},{default:m(()=>[l(a(t.task.customer.full_name),1)]),_:2},1032,["href"])])]),e("div",D,[e("div",null,[l(a(s.__("Freelancer"))+" : ",1),n(r,{href:s.route("admin.freelancers.show",t.task.freelancer.uuid)},{default:m(()=>[l(a(t.task.freelancer.full_name),1)]),_:2},1032,["href"])])]),V]),e("div",x,[e("div",F,[l(a(s.__("Associated Task"))+" : ",1),n(r,{href:s.route("freelancer.tasks.show",t.task.uuid)},{default:m(()=>[l(a(t.task.number),1)]),_:2},1032,["href"])]),e("div",L,[e("small",E,a(s.localDateTime(t.created_at)),1)])]),n(k,{number:t.number,comment:t.comment},null,8,["number","comment"])]))),128)),o.ratings.total>0?(d(),P(v,{key:0,total:o.ratings.total,links:o.ratings.links},null,8,["total","links"])):u("",!0),o.ratings.total==0?(d(),i("div",H,a(s.__("No record found")),1)):u("",!0)])])])],64)}const M=g(S,[["render",q]]);export{M as default};

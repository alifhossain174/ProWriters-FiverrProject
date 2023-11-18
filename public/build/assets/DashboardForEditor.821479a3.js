import{T as b}from"./Table.8bd0b9d0.js";import{_ as v,c as o,a as l,b as s,t,w as r,F as h,r as c,o as a,q as g,f as k}from"./app.40136f18.js";import"./Pagination.58b232ad.js";import"./bootstrap.esm.2333d793.js";const y={props:["data"],components:{Table:b},created(){this.getStatistics("tasks"),this.getStatistics("unassigned_tasks"),this.getStatistics("submitted_for_qa")},data(){return{income_graph_records:null,statistics:{tasks:null,unassigned_tasks:null,submitted_for_qa:null},tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-2"},{name:this.__("Deadline for Freelancer"),className:"col-md-2 text-end"}]}}},methods:{getStatistics(e){let _=this;axios.post(route("admin.dashboard.statistics"),{name:e}).then(function(d){_.statistics[e]={value:d.data}})}}},C={class:"container page-container"},x={class:"row"},D={class:"col-md-12"},w=s("hr",null,null,-1),T={class:"row"},q={class:"col-md-4"},N={class:"card card-bg-indigo"},S={class:"card-body"},F={class:"float-end"},B={key:0,class:"fas fa-spinner fa-spin"},L=["textContent"],V={class:"col-md-4"},A={class:"card card-bg-red-light"},E={class:"card-body"},H={class:"float-end"},O={key:0,class:"fas fa-spinner fa-spin"},Q=["textContent"],I={class:"col-md-4"},R={class:"card card-bg-green"},U={class:"card-body"},j={class:"float-end"},z={key:0,class:"fas fa-spinner fa-spin"},G=["textContent"],J={class:"row mt-4"},K={class:"col-md-12"},M={class:"border rounded-3 p-3 mb-4"},P={class:"float-none w-auto px-3 fs-8"},W={class:"data-container"},X={class:"col-md-3"},Y={class:"text-muted"},Z={class:"col-md-2"},$={class:"col-md-2 text-end"};function ss(e,_,d,ts,n,es){const u=c("AppHead"),m=c("Link"),p=c("Table");return a(),o(h,null,[l(u,{title:d.data.title},null,8,["title"]),s("div",C,[s("div",x,[s("div",D,[s("h4",null,t(e.__("Dashboard")),1),w])]),s("div",T,[s("div",q,[s("div",N,[s("div",S,[s("h5",F,[n.statistics.tasks?(a(),o("span",{key:1,textContent:t(n.statistics.tasks.value)},null,8,L)):(a(),o("i",B))]),s("p",null,t(e.__("Tasks In progress")),1)])])]),s("div",V,[s("div",A,[s("div",E,[s("h5",H,[n.statistics.unassigned_tasks?(a(),o("span",{key:1,textContent:t(n.statistics.unassigned_tasks.value)},null,8,Q)):(a(),o("i",O))]),s("p",null,t(e.__("Unassigned")),1)])])]),s("div",I,[s("div",R,[s("div",U,[s("h5",j,[n.statistics.submitted_for_qa?(a(),o("span",{key:1,textContent:t(n.statistics.submitted_for_qa.value)},null,8,G)):(a(),o("i",z))]),s("p",null,t(e.__("Requires Quality Control")),1)])])])]),s("div",J,[s("div",K,[s("fieldset",M,[s("legend",P,t(e.__("Tasks assigned to you for Quality Control")),1),s("div",W,[l(p,{options:n.tableOptions,tableStyle:"alert table-striped"},{default:r(()=>[(a(!0),o(h,null,g(d.data.tasks,(i,f)=>(a(),o("tr",{class:"mb-2",key:f},[s("td",X,[l(m,{href:e.route("admin.tasks.show",i.uuid)},{default:r(()=>[k(t(i.number),1)]),_:2},1032,["href"]),s("div",null,[s("small",Y,t(i.service.name),1)])]),s("td",Z,t(e.localDate(i.dead_line)),1),s("td",$,t(e.localDate(i.dead_line_for_freelancer)),1)]))),128))]),_:1},8,["options"])])])])])])],64)}const ds=v(y,[["render",ss]]);export{ds as default};

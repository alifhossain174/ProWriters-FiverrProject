import{T as g}from"./Table.8bd0b9d0.js";import k from"./Search.4806e2e4.js";import{_ as v,c,a as o,b as t,w as r,F as d,r as n,o as i,q as y,f as T,t as a,d as N,E as S}from"./app.40136f18.js";import"./Pagination.58b232ad.js";import"./Input.9153dc0b.js";import"./CheckBox.f96a8f74.js";import"./Select.d1ffb357.js";import"./vanilla-picker.csp.e27d2510.js";import"./debounce.84e4095c.js";import"./bootstrap.esm.2333d793.js";const w={components:{Table:g,Search:k},props:["data","tasks","filters"],data(){return{tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-5"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Earnings"),className:"col-md-2 text-end"}]}}}},x={class:"container page-container"},C={class:"row"},D={class:"col-md-3"},V={class:"col-md-9"},A={class:"data-container"},B={class:"col-md-5"},E={class:"taskcard__workType"},L={key:0,class:"badge text-bg-dark"},F={class:"col-md-2"},H={class:"col-md-2"},O={class:"col-md-2 text-end"};function P(l,q,s,z,_,I){const m=n("AppHead"),p=n("PageTitle"),f=n("Search"),u=n("Link"),h=n("Table");return i(),c(d,null,[o(m,{title:s.data.title},null,8,["title"]),t("div",x,[o(p,{title:s.data.title},null,8,["title"]),t("div",C,[t("div",D,[o(f,{data:s.data,filters:s.filters.filters,only:["tasks","filters"]},null,8,["data","filters"])]),t("div",V,[t("div",A,[o(h,{options:_.tableOptions,links:s.tasks.links,total:s.tasks.total,tableStyle:"table-striped"},{default:r(()=>[(i(!0),c(d,null,y(s.tasks.data,(e,b)=>(i(),c("tr",{class:"mb-2",key:b},[t("td",B,[o(u,{href:l.route("freelancer.tasks.show",e.uuid)},{default:r(()=>[T(a(e.number),1)]),_:2},1032,["href"]),t("div",E,a(e.service.name),1),e.is_archived_for_freelancer?(i(),c("span",L,a(l.__("Archived")),1)):N("",!0)]),t("td",F,a(l.localDateTime(e.dead_line_for_freelancer)),1),t("td",H,[t("span",{class:"badge rounded-pill",style:S({backgroundColor:e.status.bg_color,color:e.status.color})},a(e.status.name),5)]),t("td",O,a(l.formatMoney(e.freelancer_payment_amount)),1)]))),128))]),_:1},8,["options","links","total"])])])])])],64)}const Y=v(w,[["render",P]]);export{Y as default};

import{T as v}from"./Table.17e80b9f.js";import{_ as g,c as i,a as l,b as t,w as d,t as s,F as r,r as n,o as c,f as m,q as k,B as w}from"./app.969842cf.js";import"./Pagination.7add1a6b.js";import"./bootstrap.esm.2333d793.js";const y={components:{Table:v},props:["data","bid_requests","filters"],data(){return{tableOptions:{titles:[{name:this.__("Details"),className:"col-md-6"},{name:this.__("Posted"),className:"col-md-2"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Your Budget"),className:"col-md-2 text-end"}]}}}},N={class:"container page-container"},T=t("i",{class:"fa-solid fa-plus"},null,-1),x={class:"row"},B={class:"col-md-12"},C={class:"border rounded-3 p-3 mb-4"},S={class:"float-none w-auto px-3 fs-6",style:{"margin-left":"auto","margin-right":"auto"}},D={class:"row text-center"},H={class:"col-md-4 border-end mb-2 mb-md-0"},L={class:"text-primary"},P={class:"text-muted"},R={class:"col-md-4 border-end mb-2 mb-md-0"},V={class:"text-primary"},q={class:"text-muted"},A={class:"col-md-4 mb-2 mb-md-0"},F={class:"text-primary"},O={class:"text-muted"},z={class:"row"},E={class:"col-md-12"},I={class:"col-md-6"},M={class:"text-muted"},Y={class:"col-md-2"},j={class:"col-md-2"},G={class:"col-md-2 text-end"};function J(e,K,a,Q,u,U){const h=n("AppHead"),_=n("Link"),p=n("PageTitle"),b=n("Table");return c(),i(r,null,[l(h,{title:a.data.title},null,8,["title"]),t("div",N,[l(p,{title:a.data.title},{default:d(()=>[l(_,{href:e.route("customer.bidRequests.create"),class:"btn btn-primary btn-sm"},{default:d(()=>[T,m(" "+s(e.__("New Bid Request")),1)]),_:1},8,["href"])]),_:1},8,["title"]),t("div",x,[t("div",B,[t("fieldset",C,[t("legend",S,s(e.__("How it works")),1),t("div",D,[t("div",H,[t("div",L,s(e.__("Step 1")),1),t("small",P,s(e.__("Create new bid request to receive bids from writers")),1)]),t("div",R,[t("div",V,s(e.__("Step 2")),1),t("small",q,s(e.__("Choose your writer and make a deposit")),1)]),t("div",A,[t("div",F,s(e.__("Step 3")),1),t("small",O,s(e.__("Check your paper & disburse payment")),1)])])])])]),t("div",z,[t("div",E,[l(b,{options:u.tableOptions,links:a.bid_requests.links,total:a.bid_requests.total},{default:d(()=>[(c(!0),i(r,null,k(a.bid_requests.data,(o,f)=>(c(),i("tr",{class:"mb-2",key:f},[t("td",I,[l(_,{href:e.route("customer.bidRequests.show",o.uuid)},{default:d(()=>[m(s(o.number),1)]),_:2},1032,["href"]),t("div",null,[t("small",M,s(o.task.service.name),1)]),t("div",null,s(o.task.title),1)]),t("td",Y,s(e.localDate(o.created_at)),1),t("td",j,[t("span",{class:w(["badge","text-bg-"+o.status.css_badge_name])},s(o.status.name),3)]),t("td",G,s(e.formatMoney(o.budget)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const tt=g(y,[["render",J]]);export{tt as default};

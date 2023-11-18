import{T as k}from"./Table.638f05fb.js";import N from"./SearchBidRequests.951e2dfa.js";import{_ as x,c,a,b as t,w as i,F as r,r as l,o as d,q as B,f as _,t as o,B as v}from"./app.6486bb89.js";import"./Pagination.5e3aa5eb.js";import"./Input.744111e9.js";import"./Select.0cc97eb8.js";import"./vanilla-picker.csp.273e51c7.js";import"./debounce.2741a44f.js";import"./bootstrap.esm.2333d793.js";const T={components:{Table:k,SearchBidRequest:N},props:["data","bid_requests","filters"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:"col-md-3"},{name:this.__("Posted"),className:"col-md-2"},{name:this.__("Customer"),className:"col-md-3"},{name:this.__("Status"),className:"col-md-2 text-center"},{name:this.__("Budget"),className:"col-md-2 text-end"}]}}}},S={class:"container page-container"},w={class:"row"},y={class:"col-md-3"},R={class:"col-md-9"},C={class:"col-md-3"},q={class:"text-muted"},L={class:"col-md-2"},P={class:"col-md-3"},V={class:"col-md-2 text-center"},A={class:"col-md-2 text-end"};function D(n,F,s,H,u,O){const h=l("AppHead"),f=l("PageTitle"),p=l("SearchBidRequest"),m=l("Link"),b=l("Table");return d(),c(r,null,[a(h,{title:s.data.title},null,8,["title"]),t("div",S,[a(f,{title:s.data.title},null,8,["title"]),t("div",w,[t("div",y,[a(p,{data:s.data,filters:s.filters,only:["bid_requests","filters"]},null,8,["data","filters"])]),t("div",R,[a(b,{options:u.tableOptions,links:s.bid_requests.links,total:s.bid_requests.total,tableStyle:"table-striped"},{default:i(()=>[(d(!0),c(r,null,B(s.bid_requests.data,(e,g)=>(d(),c("tr",{class:"mb-2",key:g},[t("td",C,[a(m,{href:n.route("admin.bidRequests.show",e.uuid)},{default:i(()=>[_(o(e.number),1)]),_:2},1032,["href"]),t("div",null,[t("small",q,o(e.task.service.name),1)])]),t("td",L,o(n.localDate(e.created_at)),1),t("td",P,[a(m,{href:n.route("admin.bidRequests.show",e.uuid)},{default:i(()=>[_(o(e.task.customer.full_name),1)]),_:2},1032,["href"])]),t("td",V,[t("span",{class:v(["badge","text-bg-"+e.status.css_badge_name])},o(e.status.name),3)]),t("td",A,o(n.formatMoney(e.budget)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const U=x(T,[["render",D]]);export{U as default};

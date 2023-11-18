import{T as y}from"./Table.0b433819.js";import N from"./Search.bfbb8431.js";import{_ as v,c as l,a as d,b as t,t as s,w as c,d as T,F as r,r as i,o as n,q as p,f}from"./app.f21ad38e.js";import"./Pagination.2f3d7fa4.js";import"./Input.c3d1dec4.js";import"./CheckBox.e0d5ac7d.js";import"./Select.bb2757ba.js";import"./vanilla-picker.csp.fb5c8d56.js";import"./debounce.af629436.js";import"./bootstrap.esm.2333d793.js";const q={components:{Table:y,Search:N},props:["data","bid_requests","filters"],data(){return{appliedBidTableOptions:{titles:[{name:this.__("Bid Request Number"),className:"col-md-3"},{name:this.__("Applied at"),className:"col-md-3"},{name:this.__("Bidding Amount"),className:"col-md-2  text-end"},{name:this.__("Your Earning"),className:"col-md-2 text-end"}]},tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Posted"),className:"col-md-3"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Budget"),className:"col-md-2 text-end"}]}}}},B={class:"container page-container"},w={class:"row"},S={key:0,class:"col-md-12"},A={class:"border rounded-3 p-3 mb-4"},O={class:"float-none w-auto px-3 fs-8"},x={class:"col-md-3"},C={class:"col-md-2"},D={class:"col-md-2 text-end"},V={class:"col-md-2 text-end"},L={class:"col-md-12"},M={class:"h5 bg-light p-2"},P=t("hr",null,null,-1),R={class:"col-md-3"},E={class:"col-md-9"},F={class:"data-container"},H={class:"col-md-3"},I={class:"taskcard__workType"},Y={class:"col-md-2"},j={class:"col-md-3"},z={key:0,class:"badge text-bg-danger"},G={key:1,class:"badge text-bg-success"},J={class:"col-md-2 text-end"};function K(a,Q,o,U,m,W){const b=i("AppHead"),g=i("PageTitle"),u=i("Link"),h=i("Table"),k=i("Search");return n(),l(r,null,[d(b,{title:o.data.title},null,8,["title"]),t("div",B,[d(g,{title:o.data.title},null,8,["title"]),t("div",w,[o.data.applied_bids.length>0?(n(),l("div",S,[t("fieldset",A,[t("legend",O,s(a.__("Applied")),1),d(h,{options:m.appliedBidTableOptions,links:o.bid_requests.links,total:o.bid_requests.total,tableStyle:"alert alert-primary table-striped"},{default:c(()=>[(n(!0),l(r,null,p(o.data.applied_bids,(e,_)=>(n(),l("tr",{class:"mb-2",key:_},[t("td",x,[d(u,{href:a.route("freelancer.bidRequests.show",e.bid_request.uuid)},{default:c(()=>[f(s(e.bid_request.number),1)]),_:2},1032,["href"])]),t("td",C,s(a.localDate(e.created_at)),1),t("td",D,s(a.formatMoney(e.total)),1),t("td",V,s(a.formatMoney(e.freelancer_payment_amount)),1)]))),128))]),_:1},8,["options","links","total"])])])):T("",!0),t("div",L,[t("div",M,s(a.__("Tasks available for bidding")),1),P]),t("div",R,[d(k,{data:o.data,filters:o.filters.filters,only:["bid_requests","filters"]},null,8,["data","filters"])]),t("div",E,[t("div",F,[d(h,{options:m.tableOptions,links:o.bid_requests.links,total:o.bid_requests.total},{default:c(()=>[(n(!0),l(r,null,p(o.bid_requests.data,(e,_)=>(n(),l("tr",{class:"mb-2",key:_},[t("td",H,[d(u,{href:a.route("freelancer.bidRequests.show",e.uuid)},{default:c(()=>[f(s(e.number),1)]),_:2},1032,["href"]),t("div",I,s(e.task.service.name),1)]),t("td",Y,s(a.localDate(e.created_at)),1),t("td",j,[e.is_closed?(n(),l("span",z,s(a.__("Closed")),1)):(n(),l("span",G,s(a.__("Open")),1))]),t("td",J,s(a.formatMoney(e.budget)),1)]))),128))]),_:1},8,["options","links","total"])])])])])],64)}const dt=v(q,[["render",K]]);export{dt as default};

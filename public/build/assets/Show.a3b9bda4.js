import k from"./BidLayout.14a43bd7.js";import{T as y}from"./Table.f6aec961.js";import q from"./Search.87e421c4.js";import{_ as v,A as B,w as r,r as o,o as c,b as t,a as d,c as l,q as N,t as i,f as T,d as x,F as L}from"./app.2abe2877.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.2b29f722.js";import"./Input.d98634fc.js";import"./CheckBox.0599dcb1.js";import"./Select.7a96caba.js";import"./vanilla-picker.csp.f95a0d4d.js";import"./debounce.35ca4e92.js";const g={props:["data","bids","filters"],components:{BidLayout:k,Table:y,Search:q},data(){return{tableOptions:{titles:[{name:this.__("Date"),className:"col-md-2"},{name:this.__("From"),className:"col-md-3"},{name:this.__("Bid Amount"),className:"col-md-2 text-end"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}},methods:{accept(s){let n=this;this.confirmDialog(this.__("Accept the offer"),function(){n.$inertia.post(route("customer.bidRequests.accept",[n.data.bid_request.uuid,s]))})}}},w={class:"row"},A={class:"col-md-3"},C={class:"col-md-9"},S={class:"data-container"},D={class:"col-md-3"},V={class:"col-md-3"},F=["src"],O={class:"col-md-3 text-end"},R={class:"col-md-3 text-end"},z=["onClick"];function E(s,n,e,M,_,m){const u=o("Search"),f=o("Link"),h=o("Table"),p=o("BidLayout");return c(),B(p,{bid_request:e.data.bid_request,activeTab:"bids"},{default:r(()=>[t("div",w,[t("div",A,[d(u,{data:e.data,filters:e.filters.filters,only:["bids","filters"]},null,8,["data","filters"])]),t("div",C,[t("div",S,[d(h,{options:_.tableOptions,links:e.bids.links,total:e.bids.total,text_no_record:s.__("The bids will appear here")},{default:r(()=>[(c(!0),l(L,null,N(e.bids.data,(a,b)=>(c(),l("tr",{class:"mb-2",key:b},[t("td",D,i(s.localDate(a.created_at)),1),t("td",V,[t("img",{class:"avatar rounded-circle me-2",src:a.freelancer.small_avatar,loading:"lazy"},null,8,F),d(f,{href:s.route("customer.bidRequests.freelancer",[e.data.bid_request.uuid,a.freelancer.uuid])},{default:r(()=>[T(i(a.freelancer.code),1)]),_:2},1032,["href"])]),t("td",O,i(s.formatMoney(a.total)),1),t("td",R,[e.data.bid_request.is_closed?x("",!0):(c(),l("button",{key:0,onClick:j=>m.accept(a.uuid),type:"button",class:"btn btn-sm btn-primary"},i(s.__("Accept")),9,z))])]))),128))]),_:1},8,["options","links","total","text_no_record"])])])])]),_:1},8,["bid_request"])}const Z=v(g,[["render",E]]);export{Z as default};

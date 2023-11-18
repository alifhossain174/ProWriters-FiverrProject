import k from"./BidLayout.f6bd616b.js";import{T as y}from"./Table.8330e037.js";import v from"./Search.05d3afb6.js";import{_ as q,g as B,y as r,f as a,o as c,b as t,a as d,c as l,r as N,t as i,d as T,h as g,F as x}from"./app.b345893e.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.109538d8.js";import"./Input.d3e8f5e0.js";import"./CheckBox.da7ffbd8.js";import"./Select.ee436180.js";import"./vanilla-picker.csp.57f392b9.js";import"./debounce.b9b0fcdf.js";const L={props:["data","bids","filters"],components:{BidLayout:k,Table:y,Search:v},data(){return{tableOptions:{titles:[{name:this.__("Date"),className:"col-md-2"},{name:this.__("From"),className:"col-md-3"},{name:this.__("Bid Amount"),className:"col-md-2 text-end"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}},methods:{accept(s){let n=this;this.confirmDialog(this.__("Accept the offer"),function(){n.$inertia.post(route("customer.bidRequests.accept",[n.data.bid_request.uuid,s]))})}}},C={class:"row"},S={class:"col-md-3"},w={class:"col-md-9"},A={class:"data-container"},D={class:"col-md-3"},V={class:"col-md-3"},F=["src"],O={class:"col-md-3 text-end"},R={class:"col-md-3 text-end"},z=["onClick"];function E(s,n,e,M,_,m){const u=a("Search"),h=a("Link"),f=a("Table"),p=a("BidLayout");return c(),B(p,{bid_request:e.data.bid_request,activeTab:"bids"},{default:r(()=>[t("div",C,[t("div",S,[d(u,{data:e.data,filters:e.filters.filters,only:["bids","filters"]},null,8,["data","filters"])]),t("div",w,[t("div",A,[d(f,{options:_.tableOptions,links:e.bids.links,total:e.bids.total,text_no_record:s.__("The bids will appear here")},{default:r(()=>[(c(!0),l(x,null,N(e.bids.data,(o,b)=>(c(),l("tr",{class:"mb-2",key:b},[t("td",D,i(s.localDate(o.created_at)),1),t("td",V,[t("img",{class:"avatar rounded-circle me-2",src:o.author.small_avatar,loading:"lazy"},null,8,F),d(h,{href:s.route("customer.bidRequests.author",[e.data.bid_request.uuid,o.author.uuid])},{default:r(()=>[T(i(o.author.code),1)]),_:2},1032,["href"])]),t("td",O,i(s.formatMoney(o.total)),1),t("td",R,[e.data.bid_request.is_closed?g("",!0):(c(),l("button",{key:0,onClick:j=>m.accept(o.uuid),type:"button",class:"btn btn-sm btn-primary"},i(s.__("Accept")),9,z))])]))),128))]),_:1},8,["options","links","total","text_no_record"])])])])]),_:1},8,["bid_request"])}const Z=q(L,[["render",E]]);export{Z as default};

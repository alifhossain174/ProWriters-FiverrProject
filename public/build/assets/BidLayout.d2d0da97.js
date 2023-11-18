import{_ as f,c as m,a as n,b as e,t,B as l,w as c,f as o,e as h,F as v,r as u,o as q}from"./app.f21ad38e.js";import"./bootstrap.esm.2333d793.js";const g={props:["bid_request","activeTab"],methods:{isActiveTab(s){return this.activeTab==s},destroyBidRequest(){this.deleteConfirmDialog(this,route("customer.bidRequests.destroy",this.bid_request.uuid))}}},B={class:"","data-offset-top":"#header-main"},k={class:"container pt-4 pt-lg-0"},R={class:"row mt-3"},p={class:"col-lg-12"},y=e("div",{class:"text-end text-white"},null,-1),T={class:"d-flex justify-content-between mt-4"},w=e("i",{class:"fa-solid fa-left-long"},null,-1),A=e("i",{class:"fa-solid fa-trash-can"},null,-1),C={class:"d-flex mt-4 fs-8"},D={class:"nav nav-tabs task-navigation",id:"myTab",role:"tablist"},L={class:"nav-item"},N={class:"nav-item"},V={class:"container page-container mt-3"},F={class:"row"},H={class:"col-md-12"};function S(s,r,a,j,x,i){const _=u("AppHead"),d=u("Link");return q(),m(v,null,[n(_,{title:a.bid_request.number},null,8,["title"]),e("section",B,[e("div",k,[e("div",R,[e("div",p,[y,e("div",T,[e("div",null,[e("h4",null,t(s.__("Bid Request"))+" #"+t(a.bid_request.number),1),e("span",{class:l(["badge","text-bg-"+a.bid_request.status.css_badge_name])},t(a.bid_request.status.name),3)]),e("div",null,[n(d,{href:s.route("customer.bidRequests.index"),class:"btn btn-sm btn-light me-2"},{default:c(()=>[w,o(" "+t(s.__("back to"))+" "+t(s.__("Bid Requests")),1)]),_:1},8,["href"]),e("button",{class:"btn btn-sm btn-danger",onClick:r[0]||(r[0]=(...b)=>i.destroyBidRequest&&i.destroyBidRequest(...b))},[A,o(" "+t(s.__("Delete")),1)])])]),e("div",C,[e("ul",D,[e("li",L,[n(d,{class:l(["nav-link",{active:i.isActiveTab("bids")}]),href:s.route("customer.bidRequests.show",a.bid_request.uuid)},{default:c(()=>[o(t(s.__("Bids")),1)]),_:1},8,["class","href"])]),e("li",N,[n(d,{class:l(["nav-link",{active:i.isActiveTab("brief")}]),href:s.route("customer.bidRequests.brief",a.bid_request.uuid),"aria-selected":"true"},{default:c(()=>[o(t(s.__("Task Information")),1)]),_:1},8,["class","href"])])])])])])])]),e("div",V,[e("div",F,[e("div",H,[h(s.$slots,"default")])])])],64)}const I=f(g,[["render",S]]);export{I as default};

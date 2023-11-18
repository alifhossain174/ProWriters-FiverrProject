import{_ as b,c as f,a as d,b as e,t,B as c,w as l,f as i,e as h,F as v,r as _,o as q}from"./app.2abe2877.js";import"./bootstrap.esm.2333d793.js";const g={props:["bid_request","activeTab"],methods:{isActiveTab(s){return this.activeTab==s},destroyBidRequest(){this.deleteConfirmDialog(this,route("admin.bidRequests.destroy",this.bid_request.uuid))}}},k={class:"","data-offset-top":"#header-main"},B={class:"container pt-4 pt-lg-0"},R={class:"row mt-4"},y={class:"col-md-4"},T={class:"col-md-8 text-end"},p={class:"d-flex justify-content-end flex-sm-row flex-column"},w=e("i",{class:"fa-solid fa-left-long"},null,-1),C=e("i",{class:"fa-solid fa-trash-can"},null,-1),A={class:"mt-4 text-start text-md-end"},x={class:"col-md-12"},D={class:"d-flex mt-4 fs-8"},L={class:"nav nav-tabs task-navigation",id:"myTab",role:"tablist"},N={class:"nav-item"},V={class:"nav-item"},F={class:"container page-container mt-3"},H={class:"row"},S={class:"col-md-12"};function j(s,r,a,z,E,n){const u=_("AppHead"),o=_("Link");return q(),f(v,null,[d(u,{title:a.bid_request.number},null,8,["title"]),e("section",k,[e("div",B,[e("div",R,[e("div",y,[e("h4",null,t(s.__("Bid Request"))+" #"+t(a.bid_request.number),1),e("span",{class:c(["badge","text-bg-"+a.bid_request.status.css_badge_name])},t(a.bid_request.status.name),3)]),e("div",T,[e("div",p,[d(o,{href:s.route("admin.bidRequests.index"),class:"btn btn-sm btn-light me-2 mb-2 mt-2"},{default:l(()=>[w,i(" "+t(s.__("back to"))+" "+t(s.__("Bid Requests")),1)]),_:1},8,["href"]),e("button",{class:"btn btn-sm btn-danger me-2 mb-2 mt-2",onClick:r[0]||(r[0]=(...m)=>n.destroyBidRequest&&n.destroyBidRequest(...m))},[C,i(" "+t(s.__("Delete")),1)])]),e("div",A,[i(t(s.__("Customer"))+" : ",1),d(o,null,{default:l(()=>[i(t(a.bid_request.task.customer.full_name),1)]),_:1})])]),e("div",x,[e("div",D,[e("ul",L,[e("li",N,[d(o,{class:c(["nav-link",{active:n.isActiveTab("bids")}]),href:s.route("admin.bidRequests.show",a.bid_request.uuid)},{default:l(()=>[i(t(s.__("Bids")),1)]),_:1},8,["class","href"])]),e("li",V,[d(o,{class:c(["nav-link",{active:n.isActiveTab("brief")}]),href:s.route("admin.bidRequests.brief",a.bid_request.uuid),"aria-selected":"true"},{default:l(()=>[i(t(s.__("Task Information")),1)]),_:1},8,["class","href"])])])])])])])]),e("div",F,[e("div",H,[e("div",S,[h(s.$slots,"default")])])])],64)}const J=b(g,[["render",j]]);export{J as default};

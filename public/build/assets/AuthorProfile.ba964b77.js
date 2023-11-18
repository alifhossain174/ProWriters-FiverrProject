import{S as m}from"./Star.c928fe66.js";import{_ as h,g as v,y as f,f as i,o as s,b as t,d as g,t as a,a as c,c as l,F as b,r as k}from"./app.f4b2b251.js";import"./bootstrap.esm.2333d793.js";const p={props:["data"],components:{Star:m},data(){return{tableOptions:{titles:[{name:this.__("Date"),className:"col-md-2"},{name:this.__("From"),className:"col-md-3"},{name:this.__("Bid Amount"),className:"col-md-2 text-end"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}},methods:{accept(o){let n=this;this.confirmDialog(this.__("Accept the offer"),function(){n.$inertia.post(route("customer.bidRequests.accept",[n.data.bid_request.uuid,o]))})}}},N={class:"d-flex"},y={class:"flex-shrink-0"},L=["src"],w={class:"flex-grow-1 ms-3"},x=["innerHTML"],B=t("hr",null,null,-1),S={class:"row fs-8 text-center"},A={class:"col-md-4 border-end"},D={class:"col-md-4 border-end"},M={class:"col-md-4"},T=t("hr",null,null,-1),C=t("hr",null,null,-1),F={key:0,class:"fs-8"},V=t("hr",null,null,-1),q={key:1};function E(o,n,e,H,z,I){const r=i("Star"),_=i("Modal");return s(),v(_,{title:e.data.title},{default:f(()=>[t("div",N,[t("div",y,[t("img",{class:"avatar rounded-circle me-2",src:e.data.author.small_avatar,alt:"...",loading:"lazy"},null,8,L)]),t("div",w,[g(a(o.__("ID"))+" : ",1),t("strong",null,a(e.data.author.code),1),t("div",null,[c(r,{number:e.data.author.author_ratings_avg_number},null,8,["number"])]),t("p",{class:"nl2br",innerHTML:e.data.author.author_profile.bio},null,8,x)])]),B,t("div",S,[t("div",A,[t("div",null,a(o.__("Tasks Completed")),1),t("div",null,[t("strong",null,a(e.data.author.completed_tasks_count),1)])]),t("div",D,[t("div",null,a(o.__("Education Level")),1),t("div",null,[t("strong",null,a(e.data.author.author_profile.author_level.name),1)])]),t("div",M,[t("div",null,a(o.__("Writer Level")),1),t("div",null,[t("strong",null,a(e.data.author.author_profile.education_level.name),1)])])]),T,t("h5",null,a(o.__("Latest reviews"))+" (5)",1),C,e.data.author.author_ratings.length>0?(s(),l("div",F,[(s(!0),l(b,null,k(e.data.author.author_ratings,(d,u)=>(s(),l("div",{key:u},[c(r,{number:d.number,comment:d.comment},null,8,["number","comment"]),V]))),128))])):(s(),l("small",q,a(o.__("No reviews yet")),1))]),_:1},8,["title"])}const W=h(p,[["render",E]]);export{W as default};
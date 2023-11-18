import{S as m}from"./Star.91624c61.js";import{_ as h,A as v,w as f,r as i,o as s,b as t,f as b,t as a,a as c,c as l,F as g,q as k}from"./app.6486bb89.js";import"./bootstrap.esm.2333d793.js";const p={props:["data"],components:{Star:m},data(){return{tableOptions:{titles:[{name:this.__("Date"),className:"col-md-2"},{name:this.__("From"),className:"col-md-3"},{name:this.__("Bid Amount"),className:"col-md-2 text-end"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}},methods:{accept(o){let n=this;this.confirmDialog(this.__("Accept the offer"),function(){n.$inertia.post(route("customer.bidRequests.accept",[n.data.bid_request.uuid,o]))})}}},N={class:"d-flex"},w={class:"flex-shrink-0"},y=["src"],L={class:"flex-grow-1 ms-3"},x=["innerHTML"],A=t("hr",null,null,-1),B={class:"row fs-8 text-center"},S={class:"col-md-4 border-end"},D={class:"col-md-4 border-end"},M={class:"col-md-4"},T=t("hr",null,null,-1),q=t("hr",null,null,-1),C={key:0,class:"fs-8"},F=t("hr",null,null,-1),V={key:1};function E(o,n,e,H,z,I){const r=i("Star"),_=i("Modal");return s(),v(_,{title:e.data.title},{default:f(()=>[t("div",N,[t("div",w,[t("img",{class:"avatar rounded-circle me-2",src:e.data.author.small_avatar,alt:"...",loading:"lazy"},null,8,y)]),t("div",L,[b(a(o.__("ID"))+" : ",1),t("strong",null,a(e.data.author.code),1),t("div",null,[c(r,{number:e.data.author.author_ratings_avg_number},null,8,["number"])]),t("p",{class:"nl2br",innerHTML:e.data.author.author_profile.bio},null,8,x)])]),A,t("div",B,[t("div",S,[t("div",null,a(o.__("Tasks Completed")),1),t("div",null,[t("strong",null,a(e.data.author.completed_tasks_count),1)])]),t("div",D,[t("div",null,a(o.__("Education Level")),1),t("div",null,[t("strong",null,a(e.data.author.author_profile.author_level.name),1)])]),t("div",M,[t("div",null,a(o.__("Writer Level")),1),t("div",null,[t("strong",null,a(e.data.author.author_profile.education_level.name),1)])])]),T,t("h5",null,a(o.__("Latest reviews"))+" (5)",1),q,e.data.author.author_ratings.length>0?(s(),l("div",C,[(s(!0),l(g,null,k(e.data.author.author_ratings,(d,u)=>(s(),l("div",{key:u},[c(r,{number:d.number,comment:d.comment},null,8,["number","comment"]),F]))),128))])):(s(),l("small",V,a(o.__("No reviews yet")),1))]),_:1},8,["title"])}const W=h(p,[["render",E]]);export{W as default};
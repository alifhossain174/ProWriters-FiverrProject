import{S as u}from"./Star.cf718d11.js";import{_ as f,A as h,w as v,r as d,o as a,b as e,f as b,t as l,a as i,c as s,F as g,q as k}from"./app.40136f18.js";import"./bootstrap.esm.2333d793.js";const p={props:["data"],components:{Star:u},data(){return{tableOptions:{titles:[{name:this.__("Date"),className:"col-md-2"},{name:this.__("From"),className:"col-md-3"},{name:this.__("Bid Amount"),className:"col-md-2 text-end"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}},methods:{accept(n){let r=this;this.confirmDialog(this.__("Accept the offer"),function(){r.$inertia.post(route("customer.bidRequests.accept",[r.data.bid_request.uuid,n]))})}}},N={class:"d-flex"},w={class:"flex-shrink-0"},y=["src"],L={class:"flex-grow-1 ms-3"},x=["innerHTML"],B=e("hr",null,null,-1),S={class:"row fs-8 text-center"},A={class:"col-md-4 border-end"},D={class:"col-md-4 border-end"},F={class:"col-md-4"},M=e("hr",null,null,-1),T=e("hr",null,null,-1),q={key:0,class:"fs-8"},C=e("hr",null,null,-1),V={key:1};function E(n,r,t,H,z,I){const o=d("Star"),_=d("Modal");return a(),h(_,{title:t.data.title},{default:v(()=>[e("div",N,[e("div",w,[e("img",{class:"avatar rounded-circle me-2",src:t.data.freelancer.small_avatar,alt:"...",loading:"lazy"},null,8,y)]),e("div",L,[b(l(n.__("ID"))+" : ",1),e("strong",null,l(t.data.freelancer.code),1),e("div",null,[i(o,{number:t.data.freelancer.freelancer_ratings_avg_number},null,8,["number"])]),e("p",{class:"nl2br",innerHTML:t.data.freelancer.freelancer_profile.bio},null,8,x)])]),B,e("div",S,[e("div",A,[e("div",null,l(n.__("Tasks Completed")),1),e("div",null,[e("strong",null,l(t.data.freelancer.completed_tasks_count),1)])]),e("div",D,[e("div",null,l(n.__("Education Level")),1),e("div",null,[e("strong",null,l(t.data.freelancer.freelancer_profile.freelancer_level.name),1)])]),e("div",F,[e("div",null,l(n.__("Writer Level")),1),e("div",null,[e("strong",null,l(t.data.freelancer.freelancer_profile.education_level.name),1)])])]),M,e("h5",null,l(n.__("Latest reviews"))+" (5)",1),T,t.data.freelancer.freelancer_ratings.length>0?(a(),s("div",q,[(a(!0),s(g,null,k(t.data.freelancer.freelancer_ratings,(c,m)=>(a(),s("div",{key:m},[i(o,{number:c.number,comment:c.comment},null,8,["number","comment"]),C]))),128))])):(a(),s("small",V,l(n.__("No reviews yet")),1))]),_:1},8,["title"])}const W=f(p,[["render",E]]);export{W as default};
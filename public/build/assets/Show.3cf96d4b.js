import g from"./ProfileLayout.9567c656.js";import{_ as v,c as a,a as f,w as y,F as o,r as m,o as s,b as e,t as l,q as _,d as u,f as c}from"./app.1d2673ab.js";import"./bootstrap.esm.2333d793.js";const V={props:["data","freelancer"],components:{ProfileLayout:g},data(){return{subjects:[this.getValue(this.freelancer.profile.subject_1,"name"),this.getValue(this.freelancer.profile.subject_2,"name"),this.getValue(this.freelancer.profile.subject_3,"name"),this.getValue(this.freelancer.profile.subject_4,"name"),this.getValue(this.freelancer.profile.subject_4,"name")],services:[this.getValue(this.freelancer.profile.service_1,"name"),this.getValue(this.freelancer.profile.service_2,"name"),this.getValue(this.freelancer.profile.service_3,"name")],general:[{label:this.__("ID"),value:this.freelancer.code},{label:this.__("Email"),value:this.freelancer.email},{label:this.__("Phone"),value:this.freelancer.phone},{label:this.__("Education Level"),value:this.freelancer.profile.education_level.name},{label:this.__("Years of experience"),value:this.freelancer.profile.years_of_experience},{label:this.__("Address"),value:this.freelancer.profile.address},{label:this.__("City"),value:this.freelancer.profile.city},{label:this.__("State"),value:this.freelancer.profile.state},{label:this.__("Country"),value:this.freelancer.country.name}],links:[{label:this.__("Blog"),value:this.getValue(this.freelancer.profile,"blog_url")},{label:this.__("Portfolio"),value:this.getValue(this.freelancer.profile,"online_portfolio_url")},{label:this.__("Linkedin"),value:this.getValue(this.freelancer.profile,"linked_in_url")}]}},methods:{getValue(t,d){return t&&Object.hasOwn(t,d)?t[d]:null}}},k={class:"card"},L={class:"card-body"},w=["innerHTML"],P=e("hr",null,null,-1),j={class:"table table-bordered"},N={class:"text-muted text-left"},C={class:"text-left"},S={key:0,class:"badge badge-lg badge-soft-primary me-2 mb-2"},B=e("hr",null,null,-1),E={key:0,class:"badge badge-lg badge-soft-primary me-2 mb-2"},H=e("hr",null,null,-1),A={class:"table table-bordered"},D={class:"text-end"},F={class:"text-end"},T={class:"text-end"},q={class:"text-muted text-left"},x={class:"text-end"},I={class:"text-muted"},M={class:"text-end"},O={class:"text-muted"},R={class:"text-end"},G={class:"text-muted"},U={class:"table table-bordered"},W={class:"text-muted"},Y={class:"table table-bordered"},z={class:"text-muted"},J=["href"],K=e("i",{class:"fa-solid fa-up-right-from-square"},null,-1);function Q(t,d,n,X,h,Z){const b=m("AppHead"),p=m("ProfileLayout");return s(),a(o,null,[f(b,{title:n.data.title},null,8,["title"]),f(p,{freelancer:n.freelancer},{default:y(()=>[e("div",k,[e("div",L,[e("h5",null,l(t.__("Career Summary")),1),e("div",{class:"pre-formatted",innerHTML:n.freelancer.profile.bio},null,8,w),P,e("h5",null,l(t.__("General Information")),1),e("table",j,[(s(!0),a(o,null,_(h.general,(r,i)=>(s(),a("tr",{key:i},[e("td",N,l(r.label),1),e("td",C,l(r.value),1)]))),128))]),e("h5",null,l(t.__("Services")),1),(s(!0),a(o,null,_(n.data.services,(r,i)=>(s(),a(o,{key:i},[r?(s(),a("span",S,l(r.name),1)):u("",!0)],64))),128)),B,e("h5",null,l(t.__("Subjects")),1),(s(!0),a(o,null,_(n.data.subjects,(r,i)=>(s(),a(o,{key:i},[r?(s(),a("span",E,l(r.name),1)):u("",!0)],64))),128)),H,e("h5",null,l(t.__("Freelancer Level"))+" "+l(t.__("&"))+" "+l(t.__("Rate")),1),e("table",A,[e("thead",null,[e("tr",null,[e("th",null,l(t.__("Name")),1),e("th",D,l(t.__("Writing")),1),e("th",F,l(t.__("Editing")),1),e("th",T,l(t.__("Proofreading")),1)])]),e("tbody",null,[e("tr",null,[e("td",q,l(n.freelancer.profile.freelancer_level.name),1),e("td",x,[c(l(n.freelancer.profile.freelancer_level.freelancer_price_per_word_writing)+" ",1),e("div",null,[e("small",I,l(t.__("Per word price")),1)])]),e("td",M,[c(l(n.freelancer.profile.freelancer_level.freelancer_price_per_word_editing)+" ",1),e("div",null,[e("small",O,l(t.__("Per word price")),1)])]),e("td",R,[c(l(n.freelancer.profile.freelancer_level.freelancer_price_per_word_proofreading)+" ",1),e("div",null,[e("small",G,l(t.__("Per word price")),1)])])])])]),e("h5",null,l(t.__("Payment method")),1),e("table",U,[e("thead",null,[e("tr",null,[e("th",null,l(t.__("Name")),1),e("th",null,l(t.__("Details")),1)])]),e("tbody",null,[e("tr",null,[e("td",W,l(n.freelancer.profile.payment_method),1),e("td",null,l(n.freelancer.profile.payment_method_details),1)])])]),e("h5",null,l(t.__("Links")),1),e("table",Y,[e("thead",null,[e("tr",null,[e("th",null,l(t.__("Name")),1),e("th",null,l(t.__("URL")),1)])]),e("tbody",null,[(s(!0),a(o,null,_(h.links,(r,i)=>(s(),a("tr",{key:i},[e("td",z,l(r.label),1),e("td",null,[r.value?(s(),a("a",{key:0,target:"_blank",href:r.value},[c(l(t.__("Visit"))+" ",1),K],8,J)):u("",!0)])]))),128))])])])])]),_:1},8,["freelancer"])],64)}const te=v(V,[["render",Q]]);export{te as default};

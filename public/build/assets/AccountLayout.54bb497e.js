import{_ as d,c as i,b as s,t as e,a as c,w as l,d as _,e as u,F as h,r as m,o as r,f as n}from"./app.15906225.js";import"./bootstrap.esm.2333d793.js";const g={props:["customer"]},f={class:"d-flex align-items-end navbar-background"},p={class:"container pt-4 pt-lg-0"},v={class:"row"},w={class:"col-lg-12 text-center"},k={class:"mb-4 mt-4"},b={class:"mx-auto"},C=["alt","src"],y={class:"h2 mb-0 text-white d-block"},L={class:"text-white"},N=s("div",null,null,-1),V={class:"pt-md-5 pt-lg-0"},B={class:"container page-container"},A={class:"row mt-4"},F={class:"col-md-4"},S={class:"list-group sticky-top"},$={class:"list-group-item"},D={class:"list-group-item"},E={class:"list-group-item"},G={key:0,class:"list-group-item"},P={class:"col-md-8"};function T(t,j,o,q,x,z){const a=m("Link");return r(),i(h,null,[s("section",f,[s("div",p,[s("div",v,[s("div",w,[s("div",k,[s("div",b,[s("img",{alt:o.customer.full_name,src:o.customer.small_avatar,class:"card-profile-image avatar rounded-circle shadow hover-shadow-lg customer-avatar"},null,8,C)]),s("span",y,e(o.customer.full_name),1),s("div",L,e(o.customer.code),1),N])])])])]),s("section",V,[s("div",B,[s("div",A,[s("div",F,[s("ul",S,[s("li",$,[s("div",null,[c(a,{href:t.route("customer.account.edit")},{default:l(()=>[n(e(t.__("General")),1)]),_:1},8,["href"])])]),s("li",D,[s("div",null,[c(a,{href:t.route("customer.account.avatar")},{default:l(()=>[n(e(t.__("Change Avatar")),1)]),_:1},8,["href"])])]),s("li",E,[s("div",null,[c(a,{href:t.route("customer.account.password")},{default:l(()=>[n(e(t.__("Change Password")),1)]),_:1},8,["href"])])]),t.$page.props.is_single_language?_("",!0):(r(),i("li",G,[s("div",null,[c(a,{href:t.route("customer.account.language")},{default:l(()=>[n(e(t.__("Change Language")),1)]),_:1},8,["href"])])]))])]),s("div",P,[u(t.$slots,"default")])])])])],64)}const J=d(g,[["render",T]]);export{J as default};

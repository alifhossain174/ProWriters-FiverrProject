import{_ as r,c as d,b as s,t as a,d as _,a as n,w as i,e as m,F as h,r as u,o as l,f as c}from"./app.2abe2877.js";import"./bootstrap.esm.2333d793.js";const f={props:["admin"]},v={class:"d-flex align-items-end navbar-background"},g={class:"container pt-4 pt-lg-0"},p={class:"row"},b={class:"col-lg-12 text-center"},w={class:"mb-4 mt-4"},k={class:"mx-auto"},y=["alt","src"],C={class:"h2 mb-0 text-white d-block"},L={class:"text-white"},N={class:"badge bg-secondary me-2"},V={key:0,class:"badge bg-danger"},A={class:"pt-md-5 pt-lg-0"},B={class:"container page-container"},F={class:"row mt-4"},I={class:"col-md-4"},S={class:"list-group sticky-top"},D={class:"list-group-item"},E={class:"list-group-item"},P={class:"list-group-item"},T={class:"list-group-item"},j={class:"col-md-8"};function q(t,z,e,G,H,J){const o=u("Link");return l(),d(h,null,[s("section",v,[s("div",g,[s("div",p,[s("div",b,[s("div",w,[s("div",k,[s("img",{alt:e.admin.full_name,src:e.admin.small_avatar,class:"card-profile-image avatar rounded-circle shadow hover-shadow-lg admin-avatar"},null,8,y)]),s("span",C,a(e.admin.full_name),1),s("div",L,a(e.admin.code),1),s("div",null,[s("span",N,a(t.__("Admin")),1),e.admin.inactive?(l(),d("span",V,a(t.__("Inactive")),1)):_("",!0)])])])])])]),s("section",A,[s("div",B,[s("div",F,[s("div",I,[s("ul",S,[s("li",D,[s("div",null,[n(o,{href:t.route("admin.account.edit")},{default:i(()=>[c(a(t.__("Contact Information")),1)]),_:1},8,["href"])])]),s("li",E,[s("div",null,[n(o,{href:t.route("admin.account.location")},{default:i(()=>[c(a(t.__("Location")),1)]),_:1},8,["href"])])]),s("li",P,[s("div",null,[n(o,{href:t.route("admin.account.avatar")},{default:i(()=>[c(a(t.__("Avatar")),1)]),_:1},8,["href"])])]),s("li",T,[s("div",null,[n(o,{href:t.route("admin.account.password")},{default:i(()=>[c(a(t.__("Change Password")),1)]),_:1},8,["href"])])])])]),s("div",j,[m(t.$slots,"default")])])])])],64)}const O=r(f,[["render",q]]);export{O as default};

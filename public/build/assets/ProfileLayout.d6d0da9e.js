import{_ as m,c,b as s,t as o,d as h,a as l,w as n,f as a,e as f,F as g,r,o as u}from"./app.1d2673ab.js";import"./bootstrap.esm.2333d793.js";const b={props:["customer"],methods:{destroy(){this.deleteConfirmDialog(this,route("admin.customers.destroy",this.customer.uuid))}}},v={class:"d-flex align-items-end navbar-background"},p={class:"container pt-4 pt-lg-0"},w={class:"row justify-content-end"},y={class:"col-lg-9"},k={class:"d-flex justify-content-between mb-4 mt-4"},C={class:"h2 mb-0 text-white d-block"},D={class:"badge bg-secondary me-2"},j={key:0,class:"badge bg-danger"},L={class:"btn-group flex-wrap",role:"group"},P=s("i",{class:"fa-solid fa-house-user"},null,-1),N=s("i",{class:"fa-solid fa-pen-to-square"},null,-1),V=s("i",{class:"fa-solid fa-key"},null,-1),A=s("i",{class:"fa-solid fa-wallet"},null,-1),B={class:"btn-group",role:"group"},T={id:"btnGroupDrop1",type:"button",class:"btn btn-light dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},E=s("i",{class:"fas fa-ellipsis-v"},null,-1),F={class:"dropdown-menu","aria-labelledby":"btnGroupDrop1"},G={class:"pt-md-5 pt-lg-0"},I={class:"container"},S={class:"row"},W={class:"col-lg-3"},q={class:"sticky-top profile-photo-holder"},z={class:"card"},H={class:"card-profile-cover"},J=["alt","src"],K={class:"mx-auto"},M=["src"],O={class:"card-body p-3 pt-0 text-center"},Q={class:"mb-0"},R={class:"mt-4"},U=s("i",{class:"fa-solid fa-image"},null,-1),X={class:"actions d-flex justify-content-center mt-3 pt-3 px-5 delimiter-top"},Y=s("i",{class:"far fa-trash-alt"},null,-1),Z={class:"col-lg-9 mt-2 page-container"};function x(t,$,e,ss,ts,_){const d=r("Link"),i=r("DialogLink");return u(),c(g,null,[s("section",v,[s("div",p,[s("div",w,[s("div",y,[s("div",k,[s("span",C,o(e.customer.full_name),1),s("div",null,[s("span",D,o(t.__("Customer")),1),e.customer.inactive?(u(),c("span",j,o(t.__("Inactive")),1)):h("",!0)])]),s("div",L,[l(d,{class:"btn btn-light",href:t.route("admin.customers.show",e.customer.uuid)},{default:n(()=>[P,a(" "+o(t.__("Profile")),1)]),_:1},8,["href"]),l(i,{href:t.route("admin.customers.edit",e.customer.uuid),class:"btn btn-light"},{default:n(()=>[N,a(" "+o(t.__("Edit Profile")),1)]),_:1},8,["href"]),l(i,{href:t.route("admin.customers.password",e.customer.uuid),class:"btn btn-light"},{default:n(()=>[V,a(" "+o(t.__("Change Password")),1)]),_:1},8,["href"]),l(i,{href:t.route("admin.customers.wallets.adjust.create",e.customer.uuid),class:"btn btn-light"},{default:n(()=>[A,a(" "+o(t.__("Adjust Wallet")),1)]),_:1},8,["href"]),s("div",B,[s("button",T,[E,a(" "+o(t.__("Activities")),1)]),s("ul",F,[s("li",null,[l(i,{class:"dropdown-item",href:t.route("admin.customers.tasks",e.customer.uuid)},{default:n(()=>[a(o(t.__("Tasks")),1)]),_:1},8,["href"])]),s("li",null,[l(i,{class:"dropdown-item",href:t.route("admin.customers.payments",e.customer.uuid)},{default:n(()=>[a(o(t.__("Payments")),1)]),_:1},8,["href"])]),s("li",null,[l(i,{class:"dropdown-item",href:t.route("admin.customers.wallets.transactions",e.customer.uuid)},{default:n(()=>[a(o(t.__("Wallet Transactions")),1)]),_:1},8,["href"])])])])])])])])]),s("section",G,[s("div",I,[s("div",S,[s("div",W,[s("div",q,[s("div",z,[s("div",H,[s("img",{alt:e.customer.full_name,src:e.customer.small_avatar,class:"card-img-top customer-avatar"},null,8,J)]),s("div",K,[s("img",{alt:"Image placeholder",src:e.customer.small_avatar,class:"card-profile-image avatar rounded-circle shadow hover-shadow-lg customer-avatar"},null,8,M)]),s("div",O,[s("h5",Q,o(e.customer.full_name),1),s("div",R,[l(i,{href:t.route("admin.customers.avatar",e.customer.uuid),class:"btn btn-link"},{default:n(()=>[U,a(" "+o(t.__("Change Avatar")),1)]),_:1},8,["href"])]),s("div",X,[l(d,{onClick:_.destroy,href:"#",class:"text-danger"},{default:n(()=>[Y,a(" "+o(t.__("Delete")),1)]),_:1},8,["onClick"])])])])])]),s("div",Z,[f(t.$slots,"default")])])])])],64)}const as=m(b,[["render",x]]);export{as as default};

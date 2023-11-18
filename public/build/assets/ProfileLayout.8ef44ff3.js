import{_ as h,c as d,b as e,t,d as u,a as o,w as n,f as l,e as m,F as g,r as c,o as _}from"./app.1d2673ab.js";import"./bootstrap.esm.2333d793.js";const b={props:["freelancer"],methods:{destroy(){this.deleteConfirmDialog(this,route("admin.freelancers.destroy",this.freelancer.uuid))}}},v={class:"d-flex align-items-end navbar-background"},p={class:"container pt-4 pt-lg-0"},w={class:"row justify-content-end"},k={class:"col-lg-9"},y={class:"d-flex justify-content-between mb-4 mt-4"},C={class:"h2 mb-0 text-white d-block"},D={class:"badge bg-secondary me-2"},L={key:0,class:"badge bg-danger"},B={class:"d-flex"},N={class:"btn-group flex-wrap",role:"group"},P=e("i",{class:"far fa-address-card"},null,-1),V=e("i",{class:"fa-solid fa-user"},null,-1),j=e("i",{class:"fa-solid fa-image"},null,-1),F=e("i",{class:"fa-solid fa-key"},null,-1),A={class:"btn-group ml-auto",role:"group"},E={id:"btnGroupDrop1",type:"button",class:"btn btn-light dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},G=e("i",{class:"fas fa-ellipsis-v"},null,-1),I={class:"dropdown-menu","aria-labelledby":"btnGroupDrop1"},S={class:"pt-md-5 pt-lg-0"},T={class:"container"},q={class:"row"},z={class:"col-lg-3"},H={class:"sticky-top profile-photo-holder"},J={class:"card border-0"},K={class:"card-profile-cover"},M=["alt","src"],O={class:"mx-auto"},Q=["src"],R={class:"card-body p-3 pt-0 text-center"},U={class:"mb-0"},W={class:"actions d-flex justify-content-center mt-3 pt-3 px-5 delimiter-top"},X=e("i",{class:"far fa-trash-alt"},null,-1),Y={class:"col-lg-9 mt-2 page-container"};function Z(s,x,a,$,ee,f){const i=c("Link"),r=c("DialogLink");return _(),d(g,null,[e("section",v,[e("div",p,[e("div",w,[e("div",k,[e("div",y,[e("div",null,[e("span",C,t(a.freelancer.full_name),1)]),e("div",null,[e("span",D,t(s.__("Freelancer")),1),a.freelancer.inactive?(_(),d("span",L,t(s.__("Inactive")),1)):u("",!0)])]),e("div",B,[e("div",N,[o(i,{class:"btn btn-light",href:s.route("admin.freelancers.show",a.freelancer.uuid)},{default:n(()=>[P,l(" "+t(s.__("Profile")),1)]),_:1},8,["href"]),o(i,{href:s.route("admin.freelancers.edit",a.freelancer.uuid),class:"btn btn-light"},{default:n(()=>[V,l(" "+t(s.__("Edit Profile")),1)]),_:1},8,["href"]),o(r,{href:s.route("admin.freelancers.avatar",a.freelancer.uuid),class:"btn btn-light"},{default:n(()=>[j,l(" "+t(s.__("Change Avatar")),1)]),_:1},8,["href"]),o(r,{href:s.route("admin.freelancers.password",a.freelancer.uuid),class:"btn btn-light"},{default:n(()=>[F,l(" "+t(s.__("Change Password")),1)]),_:1},8,["href"]),e("div",A,[e("button",E,[G,l(" "+t(s.__("Activities")),1)]),e("ul",I,[e("li",null,[o(r,{class:"dropdown-item",href:s.route("admin.freelancers.tasks",a.freelancer.uuid)},{default:n(()=>[l(t(s.__("Tasks")),1)]),_:1},8,["href"])]),e("li",null,[o(r,{class:"dropdown-item",href:s.route("admin.freelancers.bills",a.freelancer.uuid)},{default:n(()=>[l(t(s.__("Bills")),1)]),_:1},8,["href"])])])])])])])])])]),e("section",S,[e("div",T,[e("div",q,[e("div",z,[e("div",H,[e("div",J,[e("div",K,[e("img",{alt:a.freelancer.full_name,src:a.freelancer.small_avatar,class:"card-img-top freelancer-avatar"},null,8,M)]),e("div",O,[e("img",{alt:"Image placeholder",src:a.freelancer.small_avatar,class:"card-profile-image avatar rounded-circle shadow hover-shadow-lg freelancer-avatar"},null,8,Q)]),e("div",R,[e("h5",U,t(a.freelancer.full_name),1),e("div",W,[o(i,{onClick:f.destroy,href:"#",class:"text-danger"},{default:n(()=>[X,l(" "+t(s.__("Delete")),1)]),_:1},8,["onClick"])])])])])]),e("div",Y,[m(s.$slots,"default")])])])])],64)}const te=h(b,[["render",Z]]);export{te as default};

import{_ as h,c as d,b as e,t,d as u,a as o,w as n,f as l,e as m,F as g,r as c,o as _}from"./app.571265cd.js";import"./bootstrap.esm.2333d793.js";const v={props:["freelancer"],methods:{destroy(){this.deleteConfirmDialog(this,route("admin.freelancers.destroy",this.freelancer.uuid))}}},b={class:"d-flex align-items-end navbar-background"},p={class:"container pt-4 pt-lg-0"},w={class:"row justify-content-end"},k={class:"col-lg-9"},y={class:"d-flex justify-content-between mb-4 mt-4"},C={class:"h2 mb-0 text-white d-block"},D={class:"badge bg-secondary me-2"},L={key:0,class:"badge bg-danger"},B={class:"d-flex"},N={class:"btn-group flex-wrap",role:"group"},P=e("i",{class:"fa-solid fa-house-user"},null,-1),V=e("i",{class:"fa-solid fa-user"},null,-1),j=e("i",{class:"fa-solid fa-key"},null,-1),F={class:"btn-group ml-auto",role:"group"},A={id:"btnGroupDrop1",type:"button",class:"btn btn-light dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},E=e("i",{class:"fas fa-ellipsis-v"},null,-1),G={class:"dropdown-menu","aria-labelledby":"btnGroupDrop1"},I={class:"pt-md-5 pt-lg-0"},S={class:"container"},T={class:"row"},q={class:"col-lg-3"},z={class:"sticky-top profile-photo-holder"},H={class:"card border-0"},J={class:"card-profile-cover"},K=["alt","src"],M={class:"mx-auto"},O=["src"],Q={class:"card-body p-3 pt-0 text-center"},R={class:"mb-0"},U={class:"mt-4"},W=e("i",{class:"fa-solid fa-image"},null,-1),X={class:"actions d-flex justify-content-center mt-3 pt-3 px-5 delimiter-top"},Y=e("i",{class:"far fa-trash-alt"},null,-1),Z={class:"col-lg-9 mt-2 page-container"};function x(s,$,a,ee,se,f){const i=c("Link"),r=c("DialogLink");return _(),d(g,null,[e("section",b,[e("div",p,[e("div",w,[e("div",k,[e("div",y,[e("div",null,[e("span",C,t(a.freelancer.full_name),1)]),e("div",null,[e("span",D,t(s.__("Freelancer")),1),a.freelancer.inactive?(_(),d("span",L,t(s.__("Inactive")),1)):u("",!0)])]),e("div",B,[e("div",N,[o(i,{class:"btn btn-light",href:s.route("admin.freelancers.show",a.freelancer.uuid)},{default:n(()=>[P,l(" "+t(s.__("Profile")),1)]),_:1},8,["href"]),o(i,{href:s.route("admin.freelancers.edit",a.freelancer.uuid),class:"btn btn-light"},{default:n(()=>[V,l(" "+t(s.__("Edit Profile")),1)]),_:1},8,["href"]),o(r,{href:s.route("admin.freelancers.password",a.freelancer.uuid),class:"btn btn-light"},{default:n(()=>[j,l(" "+t(s.__("Change Password")),1)]),_:1},8,["href"]),e("div",F,[e("button",A,[E,l(" "+t(s.__("Activities")),1)]),e("ul",G,[e("li",null,[o(r,{class:"dropdown-item",href:s.route("admin.freelancers.tasks",a.freelancer.uuid)},{default:n(()=>[l(t(s.__("Tasks")),1)]),_:1},8,["href"])]),e("li",null,[o(r,{class:"dropdown-item",href:s.route("admin.freelancers.bills",a.freelancer.uuid)},{default:n(()=>[l(t(s.__("Bills")),1)]),_:1},8,["href"])])])])])])])])])]),e("section",I,[e("div",S,[e("div",T,[e("div",q,[e("div",z,[e("div",H,[e("div",J,[e("img",{alt:a.freelancer.full_name,src:a.freelancer.small_avatar,class:"card-img-top freelancer-avatar"},null,8,K)]),e("div",M,[e("img",{alt:"Image placeholder",src:a.freelancer.small_avatar,class:"card-profile-image avatar rounded-circle shadow hover-shadow-lg freelancer-avatar"},null,8,O)]),e("div",Q,[e("h5",R,t(a.freelancer.full_name),1),e("div",U,[o(r,{href:s.route("admin.freelancers.avatar",a.freelancer.uuid),class:"btn btn-link"},{default:n(()=>[W,l(" "+t(s.__("Change Avatar")),1)]),_:1},8,["href"])]),e("div",X,[o(i,{onClick:f.destroy,href:"#",class:"text-danger"},{default:n(()=>[Y,l(" "+t(s.__("Delete")),1)]),_:1},8,["onClick"])])])])])]),e("div",Z,[m(s.$slots,"default")])])])])],64)}const le=h(v,[["render",x]]);export{le as default};

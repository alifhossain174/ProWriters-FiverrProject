import{_ as h,c as d,b as s,t as a,d as f,a as o,w as i,e as m,F as g,r as c,o as r,f as n}from"./app.6486bb89.js";import"./bootstrap.esm.2333d793.js";const v={props:["user"],methods:{destroy(){this.deleteConfirmDialog(this,route("admin.users.destroy",this.user.uuid))}}},b={class:"d-flex align-items-end navbar-background"},p={class:"container pt-4 pt-lg-0"},k={class:"row justify-content-end"},y={class:"col-lg-9"},w={class:"d-flex justify-content-between mb-4 mt-4"},C={class:"h2 mb-0 text-white d-block"},D={class:"badge bg-secondary me-2"},L={key:0,class:"badge bg-danger"},N={class:"d-flex"},P={class:"btn-group",role:"group"},V=s("i",{class:"fa-solid fa-user"},null,-1),j=s("i",{class:"fa-solid fa-image"},null,-1),B=s("i",{class:"fa-solid fa-key"},null,-1),x=s("i",{class:"fa-solid fa-passport"},null,-1),A={class:"pt-md-5 pt-lg-0"},E={class:"container"},F={class:"row"},I={class:"col-lg-3"},S={class:"sticky-top profile-photo-holder d-none d-md-block"},T={class:"card"},q={class:"card-profile-cover"},z=["alt","src"],G={class:"mx-auto"},H=["src"],J={class:"card-body p-3 pt-0 text-center"},K={class:"mb-0"},M={class:"actions d-flex justify-content-center mt-3 pt-3 px-5 delimiter-top"},O=s("i",{class:"far fa-trash-alt"},null,-1),Q={class:"col-lg-9 mt-2 page-container"};function R(e,U,t,W,X,_){const l=c("DialogLink"),u=c("Link");return r(),d(g,null,[s("section",b,[s("div",p,[s("div",k,[s("div",y,[s("div",w,[s("span",C,a(t.user.full_name),1),s("div",null,[s("span",D,a(e.__("Admin")),1),t.user.inactive?(r(),d("span",L,a(e.__("Inactive")),1)):f("",!0)])]),s("div",N,[s("div",P,[o(l,{href:e.route("admin.users.edit",t.user.uuid),class:"btn btn-light"},{default:i(()=>[V,n(" "+a(e.__("Edit Profile")),1)]),_:1},8,["href"]),o(l,{href:e.route("admin.users.avatar",t.user.uuid),class:"btn btn-light"},{default:i(()=>[j,n(" "+a(e.__("Change Avatar")),1)]),_:1},8,["href"]),o(l,{href:e.route("admin.users.password",t.user.uuid),class:"btn btn-light"},{default:i(()=>[B,n(" "+a(e.__("Change Password")),1)]),_:1},8,["href"]),o(l,{href:e.route("admin.users.permission",t.user.uuid),class:"btn btn-light"},{default:i(()=>[x,n(" "+a(e.__("Change Permission")),1)]),_:1},8,["href"])])])])])])]),s("section",A,[s("div",E,[s("div",F,[s("div",I,[s("div",S,[s("div",T,[s("div",q,[s("img",{alt:t.user.full_name,src:t.user.small_avatar,class:"card-img-top user-avatar"},null,8,z)]),s("div",G,[s("img",{alt:"Image placeholder",src:t.user.small_avatar,class:"card-profile-image avatar rounded-circle shadow hover-shadow-lg user-avatar"},null,8,H)]),s("div",J,[s("h5",K,a(t.user.full_name),1),s("div",M,[o(u,{onClick:_.destroy,href:"#",class:"text-danger"},{default:i(()=>[O,n(" "+a(e.__("Delete")),1)]),_:1},8,["onClick"])])])])])]),s("div",Q,[m(e.$slots,"default")])])])])],64)}const $=h(v,[["render",R]]);export{$ as default};

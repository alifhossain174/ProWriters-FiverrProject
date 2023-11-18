import{_ as u,c as r,b as t,t as o,h as f,a as l,y as i,d as e,z as m,F as g,f as c,o as h}from"./app.f4b2b251.js";import"./bootstrap.esm.2333d793.js";const b={props:["author"],methods:{destroy(){this.deleteConfirmDialog(this,route("admin.authors.destroy",this.author.uuid))}}},v={class:"d-flex align-items-end navbar-background"},p={class:"container pt-4 pt-lg-0"},w={class:"row justify-content-end"},y={class:"col-lg-9"},k={class:"d-flex justify-content-between mb-4 mt-4"},C={class:"h2 mb-0 text-white d-block"},D={class:"badge bg-secondary me-2"},L={key:0,class:"badge bg-danger"},B={class:"d-flex"},N={class:"btn-group flex-wrap",role:"group"},P=t("i",{class:"far fa-address-card"},null,-1),V=t("i",{class:"fa-solid fa-user"},null,-1),j=t("i",{class:"fa-solid fa-image"},null,-1),A=t("i",{class:"fa-solid fa-key"},null,-1),E={class:"btn-group ml-auto",role:"group"},F={id:"btnGroupDrop1",type:"button",class:"btn btn-light dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},G=t("i",{class:"fas fa-ellipsis-v"},null,-1),I={class:"dropdown-menu","aria-labelledby":"btnGroupDrop1"},S={class:"pt-md-5 pt-lg-0"},T={class:"container"},z={class:"row"},q={class:"col-lg-3"},H={class:"sticky-top profile-photo-holder"},J={class:"card border-0"},K={class:"card-profile-cover"},M=["alt","src"],O={class:"mx-auto"},Q=["src"],R={class:"card-body p-3 pt-0 text-center"},U={class:"mb-0"},W={class:"actions d-flex justify-content-center mt-3 pt-3 px-5 delimiter-top"},X=t("i",{class:"far fa-trash-alt"},null,-1),Y={class:"col-lg-9 mt-2 page-container"};function Z(s,x,a,$,tt,_){const n=c("Link"),d=c("DialogLink");return h(),r(g,null,[t("section",v,[t("div",p,[t("div",w,[t("div",y,[t("div",k,[t("div",null,[t("span",C,o(a.author.full_name),1)]),t("div",null,[t("span",D,o(s.__("Author")),1),a.author.inactive?(h(),r("span",L,o(s.__("Inactive")),1)):f("",!0)])]),t("div",B,[t("div",N,[l(n,{class:"btn btn-light",href:s.route("admin.authors.show",a.author.uuid)},{default:i(()=>[P,e(" "+o(s.__("Profile")),1)]),_:1},8,["href"]),l(n,{href:s.route("admin.authors.edit",a.author.uuid),class:"btn btn-light"},{default:i(()=>[V,e(" "+o(s.__("Edit Profile")),1)]),_:1},8,["href"]),l(d,{href:s.route("admin.authors.avatar",a.author.uuid),class:"btn btn-light"},{default:i(()=>[j,e(" "+o(s.__("Change Avatar")),1)]),_:1},8,["href"]),l(d,{href:s.route("admin.authors.password",a.author.uuid),class:"btn btn-light"},{default:i(()=>[A,e(" "+o(s.__("Change Password")),1)]),_:1},8,["href"]),t("div",E,[t("button",F,[G,e(" "+o(s.__("Activities")),1)]),t("ul",I,[t("li",null,[l(d,{class:"dropdown-item",href:s.route("admin.authors.tasks",a.author.uuid)},{default:i(()=>[e(o(s.__("Tasks")),1)]),_:1},8,["href"])]),t("li",null,[l(d,{class:"dropdown-item",href:s.route("admin.authors.bills",a.author.uuid)},{default:i(()=>[e(o(s.__("Bills")),1)]),_:1},8,["href"])])])])])])])])])]),t("section",S,[t("div",T,[t("div",z,[t("div",q,[t("div",H,[t("div",J,[t("div",K,[t("img",{alt:a.author.full_name,src:a.author.small_avatar,class:"card-img-top author-avatar"},null,8,M)]),t("div",O,[t("img",{alt:"Image placeholder",src:a.author.small_avatar,class:"card-profile-image avatar rounded-circle shadow hover-shadow-lg author-avatar"},null,8,Q)]),t("div",R,[t("h5",U,o(a.author.full_name),1),t("div",W,[l(n,{onClick:_.destroy,href:"#",class:"text-danger"},{default:i(()=>[X,e(" "+o(s.__("Delete")),1)]),_:1},8,["onClick"])])])])])]),t("div",Y,[m(s.$slots,"default")])])])])],64)}const ot=u(b,[["render",Z]]);export{ot as default};

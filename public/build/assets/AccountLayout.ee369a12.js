import{_ as u,c as r,b as t,t as e,h as d,a,y as l,z as _,F as h,f,o as c,d as i}from"./app.f4b2b251.js";import"./bootstrap.esm.2333d793.js";const m={props:["author"]},g={class:"d-flex align-items-end navbar-background"},p={class:"container pt-4 pt-lg-0"},v={class:"row"},b={class:"col-lg-12 text-center"},k={class:"mb-4 mt-4"},w={class:"mx-auto"},y=["src"],L={class:"h2 mb-0 text-white d-block"},B={class:"text-white"},C={class:"badge bg-secondary me-2"},N={key:0,class:"badge bg-danger"},S={class:"pt-md-5 pt-lg-0"},V={class:"container page-container"},A={class:"row mt-4"},I={class:"col-md-4"},E={class:"list-group sticky-top"},F={class:"list-group-item"},P={class:"list-group-item"},$={class:"list-group-item"},z={class:"list-group-item"},D={class:"list-group-item"},R={class:"list-group-item"},T={class:"list-group-item"},Y={key:0,class:"list-group-item"},j={class:"list-group-item"},q={class:"col-md-8"};function G(s,H,n,J,K,M){const o=f("Link");return c(),r(h,null,[t("section",g,[t("div",p,[t("div",v,[t("div",b,[t("div",k,[t("div",w,[t("img",{alt:"Image placeholder",src:n.author.small_avatar,class:"card-profile-image avatar rounded-circle shadow hover-shadow-lg author-avatar"},null,8,y)]),t("span",L,e(n.author.full_name),1),t("div",B,e(n.author.code),1),t("div",null,[t("span",C,e(s.__("Author")),1),n.author.inactive?(c(),r("span",N,e(s.__("Inactive")),1)):d("",!0)])])])])])]),t("section",S,[t("div",V,[t("div",A,[t("div",I,[t("ul",E,[t("li",F,[t("div",null,[a(o,{href:s.route("author.account.edit")},{default:l(()=>[i(e(s.__("Contact Information")),1)]),_:1},8,["href"])])]),t("li",P,[t("div",null,[a(o,{href:s.route("author.account.location")},{default:l(()=>[i(e(s.__("Location")),1)]),_:1},8,["href"])])]),t("li",$,[t("div",null,[a(o,{href:s.route("author.account.bio")},{default:l(()=>[i(e(s.__("Bio")),1)]),_:1},8,["href"])])]),t("li",z,[t("div",null,[a(o,{href:s.route("author.account.skill")},{default:l(()=>[i(e(s.__("Skill & Experience")),1)]),_:1},8,["href"])])]),t("li",D,[t("div",null,[a(o,{href:s.route("author.account.payment.settings")},{default:l(()=>[i(e(s.__("Payment")),1)]),_:1},8,["href"])])]),t("li",R,[t("div",null,[a(o,{href:s.route("author.account.avatar")},{default:l(()=>[i(e(s.__("Avatar")),1)]),_:1},8,["href"])])]),t("li",T,[t("div",null,[a(o,{href:s.route("author.account.password")},{default:l(()=>[i(e(s.__("Password")),1)]),_:1},8,["href"])])]),s.$page.props.is_single_language?d("",!0):(c(),r("li",Y,[t("div",null,[a(o,{href:s.route("author.account.language")},{default:l(()=>[i(e(s.__("Language")),1)]),_:1},8,["href"])])])),t("li",j,[t("div",null,[a(o,{href:s.route("author.account.profile")},{default:l(()=>[i(e(s.__("Your Services and Rates")),1)]),_:1},8,["href"])])])])]),t("div",q,[_(s.$slots,"default")])])])])],64)}const U=u(m,[["render",G]]);export{U as default};

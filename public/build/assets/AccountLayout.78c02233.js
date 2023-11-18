import{_,c as i,b as e,t,d,a as o,w as l,e as u,F as f,r as h,o as c,f as n}from"./app.40136f18.js";import"./bootstrap.esm.2333d793.js";const m={props:["freelancer"]},g={class:"d-flex align-items-end navbar-background"},p={class:"container pt-4 pt-lg-0"},v={class:"row"},b={class:"col-lg-12 text-center"},k={class:"mb-4 mt-4"},w={class:"mx-auto"},y=["src"],L={class:"h2 mb-0 text-white d-block"},B={class:"text-white"},C={class:"badge bg-secondary me-2"},N={key:0,class:"badge bg-danger"},S={class:"pt-md-5 pt-lg-0"},V={class:"container page-container"},F={class:"row mt-4"},I={class:"col-md-4"},A={class:"list-group sticky-top"},E={class:"list-group-item"},P={class:"list-group-item"},$={class:"list-group-item"},D={class:"list-group-item"},R={class:"list-group-item"},T={class:"list-group-item"},Y={class:"list-group-item"},j={key:0,class:"list-group-item"},q={class:"list-group-item"},z={class:"col-md-8"};function G(s,H,r,J,K,M){const a=h("Link");return c(),i(f,null,[e("section",g,[e("div",p,[e("div",v,[e("div",b,[e("div",k,[e("div",w,[e("img",{alt:"Image placeholder",src:r.freelancer.small_avatar,class:"card-profile-image avatar rounded-circle shadow hover-shadow-lg freelancer-avatar"},null,8,y)]),e("span",L,t(r.freelancer.full_name),1),e("div",B,t(r.freelancer.code),1),e("div",null,[e("span",C,t(s.__("Freelancer")),1),r.freelancer.inactive?(c(),i("span",N,t(s.__("Inactive")),1)):d("",!0)])])])])])]),e("section",S,[e("div",V,[e("div",F,[e("div",I,[e("ul",A,[e("li",E,[e("div",null,[o(a,{href:s.route("freelancer.account.edit")},{default:l(()=>[n(t(s.__("Contact Information")),1)]),_:1},8,["href"])])]),e("li",P,[e("div",null,[o(a,{href:s.route("freelancer.account.location")},{default:l(()=>[n(t(s.__("Location")),1)]),_:1},8,["href"])])]),e("li",$,[e("div",null,[o(a,{href:s.route("freelancer.account.bio")},{default:l(()=>[n(t(s.__("Bio")),1)]),_:1},8,["href"])])]),e("li",D,[e("div",null,[o(a,{href:s.route("freelancer.account.skill")},{default:l(()=>[n(t(s.__("Skill & Experience")),1)]),_:1},8,["href"])])]),e("li",R,[e("div",null,[o(a,{href:s.route("freelancer.account.payment.settings")},{default:l(()=>[n(t(s.__("Payment")),1)]),_:1},8,["href"])])]),e("li",T,[e("div",null,[o(a,{href:s.route("freelancer.account.avatar")},{default:l(()=>[n(t(s.__("Avatar")),1)]),_:1},8,["href"])])]),e("li",Y,[e("div",null,[o(a,{href:s.route("freelancer.account.password")},{default:l(()=>[n(t(s.__("Password")),1)]),_:1},8,["href"])])]),s.$page.props.is_single_language?d("",!0):(c(),i("li",j,[e("div",null,[o(a,{href:s.route("freelancer.account.language")},{default:l(()=>[n(t(s.__("Language")),1)]),_:1},8,["href"])])])),e("li",q,[e("div",null,[o(a,{href:s.route("freelancer.account.profile")},{default:l(()=>[n(t(s.__("Your Services and Rates")),1)]),_:1},8,["href"])])])])]),e("div",z,[u(s.$slots,"default")])])])])],64)}const U=_(m,[["render",G]]);export{U as default};

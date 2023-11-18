import i from"./ProfileLayout.b904ce88.js";import{_ as r,c as l,a,w as m,F as u,r as c,o as d,t as e,d as h,b as t}from"./app.707c49f0.js";import"./bootstrap.esm.2333d793.js";const f={props:["data","customer"],components:{ProfileLayout:i}},b={key:0,class:"alert alert-primary",role:"alert"},v={class:"row"},x={class:"col-md-6"},w={class:"border mb-4 mb-xl-0 p-4"},p={class:""},y={class:"row"},g={class:"col"},L={class:"card-title text-uppercase text-muted mb-0"},k={class:"h3 font-weight-bold mb-0"},P=t("div",{class:"col-auto"},[t("div",{class:"icon icon-shape bg-danger text-white rounded-circle shadow"},[t("i",{class:"fa-solid fa-book"})])],-1),B={class:"col-md-6"},C={class:"border mb-4 mb-xl-0 p-4"},N={class:""},A={class:"row"},D={class:"col"},S={class:"card-title text-uppercase text-muted mb-0"},T={class:"h3 font-weight-bold mb-0"},V=t("div",{class:"col-auto"},[t("div",{class:"icon icon-shape bg-success text-white rounded-circle shadow"},[t("i",{class:"fa-solid fa-wallet"})])],-1),E={class:"table table-bordered mt-4"},F={class:"text-muted text-left"},H={class:"text-left"},J={class:"text-muted text-left"},M={class:"text-left"},O={class:"text-muted text-left"},W={class:"text-left"},Y={class:"text-muted text-left"},j={class:"text-left"},q={class:"text-muted text-left"},z={class:"text-left"},G={class:"text-muted text-left"},I={class:"text-left"};function K(s,Q,o,R,U,X){const _=c("AppHead"),n=c("ProfileLayout");return d(),l(u,null,[a(_,{title:o.data.title},null,8,["title"]),a(n,{customer:o.customer},{default:m(()=>[o.customer.customer_profile.internal_note?(d(),l("div",b,e(o.customer.customer_profile.internal_note),1)):h("",!0),t("div",v,[t("div",x,[t("div",w,[t("div",p,[t("div",y,[t("div",g,[t("h5",L,e(s.__("Total Orders")),1),t("span",k,e(o.customer.customer_tasks_count),1)]),P])])])]),t("div",B,[t("div",C,[t("div",N,[t("div",A,[t("div",D,[t("h5",S,e(s.__("Wallet Balance")),1),t("span",T,e(s.formatMoney(o.customer.wallet_balance)),1)]),V])])])])]),t("table",E,[t("tr",null,[t("td",F,e(s.__("Email")),1),t("td",H,e(o.customer.email),1)]),t("tr",null,[t("td",J,e(s.__("Phone")),1),t("td",M,e(o.customer.phone),1)]),t("tr",null,[t("td",O,e(s.__("Joined")),1),t("td",W,e(s.localDateTime(o.customer.created_at)),1)]),t("tr",null,[t("td",Y,e(s.__("Last Login")),1),t("td",j,e(s.localDateTime(o.customer.last_login_at)),1)]),t("tr",null,[t("td",q,e(s.__("Country")),1),t("td",z,e(o.customer.country.name),1)]),t("tr",null,[t("td",G,e(s.__("Allow Paying Later")),1),t("td",I,e(o.customer.customer_profile.allow_paying_later?s.__("Yes"):s.__("No")),1)])])]),_:1},8,["customer"])],64)}const et=r(f,[["render",K]]);export{et as default};

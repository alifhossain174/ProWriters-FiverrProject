import g from"./CheckoutLayout.7e28e7de.js";import{_ as v,c as l,a as c,w as i,F as u,r,o as n,b as t,t as a,q as h,A as f,f as p,d as m}from"./app.2f940534.js";import"./bootstrap.esm.2333d793.js";const w={props:["data"],components:{CheckoutLayout:g}},C={key:0},L={class:"text-muted"},B={class:"list-group"},b={key:1},N=t("br",null,null,-1),V={class:"text-muted"},A={class:"list-group"},S={class:"text-muted"},F={key:2},H=t("br",null,null,-1),O={class:"text-muted"},P={class:"list-group"},q=t("i",{class:"fas fa-wallet"},null,-1);function x(o,D,e,E,M,T){const y=r("AppHead"),_=r("Link"),k=r("CheckoutLayout");return n(),l(u,null,[c(y,{title:e.data.title},null,8,["title"]),c(k,{data:e.data,title:o.__("Select a payment option")},{default:i(()=>[t("div",null,[e.data.payment_options.online?(n(),l("div",C,[t("p",L,a(o.__("Online")),1),t("div",B,[(n(!0),l(u,null,h(e.data.payment_options.online,(s,d)=>(n(),f(_,{key:d,href:s.url,class:"list-group-item list-group-item-action"},{default:i(()=>[p(a(s.name),1)]),_:2},1032,["href"]))),128))])])):m("",!0),e.data.payment_options.offline?(n(),l("div",b,[N,t("p",V,a(o.__("Offline")),1),t("div",A,[(n(!0),l(u,null,h(e.data.payment_options.offline,(s,d)=>(n(),f(_,{key:d,href:o.route("pay_with_offline_method",{payment_method:s.slug,token:e.data.token}),class:"list-group-item list-group-item-action"},{default:i(()=>[t("div",null,a(s.name),1),t("small",S,a(s.description),1)]),_:2},1032,["href"]))),128))])])):m("",!0),e.data.show_wallet_option?(n(),l("div",F,[H,t("p",O,a(o.__("Wallet"))+" "+a(o.__("Balance"))+" : "+a(e.data.wallet_balance),1),t("div",P,[c(_,{href:o.route("pay_with_wallet",{token:e.data.token}),class:"list-group-item list-group-item-action"},{default:i(()=>[t("div",null,[q,p(" "+a(o.__("Pay using your wallet")),1)])]),_:1},8,["href"])])])):m("",!0)])]),_:1},8,["data","title"])],64)}const G=v(w,[["render",x]]);export{G as default};

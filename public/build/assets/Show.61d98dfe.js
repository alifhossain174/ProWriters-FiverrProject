import _ from"./ProfileLayout.b4b67f17.js";import{_ as c,c as r,a as l,w as i,F as u,r as a,o as m,b as t,t as e}from"./app.2022c6b3.js";import"./bootstrap.esm.2333d793.js";const f={props:["data","user"],components:{ProfileLayout:_}},h={class:"table table-bordered mt-4"},x={class:"text-muted text-left"},p={class:"text-left"},b={class:"text-muted text-left"},y={class:"text-left"},P={class:"text-muted text-left"},w={class:"text-left"},B={class:"text-muted text-left"},D={class:"text-left"},L={class:"text-muted text-left"},g={class:"text-left"};function k(o,A,s,C,E,F){const n=a("AppHead"),d=a("ProfileLayout");return m(),r(u,null,[l(n,{title:s.data.title},null,8,["title"]),l(d,{user:s.user},{default:i(()=>[t("table",h,[t("tr",null,[t("td",x,e(o.__("ID")),1),t("td",p,e(s.user.code),1)]),t("tr",null,[t("td",b,e(o.__("Email")),1),t("td",y,e(s.user.email),1)]),t("tr",null,[t("td",P,e(o.__("Phone")),1),t("td",w,e(s.user.phone),1)]),t("tr",null,[t("td",B,e(o.__("Joined")),1),t("td",D,e(o.localDateTime(s.user.created_at)),1)]),t("tr",null,[t("td",L,e(o.__("Role")),1),t("td",g,e(s.data.role_name),1)])])]),_:1},8,["user"])],64)}const V=c(f,[["render",k]]);export{V as default};
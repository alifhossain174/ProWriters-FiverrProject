import _ from"./TaskShowLayout.fb45a126.js";import{_ as r,A as h,w as n,r as i,o as a,b as t,c,t as s,a as u,f as m}from"./app.9acdbdf3.js";import"./Countdown.8d145ebe.js";import"./bootstrap.esm.2333d793.js";const f={props:["task","data"],components:{TaskShowLayout:_}},v={class:"row"},k={class:"offset-md-3 col-md-6"},b={key:0,class:"table table-sm"},w={class:"description",width:"50%"},p={class:"text-end"},y=t("th",null,null,-1),T={class:"description"},L={class:"text-end"},B={class:"text-end"},N=["href"],S={key:1,class:"text-center text-danger"};function x(e,V,o,g,C,D){const d=i("Link"),l=i("TaskShowLayout");return a(),h(l,{task:o.task,activeTab:"financial"},{default:n(()=>[t("div",v,[t("div",k,[o.data.invoice?(a(),c("table",b,[t("thead",null,[t("tr",null,[t("th",w,s(e.__("Invoice")),1),t("th",p,s(e.__("Total")),1),y])]),t("tbody",null,[t("tr",null,[t("td",T,[t("div",null,[u(d,{href:e.route("customer.invoices.show",o.data.invoice.uuid)},{default:n(()=>[m(s(o.data.invoice.number),1)]),_:1},8,["href"])])]),t("td",L,s(e.formatMoney(o.data.invoice.total)),1),t("td",B,[t("a",{class:"btn btn-sm btn-outline-secondary",href:e.route("public.invoices.download",o.data.invoice.uuid)},s(e.__("Download")),9,N)])])])])):(a(),c("div",S,s(e.__("Not invoiced")),1))])])]),_:1},8,["task"])}const M=r(f,[["render",x]]);export{M as default};

import{_ as o,c as n,b as t,t as s,d as i,o as l}from"./app.15906225.js";import"./bootstrap.esm.2333d793.js";const _={props:["task"]},r={class:"table table-sm"},d={class:"text-end"},c={class:"text-end"},u={class:"text-end"},h={class:"text-end"},m={key:0},f={class:"text-end"},k={key:0},y={key:1},v={class:"text-end"},M={class:"text-end"},b={class:"text-end"};function g(e,B,a,C,P,S){return l(),n("table",r,[t("thead",null,[t("tr",null,[t("th",null,s(e.__("Description")),1),t("th",d,s(e.__("Price")),1)])]),t("tbody",null,[t("tr",null,[t("th",null,s(e.__("Basic Price")),1),t("th",c,s(e.formatMoney(a.task.details.basic_price)),1)]),t("tr",null,[t("td",null,s(e.__("Additional Services")),1),t("td",u,s(e.formatMoney(a.task.additional_services_price)),1)]),t("tr",null,[t("td",null,s(e.__("Customer Service")),1),t("td",h,s(e.formatMoney(a.task.service_level_price)),1)]),a.task.is_total_overridden?(l(),n("tr",m,[t("th",null,s(e.__("Original Total")),1),t("th",f,s(e.formatMoney(a.task.original_total)),1)])):i("",!0),t("tr",null,[t("th",null,[a.task.is_total_overridden?(l(),n("span",k,s(e.__("Updated Total")),1)):(l(),n("span",y,s(e.__("Total")),1))]),t("th",v,s(e.formatMoney(a.task.total)),1)]),t("tr",null,[t("td",null,s(e.__("Freelancer Cost")),1),t("td",M,s(e.formatMoney(a.task.freelancer_payment_amount)),1)]),t("tr",null,[t("th",null,s(e.__("Profit")),1),t("th",b,s(e.formatMoney(a.task.total-a.task.freelancer_payment_amount)),1)])])])}const F=o(_,[["render",g]]);export{F as default};

import{_ as o,c as s,b as t,t as e,d,F as _,o as a}from"./app.94ede146.js";import"./bootstrap.esm.2333d793.js";const i={props:["task"]},r={class:"table"},u={class:"text-end"},c={class:"text-end"},h={class:"table table-sm"},m={class:"text-end"},k={class:"text-end"},f={class:"text-end"},y={class:"text-end"},b={class:"text-end"},g={class:"text-end"},M={class:"text-end"},v={class:"text-end"},w={class:"text-end"},B={key:0},P={class:"text-end"},C={key:0},F={key:1},S={class:"text-end"},T={class:"text-end"},j={class:"text-end"};function A(n,D,l,N,U,V){return a(),s(_,null,[t("table",r,[t("thead",null,[t("tr",null,[t("th",null,e(n.__("Price per word")),1),t("th",null,e(n.__("Word Count")),1),t("th",u,e(n.__("Base Price")),1)])]),t("tbody",null,[t("tr",null,[t("td",null,e(l.task.details.per_word_price),1),t("td",null,e(l.task.details.number_of_words),1),t("td",c,e(n.formatMoney(l.task.details.per_word_price*l.task.details.number_of_words)),1)])])]),t("table",h,[t("thead",null,[t("tr",null,[t("th",null,e(n.__("Description")),1),t("th",m,e(n.__("Price")),1)])]),t("tbody",null,[t("tr",null,[t("td",null,e(n.__("Base Price")),1),t("td",k,e(n.formatMoney(l.task.details.per_word_price*l.task.details.number_of_words)),1)]),t("tr",null,[t("td",null,e(n.__("Assignment")),1),t("td",f,e(n.formatMoney(l.task.details.assignment_price)),1)]),t("tr",null,[t("td",null,e(n.__("Subject")),1),t("td",y,e(n.formatMoney(l.task.details.subject_price)),1)]),t("tr",null,[t("td",null,e(n.__("Urgency")),1),t("td",b,e(n.formatMoney(l.task.details.urgency_price)),1)]),t("tr",null,[t("td",null,e(n.__("Language")),1),t("td",g,e(n.formatMoney(l.task.details.language_price)),1)]),t("tr",null,[t("th",null,e(n.__("Basic Price")),1),t("th",M,e(n.formatMoney(l.task.basic_price)),1)]),t("tr",null,[t("td",null,e(n.__("Additional Services")),1),t("td",v,e(n.formatMoney(l.task.additional_services_price)),1)]),t("tr",null,[t("td",null,e(n.__("Customer Service")),1),t("td",w,e(n.formatMoney(l.task.service_level_price)),1)]),l.task.is_total_overridden?(a(),s("tr",B,[t("th",null,e(n.__("Original Total")),1),t("th",P,e(n.formatMoney(l.task.original_total)),1)])):d("",!0),t("tr",null,[t("th",null,[l.task.is_total_overridden?(a(),s("span",C,e(n.__("Updated Total")),1)):(a(),s("span",F,e(n.__("Total")),1))]),t("th",S,e(n.formatMoney(l.task.total)),1)]),t("tr",null,[t("td",null,e(n.__("Freelancer Cost")),1),t("td",T,e(n.formatMoney(l.task.freelancer_payment_amount)),1)]),t("tr",null,[t("th",null,e(n.__("Profit")),1),t("th",j,e(n.formatMoney(l.task.total-l.task.freelancer_payment_amount)),1)])])])],64)}const L=o(i,[["render",A]]);export{L as default};

import{T as g}from"./Table.c4394f69.js";import k from"./Search.e35e7b98.js";import{_ as N,c as i,a as o,b as t,w as r,F as d,r as n,o as c,q as T,f as S,t as l,E as v}from"./app.2022c6b3.js";import"./Pagination.03b1e965.js";import"./Select.7c90381d.js";import"./SearchButton.e61ca1f4.js";import"./vanilla-picker.csp.7eafc9f1.js";import"./debounce.1c99c80a.js";import"./DateRangePicker.874875ba.js";import"./bootstrap.esm.2333d793.js";const D={props:["data","invoices","filters"],components:{Table:g,Search:k},data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("Due Date"),className:""},{name:this.__("Status"),className:""},{name:this.__("Total"),className:"text-end"}]}}},methods:{getStatusColor(s){this.data.ribbon_bg_colors[s]}}},y={class:"container page-container"},w={class:"row"},x={class:"col-md-3"},B={class:"col-md-9"},C={class:""},L={class:"text-end"};function V(s,A,e,E,_,F){const m=n("AppHead"),u=n("PageTitle"),h=n("Search"),p=n("Link"),f=n("Table");return c(),i(d,null,[o(m,{title:e.data.title},null,8,["title"]),t("div",y,[o(u,{title:e.data.title},null,8,["title"]),t("div",w,[t("div",x,[o(h,{data:e.data,filters:e.filters},null,8,["data","filters"])]),t("div",B,[o(f,{options:_.tableOptions,links:e.invoices.links,total:e.invoices.total},{default:r(()=>[(c(!0),i(d,null,T(e.invoices.data,(a,b)=>(c(),i("tr",{key:b},[t("td",null,[o(p,{href:s.route("customer.invoices.show",a.uuid)},{default:r(()=>[S(l(a.number),1)]),_:2},1032,["href"])]),t("td",null,l(s.localDate(a.invoice_date)),1),t("td",C,l(s.localDate(a.due_date)),1),t("td",null,[t("span",{class:"badge",style:v({background:e.data.ribbon_bg_colors[a.invoice_status_id]})},l(a.status.name),5)]),t("td",L,l(s.formatMoney(a.total)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const K=N(D,[["render",V]]);export{K as default};
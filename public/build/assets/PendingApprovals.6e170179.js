import{T as h}from"./Table.c4394f69.js";import{_ as f,c as n,a as o,b as t,w as b,F as r,r as l,o as i,q as N,t as s}from"./app.2022c6b3.js";import"./Pagination.03b1e965.js";import"./bootstrap.esm.2333d793.js";const g={components:{Table:h},props:["data","payments"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("Method"),className:""},{name:this.__("Reference"),className:""},{name:this.__("Amount"),className:"text-end"}]}}}},k={class:"container page-container"},T={class:"row"},v={class:"col-md-12"},x={class:"text-end"};function y(c,A,e,w,d,B){const _=l("AppHead"),m=l("PageTitle"),p=l("Table");return i(),n(r,null,[o(_,{title:e.data.title},null,8,["title"]),t("div",k,[o(m,{title:e.data.title},null,8,["title"]),t("div",T,[t("div",v,[o(p,{options:d.tableOptions,links:e.payments.links,total:e.payments.total,tableStyle:"fs-8"},{default:b(()=>[(i(!0),n(r,null,N(e.payments.data,(a,u)=>(i(),n("tr",{key:u},[t("td",null,s(a.number),1),t("td",null,s(c.localDate(a.created_at)),1),t("td",null,s(a.method.name),1),t("td",null,s(a.reference),1),t("td",x,s(c.formatMoney(a.amount)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const H=f(g,[["render",y]]);export{H as default};

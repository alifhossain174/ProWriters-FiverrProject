import{T as b}from"./Table.ebb165fc.js";import{_ as N,c as i,a as n,b as t,w as r,F as d,r as o,o as c,q as k,f as T,t as s}from"./app.94ede146.js";import"./Pagination.92b4b13c.js";import"./bootstrap.esm.2333d793.js";const g={components:{Table:b},props:["data","payments"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("Method"),className:""},{name:this.__("Reference"),className:""},{name:this.__("Amount"),className:"text-end"}]}}}},x={class:"container page-container"},v={class:"row"},w={class:"col-md-12"},y={class:"text-end"};function A(l,B,a,D,_,L){const m=o("AppHead"),u=o("PageTitle"),p=o("Link"),f=o("Table");return c(),i(d,null,[n(m,{title:a.data.title},null,8,["title"]),t("div",x,[n(u,{title:a.data.title},null,8,["title"]),t("div",v,[t("div",w,[n(f,{options:_.tableOptions,links:a.payments.links,total:a.payments.total,tableStyle:"fs-8"},{default:r(()=>[(c(!0),i(d,null,k(a.payments.data,(e,h)=>(c(),i("tr",{key:h},[t("td",null,[n(p,{href:l.route("customer.payments.show",e.uuid)},{default:r(()=>[T(s(e.number),1)]),_:2},1032,["href"])]),t("td",null,s(l.localDate(e.created_at)),1),t("td",null,s(e.method),1),t("td",null,s(e.reference),1),t("td",y,s(l.formatMoney(e.amount)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const M=N(g,[["render",A]]);export{M as default};
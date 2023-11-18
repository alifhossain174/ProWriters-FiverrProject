import{T as k}from"./Table.ebb165fc.js";import{D as N}from"./DestroyButton.a8f3c0a1.js";import{S as g}from"./SearchBar.1b4d969c.js";import{_ as v,c as r,a as s,b as t,w as l,F as _,r as o,o as c,f as m,t as n,q as x}from"./app.94ede146.js";import"./Pagination.92b4b13c.js";import"./debounce.b3e602c6.js";import"./bootstrap.esm.2333d793.js";const D={props:["data","coupons","filters"],components:{Table:k,DestroyButton:N,SearchBar:g},data(){return{tableOptions:{titles:[{name:this.__("Code"),className:""},{name:this.__("Active Date"),className:""},{name:this.__("Expiry Date"),className:""},{name:this.__("Usage"),className:""},{name:this.__("Action"),className:"text-end"}]}}}},T={class:"container mt-4 page-container"},w={class:"float-end"},A=t("i",{class:"fa-solid fa-plus"},null,-1),S={class:"row"},C={class:"col-md-12"},L={class:""},V={class:""},E={class:""},F={class:"text-end"};function H(i,O,e,P,u,q){const f=o("AppHead"),d=o("Link"),h=o("PageTitle"),p=o("SearchBar"),b=o("DestroyButton"),y=o("Table");return c(),r(_,null,[s(f,{title:e.data.title},null,8,["title"]),t("div",T,[s(h,{title:e.data.title},{default:l(()=>[t("div",w,[s(d,{href:e.data.urls.new_item,class:"btn btn-sm btn-primary"},{default:l(()=>[A,m(" "+n(i.__("Add new")),1)]),_:1},8,["href"])])]),_:1},8,["title"]),t("div",S,[t("div",C,[s(p,{url:e.data.urls.search,filters:e.filters.filters},null,8,["url","filters"]),s(y,{options:u.tableOptions,links:e.coupons.links,total:e.coupons.total},{default:l(()=>[(c(!0),r(_,null,x(e.coupons.data,(a,B)=>(c(),r("tr",{key:B},[t("td",null,[s(d,{href:i.route("admin.coupons.edit",a.id)},{default:l(()=>[m(n(a.code),1)]),_:2},1032,["href"])]),t("td",L,n(a.active_date),1),t("td",V,n(a.expiry_date),1),t("td",E,n(a.usage),1),t("td",F,[s(b,{delete_url:i.route("admin.coupons.destroy",a.id)},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])])])])],64)}const M=v(D,[["render",H]]);export{M as default};

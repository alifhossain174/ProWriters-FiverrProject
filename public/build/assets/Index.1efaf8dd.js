import{T as k}from"./Table.17e80b9f.js";import{S as T}from"./SearchBar.0083f50f.js";import{_ as w,c as u,a as s,b as t,w as o,F as m,r,o as d,q as y,f as c,t as l}from"./app.969842cf.js";import"./Pagination.7add1a6b.js";import"./debounce.ed46515d.js";import"./bootstrap.esm.2333d793.js";const A={components:{Table:k,SearchBar:T},props:["data","transactions","filters"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Type"),className:""},{name:this.__("Date"),className:""},{name:this.__("Account"),className:""},{name:this.__("Adjuster"),className:""},{name:this.__("Amount"),className:"text-end"}]}}}},B={class:"container page-container"},S={class:"row"},g={class:"col-md-12"},v={class:"text-end"};function j(n,x,a,D,_,L){const f=r("AppHead"),h=r("SearchBar"),p=r("PageTitle"),i=r("Link"),N=r("Table");return d(),u(m,null,[s(f,{title:a.data.title},null,8,["title"]),t("div",B,[t("div",S,[t("div",g,[s(p,{title:a.data.title},{default:o(()=>[s(h,{hide_inactive_search:!0,url:a.data.urls.search,filters:a.filters.filters},null,8,["url","filters"])]),_:1},8,["title"]),s(N,{options:_.tableOptions,links:a.transactions.links,total:a.transactions.total,tableStyle:"fs-8"},{default:o(()=>[(d(!0),u(m,null,y(a.transactions.data,(e,b)=>(d(),u("tr",{key:b},[t("td",null,[s(i,{href:n.route("admin.walletAdjustments.show",e.uuid)},{default:o(()=>[c(l(e.number),1)]),_:2},1032,["href"])]),t("td",null,l(e.type),1),t("td",null,l(n.localDate(e.created_at)),1),t("td",null,[s(i,{href:n.route("admin.customers.show",e.user.uuid)},{default:o(()=>[c(l(e.user.full_name),1)]),_:2},1032,["href"])]),t("td",null,[s(i,{href:n.route("admin.users.show",e.user.uuid)},{default:o(()=>[c(l(e.adjuster.full_name),1)]),_:2},1032,["href"])]),t("td",v,l(n.formatMoney(e.amount)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const q=w(A,[["render",j]]);export{q as default};
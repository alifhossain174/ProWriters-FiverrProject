import{T as N}from"./Table.86e4761d.js";import{S as y}from"./SearchBar.3eab06b6.js";import{_ as T,c as n,a as l,b as t,w as i,F as c,r as o,o as r,q as v,t as a,f as _}from"./app.9acdbdf3.js";import"./Pagination.ebf8a665.js";import"./debounce.ebc76861.js";import"./bootstrap.esm.2333d793.js";const x={components:{Table:N,SearchBar:y},props:["data","transactions","filters"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("User"),className:""},{name:this.__("Type"),className:""},{name:this.__("Description"),className:""},{name:this.__("Amount"),className:"text-end"}]}}}},B={class:"container page-container"},S={class:"row"},g={class:"col-md-12"},D={class:"text-end"};function w(m,A,s,L,u,V){const f=o("AppHead"),p=o("SearchBar"),h=o("PageTitle"),d=o("Link"),k=o("Table");return r(),n(c,null,[l(f,{title:s.data.title},null,8,["title"]),t("div",B,[t("div",S,[t("div",g,[l(h,{title:s.data.title},{default:i(()=>[l(p,{hide_inactive_search:!0,url:s.data.urls.search,filters:s.filters.filters},null,8,["url","filters"])]),_:1},8,["title"]),l(k,{options:u.tableOptions,links:s.transactions.links,total:s.transactions.total,tableStyle:"fs-8"},{default:i(()=>[(r(!0),n(c,null,v(s.transactions.data,(e,b)=>(r(),n("tr",{key:b},[t("td",null,a(e.number),1),t("td",null,a(m.localDate(e.date)),1),t("td",null,[l(d,{href:e.user_profile_link},{default:i(()=>[_(a(e.user),1)]),_:2},1032,["href"])]),t("td",null,a(e.type),1),t("td",null,[e.reference_link?(r(),n(c,{key:0},[t("div",null,a(e.transactionable_type),1),l(d,{href:e.reference_link},{default:i(()=>[_(a(e.description),1)]),_:2},1032,["href"])],64)):(r(),n(c,{key:1},[_(a(e.reference),1)],64))]),t("td",D,a(e.amount),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const E=T(x,[["render",w]]);export{E as default};

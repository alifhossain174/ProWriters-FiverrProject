import k from"./BusinessLayout.0d294266.js";import{S as y}from"./SearchBar.13ec791b.js";import x from"./TitleBar.efec2e9b.js";import{D as N}from"./DestroyButton.fd28ee5c.js";import{T as v}from"./Table.5eecbb36.js";import{_ as T,A as b,w as l,r as s,o as r,a as o,c as i,q as D,b as n,f as L,t as c,d as S,F as V}from"./app.7185dbf0.js";import"./BusinessMenu.d08b9e82.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";import"./Pagination.9e15e503.js";const C={components:{BusinessLayout:k,SearchBar:y,Table:v,TitleBar:x,DestroyButton:N},props:["data","service_levels","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-4"},{name:this.__("Default"),className:"col-md-2 text-center"},{name:this.__("Price"),className:"col-md-3 text-end"},{name:this.__("Action"),className:"col-md-1 text-end"}]}}}},F={class:"text-center"},g={key:0},w=n("i",{class:"fa-solid fa-circle-check text-success"},null,-1),A=[w],O={class:"text-end"},q={class:"col-md-2 text-end"};function E(a,I,e,M,d,P){const _=s("TitleBar"),m=s("SearchBar"),u=s("Link"),f=s("DestroyButton"),p=s("Table"),h=s("BusinessLayout");return r(),b(h,{title:e.data.title},{default:l(()=>[o(_,{title:e.data.title,create_link:a.route("admin.serviceLevels.create")},null,8,["title","create_link"]),o(m,{url:a.route("admin.serviceLevels.index"),filters:e.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),o(p,{options:d.tableOptions,links:e.service_levels.links,total:e.service_levels.total},{default:l(()=>[(r(!0),i(V,null,D(e.service_levels.data,(t,B)=>(r(),i("tr",{key:B},[n("td",null,[o(u,{href:a.route("admin.serviceLevels.edit",t.id)},{default:l(()=>[L(c(t.name),1)]),_:2},1032,["href"])]),n("td",F,[t.is_default?(r(),i("span",g,A)):S("",!0)]),n("td",O,c(a.formatMoney(t.price?parseFloat(t.price):0)),1),n("td",q,[o(f,{delete_url:a.route("admin.serviceLevels.destroy",t.id)},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["title"])}const X=T(C,[["render",E]]);export{X as default};

import B from"./ManageContentLayout.8c2555d9.js";import{D as y}from"./DestroyButton.fbe4fcbf.js";import{T as k}from"./Table.7ca370d4.js";import{S as w}from"./SearchBar.4d85bd7f.js";import{_ as L,c as l,a as e,w as o,F as r,r as n,o as i,q as N,b as c,f as x,t as A}from"./app.1d2673ab.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.e95d2962.js";import"./debounce.8ee276ba.js";const C={components:{ManageContentLayout:B,Table:k,DestroyButton:y,SearchBar:w},props:["data","content_language","website_pages","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-10"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},D={class:"col-md-2 text-end"};function S(a,T,t,P,d,M){const m=n("AppHead"),u=n("AddButton"),_=n("SearchBar"),g=n("Link"),f=n("DestroyButton"),p=n("Table"),h=n("ManageContentLayout");return i(),l(r,null,[e(m,{title:t.data.title},null,8,["title"]),e(h,{content_language:t.content_language,title:t.data.title},{action:o(()=>[e(u,{href:a.route("admin.manage.content.websitePages.create",t.content_language)},null,8,["href"])]),default:o(()=>[e(_,{url:a.route("admin.manage.content.websitePages.index",t.content_language),filters:t.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),e(p,{options:d.tableOptions,links:t.website_pages.links,total:t.website_pages.total},{default:o(()=>[(i(!0),l(r,null,N(t.website_pages.data,(s,b)=>(i(),l("tr",{key:b},[c("td",null,[e(g,{href:a.route("admin.manage.content.websitePages.edit",[t.content_language,s.id])},{default:o(()=>[x(A(s.name),1)]),_:2},1032,["href"])]),c("td",D,[e(f,{delete_url:a.route("admin.manage.content.websitePages.destroy",[t.content_language,s.id])},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["content_language","title"])],64)}const j=L(C,[["render",S]]);export{j as default};

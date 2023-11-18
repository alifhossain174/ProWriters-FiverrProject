import C from"./ManageContentLayout.d20da0aa.js";import{D as k}from"./DestroyButton.966ffcfb.js";import{T as y}from"./Table.8bd0b9d0.js";import{S as b}from"./SearchBar.f98c2368.js";import{_ as L,c as l,a as e,w as o,F as i,r as n,o as r,q as N,b as c,f as x,t as A}from"./app.40136f18.js";import"./Pagination.58b232ad.js";import"./debounce.84e4095c.js";import"./bootstrap.esm.2333d793.js";const D={components:{ManageContentLayout:C,Table:y,DestroyButton:k,SearchBar:b},props:["data","content_language","postCategories","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-10"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},S={class:"col-md-2 text-end"};function T(a,M,t,V,d,v){const m=n("AppHead"),u=n("AddButton"),_=n("SearchBar"),g=n("Link"),f=n("DestroyButton"),p=n("Table"),h=n("ManageContentLayout");return r(),l(i,null,[e(m,{title:t.data.title},null,8,["title"]),e(h,{content_language:t.content_language,title:t.data.title},{action:o(()=>[e(u,{href:a.route("admin.manage.content.postCategories.create",t.content_language)},null,8,["href"])]),default:o(()=>[e(_,{url:a.route("admin.manage.content.postCategories.index",t.content_language),filters:t.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),e(p,{options:d.tableOptions,links:t.postCategories.links,total:t.postCategories.total},{default:o(()=>[(r(!0),l(i,null,N(t.postCategories.data,(s,B)=>(r(),l("tr",{key:B},[c("td",null,[e(g,{href:a.route("admin.manage.content.postCategories.edit",[t.content_language,s.id])},{default:o(()=>[x(A(s.name),1)]),_:2},1032,["href"])]),c("td",S,[e(f,{delete_url:a.route("admin.manage.content.postCategories.destroy",[t.content_language,s.id])},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["content_language","title"])],64)}const z=L(D,[["render",T]]);export{z as default};

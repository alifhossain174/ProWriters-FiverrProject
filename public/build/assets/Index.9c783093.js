import C from"./ManageContentLayout.cdf291ff.js";import{D as k}from"./DestroyButton.60aefe81.js";import{T as q}from"./Table.86e4761d.js";import{S as y}from"./SearchBar.3eab06b6.js";import{_ as b,c as r,a as e,w as o,F as i,r as n,o as s,q as L,b as c,f as N,t as x}from"./app.9acdbdf3.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.ebf8a665.js";import"./debounce.ebc76861.js";const A={components:{ManageContentLayout:C,Table:q,DestroyButton:k,SearchBar:y},props:["data","content_language","faqCategories","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-10"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},D={class:"col-md-2 text-end"};function S(a,T,t,M,d,V){const m=n("AppHead"),u=n("AddButton"),_=n("SearchBar"),g=n("Link"),f=n("DestroyButton"),h=n("Table"),p=n("ManageContentLayout");return s(),r(i,null,[e(m,{title:t.data.title},null,8,["title"]),e(p,{content_language:t.content_language,title:t.data.title},{action:o(()=>[e(u,{href:a.route("admin.manage.content.faqCategories.create",t.content_language)},null,8,["href"])]),default:o(()=>[e(_,{url:a.route("admin.manage.content.faqCategories.index",t.content_language),filters:t.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),e(h,{options:d.tableOptions,links:t.faqCategories.links,total:t.faqCategories.total},{default:o(()=>[(s(!0),r(i,null,L(t.faqCategories.data,(l,B)=>(s(),r("tr",{key:B},[c("td",null,[e(g,{href:a.route("admin.manage.content.faqCategories.edit",[t.content_language,l.id])},{default:o(()=>[N(x(l.name),1)]),_:2},1032,["href"])]),c("td",D,[e(f,{delete_url:a.route("admin.manage.content.faqCategories.destroy",[t.content_language,l.id])},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["content_language","title"])],64)}const z=b(A,[["render",S]]);export{z as default};

import y from"./ManageContentLayout.73fb7423.js";import{D as k}from"./DestroyButton.ca76c89b.js";import{T as b}from"./Table.8330e037.js";import{S as q}from"./SearchBar.1cdaccf0.js";import{_ as L,c as s,a as e,y as o,F as r,f as n,o as i,r as N,b as c,d as Q,t as x}from"./app.b345893e.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.109538d8.js";import"./debounce.b9b0fcdf.js";const A={components:{ManageContentLayout:y,Table:b,DestroyButton:k,SearchBar:q},props:["data","content_language","faqQuestions","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-10"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},C={class:"col-md-2 text-end"};function D(a,S,t,T,u,M){const d=n("AppHead"),m=n("AddButton"),_=n("SearchBar"),f=n("Link"),g=n("DestroyButton"),h=n("Table"),p=n("ManageContentLayout");return i(),s(r,null,[e(d,{title:t.data.title},null,8,["title"]),e(p,{content_language:t.content_language,title:t.data.title},{action:o(()=>[e(m,{href:a.route("admin.manage.content.faqQuestions.create",t.content_language)},null,8,["href"])]),default:o(()=>[e(_,{url:a.route("admin.manage.content.faqQuestions.index",t.content_language),filters:t.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),e(h,{options:u.tableOptions,links:t.faqQuestions.links,total:t.faqQuestions.total},{default:o(()=>[(i(!0),s(r,null,N(t.faqQuestions.data,(l,B)=>(i(),s("tr",{key:B},[c("td",null,[e(f,{href:a.route("admin.manage.content.faqQuestions.edit",[t.content_language,l.id])},{default:o(()=>[Q(x(l.title),1)]),_:2},1032,["href"])]),c("td",C,[e(g,{delete_url:a.route("admin.manage.content.faqQuestions.destroy",[t.content_language,l.id])},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["content_language","title"])],64)}const j=L(A,[["render",D]]);export{j as default};

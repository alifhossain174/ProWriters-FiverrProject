import y from"./ManageContentLayout.22db0968.js";import{D as k}from"./DestroyButton.c89251e1.js";import{T as b}from"./Table.638f05fb.js";import{S as L}from"./SearchBar.ce624d50.js";import{_ as N,c as s,a as e,w as o,F as c,r as n,o as r,q as x,b as i,f as A,t as C}from"./app.6486bb89.js";import"./bootstrap.esm.2333d793.js";import"./Pagination.5e3aa5eb.js";import"./debounce.2741a44f.js";const D={components:{ManageContentLayout:y,Table:b,DestroyButton:k,SearchBar:L},props:["data","content_language","posts","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-10"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},S={class:"col-md-2 text-end"};function T(a,M,t,V,d,v){const u=n("AppHead"),m=n("AddButton"),_=n("SearchBar"),g=n("Link"),f=n("DestroyButton"),p=n("Table"),h=n("ManageContentLayout");return r(),s(c,null,[e(u,{title:t.data.title},null,8,["title"]),e(h,{content_language:t.content_language,title:t.data.title},{action:o(()=>[e(m,{href:a.route("admin.manage.content.posts.create",t.content_language)},null,8,["href"])]),default:o(()=>[e(_,{url:a.route("admin.manage.content.posts.index",t.content_language),filters:t.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),e(p,{options:d.tableOptions,links:t.posts.links,total:t.posts.total},{default:o(()=>[(r(!0),s(c,null,x(t.posts.data,(l,B)=>(r(),s("tr",{key:B},[i("td",null,[e(g,{href:a.route("admin.manage.content.posts.edit",[t.content_language,l.id])},{default:o(()=>[A(C(l.title),1)]),_:2},1032,["href"])]),i("td",S,[e(f,{delete_url:a.route("admin.manage.content.posts.destroy",[t.content_language,l.id])},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["content_language","title"])],64)}const z=N(D,[["render",T]]);export{z as default};

import h from"./ManageContentLayout.33812748.js";import{S as y}from"./SearchBar.0083f50f.js";import{D as B}from"./DestroyButton.17b2b5aa.js";import{T as k}from"./Table.17e80b9f.js";import{_ as w,c as l,a as e,w as a,F as c,r as n,o as i,q as L,b as r,f as N,t as x}from"./app.969842cf.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ed46515d.js";import"./Pagination.7add1a6b.js";const A={components:{ManageContentLayout:h,SearchBar:y,Table:k,DestroyButton:B},props:["data","content_language","website_menus","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-6"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},C={class:"col-md-2 text-end"};function D(o,T,t,M,m,S){const u=n("AppHead"),_=n("AddButton"),d=n("Link"),g=n("DestroyButton"),f=n("Table"),p=n("ManageContentLayout");return i(),l(c,null,[e(u,{title:t.data.title},null,8,["title"]),e(p,{content_language:t.content_language,title:t.data.title},{action:a(()=>[e(_,{href:o.route("admin.manage.content.websiteMenus.create",t.content_language)},null,8,["href"])]),default:a(()=>[e(f,{options:m.tableOptions,links:t.website_menus.links,total:t.website_menus.total},{default:a(()=>[(i(!0),l(c,null,L(t.website_menus.data,(s,b)=>(i(),l("tr",{key:b},[r("td",null,[e(d,{href:o.route("admin.manage.content.websiteMenus.edit",[t.content_language,s.id])},{default:a(()=>[N(x(s.name),1)]),_:2},1032,["href"])]),r("td",C,[e(g,{delete_url:o.route("admin.manage.content.websiteMenus.destroy",[t.content_language,s.id])},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["content_language","title"])],64)}const j=w(A,[["render",D]]);export{j as default};

import y from"./BusinessLayout.80330459.js";import k from"./Search.9489a289.js";import N from"./TitleBar.0488ea5c.js";import{D as T}from"./DestroyButton.2514f99e.js";import{T as b}from"./Table.eddc6d2a.js";import{_ as g,A as v,w as i,r as e,o as r,a,c,q as x,b as o,f as L,t as l,F as S}from"./app.571265cd.js";import"./BusinessMenu.5f08b74f.js";import"./bootstrap.esm.2333d793.js";import"./debounce.94acad4c.js";import"./Pagination.3a5daa99.js";const D={components:{BusinessLayout:y,Search:k,Table:b,TitleBar:N,DestroyButton:T},props:["data","assignments","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-5"},{name:this.__("Service"),className:"col-md-3"},{name:this.__("Price"),className:"col-md-3 text-end"},{name:this.__("Action"),className:"col-md-1 text-end"}]}}}},V={class:"text-end"},q={class:"col-md-2 text-end"};function w(s,A,t,C,m,F){const d=e("TitleBar"),_=e("Search"),u=e("Link"),f=e("DestroyButton"),p=e("Table"),h=e("BusinessLayout");return r(),v(h,{title:t.data.title},{default:i(()=>[a(d,{title:t.data.title,create_link:s.route("admin.assignments.create")},null,8,["title","create_link"]),a(_,{url:s.route("admin.assignments.index"),filters:t.filters.filters,services:t.data.services},null,8,["url","filters","services"]),a(p,{options:m.tableOptions,links:t.assignments.links,total:t.assignments.total,tableStyle:"fs-8"},{default:i(()=>[(r(!0),c(S,null,x(t.assignments.data,(n,B)=>(r(),c("tr",{key:B},[o("td",null,[a(u,{href:s.route("admin.assignments.edit",n.id)},{default:i(()=>[L(l(n.name),1)]),_:2},1032,["href"])]),o("td",null,l(n.service.name),1),o("td",V,l(s.formatMoney(n.price)),1),o("td",q,[a(f,{delete_url:s.route("admin.assignments.destroy",{assignment:n.id,_query:t.filters})},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["title"])}const K=g(D,[["render",w]]);export{K as default};

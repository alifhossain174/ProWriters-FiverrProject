import B from"./ManageContentLayout.34ced887.js";import{S as k}from"./SearchBar.c70b8e56.js";import{D as N}from"./DestroyButton.127f61d4.js";import{T as b}from"./Table.25f2de44.js";import{_ as x,c as i,a as e,w as l,F as m,r as n,o as c,q as L,b as o,f as A,t as r}from"./app.2f940534.js";import"./bootstrap.esm.2333d793.js";import"./debounce.0b2caf7a.js";import"./Pagination.c6521de8.js";const C={components:{ManageContentLayout:B,SearchBar:k,Table:b,DestroyButton:N},props:["data","content_language","testimonials","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-6"},{name:this.__("Rating"),className:"col-md-4"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},D={class:"text-muted"},T={class:"col-md-2 text-end"};function M(s,S,t,V,d,v){const _=n("AppHead"),u=n("AddButton"),g=n("Link"),f=n("DestroyButton"),p=n("Table"),h=n("ManageContentLayout");return c(),i(m,null,[e(_,{title:t.data.title},null,8,["title"]),e(h,{content_language:t.content_language,title:t.data.title},{action:l(()=>[e(u,{href:s.route("admin.manage.content.testimonials.create",t.content_language)},null,8,["href"])]),default:l(()=>[e(p,{options:d.tableOptions,links:t.testimonials.links,total:t.testimonials.total},{default:l(()=>[(c(!0),i(m,null,L(t.testimonials.data,(a,y)=>(c(),i("tr",{key:y},[o("td",null,[e(g,{href:s.route("admin.manage.content.testimonials.edit",[t.content_language,a.id])},{default:l(()=>[A(r(a.name),1)]),_:2},1032,["href"]),o("div",D,[o("small",null,r(a.position),1)])]),o("td",null,r(a.rating),1),o("td",T,[e(f,{delete_url:s.route("admin.manage.content.testimonials.destroy",[t.content_language,a.id])},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["content_language","title"])],64)}const j=x(C,[["render",M]]);export{j as default};

import k from"./BusinessLayout.6f1ddffd.js";import{S as b}from"./SearchBar.f98c2368.js";import y from"./TitleBar.b14c32c8.js";import{D as T}from"./DestroyButton.966ffcfb.js";import{T as x}from"./Table.8bd0b9d0.js";import{_ as N,A as L,w as n,r as e,o as r,a as s,c as i,q as D,b as l,f as S,t as c,F as g}from"./app.40136f18.js";import"./BusinessMenu.8eefff26.js";import"./bootstrap.esm.2333d793.js";import"./debounce.84e4095c.js";import"./Pagination.58b232ad.js";const j={components:{BusinessLayout:k,SearchBar:b,Table:x,TitleBar:y,DestroyButton:T},props:["data","subjects","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-6"},{name:this.__("Markup"),className:"col-md-4 text-end"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},F={class:"text-end"},V={class:"col-md-2 text-end"};function v(o,w,t,A,m,C){const d=e("TitleBar"),u=e("SearchBar"),_=e("Link"),p=e("DestroyButton"),f=e("Table"),B=e("BusinessLayout");return r(),L(B,{title:t.data.title},{default:n(()=>[s(d,{title:t.data.title,create_link:o.route("admin.subjects.create")},null,8,["title","create_link"]),s(u,{url:o.route("admin.subjects.index"),filters:t.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),s(f,{options:m.tableOptions,links:t.subjects.links,total:t.subjects.total},{default:n(()=>[(r(!0),i(g,null,D(t.subjects.data,(a,h)=>(r(),i("tr",{key:h},[l("td",null,[s(_,{href:o.route("admin.subjects.edit",a.id)},{default:n(()=>[S(c(a.name),1)]),_:2},1032,["href"])]),l("td",F,c(a.percentage?parseFloat(a.percentage):0)+"% ",1),l("td",V,[s(p,{delete_url:o.route("admin.subjects.destroy",a.id)},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["title"])}const P=N(j,[["render",v]]);export{P as default};

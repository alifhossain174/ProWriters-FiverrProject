import x from"./BusinessLayout.32dffb30.js";import{S as y}from"./SearchBar.f97eefb8.js";import N from"./TitleBar.e3e77a7b.js";import{D as T}from"./DestroyButton.e38c7d9d.js";import{T as v}from"./Table.c4394f69.js";import{_ as b,A as D,w as c,r as a,o,a as n,c as r,q as L,b as e,f as S,t as i,d as _,F as V}from"./app.2022c6b3.js";import"./BusinessMenu.d8c7fe78.js";import"./bootstrap.esm.2333d793.js";import"./debounce.1c99c80a.js";import"./Pagination.03b1e965.js";const C={components:{BusinessLayout:x,SearchBar:y,Table:v,TitleBar:N,DestroyButton:T},props:["data","freelancer_levels","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-4"},{name:this.__("Default"),className:"col-md-2 text-center"},{name:this.__("Numeric value"),className:"col-md-3 text-end"},{name:this.__("Popular"),className:"col-md-2 text-center"},{name:this.__("Action"),className:"col-md-1 text-end"}]}}}},g={class:"text-center"},w={key:0},A=e("i",{class:"fa-solid fa-circle-check text-success"},null,-1),F=[A],O={class:"text-center"},q={class:"text-center"},E={key:0},I=e("i",{class:"fa-solid fa-circle-check text-success"},null,-1),P=[I],j={class:"col-md-2 text-end"};function z(l,G,t,H,d,J){const m=a("TitleBar"),u=a("SearchBar"),f=a("Link"),h=a("DestroyButton"),p=a("Table"),B=a("BusinessLayout");return o(),D(B,{title:t.data.title},{default:c(()=>[n(m,{title:t.data.title,create_link:l.route("admin.freelancerLevels.create")},null,8,["title","create_link"]),n(u,{url:l.route("admin.freelancerLevels.index"),filters:t.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),n(p,{options:d.tableOptions,links:t.freelancer_levels.links,total:t.freelancer_levels.total},{default:c(()=>[(o(!0),r(V,null,L(t.freelancer_levels.data,(s,k)=>(o(),r("tr",{key:k},[e("td",null,[n(f,{href:l.route("admin.freelancerLevels.edit",s.id)},{default:c(()=>[S(i(s.name),1)]),_:2},1032,["href"])]),e("td",g,[s.is_default?(o(),r("span",w,F)):_("",!0)]),e("td",O,i(s.numeric_value),1),e("td",q,[s.is_popular?(o(),r("span",E,P)):_("",!0)]),e("td",j,[n(h,{delete_url:l.route("admin.freelancerLevels.destroy",s.id)},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["title"])}const ee=b(C,[["render",z]]);export{ee as default};

import y from"./BusinessLayout.c258e9df.js";import{S as k}from"./SearchBar.23221a33.js";import T from"./TitleBar.0973f6ce.js";import{D as N}from"./DestroyButton.069af2d8.js";import{T as b}from"./Table.f6aec961.js";import{_ as v,A as x,w as i,r as e,o as r,a as s,c,q as L,b as n,f as D,t as l,F as S}from"./app.2abe2877.js";import"./BusinessMenu.eb7a2142.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";import"./Pagination.2b29f722.js";const V={components:{BusinessLayout:y,SearchBar:k,Table:b,TitleBar:T,DestroyButton:N},props:["data","additional_services","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-5"},{name:this.__("Price Type"),className:"col-md-2"},{name:this.__("Price"),className:"col-md-3 text-end"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},g={class:"text-end"},w={class:"col-md-2 text-end"};function A(a,C,t,F,d,O){const m=e("TitleBar"),_=e("SearchBar"),u=e("Link"),f=e("DestroyButton"),p=e("Table"),B=e("BusinessLayout");return r(),x(B,{title:t.data.title},{default:i(()=>[s(m,{title:t.data.title,create_link:a.route("admin.additionalServices.create")},null,8,["title","create_link"]),s(_,{url:a.route("admin.additionalServices.index"),filters:t.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),s(p,{options:d.tableOptions,links:t.additional_services.links,total:t.additional_services.total},{default:i(()=>[(r(!0),c(S,null,L(t.additional_services.data,(o,h)=>(r(),c("tr",{key:h},[n("td",null,[s(u,{href:a.route("admin.additionalServices.edit",o.id)},{default:i(()=>[D(l(o.name),1)]),_:2},1032,["href"])]),n("td",null,l(t.data.price_types[o.type]),1),n("td",g,l(a.formatMoney(o.price)),1),n("td",w,[s(f,{delete_url:a.route("admin.additionalServices.destroy",o.id)},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["title"])}const K=v(V,[["render",A]]);export{K as default};

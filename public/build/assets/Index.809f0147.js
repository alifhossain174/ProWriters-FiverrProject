import g from"./BusinessLayout.0d294266.js";import{S as k}from"./SearchBar.13ec791b.js";import y from"./TitleBar.efec2e9b.js";import{D as T}from"./DestroyButton.fd28ee5c.js";import{T as x}from"./Table.5eecbb36.js";import{_ as N,A as b,w as s,r as e,o as r,a as n,c as i,q as L,b as l,f as D,t as c,F as S}from"./app.7185dbf0.js";import"./BusinessMenu.d08b9e82.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";import"./Pagination.9e15e503.js";const F={components:{BusinessLayout:g,SearchBar:k,Table:x,TitleBar:y,DestroyButton:T},props:["data","languages","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-6"},{name:this.__("Markup"),className:"col-md-4 text-end"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},V={class:"text-end"},v={class:"col-md-2 text-end"};function w(o,A,t,C,m,O){const d=e("TitleBar"),u=e("SearchBar"),_=e("Link"),p=e("DestroyButton"),f=e("Table"),B=e("BusinessLayout");return r(),b(B,{title:t.data.title},{default:s(()=>[n(d,{title:t.data.title,create_link:o.route("admin.languages.create")},null,8,["title","create_link"]),n(u,{url:o.route("admin.languages.index"),filters:t.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),n(f,{options:m.tableOptions,links:t.languages.links,total:t.languages.total},{default:s(()=>[(r(!0),i(S,null,L(t.languages.data,(a,h)=>(r(),i("tr",{key:h},[l("td",null,[n(_,{href:o.route("admin.languages.edit",a.id)},{default:s(()=>[D(c(a.name),1)]),_:2},1032,["href"])]),l("td",V,c(a.percentage?parseFloat(a.percentage):0)+"% ",1),l("td",v,[n(p,{delete_url:o.route("admin.languages.destroy",a.id)},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["title"])}const P=N(F,[["render",w]]);export{P as default};

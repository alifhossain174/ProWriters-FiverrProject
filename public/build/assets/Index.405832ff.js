import k from"./BusinessLayout.77d86734.js";import{S as L}from"./SearchBar.3eab06b6.js";import y from"./TitleBar.1b5cbc6c.js";import{D as T}from"./DestroyButton.60aefe81.js";import{T as x}from"./Table.86e4761d.js";import{_ as N,A as b,w as n,r as t,o as r,a as o,c as i,q as v,b as l,f as D,t as c,F as S}from"./app.9acdbdf3.js";import"./BusinessMenu.8f46f569.js";import"./debounce.ebc76861.js";import"./Pagination.ebf8a665.js";import"./bootstrap.esm.2333d793.js";const g={components:{BusinessLayout:k,SearchBar:L,Table:x,TitleBar:y,DestroyButton:T},props:["data","academic_levels","filters"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:"col-md-6"},{name:this.__("Markup"),className:"col-md-4 text-end"},{name:this.__("Action"),className:"col-md-2 text-end"}]}}}},F={class:"text-end"},V={class:"col-md-2 text-end"};function w(s,A,e,C,m,O){const d=t("TitleBar"),_=t("SearchBar"),u=t("Link"),p=t("DestroyButton"),f=t("Table"),B=t("BusinessLayout");return r(),b(B,{title:e.data.title},{default:n(()=>[o(d,{title:e.data.title,create_link:s.route("admin.academicLevels.create")},null,8,["title","create_link"]),o(_,{url:s.route("admin.academicLevels.index"),filters:e.filters.filters,hide_inactive_search:!0},null,8,["url","filters"]),o(f,{options:m.tableOptions,links:e.academic_levels.links,total:e.academic_levels.total},{default:n(()=>[(r(!0),i(S,null,v(e.academic_levels.data,(a,h)=>(r(),i("tr",{key:h},[l("td",null,[o(u,{href:s.route("admin.academicLevels.edit",a.id)},{default:n(()=>[D(c(a.name),1)]),_:2},1032,["href"])]),l("td",F,c(a.percentage?parseFloat(a.percentage):0)+"% ",1),l("td",V,[o(p,{delete_url:s.route("admin.academicLevels.destroy",a.id)},null,8,["delete_url"])])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["title"])}const P=N(g,[["render",w]]);export{P as default};
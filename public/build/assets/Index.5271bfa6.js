import k from"./Search.6c14cb7c.js";import{T as x}from"./Table.5eecbb36.js";import{D as T}from"./DestroyButton.fd28ee5c.js";import{_ as v,c as i,a as o,b as t,w as r,F as _,r as n,o as l,q as g,f as m,t as a}from"./app.7185dbf0.js";import"./Input.22a5d0b7.js";import"./CheckBox.692c21c3.js";import"./Select.e5dd87a9.js";import"./vanilla-picker.csp.ad3cebef.js";import"./debounce.eb1a3499.js";import"./Pagination.9e15e503.js";import"./bootstrap.esm.2333d793.js";const D={props:["data","applicants","filters"],components:{Table:x,DestroyButton:T,Search:k},data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("Name"),className:""},{name:this.__("Status"),className:"text-center"}]}}}},S={class:"container page-container"},w={class:"row"},y={class:"col-md-3"},B={class:"col-md-9"},L={class:""},V={class:""},A={class:"text-muted"},C={class:"text-center"};function F(c,H,e,O,d,P){const u=n("AppHead"),p=n("PageTitle"),f=n("Search"),h=n("Link"),N=n("Table");return l(),i(_,null,[o(u,{title:e.data.title},null,8,["title"]),t("div",S,[o(p,{title:e.data.title},null,8,["title"]),t("div",w,[t("div",y,[o(f,{data:e.data,filters:e.filters.filters,only:["applicants","filters"]},null,8,["data","filters"])]),t("div",B,[o(N,{options:d.tableOptions,links:e.applicants.links,total:e.applicants.total},{default:r(()=>[(l(!0),i(_,null,g(e.applicants.data,(s,b)=>(l(),i("tr",{key:b},[t("td",null,[o(h,{href:c.route("admin.applicants.show",s.uuid)},{default:r(()=>[m(a(s.number),1)]),_:2},1032,["href"])]),t("td",L,a(c.localDate(s.created_at)),1),t("td",V,[m(a(s.first_name)+" "+a(s.last_name)+" ",1),t("div",A,a(s.email),1)]),t("td",C,a(s.status.name),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const U=v(D,[["render",F]]);export{U as default};

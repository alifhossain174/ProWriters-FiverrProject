import{T as b}from"./Table.25f2de44.js";import{_ as N,c as n,a,b as t,w as l,F as i,r as o,o as c,q as T,f as v,t as d}from"./app.2f940534.js";import"./Pagination.c6521de8.js";import"./bootstrap.esm.2333d793.js";const g={components:{Table:b},props:["data","projects"],data(){return{tableOptions:{titles:[{name:this.__("Name"),className:""},{name:this.__("Service"),className:""},{name:"",className:""}]}}}},x={class:"container page-container"},B={class:"row"},j={class:"col-md-12"},w=t("td",{class:"text-end"},null,-1);function A(r,y,e,L,_,S){const m=o("AppHead"),u=o("AddButton"),p=o("PageTitle"),f=o("Link"),h=o("Table");return c(),n(i,null,[a(m,{title:e.data.title},null,8,["title"]),t("div",x,[a(p,{title:e.data.title},{default:l(()=>[a(u,{href:r.route("customer.projects.create")},null,8,["href"])]),_:1},8,["title"]),t("div",B,[t("div",j,[a(h,{options:_.tableOptions,links:e.projects.links,total:e.projects.total,tableStyle:"fs-8"},{default:l(()=>[(c(!0),n(i,null,T(e.projects.data,(s,k)=>(c(),n("tr",{key:k},[t("td",null,[a(f,{href:r.route("customer.projects.show",s.uuid)},{default:l(()=>[v(d(s.name),1)]),_:2},1032,["href"])]),t("td",null,d(s.service.name),1),w]))),128))]),_:1},8,["options","links","total"])])])])],64)}const O=N(g,[["render",A]]);export{O as default};

import{P as i}from"./Pagination.9e15e503.js";import{S as c}from"./Star.0d2fcf73.js";import{_ as l,c as r,a,b as t,t as m,F as _,r as s,o as d}from"./app.7185dbf0.js";import"./bootstrap.esm.2333d793.js";const p={components:{Pagination:i,Star:c},props:["data","activities"],data(){return{tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-5"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Earnings"),className:"col-md-2 text-end"}]}}}},u={class:"container page-container"},f={class:"row"},g={class:"col-md-12"};function h(v,N,e,x,P,S){const o=s("AppHead"),n=s("PageTitle");return d(),r(_,null,[a(o,{title:e.data.title},null,8,["title"]),t("div",u,[a(n,{title:e.data.title},null,8,["title"]),t("div",f,[t("div",g,[t("pre",null,m(e.activities),1)])])])],64)}const k=l(p,[["render",h]]);export{k as default};

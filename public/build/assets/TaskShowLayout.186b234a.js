import{C as v}from"./Countdown.02efd5b0.js";import{_ as f,c as _,a as n,b as s,t as a,E as k,d as b,w as c,B as l,e as g,F as w,r,o as u,f as d}from"./app.571265cd.js";import"./bootstrap.esm.2333d793.js";const T={components:{Countdown:v},props:["task","activeTab"],methods:{isActiveTab(t){return this.activeTab==t}}},A={class:"header-account-page d-flex align-items-end navbar-background pt-80","data-offset-top":"#header-main"},C={class:"container pt-4 pt-lg-0"},y={class:"row mt-3"},N={class:"col-lg-12"},S={class:"text-end text-white"},B={class:"d-flex justify-content-between mt-4"},V={class:"text-white"},F={class:"text-white"},L={key:0,class:"badge bg-danger"},p={class:"d-flex mt-4 fs-8"},z={class:"nav nav-tabs task-navigation",id:"myTab",role:"tablist"},D={class:"nav-item"},E={class:"nav-item"},H={class:"nav-item"},I={class:"nav-item"},j={class:"nav-item"},x={class:"container page-container mt-3"},q={class:"row"},G={class:"col-md-12"};function J(t,K,e,M,O,i){const h=r("AppHead"),m=r("Countdown"),o=r("Link");return u(),_(w,null,[n(h,{title:e.task.number},null,8,["title"]),s("section",A,[s("div",C,[s("div",y,[s("div",N,[s("div",S,[n(m,{until:e.task.dead_line},null,8,["until"])]),s("div",B,[s("h4",V,a(e.task.number),1),s("div",null,[s("span",F,a(t.__("Status"))+" : ",1),s("span",{class:"badge me-2",style:k({color:e.task.status.color,"background-color":e.task.status.bg_color})},a(e.task.status.name),5),e.task.invoice_id?b("",!0):(u(),_("span",L,a(t.__("Not Invoiced")),1))])]),s("div",p,[s("ul",z,[s("li",D,[n(o,{class:l(["nav-link",{active:i.isActiveTab("general")}]),href:t.route("customer.tasks.show",e.task.uuid),"aria-selected":"true"},{default:c(()=>[d(a(t.__("Task Information")),1)]),_:1},8,["class","href"])]),s("li",E,[n(o,{class:l(["nav-link",{active:i.isActiveTab("discussions")}]),href:t.route("customer.tasks.discussions.index",e.task.uuid)},{default:c(()=>[d(a(t.__("Discussions")),1)]),_:1},8,["class","href"])]),s("li",H,[n(o,{class:l(["nav-link",{active:i.isActiveTab("attachment")}]),href:t.route("customer.tasks.attachments.index",e.task.uuid)},{default:c(()=>[d(a(t.__("Attachments")),1)]),_:1},8,["class","href"])]),s("li",I,[n(o,{class:l(["nav-link",{active:i.isActiveTab("financial")}]),href:t.route("customer.tasks.financial",e.task.uuid)},{default:c(()=>[d(a(t.__("Financial")),1)]),_:1},8,["class","href"])]),s("li",j,[n(o,{class:l(["nav-link",{active:i.isActiveTab("content")}]),href:t.route("customer.tasks.content",e.task.uuid)},{default:c(()=>[d(a(t.__("Content")),1)]),_:1},8,["class","href"])])])])])])])]),s("div",x,[s("div",q,[s("div",G,[g(t.$slots,"default")])])])],64)}const U=f(T,[["render",J]]);export{U as default};

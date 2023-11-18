import{C as k}from"./Countdown.761bbdf8.js";import{_ as f,c as u,a as i,b as a,t,E as b,d as h,w as c,B as o,e as g,F as w,r,o as _,f as d}from"./app.f21ad38e.js";import"./bootstrap.esm.2333d793.js";const A={props:["task","activeTab"],components:{Countdown:k},methods:{isActiveTab(s){return this.activeTab==s}}},T={class:"header-account-page d-flex align-items-end navbar-background pt-80","data-offset-top":"#header-main"},y={class:"container pt-4 pt-lg-0"},C={class:"row mt-3"},S={class:"col-lg-12"},N={class:"text-end text-white"},D={class:"d-flex justify-content-between mt-4"},B={class:"text-white"},E={class:"text-white"},I={key:0,class:"badge bg-danger"},L={class:"d-flex mt-4 fs-8"},V={class:"nav nav-tabs task-navigation",id:"myTab",role:"tablist"},F={class:"nav-item"},R={class:"nav-item"},q={class:"nav-item"},z={class:"nav-item"},H={key:0,class:"nav-item"},M={class:"nav-item"},P={class:"nav-item"},j={class:"nav-item"},G={class:"container page-container mt-3"},O={class:"row"},Q={class:"col-md-12"};function U(s,W,e,J,K,n){const v=r("AppHead"),m=r("Countdown"),l=r("Link");return _(),u(w,null,[i(v,{title:e.task.number},null,8,["title"]),a("section",T,[a("div",y,[a("div",C,[a("div",S,[a("div",N,[i(m,{until:e.task.dead_line},null,8,["until"])]),a("div",D,[a("div",null,[a("h4",B,t(e.task.number),1)]),a("div",null,[a("span",E,t(s.__("Status"))+" : ",1),a("span",{class:"badge me-2",style:b({color:e.task.status.color,"background-color":e.task.status.bg_color})},t(e.task.status.name),5),e.task.invoice_id?h("",!0):(_(),u("span",I,t(s.__("Not Invoiced")),1))])]),a("div",L,[a("ul",V,[a("li",F,[i(l,{class:o(["nav-link",{active:n.isActiveTab("general")}]),href:s.route("admin.tasks.show",e.task.uuid),"aria-selected":"true"},{default:c(()=>[d(t(s.__("General")),1)]),_:1},8,["class","href"])]),a("li",R,[i(l,{class:o(["nav-link",{active:n.isActiveTab("attachment")}]),href:s.route("admin.tasks.attachments.index",e.task.uuid)},{default:c(()=>[d(t(s.__("Attachments")),1)]),_:1},8,["class","href"])]),a("li",q,[i(l,{class:o(["nav-link",{active:n.isActiveTab("discussions")}]),href:s.route("admin.tasks.discussions.index",e.task.uuid)},{default:c(()=>[d(t(s.__("Discussions")),1)]),_:1},8,["class","href"])]),a("li",z,[i(l,{class:o(["nav-link",{active:n.isActiveTab("internal-discussions")}]),href:s.route("admin.tasks.internal-discussions.index",e.task.uuid)},{default:c(()=>[d(t(s.__("Internal Discussions")),1)]),_:1},8,["class","href"])]),s.hasRole(s.ADMIN_ROLES.SUPER_ADMIN)?(_(),u("li",H,[i(l,{class:o(["nav-link",{active:n.isActiveTab("financial")}]),href:s.route("admin.tasks.financial.index",e.task.uuid)},{default:c(()=>[d(t(s.__("Financial")),1)]),_:1},8,["class","href"])])):h("",!0),a("li",M,[i(l,{class:o(["nav-link",{active:n.isActiveTab("qa")}]),href:s.route("admin.tasks.qa.index",e.task.uuid)},{default:c(()=>[d(t(s.__("Quality Assurance")),1)]),_:1},8,["class","href"])]),a("li",P,[i(l,{class:o(["nav-link",{active:n.isActiveTab("works")}]),href:s.route("admin.tasks.works.index",e.task.uuid)},{default:c(()=>[d(t(s.__("Submitted Works")),1)]),_:1},8,["class","href"])]),a("li",j,[i(l,{class:o(["nav-link",{active:n.isActiveTab("content")}]),href:s.route("admin.tasks.content",e.task.uuid)},{default:c(()=>[d(t(s.__("Content Preview")),1)]),_:1},8,["class","href"])])])])])])])]),a("div",G,[a("div",O,[a("div",Q,[g(s.$slots,"default")])])])],64)}const x=f(A,[["render",U]]);export{x as default};

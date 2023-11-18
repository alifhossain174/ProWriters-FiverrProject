import{_ as m,c,b as e,F as b,q as h,t as l,B as o,a as t,w as n,r as f,o as _,f as r}from"./app.571265cd.js";import"./bootstrap.esm.2333d793.js";const p={data(){return{items:[{name:this.__("Assignments"),create:this.route("admin.assignments.create"),list:this.route("admin.assignments.index"),route_group:"admin.assignments"},{name:this.__("Urgencies"),create:this.route("admin.urgencies.create"),list:this.route("admin.urgencies.index"),route_group:"admin.urgencies"}]}},methods:{isRouteGroup(s){return route().current(s+".*")?"show":""}}},k={class:"flex-shrink-0 w-100"},v={class:"list-unstyled ps-0"},w=["data-bs-target"],L=["id"],y={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},C={class:"mb-1"},N={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#assignments","aria-expanded":"true"},G={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},R={class:"mb-1"},S={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#urgencies","aria-expanded":"true"},j={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},B={class:"mb-1"},F={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#subjects","aria-expanded":"true"},A={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},P={class:"mb-1"},V={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#workLevels","aria-expanded":"true"},U={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},q={class:"mb-1"},z={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#paperFormats","aria-expanded":"true"},D={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},E={class:"mb-1"},M={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#languages","aria-expanded":"true"},T={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},W={class:"mb-1"},H={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#writerLevels","aria-expanded":"true"},I={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},J={class:"mb-1"},K={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#grammaticalPerson","aria-expanded":"true"},O={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},Q={class:"mb-1"},X={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#additionalServices","aria-expanded":"true"},Y={class:"collapse",id:"additionalServices"},Z={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},$={class:"mb-1"},x={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#serviceLevels","aria-expanded":"true"},ee={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},se=e("li",{class:"border-top my-3"},null,-1),le={class:"mb-1"},ae={class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#home-collapse","aria-expanded":"true"},te={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"};function ne(s,re,de,oe,g,d){const a=f("Link");return _(),c("div",k,[e("ul",v,[(_(!0),c(b,null,h(g.items,(i,u)=>(_(),c("li",{class:"mb-1",key:u},[e("button",{class:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse","data-bs-target":"#selector_"+u,"aria-expanded":"true"},l(i.name),9,w),e("div",{class:o(["collapse",d.isRouteGroup(i.route_group)]),id:"selector_"+u},[e("ul",y,[e("li",null,[t(a,{href:i.create,class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:2},1032,["href"])]),e("li",null,[t(a,{href:i.list,class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:2},1032,["href"])])])],10,L)]))),128)),e("li",C,[e("button",N,l(s.__("Assignments")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.assignments")]),id:"assignments"},[e("ul",G,[e("li",null,[t(a,{href:s.route("admin.assignments.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.assignments.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)]),e("li",R,[e("button",S,l(s.__("Urgencies")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.urgencies")]),id:"urgencies"},[e("ul",j,[e("li",null,[t(a,{href:s.route("admin.urgencies.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.urgencies.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)]),e("li",B,[e("button",F,l(s.__("Subjects")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.subjects")]),id:"subjects"},[e("ul",A,[e("li",null,[t(a,{href:s.route("admin.subjects.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.subjects.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)]),e("li",P,[e("button",V,l(s.__("Academic Levels")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.work.levels")]),id:"workLevels"},[e("ul",U,[e("li",null,[t(a,{href:s.route("admin.work.levels.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.work.levels.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)]),e("li",q,[e("button",z,l(s.__("Paper Formats")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.work.levels")]),id:"paperFormats"},[e("ul",D,[e("li",null,[t(a,{href:s.route("admin.work.levels.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.work.levels.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)]),e("li",E,[e("button",M,l(s.__("Languages")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.work.levels")]),id:"languages"},[e("ul",T,[e("li",null,[t(a,{href:s.route("admin.work.levels.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.work.levels.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)]),e("li",W,[e("button",H,l(s.__("Writer Levels")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.work.levels")]),id:"writerLevels"},[e("ul",I,[e("li",null,[t(a,{href:s.route("admin.work.levels.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.work.levels.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)]),e("li",J,[e("button",K,l(s.__("Grammatical Person")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.work.levels")]),id:"grammaticalPerson"},[e("ul",O,[e("li",null,[t(a,{href:s.route("admin.work.levels.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.work.levels.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)]),e("li",Q,[e("button",X,l(s.__("Additional Services")),1),e("div",Y,[e("ul",Z,[e("li",null,[t(a,{href:s.route("admin.additional.services.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.additional.services.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])])]),e("li",$,[e("button",x,l(s.__("Customer Service Levels")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.service.levels")]),id:"serviceLevels"},[e("ul",ee,[e("li",null,[t(a,{href:s.route("admin.service.levels.create"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.service.levels.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)]),se,e("li",le,[e("button",ae,l(s.__("Services")),1),e("div",{class:o(["collapse",d.isRouteGroup("admin.services")]),id:"home-collapse"},[e("ul",te,[e("li",null,[t(a,{href:s.route("admin.services.choose_type"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("Create New")),1)]),_:1},8,["href"])]),e("li",null,[t(a,{href:s.route("admin.services.index"),class:"link-dark rounded"},{default:n(()=>[r(l(s.__("List")),1)]),_:1},8,["href"])])])],2)])])])}const ce=m(p,[["render",ne]]);export{ce as default};

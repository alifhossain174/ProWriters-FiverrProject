import{_,c as n,b as e,F as h,q as g,a as o,w as l,r as p,o as c,t as a,B as v,f as d}from"./app.1d2673ab.js";import"./bootstrap.esm.2333d793.js";const f={data(){return{items:[{name:this.__("Freelancer Levels"),create:this.route("admin.freelancerLevels.create"),list:this.route("admin.freelancerLevels.index"),route_group:"admin.freelancerLevels"},{name:this.__("Assignments / Packages"),create:this.route("admin.assignments.create"),list:this.route("admin.assignments.index"),route_group:"admin.assignments"},{name:this.__("Urgencies"),create:this.route("admin.urgencies.create"),list:this.route("admin.urgencies.index"),route_group:"admin.urgencies"},{name:this.__("Subjects"),create:this.route("admin.subjects.create"),list:this.route("admin.subjects.index"),route_group:"admin.subjects"},{name:this.__("Academic Levels"),create:this.route("admin.academicLevels.create"),list:this.route("admin.academicLevels.index"),route_group:"admin.academicLevels"},{name:this.__("Paper Formats"),create:this.route("admin.paperFormats.create"),list:this.route("admin.paperFormats.index"),route_group:"admin.paperFormats"},{name:this.__("Languages"),create:this.route("admin.languages.create"),list:this.route("admin.languages.index"),route_group:"admin.languages"},{name:this.__("Grammatical People"),create:this.route("admin.grammaticalPeople.create"),list:this.route("admin.grammaticalPeople.index"),route_group:"admin.grammaticalPeople"},{name:this.__("Additional Services"),create:this.route("admin.additionalServices.create"),list:this.route("admin.additionalServices.index"),route_group:"admin.additionalServices"},{name:this.__("Customer Service Levels"),create:this.route("admin.serviceLevels.create"),list:this.route("admin.serviceLevels.index"),route_group:"admin.serviceLevels"}]}},methods:{isRouteGroup(t){return route().current(t+".*")?"show":""}}},b={class:"flex-shrink-0 w-100"},L={class:"list-unstyled ps-0"},x=["data-bs-target"],k=["id"],S={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},w=e("li",{class:"border-top my-3"},null,-1),F={class:"d-grid gap-2"};function C(t,P,y,B,u,m){const r=p("Link");return c(),n("div",b,[e("ul",L,[(c(!0),n(h,null,g(u.items,(s,i)=>(c(),n("li",{class:"mb-1",key:i},[e("button",{class:"btn btn-toggle align-items-center rounded collapsed fs-8 w-100","data-bs-toggle":"collapse","data-bs-target":"#selector_"+i,"aria-expanded":"true"},a(s.name),9,x),e("div",{class:v(["collapse",m.isRouteGroup(s.route_group)]),id:"selector_"+i},[e("ul",S,[e("li",null,[o(r,{href:s.create,class:"link-dark rounded"},{default:l(()=>[d(a(t.__("Create New")),1)]),_:2},1032,["href"])]),e("li",null,[o(r,{href:s.list,class:"link-dark rounded"},{default:l(()=>[d(a(t.__("List")),1)]),_:2},1032,["href"])])])],10,k)]))),128)),w]),e("div",F,[o(r,{href:t.route("admin.services.index"),class:"btn btn-light"},{default:l(()=>[d(a(t.__("Configure Services")),1)]),_:1},8,["href"])])])}const A=_(f,[["render",C]]);export{A as default};

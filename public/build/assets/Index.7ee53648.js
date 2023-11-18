import B from"./Search.b0a0f7ed.js";import{T as C}from"./Table.638f05fb.js";import{_ as L,c as a,a as i,b as t,w as r,F as _,q as v,d as m,r as c,o as l,f as d,t as s,E as y,A as D}from"./app.6486bb89.js";import"./Input.744111e9.js";import"./CheckBox.eb1c4a7d.js";import"./Select.0cc97eb8.js";import"./vanilla-picker.csp.273e51c7.js";import"./debounce.2741a44f.js";import"./DateRangePicker.7c995d56.js";import"./Pagination.5e3aa5eb.js";import"./bootstrap.esm.2333d793.js";const V={components:{Search:B,Table:C},props:["data","tasks","filters"],data(){return{showStatistics:!1,tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Deadline"),className:"col-md-2"},{name:this.__("Author"),className:"col-md-3"},{name:this.__("Total"),className:"col-md-2 text-end"}]}}},methods:{toggleStatistics(){this.showStatistics=!this.showStatistics}}},H={class:"container page-container"},z=t("i",{class:"fa-solid fa-chart-column"},null,-1),E={key:0},F={key:1},I={key:0},O={class:"shadow bg-white rounded text-center p-1"},P={class:"mt-2"},q={class:"row mt-4"},M={class:"col-md-3"},j={class:"col-md-9"},G={colspan:"5"},J={class:"w-100"},K={class:"col-md-3"},Q={class:"text-muted"},R={key:0},U={class:"text-muted"},W={class:"text-danger"},X={key:1,class:"badge bg-danger"},Y={class:"col-md-2"},Z={class:"col-md-2"},x={class:"col-md-3"},$={key:1},tt={class:"text-muted"},et={class:"col-md-2 text-end"},st={key:0,class:"border-top mt-2 mb-2"},ot={colspan:"5"},lt={class:""};function at(o,b,n,nt,u,g){const S=c("AppHead"),w=c("AddButton"),N=c("PageTitle"),k=c("Search"),h=c("Link"),T=c("Table");return l(),a(_,null,[i(S,{title:n.data.title},null,8,["title"]),t("div",H,[i(N,{title:n.data.title},{default:r(()=>[t("button",{onClick:b[0]||(b[0]=(...e)=>g.toggleStatistics&&g.toggleStatistics(...e)),type:"button",class:"btn btn-sm btn-light me-2"},[z,d("\xA0 "),u.showStatistics?(l(),a("span",E,s(o.__("Hide")),1)):(l(),a("span",F,s(o.__("Show")),1)),d(" \xA0"),t("span",null,s(o.__("Statistics")),1)]),i(w,{href:o.route("admin.tasks.create")},null,8,["href"])]),_:1},8,["title"]),u.showStatistics?(l(),a("div",I,[(l(!0),a(_,null,v(n.data.statistics,(e,p)=>(l(),a("div",{class:"row mb-4",key:p},[(l(!0),a(_,null,v(e,(f,A)=>(l(),a("div",{class:"col-md-2 col-sm-6",key:A},[t("div",O,[t("div",P,s(f.value),1),t("span",{style:y([{"font-size":"12px"},{color:f.color}])},s(f.name),5)])]))),128))]))),128))])):m("",!0),t("div",q,[t("div",M,[i(k,{data:n.data,filters:n.filters.filters,only:["tasks","filters"]},null,8,["data","filters"])]),t("div",j,[i(T,{options:u.tableOptions,links:n.tasks.links,total:n.tasks.total,tableStyle:"table-striped"},{default:r(()=>[(l(!0),a(_,null,v(n.tasks.data,(e,p)=>(l(),a("tr",{class:"mb-2",key:p},[t("td",G,[t("table",J,[t("tr",null,[t("td",K,[i(h,{href:o.route("admin.tasks.show",e.uuid)},{default:r(()=>[d(s(e.number),1)]),_:2},1032,["href"]),t("div",null,[t("small",Q,s(e.service.name),1)]),e.service_level?(l(),a("div",R,[t("small",U,[d(s(o.__("Service Level"))+" : ",1),t("span",W,s(e.service_level.name),1)])])):m("",!0),t("div",null,[t("small",null,[d(s(o.__("Customer"))+" : ",1),i(h,{href:o.route("admin.customers.show",e.customer.uuid)},{default:r(()=>[d(s(e.customer.full_name),1)]),_:2},1032,["href"])])]),e.invoice_id?m("",!0):(l(),a("span",X,s(o.__("Not Invoiced")),1))]),t("td",Y,[t("span",{class:"badge rounded-pill",style:y({backgroundColor:e.status.bg_color,color:e.status.color})},s(e.status.name),5)]),t("td",Z,s(o.localDate(e.dead_line)),1),t("td",x,[e.author?(l(),D(h,{key:0,href:o.route("admin.authors.show",e.author.uuid)},{default:r(()=>[d(s(e.author.full_name),1)]),_:2},1032,["href"])):(l(),a("span",$,s(o.__("Not assigned")),1)),t("div",null,[t("small",tt,s(o.__("Level"))+" : "+s(e.author_level.name),1)])]),t("td",et,s(o.formatMoney(e.total)),1)]),e.title?(l(),a("tr",st,[t("td",ot,[t("small",lt,s(o.__("Title"))+" : "+s(e.title),1)])])):m("",!0)])])]))),128))]),_:1},8,["options","links","total"])])])])],64)}const bt=L(V,[["render",at]]);export{bt as default};

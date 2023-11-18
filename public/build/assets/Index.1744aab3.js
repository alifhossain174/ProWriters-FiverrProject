import C from"./Search.a34ec02c.js";import{T as A}from"./Table.17e80b9f.js";import{_ as L,c as a,a as i,b as t,w as r,F as _,q as v,d as m,r as d,o as l,f as c,t as s,E as y,A as D}from"./app.969842cf.js";import"./Input.ae708ed5.js";import"./CheckBox.a77c1607.js";import"./Select.df74d481.js";import"./vanilla-picker.csp.0ced5960.js";import"./debounce.ed46515d.js";import"./DateRangePicker.9406da93.js";import"./Pagination.7add1a6b.js";import"./bootstrap.esm.2333d793.js";const V={components:{Search:C,Table:A},props:["data","tasks","filters"],data(){return{showStatistics:!1,tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Status"),className:"col-md-2"},{name:this.__("Deadline"),className:"col-md-2"},{name:this.__("Freelancer"),className:"col-md-3"},{name:this.__("Total"),className:"col-md-2 text-end"}]}}},methods:{toggleStatistics(){this.showStatistics=!this.showStatistics}}},F={class:"container page-container"},H=t("i",{class:"fa-solid fa-chart-column"},null,-1),z={key:0},E={key:1},I={key:0},O={class:"shadow bg-white rounded text-center p-1"},P={class:"mt-2"},q={class:"row mt-4"},M={class:"col-md-3"},j={class:"col-md-9"},G={colspan:"5"},J={class:"w-100"},K={class:"col-md-3"},Q={class:"text-muted"},R={key:0},U={class:"text-muted"},W={class:"text-danger"},X={key:1,class:"badge bg-danger"},Y={class:"col-md-2"},Z={class:"col-md-2"},x={class:"col-md-3"},$={key:1},tt={class:"text-muted"},et={class:"col-md-2 text-end"},st={key:0,class:"border-top mt-2 mb-2"},ot={colspan:"5"},lt={class:""};function at(o,b,n,nt,u,g){const S=d("AppHead"),w=d("AddButton"),N=d("PageTitle"),k=d("Search"),h=d("Link"),T=d("Table");return l(),a(_,null,[i(S,{title:n.data.title},null,8,["title"]),t("div",F,[i(N,{title:n.data.title},{default:r(()=>[t("button",{onClick:b[0]||(b[0]=(...e)=>g.toggleStatistics&&g.toggleStatistics(...e)),type:"button",class:"btn btn-sm btn-light me-2"},[H,c("\xA0 "),u.showStatistics?(l(),a("span",z,s(o.__("Hide")),1)):(l(),a("span",E,s(o.__("Show")),1)),c(" \xA0"),t("span",null,s(o.__("Statistics")),1)]),i(w,{href:o.route("admin.tasks.create")},null,8,["href"])]),_:1},8,["title"]),u.showStatistics?(l(),a("div",I,[(l(!0),a(_,null,v(n.data.statistics,(e,f)=>(l(),a("div",{class:"row mb-4",key:f},[(l(!0),a(_,null,v(e,(p,B)=>(l(),a("div",{class:"col-md-2 col-sm-6",key:B},[t("div",O,[t("div",P,s(p.value),1),t("span",{style:y([{"font-size":"12px"},{color:p.color}])},s(p.name),5)])]))),128))]))),128))])):m("",!0),t("div",q,[t("div",M,[i(k,{data:n.data,filters:n.filters.filters,only:["tasks","filters"]},null,8,["data","filters"])]),t("div",j,[i(T,{options:u.tableOptions,links:n.tasks.links,total:n.tasks.total,tableStyle:"table-striped"},{default:r(()=>[(l(!0),a(_,null,v(n.tasks.data,(e,f)=>(l(),a("tr",{class:"mb-2",key:f},[t("td",G,[t("table",J,[t("tr",null,[t("td",K,[i(h,{href:o.route("admin.tasks.show",e.uuid)},{default:r(()=>[c(s(e.number),1)]),_:2},1032,["href"]),t("div",null,[t("small",Q,s(e.service.name),1)]),e.service_level?(l(),a("div",R,[t("small",U,[c(s(o.__("Service Level"))+" : ",1),t("span",W,s(e.service_level.name),1)])])):m("",!0),t("div",null,[t("small",null,[c(s(o.__("Customer"))+" : ",1),i(h,{href:o.route("admin.customers.show",e.customer.uuid)},{default:r(()=>[c(s(e.customer.full_name),1)]),_:2},1032,["href"])])]),e.invoice_id?m("",!0):(l(),a("span",X,s(o.__("Not Invoiced")),1))]),t("td",Y,[t("span",{class:"badge rounded-pill",style:y({backgroundColor:e.status.bg_color,color:e.status.color})},s(e.status.name),5)]),t("td",Z,s(o.localDate(e.dead_line)),1),t("td",x,[e.freelancer?(l(),D(h,{key:0,href:o.route("admin.freelancers.show",e.freelancer.uuid)},{default:r(()=>[c(s(e.freelancer.full_name),1)]),_:2},1032,["href"])):(l(),a("span",$,s(o.__("Not assigned")),1)),t("div",null,[t("small",tt,s(o.__("Level"))+" : "+s(e.freelancer_level.name),1)])]),t("td",et,s(o.formatMoney(e.total)),1)]),e.title?(l(),a("tr",st,[t("td",ot,[t("small",lt,s(o.__("Title"))+" : "+s(e.title),1)])])):m("",!0)])])]))),128))]),_:1},8,["options","links","total"])])])])],64)}const bt=L(V,[["render",at]]);export{bt as default};

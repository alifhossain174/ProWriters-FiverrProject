import v from"./SearchForm.490f76c9.js";import{T}from"./Table.17e80b9f.js";import{_ as g,c as i,a,b as t,w as c,F as m,r as n,o as d,f as _,t as o,q as y,E as N}from"./app.969842cf.js";import"./Input.ae708ed5.js";import"./CheckBox.a77c1607.js";import"./Select.df74d481.js";import"./vanilla-picker.csp.0ced5960.js";import"./debounce.ed46515d.js";import"./Pagination.7add1a6b.js";import"./bootstrap.esm.2333d793.js";const S={components:{SearchForm:v,Table:T},props:["data","tasks","filters"],data(){return{tableOptions:{titles:[{name:this.__("Details"),className:"col-md-4"},{name:this.__("Status"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-3"},{name:this.__("Total"),className:"col-md-2 text-end"}]}}}},w={class:"container page-container"},F=t("i",{class:"fa-solid fa-plus"},null,-1),x={class:"row"},D={class:"col-md-3"},B={class:"sticky-top"},C={class:"col-md-9"},L={class:"data-container"},V={class:"col-md-4"},A={class:"text-muted"},E={class:"col-md-3"},H={class:"col-md-3"},O={class:"col-md-2 text-end"};function P(l,q,s,z,u,I){const p=n("AppHead"),r=n("Link"),h=n("PageTitle"),f=n("SearchForm"),b=n("Table");return d(),i(m,null,[a(p,{title:s.data.title},null,8,["title"]),t("div",w,[a(h,{title:s.data.title},{default:c(()=>[a(r,{href:l.route("customer.tasks.create"),class:"btn btn-primary btn-sm"},{default:c(()=>[F,_(" "+o(l.__("New Task")),1)]),_:1},8,["href"])]),_:1},8,["title"]),t("div",x,[t("div",D,[t("div",B,[a(f,{data:s.data,filters:s.filters},null,8,["data","filters"])])]),t("div",C,[t("div",L,[a(b,{options:u.tableOptions,links:s.tasks.links,total:s.tasks.total,tableStyle:"table-striped"},{default:c(()=>[(d(!0),i(m,null,y(s.tasks.data,(e,k)=>(d(),i("tr",{class:"mb-2",key:k},[t("td",V,[a(r,{href:l.route("customer.tasks.show",e.uuid)},{default:c(()=>[_(o(e.number),1)]),_:2},1032,["href"]),t("div",null,[t("small",A,o(e.service.name),1)])]),t("td",E,[t("span",{class:"badge rounded-pill",style:N({backgroundColor:e.status.bg_color,color:e.status.color})},o(e.status.name),5)]),t("td",H,o(l.localDate(e.dead_line)),1),t("td",O,o(l.formatMoney(e.total)),1)]))),128))]),_:1},8,["options","links","total"])])])])])],64)}const Y=g(S,[["render",P]]);export{Y as default};

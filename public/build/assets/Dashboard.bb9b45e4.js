import{T}from"./Table.ebb165fc.js";import{_ as N,c as n,a as d,b as t,w as i,F as u,q as b,t as a,r,o,A as g,f as _,d as v,B}from"./app.94ede146.js";import"./Pagination.92b4b13c.js";import"./bootstrap.esm.2333d793.js";const C={components:{Table:T},props:["data"],created(){this.getStatistics()},data(){return{statistics:[{name:"tasks_in_progress",title:this.__("Tasks in progress"),bg_color:"bg-purple",data:null},{name:"tasks_for_review",title:this.__("Tasks for your review"),bg_color:"bg-red",data:null},{name:"wallet_balance",title:this.__("Wallet Balance"),bg_color:"bg-blue",data:null}],tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Project"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-2"},{name:this.__("Total"),className:"col-md-2 text-end"}]}}},methods:{getStatistics(){let s=this;axios.post(route("customer.dashboard.statistics")).then(function(h){for(let l=0;l<s.statistics.length;l++){const p=s.statistics[l].name;s.statistics[l].data=h.data[p]}})}}},x={class:"container page-container"},A=t("i",{class:"fa-solid fa-plus"},null,-1),D=t("i",{class:"fa-solid fa-plus"},null,-1),S=t("i",{class:"fa-solid fa-wallet"},null,-1),V={class:"row mt-2"},j={class:"d-flex bg-light p-3"},q={class:"flex-shrink-0 align-middle statistics-box"},F=t("i",{class:"fa-solid fa-wallet align-middle"},null,-1),L=[F],P={class:"flex-grow-1 ms-2"},H={class:"text-uppercase fs-9 lh-sm"},O={class:"fs-5 lh-1 fw-bold"},R={key:0,class:"fas fa-spinner fa-spin"},z=["textContent"],E={class:"row mt-4"},M={class:"col-md-12"},W={class:"border rounded-3 p-3 mb-4"},$={class:"float-none w-auto px-3 fs-8"},G={class:"data-container"},I={class:"col-md-3"},J={class:"text-muted"},K={class:"col-md-3"},Q={class:"col-md-2"},U={class:"col-md-2 text-end"};function X(s,h,l,p,f,Y){const w=r("AppHead"),c=r("Link"),k=r("PageTitle"),y=r("Table");return o(),n(u,null,[d(w,{title:l.data.title},null,8,["title"]),t("div",x,[d(k,{title:l.data.title},{default:i(()=>[s.$page.props.is_bidding_enable?(o(),g(c,{key:0,href:s.route("customer.bidRequests.create"),class:"btn btn-sm btn-outline-primary me-2"},{default:i(()=>[A,_(" "+a(s.__("New Bid Request")),1)]),_:1},8,["href"])):v("",!0),s.$page.props.is_ordering_enable?(o(),g(c,{key:1,href:s.route("customer.tasks.create"),class:"btn btn-sm btn-outline-primary me-2"},{default:i(()=>[D,_(" "+a(s.__("New Task")),1)]),_:1},8,["href"])):v("",!0),d(c,{href:s.route("customer.transactions.funds.create"),class:"btn btn-sm btn-outline-success"},{default:i(()=>[S,_(" "+a(s.__("Add Funds")),1)]),_:1},8,["href"])]),_:1},8,["title"]),t("div",V,[(o(!0),n(u,null,b(f.statistics,(e,m)=>(o(),n("div",{class:"col-md-4 mb-2 mb-md-0",key:m},[t("div",j,[t("div",q,[t("div",{class:B(e.bg_color)},L,2)]),t("div",P,[t("div",H,a(e.title),1),t("div",O,[e.data?(o(),n("span",{key:1,textContent:a(e.data.value)},null,8,z)):(o(),n("i",R))])])])]))),128))]),t("div",E,[t("div",M,[t("fieldset",W,[t("legend",$,a(s.__("Tasks waiting for your review")),1),t("div",G,[d(y,{options:f.tableOptions,tableStyle:"alert table-striped"},{default:i(()=>[(o(!0),n(u,null,b(l.data.tasks,(e,m)=>(o(),n("tr",{class:"mb-2",key:m},[t("td",I,[d(c,{href:s.route("customer.tasks.show",e.uuid)},{default:i(()=>[_(a(e.number),1)]),_:2},1032,["href"]),t("div",null,[t("small",J,a(e.service.name),1)])]),t("td",K,a(e.project?e.project.name:s.__("N/A")),1),t("td",Q,a(s.localDate(e.dead_line)),1),t("td",U,a(s.formatMoney(e.total)),1)]))),128))]),_:1},8,["options"])])])])])])],64)}const at=N(C,[["render",X]]);export{at as default};

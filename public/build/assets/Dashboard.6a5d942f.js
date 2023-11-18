import{T as k}from"./Table.ebb165fc.js";import{_ as y,c as l,a as i,b as e,F as c,q as h,t as o,w as r,r as _,o as n,B as T,f as g}from"./app.94ede146.js";import"./Pagination.92b4b13c.js";import"./bootstrap.esm.2333d793.js";const w={components:{Table:k},props:["data"],created(){this.getStatistics()},data(){return{statistics:[{name:"tasks_in_progress",title:this.__("Tasks in progress"),bg_color:"bg-purple",data:null},{name:"tasks_requires_revision",title:this.__("Tasks requires revision"),bg_color:"bg-green",data:null}],tableOptions:{titles:[{name:this.__("Details"),className:"col-md-3"},{name:this.__("Deadline"),className:"col-md-2"},{name:this.__("Total"),className:"col-md-2 text-end"}]}}},methods:{getStatistics(){let t=this;axios.post(route("freelancer.dashboard.statistics")).then(function(u){for(let a=0;a<t.statistics.length;a++){const f=t.statistics[a].name;t.statistics[a].data=u.data[f]}})}}},D={class:"container page-container"},N={class:"row mt-2"},q={class:"d-flex bg-light p-3"},C={class:"flex-shrink-0 align-middle statistics-box"},S=e("i",{class:"fa-solid fa-wallet align-middle"},null,-1),B=[S],L={class:"flex-grow-1 ms-2"},O={class:"text-uppercase fs-9 lh-sm"},V={class:"fs-5 lh-1 fw-bold"},A={key:0,class:"fas fa-spinner fa-spin"},F=["textContent"],H={class:"row mt-4"},M={class:"col-md-6"},P={class:"border rounded-3 p-3 mb-4 h-100"},z={class:"float-none w-auto px-3 fs-6"},E={class:"col-md-3"},j={class:"text-muted"},G={class:"col-md-2"},I={class:"col-md-2 text-end"},J={class:"col-md-6"},K={class:"border rounded-3 p-3 mb-4 h-100"},Q={class:"float-none w-auto px-3 fs-6"},R={class:"col-md-3"},U={class:"text-muted"},W={class:"col-md-2"},X={class:"col-md-2 text-end"};function Y(t,u,a,f,m,Z){const v=_("AppHead"),x=_("PageTitle"),p=_("Link"),b=_("Table");return n(),l(c,null,[i(v,{title:a.data.title},null,8,["title"]),e("div",D,[i(x,{title:a.data.title},null,8,["title"]),e("div",N,[(n(!0),l(c,null,h(m.statistics,(s,d)=>(n(),l("div",{class:"col-md-6 mb-2 mb-md-0",key:d},[e("div",q,[e("div",C,[e("div",{class:T(s.bg_color)},B,2)]),e("div",L,[e("div",O,o(s.title),1),e("div",V,[s.data?(n(),l("span",{key:1,textContent:o(s.data.value)},null,8,F)):(n(),l("i",A))])])])]))),128))]),e("div",H,[e("div",M,[e("fieldset",P,[e("legend",z,o(t.__("Tasks in progress")),1),i(b,{options:m.tableOptions,tableStyle:"table-striped"},{default:r(()=>[(n(!0),l(c,null,h(a.data.tasks_in_progress,(s,d)=>(n(),l("tr",{class:"mb-2",key:d},[e("td",E,[i(p,{href:t.route("freelancer.tasks.show",s.uuid)},{default:r(()=>[g(o(s.number),1)]),_:2},1032,["href"]),e("div",null,[e("small",j,o(s.service.name),1)])]),e("td",G,o(t.localDate(s.dead_line_for_freelancer)),1),e("td",I,o(t.formatMoney(s.freelancer_payment_amount)),1)]))),128))]),_:1},8,["options"])])]),e("div",J,[e("fieldset",K,[e("legend",Q,o(t.__("Tasks requires revision")),1),i(b,{options:m.tableOptions,tableStyle:"table-striped"},{default:r(()=>[(n(!0),l(c,null,h(a.data.tasks_requires_revision,(s,d)=>(n(),l("tr",{class:"mb-2",key:d},[e("td",R,[i(p,{href:t.route("freelancer.tasks.show",s.uuid)},{default:r(()=>[g(o(s.number),1)]),_:2},1032,["href"]),e("div",null,[e("small",U,o(s.service.name),1)])]),e("td",W,o(t.localDate(s.dead_line_for_freelancer)),1),e("td",X,o(t.formatMoney(s.freelancer_payment_amount)),1)]))),128))]),_:1},8,["options"])])])])])],64)}const oe=y(w,[["render",Y]]);export{oe as default};

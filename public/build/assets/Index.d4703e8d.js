import{T as g}from"./Table.638f05fb.js";import T from"./Search.b7d49adb.js";import{_ as v,c as r,a as s,b as t,w as i,F as _,r as o,o as c,q as S,f as m,t as l,E as w}from"./app.6486bb89.js";import"./Pagination.5e3aa5eb.js";import"./Select.0cc97eb8.js";import"./SearchButton.12962b8d.js";import"./vanilla-picker.csp.273e51c7.js";import"./debounce.2741a44f.js";import"./DateRangePicker.7c995d56.js";import"./bootstrap.esm.2333d793.js";const y={props:["data","invoices","filters"],components:{Table:g,Search:T},data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("Customer"),className:""},{name:this.__("Status"),className:""},{name:this.__("Total"),className:"text-end"}]}}}},B={class:"container page-container"},A={class:"row"},x={class:"col-md-3"},C={class:"col-md-9"},D={class:""},L={class:""},V={class:"text-end"};function E(n,F,e,H,u,O){const f=o("AppHead"),h=o("AddButton"),p=o("PageTitle"),b=o("Search"),d=o("Link"),k=o("Table");return c(),r(_,null,[s(f,{title:e.data.title},null,8,["title"]),t("div",B,[s(p,{title:e.data.title},{default:i(()=>[s(h,{href:n.route("admin.invoices.create")},null,8,["href"])]),_:1},8,["title"]),t("div",A,[t("div",x,[s(b,{data:e.data,filters:e.filters},null,8,["data","filters"])]),t("div",C,[s(k,{options:u.tableOptions,links:e.invoices.links,total:e.invoices.total},{default:i(()=>[(c(!0),r(_,null,S(e.invoices.data,(a,N)=>(c(),r("tr",{key:N},[t("td",null,[s(d,{href:n.route("admin.invoices.show",a.uuid)},{default:i(()=>[m(l(a.number),1)]),_:2},1032,["href"])]),t("td",D,l(n.localDate(a.invoice_date)),1),t("td",L,[s(d,{href:n.route("admin.customers.show",a.customer.uuid)},{default:i(()=>[m(l(a.customer.full_name),1)]),_:2},1032,["href"])]),t("td",null,[t("span",{class:"badge",style:w({background:e.data.ribbon_bg_colors[a.invoice_status_id]})},l(a.status.name),5)]),t("td",V,l(n.formatMoney(a.total)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const R=v(y,[["render",E]]);export{R as default};
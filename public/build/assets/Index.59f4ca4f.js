import{T as k}from"./Table.8330e037.js";import{S as v}from"./SearchBar.1cdaccf0.js";import{_ as T,c as i,a as o,b as e,y as r,F as m,f as n,o as c,r as B,d as _,t as a}from"./app.b345893e.js";import"./Pagination.109538d8.js";import"./debounce.b9b0fcdf.js";import"./bootstrap.esm.2333d793.js";const S={components:{Table:k,SearchBar:v},props:["data","payments","filters"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("From"),className:""},{name:this.__("Method"),className:""},{name:this.__("Amount"),className:"text-end"}]}}}},g={class:"container page-container"},x={class:"row"},w={class:"col-md-12"},A={class:"text-muted"},D={class:"text-muted"},F={class:"text-end"};function L(l,V,s,y,u,C){const f=n("AppHead"),h=n("SearchBar"),p=n("PageTitle"),d=n("Link"),b=n("Table");return c(),i(m,null,[o(f,{title:s.data.title},null,8,["title"]),e("div",g,[e("div",x,[e("div",w,[o(p,{title:s.data.title},{default:r(()=>[o(h,{hide_inactive_search:!0,url:s.data.urls.search,filters:s.filters.filters},null,8,["url","filters"])]),_:1},8,["title"]),o(b,{options:u.tableOptions,links:s.payments.links,total:s.payments.total,tableStyle:"fs-8"},{default:r(()=>[(c(!0),i(m,null,B(s.payments.data,(t,N)=>(c(),i("tr",{key:N},[e("td",null,[o(d,{href:l.route("admin.payments.show",t.uuid)},{default:r(()=>[_(a(t.number),1)]),_:2},1032,["href"])]),e("td",null,a(l.localDate(t.date)),1),e("td",null,[o(d,{href:l.route("admin.customers.show",t.from.uuid)},{default:r(()=>[_(a(t.from.full_name),1)]),_:2},1032,["href"]),e("div",null,[e("small",A,a(t.from.code),1)])]),e("td",null,[e("div",null,a(t.method),1),e("small",D,a(l.__("Reference"))+" "+a(t.reference),1)]),e("td",F,a(l.formatMoney(t.amount)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const R=T(S,[["render",L]]);export{R as default};

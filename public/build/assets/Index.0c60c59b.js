import{T as k}from"./Table.638f05fb.js";import{S as v}from"./SearchBar.ce624d50.js";import{_ as T,c as i,a as o,b as e,w as r,F as m,r as n,o as c,q as B,f as _,t as a}from"./app.6486bb89.js";import"./Pagination.5e3aa5eb.js";import"./debounce.2741a44f.js";import"./bootstrap.esm.2333d793.js";const S={components:{Table:k,SearchBar:v},props:["data","payments","filters"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("From"),className:""},{name:this.__("Method"),className:""},{name:this.__("Amount"),className:"text-end"}]}}}},g={class:"container page-container"},w={class:"row"},x={class:"col-md-12"},A={class:"text-muted"},D={class:"text-muted"},F={class:"text-end"};function L(l,V,s,C,u,H){const f=n("AppHead"),h=n("SearchBar"),p=n("PageTitle"),d=n("Link"),b=n("Table");return c(),i(m,null,[o(f,{title:s.data.title},null,8,["title"]),e("div",g,[e("div",w,[e("div",x,[o(p,{title:s.data.title},{default:r(()=>[o(h,{hide_inactive_search:!0,url:s.data.urls.search,filters:s.filters.filters},null,8,["url","filters"])]),_:1},8,["title"]),o(b,{options:u.tableOptions,links:s.payments.links,total:s.payments.total,tableStyle:"fs-8"},{default:r(()=>[(c(!0),i(m,null,B(s.payments.data,(t,N)=>(c(),i("tr",{key:N},[e("td",null,[o(d,{href:l.route("admin.payments.show",t.uuid)},{default:r(()=>[_(a(t.number),1)]),_:2},1032,["href"])]),e("td",null,a(l.localDate(t.date)),1),e("td",null,[o(d,{href:l.route("admin.customers.show",t.from.uuid)},{default:r(()=>[_(a(t.from.full_name),1)]),_:2},1032,["href"]),e("div",null,[e("small",A,a(t.from.code),1)])]),e("td",null,[e("div",null,a(t.method),1),e("small",D,a(l.__("Reference"))+" "+a(t.reference),1)]),e("td",F,a(l.formatMoney(t.amount)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const I=T(S,[["render",L]]);export{I as default};

import{T as k}from"./Table.0b433819.js";import{_ as N,c as o,a as l,b as e,w as i,F as _,r as c,o as d,f as m,t as a,q as y,d as T}from"./app.f21ad38e.js";import"./Pagination.2f3d7fa4.js";import"./bootstrap.esm.2333d793.js";const v={components:{Table:k},props:["data","transactions","filters"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("Type"),className:""},{name:this.__("Description"),className:""},{name:this.__("Amount"),className:"text-end"},{name:this.__("Balance"),className:"text-end"}]}}}},g={class:"container page-container"},x=e("i",{class:"fa-solid fa-wallet"},null,-1),w={class:"row"},A={class:"col-md-12"},B={key:0},D={class:"text-end"},V={class:"text-end"};function C(s,F,n,L,u,H){const f=c("AppHead"),r=c("Link"),p=c("PageTitle"),h=c("Table");return d(),o(_,null,[l(f,{title:n.data.title},null,8,["title"]),e("div",g,[l(p,{title:n.data.title},{default:i(()=>[l(r,{href:s.route("customer.transactions.funds.create"),class:"btn btn-sm btn-primary"},{default:i(()=>[x,m(" "+a(s.__("Add Funds")),1)]),_:1},8,["href"])]),_:1},8,["title"]),e("div",w,[e("div",A,[l(h,{options:u.tableOptions,links:n.transactions.links,total:n.transactions.total,tableStyle:"fs-8 table-sm"},{default:i(()=>[(d(!0),o(_,null,y(n.transactions.data,(t,b)=>(d(),o("tr",{key:b},[e("td",null,a(t.number),1),e("td",null,a(s.localDate(t.date)),1),e("td",null,a(t.type),1),e("td",null,[t.reference_link?(d(),o("div",B,[e("div",null,a(t.transactionable_type),1),l(r,{href:t.reference_link},{default:i(()=>[m(a(t.description),1)]),_:2},1032,["href"])])):T("",!0)]),e("td",D,a(s.formatMoney(t.amount)),1),e("td",V,a(s.formatMoney(t.balance)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const q=N(v,[["render",C]]);export{q as default};

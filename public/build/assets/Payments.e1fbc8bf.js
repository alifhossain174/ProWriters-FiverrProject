import{T as p}from"./Table.c4394f69.js";import h from"./ProfileLayout.e4c0380e.js";import{_ as b,A as k,w as n,r as l,o as r,b as a,t as o,a as m,c,q as y,f as N,F as L}from"./app.2022c6b3.js";import"./Pagination.03b1e965.js";import"./bootstrap.esm.2333d793.js";const T={props:["data","payments","customer"],components:{Table:p,ProfileLayout:h},data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("Method"),className:""},{name:this.__("Amount"),className:"text-end"}]}}}},x={class:"mt-4 mb-4"},B={class:"text-end"};function P(s,w,t,D,i,V){const u=l("Link"),_=l("Table"),d=l("ProfileLayout");return r(),k(d,{customer:t.customer},{default:n(()=>[a("h5",x,o(t.data.title),1),m(_,{options:i.tableOptions,links:t.payments.links,total:t.payments.total,tableStyle:"fs-8"},{default:n(()=>[(r(!0),c(L,null,y(t.payments.data,(e,f)=>(r(),c("tr",{key:f},[a("td",null,[m(u,{href:s.route("admin.payments.show",e.uuid)},{default:n(()=>[N(o(e.number),1)]),_:2},1032,["href"])]),a("td",null,o(s.localDate(e.created_at)),1),a("td",null,o(e.method),1),a("td",B,o(s.formatMoney(e.amount)),1)]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["customer"])}const O=b(T,[["render",P]]);export{O as default};

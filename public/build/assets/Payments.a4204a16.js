import{T as p}from"./Table.8330e037.js";import h from"./ProfileLayout.86ee2124.js";import{_ as b,g as y,y as n,f as l,o as r,b as a,t as o,a as m,c,r as k,d as N,F as L}from"./app.b345893e.js";import"./Pagination.109538d8.js";import"./bootstrap.esm.2333d793.js";const T={props:["data","payments","customer"],components:{Table:p,ProfileLayout:h},data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("Method"),className:""},{name:this.__("Amount"),className:"text-end"}]}}}},x={class:"mt-4 mb-4"},B={class:"text-end"};function P(s,g,t,D,i,V){const d=l("Link"),u=l("Table"),_=l("ProfileLayout");return r(),y(_,{customer:t.customer},{default:n(()=>[a("h5",x,o(t.data.title),1),m(u,{options:i.tableOptions,links:t.payments.links,total:t.payments.total,tableStyle:"fs-8"},{default:n(()=>[(r(!0),c(L,null,k(t.payments.data,(e,f)=>(r(),c("tr",{key:f},[a("td",null,[m(d,{href:s.route("admin.payments.show",e.uuid)},{default:n(()=>[N(o(e.number),1)]),_:2},1032,["href"])]),a("td",null,o(s.localDate(e.created_at)),1),a("td",null,o(e.method),1),a("td",B,o(s.formatMoney(e.amount)),1)]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["customer"])}const S=b(T,[["render",P]]);export{S as default};
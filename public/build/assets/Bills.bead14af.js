import{T as b}from"./Table.ece0ef27.js";import k from"./ProfileLayout.5cdaa181.js";import{_ as y,c as o,a as i,w as c,F as _,r,o as n,b as l,t as e,q as N,f as g}from"./app.707c49f0.js";import"./Pagination.71bd4807.js";import"./bootstrap.esm.2333d793.js";const L={props:["data","author","bills"],components:{ProfileLayout:k,Table:b},data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("Status"),className:"text-center"},{name:this.__("Amount"),className:"text-end"}]}}}},T={class:"mt-4 mb-4"},w={class:"text-center"},x={key:0,class:"badge bg-success"},B={key:1,class:"badge bg-warning"},P={class:"text-end"};function A(a,D,t,S,d,V){const m=r("AppHead"),u=r("Link"),p=r("Table"),f=r("ProfileLayout");return n(),o(_,null,[i(m,{title:t.data.title},null,8,["title"]),i(f,{author:t.author},{default:c(()=>[l("h5",T,e(t.data.title),1),i(p,{options:d.tableOptions,links:t.bills.links,total:t.bills.total,tableStyle:"fs-8"},{default:c(()=>[(n(!0),o(_,null,N(t.bills.data,(s,h)=>(n(),o("tr",{key:h},[l("td",null,[i(u,{href:a.route("admin.bills.show",s.uuid)},{default:c(()=>[g(e(s.number),1)]),_:2},1032,["href"])]),l("td",null,e(a.localDate(s.created_at)),1),l("td",w,[s.paid?(n(),o("span",x,e(a.__("Paid")),1)):(n(),o("span",B,e(a.__("Unpaid")),1))]),l("td",P,e(a.formatMoney(s.total)),1)]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["author"])],64)}const v=y(L,[["render",A]]);export{v as default};

import{T as y}from"./Table.ece0ef27.js";import k from"./ProfileLayout.5cdaa181.js";import{_ as N,c as n,a as c,w as r,F as d,r as i,o as l,b as e,t as s,q as x,f as _,E as T}from"./app.707c49f0.js";import"./Pagination.71bd4807.js";import"./bootstrap.esm.2333d793.js";const g={components:{Table:y,ProfileLayout:k},props:["data","author","tasks"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Status"),className:""},{name:this.__("Total"),className:"text-end"},{name:this.__("Payable Amount"),className:"text-end"}]}}}},L={class:"mt-4 mb-4"},v={class:"col-md-2"},B={class:"text-muted"},P={class:"col-md-2"},w={class:"col-md-2 text-end"},A={class:"col-md-2 text-end"},C={key:0,class:"text-success"},S={key:1,class:"text-danger"};function V(a,E,o,F,m,H){const u=i("AppHead"),h=i("Link"),p=i("Table"),f=i("ProfileLayout");return l(),n(d,null,[c(u,{title:o.data.title},null,8,["title"]),c(f,{author:o.author},{default:r(()=>[e("h5",L,s(o.data.title),1),c(p,{options:m.tableOptions,links:o.tasks.links,total:o.tasks.total},{default:r(()=>[(l(!0),n(d,null,x(o.tasks.data,(t,b)=>(l(),n("tr",{class:"mb-2",key:b},[e("td",v,[c(h,{href:a.route("admin.tasks.show",t.uuid)},{default:r(()=>[_(s(t.number),1)]),_:2},1032,["href"]),e("div",null,[e("small",B,s(t.service.name),1)])]),e("td",P,[e("span",{class:"badge rounded-pill",style:T({backgroundColor:t.status.bg_color,color:t.status.color})},s(t.status.name),5)]),e("td",w,s(a.formatMoney(t.total)),1),e("td",A,[_(s(a.formatMoney(t.author_payment_amount))+" ",1),t.is_billed?(l(),n("div",C,s(a.__("Billed")),1)):(l(),n("div",S,s(a.__("Not Billed")),1))])]))),128))]),_:1},8,["options","links","total"])]),_:1},8,["author"])],64)}const j=N(g,[["render",V]]);export{j as default};

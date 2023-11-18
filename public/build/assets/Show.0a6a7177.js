import{I as h}from"./Invoice.06250bcf.js";import{_ as v,c as b,a as n,b as e,A as _,w as s,d as r,f as i,t as c,F as p,r as a,o as l}from"./app.6486bb89.js";import"./bootstrap.esm.2333d793.js";const w={props:["data","invoice"],components:{Invoice:h}},g={class:"container page-container"},k=e("i",{class:"fa-solid fa-arrow-left-long"},null,-1),y={class:"row"},B={class:"col-md-9"},N={class:"col-md-3"},I={class:"d-grid gap-2"},V=e("i",{class:"far fa-check-circle"},null,-1),A=["href"],C=e("i",{class:"fa-solid fa-cloud-arrow-down"},null,-1);function P(o,T,t,D,F,H){const u=a("AppHead"),d=a("Link"),f=a("PageTitle"),m=a("Invoice");return l(),b(p,null,[n(u,{title:t.data.title},null,8,["title"]),e("div",g,[t.data.is_user_logged_in?(l(),_(f,{key:0,title:t.data.title},{default:s(()=>[n(d,{class:"btn btn-sm btn-light",href:o.route("customer.invoices.index")},{default:s(()=>[k,i(" "+c(o.__("Back to invoices")),1)]),_:1},8,["href"])]),_:1},8,["title"])):r("",!0),e("div",y,[e("div",B,[n(m,{data:t.data,invoice:t.invoice},null,8,["data","invoice"])]),e("div",N,[e("div",I,[t.data.allow_pay_now?(l(),_(d,{key:0,class:"btn btn-sm btn-success mb-4",href:o.route("customer.invoices.pay",t.invoice.uuid)},{default:s(()=>[V,i(" "+c(o.__("Pay Now")),1)]),_:1},8,["href"])):r("",!0),e("a",{class:"btn btn-sm btn-outline-secondary",href:o.route("public.invoices.download",t.invoice.uuid)},[C,i(" "+c(o.__("Download")),1)],8,A)])])])])],64)}const j=v(w,[["render",P]]);export{j as default};

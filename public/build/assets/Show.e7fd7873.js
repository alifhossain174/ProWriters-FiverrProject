import{I as u}from"./Invoice.69b5f8e2.js";import{_ as v,c as h,a as n,b as t,w as i,A as p,d as g,F as k,r as o,o as s,f as c,t as l}from"./app.7185dbf0.js";import"./bootstrap.esm.2333d793.js";const b={props:["data","invoice"],components:{Invoice:u}},w={class:"container page-container"},B=t("i",{class:"fa-solid fa-arrow-left-long"},null,-1),A={class:"row"},F={class:"col-md-9"},I={class:"col-md-3"},L={class:"d-grid gap-2"},N=t("i",{class:"fa-solid fa-money-bill-wave"},null,-1);function V(a,y,e,C,D,T){const d=o("AppHead"),_=o("Link"),r=o("PageTitle"),m=o("Invoice"),f=o("DialogLink");return s(),h(k,null,[n(d,{title:e.data.title},null,8,["title"]),t("div",w,[n(r,{title:e.data.title},{default:i(()=>[n(_,{class:"btn btn-sm btn-light",href:a.route("admin.invoices.index")},{default:i(()=>[B,c(" "+l(a.__("Back to invoices")),1)]),_:1},8,["href"])]),_:1},8,["title"]),t("div",A,[t("div",F,[n(m,{data:e.data,invoice:e.invoice},null,8,["data","invoice"])]),t("div",I,[t("div",L,[parseFloat(e.invoice.amount_paid)<parseFloat(e.invoice.total)?(s(),p(f,{key:0,href:a.route("admin.invoices.adjust.from.wallet.create",e.invoice.uuid),class:"btn btn-success"},{default:i(()=>[N,c(" "+l(a.__("Adjust balance from Wallet")),1)]),_:1},8,["href"])):g("",!0)])])])])],64)}const P=v(b,[["render",V]]);export{P as default};

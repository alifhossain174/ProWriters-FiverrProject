import{T as p}from"./Table.7ca370d4.js";import h from"./ProfileLayout.d6d0da9e.js";import{_ as b,A as k,w as a,r as n,o as l,b as t,t as o,a as r,c as i,q as y,f as N,E as T,F as x}from"./app.1d2673ab.js";import"./Pagination.e95d2962.js";import"./bootstrap.esm.2333d793.js";const L={components:{Table:p,ProfileLayout:h},props:["data","tasks","customer"],data(){return{tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Status"),className:""},{name:this.__("Total"),className:"text-end"}]}}}},g={class:"mt-4 mb-4"},v={class:"data-container"},B={class:"col-md-2"},w={class:"text-muted"},C={class:"col-md-2"},P={class:"col-md-2 text-end"};function S(c,V,e,E,m,F){const d=n("Link"),_=n("Table"),u=n("ProfileLayout");return l(),k(u,{customer:e.customer},{default:a(()=>[t("h5",g,o(e.data.title),1),t("div",v,[r(_,{options:m.tableOptions,links:e.tasks.links,total:e.tasks.total},{default:a(()=>[(l(!0),i(x,null,y(e.tasks.data,(s,f)=>(l(),i("tr",{class:"mb-2",key:f},[t("td",B,[r(d,{href:c.route("admin.tasks.show",s.uuid)},{default:a(()=>[N(o(s.number),1)]),_:2},1032,["href"]),t("div",null,[t("small",w,o(s.service.name),1)])]),t("td",C,[t("span",{class:"badge rounded-pill",style:T({backgroundColor:s.status.bg_color,color:s.status.color})},o(s.status.name),5)]),t("td",P,o(c.formatMoney(s.total)),1)]))),128))]),_:1},8,["options","links","total"])])]),_:1},8,["customer"])}const M=b(L,[["render",S]]);export{M as default};

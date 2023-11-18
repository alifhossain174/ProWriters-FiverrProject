import{_ as y,c as o,a as l,b as t,w as d,t as e,F as u,q as p,d as b,f as i,r as _,o as s}from"./app.9acdbdf3.js";import"./bootstrap.esm.2333d793.js";const w={props:["data","payment"]},g={class:"container page-container"},v=t("i",{class:"fa-solid fa-arrow-left-long"},null,-1),k={class:"row"},N={class:"col-md-9"},D={class:"document-parent-container"},A={class:"document-container",style:{"min-height":"auto"}},B={class:"text-center"},P={class:"row fs-7"},R={class:"col-md-6"},T={class:"col-md-6 text-end text-bold"},V={class:"table table-sm fs-8 mt-4"},C={key:0},F={class:"dropdown"},L={class:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},H={class:"dropdown-menu"},M=["href"],S={class:"col-md-3"},q={class:"d-grid gap-2"},E=["href"],I=t("i",{class:"fa-solid fa-cloud-arrow-down"},null,-1);function U(n,W,a,j,z,G){const m=_("AppHead"),c=_("Link"),h=_("PageTitle");return s(),o(u,null,[l(m,{title:a.data.title},null,8,["title"]),t("div",g,[l(h,{title:a.data.title},{default:d(()=>[l(c,{class:"btn btn-sm btn-light",href:n.route("admin.payments.index")},{default:d(()=>[v,i(" "+e(n.__("Back to payments")),1)]),_:1},8,["href"])]),_:1},8,["title"]),t("div",k,[t("div",N,[t("div",D,[t("div",A,[t("h3",B,e(n.__("Payment Receipt")),1),t("div",P,[t("div",R,e(n.__("Date"))+" : "+e(n.localDate(a.payment.created_at)),1),t("div",T,e(n.__("Number"))+" : "+e(a.payment.number),1)]),t("table",V,[t("tbody",null,[t("tr",null,[t("td",null,e(n.__("Received From")),1),t("td",null,[l(c,{href:n.route("admin.customers.show",a.payment.from.uuid)},{default:d(()=>[i(e(a.payment.from.full_name),1)]),_:1},8,["href"])])]),t("tr",null,[t("td",null,e(n.__("Amount")),1),t("td",null,e(n.formatMoney(a.payment.amount)),1)]),t("tr",null,[t("td",null,e(n.__("Payment Method")),1),t("td",null,e(a.payment.method),1)]),t("tr",null,[t("td",null,e(n.__("Reference")),1),t("td",null,e(a.payment.reference),1)]),t("tr",null,[t("td",null,e(n.__("Reason")),1),t("td",null,e(n.__("Wallet Top Up")),1)]),t("tr",null,[t("td",null,e(n.__("Internal Note")),1),t("td",null,e(a.payment.internal_note),1)]),a.payment.attachments.length>0?(s(),o("tr",C,[t("td",null,e(n.__("Attachments")),1),t("td",null,[t("div",F,[t("button",L,e(n.__("Download")),1),t("ul",H,[(s(!0),o(u,null,p(a.payment.attachments,(r,f)=>(s(),o("li",{key:f},[t("a",{class:"dropdown-item",href:n.route("attachments.download",r.uuid)},e(r.display_name),9,M)]))),128))])])])])):b("",!0)])])])])]),t("div",S,[t("div",q,[t("a",{class:"btn btn-sm btn-outline-secondary",href:n.route("admin.payments.download",a.payment.uuid)},[I,i(" "+e(n.__("Download")),1)],8,E)])])])])],64)}const O=y(w,[["render",U]]);export{O as default};

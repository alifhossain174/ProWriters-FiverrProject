import{_ as b,c as i,a as l,b as t,w as r,t as n,F as p,q as y,f as d,r as u,o as m}from"./app.707c49f0.js";import"./bootstrap.esm.2333d793.js";const g={props:["data","payment"],methods:{approve(e){let o=route("admin.payments.pendingApprovals.approve",e),a=this;this.confirmDialog(a.__("Yes, Approve"),()=>{a.$inertia.get(o,a.inertiaConfig)})},disapprove(e){let o=this,a=route("admin.payments.pendingApprovals.disapprove",e);this.confirmDialog(o.__("Yes, Disapprove"),()=>{o.$inertia.get(a,o.inertiaConfig)})}}},w={class:"container page-container"},A=t("i",{class:"fa-solid fa-arrow-left-long"},null,-1),k={class:"row"},D={class:"col-md-8"},C={class:"document-parent-container"},B={class:"document-container",style:{"min-height":"auto"}},N={class:"row fs-7"},T={class:"col-md-6"},F={class:"col-md-6 text-end text-bold"},L={class:"table table-sm fs-8 mt-4"},P={class:"dropdown"},R={class:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},V={class:"dropdown-menu"},H=["href"],M={class:"col-md-4"},S=t("i",{class:"far fa-thumbs-up"},null,-1),Y=t("i",{class:"far fa-thumbs-down"},null,-1);function q(e,o,a,E,U,_){const h=u("AppHead"),c=u("Link"),f=u("PageTitle");return m(),i(p,null,[l(h,{title:a.data.title},null,8,["title"]),t("div",w,[l(f,{title:a.data.title},{default:r(()=>[l(c,{class:"btn btn-sm btn-light",href:e.route("admin.payments.pendingApprovals.index")},{default:r(()=>[A,d(" "+n(e.__("Back")),1)]),_:1},8,["href"])]),_:1},8,["title"]),t("div",k,[t("div",D,[t("div",C,[t("div",B,[t("div",N,[t("div",T,n(e.__("Date"))+" : "+n(e.localDate(a.payment.created_at)),1),t("div",F,n(e.__("Number"))+" : "+n(a.payment.number),1)]),t("table",L,[t("tbody",null,[t("tr",null,[t("td",null,n(e.__("Received From")),1),t("td",null,[l(c,{href:e.route("admin.customers.show",a.payment.from.uuid)},{default:r(()=>[d(n(a.payment.from.full_name),1)]),_:1},8,["href"])])]),t("tr",null,[t("td",null,n(e.__("Amount")),1),t("td",null,n(e.formatMoney(a.payment.amount)),1)]),t("tr",null,[t("td",null,n(e.__("Payment Method")),1),t("td",null,n(a.payment.method.name),1)]),t("tr",null,[t("td",null,n(e.__("Reference")),1),t("td",null,n(a.payment.reference),1)]),t("tr",null,[t("td",null,n(e.__("Reason")),1),t("td",null,n(e.__("Wallet Top Up")),1)]),t("tr",null,[t("td",null,n(e.__("Attachments")),1),t("td",null,[t("div",P,[t("button",R,n(e.__("Download")),1),t("ul",V,[(m(!0),i(p,null,y(a.payment.attachments,(s,v)=>(m(),i("li",{key:v},[t("a",{class:"dropdown-item",href:e.route("attachments.download",s.uuid)},n(s.display_name),9,H)]))),128))])])])])])])])])]),t("div",M,[t("button",{class:"btn btn-sm btn-success me-2",onClick:o[0]||(o[0]=s=>_.approve(a.payment.uuid))},[S,d(" "+n(e.__("Approve")),1)]),t("button",{class:"btn btn-sm btn-danger",onClick:o[1]||(o[1]=s=>_.disapprove(a.payment.uuid))},[Y,d(" "+n(e.__("Disapprove")),1)])])])])],64)}const z=b(g,[["render",q]]);export{z as default};

import{_ as y,c,a as _,b as e,w as d,B as p,t,d as u,f as a,F as m,q as R,A as b,r,o}from"./app.2abe2877.js";import"./bootstrap.esm.2333d793.js";const q={props:["data","paymentRequest"]},k={class:"container page-container"},g={class:"float-end"},w=e("i",{class:"fa-solid fa-chevron-left"},null,-1),T={class:"row"},L={class:"col-md-9"},B={class:"document-parent-container"},M={class:"document-container"},H={key:0},N={class:"row"},A={class:"col-md-12 text-end mb-3"},C={class:"bold"},P={class:"col-md-6"},V=["innerHTML"],D={class:"col-md-6 text-end"},F=["innerHTML"],I={class:"row"},S={class:"col-md-6"},U={class:"bold"},x={class:"col-md-6"},z={class:"row"},E={class:"col-md-12"},Q={class:"table mt-4"},j=e("th",null,"#",-1),G={class:"description text-left",width:"50%"},J={class:"text-end"},K={class:"text-end"},O={class:"text-end"},W={class:"description text-left"},X=e("br",null,null,-1),Y={class:"text-color-light"},Z=e("td",{class:"text-end"},"1",-1),$={class:"text-end"},ee={class:"text-end"},te={class:"col-md-4 offset-md-8"},se={class:"table text-end"},ne={class:"bold"},ae={class:"subtotal"},le={class:"row"},oe={class:"col-md-12"},de={class:"col-md-3"},ie=e("i",{class:"fa-solid fa-box-archive"},null,-1),ce=e("i",{class:"fa-solid fa-box-open"},null,-1);function _e(s,ue,n,re,he,me){const f=r("AppHead"),i=r("Link"),v=r("PageTitle");return o(),c(m,null,[_(f,{title:n.data.title},null,8,["title"]),e("div",k,[_(v,{title:n.data.title},{default:d(()=>[e("div",g,[_(i,{class:"btn btn-sm btn-light",href:s.route("freelancer.paymentRequests.index")},{default:d(()=>[w,a(" "+t(n.data.previous_link_text),1)]),_:1},8,["href"])])]),_:1},8,["title"]),e("div",T,[e("div",L,[e("div",B,[e("div",M,[e("h4",null,[e("span",{class:p(["badge rounded-pill text-bg-success",n.paymentRequest.paid?"text-bg-success":"text-bg-danger"])},t(n.paymentRequest.paid?s.__("Paid"):s.__("Unpaid")),3)]),n.paymentRequest.paid&&n.paymentRequest.reference?(o(),c("div",H,t(s.__("Payment Reference"))+" : "+t(n.paymentRequest.reference),1)):u("",!0),e("div",N,[e("div",A,[e("h4",C,[a(t(s.__("BILL"))+"# ",1),e("span",null,t(n.paymentRequest.number),1)])]),e("div",P,[e("div",null,[e("b",null,t(s.__("Bill To"))+" :",1)]),e("address",null,[e("div",null,[e("b",null,t(n.data.company.company_name),1)]),e("div",{class:"text-break nl2br",innerHTML:n.data.company.company_address},null,8,V)])]),e("div",D,[e("div",null,[e("b",null,t(s.__("Bill From"))+" :",1)]),e("address",null,[e("div",null,[e("b",null,t(n.paymentRequest.name),1)]),e("div",{class:"text-break nl2br",innerHTML:n.paymentRequest.address},null,8,F)])])]),e("div",I,[e("div",S,[e("p",null,[e("span",U,t(s.__("Date"))+" : "+t(s.localDate(n.paymentRequest.created_at)),1)])]),e("div",x,t(s.__("Invoice"))+"# : "+t(n.paymentRequest.invoice_number),1)]),e("div",z,[e("div",E,[e("table",Q,[e("thead",null,[e("tr",null,[j,e("th",G,t(s.__("Item")),1),e("th",J,t(s.__("Quantity")),1),e("th",K,t(s.__("Rate")),1),e("th",O,t(s.__("Sub Total")),1)])]),e("tbody",null,[(o(!0),c(m,null,R(n.paymentRequest.items,(l,h)=>(o(),c("tr",{key:h},[e("td",null,t(h+1),1),e("td",W,[e("strong",null,t(l.task.service.name),1),a(" ( "),_(i,{href:s.route("freelancer.tasks.show",l.task.uuid)},{default:d(()=>[a(t(l.task.number),1)]),_:2},1032,["href"]),a(" ) "),X,e("span",Y,t(l.task.title),1)]),Z,e("td",$,t(s.formatMoney(l.total)),1),e("td",ee,t(s.formatMoney(l.total)),1)]))),128))])])]),e("div",te,[e("table",se,[e("tbody",null,[e("tr",null,[e("td",null,[e("span",ne,t(s.__("Total")),1)]),e("td",ae,t(s.formatMoney(n.paymentRequest.total)),1)])])])])]),e("div",le,[e("div",oe,[e("div",null,[e("b",null,t(s.__("Note")),1)]),a(" "+t(n.paymentRequest.note),1)])])])])]),e("div",de,[n.data.allow.archiving?(o(),b(i,{key:0,class:"btn btn-sm btn-outline-secondary me-2",href:s.route("freelancer.paymentRequests.archive",n.paymentRequest.uuid),method:"post",as:"button",type:"button","preserve-scroll":""},{default:d(()=>[ie,a(" "+t(s.__("Archive")),1)]),_:1},8,["href"])):u("",!0),n.data.allow.unarchiving?(o(),b(i,{key:1,class:"btn btn-sm btn-outline-warning me-2",href:s.route("freelancer.paymentRequests.unarchive",n.paymentRequest.uuid),method:"post",as:"button",type:"button","preserve-scroll":""},{default:d(()=>[ce,a(" "+t(s.__("Unarchive")),1)]),_:1},8,["href"])):u("",!0)])])])],64)}const ve=y(q,[["render",_e]]);export{ve as default};

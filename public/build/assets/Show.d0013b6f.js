import{I as g}from"./Input.8c887a2d.js";import{_ as k,c as d,a as _,b as t,w as m,B as w,t as s,f as a,F as b,q as F,D as f,r,o as c}from"./app.1d2673ab.js";import"./vanilla-picker.csp.eccdf93b.js";import"./bootstrap.esm.2333d793.js";import"./debounce.8ee276ba.js";const M={components:{Input:g},props:["data","bill"],data(){return{paidForm:this.$inertia.form({payment_reference:this.bill.payment_reference}),unpaidForm:this.$inertia.form(),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()}}}},T={class:"container page-container"},L={class:"float-end"},B=t("i",{class:"fa-solid fa-chevron-left"},null,-1),I={class:"row"},S={class:"col-md-9"},C={class:"document-parent-container"},D={class:"document-container"},H={class:"badge-overlay"},P={class:"row"},V={class:"col-md-12 text-end mb-3"},N={class:"bold"},R={class:"col-md-6"},A=["innerHTML"],U={class:"col-md-6 text-end"},q=["innerHTML"],z={class:"row"},E={class:"col-md-6"},Q={class:"bold"},j={class:"col-md-6"},G={class:"row"},J={class:"col-md-12"},K={class:"table mt-4"},O=t("th",null,"#",-1),W={class:"description text-left",width:"50%"},X={class:"text-end"},Y={class:"text-end"},Z={class:"text-end"},x={class:"description text-left"},$=t("br",null,null,-1),tt={class:"text-color-light"},st=t("td",{class:"text-end"},"1",-1),et={class:"text-end"},lt={class:"text-end"},nt={class:"col-md-4 offset-md-8"},ot={class:"table text-end"},at={class:"bold"},it={class:"subtotal"},dt={class:"row"},_t={class:"col-md-12"},ct={class:"col-md-3"},rt={key:0},mt={class:"d-grid gap-2"},ut=["disabled"],ht=t("i",{class:"far fa-check-circle"},null,-1),bt={class:"border p-3 mt-5"},ft={class:"text-center"},vt={class:"text-center"},pt={key:1},yt={class:"card"},gt={class:"card-body"},kt={class:"d-grid gap-2"},wt=["disabled"],Ft=t("i",{class:"far fa-check-circle"},null,-1);function Mt(e,i,l,Tt,o,Lt){const v=r("AppHead"),u=r("Link"),p=r("PageTitle"),y=r("Input");return c(),d(b,null,[_(v,{title:l.data.title},null,8,["title"]),t("div",T,[_(p,{title:l.data.title},{default:m(()=>[t("div",L,[_(u,{class:"btn btn-sm btn-light",href:l.data.urls.previous_page},{default:m(()=>[B,a(" "+s(l.data.previous_link_text),1)]),_:1},8,["href"])])]),_:1},8,["title"]),t("div",I,[t("div",S,[t("div",C,[t("div",D,[t("div",H,[t("span",{class:w(["top-left badge",l.bill.paid?"green":"red"])},s(l.bill.paid?e.__("Paid"):e.__("Unpaid")),3)]),t("div",P,[t("div",V,[t("h4",N,[a(s(e.__("BILL"))+"# ",1),t("span",null,s(l.bill.number),1)])]),t("div",R,[t("div",null,[t("b",null,s(e.__("Bill To"))+" :",1)]),t("address",null,[t("div",null,[t("b",null,s(l.data.company.company_name),1)]),t("div",{class:"text-break",innerHTML:l.data.company.company_address},null,8,A)])]),t("div",U,[t("div",null,[t("b",null,s(e.__("Bill From"))+" :",1)]),t("address",null,[t("div",null,[t("b",null,s(l.bill.name),1)]),t("div",{class:"text-break",innerHTML:l.bill.address},null,8,q)])])]),t("div",z,[t("div",E,[t("p",null,[t("span",Q,s(e.__("Date"))+" : "+s(e.localDate(l.bill.created_at)),1)])]),t("div",j,s(e.__("Invoice"))+"# : "+s(l.bill.invoice_number),1)]),t("div",G,[t("div",J,[t("table",K,[t("thead",null,[t("tr",null,[O,t("th",W,s(e.__("Item")),1),t("th",X,s(e.__("Quantity")),1),t("th",Y,s(e.__("Rate")),1),t("th",Z,s(e.__("Sub Total")),1)])]),t("tbody",null,[(c(!0),d(b,null,F(l.bill.items,(n,h)=>(c(),d("tr",{key:h},[t("td",null,s(h+1),1),t("td",x,[t("strong",null,s(n.task.service.name),1),a(" ( "),_(u,{href:e.route("admin.tasks.show",n.task.uuid)},{default:m(()=>[a(s(n.task.number),1)]),_:2},1032,["href"]),a(" ) "),$,t("span",tt,s(n.task.title),1)]),st,t("td",et,s(e.formatMoney(n.total)),1),t("td",lt,s(e.formatMoney(n.total)),1)]))),128))])])]),t("div",nt,[t("table",ot,[t("tbody",null,[t("tr",null,[t("td",null,[t("span",at,s(e.__("Total")),1)]),t("td",it,s(e.formatMoney(l.bill.total)),1)])])])])]),t("div",dt,[t("div",_t,[t("div",null,[t("b",null,s(e.__("Note")),1)]),a(" "+s(l.bill.note),1)])])])])]),t("div",ct,[l.bill.paid?(c(),d("div",rt,[t("form",{onSubmit:i[0]||(i[0]=f(n=>o.unpaidForm.post(l.data.urls.submit_form_mark_as_unpaid,o.formConfig),["prevent"]))},[t("div",mt,[t("button",{disabled:o.unpaidForm.processing,type:"submit",class:"btn btn-light btn-lg"},[ht,a(" "+s(e.__("Mark as unpaid")),1)],8,ut)]),t("div",bt,[t("p",ft,[t("strong",null,s(e.__("Payment Date")),1),t("div",null,s(e.localDate(l.bill.paid)),1)]),t("p",vt,[t("strong",null,s(e.__("Payment Reference")),1),t("div",null,s(l.bill.payment_reference),1)])])],32)])):(c(),d("div",pt,[t("div",yt,[t("div",gt,[t("form",{onSubmit:i[2]||(i[2]=f(n=>o.paidForm.post(l.data.urls.submit_form_mark_as_paid,o.formConfig),["prevent"]))},[_(y,{modelValue:o.paidForm.payment_reference,"onUpdate:modelValue":i[1]||(i[1]=n=>o.paidForm.payment_reference=n),label:e.__("Payment Reference"),name:"payment_reference"},null,8,["modelValue","label"]),t("div",kt,[t("button",{disabled:o.paidForm.processing,type:"submit",class:"btn btn-success btn-sm"},[Ft,a(" "+s(e.__("Mark as paid")),1)],8,wt)])],32)])])]))])])])],64)}const Ht=k(M,[["render",Mt]]);export{Ht as default};

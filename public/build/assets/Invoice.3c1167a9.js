import{_,o as e,c as l,b as t,E as u,t as s,f as c,F as h,q as r,d}from"./app.9acdbdf3.js";const v={props:["data","invoice"]},b={class:"document-parent-container"},m={class:"document-container"},y={class:"ribbon-overlay"},f={class:"row"},M={class:"col-md-12 text-end mb-4"},T={class:"bold"},w={class:"col-md-6"},k={class:"col-md-6 text-end"},g=["innerHTML"],L={class:"row"},H={class:"col-md-12"},D={class:"table mt-4"},I=t("th",null,"#",-1),N={class:"description",width:"50%"},B={class:"text-end"},C={class:"text-end"},S={class:"text-end"},V={class:"description"},E={key:0},F=t("br",null,null,-1),q={class:"text-color-light"},z={class:"text-end"},A={class:"text-end"},O={class:"text-end"},P={class:"col-md-4 offset-md-8"},Q={class:"table table-sm text-end"},R={class:"fw-bold"},j={class:"bold"},G={class:"subtotal"},J={class:"fw-bold"},K={class:"bold"},U={class:"subtotal"},W={key:0,class:"fw-bold"},X={class:"bold"},Y={key:0,class:"text-muted"},Z={class:"subtotal"},x={class:"fw-bold"},p={class:"bold"},$={key:0,class:"text-muted"},tt={class:"subtotal"},st={class:"fw-bold"},ot={class:"bold"},nt={class:"subtotal"},et={class:"fw-bold"},lt={class:"bold"},it={class:"subtotal"},dt={class:"fw-bold"},at={class:"bold"},ct={class:"subtotal"},_t={class:"row"},ut={class:"col-md-12"},ht={key:0},rt=["innerHTML"],vt={key:1},bt=["innerHTML"],mt={key:2},yt=["innerHTML"];function ft(n,Mt,o,Tt,wt,kt){return e(),l("div",b,[t("div",m,[t("div",y,[t("span",{class:"top-left ribbon",style:u({background:o.data.ribbon_bg_color})},s(o.invoice.status.name),5)]),t("div",f,[t("div",M,[t("h4",T,[c(s(n.__("INVOICE"))+" # ",1),t("span",null,s(o.invoice.number),1)]),t("div",null,[t("div",null,s(n.__("Created"))+" : "+s(n.localDate(o.invoice.invoice_date)),1),t("div",null,s(n.__("Due"))+" : "+s(n.localDate(o.invoice.due_date)),1)])]),t("div",w,[t("strong",null,s(n.__("Bill To"))+" :",1),t("address",null,[t("div",null,s(o.invoice.customer.full_name),1),t("div",null,s(o.invoice.customer.email),1)])]),t("div",k,[t("div",null,[t("b",null,s(n.__("Bill From"))+" :",1)]),t("address",null,[t("div",null,s(o.data.company.name),1),t("div",{class:"nl2br",innerHTML:o.data.company.address},null,8,g)])])]),t("div",L,[t("div",H,[t("table",D,[t("thead",null,[t("tr",null,[I,t("th",N,s(n.__("Item")),1),t("th",B,s(n.__("Quantity")),1),t("th",C,s(n.__("Rate")),1),t("th",S,s(n.__("Sub Total")),1)])]),t("tbody",null,[(e(!0),l(h,null,r(o.invoice.items,(i,a)=>(e(),l("tr",{key:a},[t("td",null,s(a+1),1),t("td",V,[t("strong",null,s(i.name),1),c(),i.invoiceable?(e(),l("span",E," ("+s(o.data.invoiceable_types[i.invoiceable_type])+" "+s(i.invoiceable.number)+") ",1)):d("",!0),F,t("div",q,s(i.description),1)]),t("td",z,s(i.quantity),1),t("td",A,s(n.formatMoney(i.price)),1),t("td",O,s(n.formatMoney(i.sub_total)),1)]))),128))])])]),t("div",P,[t("table",Q,[t("tbody",null,[t("tr",R,[t("td",null,[t("span",j,s(n.__("Sub Total")),1)]),t("td",G,s(n.formatMoney(o.invoice.sub_total)),1)]),t("tr",J,[t("td",null,[t("span",K,s(n.__("Discount")),1)]),t("td",U,s(n.formatMoney(o.invoice.discount)),1)]),o.invoice.coupon_discount?(e(),l("tr",W,[t("td",null,[t("span",X,s(n.__("Discount Coupon")),1),o.invoice.coupon_code?(e(),l("small",Y," ("+s(o.invoice.coupon_code)+") ",1)):d("",!0)]),t("td",Z,s(n.formatMoney(o.invoice.coupon_discount)),1)])):d("",!0),t("tr",x,[t("td",null,[t("span",p,s(n.__("Sales Tax")),1),o.invoice.sales_tax_rate?(e(),l("small",$," ("+s(Math.round(o.invoice.sales_tax_rate,2))+"%) ",1)):d("",!0)]),t("td",tt,s(n.formatMoney(o.invoice.sales_tax_amount)),1)]),t("tr",st,[t("td",null,[t("span",ot,s(n.__("Total")),1)]),t("td",nt,s(n.formatMoney(o.invoice.total)),1)]),t("tr",et,[t("td",null,[t("span",lt,s(n.__("Amount Paid")),1)]),t("td",it,s(n.formatMoney(o.invoice.amount_paid)),1)]),t("tr",dt,[t("td",null,[t("span",at,s(n.__("Due")),1)]),t("td",ct,s(n.formatMoney(o.invoice.total-o.invoice.amount_paid)),1)])])])])]),t("div",_t,[t("div",ut,[o.invoice.customer_note?(e(),l("div",ht,[t("strong",null,s(n.__("Note")),1),t("p",{innerHTML:o.invoice.customer_note},null,8,rt)])):d("",!0),o.data.show_admin_note&&o.invoice.admin_note?(e(),l("div",vt,[t("strong",null,s(n.__("Internal Note")),1),t("p",{innerHTML:o.invoice.admin_note},null,8,bt)])):d("",!0),o.invoice.terms_and_conditions?(e(),l("div",mt,[t("strong",null,s(n.__("Terms and Conditions")),1),t("p",{innerHTML:o.invoice.terms_and_conditions},null,8,yt)])):d("",!0)])])])])}const Lt=_(v,[["render",ft]]);export{Lt as I};

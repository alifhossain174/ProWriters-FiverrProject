import{_ as g,c as l,a as r,b as t,t as o,w as p,d as c,F as m,r as y,h as u,f as i,o as d}from"./app.b345893e.js";import{S}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import{D as k}from"./DateRangePicker.54b86337.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const M={props:["data"],components:{DateRangePicker:k,SubmitButton:S},created(){var e;(e=this.data)!=null&&e.date_range&&(this.form.date_range=this.data.date_range)},data(){return{form:this.$inertia.form({date_range:""}),formConfig:{preserveState:!0,preserveScroll:!0,replace:!0}}}},R={class:"container page-container"},B={class:"row"},I={class:"col-md-12"},V=t("hr",null,null,-1),w={class:"row"},D={class:"col-md-3"},N={class:"col-md-9"},A={key:0},C={id:"report-1"},P={class:"border p-4 mt-4"},F={class:"text-muted text-center"},T=t("span",{class:"text-danger"},"*",-1),E={class:"text-center"},H={class:"text-center"},G={class:"table table-sm"},L={class:"text-end"},U={class:"text-end"},j={class:"text-end"},q={class:"text-end"},z={id:"report-2",class:"mt-4"},J={class:"border p-4 mt-4"},K={class:"text-muted text-center"},O=t("span",{class:"text-danger"},"*",-1),Q={class:"text-center"},W={class:"text-center"},X={class:"table table-sm"},Y={scope:"col",style:{width:"40%"}},Z=t("th",{scope:"col",class:"text-end"},null,-1),x={class:"text-end"},$={class:"text-end"},tt={class:"table table-sm"},et={scope:"col",style:{width:"40%"}},ot=t("th",{scope:"col",class:"text-end"},null,-1),st={class:"text-end"},nt={class:"text-end"},at={key:1,class:"text-center"};function lt(e,_,s,dt,n,_t){const h=i("AppHead"),f=i("DateRangePicker"),v=i("SubmitButton");return d(),l(m,null,[r(h,{title:s.data.title},null,8,["title"]),t("div",R,[t("div",B,[t("div",I,[t("h4",null,o(e.__("Income Statement")),1),V])]),t("div",w,[t("div",D,[t("form",{onSubmit:_[1]||(_[1]=p(a=>n.form.get(e.route("admin.reports.income.statement"),n.formConfig),["prevent"]))},[r(f,{modelValue:n.form.date_range,"onUpdate:modelValue":_[0]||(_[0]=a=>n.form.date_range=a),label:e.__("Date Range")},null,8,["modelValue","label"]),r(v,{disabled:n.form.processing},null,8,["disabled"])],32)]),t("div",N,[s.data.report_generated&&!n.form.processing?(d(),l("div",A,[t("div",C,[t("div",P,[t("div",F,[T,c(" "+o(e.__("Report generated based on Invoices and Bills from Authors")),1)]),t("h5",E,o(e.__("Income Statement")),1),t("div",H,o(e.__("From"))+" "+o(s.data.from)+" "+o(e.__("to"))+" "+o(s.data.to),1),t("table",G,[t("tbody",null,[t("tr",null,[t("td",null,"+ "+o(e.__("Sales Revenue")),1),t("td",L,o(e.formatMoney(s.data.income_statement_1_sales_revenue)),1)]),t("tr",null,[t("td",null,"- "+o(e.__("Sales Tax")),1),t("td",U,o(e.formatMoney(s.data.income_statement_1_sales_tax_amount)),1)]),t("tr",null,[t("td",null,"- "+o(e.__("Payment to Authors")),1),t("td",j,o(e.formatMoney(s.data.income_statement_1_total_payment_to_authors)),1)]),t("tr",null,[t("th",null,o(e.__("Net Income")),1),t("th",q,o(e.formatMoney(s.data.income_statement_1_net_income)),1)])])])])]),t("div",z,[t("div",J,[t("div",K,[O,c(" "+o(e.__("Report generated based on all the tasks that are marked Complete")),1)]),t("h5",Q,o(e.__("Income Statement")),1),t("div",W,o(e.__("From"))+" "+o(s.data.from)+" "+o(e.__("to"))+" "+o(s.data.to),1),t("table",X,[t("thead",null,[t("tr",null,[t("th",Y,o(e.__("Sales Revenue")),1),Z])]),t("tbody",null,[(d(!0),l(m,null,y(s.data.income_statement_2_records,(a,b)=>(d(),l("tr",{key:b},[t("td",null,"+ "+o(a.service.name),1),t("td",x,o(e.formatMoney(a.total)),1)]))),128)),t("tr",null,[t("th",null,o(e.__("Total Sales Revenue")),1),t("th",$,o(e.formatMoney(s.data.income_statement_2_sales_revenue)),1)])])]),t("table",tt,[t("thead",null,[t("tr",null,[t("th",et,o(e.__("Expenses")),1),ot])]),t("tbody",null,[t("tr",null,[t("td",null,"- "+o(e.__("Payment to Authors")),1),t("td",st,o(e.formatMoney(s.data.income_statement_2_total_payment_to_authors)),1)]),t("tr",null,[t("th",null,o(e.__("Net Income")),1),t("th",nt,o(e.formatMoney(s.data.income_statement_2_net_income)),1)])])])])])])):u("",!0),n.form.processing?(d(),l("div",at,o(e.__("Generating report"))+" ... ",1)):u("",!0)])])])],64)}const ft=g(M,[["render",lt]]);export{ft as default};
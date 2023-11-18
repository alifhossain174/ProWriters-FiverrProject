import{I as D}from"./Input.8aaee37e.js";import{T as M}from"./TextArea.6fdedaa7.js";import{_ as F,c as h,a,b as e,w as U,D as E,t as i,F as N,q,f as g,d as A,r as u,o as b,J as v,U as y}from"./app.15906225.js";import{S as B}from"./SubmitButton.9e7b4015.js";import{D as I}from"./DatePicker.de72e6e0.js";import{S as L}from"./vanilla-picker.csp.29f78eb8.js";import"./bootstrap.esm.2333d793.js";import"./debounce.23c94884.js";const K={components:{SearchCustomer:L,TextArea:M,Input:D,DatePicker:I,SubmitButton:B},props:["data"],computed:{calculateTotal(){let t=0,s=0;this.form.discount&&(s=parseFloat(this.form.discount));let m=0;for(let o=0;o<this.form.invoice_items.length;o++){const r=this.form.invoice_items[o];let V=parseFloat(r.quantity),k=parseFloat(r.price);const f=V*k;this.form.invoice_items[o].sub_total=this.formatMoney(f),t=t+f}this.data.enable_sales_tax&&(m=this.calculateSalesTax(t)),s>t&&(s=0,this.form.discount=s);let _=t-s+m;return this.sub_total=t,this.sales_tax_amount=m,this.formatMoney(_)}},watch:{"form.customer_id":{handler(t){this.getUnInvoicedTasks(t)},deep:!0}},data(){return{form:this.$inertia.form({customer_id:null,invoice_date:null,due_date:null,invoice_items:[],billing_address:null,admin_note:null,customer_note:null,terms_and_conditions:null,discount:0}),sales_tax_amount:0,sub_total:0}},methods:{calculateSalesTax(t){return this.data.enable_sales_tax&&this.data.sales_tax_rate?Math.round(t*this.data.sales_tax_rate/100,2):0},getUnInvoicedTasks(t){axios.post(route("admin.invoices.tasks.not_invoiced"),{customer_id:t}).then(s=>{for(let m=0;m<s.data.length;m++){let _=s.data[m];this.form.invoice_items.push({linked_task_id:_.id,linked_task_number:_.number,name:_.service.name,description:_.title,price:_.total,quantity:1,sub_total:_.total})}})},addNewLine(){this.form.invoice_items.push({linked_task_id:"",linked_task_number:"",name:"",description:"",price:0,quantity:1,sub_total:0})},removeLine(t){this.form.invoice_items.splice(t,1)},getErrorFieldName(t,s){return"invoice_items."+[s]+"."+t},restrictEmpty(t,s){const m=this.form.invoice_items[s][t];(!m||m=="")&&(this.form.invoice_items[s][t]=0)}}},P={class:"container page-container"},H=e("i",{class:"fa-solid fa-arrow-left-long"},null,-1),J={class:"row"},Q={class:"col-md-6"},R={class:"col-md-6"},j={class:"col-md-12"},z={class:"table table-sm"},G={class:"table-secondary"},O={class:"col-md-2"},W={class:"col-md-2"},X={class:"col-md-2"},Y={class:"col-md-1"},Z={class:"col-md-2"},x={class:"col-md-2 text-end"},$=e("th",{class:"col-md-1"},null,-1),ee=["onUpdate:modelValue"],te=["onUpdate:modelValue"],oe=["onUpdate:modelValue","onKeypress"],se=["onUpdate:modelValue","onKeypress"],le={class:"text-end"},ne={class:"text-end"},ie=["onClick"],ae=e("i",{class:"fa-solid fa-trash-can"},null,-1),me=[ae],re={colspan:"7"},de={class:"text-end",colspan:"6"},_e={class:"text-end"},ue={class:"text-end",colspan:"6"},ce={class:"text-end"},fe={class:"text-end",colspan:"6"},pe={key:0,class:"text-muted"},he={class:"text-end"},be={class:"text-end",colspan:"6"},ve={class:"text-end"},ye={class:"row"},Ve={class:"col-md-6"},ke={class:"col-md-6"},ge={class:"col-md-12"};function Te(t,s,m,_,o,r){const V=u("AppHead"),k=u("Link"),f=u("PageTitle"),S=u("SearchCustomer"),p=u("TextArea"),T=u("DatePicker"),c=u("ValidationError"),C=u("Input"),w=u("SubmitButton");return b(),h(N,null,[a(V,{title:m.data.title},null,8,["title"]),e("div",P,[a(f,{title:m.data.title},{default:U(()=>[a(k,{class:"btn btn-sm btn-light",href:t.route("admin.invoices.index")},{default:U(()=>[H,g(" "+i(t.__("Back to invoices")),1)]),_:1},8,["href"])]),_:1},8,["title"]),e("form",{onSubmit:s[10]||(s[10]=E(l=>o.form.post(t.route("admin.invoices.store"),t.formConfig),["prevent"]))},[e("div",J,[e("div",Q,[a(S,{options:[],modelValue:o.form.customer_id,"onUpdate:modelValue":s[0]||(s[0]=l=>o.form.customer_id=l),label:t.__("Customer"),name:"customer_id"},null,8,["modelValue","label"]),a(p,{modelValue:o.form.billing_address,"onUpdate:modelValue":s[1]||(s[1]=l=>o.form.billing_address=l),rows:"2",label:t.__("Billing Address"),name:"billing_address"},null,8,["modelValue","label"])]),e("div",R,[a(T,{format:"yyyy-MM-dd",modelValue:o.form.invoice_date,"onUpdate:modelValue":s[2]||(s[2]=l=>o.form.invoice_date=l),label:t.__("Invoice Date"),name:"invoice_date"},null,8,["modelValue","label"]),a(T,{format:"yyyy-MM-dd",modelValue:o.form.due_date,"onUpdate:modelValue":s[3]||(s[3]=l=>o.form.due_date=l),label:t.__("Due Date"),name:"due_date"},null,8,["modelValue","label"])]),e("div",j,[e("table",z,[e("thead",G,[e("tr",null,[e("th",O,i(t.__("Task")),1),e("th",W,i(t.__("Item")),1),e("th",X,i(t.__("Description")),1),e("th",Y,i(t.__("Quantity")),1),e("th",Z,i(t.__("Rate")),1),e("th",x,i(t.__("Amount")),1),$])]),e("tbody",null,[(b(!0),h(N,null,q(o.form.invoice_items,(l,n)=>(b(),h("tr",{key:n},[e("td",null,i(l.linked_task_number),1),e("td",null,[v(e("textarea",{class:"form-control form-control-sm","onUpdate:modelValue":d=>o.form.invoice_items[n].name=d},null,8,ee),[[y,o.form.invoice_items[n].name]]),a(c,{name:r.getErrorFieldName("name",n)},null,8,["name"])]),e("td",null,[v(e("textarea",{class:"form-control form-control-sm","onUpdate:modelValue":d=>o.form.invoice_items[n].description=d},null,8,te),[[y,o.form.invoice_items[n].description]]),a(c,{name:r.getErrorFieldName("description",n)},null,8,["name"])]),e("td",null,[v(e("input",{class:"form-control form-control-sm",type:"text","onUpdate:modelValue":d=>o.form.invoice_items[n].quantity=d,onKeypress:d=>t.onlyNumber(d,o.form.invoice_items[n].quantity)},null,40,oe),[[y,o.form.invoice_items[n].quantity]]),a(c,{name:r.getErrorFieldName("quantity",n)},null,8,["name"])]),e("td",null,[v(e("input",{class:"form-control form-control-sm",type:"text","onUpdate:modelValue":d=>o.form.invoice_items[n].price=d,onKeypress:d=>t.onlyNumber(d,o.form.invoice_items[n].price)},null,40,se),[[y,o.form.invoice_items[n].price]]),a(c,{name:r.getErrorFieldName("price",n)},null,8,["name"])]),e("td",le,[g(i(o.form.invoice_items[n].sub_total)+" ",1),a(c,{name:r.getErrorFieldName("sub_total",n)},null,8,["name"])]),e("td",ne,[e("button",{type:"button",onClick:d=>r.removeLine(n),class:"btn btn-sm btn-danger"},me,8,ie)])]))),128)),e("tr",null,[e("td",re,[e("button",{type:"button",onClick:s[4]||(s[4]=(...l)=>r.addNewLine&&r.addNewLine(...l)),class:"btn btn-sm btn-success"},i(t.__("Add new line")),1)])])]),e("tfoot",null,[e("tr",null,[e("th",de,i(t.__("Sub Total")),1),e("th",_e,i(t.formatMoney(o.sub_total)),1)]),e("tr",null,[e("th",ue,i(t.__("Discount")),1),e("th",ce,[a(C,{modelValue:o.form.discount,"onUpdate:modelValue":s[5]||(s[5]=l=>o.form.discount=l),name:"discount",onKeypress:s[6]||(s[6]=l=>t.onlyNumber(l,o.form.discount)),customStyle:"text-end"},null,8,["modelValue"])])]),e("tr",null,[e("th",fe,[e("div",null,[g(i(t.__("Sales Tax"))+" ",1),m.data.enable_sales_tax?(b(),h("small",pe,"("+i(Math.round(m.data.sales_tax_rate,2))+"%)",1)):A("",!0)])]),e("th",he,i(t.formatMoney(o.sales_tax_amount)),1)]),e("tr",null,[e("th",be,i(t.__("Total")),1),e("th",ve,i(r.calculateTotal),1)])])])])]),e("div",ye,[e("div",Ve,[a(p,{modelValue:o.form.admin_note,"onUpdate:modelValue":s[7]||(s[7]=l=>o.form.admin_note=l),name:"admin_note",label:t.__("Admin Note")},null,8,["modelValue","label"])]),e("div",ke,[a(p,{modelValue:o.form.customer_note,"onUpdate:modelValue":s[8]||(s[8]=l=>o.form.customer_note=l),name:"customer_note",label:t.__("Customer Note")},null,8,["modelValue","label"])]),e("div",ge,[a(p,{modelValue:o.form.terms_and_conditions,"onUpdate:modelValue":s[9]||(s[9]=l=>o.form.terms_and_conditions=l),name:"terms_and_conditions",label:t.__("Terms & Condition")},null,8,["modelValue","label"])])]),a(w,{disabled:o.form.processing},null,8,["disabled"])],32)])],64)}const Ee=F(K,[["render",Te]]);export{Ee as default};

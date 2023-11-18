import{T as k}from"./Table.8330e037.js";import{I as T}from"./Input.d3e8f5e0.js";import{T as N}from"./TextArea.67869acb.js";import{_ as w,c as i,a,b as o,w as A,t as r,y as f,h as b,F as h,f as d,o as m,r as S,d as B}from"./app.b345893e.js";import{S as C}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import"./Pagination.109538d8.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const I={components:{Table:k,Input:T,TextArea:N,SubmitButton:C},props:["data","tasks"],methods:{getAddress(){let t=this.data.author.profile,e=t.address;return t.city&&(e=e+`
`+t.city),t.state&&(e=e+`
`+t.state),this.data.author.country&&(e=e+`
`+this.data.author.country.name),e}},data(){return{form:this.$inertia.form({name:this.data.author.full_name,address:this.getAddress(),note:null,invoice_number:null}),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()},tableOptions:{titles:[{name:"#",className:"col-md-1"},{name:this.__("Item"),className:"col-md-5"},{name:this.__("Earning"),className:"col-md-2 text-end"}]}}}},q={class:"container page-container"},L={key:0,class:"row"},U={class:"col-md-7"},M={key:0,class:"border rounded-3 p-3"},O={key:1,class:"border p-3"},P={class:"col-md-5"},Y={class:"mb-4"},E={class:"col-md-1"},F={class:"col-md-5"},H={class:"col-md-2 text-end"},j=o("td",null,null,-1),D={class:"fw-bolder"},R={class:"text-end fw-bolder"},x={key:1,class:"row justify-content-center"},z={class:"col-md-4"},G=["src"],J={class:"text-center"};function K(t,e,n,Q,s,W){const p=d("AppHead"),g=d("PageTitle"),u=d("Input"),_=d("TextArea"),v=d("SubmitButton"),y=d("Link"),V=d("Table");return m(),i(h,null,[a(p,{title:n.data.title},null,8,["title"]),o("div",q,[a(g,{title:n.data.title},null,8,["title"]),n.tasks.length>0?(m(),i("div",L,[o("div",U,[n.data.is_billable?(m(),i("fieldset",M,[o("div",null,[o("form",{onSubmit:e[4]||(e[4]=A(l=>s.form.post(t.route("author.paymentRequests.store"),s.formConfig),["prevent"]))},[a(u,{modelValue:s.form.name,"onUpdate:modelValue":e[0]||(e[0]=l=>s.form.name=l),label:t.__("Your Name"),name:"name",required:!0},null,8,["modelValue","label"]),a(_,{modelValue:s.form.address,"onUpdate:modelValue":e[1]||(e[1]=l=>s.form.address=l),label:t.__("Your Address"),name:"address",required:!0},null,8,["modelValue","label"]),a(_,{modelValue:s.form.note,"onUpdate:modelValue":e[2]||(e[2]=l=>s.form.note=l),label:t.__("Note"),name:"note",required:!0},null,8,["modelValue","label"]),a(u,{modelValue:s.form.invoice_number,"onUpdate:modelValue":e[3]||(e[3]=l=>s.form.invoice_number=l),label:t.__("Your Invoice Number"),name:"invoice_number",note:t.__("Optional")},null,8,["modelValue","label","note"]),a(v,{class:"mt-3",disabled:s.form.disabled},null,8,["disabled"])],32)])])):(m(),i("div",O,r(n.data.minimum_threshold_message),1))]),o("div",P,[o("small",Y,r(t.__("List of completed tasks that are billable")),1),a(V,{options:s.tableOptions,total:n.tasks.length,noPagination:!0},{default:f(()=>[(m(!0),i(h,null,S(n.tasks,(l,c)=>(m(),i("tr",{key:c},[o("td",E,r(c+1),1),o("td",F,[a(y,{href:l.link},{default:f(()=>[B(r(l.number),1)]),_:2},1032,["href"])]),o("td",H,r(t.formatMoney(l.author_payment_amount)),1)]))),128)),o("tr",null,[j,o("td",D,r(t.__("Total billable amount")),1),o("td",R,r(t.formatMoney(n.data.total)),1)])]),_:1},8,["options","total"])])])):b("",!0),n.tasks.length==0?(m(),i("div",x,[o("div",z,[o("img",{src:t.asset("images/sad.svg"),class:"img-fluid"},null,8,G),o("h5",J,r(n.data.no_billable_work_message),1)])])):b("",!0)])],64)}const ae=w(I,[["render",K]]);export{ae as default};
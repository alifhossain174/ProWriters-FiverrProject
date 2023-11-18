import{T as y}from"./Table.17e80b9f.js";import{I as T}from"./Input.ae708ed5.js";import{T as N}from"./TextArea.c8f7119a.js";import{_ as w,c as i,a,b as o,D as A,t as r,w as f,d as b,F as p,r as d,o as m,q as S,f as B}from"./app.969842cf.js";import{S as C}from"./SubmitButton.f6813064.js";import"./vanilla-picker.csp.0ced5960.js";import"./Pagination.7add1a6b.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ed46515d.js";const I={components:{Table:y,Input:T,TextArea:N,SubmitButton:C},props:["data","tasks"],methods:{getAddress(){let t=this.data.freelancer.profile,e=t.address;return t.city&&(e=e+`
`+t.city),t.state&&(e=e+`
`+t.state),this.data.freelancer.country&&(e=e+`
`+this.data.freelancer.country.name),e}},data(){return{form:this.$inertia.form({name:this.data.freelancer.full_name,address:this.getAddress(),note:null,invoice_number:null}),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()},tableOptions:{titles:[{name:"#",className:"col-md-1"},{name:this.__("Item"),className:"col-md-5"},{name:this.__("Earning"),className:"col-md-2 text-end"}]}}}},q={class:"container page-container"},L={key:0,class:"row"},U={class:"col-md-7"},M={key:0,class:"border rounded-3 p-3"},O={key:1,class:"border p-3"},P={class:"col-md-5"},Y={class:"mb-4"},D={class:"col-md-1"},E={class:"col-md-5"},F={class:"col-md-2 text-end"},H=o("td",null,null,-1),j={class:"fw-bolder"},R={class:"text-end fw-bolder"},x={key:1,class:"row justify-content-center"},z={class:"col-md-4"},G=["src"],J={class:"text-center"};function K(t,e,n,Q,s,W){const h=d("AppHead"),g=d("PageTitle"),u=d("Input"),c=d("TextArea"),v=d("SubmitButton"),V=d("Link"),k=d("Table");return m(),i(p,null,[a(h,{title:n.data.title},null,8,["title"]),o("div",q,[a(g,{title:n.data.title},null,8,["title"]),n.tasks.length>0?(m(),i("div",L,[o("div",U,[n.data.is_billable?(m(),i("fieldset",M,[o("div",null,[o("form",{onSubmit:e[4]||(e[4]=A(l=>s.form.post(t.route("freelancer.paymentRequests.store"),s.formConfig),["prevent"]))},[a(u,{modelValue:s.form.name,"onUpdate:modelValue":e[0]||(e[0]=l=>s.form.name=l),label:t.__("Your Name"),name:"name",required:!0},null,8,["modelValue","label"]),a(c,{modelValue:s.form.address,"onUpdate:modelValue":e[1]||(e[1]=l=>s.form.address=l),label:t.__("Your Address"),name:"address",required:!0},null,8,["modelValue","label"]),a(c,{modelValue:s.form.note,"onUpdate:modelValue":e[2]||(e[2]=l=>s.form.note=l),label:t.__("Note"),name:"note",required:!0},null,8,["modelValue","label"]),a(u,{modelValue:s.form.invoice_number,"onUpdate:modelValue":e[3]||(e[3]=l=>s.form.invoice_number=l),label:t.__("Your Invoice Number"),name:"invoice_number",note:t.__("Optional")},null,8,["modelValue","label","note"]),a(v,{class:"mt-3",disabled:s.form.disabled},null,8,["disabled"])],32)])])):(m(),i("div",O,r(n.data.minimum_threshold_message),1))]),o("div",P,[o("small",Y,r(t.__("List of completed tasks that are billable")),1),a(k,{options:s.tableOptions,total:n.tasks.length,noPagination:!0},{default:f(()=>[(m(!0),i(p,null,S(n.tasks,(l,_)=>(m(),i("tr",{key:_},[o("td",D,r(_+1),1),o("td",E,[a(V,{href:l.link},{default:f(()=>[B(r(l.number),1)]),_:2},1032,["href"])]),o("td",F,r(t.formatMoney(l.freelancer_payment_amount)),1)]))),128)),o("tr",null,[H,o("td",j,r(t.__("Total billable amount")),1),o("td",R,r(t.formatMoney(n.data.total)),1)])]),_:1},8,["options","total"])])])):b("",!0),n.tasks.length==0?(m(),i("div",x,[o("div",z,[o("img",{src:t.asset("images/sad.svg"),class:"img-fluid"},null,8,G),o("h5",J,r(n.data.no_billable_work_message),1)])])):b("",!0)])],64)}const ae=w(I,[["render",K]]);export{ae as default};

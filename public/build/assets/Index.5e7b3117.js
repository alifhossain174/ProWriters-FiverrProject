import{T as v}from"./Table.8bd0b9d0.js";import{I as V}from"./Input.9153dc0b.js";import{_ as w,c as m,a as n,b as s,D as B,w as d,F as _,r as l,o as u,q as I,f as p,t as r}from"./app.40136f18.js";import{S as T}from"./Select.d1ffb357.js";import{S as y}from"./SearchButton.d6d9adcf.js";import"./vanilla-picker.csp.e27d2510.js";import"./Pagination.58b232ad.js";import"./bootstrap.esm.2333d793.js";import"./debounce.84e4095c.js";const C={components:{Table:v,Input:V,Select:T,SearchButton:y},props:["data","bills","filters"],created(){var a;if((a=this.filters)!=null&&a.search){var t=this.filters.search;t!=null&&t.status&&(this.searchForm.status=parseInt(t.status)),t!=null&&t.number&&(this.searchForm.number=parseInt(t.number))}},methods:{handleSearch(){this.$inertia.get(this.data.urls.search,{search:this.searchForm},{preserveState:!0,replace:!0})}},data(){return{searchForm:{status:"",number:""},tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("From"),className:""},{name:this.__("Status"),className:"text-center"},{name:this.__("Amount"),className:"text-end"}]}}}},D={class:"container page-container"},A={class:"row"},L={class:"col-md-3"},P={class:"col-md-9"},U={class:"text-center"},H={key:0,class:"badge bg-success"},M={key:1,class:"badge bg-warning"},O={class:"text-end"};function q(t,a,o,x,i,f){const h=l("AppHead"),b=l("PageTitle"),S=l("Select"),g=l("Input"),k=l("SearchButton"),c=l("Link"),F=l("Table");return u(),m(_,null,[n(h,{title:o.data.title},null,8,["title"]),s("div",D,[n(b,{title:o.data.title},null,8,["title"]),s("div",A,[s("div",L,[s("form",{onSubmit:a[2]||(a[2]=B(e=>t.form.get(o.data.urls.search),["prevent"]))},[n(S,{modelValue:i.searchForm.status,"onUpdate:modelValue":a[0]||(a[0]=e=>i.searchForm.status=e),options:o.data.dropdowns.statuses,label:t.__("Status")},null,8,["modelValue","options","label"]),n(g,{modelValue:i.searchForm.number,"onUpdate:modelValue":a[1]||(a[1]=e=>i.searchForm.number=e),name:"number",label:t.__("Bill Number")},null,8,["modelValue","label"]),n(k,{onClick:f.handleSearch},null,8,["onClick"])],32)]),s("div",P,[n(F,{options:i.tableOptions,links:o.bills.links,total:o.bills.total,tableStyle:"fs-8"},{default:d(()=>[(u(!0),m(_,null,I(o.bills.data,(e,N)=>(u(),m("tr",{key:N},[s("td",null,[n(c,{href:t.route("admin.bills.show",e.uuid)},{default:d(()=>[p(r(e.number),1)]),_:2},1032,["href"])]),s("td",null,r(t.localDate(e.created_at)),1),s("td",null,[n(c,{href:t.route("admin.freelancers.show",e.from.uuid)},{default:d(()=>[p(r(e.from.full_name),1)]),_:2},1032,["href"])]),s("td",U,[e.paid?(u(),m("span",H,r(t.__("Paid")),1)):(u(),m("span",M,r(t.__("Unpaid")),1))]),s("td",O,r(t.formatMoney(e.total)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const X=w(C,[["render",q]]);export{X as default};

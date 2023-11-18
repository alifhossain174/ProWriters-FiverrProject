import{T as v}from"./Table.7532dcf1.js";import{I as V}from"./Input.09d9931c.js";import{_ as w,c as m,a as o,b as s,w as y,y as d,F as _,f as l,o as u,r as B,d as p,t as r}from"./app.f4b2b251.js";import{S as I}from"./Select.319f7f3f.js";import{S as T}from"./SearchButton.93229de3.js";import"./vanilla-picker.csp.f644cdcf.js";import"./Pagination.8eecb841.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const C={components:{Table:v,Input:V,Select:I,SearchButton:T},props:["data","bills","filters"],created(){var a;if((a=this.filters)!=null&&a.search){var t=this.filters.search;t!=null&&t.status&&(this.searchForm.status=parseInt(t.status)),t!=null&&t.number&&(this.searchForm.number=parseInt(t.number))}},methods:{handleSearch(){this.$inertia.get(this.data.urls.search,{search:this.searchForm},{preserveState:!0,replace:!0})}},data(){return{searchForm:{status:"",number:""},tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("From"),className:""},{name:this.__("Status"),className:"text-center"},{name:this.__("Amount"),className:"text-end"}]}}}},A={class:"container page-container"},D={class:"row"},L={class:"col-md-3"},P={class:"col-md-9"},U={class:"text-center"},H={key:0,class:"badge bg-success"},M={key:1,class:"badge bg-warning"},O={class:"text-end"};function x(t,a,n,E,i,h){const f=l("AppHead"),b=l("PageTitle"),S=l("Select"),g=l("Input"),k=l("SearchButton"),c=l("Link"),F=l("Table");return u(),m(_,null,[o(f,{title:n.data.title},null,8,["title"]),s("div",A,[o(b,{title:n.data.title},null,8,["title"]),s("div",D,[s("div",L,[s("form",{onSubmit:a[2]||(a[2]=y(e=>t.form.get(n.data.urls.search),["prevent"]))},[o(S,{modelValue:i.searchForm.status,"onUpdate:modelValue":a[0]||(a[0]=e=>i.searchForm.status=e),options:n.data.dropdowns.statuses,label:t.__("Status")},null,8,["modelValue","options","label"]),o(g,{modelValue:i.searchForm.number,"onUpdate:modelValue":a[1]||(a[1]=e=>i.searchForm.number=e),name:"number",label:t.__("Bill Number")},null,8,["modelValue","label"]),o(k,{onClick:h.handleSearch},null,8,["onClick"])],32)]),s("div",P,[o(F,{options:i.tableOptions,links:n.bills.links,total:n.bills.total,tableStyle:"fs-8"},{default:d(()=>[(u(!0),m(_,null,B(n.bills.data,(e,N)=>(u(),m("tr",{key:N},[s("td",null,[o(c,{href:t.route("admin.bills.show",e.uuid)},{default:d(()=>[p(r(e.number),1)]),_:2},1032,["href"])]),s("td",null,r(t.localDate(e.created_at)),1),s("td",null,[o(c,{href:t.route("admin.authors.show",e.from.uuid)},{default:d(()=>[p(r(e.from.full_name),1)]),_:2},1032,["href"])]),s("td",U,[e.paid?(u(),m("span",H,r(t.__("Paid")),1)):(u(),m("span",M,r(t.__("Unpaid")),1))]),s("td",O,r(t.formatMoney(e.total)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const X=w(C,[["render",x]]);export{X as default};

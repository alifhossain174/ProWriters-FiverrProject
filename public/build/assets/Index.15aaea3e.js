import{T as V}from"./Table.ece0ef27.js";import{I as w}from"./Input.3f943b39.js";import{_ as C,c as i,a,b as o,w as u,F as c,r as n,o as m,q as N,f as B,t as d,d as y}from"./app.707c49f0.js";import{C as I}from"./CheckBox.2d1a07e2.js";import{S as T}from"./Select.aeecae09.js";import{S as A}from"./SearchButton.ab778464.js";import"./vanilla-picker.csp.3171e9bb.js";import"./Pagination.71bd4807.js";import"./bootstrap.esm.2333d793.js";import"./debounce.aeb94049.js";const U={props:["data","payment_requests","filters"],components:{Table:V,Input:w,Select:T,CheckBox:I,SearchButton:A},created(){var s;if((s=this.filters)!=null&&s.search){var e=this.filters.search;e!=null&&e.status&&(this.searchForm.status=parseInt(e.status)),e!=null&&e.number&&(this.searchForm.number=parseInt(e.number)),e!=null&&e.show_archived&&(this.searchForm.show_archived=parseInt(e.show_archived))}},methods:{handleSearch(){this.$inertia.get(route("author.paymentRequests.index"),{search:this.searchForm},{preserveState:!0,replace:!0})}},data(){return{searchForm:{status:"",number:""},tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Created at"),className:""},{name:this.__("Status"),className:""},{name:this.__("Total"),className:"text-end"}]}}}},x={class:"container page-container"},L={class:"row"},P={class:"col-md-3"},q={class:"fs-8",id:"search-form"},D={class:"col-md-9"},H={key:0,class:"badge bg-success"},O={key:1,class:"badge bg-danger"},E={key:2,class:"ms-2 badge bg-secondary"},M={class:"text-end"};function j(e,s,r,z,l,_){const h=n("AppHead"),p=n("PageTitle"),b=n("Select"),f=n("Input"),v=n("CheckBox"),k=n("SearchButton"),S=n("Link"),g=n("Table");return m(),i(c,null,[a(h,{title:r.data.title},null,8,["title"]),o("div",x,[a(p,{title:r.data.title},null,8,["title"]),o("div",L,[o("div",P,[o("div",q,[o("form",null,[a(b,{modelValue:l.searchForm.status,"onUpdate:modelValue":s[0]||(s[0]=t=>l.searchForm.status=t),options:r.data.dropdowns.statuses,label:e.__("Status")},null,8,["modelValue","options","label"]),a(f,{modelValue:l.searchForm.number,"onUpdate:modelValue":s[1]||(s[1]=t=>l.searchForm.number=t),name:"number",label:e.__("Number")},null,8,["modelValue","label"]),a(v,{modelValue:l.searchForm.show_archived,"onUpdate:modelValue":s[2]||(s[2]=t=>l.searchForm.show_archived=t),name:"show_archived",label:e.__("Show Archived")},null,8,["modelValue","label"]),a(k,{onClick:_.handleSearch},null,8,["onClick"])])])]),o("div",D,[a(g,{options:l.tableOptions,links:r.payment_requests.links,total:r.payment_requests.total},{default:u(()=>[(m(!0),i(c,null,N(r.payment_requests.data,(t,F)=>(m(),i("tr",{key:F},[o("td",null,[a(S,{href:e.route("author.paymentRequests.show",t.uuid)},{default:u(()=>[B(d(t.number),1)]),_:2},1032,["href"])]),o("td",null,d(e.localDate(t.created_at)),1),o("td",null,[t.paid?(m(),i("span",H,d(e.__("Paid")),1)):(m(),i("span",O,d(e.__("Unpaid")),1)),t.is_archived_for_author?(m(),i("span",E,d(e.__("Archived")),1)):y("",!0)]),o("td",M,d(e.formatMoney(t.total)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const ee=C(U,[["render",j]]);export{ee as default};
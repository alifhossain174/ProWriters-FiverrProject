import{_ as d,c,a as r,r as a,o as p}from"./app.969842cf.js";import{S as f}from"./Select.df74d481.js";import{S as _}from"./SearchButton.ea90a85a.js";import"./vanilla-picker.csp.0ced5960.js";import{D as S}from"./DateRangePicker.9406da93.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ed46515d.js";const b={props:["data","filters","only"],components:{Select:f,SearchButton:_,DateRangePicker:S},created(){var t;if((t=this.filters)!=null&&t.search){var e=this.filters.search;e!=null&&e.due_date&&(this.form.due_date=parseInt(e.due_date)),e!=null&&e.status&&(this.form.status=parseInt(e.status))}},methods:{search(){this.$inertia.get(route("customer.invoices.index"),{search:this.form},{preserveState:!0,preserveScroll:!0,replace:!0,only:this.only})}},data(){return{form:{due_date:"",status:""}}}},k={class:"fs-8",id:"search-form"};function v(e,t,n,V,o,l){const i=a("DateRangePicker"),m=a("Select"),u=a("SearchButton");return p(),c("div",k,[r(i,{modelValue:o.form.due_date,"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.due_date=s),label:e.__("Due Date"),name:"due_date"},null,8,["modelValue","label"]),r(m,{modelValue:o.form.status,"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.status=s),clearable:!0,label:e.__("Status"),name:"status",options:n.data.dropdowns.invoice_statuses,bottom_margin:"mb-1"},null,8,["modelValue","label","options"]),r(u,{class:"mt-4",onClick:l.search,disabled:o.form.processing},null,8,["onClick","disabled"])])}const R=d(b,[["render",v]]);export{R as default};

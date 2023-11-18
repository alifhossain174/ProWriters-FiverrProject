import{_ as d,c as p,a as r,r as a,o as c}from"./app.94ede146.js";import{S as f}from"./Select.0af50086.js";import{S as _}from"./SearchButton.a17e67a1.js";import"./vanilla-picker.csp.da387394.js";import{D as S}from"./DateRangePicker.46b8fa4e.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b3e602c6.js";const b={props:["data","filters","only"],components:{Select:f,SearchButton:_,DateRangePicker:S},created(){var t;if((t=this.filters)!=null&&t.search){var e=this.filters.search;e!=null&&e.due_date&&(this.form.due_date=parseInt(e.due_date)),e!=null&&e.status&&(this.form.status=parseInt(e.status))}},methods:{search(){this.$inertia.get(route("admin.invoices.index"),{search:this.form},{preserveState:!0,preserveScroll:!0,replace:!0,only:this.only})}},data(){return{form:{due_date:"",status:""}}}},k={class:"fs-8",id:"search-form"};function v(e,t,n,V,o,l){const i=a("Select"),m=a("DateRangePicker"),u=a("SearchButton");return c(),p("div",k,[r(i,{modelValue:o.form.status,"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.status=s),clearable:!0,label:e.__("Status"),name:"status",options:n.data.dropdowns.invoice_statuses,bottom_margin:"mb-2"},null,8,["modelValue","label","options"]),r(m,{modelValue:o.form.due_date,"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.due_date=s),label:e.__("Due Date"),name:"due_date"},null,8,["modelValue","label"]),r(u,{onClick:l.search,disabled:o.form.processing},null,8,["onClick","disabled"])])}const R=d(b,[["render",v]]);export{R as default};

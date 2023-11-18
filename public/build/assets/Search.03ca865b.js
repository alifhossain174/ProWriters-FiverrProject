import{I as b}from"./Input.09d9931c.js";import{_ as p,c as v,a as n,b as r,d as V,t as k,f as s,o as g}from"./app.f4b2b251.js";import{C as I}from"./CheckBox.cc62ca79.js";import{S}from"./Select.319f7f3f.js";import{S as y}from"./vanilla-picker.csp.f644cdcf.js";import{D as w}from"./DateRangePicker.7b56d8be.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const U={props:["data","filters","only"],components:{Select:S,Input:b,CheckBox:I,DateRangePicker:w,SearchCustomer:y},created(){var o;if((o=this.filters)!=null&&o.search){var e=this.filters.search;e!=null&&e.task_date&&(this.form.task_date=e.task_date),e!=null&&e.service&&(this.form.service=parseInt(e.service)),e!=null&&e.customer&&(this.form.customer=parseInt(e.customer)),e!=null&&e.service_level_id&&(this.form.service_level_id=parseInt(e.service_level_id)),e!=null&&e.author_level_id&&(this.form.author_level_id=parseInt(e.author_level_id)),e!=null&&e.due_date&&(this.form.due_date=parseInt(e.due_date)),e!=null&&e.status&&(this.form.status=parseInt(e.status)),e!=null&&e.not_assigned&&(this.form.not_assigned=parseInt(e.not_assigned)),e!=null&&e.task_number&&(this.form.task_number=parseInt(e.task_number)),e!=null&&e.task_title&&(this.form.task_title=parseInt(e.task_title)),e!=null&&e.show_archived&&(this.form.show_archived=parseInt(e.show_archived)),e!=null&&e.not_invoiced&&(this.form.not_invoiced=parseInt(e.not_invoiced)),e!=null&&e.task_by_nearest_due_date&&(this.form.task_by_nearest_due_date=parseInt(e.task_by_nearest_due_date))}},methods:{search(){this.$inertia.get(route("admin.tasks.index"),{search:this.form},{preserveState:!0,preserveScroll:!0,replace:!0,only:this.only})}},data(){return{form:{task_date:"",service:"",due_date:"",status:"",author_id:"",task_number:"",show_archived:"",task_by_nearest_due_date:"",task_title:""}}}},C={class:"fs-8",id:"search-form"},D={class:"d-grid gap-2 mt-3"},B=r("i",{class:"fa-solid fa-search"},null,-1);function N(e,o,m,T,l,a){const i=s("Select"),u=s("DateRangePicker"),_=s("Input"),f=s("SearchCustomer"),d=s("CheckBox");return g(),v("div",C,[n(i,{modelValue:l.form.service,"onUpdate:modelValue":o[0]||(o[0]=t=>l.form.service=t),searchable:!0,label:e.__("Service"),name:"service",options:m.data.dropdowns.services,bottom_margin:"mb-1"},null,8,["modelValue","label","options"]),n(i,{modelValue:l.form.status,"onUpdate:modelValue":o[1]||(o[1]=t=>l.form.status=t),searchable:!0,label:e.__("Status"),name:"status",options:m.data.dropdowns.statuses,bottom_margin:"mb-1"},null,8,["modelValue","label","options"]),n(i,{modelValue:l.form.service_level_id,"onUpdate:modelValue":o[2]||(o[2]=t=>l.form.service_level_id=t),searchable:!0,label:e.__("Customer Service Level"),name:"service_level_id",options:m.data.dropdowns.service_levels,bottom_margin:"mb-1"},null,8,["modelValue","label","options"]),n(i,{modelValue:l.form.author_level_id,"onUpdate:modelValue":o[3]||(o[3]=t=>l.form.author_level_id=t),searchable:!0,label:e.__("Author Level"),name:"author_level_id",options:m.data.dropdowns.author_levels,bottom_margin:"mb-1"},null,8,["modelValue","label","options"]),n(u,{modelValue:l.form.task_date,"onUpdate:modelValue":o[4]||(o[4]=t=>l.form.task_date=t),label:e.__("Create Date"),name:"task_date"},null,8,["modelValue","label"]),n(u,{modelValue:l.form.deadline,"onUpdate:modelValue":o[5]||(o[5]=t=>l.form.deadline=t),label:e.__("Due Date"),name:"due_date"},null,8,["modelValue","label"]),n(i,{modelValue:l.form.order_by,"onUpdate:modelValue":o[6]||(o[6]=t=>l.form.order_by=t),clearable:"true",searchable:!0,label:e.__("Order By"),name:"order_by",options:m.data.dropdowns.order_by_options,bottom_margin:"mb-1"},null,8,["modelValue","label","options"]),n(_,{modelValue:l.form.task_number,"onUpdate:modelValue":o[7]||(o[7]=t=>l.form.task_number=t),label:e.__("Task Number"),name:"task_number"},null,8,["modelValue","label"]),n(_,{modelValue:l.form.task_title,"onUpdate:modelValue":o[8]||(o[8]=t=>l.form.task_title=t),label:e.__("Task Title"),name:"task_title"},null,8,["modelValue","label"]),n(f,{modelValue:l.form.customer,"onUpdate:modelValue":o[9]||(o[9]=t=>l.form.customer=t),label:e.__("Customer"),name:"customer"},null,8,["modelValue","label"]),n(d,{modelValue:l.form.not_invoiced,"onUpdate:modelValue":o[10]||(o[10]=t=>l.form.not_invoiced=t),name:"not_invoiced",label:e.__("Not Invoiced"),bottom_margin:"mb-0"},null,8,["modelValue","label"]),n(d,{modelValue:l.form.show_archived,"onUpdate:modelValue":o[11]||(o[11]=t=>l.form.show_archived=t),name:"show_archived",label:e.__("Show Archived"),bottom_margin:"mb-0"},null,8,["modelValue","label"]),n(d,{modelValue:l.form.not_assigned,"onUpdate:modelValue":o[12]||(o[12]=t=>l.form.not_assigned=t),name:"not_assigned",label:e.__("Not assigned to any Author"),bottom_margin:"mb-0"},null,8,["modelValue","label"]),r("div",D,[r("button",{onClick:o[13]||(o[13]=(...t)=>a.search&&a.search(...t)),type:"submit",class:"btn btn-success btn-sm"},[B,V(" "+k(e.__("Search")),1)])])])}const z=p(U,[["render",N]]);export{z as default};

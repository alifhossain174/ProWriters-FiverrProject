import{I as p}from"./Input.09d9931c.js";import{_,c as f,b as r,a,d as b,t as c,f as n,o as v}from"./app.f4b2b251.js";import{C as k}from"./CheckBox.cc62ca79.js";import{S as h}from"./Select.319f7f3f.js";import"./vanilla-picker.csp.f644cdcf.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const V={props:["data","filters"],components:{Select:h,Input:p,CheckBox:k},created(){var t;if((t=this.filters)!=null&&t.search){var e=this.filters.search;e!=null&&e.service&&(this.form.service=parseInt(e.service)),e!=null&&e.status&&(this.form.status=parseInt(e.status)),e!=null&&e.task_number&&(this.form.task_number=parseInt(e.task_number)),e!=null&&e.show_archived&&(this.form.show_archived=parseInt(e.show_archived))}},methods:{search(){this.$inertia.get(route("customer.tasks.index"),{search:this.form},{preserveState:!0,preserveScroll:!0,replace:!0})}},data(){return{form:{service:"",status:"",task_number:"",show_archived:""}}}},S={class:""},w={class:"fs-8",id:"search-form"},I={class:"d-grid gap-2 mt-3"},g=r("i",{class:"fa-solid fa-search"},null,-1);function B(e,t,l,C,s,m){const i=n("Select"),u=n("Input"),d=n("CheckBox");return v(),f("div",S,[r("div",w,[a(i,{modelValue:s.form.status,"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.status=o),searchable:!0,label:e.__("Status"),name:"status",options:l.data.dropdowns.statuses,bottom_margin:"mb-1"},null,8,["modelValue","label","options"]),a(u,{modelValue:s.form.task_number,"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.task_number=o),label:e.__("Task Number"),name:"task_number"},null,8,["modelValue","label"]),a(d,{modelValue:s.form.show_archived,"onUpdate:modelValue":t[2]||(t[2]=o=>s.form.show_archived=o),name:"show_archived",label:e.__("Show Archived"),bottom_margin:"mb-0"},null,8,["modelValue","label"]),r("div",I,[r("button",{onClick:t[3]||(t[3]=(...o)=>m.search&&m.search(...o)),type:"submit",class:"btn btn-success btn-sm"},[g,b(" "+c(e.__("Search")),1)])])])])}const E=_(V,[["render",B]]);export{E as default};
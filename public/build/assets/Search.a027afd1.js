import{I as p}from"./Input.d98634fc.js";import{_ as f,c as _,a as r,b as n,f as b,t as c,r as a,o as h}from"./app.2abe2877.js";import{C as k}from"./CheckBox.0599dcb1.js";import{S as v}from"./Select.7a96caba.js";import"./vanilla-picker.csp.f95a0d4d.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const V={props:["data","filters","only"],components:{Select:v,Input:p,CheckBox:k},created(){var t;if((t=this.filters)!=null&&t.search){var e=this.filters.search;e!=null&&e.status&&(this.form.status=parseInt(e.status)),e!=null&&e.task_number&&(this.form.task_number=parseInt(e.task_number)),e!=null&&e.show_archived&&(this.form.show_archived=parseInt(e.show_archived))}},methods:{search(){this.$inertia.get(route("freelancer.tasks.index"),{search:this.form},{preserveState:!0,preserveScroll:!0,replace:!0,only:this.only})}},data(){return{form:{status:"",task_number:"",show_archived:""}}}},S={class:"fs-8",id:"search-form"},w={class:"d-grid gap-2 mt-3"},I=n("i",{class:"fa-solid fa-search"},null,-1);function g(e,t,m,B,s,l){const i=a("Select"),u=a("Input"),d=a("CheckBox");return h(),_("div",S,[r(i,{modelValue:s.form.status,"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.status=o),searchable:!0,label:e.__("Status"),name:"status",options:m.data.dropdowns.statuses,bottom_margin:"mb-1"},null,8,["modelValue","label","options"]),r(u,{modelValue:s.form.task_number,"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.task_number=o),label:e.__("Task Number"),name:"task_number"},null,8,["modelValue","label"]),r(d,{modelValue:s.form.show_archived,"onUpdate:modelValue":t[2]||(t[2]=o=>s.form.show_archived=o),name:"show_archived",label:e.__("Show Archived"),bottom_margin:"mb-0"},null,8,["modelValue","label"]),n("div",w,[n("button",{onClick:t[3]||(t[3]=(...o)=>l.search&&l.search(...o)),type:"submit",class:"btn btn-success btn-sm"},[I,b(" "+c(e.__("Search")),1)])])])}const D=f(V,[["render",g]]);export{D as default};

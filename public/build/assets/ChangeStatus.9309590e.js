import{_ as l,A as d,w as _,r as o,o as p,b as c,a as r,D as f}from"./app.6486bb89.js";import{S as k}from"./Select.0cc97eb8.js";import{S}from"./SubmitButton.6b08448a.js";import"./vanilla-picker.csp.273e51c7.js";import"./bootstrap.esm.2333d793.js";import"./debounce.2741a44f.js";const b={props:["task","data"],components:{Select:k,SubmitButton:S},data(){return{form:this.$inertia.form({task_status_id:this.task.task_status_id})}}};function B(a,t,e,V,s,h){const i=o("Select"),u=o("SubmitButton"),m=o("Modal");return p(),d(m,{title:e.data.title},{default:_(()=>[c("form",{onSubmit:t[1]||(t[1]=f(n=>s.form.patch(a.route("admin.tasks.update.status",e.task.uuid)),["prevent"]))},[r(i,{modelValue:s.form.task_status_id,"onUpdate:modelValue":t[0]||(t[0]=n=>s.form.task_status_id=n),options:e.data.task_statuses,label:a.__("Status"),name:"task_status_id",searchable:!0},null,8,["modelValue","options","label"]),r(u,{disabled:s.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const N=l(b,[["render",B]]);export{N as default};

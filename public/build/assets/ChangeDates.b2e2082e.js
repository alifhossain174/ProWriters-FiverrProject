import{_ as s,A as f,w as _,r as t,o as u,b as p,a as l,D as c}from"./app.2abe2877.js";import{S as b}from"./SubmitButton.67fd88bd.js";import{D}from"./DatePicker.c6741467.js";import"./vanilla-picker.csp.f95a0d4d.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const V={props:["task","data"],components:{DatePicker:D,SubmitButton:b},data(){return{form:this.$inertia.form({dead_line:this.data.dead_line,dead_line_for_freelancer:this.data.dead_line_for_freelancer}),formConfig:{preserveScroll:!1}}}};function k(a,o,n,B,e,S){const i=t("DatePicker"),d=t("SubmitButton"),m=t("Modal");return u(),f(m,{title:n.data.title},{default:_(()=>[p("form",{onSubmit:o[2]||(o[2]=c(r=>e.form.patch(n.data.urls.submit_form,e.formConfig),["prevent"]))},[l(i,{modelValue:e.form.dead_line,"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.dead_line=r),label:a.__("Deadline"),name:"dead_line"},null,8,["modelValue","label"]),l(i,{modelValue:e.form.dead_line_for_freelancer,"onUpdate:modelValue":o[1]||(o[1]=r=>e.form.dead_line_for_freelancer=r),label:a.__("Deadline for the Freelancer"),name:"dead_line_for_freelancer"},null,8,["modelValue","label"]),l(d,{class:"mt-4",disabled:e.form.disabled},null,8,["disabled"])],32)]),_:1},8,["title"])}const P=s(V,[["render",k]]);export{P as default};
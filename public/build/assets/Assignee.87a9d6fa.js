import{I as k}from"./Input.fe981f88.js";import{_ as V,A as v,w as _,r,o as S,b as o,t as i,a as s,D as y}from"./app.571265cd.js";import{S as g}from"./Select.7a1d9270.js";import{S as D}from"./SubmitButton.59cbcabd.js";import{D as w}from"./DatePicker.d8cb932f.js";import"./vanilla-picker.csp.d11a8b31.js";import{F as B}from"./fuse.esm.249bd5bb.js";import"./bootstrap.esm.2333d793.js";import"./debounce.94acad4c.js";const F={props:["data","task"],components:{Input:k,Select:g,SubmitButton:D,DatePicker:w},data(){return{form:this.$inertia.form({freelancer_id:this.task.freelancer_id,freelancer_payment_amount:this.task.freelancer_payment_amount?parseFloat(this.task.freelancer_payment_amount).toFixed(2):0,dead_line_for_freelancer:this.task.dead_line_for_freelancer})}},methods:{fuseSearch(l,t){const n=new B(l,{keys:["first_name","last_name","code"],shouldSort:!0});return t.length?n.search(t).map(({item:m})=>m):n.list}}},x={class:"mb-2"},I={class:"form-label"},P={class:"d-flex"},A={class:"flex-shrink-0"},M=["src","alt"],U={class:"flex-grow-1 ms-3"},z={class:"text-muted"};function C(l,t,n,m,a,d){const f=r("v-select"),c=r("ValidationError"),u=r("DatePicker"),p=r("Input"),h=r("SubmitButton"),b=r("Modal");return S(),v(b,{title:n.data.title,size:"small"},{default:_(()=>[o("form",{onSubmit:t[3]||(t[3]=y(e=>a.form.post(l.route("admin.tasks.update.assignee",n.task.uuid)),["prevent"]))},[o("div",x,[o("label",I,i(l.__("Freelancer")),1),s(f,{placeholder:l.__("Select"),class:"w-100",modelValue:a.form.freelancer_id,"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.freelancer_id=e),options:n.data.assignees,reduce:e=>e.id,label:"full_name",filter:d.fuseSearch},{option:_(e=>[o("div",P,[o("div",A,[o("img",{class:"avatar",src:e.small_avatar,alt:e.full_name,loading:"lazy"},null,8,M)]),o("div",U,[o("div",null,i(e.full_name),1),o("small",z,i(e.code),1)])])]),_:1},8,["placeholder","modelValue","options","reduce","filter"]),s(c,{name:"freelancer_id"})]),s(u,{modelValue:a.form.dead_line_for_freelancer,"onUpdate:modelValue":t[1]||(t[1]=e=>a.form.dead_line_for_freelancer=e),label:l.__("Due date for the Freelancer"),name:"dead_line_for_freelancer"},null,8,["modelValue","label"]),s(p,{modelValue:a.form.freelancer_payment_amount,"onUpdate:modelValue":t[2]||(t[2]=e=>a.form.freelancer_payment_amount=e),label:l.__("Payment Amount"),name:"freelancer_payment_amount"},null,8,["modelValue","label"]),s(h,{disabled:a.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const O=V(F,[["render",C]]);export{O as default};

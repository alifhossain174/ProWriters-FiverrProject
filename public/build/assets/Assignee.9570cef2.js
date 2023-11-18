import{I as k}from"./Input.744111e9.js";import{_ as V,A as v,w as _,r as n,o as S,b as o,t as i,a as r,D as y}from"./app.6486bb89.js";import{S as g}from"./Select.0cc97eb8.js";import{S as D}from"./SubmitButton.6b08448a.js";import{D as w}from"./DatePicker.40c9bcef.js";import"./vanilla-picker.csp.273e51c7.js";import{F as B}from"./fuse.esm.249bd5bb.js";import"./bootstrap.esm.2333d793.js";import"./debounce.2741a44f.js";const A={props:["data","task"],components:{Input:k,Select:g,SubmitButton:D,DatePicker:w},data(){return{form:this.$inertia.form({author_id:this.task.author_id,author_payment_amount:this.task.author_payment_amount?parseFloat(this.task.author_payment_amount).toFixed(2):0,dead_line_for_author:this.task.dead_line_for_author})}},methods:{fuseSearch(s,t){const l=new B(s,{keys:["first_name","last_name","code"],shouldSort:!0});return t.length?l.search(t).map(({item:m})=>m):l.list}}},x={class:"mb-2"},F={class:"form-label"},I={class:"d-flex"},P={class:"flex-shrink-0"},M=["src","alt"],U={class:"flex-grow-1 ms-3"},z={class:"text-muted"};function C(s,t,l,m,a,u){const d=n("v-select"),f=n("ValidationError"),p=n("DatePicker"),c=n("Input"),h=n("SubmitButton"),b=n("Modal");return S(),v(b,{title:l.data.title,size:"small"},{default:_(()=>[o("form",{onSubmit:t[3]||(t[3]=y(e=>a.form.post(s.route("admin.tasks.update.assignee",l.task.uuid)),["prevent"]))},[o("div",x,[o("label",F,i(s.__("Author")),1),r(d,{placeholder:s.__("Select"),class:"w-100",modelValue:a.form.author_id,"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.author_id=e),options:l.data.assignees,reduce:e=>e.id,label:"full_name",filter:u.fuseSearch},{option:_(e=>[o("div",I,[o("div",P,[o("img",{class:"avatar",src:e.small_avatar,alt:e.full_name,loading:"lazy"},null,8,M)]),o("div",U,[o("div",null,i(e.full_name),1),o("small",z,i(e.code),1)])])]),_:1},8,["placeholder","modelValue","options","reduce","filter"]),r(f,{name:"author_id"})]),r(p,{modelValue:a.form.dead_line_for_author,"onUpdate:modelValue":t[1]||(t[1]=e=>a.form.dead_line_for_author=e),label:s.__("Due date for the Author"),name:"dead_line_for_author"},null,8,["modelValue","label"]),r(c,{modelValue:a.form.author_payment_amount,"onUpdate:modelValue":t[2]||(t[2]=e=>a.form.author_payment_amount=e),label:s.__("Payment Amount"),name:"author_payment_amount"},null,8,["modelValue","label"]),r(h,{disabled:a.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const O=V(A,[["render",C]]);export{O as default};

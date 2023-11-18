import{I as V}from"./Input.d98634fc.js";import{T as y}from"./TextArea.328848c0.js";import{_ as S,c as g,a as l,b as m,w as i,D as C,F as k,r,o as h,f as v,t as B}from"./app.2abe2877.js";import{S as D}from"./SubmitButton.67fd88bd.js";import{D as P}from"./DatePicker.c6741467.js";import{S as T}from"./vanilla-picker.csp.f95a0d4d.js";import"./bootstrap.esm.2333d793.js";import"./debounce.35ca4e92.js";const w={components:{SearchCustomer:T,TextArea:y,Input:V,DatePicker:P,SubmitButton:D},props:["data"],data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){return{customer_id:null,amount:null,method:null,reference:null,date:null,internal_note:null}}}},A={class:"container page-container"},U=m("i",{class:"fa-solid fa-arrow-left-long"},null,-1),I={class:"row"},N={class:"col-md-6"},F={class:"col-md-6"};function M(n,e,s,H,o,L){const u=r("AppHead"),d=r("Link"),p=r("PageTitle"),f=r("SearchCustomer"),a=r("Input"),_=r("DatePicker"),c=r("TextArea"),b=r("SubmitButton");return h(),g(k,null,[l(u,{title:s.data.title},null,8,["title"]),m("div",A,[l(p,{title:s.data.title},{default:i(()=>[l(d,{class:"btn btn-sm btn-light",href:n.route("admin.payments.index")},{default:i(()=>[U,v(" "+B(n.__("Back to payments")),1)]),_:1},8,["href"])]),_:1},8,["title"]),m("form",{onSubmit:e[7]||(e[7]=C(t=>o.form.post(n.route("admin.payments.store"),o.formConfig),["prevent"]))},[m("div",I,[m("div",N,[l(f,{options:[],modelValue:o.form.customer_id,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.customer_id=t),label:n.__("Customer"),name:"customer_id"},null,8,["modelValue","label"]),l(a,{modelValue:o.form.amount,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.amount=t),label:n.__("Amount"),onKeypress:e[2]||(e[2]=t=>n.onlyNumber(t,o.form.amount)),name:"amount"},null,8,["modelValue","label"]),l(a,{modelValue:o.form.method,"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.method=t),label:n.__("Payment Method"),name:"method"},null,8,["modelValue","label"]),l(a,{modelValue:o.form.reference,"onUpdate:modelValue":e[4]||(e[4]=t=>o.form.reference=t),label:n.__("Reference"),name:"reference"},null,8,["modelValue","label"])]),m("div",F,[l(_,{format:"yyyy-MM-dd",modelValue:o.form.date,"onUpdate:modelValue":e[5]||(e[5]=t=>o.form.date=t),label:n.__("Payment Date"),name:"date"},null,8,["modelValue","label"]),l(c,{modelValue:o.form.internal_note,"onUpdate:modelValue":e[6]||(e[6]=t=>o.form.internal_note=t),rows:"2",label:n.__("Internal Note"),name:"internal_note"},null,8,["modelValue","label"])])]),l(b,{disabled:o.form.processing},null,8,["disabled"])],32)])],64)}const O=S(w,[["render",M]]);export{O as default};
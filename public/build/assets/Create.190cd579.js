import{I as d}from"./Input.8aaee37e.js";import{_ as f,A as c,w as _,r as a,o as b,b as i,a as s,t as l,D as h}from"./app.15906225.js";import{S as g}from"./SubmitButton.9e7b4015.js";import"./vanilla-picker.csp.29f78eb8.js";import"./bootstrap.esm.2333d793.js";import"./debounce.23c94884.js";const y={components:{Input:d,SubmitButton:g},props:["data","existing_record"],watch:{"form.total":{handler(e,t){this.calculateFreelancerPayment(e)},deep:!0}},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!1},freelancer_payment_amount:0}},methods:{prepareForm(){let e={total:null};return this.existing_record&&(e={...e,...this.existing_record}),e},calculateFreelancerPayment(e){e=parseFloat(e);let t=parseFloat(this.data.platform_commission_rate),r=e*t/100;this.freelancer_payment_amount=e-r}}},B={class:"mt-2 mb-2"};function S(e,t,r,v,o,w){const m=a("Input"),u=a("SubmitButton"),p=a("Modal");return b(),c(p,{title:r.data.title},{default:_(()=>[i("form",{onSubmit:t[2]||(t[2]=h(n=>r.existing_record?o.form.patch(e.route("freelancer.bids.update",r.existing_record.uuid)):o.form.post(e.route("freelancer.bidRequests.bids.store",r.data.bidRequest_uuid)),["prevent"]))},[s(m,{modelValue:o.form.total,"onUpdate:modelValue":t[0]||(t[0]=n=>o.form.total=n),name:"total",label:e.__("Bidding Amount"),required:!0,onKeypress:t[1]||(t[1]=n=>e.onlyNumber(n,o.form.total)),tooltip:e.__("The final amount that will be charged to the customer")},null,8,["modelValue","label","tooltip"]),i("div",B,l(e.__("You will receive"))+" "+l(e.formatMoney(o.freelancer_payment_amount)),1),s(u,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const N=f(y,[["render",S]]);export{N as default};

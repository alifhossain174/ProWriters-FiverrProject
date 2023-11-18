import{I as d}from"./Input.d3e8f5e0.js";import{_ as f,g as _,y as c,f as n,o as h,b as i,a as s,t as m,w as b}from"./app.b345893e.js";import{S as g}from"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const y={components:{Input:d,SubmitButton:g},props:["data","existing_record"],watch:{"form.total":{handler(t,e){this.calculateAuthorPayment(t)},deep:!0}},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!1},author_payment_amount:0}},methods:{prepareForm(){let t={total:null};return this.existing_record&&(t={...t,...this.existing_record}),t},calculateAuthorPayment(t){t=parseFloat(t);let e=parseFloat(this.data.platform_commission_rate),r=t*e/100;this.author_payment_amount=t-r}}},B={class:"mt-2 mb-2"};function S(t,e,r,v,o,w){const l=n("Input"),u=n("SubmitButton"),p=n("Modal");return h(),_(p,{title:r.data.title},{default:c(()=>[i("form",{onSubmit:e[2]||(e[2]=b(a=>r.existing_record?o.form.patch(t.route("author.bids.update",r.existing_record.uuid)):o.form.post(t.route("author.bidRequests.bids.store",r.data.bidRequest_uuid)),["prevent"]))},[s(l,{modelValue:o.form.total,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form.total=a),name:"total",label:t.__("Bidding Amount"),required:!0,onKeypress:e[1]||(e[1]=a=>t.onlyNumber(a,o.form.total)),tooltip:t.__("The final amount that will be charged to the customer")},null,8,["modelValue","label","tooltip"]),i("div",B,m(t.__("You will receive"))+" "+m(t.formatMoney(o.author_payment_amount)),1),s(u,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const A=f(y,[["render",S]]);export{A as default};
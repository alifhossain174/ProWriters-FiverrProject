import{I as p}from"./Input.22a5d0b7.js";import{_,c as f,a,b as t,D as b,t as i,F as g,r as l,o as v}from"./app.7185dbf0.js";import{S as h}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const B={props:["data"],components:{Input:p,SubmitButton:h},data(){return{form:this.$inertia.form({amount:""}),toolbar:{title:this.data.title,hide_save_button:!1}}}},S={class:"container page-container"},w={class:"row"},y={class:"offset-md-3 col-md-3 text-center mx-auto d-none d-md-block"},V=["src"],A={class:"col-md-6"},I={class:"mb-4"};function k(o,e,r,C,n,F){const m=l("AppHead"),u=l("PageTitle"),d=l("Input"),c=l("SubmitButton");return v(),f(g,null,[a(m,{title:r.data.title},null,8,["title"]),t("div",S,[a(u,{title:r.data.title},null,8,["title"]),t("div",w,[t("div",y,[t("img",{src:o.asset("images/undraw_savings_re_eq4w.svg"),class:"img-fluid"},null,8,V)]),t("div",A,[t("form",{onSubmit:e[2]||(e[2]=b(s=>n.form.post(o.route("customer.transactions.funds.store")),["prevent"]))},[a(d,{onKeypress:e[0]||(e[0]=s=>o.onlyNumber(s,n.form.amount)),label:o.__("Enter Amount"),modelValue:n.form.amount,"onUpdate:modelValue":e[1]||(e[1]=s=>n.form.amount=s),name:"amount",required:!0},null,8,["label","modelValue"]),t("div",I,[t("small",null,i(o.__("Current Balance"))+" : "+i(o.formatMoney(r.data.balance)),1)]),a(c,{disabled:n.form.processing,button_text:o.__("Choose payment option")+" <i class='fa-solid fa-arrow-right-long'></i>"},null,8,["disabled","button_text"])],32)])])])],64)}const M=_(B,[["render",k]]);export{M as default};

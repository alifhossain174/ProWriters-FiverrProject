import{I as m}from"./Input.e65d7326.js";import{_ as f,c as p,b as l,D as u,a as i,f as d,t as c,r as n,o as _}from"./app.94ede146.js";import{C as b}from"./CheckBox.b26ad33b.js";import"./vanilla-picker.csp.da387394.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b3e602c6.js";const h={props:["data","filters","only"],components:{Input:m,CheckBox:b},data(){return{form:this.$inertia.form({filters:{name:this.filters&&this.filters.name?this.filters.name:"",email:this.filters&&this.filters.email?this.filters.email:"",inactive:!!(this.filters&&this.filters.inactive=="true")}}),formConfig:{preserveState:!0,replace:!0,only:this.only}}}},v={class:""},V={class:""},g={class:"d-grid gap-2"},C=["disabled"],B=l("i",{class:"fa-solid fa-search"},null,-1);function I(o,t,k,y,e,S){const r=n("Input"),a=n("CheckBox");return _(),p("div",v,[l("div",V,[l("form",{onSubmit:t[3]||(t[3]=u(s=>e.form.get(o.route("admin.customers.index"),e.formConfig),["prevent"]))},[i(r,{modelValue:e.form.filters.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.filters.name=s),label:o.__("Name"),name:"name"},null,8,["modelValue","label"]),i(r,{modelValue:e.form.filters.email,"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.filters.email=s),label:o.__("Email"),name:"email"},null,8,["modelValue","label"]),i(a,{modelValue:e.form.filters.inactive,"onUpdate:modelValue":t[2]||(t[2]=s=>e.form.filters.inactive=s),name:"inactive",label:o.__("Include Inactive")},null,8,["modelValue","label"]),l("div",g,[l("button",{type:"submit",class:"btn btn-success btn-sm",disabled:e.form.processing},[B,d(" "+c(o.__("Search")),1)],8,C)])],32)])])}const M=f(h,[["render",I]]);export{M as default};
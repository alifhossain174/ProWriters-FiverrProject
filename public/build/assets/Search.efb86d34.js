import{I as m}from"./Input.8c887a2d.js";import{_ as f,c as p,b as l,D as u,a as i,f as d,t as c,r as n,o as _}from"./app.1d2673ab.js";import{C as b}from"./CheckBox.169d0953.js";import"./vanilla-picker.csp.eccdf93b.js";import"./bootstrap.esm.2333d793.js";import"./debounce.8ee276ba.js";const h={props:["data","filters","only"],components:{Input:m,CheckBox:b},data(){return{form:this.$inertia.form({filters:{name:this.filters&&this.filters.name?this.filters.name:"",email:this.filters&&this.filters.email?this.filters.email:"",inactive:!!(this.filters&&this.filters.inactive=="true")}}),formConfig:{preserveState:!0,replace:!0,only:this.only}}}},v={class:""},V={class:""},g={class:"d-grid gap-2"},C=["disabled"],B=l("i",{class:"fa-solid fa-search"},null,-1);function I(o,s,k,y,e,S){const r=n("Input"),a=n("CheckBox");return _(),p("div",v,[l("div",V,[l("form",{onSubmit:s[3]||(s[3]=u(t=>e.form.get(o.route("admin.users.index"),e.formConfig),["prevent"]))},[i(r,{modelValue:e.form.filters.name,"onUpdate:modelValue":s[0]||(s[0]=t=>e.form.filters.name=t),label:o.__("Name"),name:"name"},null,8,["modelValue","label"]),i(r,{modelValue:e.form.filters.email,"onUpdate:modelValue":s[1]||(s[1]=t=>e.form.filters.email=t),label:o.__("Email"),name:"email"},null,8,["modelValue","label"]),i(a,{modelValue:e.form.filters.inactive,"onUpdate:modelValue":s[2]||(s[2]=t=>e.form.filters.inactive=t),name:"inactive",label:o.__("Include Inactive")},null,8,["modelValue","label"]),l("div",g,[l("button",{type:"submit",class:"btn btn-success btn-sm",disabled:e.form.processing},[B,d(" "+c(o.__("Search")),1)],8,C)])],32)])])}const M=f(h,[["render",I]]);export{M as default};

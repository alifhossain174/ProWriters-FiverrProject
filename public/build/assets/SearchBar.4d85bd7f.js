import{d as h}from"./debounce.8ee276ba.js";import{_ as f,o as i,c as a,b as t,e as d,d as c,J as l,R as m,t as u,U as _}from"./app.1d2673ab.js";const p={props:["url","filters","hide_inactive_search"],watch:{form:{handler(e){this.search(e)},deep:!0}},data(){return{form:{search:this.filters&&this.filters.search?this.filters.search:"",inactive:!!(this.filters&&this.filters.inactive=="true")}}},methods:{search:h(function(){this.hide_inactive_search&&delete this.form.inactive,this.$inertia.get(this.url,{filters:this.form},{preserveState:!0,replace:!0})},300)}},v={class:"row align-items-center mb-4"},k={class:"col-md-8"},b={key:1,class:"form-check"},S={class:"form-check-label",for:"flexCheckDefault"},x={class:"col-md-4"},y=["placeholder"];function B(e,s,n,C,r,D){return i(),a("div",v,[t("div",k,[e.$slots.leftArea?d(e.$slots,"leftArea",{key:0}):c("",!0),n.hide_inactive_search?c("",!0):(i(),a("div",b,[l(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>r.form.inactive=o),class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"},null,512),[[m,r.form.inactive]]),t("label",S,u(e.__("Include Inactive items")),1)]))]),t("div",x,[l(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>r.form.search=o),type:"text",class:"form-control form-control-sm float-end",placeholder:e.__("Search")},null,8,y),[[_,r.form.search]])])])}const w=f(p,[["render",B]]);export{w as S};

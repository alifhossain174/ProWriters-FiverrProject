import{I as d}from"./Input.22a5d0b7.js";import{_,A as f,w as c,r as l,o as w,b as e,a as i,D as b,t}from"./app.7185dbf0.js";import{S as h}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const S={props:["data"],components:{Input:d,SubmitButton:h},data(){return{form:this.$inertia.form({current_password:null,password:null,password_confirmation:null}),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()}}}},q=e("hr",null,null,-1),B={class:"h5"},g={class:"fs-8 text-muted"};function v(o,r,n,C,s,R){const u=l("Input"),m=l("SubmitButton"),p=l("Modal");return w(),f(p,{title:n.data.title},{default:c(()=>[e("form",{onSubmit:r[1]||(r[1]=b(a=>s.form.patch(n.data.urls.submit_form,s.formConfig),["prevent"]))},[i(u,{modelValue:s.form.password,"onUpdate:modelValue":r[0]||(r[0]=a=>s.form.password=a),label:o.__("New Password"),name:"password",type:"password",required:!0},null,8,["modelValue","label"]),i(m,{disabled:s.form.processing},null,8,["disabled"])],32),q,e("div",B,t(o.__("Password rules")),1),e("ul",g,[e("li",null,t(o.__("Require at least 8 characters")),1),e("li",null,t(o.__("Require at least one letter")),1),e("li",null,t(o.__("Require at least one number")),1),e("li",null,t(o.__("Require at least one symbol")),1),e("li",null,t(o.__("Require at least one uppercase and one lowercase letter")),1)])]),_:1},8,["title"])}const k=_(S,[["render",v]]);export{k as default};

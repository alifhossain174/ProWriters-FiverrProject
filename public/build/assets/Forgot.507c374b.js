import f from"./AuthLayout.8b0d4175.js";import{_ as h,c as r,a as i,w as _,F as g,r as l,o as m,b as t,t as s,d as b,D as y,J as v,U as w}from"./app.2abe2877.js";import"./bootstrap.esm.2333d793.js";const k={props:["data"],components:{AuthLayout:f},data(){return{form:this.$inertia.form({email:null,password:null}),formConfig:{onSuccess:()=>this.form.reset()}}}},L=["content"],V=["content"],A=["content"],C=["content"],E={class:"p-5"},F={class:"h3"},H=["innerHTML"],M=t("hr",null,null,-1),S={key:0,class:"alert alert-success",role:"alert"},B={class:"mb-3"},D={class:"form-label"},N=["placeholder"],T={class:"mb-3"},U=["disabled"];function q(a,n,e,x,o,J){const c=l("AppHead"),u=l("ValidationError"),p=l("AuthLayout");return m(),r(g,null,[i(c,{title:e.data.page.additional_data.meta_title},{default:_(()=>[t("meta",{name:"description",content:e.data.page.additional_data.meta_description},null,8,L),t("meta",{name:"keywords",content:e.data.page.additional_data.meta_keywords},null,8,V),t("meta",{property:"og:title",content:e.data.page.additional_data.meta_title},null,8,A),t("meta",{property:"og:image",content:a.asset(e.data.page.additional_data.meta_image)},null,8,C)]),_:1},8,["title"]),i(p,{data:e.data.page.additional_data},{default:_(()=>[t("div",E,[t("h6",F,s(e.data.page.title),1),t("p",{class:"text-muted mb-0",innerHTML:e.data.page.sub_title},null,8,H),M,e.data.password_reset_link_sent?(m(),r("div",S,s(a.__("We have emailed your password reset link")),1)):b("",!0),t("form",{onSubmit:n[1]||(n[1]=y(d=>o.form.post(a.route("password.email"),o.formConfig),["prevent"])),autocomplete:"off"},[t("div",B,[t("label",D,s(a.__("Email")),1),v(t("input",{"onUpdate:modelValue":n[0]||(n[0]=d=>o.form.email=d),type:"email",class:"form-control shadow-none",required:"",autocomplete:"email",placeholder:a.__("Email"),autofocus:""},null,8,N),[[w,o.form.email]]),i(u,{name:"email"})]),t("div",T,[t("button",{disabled:o.form.processing,type:"submit",class:"btn btn-primary btn-block"},s(a.__("Send Link")),9,U)])],32)])]),_:1},8,["data"])],64)}const G=h(k,[["render",q]]);export{G as default};

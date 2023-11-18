import w from"./AuthLayout.2cb6180a.js";import{u as b}from"./Recaptcha.434a19c6.js";import{S as v}from"./SocialLogin.986b6289.js";import{_ as y,c as L,a as e,w as r,F as k,r as l,o as V,b as t,t as n,D as S,J as p,U as u,f as c}from"./app.f21ad38e.js";import"./bootstrap.esm.2333d793.js";const A={props:["data"],components:{AuthLayout:w,SocialLogin:v},data(){return{form:this.$inertia.form({email:null,password:null,recaptcha:window.recaptcha.is_enabled?b().token:!0})}}},E=["content"],D=["content"],q=["content"],B=["content"],C={class:"p-5"},F={class:"h3"},N=t("hr",null,null,-1),U={class:"mb-3"},H={class:"form-label"},M={class:"input-group"},P=t("span",{class:"input-group-text",id:"email"},[t("i",{class:"far fa-user"})],-1),T=["placeholder"],G={class:"mb-3"},J={class:"form-label"},R={class:"input-group"},j=t("span",{class:"input-group-text",id:"password"},[t("i",{class:"fas fa-key"})],-1),z=["placeholder"],I={class:"mb-3"},K=["disabled"],O={class:"text-muted mt-5"};function Q(o,i,a,W,s,X){const h=l("AppHead"),f=l("SocialLogin"),_=l("ValidationError"),m=l("Link"),g=l("AuthLayout");return V(),L(k,null,[e(h,{title:a.data.page.additional_data.meta_title},{default:r(()=>[t("meta",{name:"description",content:a.data.page.additional_data.meta_description},null,8,E),t("meta",{name:"keywords",content:a.data.page.additional_data.meta_keywords},null,8,D),t("meta",{property:"og:title",content:a.data.page.additional_data.meta_title},null,8,q),t("meta",{property:"og:image",content:o.asset(a.data.page.additional_data.meta_image)},null,8,B)]),_:1},8,["title"]),e(g,{data:a.data.page.additional_data},{default:r(()=>[t("div",C,[t("h6",F,n(a.data.page.title),1),N,e(f),t("form",{class:"mt-4",onSubmit:i[2]||(i[2]=S(d=>s.form.post(o.route("login")),["prevent"])),autocomplete:"off"},[t("div",U,[t("label",H,n(o.__("Email")),1),t("div",M,[P,p(t("input",{"onUpdate:modelValue":i[0]||(i[0]=d=>s.form.email=d),type:"email",class:"form-control shadow-none",required:"",autocomplete:"email",placeholder:o.__("Email"),autofocus:""},null,8,T),[[u,s.form.email]])]),e(_,{name:"email"})]),t("div",G,[t("label",J,n(o.__("Password")),1),t("div",R,[j,p(t("input",{"onUpdate:modelValue":i[1]||(i[1]=d=>s.form.password=d),type:"password",class:"form-control shadow-none",placeholder:o.__("Password"),required:""},null,8,z),[[u,s.form.password]])]),e(_,{name:"password"})]),e(_,{name:"recaptcha"}),t("div",I,[t("button",{disabled:s.form.processing||!s.form.recaptcha,type:"submit",class:"btn btn-primary btn-block"},n(o.__("Login")),9,K)])],32),t("div",O,[c(n(o.__("Don't have an account ?"))+" ",1),e(m,{href:o.route("register")},{default:r(()=>[c(n(o.__("Register")),1)]),_:1},8,["href"]),t("div",null,[e(m,{class:"small",href:o.route("password.request")},{default:r(()=>[c(n(o.__("Forgot password"))+"? ",1)]),_:1},8,["href"])])])])]),_:1},8,["data"])],64)}const ot=y(A,[["render",Q]]);export{ot as default};

import y from"./AuthLayout.285e5c19.js";import{_ as w,c as e,a as l,w as b,F as h,r as p,o as i,b as s,t as r,D as v,J as c,P as m}from"./app.2022c6b3.js";import"./bootstrap.esm.2333d793.js";const k={props:["data"],components:{AuthLayout:y},data(){return{password_visibility:!1,password_confirm_visibility:!1,form:this.$inertia.form({email:this.data.email,token:this.data.token,password:null,password_confirmation:null})}}},g={class:"p-5"},x={class:"h3"},V=s("hr",null,null,-1),A={class:"mb-3"},C={class:"form-label"},D={class:"input-group"},N=s("span",{class:"input-group-text",id:"password"},[s("i",{class:"fas fa-key"})],-1),P=["type"],B={key:0,class:"fa-regular fa-eye"},E={key:1,class:"fa-regular fa-eye-slash"},L={class:"mb-3"},R={class:"form-label"},q={class:"input-group"},F=s("span",{class:"input-group-text",id:"password"},[s("i",{class:"fas fa-key"})],-1),H=["type"],M={key:0,class:"fa-regular fa-eye"},S={key:1,class:"fa-regular fa-eye-slash"},U={class:"mb-3"},J=["disabled"],j={key:1,class:"text-center"};function z(n,t,d,G,o,I){const u=p("AppHead"),_=p("ValidationError"),f=p("AuthLayout");return i(),e(h,null,[l(u,{title:d.data.title},null,8,["title"]),l(f,{data:d.data.page.additional_data},{default:b(()=>[s("div",g,[s("h6",x,r(d.data.title),1),V,o.form.email&&o.form.token?(i(),e("form",{key:0,onSubmit:t[4]||(t[4]=v(a=>o.form.post(n.route("password.update")),["prevent"])),autocomplete:"off"},[s("div",A,[s("label",C,r(n.__("Password")),1),s("div",D,[N,c(s("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.password=a),type:o.password_visibility?"text":"password",class:"form-control shadow-none",required:""},null,8,P),[[m,o.form.password]]),s("span",{type:"button",class:"input-group-text",onClick:t[1]||(t[1]=a=>o.password_visibility=!o.password_visibility)},[o.password_visibility?(i(),e("i",B)):(i(),e("i",E))])]),l(_,{name:"password"})]),s("div",L,[s("label",R,r(n.__("Confirm New Password")),1),s("div",q,[F,c(s("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.form.password_confirmation=a),type:o.password_confirm_visibility?"text":"password",class:"form-control shadow-none",required:"",autocomplete:"new-password"},null,8,H),[[m,o.form.password_confirmation]]),s("span",{type:"button",class:"input-group-text",onClick:t[3]||(t[3]=a=>o.password_confirm_visibility=!o.password_confirm_visibility)},[o.password_confirm_visibility?(i(),e("i",M)):(i(),e("i",S))])]),l(_,{name:"password_confirmation"})]),s("div",U,[s("button",{disabled:o.form.processing,type:"submit",class:"btn btn-primary btn-block"},r(n.__("Reset Password")),9,J)])],32)):(i(),e("div",j,r(n.__("Not a valid password reset token")),1))])]),_:1},8,["data"])],64)}const T=w(k,[["render",z]]);export{T as default};

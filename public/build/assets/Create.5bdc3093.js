import{_ as v,o as d,c,b as t,F as h,q as g,D as b,B as V,t as a,d as k,a as m,J as y,U as C,f as S,r as f}from"./app.40136f18.js";import"./bootstrap.esm.2333d793.js";const w={props:["modelValue","rating_description","disabled"],data:function(){return{temp_value:null,ratings:[1,2,3,4,5],rating_value:this.modelValue}},methods:{star_over:function(e){this.disabled||(this.temp_value=this.rating_value,this.rating_value=e)},star_out:function(){this.disabled||(this.rating_value=this.temp_value)},set:function(e){this.disabled||(this.temp_value=e,this.rating_value=e,this.$emit("update:modelValue",e))}}},M={class:"rating d-flex justify-content-between flex-sm-row flex-column"},x=["onMouseover","onClick"],B={key:0};function N(e,n,s,p,o,r){return d(),c("div",M,[t("div",null,[(d(!0),c(h,null,g(e.ratings,(l,_)=>(d(),c("a",{key:_,onMouseover:i=>r.star_over(l),onMouseleave:n[0]||(n[0]=(...i)=>r.star_out&&r.star_out(...i)),onClick:b(i=>r.set(l),["stop","prevent"]),href:"#"},[t("i",{class:V([{"star-filled":e.rating_value>=l&&e.rating_value!=null,"is-disabled":s.disabled},"fas fa-3x fa-star"])},null,2)],40,x))),128))]),s.rating_description?(d(),c("div",B,a(s.rating_description[e.rating_value]),1)):k("",!0)])}const D=v(w,[["render",N]]),E={props:["task","data"],components:{StarRating:D},data(){return{form:this.$inertia.form({number:0,comment:null})}}},R={class:"container page-container"},U={class:"row justify-content-center"},j={class:"col-md-12"},A=t("hr",null,null,-1),F={class:"col-md-8"},H={class:"bg-light text-dark p-2"},T={class:"mb-3"},Y={class:"form-label"},q={class:"mb-3"},z={class:"form-label"},J=["disabled"],L=t("i",{class:"fas fa-check-circle"},null,-1);function G(e,n,s,p,o,r){const l=f("AppHead"),_=f("StarRating"),i=f("ValidationError");return d(),c(h,null,[m(l,{title:s.data.title},null,8,["title"]),t("div",R,[t("div",U,[t("div",j,[t("h4",null,a(s.task.number)+" - "+a(s.data.title),1),A]),t("div",F,[t("p",H,a(s.data.description),1),t("form",{onSubmit:n[2]||(n[2]=b(u=>o.form.post(e.route("customer.tasks.ratings.store",s.task.uuid)),["prevent"]))},[t("div",T,[t("label",Y,a(e.__("Your rating")),1),m(_,{modelValue:o.form.number,"onUpdate:modelValue":n[0]||(n[0]=u=>o.form.number=u),rating_description:s.data.rating_description},null,8,["modelValue","rating_description"]),m(i,{name:"number"})]),t("div",q,[t("label",z,a(e.__("Your comment")),1),y(t("textarea",{class:"form-control","onUpdate:modelValue":n[1]||(n[1]=u=>o.form.comment=u)},null,512),[[C,o.form.comment]]),m(i,{name:"comment"})]),t("button",{disabled:o.form.processing,type:"submit",class:"btn btn-success btn-sm"},[L,S(" "+a(e.__("Submit")),1)],8,J)],32)])])])],64)}const O=v(E,[["render",G]]);export{O as default};

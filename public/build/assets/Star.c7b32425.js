import{_ as c,o as s,c as t,b as e,F as r,q as i,B as u}from"./app.2022c6b3.js";const d={props:["number","comment"],data:function(){return{ratings:[1,2,3,4,5]}}},m={class:"rating d-flex justify-content-between flex-sm-row flex-column"},f=["innerHTML"];function _(a,b,n,p,g,x){return s(),t(r,null,[e("div",m,[e("div",null,[(s(!0),t(r,null,i(a.ratings,(l,o)=>(s(),t("span",{class:"star",key:o},[e("i",{class:u([{"star-filled":n.number>=l&&n.number!=null,"is-disabled":a.disabled},"fas fa-star"])},null,2)]))),128))])]),e("div",{class:"mt-2",innerHTML:n.comment},null,8,f)],64)}const h=c(d,[["render",_]]);export{h as S};

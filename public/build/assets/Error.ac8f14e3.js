import{_ as t,c as s,b as e,t as r,o as n}from"./app.9acdbdf3.js";import"./bootstrap.esm.2333d793.js";const a={props:{status:Number},computed:{title(){return{503:"503: Service Unavailable",500:"500: Server Error",404:"404: Page Not Found",403:"403: Forbidden"}[this.status]},description(){return{503:"Sorry, we are doing some maintenance. Please check back soon.",500:"Whoops, something went wrong on our servers.",404:"Sorry, the page you are looking for could not be found.",403:"Sorry, you are forbidden from accessing this page."}[this.status]}}},c={class:"container page-container"},i={class:"row"},d={class:"col-md-12 text-center"};function l(u,p,_,h,m,o){return n(),s("div",c,[e("div",i,[e("div",d,[e("h1",null,r(o.title),1),e("div",null,r(o.description),1)])])])}const v=t(a,[["render",l]]);export{v as default};

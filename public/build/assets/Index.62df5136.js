import _ from"./BusinessLayout.0d294266.js";import{_ as f,A as n,w as a,r as i,o as s,b as e,t as r,c as h,q as b,F as p,f as o}from"./app.7185dbf0.js";import"./BusinessMenu.d08b9e82.js";import"./bootstrap.esm.2333d793.js";const g={components:{BusinessLayout:_},props:["data"]},P={class:"row"},v={class:"col-md-12"},B=e("hr",null,null,-1),x={class:"list-group list-group-horizontal-md"},w=["src"],y={class:"d-flex gap-2 w-100 justify-content-between align-items-center"},L={class:"mb-0"},k=e("small",{class:"opacity-50 text-nowrap"},[e("i",{class:"fa-solid fa-angle-right"})],-1),A=e("div",{class:"mt-4 bg-light pt-2 pb-2 text-center"},"How price calculation works",-1),F=e("fieldset",{class:"border rounded-3 p-3 mb-2"},[e("legend",{class:"float-none w-auto px-3 fs-8",style:{"margin-left":"auto","margin-right":"auto"}}," Content Writing "),e("table",{class:"table table-sm table-bordered"},[e("tr",null,[e("th",null,"Base Price"),e("td",null,[o(" = Price per word "),e("small",null,"(Based on the selected Freelancer Level)"),o(" x Number of words ")])])]),e("table",{class:"table table-sm table-bordered"},[e("tr",null,[e("td",null,"Assignment Price"),e("td",null,"= (defined % of Base Price)")]),e("tr",null,[e("td",null,"Subject Price"),e("td",null,"= (defined % of Base Price)")]),e("tr",null,[e("td",null,"Urgency Price"),e("td",null,"= (defined % of Base Price)")]),e("tr",null,[e("td",null,"Language Price"),e("td",null,"= (defined % of Base Price)")]),e("tr",null,[e("th",null,"Total Additional Price"),e("td",null,"= Summation of all the above prices")])]),e("table",{class:"table table-sm table-bordered"},[e("tr",null,[e("th",null,"Final Price"),e("td",null,"= Base Price + Total Additional Price")]),e("tr",null,[e("th",null,"Order Total"),e("td",null," = Final Price + Additional Services Price + Customer Service Levels ")])])],-1);function S(c,C,t,T,N,j){const d=i("Link"),u=i("BusinessLayout");return s(),n(u,{title:t.data.title},{default:a(()=>[e("div",P,[e("div",v,[e("h4",null,r(t.data.title),1),B,e("div",x,[(s(!0),h(p,null,b(t.data.services,(l,m)=>(s(),n(d,{key:m,href:c.route("admin.services.edit",l.id),class:"list-group-item list-group-item-action d-flex gap-3","aria-current":"true"},{default:a(()=>[e("img",{width:"40",height:"40",src:t.data.icons[l.id],alt:"twbs",class:"rounded-circle flex-shrink-0"},null,8,w),e("div",y,[e("div",null,[e("h6",L,r(l.name),1)]),k])]),_:2},1032,["href"]))),128))]),A,F])])]),_:1},8,["title"])}const E=f(g,[["render",S]]);export{E as default};

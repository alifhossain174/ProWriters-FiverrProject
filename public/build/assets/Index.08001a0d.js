import N from"./Search.a469c7f0.js";import{T as b}from"./Table.17e80b9f.js";import{_ as T,c as i,a as l,b as t,w as _,F as r,r as n,o as d,q as w,f as c,t as s,d as x}from"./app.969842cf.js";import"./Input.ae708ed5.js";import"./CheckBox.a77c1607.js";import"./Select.df74d481.js";import"./vanilla-picker.csp.0ced5960.js";import"./debounce.ed46515d.js";import"./Pagination.7add1a6b.js";import"./bootstrap.esm.2333d793.js";const y={props:["data","freelancers","filters"],components:{Table:b,Search:N},data(){return{tableOptions:{titles:[{name:"",className:""},{name:this.__("Name"),className:""},{name:this.__("Email"),className:""},{name:this.__("Last login"),className:""}]}}}},B={class:"container page-container"},L={class:"row"},A={class:"col-md-3"},S={class:"col-md-9"},V={class:"align-middle"},C=["src"],D={class:"align-middle"},I={class:"text-muted"},E={class:"text-muted"},F=t("i",{class:"fa-solid fa-medal"},null,-1),H={class:"text-danger"},O={key:0},P={class:"badge text-bg-danger"},q={class:"align-middle"},j=t("i",{class:"fa-regular fa-envelope"},null,-1),z=t("i",{class:"fa-solid fa-phone"},null,-1),G={class:"align-middle"};function J(o,K,a,M,m,Q){const u=n("AppHead"),h=n("AddButton"),f=n("PageTitle"),p=n("Search"),g=n("Link"),v=n("Table");return d(),i(r,null,[l(u,{title:a.data.title},null,8,["title"]),t("div",B,[l(f,{title:a.data.title},{default:_(()=>[l(h,{href:a.data.urls.new_item},null,8,["href"])]),_:1},8,["title"]),t("div",L,[t("div",A,[l(p,{data:a.data,filters:a.filters.filters,only:["freelancers","filters"]},null,8,["data","filters"])]),t("div",S,[l(v,{options:m.tableOptions,links:a.freelancers.links,total:a.freelancers.total,only:["freelancers","filters"]},{default:_(()=>[(d(!0),i(r,null,w(a.freelancers.data,(e,k)=>(d(),i("tr",{key:k},[t("td",V,[t("img",{src:e.small_avatar,class:"avatar rounded-circle"},null,8,C)]),t("td",D,[l(g,{href:o.route("admin.freelancers.show",e.uuid)},{default:_(()=>[c(s(e.full_name),1)]),_:2},1032,["href"]),t("div",null,[t("small",I,s(o.__("ID"))+": "+s(e.code),1)]),t("div",null,[t("small",E,[F,c(" "+s(o.__("Level"))+" : ",1),t("span",H,s(e.freelancer_level_name),1)])]),e.inactive?(d(),i("div",O,[t("span",P,s(o.__("Inactive")),1)])):x("",!0)]),t("td",q,[t("div",null,[j,c(" "+s(e.email),1)]),t("div",null,[z,c(" "+s(e.phone),1)])]),t("td",G,s(o.localDateTime(e.last_login_at)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const at=T(y,[["render",J]]);export{at as default};

import N from"./Search.b6d222a2.js";import{T as b}from"./Table.25f2de44.js";import{_ as T,c as i,a,b as t,w as d,F as _,r as o,o as c,q as y,f as r,t as n,d as B}from"./app.2f940534.js";import"./Input.804a9604.js";import"./CheckBox.4055e6ce.js";import"./vanilla-picker.csp.5d2100ee.js";import"./debounce.0b2caf7a.js";import"./Pagination.c6521de8.js";import"./bootstrap.esm.2333d793.js";const w={props:["data","customers","filters"],components:{Table:b,Search:N},data(){return{tableOptions:{titles:[{name:"",className:""},{name:this.__("Name"),className:""},{name:this.__("Email"),className:""},{name:this.__("Last login"),className:""}]}}}},A={class:"container page-container"},L={class:"row"},S={class:"col-md-3"},V={class:"col-md-9"},x={class:"align-middle"},C=["src"],D={class:"align-middle"},E={key:0},F={class:"badge text-bg-danger"},H={class:"align-middle"},I=t("i",{class:"fa-regular fa-envelope"},null,-1),O={class:"mt-2"},P=t("i",{class:"fa-solid fa-phone"},null,-1),q={class:"align-middle"};function j(l,z,e,G,m,J){const u=o("AppHead"),h=o("AddButton"),f=o("PageTitle"),p=o("Search"),g=o("Link"),v=o("Table");return c(),i(_,null,[a(u,{title:e.data.title},null,8,["title"]),t("div",A,[a(f,{title:e.data.title},{default:d(()=>[a(h,{href:l.route("admin.customers.create")},null,8,["href"])]),_:1},8,["title"]),t("div",L,[t("div",S,[a(p,{data:e.data,filters:e.filters.filters,only:["customers","filters"]},null,8,["data","filters"])]),t("div",V,[a(v,{options:m.tableOptions,links:e.customers.links,total:e.customers.total,only:["customers","filters"]},{default:d(()=>[(c(!0),i(_,null,y(e.customers.data,(s,k)=>(c(),i("tr",{key:k},[t("td",x,[t("img",{src:s.small_avatar,class:"avatar rounded-circle"},null,8,C)]),t("td",D,[a(g,{href:l.route("admin.customers.show",s.uuid)},{default:d(()=>[r(n(s.full_name),1)]),_:2},1032,["href"]),s.inactive?(c(),i("div",E,[t("span",F,n(l.__("Inactive")),1)])):B("",!0)]),t("td",H,[t("div",null,[I,r(" "+n(s.email),1)]),t("div",O,[P,r(" "+n(s.phone),1)])]),t("td",q,n(l.localDateTime(s.last_login_at)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const $=T(w,[["render",j]]);export{$ as default};

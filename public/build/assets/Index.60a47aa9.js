import N from"./Search.3466bf5a.js";import{T}from"./Table.ebb165fc.js";import{_ as y,c as n,a,b as t,w as d,F as _,r as o,o as i,q as B,f as r,t as l,d as m}from"./app.94ede146.js";import"./Input.e65d7326.js";import"./CheckBox.b26ad33b.js";import"./vanilla-picker.csp.da387394.js";import"./debounce.b3e602c6.js";import"./Pagination.92b4b13c.js";import"./bootstrap.esm.2333d793.js";const w={props:["data","users","filters"],components:{Table:T,Search:N},data(){return{tableOptions:{titles:[{name:"",className:""},{name:this.__("Name"),className:""},{name:this.__("Email"),className:""},{name:this.__("Last login"),className:""}]}}}},x={class:"container page-container"},A={class:"row"},L={class:"col-md-3"},S={class:"col-md-9"},V={class:"align-middle"},C=["src"],D={class:"align-middle"},E={key:0,class:"mt-2"},F={class:"badge text-bg-light"},H={key:1,class:"mt-2"},I={class:"badge text-bg-danger"},O={class:"align-middle"},P=t("i",{class:"fa-regular fa-envelope"},null,-1),q={class:"mt-2"},j=t("i",{class:"fa-solid fa-phone"},null,-1),z={class:"align-middle"};function G(c,J,s,K,h,M){const u=o("AppHead"),f=o("AddButton"),p=o("PageTitle"),g=o("Search"),v=o("Link"),b=o("Table");return i(),n(_,null,[a(u,{title:s.data.title},null,8,["title"]),t("div",x,[a(p,{title:s.data.title},{default:d(()=>[a(f,{href:c.route("admin.users.create")},null,8,["href"])]),_:1},8,["title"]),t("div",A,[t("div",L,[a(g,{data:s.data,filters:s.filters.filters,only:["users","filters"]},null,8,["data","filters"])]),t("div",S,[a(b,{options:h.tableOptions,links:s.users.links,total:s.users.total,only:["users","filters"]},{default:d(()=>[(i(!0),n(_,null,B(s.users.data,(e,k)=>(i(),n("tr",{key:k},[t("td",V,[t("img",{src:e.small_avatar,class:"avatar rounded-circle"},null,8,C)]),t("td",D,[a(v,{href:c.route("admin.users.show",e.uuid)},{default:d(()=>[r(l(e.full_name),1)]),_:2},1032,["href"]),e.roles.length>0?(i(),n("div",E,[t("small",F,l(s.data.roles[e.roles[0].name]),1)])):m("",!0),e.inactive?(i(),n("div",H,[t("span",I,l(c.__("Inactive")),1)])):m("",!0)]),t("td",O,[t("div",null,[P,r(" "+l(e.email),1)]),t("div",q,[j,r(" "+l(e.phone),1)])]),t("td",z,l(c.localDateTime(e.last_login_at)),1)]))),128))]),_:1},8,["options","links","total"])])])])],64)}const et=y(w,[["render",G]]);export{et as default};

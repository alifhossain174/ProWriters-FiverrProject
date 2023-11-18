import{T as C}from"./Table.eddc6d2a.js";import{S as A}from"./SearchBar.4440aec5.js";import{_ as x,c as r,a as l,b as e,w as c,t as n,F as p,r as i,o as d,q as S,f as _,d as T}from"./app.571265cd.js";import"./Pagination.3a5daa99.js";import"./debounce.94acad4c.js";import"./bootstrap.esm.2333d793.js";const w={components:{Table:C,SearchBar:A},props:["data","payments","filters"],methods:{approve(a){let o=route("admin.payments.pendingApprovals.approve",a),t=this;this.confirmDialog(t.__("Yes, Approve"),()=>{t.$inertia.get(o,t.inertiaConfig)})},disapprove(a){let o=this,t=route("admin.payments.pendingApprovals.disapprove",a);this.confirmDialog(o.__("Yes, Disapprove"),()=>{o.$inertia.get(t,o.inertiaConfig)})}},data(){return{inertiaConfig:{preserveScroll:!1},tableOptions:{titles:[{name:this.__("Number"),className:""},{name:this.__("Date"),className:""},{name:this.__("From"),className:""},{name:this.__("Method"),className:""},{name:this.__("Amount"),className:"text-end"},{name:this.__("Action"),className:"text-end"}]}}}},B={class:"container page-container"},D={class:"row"},y={class:"col-md-12"},V={class:"text-danger"},F={key:0,class:"text-muted"},L={class:"text-end"},H={class:"text-end"},M=["onClick"],O=e("i",{class:"far fa-thumbs-up"},null,-1),P=[O],Y=["onClick"],q=e("i",{class:"far fa-thumbs-down"},null,-1),E=[q];function I(a,o,t,R,h,m){const f=i("AppHead"),v=i("SearchBar"),b=i("PageTitle"),u=i("Link"),g=i("Table");return d(),r(p,null,[l(f,{title:t.data.title},null,8,["title"]),e("div",B,[l(b,{title:t.data.title},{default:c(()=>[l(v,{hide_inactive_search:!0,url:t.data.urls.search,filters:t.filters.filters},null,8,["url","filters"])]),_:1},8,["title"]),e("div",D,[e("div",y,[e("small",V,"*** "+n(a.__("Approved payment amount goes to the customer wallet")),1),l(g,{options:h.tableOptions,links:t.payments.links,total:t.payments.total,tableStyle:"fs-8"},{default:c(()=>[(d(!0),r(p,null,S(t.payments.data,(s,k)=>(d(),r("tr",{key:k},[e("td",null,[l(u,{href:a.route("admin.payments.pendingApprovals.show",s.uuid)},{default:c(()=>[_(n(s.number),1)]),_:2},1032,["href"])]),e("td",null,n(a.localDate(s.created_at)),1),e("td",null,[l(u,{href:""},{default:c(()=>[_(n(s.from.full_name),1)]),_:2},1024)]),e("td",null,[_(n(s.method.name)+" ",1),s.reference?(d(),r("div",F,n(a.__("Reference"))+" : "+n(s.reference),1)):T("",!0)]),e("td",L,n(a.formatMoney(s.amount)),1),e("td",H,[e("button",{class:"btn btn-sm btn-success me-2",onClick:N=>m.approve(s.uuid)},P,8,M),e("button",{class:"btn btn-sm btn-danger",onClick:N=>m.disapprove(s.uuid)},E,8,Y)])]))),128))]),_:1},8,["options","links","total"])])])])],64)}const U=x(w,[["render",I]]);export{U as default};

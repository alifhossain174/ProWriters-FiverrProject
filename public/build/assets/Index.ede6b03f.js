import b from"./TaskShowLayout.ff79e48b.js";import{T as f}from"./Table.eddc6d2a.js";import{_ as k,a7 as y,A as w,w as n,r as l,o as i,b as t,t as a,a as c,f as g,c as r,q as v,F as T}from"./app.571265cd.js";import"./Countdown.02efd5b0.js";import"./Pagination.3a5daa99.js";import"./bootstrap.esm.2333d793.js";const S={props:["task","data","attachments"],components:{TaskShowLayout:b,Table:f,DialogLink:y},data(){return{tableStyle:"table-sm",options:{titles:[{name:this.__("Name"),className:"col-md-5"},{name:this.__("Created"),className:"col-md-5"},{name:null,className:"col-md-2 text-end"}]}}},methods:{handleAttachment(e){this.form.files=e},deleteAttachment(e){this.deleteConfirmDialog(this,route("admin.tasks.attachments.destroy",[this.task.uuid,e]))}}},D={class:"d-flex justify-content-between mb-4"},L={class:"text-end"},N={class:"btn-group"},C=t("button",{type:"button",class:"btn btn-link","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"fas fa-ellipsis-v"})],-1),A={class:"dropdown-menu dropdown-menu-end"},x={class:"dropdown-item",type:"button"},B=["href"],F=["onClick"];function V(e,j,s,q,d,m){const _=l("DialogLink"),u=l("Table"),h=l("TaskShowLayout");return i(),w(h,{task:s.task,activeTab:"attachment"},{default:n(()=>[t("div",D,[t("div",null,[t("h4",null,a(e.__("Attachments")),1)]),t("div",null,[c(_,{href:s.data.urls.create_attachment,class:"btn btn-sm btn-primary"},{default:n(()=>[g(a(e.__("Upload File")),1)]),_:1},8,["href"])])]),c(u,{tableStyle:d.tableStyle,options:d.options,links:s.attachments.link,total:s.attachments.total},{default:n(()=>[(i(!0),r(T,null,v(s.attachments.data,(o,p)=>(i(),r("tr",{key:p},[t("td",null,a(o.display_name),1),t("td",null,a(e.localDate(o.created_at)),1),t("td",L,[t("div",N,[C,t("ul",A,[t("li",null,[t("button",x,[t("a",{href:e.route("attachments.download",o.uuid)},a(e.__("Download")),9,B)])]),t("li",null,[t("button",{onClick:E=>m.deleteAttachment(o.uuid),class:"dropdown-item",type:"button"},a(e.__("Remove")),9,F)])])])])]))),128))]),_:1},8,["tableStyle","options","links","total"])]),_:1},8,["task"])}const J=k(S,[["render",V]]);export{J as default};

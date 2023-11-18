import f from"./TaskShowLayout.57c9a751.js";import{T as k}from"./Table.7532dcf1.js";import{_ as y,g as w,y as l,f as d,o as n,b as t,t as a,a as m,d as g,c as i,r as v,h as T,F as N}from"./app.f4b2b251.js";import"./Countdown.b6097b39.js";import"./Pagination.8eecb841.js";import"./bootstrap.esm.2333d793.js";const S={props:["task","data","attachments"],components:{TaskShowLayout:f,Table:k},data(){return{tableStyle:"table-sm",options:{titles:[{name:this.__("Name"),className:"col-md-5"},{name:this.__("Created"),className:"col-md-5"},{name:null,className:"col-md-2 text-end"}]}}},methods:{handleAttachment(e){this.form.files=e},deleteAttachment(e){let r=route("customer.tasks.attachments.destroy",[this.task.uuid,e]);this.deleteConfirmDialog(this,r)}}},C={class:"d-flex justify-content-between mb-4"},D={class:"text-end"},L={class:"btn-group"},A=t("button",{type:"button",class:"btn btn-link","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"fas fa-ellipsis-v"})],-1),B={class:"dropdown-menu dropdown-menu-end"},V={class:"dropdown-item",type:"button"},x=["href"],F=["onClick"];function j(e,r,s,E,c,u){const _=d("DialogLink"),h=d("Table"),p=d("TaskShowLayout");return n(),w(p,{task:s.task,activeTab:"attachment"},{default:l(()=>[t("div",C,[t("div",null,[t("h4",null,a(e.__("Attachments")),1)]),t("div",null,[m(_,{href:s.data.urls.create_attachment,class:"btn btn-sm btn-primary"},{default:l(()=>[g(a(e.__("Upload File")),1)]),_:1},8,["href"])])]),m(h,{tableStyle:c.tableStyle,options:c.options,links:s.attachments.links,total:s.attachments.total},{default:l(()=>[(n(!0),i(N,null,v(s.attachments.data,(o,b)=>(n(),i("tr",{key:b},[t("td",null,a(o.display_name),1),t("td",null,a(e.localDate(o.created_at)),1),t("td",D,[t("div",L,[A,t("ul",B,[t("li",null,[t("button",V,[t("a",{href:e.route("attachments.download",o.uuid)},a(e.__("Download")),9,x)])]),t("li",null,[o.user_id==e.$page.props.auth_user.id?(n(),i("button",{key:0,onClick:I=>u.deleteAttachment(o.uuid),class:"dropdown-item",type:"button"},a(e.__("Remove")),9,F)):T("",!0)])])])])]))),128))]),_:1},8,["tableStyle","options","links","total"])]),_:1},8,["task"])}const J=y(S,[["render",j]]);export{J as default};

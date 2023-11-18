import b from"./AdditionalServiceSection.21c17d5b.js";import{_ as f,c as l,b as e,t,a as n,w as r,A as y,F as h,q as m,f as i,d as w,r as k,o}from"./app.707c49f0.js";import"./bootstrap.esm.2333d793.js";const S={props:["task","data"],components:{AdditionalServiceSection:b},data(){return{briefs:[{label:this.__("Service"),value:this.task.service.name},{label:this.__("Assignment")+" / "+this.__("Package"),value:this.task.details.assignment.name},{label:this.__("Urgency"),value:this.task.urgency.name},{label:this.__("Author Level"),value:this.task.author_level.name},{label:this.__("Service Level"),value:this.task.service_level.name},{label:this.__("Created"),value:this.localDateTime(this.task.created_at)},{label:this.__("Deadline"),value:this.localDateTime(this.task.dead_line)},{label:this.__("Deadline for Author"),value:this.localDateTime(this.task.dead_line_for_author)},{label:this.__("Revisions"),value:this.task.revisions_taken+" / "+this.task.revisions_allowed},{label:this.__("Total Price"),value:this.formatMoney(this.task.total)}],details:[{label:this.__("Instructions"),value:this.task.details.instruction}]}}},g={class:"row"},A={class:"col-md-4"},D={class:"card"},L={class:"card-body"},N={class:"card-title"},T={class:"p-2 task-card"},B={class:"border-bottom mb-2 pb-2"},C={class:"text-muted fw-bolder"},M={class:"border-bottom mb-2 pb-2"},R={class:"text-muted fw-bolder"},E={key:0},I={key:1},P={class:"border-bottom mb-2 pb-2"},V={class:"text-muted fw-bolder"},F={key:0},H={key:1},U={key:1},q={class:"text-muted fw-bolder"},G={class:""},O={class:"col-md-8"},W={class:"text-muted"},Y={class:"lead"},j=e("hr",null,null,-1),z={class:"text-muted"},J=["innerHTML"],K=e("hr",null,null,-1),Q={key:0,class:"alert alert-success"};function X(s,Z,a,p,u,x){const _=k("Link"),v=k("AdditionalServiceSection");return o(),l("div",g,[e("div",A,[e("div",D,[e("div",L,[e("h5",N,t(s.__("General Information")),1),e("div",T,[e("div",B,[e("small",C,t(s.__("Customer")),1),e("div",null,[n(_,{href:s.route("admin.customers.show",a.task.customer.uuid)},{default:r(()=>[i(t(a.task.customer.full_name),1)]),_:1},8,["href"])])]),e("div",M,[e("small",R,t(s.__("Author")),1),a.task.author?(o(),l("div",E,[n(_,{href:s.route("admin.authors.show",a.task.author.uuid)},{default:r(()=>[i(t(a.task.author.full_name),1)]),_:1},8,["href"])])):(o(),l("div",I,t(s.__("Not assigned")),1))]),e("div",P,[e("small",V,t(s.__("Editor")),1),a.task.editor?(o(),l("div",F,[s.hasRole(s.ADMIN_ROLES.SUPER_ADMIN)?(o(),y(_,{key:0,href:s.route("admin.users.show",a.task.editor.uuid)},{default:r(()=>[i(t(a.task.editor.full_name),1)]),_:1},8,["href"])):(o(),l("span",H,t(a.task.editor.full_name),1))])):(o(),l("div",U,t(s.__("Not assigned")),1))]),(o(!0),l(h,null,m(u.briefs,(d,c)=>(o(),l("div",{class:"border-bottom mb-2 pb-2",key:c},[e("small",q,t(d.label),1),e("div",G,t(d.value),1)]))),128))])])]),n(v,{task:a.task},null,8,["task"])]),e("div",O,[e("small",W,t(s.__("Title")),1),e("div",Y,t(a.task.title),1),j,(o(!0),l(h,null,m(u.details,(d,c)=>(o(),l("div",{class:"mt-2 mb-2",key:c},[e("small",z,t(d.label),1),e("div",{class:"text-break",innerHTML:d.value},null,8,J),K]))),128)),a.task.task_status_id==a.data.task_status_submitted_for_approval?(o(),l("div",Q,[i(t(s.__("Your content is ready for download"))+". "+t(s.__("Please click"))+" ",1),n(_,{href:s.route("customer.tasks.content",a.task.uuid)},{default:r(()=>[i(t(s.__("here")),1)]),_:1},8,["href"]),i(" "+t(s.__("to see your files"))+". ",1)])):w("",!0)])])}const se=f(S,[["render",X]]);export{se as default};

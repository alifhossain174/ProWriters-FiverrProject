import b from"./AdditionalServiceSection.21c17d5b.js";import{_ as f,c as l,b as e,t,a as n,w as r,A as y,F as h,q as m,f as o,d as w,r as k,o as i}from"./app.707c49f0.js";import"./bootstrap.esm.2333d793.js";const A={props:["task","data"],components:{AdditionalServiceSection:b},data(){return{briefs:[{label:this.__("Service"),value:this.task.service.name},{label:this.__("Work Type"),value:this.data.work_types[this.task.details.work_type_id]},{label:this.__("Assignment"),value:this.task.details.assignment.name},{label:this.__("Subject"),value:this.task.details.subject.name},{label:this.__("Academic Level"),value:this.task.details.academic_level.name},{label:this.__("Urgency"),value:this.task.urgency.name},{label:this.__("Paper Format"),value:this.task.details.paper_format.name},{label:this.__("Quantity"),value:this.task.details.quantity+" "+this.data.unit_types[this.task.details.unit_name]},{label:this.__("Number of sources"),value:this.task.details.number_of_sources},{label:this.__("Author Level"),value:this.task.author_level.name},{label:this.__("Service Level"),value:this.task.service_level.name},{label:this.__("Created"),value:this.localDateTime(this.task.created_at)},{label:this.__("Deadline"),value:this.localDateTime(this.task.dead_line)},{label:this.__("Deadline for Author"),value:this.localDateTime(this.task.dead_line_for_author)},{label:this.__("Revisions"),value:this.task.revisions_taken+" / "+this.task.revisions_allowed},{label:this.__("Total Price"),value:this.formatMoney(this.task.total)}],details:[{label:this.__("Quantity"),value:this.task.details.number_of_words_and_pages},{label:this.__("Instructions"),value:this.task.details.instruction}]}}},S={class:"row"},g={class:"col-md-4"},L={class:"card"},N={class:"card-body"},T={class:"card-title"},D={class:"p-2 task-card"},p={class:"border-bottom mb-2 pb-2"},B={class:"text-muted fw-bolder"},C={class:"border-bottom mb-2 pb-2"},M={class:"text-muted fw-bolder"},E={key:0},I={key:1},P={class:"border-bottom mb-2 pb-2"},R={class:"text-muted fw-bolder"},V={key:0},F={key:1},j={key:1},q={class:"text-muted fw-bolder"},H={class:""},Q={class:"col-md-8"},U={class:"text-muted"},W={class:"lead"},G=e("hr",null,null,-1),O={class:"text-muted"},Y=["innerHTML"],z=e("hr",null,null,-1),J={key:0,class:"alert alert-success"};function K(s,X,a,Z,u,x){const d=k("Link"),v=k("AdditionalServiceSection");return i(),l("div",S,[e("div",g,[e("div",L,[e("div",N,[e("h5",T,t(s.__("General Information")),1),e("div",D,[e("div",p,[e("small",B,t(s.__("Customer")),1),e("div",null,[n(d,{href:s.route("admin.customers.show",a.task.customer.uuid)},{default:r(()=>[o(t(a.task.customer.full_name),1)]),_:1},8,["href"])])]),e("div",C,[e("small",M,t(s.__("Author")),1),a.task.author?(i(),l("div",E,[n(d,{href:s.route("admin.authors.show",a.task.author.uuid)},{default:r(()=>[o(t(a.task.author.full_name),1)]),_:1},8,["href"])])):(i(),l("div",I,t(s.__("Not assigned")),1))]),e("div",P,[e("small",R,t(s.__("Editor")),1),a.task.editor?(i(),l("div",V,[s.hasRole(s.ADMIN_ROLES.SUPER_ADMIN)?(i(),y(d,{key:0,href:s.route("admin.users.show",a.task.editor.uuid)},{default:r(()=>[o(t(a.task.editor.full_name),1)]),_:1},8,["href"])):(i(),l("span",F,t(a.task.editor.full_name),1))])):(i(),l("div",j,t(s.__("Not assigned")),1))]),(i(!0),l(h,null,m(u.briefs,(_,c)=>(i(),l("div",{class:"border-bottom mb-2 pb-2",key:c},[e("small",q,t(_.label),1),e("div",H,t(_.value),1)]))),128))])])]),n(v,{task:a.task},null,8,["task"])]),e("div",Q,[e("small",U,t(s.__("Title")),1),e("div",W,t(a.task.title),1),G,(i(!0),l(h,null,m(u.details,(_,c)=>(i(),l("div",{class:"mt-2 mb-2",key:c},[e("small",O,t(_.label),1),e("div",{class:"text-break",innerHTML:_.value},null,8,Y),z]))),128)),a.task.task_status_id==a.data.task_status_submitted_for_approval?(i(),l("div",J,[o(t(s.__("Your content is ready for download"))+". "+t(s.__("Please click"))+" ",1),n(d,{href:s.route("customer.tasks.content",a.task.uuid)},{default:r(()=>[o(t(s.__("here")),1)]),_:1},8,["href"]),o(" "+t(s.__("to see your files"))+". ",1)])):w("",!0)])])}const se=f(A,[["render",K]]);export{se as default};
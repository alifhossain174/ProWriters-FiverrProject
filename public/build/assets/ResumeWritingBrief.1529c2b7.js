import k from"./AdditionalServiceSection.e2e2ddb6.js";import{_ as f,c as a,b as e,t as s,F as c,q as d,a as u,f as _,w as b,d as p,r as h,o as l}from"./app.94ede146.js";import"./bootstrap.esm.2333d793.js";const y={props:["task","data"],components:{AdditionalServiceSection:k},data(){return{briefs:[{label:this.__("Service"),value:this.task.service.name},{label:this.__("Assignment")+" / "+this.__("Package"),value:this.task.details.assignment.name},{label:this.__("Urgency"),value:this.task.urgency.name},{label:this.__("Freelancer Level"),value:this.task.freelancer_level.name},{label:this.__("Service Level"),value:this.task.service_level.name},{label:this.__("Deadline"),value:this.localDateTime(this.task.dead_line_for_freelancer)},{label:this.__("Revisions"),value:this.task.revisions_taken+" / "+this.task.revisions_allowed},{label:this.__("Earning"),value:this.formatMoney(this.task.freelancer_payment_amount)}],details:[{label:this.__("Instructions"),value:this.task.details.instruction}]}}},g={class:"row"},S={class:"col-md-4"},L={class:"card"},w={class:"card-body"},T={class:"card-title"},A={class:"p-2 task-card"},B={class:"text-muted fw-bolder"},N={class:""},V={class:"col-md-8"},C={class:"text-muted"},D={class:"lead"},F=e("hr",null,null,-1),M={class:"text-muted"},x=["innerHTML"],E=e("hr",null,null,-1),H={key:0,class:"alert alert-success"};function I(t,P,i,R,r,q){const m=h("AdditionalServiceSection"),v=h("Link");return l(),a("div",g,[e("div",S,[e("div",L,[e("div",w,[e("h5",T,s(t.__("General Information")),1),e("div",A,[(l(!0),a(c,null,d(r.briefs,(n,o)=>(l(),a("div",{class:"border-bottom mb-2 pb-2",key:o},[e("small",B,s(n.label),1),e("div",N,s(n.value),1)]))),128))])])]),u(m,{task:i.task},null,8,["task"])]),e("div",V,[e("small",C,s(t.__("Title")),1),e("div",D,s(i.task.title),1),F,(l(!0),a(c,null,d(r.details,(n,o)=>(l(),a("div",{class:"mt-2 mb-2",key:o},[e("small",M,s(n.label),1),e("div",{class:"text-break",innerHTML:n.value},null,8,x),E]))),128)),i.task.task_status_id==i.data.task_status_submitted_for_approval?(l(),a("div",H,[_(s(t.__("Your content is ready for download"))+". "+s(t.__("Please click"))+" ",1),u(v,{href:t.route("customer.tasks.content",i.task.uuid)},{default:b(()=>[_(s(t.__("here")),1)]),_:1},8,["href"]),_(" "+s(t.__("to see your files"))+". ",1)])):p("",!0)])])}const Y=f(y,[["render",I]]);export{Y as default};

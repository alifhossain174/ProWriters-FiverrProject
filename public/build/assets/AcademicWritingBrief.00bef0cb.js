import k from"./AdditionalServiceSection.7edf7b80.js";import{_ as b,c as a,b as e,t,F as d,q as c,a as u,f as _,w as f,d as p,r as h,o as i}from"./app.1d2673ab.js";import"./bootstrap.esm.2333d793.js";const y={props:["task","data"],components:{AdditionalServiceSection:k},data(){return{briefs:[{label:this.__("Budget"),value:this.formatMoney(this.task.freelancer_payment_amount)},{label:this.__("Deadline"),value:this.localDateTime(this.task.dead_line_for_freelancer)},{label:this.__("Service"),value:this.task.service.name},{label:this.__("Work Type"),value:this.data.work_types[this.task.details.work_type_id]},{label:this.__("Assignment"),value:this.task.details.assignment.name},{label:this.__("Subject"),value:this.task.details.subject.name},{label:this.__("Academic Level"),value:this.task.details.academic_level.name},{label:this.__("Urgency"),value:this.task.urgency.name},{label:this.__("Paper Format"),value:this.task.details.paper_format.name},{label:this.__("Quantity"),value:this.task.details.quantity+" "+this.data.unit_types[this.task.details.unit_name]},{label:this.__("Number of sources"),value:this.task.details.number_of_sources},{label:this.__("Service Level"),value:this.task.service_level.name},{label:this.__("Revisions"),value:this.task.revisions_taken+" / "+this.task.revisions_allowed}],details:[{label:this.__("Quantity"),value:this.task.details.number_of_words_and_pages},{label:this.__("Instructions"),value:this.task.details.instruction}]}}},S={class:"row"},g={class:"col-md-4"},w={class:"card"},L={class:"card-body"},A={class:"card-title"},T={class:"p-2 task-card"},B={class:"text-muted fw-bolder"},N={class:""},V={class:"col-md-8"},C={class:"text-muted"},D={class:"lead"},F=e("hr",null,null,-1),M={class:"text-muted"},j=["innerHTML"],q=e("hr",null,null,-1),x={key:0,class:"alert alert-success"};function H(s,I,l,P,r,Q){const m=h("AdditionalServiceSection"),v=h("Link");return i(),a("div",S,[e("div",g,[e("div",w,[e("div",L,[e("h5",A,t(s.__("General Information")),1),e("div",T,[(i(!0),a(d,null,c(r.briefs,(o,n)=>(i(),a("div",{class:"border-bottom mb-2 pb-2",key:n},[e("small",B,t(o.label),1),e("div",N,t(o.value),1)]))),128))])])]),u(m,{task:l.task},null,8,["task"])]),e("div",V,[e("small",C,t(s.__("Title")),1),e("div",D,t(l.task.title),1),F,(i(!0),a(d,null,c(r.details,(o,n)=>(i(),a("div",{class:"mt-2 mb-2",key:n},[e("small",M,t(o.label),1),e("div",{class:"text-break",innerHTML:o.value},null,8,j),q]))),128)),l.task.task_status_id==l.data.task_status_submitted_for_approval?(i(),a("div",x,[_(t(s.__("Your content is ready for download"))+". "+t(s.__("Please click"))+" ",1),u(v,{href:s.route("customer.tasks.content",l.task.uuid)},{default:f(()=>[_(t(s.__("here")),1)]),_:1},8,["href"]),_(" "+t(s.__("to see your files"))+". ",1)])):p("",!0)])])}const R=b(y,[["render",H]]);export{R as default};

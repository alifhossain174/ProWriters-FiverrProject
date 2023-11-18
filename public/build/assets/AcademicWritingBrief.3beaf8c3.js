import k from"./AdditionalServiceSection.554c6907.js";import{_ as b,c as a,b as e,t,F as c,q as d,a as h,f as n,w as f,d as p,r as u,o as l}from"./app.40136f18.js";import"./bootstrap.esm.2333d793.js";const y={props:["task","data"],components:{AdditionalServiceSection:k},data(){return{briefs:[{label:this.__("Service"),value:this.task.service.name},{label:this.__("Work Type"),value:this.data.work_types[this.task.details.work_type_id]},{label:this.__("Assignment"),value:this.task.details.assignment.name},{label:this.__("Subject"),value:this.task.details.subject.name},{label:this.__("Academic Level"),value:this.task.details.academic_level.name},{label:this.__("Urgency"),value:this.task.urgency.name},{label:this.__("Paper Format"),value:this.task.details.paper_format.name},{label:this.__("Quantity"),value:this.task.details.quantity+" "+this.data.unit_types[this.task.details.unit_name]},{label:this.__("Number of sources"),value:this.task.details.number_of_sources},{label:this.__("Freelancer Level"),value:this.task.freelancer_level.name},{label:this.__("Service Level"),value:this.task.service_level.name},{label:this.__("Created"),value:this.localDateTime(this.task.created_at)},{label:this.__("Deadline"),value:this.localDateTime(this.task.dead_line)},{label:this.__("Revisions"),value:this.task.revisions_taken+" / "+this.task.revisions_allowed},{label:this.__("Project"),value:this.task.project?this.task.project.name:this.__("N/A")},{label:this.__("Total Cost"),value:this.formatMoney(this.task.total)}],details:[{label:this.__("Quantity"),value:this.task.details.number_of_words_and_pages},{label:this.__("Instructions"),value:this.task.details.instruction}]}}},S={class:"row"},w={class:"col-md-4"},g={class:"card"},L={class:"card-body"},T={class:"card-title"},A={class:"p-2 task-card"},N={class:"text-muted fw-bolder"},j={class:""},C={class:"col-md-8"},B={class:"text-muted"},D={class:"lead"},F=e("hr",null,null,-1),V={class:"text-muted"},M=["innerHTML"],P=e("hr",null,null,-1),q={key:0,class:"alert alert-success"};function x(s,H,i,I,r,Q){const m=u("AdditionalServiceSection"),v=u("Link");return l(),a("div",S,[e("div",w,[e("div",g,[e("div",L,[e("h5",T,t(s.__("General Information")),1),e("div",A,[(l(!0),a(c,null,d(r.briefs,(o,_)=>(l(),a("div",{class:"border-bottom mb-2 pb-2",key:_},[e("small",N,t(o.label),1),e("div",j,t(o.value),1)]))),128))])])]),h(m,{task:i.task},null,8,["task"])]),e("div",C,[e("small",B,t(s.__("Title")),1),e("div",D,t(i.task.title),1),F,(l(!0),a(c,null,d(r.details,(o,_)=>(l(),a("div",{class:"mt-2 mb-2",key:_},[e("small",V,t(o.label),1),e("div",{class:"text-break",innerHTML:o.value},null,8,M),P]))),128)),i.task.task_status_id==i.data.task_status_submitted_for_approval?(l(),a("div",q,[n(t(s.__("Your content is ready for download"))+". "+t(s.__("Please click"))+" ",1),h(v,{href:s.route("customer.tasks.content",i.task.uuid)},{default:f(()=>[n(t(s.__("here")),1)]),_:1},8,["href"]),n(" "+t(s.__("to see your files"))+". ",1)])):p("",!0)])])}const R=b(y,[["render",x]]);export{R as default};

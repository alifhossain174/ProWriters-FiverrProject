import v from"./AdditionalServiceSection.8dd57d2d.js";import{_ as b,c as a,b as t,t as e,F as d,q as c,a as h,f as o,w as g,d as f,r as u,o as i}from"./app.571265cd.js";import"./bootstrap.esm.2333d793.js";const p={props:["task","data"],components:{AdditionalServiceSection:v},data(){return{briefs:[{label:this.__("Service"),value:this.task.service.name},{label:this.__("Work Type"),value:this.data.work_types[this.task.details.work_type_id]},{label:this.__("Assignment"),value:this.task.details.assignment.name},{label:this.__("Subject"),value:this.task.details.subject.name},{label:this.__("Language"),value:this.task.details.language.name},{label:this.__("Urgency"),value:this.task.urgency.name},{label:this.__("Quantity"),value:this.task.details.quantity+" "+this.data.unit_types[this.task.details.unit_name]},{label:this.__("Service Level"),value:this.task.service_level.name},{label:this.__("Created"),value:this.localDateTime(this.task.created_at)},{label:this.__("Deadline"),value:this.localDateTime(this.task.dead_line)},{label:this.__("Revisions"),value:this.task.revisions_taken+" / "+this.task.revisions_allowed},{label:this.__("Project"),value:this.task.project?this.task.project.name:this.__("N/A")},{label:this.__("Total Cost"),value:this.formatMoney(this.task.total)}],details:[{label:this.__("Quantity"),value:this.task.details.number_of_words_and_pages},{label:this.__("Content Goals & Things to Mention"),value:this.task.details.content_goals},{label:this.__("Grammatical Person"),value:this.task.details.grammatical_person.name},{label:this.__("Target Audience"),value:this.task.details.target_audience},{label:this.__("Target Keywords"),value:this.task.details.target_keywords},{label:this.__("Links to Example Content"),value:this.task.details.links_to_example_content},{label:this.__("Style & Tone"),value:this.task.details.style_and_tone},{label:this.__("Structure & Formatting Requirements"),value:this.task.details.structure_and_formatting_requirements},{label:this.__("Referencing & Linking Preferences"),value:this.task.details.referencing_and_linking_preferences},{label:this.__("Things to Avoid"),value:this.task.details.things_to_avoid},{label:this.__("Additional Notes"),value:this.task.details.additional_notes}]}}},y={class:"row"},T={class:"col-md-4"},S={class:"card"},w={class:"card-body"},L={class:"card-title"},A={class:"p-2 task-card"},C={class:"text-muted fw-bolder"},N={class:""},j={class:"col-md-8"},q={class:"text-muted"},x={class:"lead"},B=t("hr",null,null,-1),D={class:"text-muted"},M=["innerHTML"],P=t("hr",null,null,-1),V={key:0,class:"alert alert-success"};function F(s,G,l,R,r,E){const k=u("AdditionalServiceSection"),m=u("Link");return i(),a("div",y,[t("div",T,[t("div",S,[t("div",w,[t("h5",L,e(s.__("General Information")),1),t("div",A,[(i(!0),a(d,null,c(r.briefs,(n,_)=>(i(),a("div",{class:"border-bottom mb-2 pb-2",key:_},[t("small",C,e(n.label),1),t("div",N,e(n.value),1)]))),128))])])]),h(k,{task:l.task},null,8,["task"])]),t("div",j,[t("small",q,e(s.__("Title")),1),t("div",x,e(l.task.title),1),B,(i(!0),a(d,null,c(r.details,(n,_)=>(i(),a("div",{class:"mt-2 mb-2",key:_},[t("small",D,e(n.label),1),t("div",{class:"text-break",innerHTML:n.value},null,8,M),P]))),128)),l.task.task_status_id==l.data.task_status_submitted_for_approval?(i(),a("div",V,[o(e(s.__("Your content is ready for download"))+". "+e(s.__("Please click"))+" ",1),h(m,{href:s.route("customer.tasks.content",l.task.uuid)},{default:g(()=>[o(e(s.__("here")),1)]),_:1},8,["href"]),o(" "+e(s.__("to see your files"))+". ",1)])):f("",!0)])])}const I=b(p,[["render",F]]);export{I as default};

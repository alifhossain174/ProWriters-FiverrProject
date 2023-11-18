import b from"./AdditionalServiceSection.2bd28cd3.js";import{_ as f,c as l,b as t,t as e,a as d,w as r,A as g,F as c,q as m,f as o,d as y,r as k,o as i}from"./app.6486bb89.js";import"./bootstrap.esm.2333d793.js";const w={props:["task","data"],components:{AdditionalServiceSection:b},data(){return{briefs:[{label:this.__("Service"),value:this.task.service.name},{label:this.__("Work Type"),value:this.data.work_types[this.task.details.work_type_id]},{label:this.__("Assignment"),value:this.task.details.assignment.name},{label:this.__("Subject"),value:this.task.details.subject.name},{label:this.__("Language"),value:this.task.details.language.name},{label:this.__("Urgency"),value:this.task.urgency.name},{label:this.__("Quantity"),value:this.task.details.quantity+" "+this.data.unit_types[this.task.details.unit_name]},{label:this.__("Author Level"),value:this.task.author_level.name},{label:this.__("Service Level"),value:this.task.service_level.name},{label:this.__("Created"),value:this.localDateTime(this.task.created_at)},{label:this.__("Deadline"),value:this.localDateTime(this.task.dead_line)},{label:this.__("Deadline for Author"),value:this.localDateTime(this.task.dead_line_for_author)},{label:this.__("Revisions"),value:this.task.revisions_taken+" / "+this.task.revisions_allowed},{label:this.__("Total Price"),value:this.formatMoney(this.task.total)}],details:[{label:this.__("Quantity"),value:this.task.details.number_of_words_and_pages},{label:this.__("Content Goals & Things to Mention"),value:this.task.details.content_goals},{label:this.__("Grammatical Person"),value:this.task.details.grammatical_person.name},{label:this.__("Target Audience"),value:this.task.details.target_audience},{label:this.__("Target Keywords"),value:this.task.details.target_keywords},{label:this.__("Links to Example Content"),value:this.task.details.links_to_example_content},{label:this.__("Style & Tone"),value:this.task.details.style_and_tone},{label:this.__("Structure & Formatting Requirements"),value:this.task.details.structure_and_formatting_requirements},{label:this.__("Referencing & Linking Preferences"),value:this.task.details.referencing_and_linking_preferences},{label:this.__("Things to Avoid"),value:this.task.details.things_to_avoid},{label:this.__("Additional Notes"),value:this.task.details.additional_notes}]}}},S={class:"row"},T={class:"col-md-4"},A={class:"card"},L={class:"card-body"},N={class:"card-title"},C={class:"p-2 task-card"},D={class:"border-bottom mb-2 pb-2"},p={class:"text-muted fw-bolder"},M={class:"border-bottom mb-2 pb-2"},R={class:"text-muted fw-bolder"},B={key:0},E={key:1},P={class:"border-bottom mb-2 pb-2"},q={class:"text-muted fw-bolder"},V={key:0},F={key:1},G={key:1},I={class:"text-muted fw-bolder"},j={class:""},H={class:"col-md-8"},Q={class:"text-muted"},U={class:"lead"},W=t("hr",null,null,-1),K={class:"text-muted"},O=["innerHTML"],Y=t("hr",null,null,-1),z={key:0,class:"alert alert-success"};function J(s,X,a,Z,u,x){const n=k("Link"),v=k("AdditionalServiceSection");return i(),l("div",S,[t("div",T,[t("div",A,[t("div",L,[t("h5",N,e(s.__("General Information")),1),t("div",C,[t("div",D,[t("small",p,e(s.__("Customer")),1),t("div",null,[d(n,{href:s.route("admin.customers.show",a.task.customer.uuid)},{default:r(()=>[o(e(a.task.customer.full_name),1)]),_:1},8,["href"])])]),t("div",M,[t("small",R,e(s.__("Author")),1),a.task.author?(i(),l("div",B,[d(n,{href:s.route("admin.authors.show",a.task.author.uuid)},{default:r(()=>[o(e(a.task.author.full_name),1)]),_:1},8,["href"])])):(i(),l("div",E,e(s.__("Not assigned")),1))]),t("div",P,[t("small",q,e(s.__("Editor")),1),a.task.editor?(i(),l("div",V,[s.hasRole(s.ADMIN_ROLES.SUPER_ADMIN)?(i(),g(n,{key:0,href:s.route("admin.users.show",a.task.editor.uuid)},{default:r(()=>[o(e(a.task.editor.full_name),1)]),_:1},8,["href"])):(i(),l("span",F,e(a.task.editor.full_name),1))])):(i(),l("div",G,e(s.__("Not assigned")),1))]),(i(!0),l(c,null,m(u.briefs,(_,h)=>(i(),l("div",{class:"border-bottom mb-2 pb-2",key:h},[t("small",I,e(_.label),1),t("div",j,e(_.value),1)]))),128))])])]),d(v,{task:a.task},null,8,["task"])]),t("div",H,[t("small",Q,e(s.__("Title")),1),t("div",U,e(a.task.title),1),W,(i(!0),l(c,null,m(u.details,(_,h)=>(i(),l("div",{class:"mt-2 mb-2",key:h},[t("small",K,e(_.label),1),t("div",{class:"text-break",innerHTML:_.value},null,8,O),Y]))),128)),a.task.task_status_id==a.data.task_status_submitted_for_approval?(i(),l("div",z,[o(e(s.__("Your content is ready for download"))+". "+e(s.__("Please click"))+" ",1),d(n,{href:s.route("customer.tasks.content",a.task.uuid)},{default:r(()=>[o(e(s.__("here")),1)]),_:1},8,["href"]),o(" "+e(s.__("to see your files"))+". ",1)])):y("",!0)])])}const st=f(w,[["render",J]]);export{st as default};

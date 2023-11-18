import{_ as v,r as n,o as i,c as _,b as r,t as d,B as h,F as $,q as L,J as S,Y as j,a,Z as R,$ as W,a0 as D,d as b,D as V,f as y,A as F,w as ee,R as te}from"./app.6486bb89.js";import{S as G}from"./Select.0cc97eb8.js";import{S as se}from"./vanilla-picker.csp.273e51c7.js";import{I as C}from"./Input.744111e9.js";import{T as M}from"./TextArea.33080630.js";import"./CreateOrderStore.5cdac6d3.js";import{A as re}from"./Attachment.56188e8d.js";const oe={inject:["$store"]},ae={class:"btn-group d-flex",role:"group","aria-label":"Basic radio toggle button group"},le=["name","id","value"],ne=["for"];function de(t,s,m,p,f,e){const c=n("ErrorField");return i(),_("div",{class:h(e.$store.getters.constants.style.formGroup)},[r("label",{class:h(e.$store.getters.constants.style.formLabel)},d(t.__("Type of Work")),3),r("div",ae,[(i(!0),_($,null,L(e.$store.state.data.work_types[e.$store.state.form.service_id],(o,l)=>(i(),_($,{key:l},[S(r("input",{type:"radio",class:"btn-check",name:"btnradio_"+l,id:"btnradio_"+l,autocomplete:"off",value:o.id,"onUpdate:modelValue":s[0]||(s[0]=u=>e.$store.state.form.work_type_id=u)},null,8,le),[[j,e.$store.state.form.work_type_id]]),r("label",{class:"btn btn-outline-primary",for:"btnradio_"+l},d(o.name),9,ne)],64))),128))]),a(c,{name:"work_type_id"})],2)}const O=v(oe,[["render",de]]),ie={inject:["$store"]},ce={class:"mb-3"},_e={class:"form-label"};function ue(t,s,m,p,f,e){const c=n("v-select"),o=n("ErrorField");return i(),_("div",ce,[r("label",_e,d(t.__("Assignment")),1),a(c,{reduce:l=>l.id,modelValue:e.$store.state.form.assignment_id,"onUpdate:modelValue":s[0]||(s[0]=l=>e.$store.state.form.assignment_id=l),options:e.$store.state.serviceModel.assignments,label:"name",clearable:!1,searchable:!0},null,8,["reduce","modelValue","options"]),a(o,{name:"assignment_id"})])}const z=v(ie,[["render",ue]]),me={inject:["$store"]};function fe(t,s,m,p,f,e){const c=n("v-select"),o=n("ErrorField");return i(),_("div",{class:h(e.$store.getters.constants.style.formGroup)},[r("label",{class:h(e.$store.getters.constants.style.formLabel)},d(t.__("Subject")),3),a(c,{reduce:l=>l.id,modelValue:e.$store.state.form.subject_id,"onUpdate:modelValue":s[0]||(s[0]=l=>e.$store.state.form.subject_id=l),options:e.$store.state.serviceModel.subjects,label:"name",clearable:!1,searchable:!0},null,8,["reduce","modelValue","options"]),a(o,{name:"subject_id"})],2)}const K=v(me,[["render",fe]]),pe={inject:["$store"]};function he(t,s,m,p,f,e){const c=n("v-select"),o=n("ErrorField");return i(),_("div",{class:h(e.$store.getters.constants.style.formGroup)},[r("label",{class:h(e.$store.getters.constants.style.formLabel)},d(t.__("Academic Level")),3),a(c,{reduce:l=>l.id,modelValue:e.$store.state.form.academic_level_id,"onUpdate:modelValue":s[0]||(s[0]=l=>e.$store.state.form.academic_level_id=l),options:e.$store.state.data.academic_levels,label:"name",clearable:!1,searchable:!1},null,8,["reduce","modelValue","options"]),a(o,{name:"academic_level_id"})],2)}const ve=v(pe,[["render",he]]),be={inject:["$store"]};function $e(t,s,m,p,f,e){const c=n("v-select"),o=n("ErrorField");return i(),_("div",{class:h(e.$store.getters.constants.style.formGroup)},[r("label",{class:h(e.$store.getters.constants.style.formLabel)},d(t.__("Paper Formats")),3),a(c,{reduce:l=>l.id,modelValue:e.$store.state.form.paper_format_id,"onUpdate:modelValue":s[0]||(s[0]=l=>e.$store.state.form.paper_format_id=l),options:e.$store.state.data.paper_formats,label:"name",clearable:!1,searchable:!1},null,8,["reduce","modelValue","options"]),a(o,{name:"paper_format_id"})],2)}const ge=v(be,[["render",$e]]),ye={inject:["$store"]};function Ve(t,s,m,p,f,e){const c=n("v-select"),o=n("ErrorField");return i(),_("div",{class:h(e.$store.getters.constants.style.formGroup)},[r("label",{class:h(e.$store.getters.constants.style.formLabel)},d(t.__("Urgency")),3),a(c,{reduce:l=>l.id,modelValue:e.$store.state.form.urgency_id,"onUpdate:modelValue":s[0]||(s[0]=l=>e.$store.state.form.urgency_id=l),options:e.$store.state.data.urgencies,label:"name",clearable:!1},null,8,["reduce","modelValue","options"]),a(o,{name:"urgency_id"})],2)}const H=v(ye,[["render",Ve]]),Fe={props:["modelValue","min","step","allow_zero"],mounted(){this.modelValue||(this.selectedOption=this.min,this.triggerEmit())},data(){return{old_value:this.modelValue?this.modelValue:1,selectedOption:this.modelValue?this.modelValue:1}},watch:{modelValue:function(t,s){this.old_value=parseInt(t),this.selectedOption=parseInt(t)}},methods:{onBlur(t){var s=parseInt(this.selectedOption);s||(s=parseInt(this.old_value)),this.selectedOption=parseInt(s),this.triggerEmit()},changeNumber(s){var s=parseInt(s),p=parseInt(this.selectedOption),m=this.allow_zero?0:1;if(p+s<m||!Number.isInteger(s))return!1;var p=p+s;this.selectedOption=p,this.triggerEmit()},triggerEmit(){this.$emit("update:modelValue",this.selectedOption),this.$emit("updated",this.selectedOption)},isNumber:function(t){t=t||window.event;var s=t.which?t.which:t.keyCode;if(s>31&&(s<48||s>57))t.preventDefault();else return!0}}},Q=t=>(W("data-v-7bd1d0eb"),t=t(),D(),t),ke={class:"input-group"},Ae=Q(()=>r("i",{class:"fas fa-minus"},null,-1)),Se=[Ae],Le=Q(()=>r("i",{class:"fas fa-plus"},null,-1)),Ce=[Le];function Ue(t,s,m,p,f,e){return i(),_("div",null,[r("div",ke,[r("button",{type:"button",class:"btn btn-outline-secondary btn-minus",onClick:s[0]||(s[0]=c=>e.changeNumber(-m.step))},Se),S(r("input",{type:"number",class:"form-control form-control-sm text-center","aria-describedby":"basic-addon1","onUpdate:modelValue":s[1]||(s[1]=c=>f.selectedOption=c),onKeypress:s[2]||(s[2]=c=>e.isNumber(c)),onBlur:s[3]||(s[3]=c=>e.onBlur(c))},null,544),[[R,f.selectedOption]]),r("button",{type:"button",class:"btn btn-outline-secondary btn-plus",onClick:s[4]||(s[4]=c=>e.changeNumber(m.step))},Ce)])])}const q=v(Fe,[["render",Ue],["__scopeId","data-v-7bd1d0eb"]]),Ee={props:["options","default_value"],watch:{options:function(t){t&&(this.selectedOption=this.default_value?this.default_value:null)},selectedOption:function(t){this.$emit("update:modelValue",t)},default_value:function(t){this.selectedOption=t}},data(){return{selectedOption:this.default_value}}},Ie={class:"btn-group d-flex",role:"group","aria-label":"Basic radio toggle button group"},Pe=["value","id"],Te=["for"];function je(t,s,m,p,f,e){return i(),_("div",Ie,[(i(!0),_($,null,L(m.options,(c,o)=>(i(),_($,{key:o},[S(r("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>f.selectedOption=l),value:c.id,type:"radio",class:"btn-check",id:"btnradio_"+c.id,autocomplete:"off"},null,8,Pe),[[j,f.selectedOption]]),r("label",{class:"btn btn-outline-primary",for:"btnradio_"+c.id},d(c.name),9,Te)],64))),128))])}const Me=v(Ee,[["render",je]]),Oe={inject:["$store"],components:{InputSpinner:q,RadioButton:Me}},qe={class:"row g-3"},Ne={class:"col-md-6"},Be={class:"col-md-6"},we={key:0,class:"text-muted"};function xe(t,s,m,p,f,e){const c=n("InputSpinner"),o=n("RadioButton"),l=n("ErrorField");return i(),_($,null,[r("div",{class:h(e.$store.getters.constants.style.formGroup)},[r("label",{class:h(e.$store.getters.constants.style.formLabel)},d(t.__("Quantity")),3),r("div",{class:h(e.$store.getters.constants.style.formElement)},[r("div",qe,[r("div",Ne,[a(c,{modelValue:e.$store.state.form.quantity,"onUpdate:modelValue":s[0]||(s[0]=u=>e.$store.state.form.quantity=u),step:1,min:e.$store.state.serviceModel.minimum_order_quantity},null,8,["modelValue","min"])]),r("div",Be,[a(o,{options:e.$store.state.data.units_for_writing_services,default_value:e.$store.state.form.unit_name,modelValue:e.$store.state.form.unit_name,"onUpdate:modelValue":s[1]||(s[1]=u=>e.$store.state.form.unit_name=u)},null,8,["options","default_value","modelValue"])]),e.$store.state.form.unit_name=="page"?(i(),_("small",we,d(t.__("Approximately"))+" "+d(e.$store.state.number_of_words_per_page*e.$store.state.form.quantity)+" "+d(t.__("words")),1)):b("",!0)]),a(l,{name:"quantity"})],2)],2),e.$store.state.form.unit_name=="page"?(i(),_("div",{key:0,class:h(e.$store.getters.constants.style.formGroup)},[r("label",{class:h(e.$store.getters.constants.style.formLabel)},d(t.__("Spacing")),3),a(o,{options:e.$store.state.data.spacings_types,default_value:e.$store.state.form.spacing_type_id,modelValue:e.$store.state.form.spacing_type_id,"onUpdate:modelValue":s[2]||(s[2]=u=>e.$store.state.form.spacing_type_id=u)},null,8,["options","default_value","modelValue"]),a(l,{name:"spacing_type_id"})],2)):b("",!0)],64)}const J=v(Oe,[["render",xe]]),Re={inject:["$store"],components:{InputSpinner:q}};function We(t,s,m,p,f,e){const c=n("InputSpinner"),o=n("ErrorField");return i(),_("div",{class:h(e.$store.getters.constants.style.formGroup)},[r("label",{class:h(e.$store.getters.constants.style.formLabel)},d(t.__("Sources")),3),r("div",{class:h(e.$store.getters.constants.style.formElement)},[a(c,{modelValue:e.$store.state.form.number_of_sources,"onUpdate:modelValue":s[0]||(s[0]=l=>e.$store.state.form.number_of_sources=l),step:1,min:0,allow_zero:!0},null,8,["modelValue"]),a(o,{name:"number_of_sources"})],2)],2)}const De=v(Re,[["render",We]]),Ge={inject:["$store"],data(){return{priceTypes:{fixed:"fixed",percentage:"percentage"}}},methods:{getPrice(t){return t.price==0?this.$store.state.data.texts.Free:t.type==this.priceTypes.fixed?"+"+this.formatMoney(t.price):"+"+parseFloat(t.price).toFixed(2)+"%"},handleCustomerServiceLevel(t){this.$store.state.form.service_level_id=t.id}}},ze={key:0,class:"mt-4"},Ke={class:"card-title order-form-section-title"},He={class:"list-group list-group-horizontal-lg text-center"},Qe=["onClick"],Je={style:{"font-size":"12px"}};function Ye(t,s,m,p,f,e){return e.$store.state.data.service_levels&&Object.values(e.$store.state.data.service_levels).length?(i(),_("div",ze,[r("h5",Ke,d(t.__("Customer Service")),1),r("ul",He,[(i(!0),_($,null,L(e.$store.state.data.service_levels,c=>(i(),_("a",{key:c.id,onClick:V(o=>e.handleCustomerServiceLevel(c),["prevent"]),class:h(["list-group-item list-group-item-action",{active:e.$store.state.form.service_level_id==c.id}]),href:"#"},[r("div",null,[r("div",null,d(e.getPrice(c)),1),r("div",null,[r("strong",null,d(c.name),1)])]),r("small",Je,d(c.description),1)],10,Qe))),128))])])):b("",!0)}const N=v(Ge,[["render",Ye]]),Ze={inject:["$store"],data(){return{priceTypes:{fixed:"fixed",percentage:"percentage"},errors:{},preferred_author_code:this.$store.state.form.preferred_author_code,hidePreferredAuthorAddedSuccess:!1,authorLevelId:this.$store.state.form.author_level_id}},methods:{addError(t,s){this.errors[t]=s},removeError(t){delete this.errors[t]},handleSelectAuthorLevel(t){this.authorLevelId=t.id,t.id==this.$store.state.form.author_level_id||(this.preferred_author_code?alert(this.$store.state.data.texts.author_level_change_preferred_author_selected):this.$store.state.form.author_level_id=t.id)},handleRemovePreferredAuthor(){this.preferred_author_code=null,this.$store.state.form.preferred_author_code=null},handleSelectPreferredAuthor(){var t=this;t.removeError("preferred_author_code"),t.preferred_author_code&&t.$store.methods.getAuthorLevelById(t.preferred_author_code).then(function(s){s.status==1&&(s.data.status=="success"?(t.$store.state.form.preferred_author_code=t.preferred_author_code,t.hidePreferredAuthorAddedSuccess=!0,setTimeout(()=>t.hidePreferredAuthorAddedSuccess=!1,3e3)):s.data.status=="validation_error"?(t.addError("preferred_author_code",s.data.errors.preferred_author_code),t.preferred_author_code=null):s.data.status=="no_data_found"?t.preferred_author_code=null:(t.preferred_author_code=null,alert(this.$store.state.data.texts.something_went_wrong)))})}}},Xe=t=>(W("data-v-401294a5"),t=t(),D(),t),et={class:"mt-4"},tt={class:"card-title p-2",style:{"background-color":"#eee"}},st=["onClick"],rt=["name","id","value"],ot={class:"d-block text-muted"},at={key:0,class:"mb-3 row mt-4"},lt={class:"col-md-4 col-form-label text-md-end"},nt=["title"],dt=Xe(()=>r("i",{class:"fas fa-question-circle"},null,-1)),it=[dt],ct={class:"col-md-8"},_t={class:"input-group mb-3"},ut=["readonly"],mt=["disabled"],ft={key:0,class:"text-success"};function pt(t,s,m,p,f,e){const c=n("ErrorField");return i(),_("div",et,[r("h5",tt,d(t.__("Writer Levels")),1),(i(!0),_($,null,L(e.$store.state.data.author_levels,(o,l)=>(i(),_("div",{class:"list-group mx-0",key:o.id},[r("label",{class:"list-group-item d-flex gap-2",onClick:V(u=>e.handleSelectAuthorLevel(o),["prevent"])},[S(r("input",{class:"form-check-input flex-shrink-0",type:"radio",name:l,id:l,value:o.id,"onUpdate:modelValue":s[0]||(s[0]=u=>f.authorLevelId=u)},null,8,rt),[[j,f.authorLevelId]]),r("span",null,[r("div",null,d(o.name),1),r("small",ot,d(o.description),1)])],8,st)]))),128)),e.$store.state.authorLevelModel.allow_selecting_preferred_author_code?(i(),_("div",at,[r("label",lt,[y(d(t.__("Preferred Writer's ID"))+" ",1),r("span",{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:t.__("If you already have your favorite writer - type in his/her ID number here")},it,8,nt)]),r("div",ct,[r("div",_t,[S(r("input",{type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=o=>f.preferred_author_code=o),readonly:e.$store.state.form.preferred_author_code,onFocus:s[2]||(s[2]=o=>e.removeError("preferred_author_code"))},null,40,ut),[[R,f.preferred_author_code]]),e.$store.state.form.preferred_author_code?b("",!0):(i(),_("button",{key:0,onClick:s[3]||(s[3]=(...o)=>e.handleSelectPreferredAuthor&&e.handleSelectPreferredAuthor(...o)),class:"btn btn-outline-primary",type:"button",disabled:!f.preferred_author_code},d(t.__("Add")),9,mt)),e.$store.state.form.preferred_author_code?(i(),_("button",{key:1,onClick:s[4]||(s[4]=(...o)=>e.handleRemovePreferredAuthor&&e.handleRemovePreferredAuthor(...o)),class:"btn btn-outline-danger",type:"button"},d(t.__("Remove")),1)):b("",!0)]),f.hidePreferredAuthorAddedSuccess?(i(),_("div",ft,[r("small",null,d(t.__("Added")),1)])):b("",!0),a(c,{name:"preferred_author_code"})])])):b("",!0)])}const B=v(Ze,[["render",pt],["__scopeId","data-v-401294a5"]]),ht={inject:["$store"],components:{Attachment:re},methods:{handleAttachment(t){this.$store.state.form.files_data=t}}};function vt(t,s,m,p,f,e){const c=n("Attachment"),o=n("ErrorField");return i(),_("div",{class:h(e.$store.getters.constants.style.formGroup)},[r("label",{class:h(e.$store.getters.constants.style.formLabel)},d(t.__("Attachment")),3),a(c,{onOnChange:e.handleAttachment,allowed_file_extensions:e.$store.state.serviceModel.allowed_file_extensions,maximum_file_size:e.$store.state.serviceModel.maximum_file_size,maximum_number_of_files_to_upload:e.$store.state.serviceModel.maximum_number_of_files_to_upload,upload_attachment_url:e.$store.state.urls.upload_attachment,existing_files:e.$store.state.initial_records.files_data},null,8,["onOnChange","allowed_file_extensions","maximum_file_size","maximum_number_of_files_to_upload","upload_attachment_url","existing_files"]),a(o,{name:"files_data"})],2)}const w=v(ht,[["render",vt]]),bt={inject:["$store"],components:{InputSpinner:q},data(){return{priceTypes:{fixed:"fixed",percentage:"percentage",per_unit:"per_unit",per_entered_quantity:"per_entered_quantity"}}},methods:{formatMoneyFromNumber(t){return this.formatMoney(t,currencyConfig.currency)},getPrice(t){if(t.type==this.priceTypes.fixed)return t.price;if(t.type==this.priceTypes.percentage)return t.price/100*this.$store.state.base_price;if(t.type==this.priceTypes.per_unit)return t.price*this.$store.getters.getQuantityInLargestUnitOfMeasurement();if(t.type==this.priceTypes.per_entered_quantity)return t.price*t.quantity},additionalServiceChanged(t,s){var m=this.addedServiceList(t);m?this.$store.state.form.added_services.splice(m.index,1):(s.calculated_price=this.getPrice(s),this.$store.state.form.added_services.push(s))},updateAdditionalService(t){var s=this.addedServiceList(t.id);s&&(t.calculated_price=this.getPrice(t),this.$store.state.form.added_services[s.index]=t)},addedServiceList(t){var s=!1;return this.$store.state.form.added_services.map((m,p)=>{m.id==t&&(s={index:p,value:m})}),s},getServiceContainerClass(t){return{"btn-info":this.addedServiceList(t),"btn-outline-info":!this.addedServiceList(t)}}}},$t={key:0,class:"mt-4"},gt={class:"card-title"},yt={class:"row no-gutters"},Vt={class:"col-md-8"},Ft={class:"card-body"},kt={class:"card-title"},At={class:"text-muted"},St={key:0,class:"mt-3"},Lt={class:"col-md-4"},Ct={class:"d-flex justify-content-center align-items-center h-100"},Ut=["onClick"],Et={key:0},It=r("i",{class:"fas fa-check-circle"},null,-1),Pt={key:1},Tt=r("i",{class:"fas fa-plus"},null,-1);function jt(t,s,m,p,f,e){const c=n("InputSpinner"),o=n("ErrorField");return e.$store.state.serviceModel.additional_services&&Object.values(e.$store.state.serviceModel.additional_services).length?(i(),_("div",$t,[r("h5",gt,d(t.__("Additional Services")),1),(i(!0),_($,null,L(e.$store.state.serviceModel.additional_services,l=>(i(),_("div",{class:"card mb-3 mt-2",key:l.id},[r("div",yt,[r("div",Vt,[r("div",Ft,[r("div",kt,d(l.name),1),r("small",At,d(l.description),1),l.type==f.priceTypes.per_entered_quantity?(i(),_("div",St,[r("label",null,d(t.__(l.per_entered_quantity_label)),1),r("div",{class:h(e.$store.getters.constants.style.formGroup)},[r("div",{class:h(e.$store.getters.constants.style.formElement)},[a(c,{onUpdated:u=>e.updateAdditionalService(l),modelValue:l.quantity,"onUpdate:modelValue":u=>l.quantity=u,step:1,min:1},null,8,["onUpdated","modelValue","onUpdate:modelValue"])],2)],2)])):b("",!0)])]),r("div",Lt,[r("div",Ct,[r("a",{href:"#",onClick:V(u=>e.additionalServiceChanged(l.id,l),["prevent"])},[r("div",{class:h(["btn btn-sm btn-block",e.getServiceContainerClass(l.id)])},[e.addedServiceList(l.id)?(i(),_("span",Et,[It,y(" "+d(t.__("Added")),1)])):(i(),_("span",Pt,[Tt,y(" "+d(t.__("Add")),1)])),y(" "+d(e.formatMoneyFromNumber(e.getPrice(l))),1)],2)],8,Ut)])])])]))),128)),a(o,{name:"added_services"})])):b("",!0)}const x=v(bt,[["render",jt]]),Mt={inject:["$store"],components:{TextArea:M,Input:C,WorkTypeField:O,AssignmentField:z,SubjectField:K,AcademicLevelField:ve,PaperFormatField:ge,UrgencyField:H,WordCounter:J,SourcesField:De,ServiceLevels:N,AuthorLevels:B,AdditionalServicesField:x,AttachmentField:w}},Ot={class:"row"},qt={class:"col-md-6"},Nt={class:"col-md-6"},Bt={class:"row"},wt={class:"col-md-6"},xt={class:"col-md-6"},Rt={class:"card-title"},Wt=r("hr",null,null,-1);function Dt(t,s,m,p,f,e){const c=n("WorkTypeField"),o=n("AssignmentField"),l=n("SubjectField"),u=n("AcademicLevelField"),k=n("UrgencyField"),A=n("WordCounter"),g=n("PaperFormatField"),U=n("SourcesField"),E=n("Input"),I=n("TextArea"),P=n("AttachmentField"),Y=n("AuthorLevels"),Z=n("AdditionalServicesField"),X=n("ServiceLevels");return i(),_($,null,[a(c),a(o),a(l),r("div",Ot,[r("div",qt,[a(u)]),r("div",Nt,[a(k)])]),a(A),r("div",Bt,[r("div",wt,[a(g)]),r("div",xt,[a(U)])]),r("h5",Rt,d(t.__("Additional Paper Details")),1),Wt,a(E,{modelValue:e.$store.state.form.title,"onUpdate:modelValue":s[0]||(s[0]=T=>e.$store.state.form.title=T),name:"title",label:t.__("Title"),required:!0,placeholder:t.__("Enter the title of your paper")},null,8,["modelValue","label","placeholder"]),a(I,{name:"instruction",modelValue:e.$store.state.form.instruction,"onUpdate:modelValue":s[1]||(s[1]=T=>e.$store.state.form.instruction=T),label:t.__("Instructions"),placeholder:t.__("Please provide specific and detailed instructions about your paper")},null,8,["modelValue","label","placeholder"]),a(P),a(Y),a(Z),e.$store.state.is_on_bidding_mode?b("",!0):(i(),F(X,{key:0}))],64)}const Gt=v(Mt,[["render",Dt]]),zt={inject:["$store"],components:{TextArea:M,Input:C,Select:G}},Kt={class:"card-title"},Ht=r("hr",null,null,-1);function Qt(t,s,m,p,f,e){const c=n("Input"),o=n("TextArea"),l=n("Select");return i(),_($,null,[r("h5",Kt,d(t.__("Project Brief")),1),Ht,a(c,{modelValue:e.$store.state.form.title,"onUpdate:modelValue":s[0]||(s[0]=u=>e.$store.state.form.title=u),name:"title",label:t.__("Title"),required:!0,placeholder:t.__("Enter the title")},null,8,["modelValue","label","placeholder"]),a(o,{modelValue:e.$store.state.form.content_goals,"onUpdate:modelValue":s[1]||(s[1]=u=>e.$store.state.form.content_goals=u),name:"content_goals",label:t.__("Content Goals & Things to Mention"),required:!0},null,8,["modelValue","label"]),a(l,{modelValue:e.$store.state.form.grammatical_person_id,"onUpdate:modelValue":s[2]||(s[2]=u=>e.$store.state.form.grammatical_person_id=u),options:e.$store.state.data.grammatical_people,label:t.__("Grammatical Person"),name:"grammatical_person_id"},null,8,["modelValue","options","label"]),a(o,{modelValue:e.$store.state.form.target_audience,"onUpdate:modelValue":s[3]||(s[3]=u=>e.$store.state.form.target_audience=u),label:t.__("Target Audience"),name:"grammatical_person_id"},null,8,["modelValue","label"]),a(o,{modelValue:e.$store.state.form.target_keywords,"onUpdate:modelValue":s[4]||(s[4]=u=>e.$store.state.form.target_keywords=u),label:t.__("Target Keywords"),name:"target_keywords"},null,8,["modelValue","label"]),a(o,{modelValue:e.$store.state.form.links_to_example_content,"onUpdate:modelValue":s[5]||(s[5]=u=>e.$store.state.form.links_to_example_content=u),label:t.__("Links to Example Content"),name:"links_to_example_content"},null,8,["modelValue","label"]),a(o,{modelValue:e.$store.state.form.style_and_tone,"onUpdate:modelValue":s[6]||(s[6]=u=>e.$store.state.form.style_and_tone=u),label:t.__("Style & Tone"),name:"style_and_tone"},null,8,["modelValue","label"]),a(o,{modelValue:e.$store.state.form.structure_and_formatting_requirements,"onUpdate:modelValue":s[7]||(s[7]=u=>e.$store.state.form.structure_and_formatting_requirements=u),label:t.__("Structure & Formatting Requirements"),name:"structure_and_formatting_requirements"},null,8,["modelValue","label"]),a(o,{modelValue:e.$store.state.form.referencing_and_linking_preferences,"onUpdate:modelValue":s[8]||(s[8]=u=>e.$store.state.form.referencing_and_linking_preferences=u),label:t.__("Referencing & Linking Preferences"),name:"referencing_and_linking_preferences"},null,8,["modelValue","label"]),a(o,{modelValue:e.$store.state.form.things_to_avoid,"onUpdate:modelValue":s[9]||(s[9]=u=>e.$store.state.form.things_to_avoid=u),label:t.__("Things to Avoid"),name:"things_to_avoid"},null,8,["modelValue","label"]),a(o,{name:"additional_notes",modelValue:e.$store.state.form.additional_notes,"onUpdate:modelValue":s[10]||(s[10]=u=>e.$store.state.form.additional_notes=u),label:t.__("Additional Notes"),placeholder:t.__("Include any additional notes here")},null,8,["modelValue","label","placeholder"])],64)}const Jt=v(zt,[["render",Qt]]),Yt={inject:["$store"]},Zt={class:"mb-3"},Xt={class:"form-label"};function es(t,s,m,p,f,e){const c=n("v-select"),o=n("ErrorField");return i(),_("div",Zt,[r("label",Xt,d(t.__("Language")),1),a(c,{reduce:l=>l.id,modelValue:e.$store.state.form.language_id,"onUpdate:modelValue":s[0]||(s[0]=l=>e.$store.state.form.language_id=l),options:e.$store.state.data.content_writing_languages,label:"name",clearable:!1,searchable:!0},null,8,["reduce","modelValue","options"]),a(o,{name:"language_id"})])}const ts=v(Yt,[["render",es]]),ss={inject:["$store"],components:{WorkTypeField:O,AssignmentField:z,SubjectField:K,UrgencyField:H,WordCounter:J,ServiceLevels:N,AuthorLevels:B,ContentDetails:Jt,AdditionalServicesField:x,AttachmentField:w,LanguageField:ts}},rs={class:"row"},os={class:"col-md-6"},as={class:"col-md-6"};function ls(t,s,m,p,f,e){const c=n("WorkTypeField"),o=n("AssignmentField"),l=n("SubjectField"),u=n("LanguageField"),k=n("UrgencyField"),A=n("WordCounter"),g=n("ContentDetails"),U=n("AttachmentField"),E=n("AuthorLevels"),I=n("AdditionalServicesField"),P=n("ServiceLevels");return i(),_($,null,[a(c),a(o),a(l),r("div",rs,[r("div",os,[a(u)]),r("div",as,[a(k)])]),a(A),a(g),a(U),a(E),a(I),e.$store.state.is_on_bidding_mode?b("",!0):(i(),F(P,{key:0}))],64)}const ns=v(ss,[["render",ls]]),ds={inject:["$store"]},is={class:"mb-3"},cs={class:"form-label"},_s={class:"text-muted"};function us(t,s,m,p,f,e){const c=n("v-select"),o=n("ErrorField");return i(),_("div",is,[r("label",cs,d(t.__("Package")),1),a(c,{reduce:l=>l.id,modelValue:e.$store.state.form.assignment_id,"onUpdate:modelValue":s[0]||(s[0]=l=>e.$store.state.form.assignment_id=l),options:e.$store.state.serviceModel.assignments,label:"name",clearable:!1,searchable:!0},{option:ee(({name:l,description:u})=>[r("div",null,d(l),1),r("small",_s,d(u),1)]),_:1},8,["reduce","modelValue","options"]),a(o,{name:"assignment_id"})])}const ms=v(ds,[["render",us]]),fs={inject:["$store"],components:{TextArea:M,Input:C,WorkTypeField:O,AssignmentPackageField:ms,ServiceLevels:N,AuthorLevels:B,AdditionalServicesField:x,AttachmentField:w}},ps={class:"card"},hs={class:"card-header"},vs={class:"card-body border pt-4 pb-4 ps-2 pe-2 bg-light fs-8"},bs=["innerHTML"],$s={class:"card-title"},gs=r("hr",null,null,-1);function ys(t,s,m,p,f,e){const c=n("AssignmentPackageField"),o=n("Input"),l=n("TextArea"),u=n("AttachmentField"),k=n("AdditionalServicesField"),A=n("ServiceLevels");return i(),_($,null,[a(c),r("div",ps,[r("div",hs,d(t.__("Deliverables")),1),r("div",vs,[r("div",{class:"nl2br deliverables",innerHTML:e.$store.state.assignmentModel.deliverables},null,8,bs)])]),r("h5",$s,d(t.__("Instructions")),1),gs,a(o,{modelValue:e.$store.state.form.title,"onUpdate:modelValue":s[0]||(s[0]=g=>e.$store.state.form.title=g),name:"title",label:t.__("Title"),required:!0,placeholder:t.__("Enter the title of your paper")},null,8,["modelValue","label","placeholder"]),a(l,{name:"instruction",modelValue:e.$store.state.form.instruction,"onUpdate:modelValue":s[1]||(s[1]=g=>e.$store.state.form.instruction=g),label:t.__("Instructions"),placeholder:t.__("Please provide specific and detailed instructions about your paper")},null,8,["modelValue","label","placeholder"]),a(u),a(k),e.$store.state.is_on_bidding_mode?b("",!0):(i(),F(A,{key:0}))],64)}const Vs=v(fs,[["render",ys]]),Fs={inject:["$store"],props:["is_on_bidding_mode"],components:{Input:C},data(){return{base_price:0,service_level_price:0,sub_total:0,currencyPrecision:4}},computed:{calculateTotal:function(){let t=this.$store.getters.getBasicPrice();var s=parseFloat(this.getAdditionalServicesPrice()),m=parseFloat(this.$store.state.serviceLevelModel.price),p=t+m+s,f=p;return this.sub_total=p,this.service_level_price=m,isNaN(f)?0:this.formatMoneyFromNumber(f)}},methods:{getAdditionalServicesPrice:function(){var t=0;return this.$store.state.form.added_services&&this.$store.state.form.added_services.length>0&&this.$store.state.form.added_services.forEach(s=>{t+=parseFloat(s.calculated_price)}),t},calculatePercentage(t,s){var m=parseFloat(t)*parseFloat(s)/100;return Number(parseFloat(m).toFixed(this.currencyPrecision))},isObjectEmpty(t){return Object.keys(t).length===0&&t.constructor===Object},formatMoneyFromNumber(t){return this.formatMoney(t,currencyConfig.currency)},submit(){this.$store.state.data.is_edit_on_mode&&this.$store.state.data.is_admin?this.$inertia.patch(this.$store.state.urls.add_to_cart,this.$store.state.form):this.$inertia.post(this.$store.state.urls.add_to_cart,this.$store.state.form)},sendRequestForBid(){this.$inertia.post(this.$store.state.urls.request_for_bid,this.$store.state.form)},payLater(){this.$inertia.post(this.$store.state.urls.pay_later,this.$store.state.form)}}},ks={class:"shadow-sm p-3 mb-5 bg-white rounded"},As={key:0},Ss=r("hr",null,null,-1),Ls={class:"summary__row"},Cs={class:"table table-sm"},Us={class:"col-md-6"},Es={class:"col-md-6 text-end"},Is={class:"col-md-6"},Ps={class:"col-md-6 text-end"},Ts={key:0},js={colspan:"2"},Ms={class:"mt-3"},Os={style:{"font-weight":"bold"}},qs={class:"col-md-6"},Ns={class:"pb-2 pt-2 pl-2"},Bs={class:"col-md-6 text-end"},ws={class:"col-md-6"},xs={class:"col-md-6 text-end"},Rs={scope:"row",style:{width:"30%"}},Ws={style:{width:"80%"},class:"text-end"},Ds={key:0},Gs={class:"mb-3 form-check"},zs={class:"form-check-label",for:"is_total_overridden"},Ks={class:"d-grid gap-2"},Hs={key:0},Qs=r("i",{class:"fa-solid fa-pen-to-square"},null,-1),Js={key:1},Ys=r("i",{class:"fa-solid fa-plus"},null,-1),Zs=r("i",{class:"fa-solid fa-cart-plus"},null,-1),Xs=r("i",{class:"fa-solid fa-money-bill-wave"},null,-1),er={key:1},tr={class:"d-grid gap-2"},sr=r("i",{class:"fa-regular fa-paper-plane"},null,-1);function rr(t,s,m,p,f,e){const c=n("Input");return i(),_("div",ks,[e.$store.state.is_on_bidding_mode?(i(),_("div",er,[a(c,{modelValue:e.$store.state.form.budget,"onUpdate:modelValue":s[6]||(s[6]=o=>e.$store.state.form.budget=o),label:t.__("Enter your budget"),onKeypress:s[7]||(s[7]=o=>t.onlyNumber(o,e.$store.state.form.budget)),name:"budget"},null,8,["modelValue","label"]),r("div",tr,[r("button",{type:"button",class:"btn btn-sm btn-success",onClick:s[8]||(s[8]=V(o=>e.sendRequestForBid(),["prevent"]))},[sr,y(" "+d(t.__("Send request for Bid")),1)])])])):(i(),_("div",As,[r("h5",null,d(t.__("Order Summary")),1),Ss,r("div",null,d(e.$store.state.serviceModel.name),1),r("div",null,d(e.$store.state.assignmentModel.name),1),r("div",Ls,[r("span",null,d(t.__("Deadline"))+":",1),r("span",null,d(e.$store.state.form.dead_line),1)]),r("table",Cs,[r("tbody",null,[r("tr",null,[r("th",Us,d(t.__("Basic Price")),1),r("td",Es,d(e.formatMoneyFromNumber(e.$store.getters.getBasicPrice())),1)]),r("tr",null,[r("th",Is,d(t.__("Customer Service")),1),r("td",Ps,d(e.formatMoneyFromNumber(f.service_level_price)),1)]),e.$store.state.form.added_services&&e.$store.state.form.added_services.length>0?(i(),_("tr",Ts,[r("td",js,[r("div",Ms,[r("div",Os,d(t.__("Additional Services")),1),(i(!0),_($,null,L(e.$store.state.form.added_services,o=>(i(),_("div",{class:"row",key:o.id},[r("div",qs,[r("div",Ns,d(o.name),1)]),r("div",Bs,d(e.formatMoneyFromNumber(o.calculated_price)),1)]))),128))])])])):b("",!0),r("tr",null,[r("th",ws,d(t.__("Subtotal")),1),r("td",xs,d(e.formatMoneyFromNumber(f.sub_total)),1)]),r("tr",null,[r("th",Rs,d(t.__("Total")),1),r("td",Ws,d(e.calculateTotal),1)])])]),e.$store.state.data.is_admin?(i(),_("div",Ds,[r("div",Gs,[S(r("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.$store.state.form.is_total_overridden=o),type:"checkbox",class:"form-check-input",id:"is_total_overridden"},null,512),[[te,e.$store.state.form.is_total_overridden]]),r("label",zs,d(t.__("Override Total")),1)]),e.$store.state.form.is_total_overridden?(i(),F(c,{key:0,modelValue:e.$store.state.form.updated_total,"onUpdate:modelValue":s[1]||(s[1]=o=>e.$store.state.form.updated_total=o),label:t.__("Enter updated Total"),onKeypress:s[2]||(s[2]=o=>t.onlyNumber(o,e.$store.state.form.updated_total))},null,8,["modelValue","label"])):b("",!0)])):b("",!0),r("div",Ks,[e.$store.state.data.is_admin?(i(),_("button",{key:0,type:"button",class:"btn btn-outline-primary",onClick:s[3]||(s[3]=V(o=>e.submit(),["prevent"]))},[e.$store.state.data.is_edit_on_mode?(i(),_("span",Hs,[Qs,y(" "+d(t.__("Update")),1)])):(i(),_("span",Js,[Ys,y(" "+d(t.__("Create Task")),1)]))])):(i(),_("button",{key:1,type:"button",class:"btn btn-success",onClick:s[4]||(s[4]=V(o=>e.submit(),["prevent"]))},[Zs,y(" "+d(t.__("Add to cart")),1)])),!e.$store.state.data.is_edit_on_mode&&e.$store.state.data.customer_is_allowed_to_pay_later?(i(),_("button",{key:2,type:"button",class:"btn btn-outline-primary",onClick:s[5]||(s[5]=V(o=>e.payLater(),["prevent"]))},[Xs,y(" "+d(t.__("Pay Later")),1)])):b("",!0)])]))])}const or=v(Fs,[["render",rr]]),ar={inject:["$store"],components:{Academic:Gt,Content:ns,Resume:Vs,Select:G,SearchCustomer:se,OrderSummary:or},props:["data","initial_records","errors","is_on_bidding_mode"],watch:{errors:function(t){this.$store.state.errors=t}},mounted(){this.$store.state.urls=this.data.urls,this.$store.state.is_on_bidding_mode=this.is_on_bidding_mode,this.$store.state.data=this.data,this.$store.methods.setInitial(this.initial_records)}},lr={class:"row order-page"},nr={class:"col-md-7"},dr={class:"card"},ir={class:"card-body"},cr={class:"offset-md-1 col-md-4"},_r={class:"sticky-top fs-8"};function ur(t,s,m,p,f,e){const c=n("SearchCustomer"),o=n("Select"),l=n("Academic"),u=n("Content"),k=n("Resume"),A=n("OrderSummary");return i(),_("div",null,[r("form",{onSubmit:s[2]||(s[2]=V(()=>{},["prevent"]))},[r("div",lr,[r("div",nr,[r("div",dr,[r("div",ir,[m.data.is_admin?(i(),F(c,{key:0,options:m.data.customers,modelValue:e.$store.state.form.customer_id,"onUpdate:modelValue":s[0]||(s[0]=g=>e.$store.state.form.customer_id=g),label:t.__("Customer"),name:"customer_id"},null,8,["options","modelValue","label"])):b("",!0),a(o,{modelValue:e.$store.state.form.service_id,"onUpdate:modelValue":s[1]||(s[1]=g=>e.$store.state.form.service_id=g),options:m.data.services,label:t.__("Service"),name:"type"},null,8,["modelValue","options","label"]),e.$store.state.form.service_id==m.data.services_types.academic_writing?(i(),F(l,{key:1})):b("",!0),e.$store.state.form.service_id==m.data.services_types.content_writing?(i(),F(u,{key:2})):b("",!0),e.$store.state.form.service_id==m.data.services_types.resume_writing?(i(),F(k,{key:3})):b("",!0)])])]),r("div",cr,[r("div",_r,[a(A)])])])],32)])}const gr=v(ar,[["render",ur]]);export{gr as O};

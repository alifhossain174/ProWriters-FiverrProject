import{g as p,m as a,I as v}from"./app.2abe2877.js";class y{constructor(e,r,n,s){this.state=e,this.getters=r,this.serviceModel=n,this.previousServiceId=s,this.initialRecords=null,this.state.initial_records&&(this.initialRecords=this.state.initial_records)}getInitialValue(e,r){return this.initialRecords&&this.initialRecords.hasOwnProperty(e)&&(r=this.initialRecords[e]),r}workType(){let e=null;if(this.previousServiceId){let r=this.state.data.work_types[this.state.form.service_id];r&&(e=this.getInitialValue("work_type_id",r[0].id))}else if(this.state.form.work_type_id==null){let r=this.state.data.work_types[this.state.form.service_id];r&&(e=this.getInitialValue("work_type_id",r[0].id))}return e}assignment(){let e=null;return this.previousServiceId?e=this.serviceModel.assignments[0].id:this.state.form.assignment_id==null&&(e=this.getInitialValue("assignment_id",this.serviceModel.assignments[0].id)),e}subject(){let e=null;return this.previousServiceId?e=this.serviceModel.subjects[0].id:this.state.form.subject_id==null&&(e=this.getInitialValue("subject_id",this.serviceModel.subjects[0].id)),e}academicLevel(){let e=null;return this.previousServiceId?e=this.state.data.academic_levels[0].id:this.state.form.academic_level_id==null&&(e=this.getInitialValue("academic_level_id",this.state.data.academic_levels[0].id)),e}urgency(){let e=null,r=this.state.data.urgencies;return this.previousServiceId?e=r[r.length-1].id:this.state.form.urgency_id==null&&(e=this.getInitialValue("urgency_id",r[r.length-1].id)),e}paperFormat(){let e=null;return this.previousServiceId?e=this.state.data.paper_formats[0].id:this.state.form.paper_format_id==null&&(e=this.getInitialValue("paper_format_id",this.state.data.paper_formats[0].id)),e}spacingType(){let e=null,r=this.state.data.spacings_types;return this.previousServiceId?e=r[0].id:this.state.form.spacing_type_id==null&&(e=this.getInitialValue("spacing_type_id",r[0].id)),e}numberOfSources(){let e=0;return this.previousServiceId?e=this.state.form.number_of_sources:this.state.form.number_of_sources==null&&(e=this.getInitialValue("number_of_sources",0)),e}quantity(){let e=null;return this.previousServiceId?e=this.serviceModel.minimum_order_quantity:this.state.form.quantity==null&&(e=this.getInitialValue("quantity",this.serviceModel.minimum_order_quantity)),e}unit(){let e=null;return this.previousServiceId&&this.state.form.unit_name?e=this.state.form.unit_name:this.state.form.unit_name==null&&(e=this.getInitialValue("unit_name",this.state.data.units_for_writing_services[0].id)),e}freelancerLevel(){let e=this.state.form.freelancer_level_id;return this.state.form.freelancer_level_id==null&&(e=this.getInitialValue("freelancer_level_id",this.state.data.freelancer_levels[0].id)),e}grammaticalPerson(){let e=this.state.form.grammatical_person_id;return this.state.form.grammatical_person_id==null&&(e=this.getInitialValue("grammatical_person_id",this.state.data.grammatical_people[0].id)),e}language(){let e=this.state.form.language_id;if(this.state.form.language_id==null){let r=null;(r=this.getters.findInDb(this.state.data.content_writing_languages,"is_default_for_content_writing",!0))?e=r.id:e=null,e=this.getInitialValue("language_id",e)}return e}serviceLevel(){let e=this.state.form.service_level_id,r=this.state.data.service_levels,n=r[0].id;if(this.state.form.service_level_id==null){for(let s=0;s<r.length;s++){const d=r[s];d.is_default&&(n=d.id)}e=this.getInitialValue("service_level_id",n)}return e}}const c=Object.freeze({WRITING:"writing",EDITING:"editing",PROOFREADING:"proofreading"});class f{getFieldValues(e,r){e.form.work_type_id=r.workType(),e.form.assignment_id=r.assignment(),e.form.subject_id=r.subject(),e.form.academic_level_id=r.academicLevel(),e.form.urgency_id=r.urgency(),e.form.quantity=r.quantity(),e.form.paper_format_id=r.paperFormat(),e.form.unit_name=r.unit(),e.form.spacing_type_id=r.spacingType(),e.form.number_of_sources=r.numberOfSources()}getBasicPrice(e){let n=b(e.form.work_type_id,e.freelancerLevelModel)*h(e),s=n,d=[e.assignmentModel,e.academicLevelModel,e.subjectModel,e.urgencyModel];for(const u of d)s+=M(n,u);return s}}function h(i){let e=0;return i.form.unit_name=="page"?e=i.number_of_words_per_page*i.form.quantity:e=i.form.quantity,e}function b(i,e){let r=0;return i==c.WRITING?r=e.customer_price_per_word_writing:i==c.EDITING?r=e.customer_price_per_word_editing:i==c.PROOFREADING&&(r=e.customer_price_per_word_proofreading),parseFloat(r)}function M(i,e){return e.percentage?i*parseFloat(e.percentage)/100:0}class m{getFieldValues(e,r){e.form.work_type_id=r.workType(),e.form.assignment_id=r.assignment(),e.form.quantity=1}getBasicPrice(e){return parseFloat(e.assignmentModel.price)}}class g{getFieldValues(e,r){e.form.work_type_id=r.workType(),e.form.assignment_id=r.assignment(),e.form.subject_id=r.subject(),e.form.urgency_id=r.urgency(),e.form.quantity=r.quantity(),e.form.unit_name=r.unit(),e.form.spacing_type_id=r.spacingType(),e.form.language_id=r.language(),e.form.grammatical_person_id=r.grammaticalPerson(),e.form.title=null,e.form.content_goals=null,e.form.target_audience=null,e.form.target_keywords=null,e.form.links_to_example_content=null,e.form.style_and_tone=null,e.form.structure_and_formatting_requirements=null,e.form.referencing_and_linking_preferences=null,e.form.things_to_avoid=null,e.form.additional_notes=null}getBasicPrice(e){let n=I(e.form.work_type_id,e.freelancerLevelModel)*w(e),s=n,d=[e.assignmentModel,e.subjectModel,e.urgencyModel,e.languageModel];for(const u of d)s+=V(n,u);return s}}function w(i){let e=0;return i.form.unit_name=="page"?e=i.number_of_words_per_page*i.form.quantity:e=i.form.quantity,e}function I(i,e){let r=0;return i==c.WRITING?r=e.customer_price_per_word_writing:i==c.EDITING?r=e.customer_price_per_word_editing:i==c.PROOFREADING&&(r=e.customer_price_per_word_proofreading),parseFloat(r)}function V(i,e){return e.percentage?i*parseFloat(e.percentage)/100:0}const o={services:{content_writing:1,academic_writing:2,resume_writing:3}},t=p({is_on_bidding_mode:!1,serviceModel:{},subjectModel:{},assignmentModel:{},urgencyModel:{},workLevelModel:{},freelancerLevelModel:{},academicLevelModel:{},serviceLevelModel:{},languageModel:{},errors:{},number_of_words_per_page:275,base_price:0,urls:{},data:{},form:{},initial_records:null}),_={async setInitial(i){t.initial_records=i;var e={budget:null,is_on_bidding_mode:t.is_on_bidding_mode,id:null,customer_id:null,project_id:null,service_id:t.data.services[0].id,added_services:[],title:null,instruction:null,files_data:[],dead_line:"",freelancer_level_id:null,service_level_id:null,is_total_overridden:!1,updated_total:0};i.service_id&&(e.service_id=i.service_id,delete i.service_id),t.form=e,await v();for(let r in i)t.form[r]=i[r]},addError(i){t.errors[i.field]=i.message},setError(i){t.errors=i},removeError(i){t.errors[i]&&delete t.errors[i]}},l={constants:{style:{formGroup:"mb-3",formLabel:"form-label",formElement:"col-md-8"},priceType:{fixed:1,perWord:2,perPage:3}},findInDb(i,e,r){for(var n of i)if(n[e]==r)return n;return{}},convertQuantity(i,e,r){return e=="word"&&r=="page"?Math.ceil(i/t.number_of_words_per_page):e=="page"&&r=="word"?i*t.number_of_words_per_page:i},getQuantityInLargestUnitOfMeasurement(){let i=t.serviceModel.id;return(i==o.services.content_writing||i==o.services.academic_writing)&&t.form.unit_name=="word"?l.convertNumberOfWordsToPages():t.form.quantity},getNumberOfWordsBySpacingType(i){for(var e of t.data.spacings_types)if(e.id==i)return e.number_of_words;return 275},convertNumberOfPagesToWords:function(){return t.form.quantity*t.number_of_words_per_page},convertNumberOfWordsToPages:function(){return Math.ceil(t.form.quantity/t.number_of_words_per_page)},getBasicPrice(){let i=parseInt(t.serviceModel.id),e=null;if(i){i==o.services.academic_writing&&(e=new f),i==o.services.content_writing&&(e=new g),i==o.services.resume_writing&&(e=new m);let r=e.getBasicPrice(t);return t.base_price=r,r}return 0}};function q(i,e){var r=l.findInDb(t.data.services,"id",i);t.serviceModel=r;let n=new y(t,l,r,e),s=null;i==o.services.content_writing&&(s=new g),i==o.services.academic_writing&&(s=new f),i==o.services.resume_writing&&(s=new m),s.getFieldValues(t,n),t.form.freelancer_level_id=n.freelancerLevel(),t.form.service_level_id=n.serviceLevel(),e&&P()}function L(i){t.number_of_words_per_page=l.getNumberOfWordsBySpacingType(i)}function P(){t.form.added_services=[]}function T(i,e){t.freelancerLevelModel=l.findInDb(t.data.freelancer_levels,"id",i)}function D(i,e){t.serviceLevelModel=l.findInDb(t.data.service_levels,"id",i)}function F(i,e){t.languageModel=l.findInDb(t.data.content_writing_languages,"id",i)}function j(i,e){t.serviceModel.subjects?t.subjectModel=l.findInDb(t.serviceModel.subjects,"id",i):!i||i==0||i==""?t.subjectModel={}:t.subjectModel={}}function k(i,e){t.academicLevelModel=l.findInDb(t.data.academic_levels,"id",i)}function O(i,e){t.serviceModel.assignments?(t.assignmentModel=l.findInDb(t.serviceModel.assignments,"id",i),t.serviceModel.id==o.services.resume_writing&&(t.form.urgency_id=t.assignmentModel.urgency_id,t.form.freelancer_level_id=t.assignmentModel.freelancer_level_id)):t.assignmentModel=null}function N(i,e){let r=new Date,n=null;return e=="days"&&(n=r.setDate(r.getDate()+i)),e=="hours"&&(n=r.setHours(r.getHours()+i)),n&&(n=new Date(n).toLocaleString()),n}function R(i,e){t.urgencyModel=l.findInDb(t.data.urgencies,"id",i),t.form.dead_line=N(t.urgencyModel.value,t.urgencyModel.type)}a(()=>t.form.service_id,(i,e)=>{q(i,e)},{deep:!0});a(()=>t.form.assignment_id,(i,e)=>{O(i)},{deep:!0});a(()=>t.form.freelancer_level_id,(i,e)=>{T(i)},{deep:!0});a(()=>t.form.urgency_id,(i,e)=>{R(i)},{deep:!0});a(()=>t.form.spacing_type_id,(i,e)=>{L(i)},{deep:!0});a(()=>t.form.unit_name,(i,e)=>{i!=e&&(i=="page"&&!t.form.spacing_type_id&&(t.form.spacing_type_id=t.data.spacings_types[0].id),(i=="word"||i=="page")&&(e=="word"||e=="page")&&(t.form.quantity=l.convertQuantity(t.form.quantity,e,i)))},{deep:!0});a(()=>t.form.quantity,(i,e)=>{var r=i,n=t.serviceModel.minimum_order_quantity;t.form.unit_name=="page"&&(r=l.convertNumberOfPagesToWords()),r<n?_.addError({field:"quantity",message:"Minimum quantity "+n}):_.removeError("quantity")},{deep:!0});a(()=>t.form.service_level_id,(i,e)=>{D(i)},{deep:!0});a(()=>t.form.academic_level_id,(i,e)=>{k(i)},{deep:!0});a(()=>t.form.subject_id,(i,e)=>{j(i)},{deep:!0});a(()=>t.form.language_id,(i,e)=>{F(i)},{deep:!0});const E={state:t,methods:_,getters:l};export{E as s};

import{g as p,m as a,I as v}from"./app.707c49f0.js";class h{constructor(e,t,n,s){this.state=e,this.getters=t,this.serviceModel=n,this.previousServiceId=s,this.initialRecords=null,this.state.initial_records&&(this.initialRecords=this.state.initial_records)}getInitialValue(e,t){return this.initialRecords&&this.initialRecords.hasOwnProperty(e)&&(t=this.initialRecords[e]),t}workType(){let e=null;if(this.previousServiceId){let t=this.state.data.work_types[this.state.form.service_id];t&&(e=this.getInitialValue("work_type_id",t[0].id))}else if(this.state.form.work_type_id==null){let t=this.state.data.work_types[this.state.form.service_id];t&&(e=this.getInitialValue("work_type_id",t[0].id))}return e}assignment(){let e=null;return this.previousServiceId?e=this.serviceModel.assignments[0].id:this.state.form.assignment_id==null&&(e=this.getInitialValue("assignment_id",this.serviceModel.assignments[0].id)),e}subject(){let e=null;return this.previousServiceId?e=this.serviceModel.subjects[0].id:this.state.form.subject_id==null&&(e=this.getInitialValue("subject_id",this.serviceModel.subjects[0].id)),e}academicLevel(){let e=null;return this.previousServiceId?e=this.state.data.academic_levels[0].id:this.state.form.academic_level_id==null&&(e=this.getInitialValue("academic_level_id",this.state.data.academic_levels[0].id)),e}urgency(){let e=null,t=this.state.data.urgencies;return this.previousServiceId?e=t[t.length-1].id:this.state.form.urgency_id==null&&(e=this.getInitialValue("urgency_id",t[t.length-1].id)),e}paperFormat(){let e=null;return this.previousServiceId?e=this.state.data.paper_formats[0].id:this.state.form.paper_format_id==null&&(e=this.getInitialValue("paper_format_id",this.state.data.paper_formats[0].id)),e}spacingType(){let e=null,t=this.state.data.spacings_types;return this.previousServiceId?e=t[0].id:this.state.form.spacing_type_id==null&&(e=this.getInitialValue("spacing_type_id",t[0].id)),e}numberOfSources(){let e=0;return this.previousServiceId?e=this.state.form.number_of_sources:this.state.form.number_of_sources==null&&(e=this.getInitialValue("number_of_sources",0)),e}quantity(){let e=null;return this.previousServiceId?e=this.serviceModel.minimum_order_quantity:this.state.form.quantity==null&&(e=this.getInitialValue("quantity",this.serviceModel.minimum_order_quantity)),e}unit(){let e=null;return this.previousServiceId&&this.state.form.unit_name?e=this.state.form.unit_name:this.state.form.unit_name==null&&(e=this.getInitialValue("unit_name",this.state.data.units_for_writing_services[0].id)),e}authorLevel(){let e=this.state.form.author_level_id;return this.state.form.author_level_id==null&&(e=this.getInitialValue("author_level_id",this.state.data.author_levels[0].id)),e}grammaticalPerson(){let e=this.state.form.grammatical_person_id;return this.state.form.grammatical_person_id==null&&(e=this.getInitialValue("grammatical_person_id",this.state.data.grammatical_people[0].id)),e}language(){let e=this.state.form.language_id;if(this.state.form.language_id==null){let t=null;(t=this.getters.findInDb(this.state.data.content_writing_languages,"is_default_for_content_writing",!0))?e=t.id:e=null,e=this.getInitialValue("language_id",e)}return e}serviceLevel(){let e=this.state.form.service_level_id,t=this.state.data.service_levels,n=t[0].id;if(this.state.form.service_level_id==null){for(let s=0;s<t.length;s++){const d=t[s];d.is_default&&(n=d.id)}e=this.getInitialValue("service_level_id",n)}return e}}const u=Object.freeze({WRITING:"writing",EDITING:"editing",PROOFREADING:"proofreading"});class f{getFieldValues(e,t){e.form.work_type_id=t.workType(),e.form.assignment_id=t.assignment(),e.form.subject_id=t.subject(),e.form.academic_level_id=t.academicLevel(),e.form.urgency_id=t.urgency(),e.form.quantity=t.quantity(),e.form.paper_format_id=t.paperFormat(),e.form.unit_name=t.unit(),e.form.spacing_type_id=t.spacingType(),e.form.number_of_sources=t.numberOfSources()}getBasicPrice(e){let n=b(e.form.work_type_id,e.authorLevelModel)*y(e),s=n,d=[e.assignmentModel,e.academicLevelModel,e.subjectModel,e.urgencyModel];for(const _ of d)s+=M(n,_);return s}}function y(i){let e=0;return i.form.unit_name=="page"?e=i.number_of_words_per_page*i.form.quantity:e=i.form.quantity,e}function b(i,e){let t=0;return i==u.WRITING?t=e.customer_price_per_word_writing:i==u.EDITING?t=e.customer_price_per_word_editing:i==u.PROOFREADING&&(t=e.customer_price_per_word_proofreading),parseFloat(t)}function M(i,e){return e.percentage?i*parseFloat(e.percentage)/100:0}class m{getFieldValues(e,t){e.form.work_type_id=t.workType(),e.form.assignment_id=t.assignment(),e.form.quantity=1}getBasicPrice(e){return parseFloat(e.assignmentModel.price)}}class g{getFieldValues(e,t){e.form.work_type_id=t.workType(),e.form.assignment_id=t.assignment(),e.form.subject_id=t.subject(),e.form.urgency_id=t.urgency(),e.form.quantity=t.quantity(),e.form.unit_name=t.unit(),e.form.spacing_type_id=t.spacingType(),e.form.language_id=t.language(),e.form.grammatical_person_id=t.grammaticalPerson(),e.form.title=null,e.form.content_goals=null,e.form.target_audience=null,e.form.target_keywords=null,e.form.links_to_example_content=null,e.form.style_and_tone=null,e.form.structure_and_formatting_requirements=null,e.form.referencing_and_linking_preferences=null,e.form.things_to_avoid=null,e.form.additional_notes=null}getBasicPrice(e){let n=I(e.form.work_type_id,e.authorLevelModel)*w(e),s=n,d=[e.assignmentModel,e.subjectModel,e.urgencyModel,e.languageModel];for(const _ of d)s+=V(n,_);return s}}function w(i){let e=0;return i.form.unit_name=="page"?e=i.number_of_words_per_page*i.form.quantity:e=i.form.quantity,e}function I(i,e){let t=0;return i==u.WRITING?t=e.customer_price_per_word_writing:i==u.EDITING?t=e.customer_price_per_word_editing:i==u.PROOFREADING&&(t=e.customer_price_per_word_proofreading),parseFloat(t)}function V(i,e){return e.percentage?i*parseFloat(e.percentage)/100:0}const o={services:{content_writing:1,academic_writing:2,resume_writing:3}},r=p({is_on_bidding_mode:!1,serviceModel:{},subjectModel:{},assignmentModel:{},urgencyModel:{},workLevelModel:{},authorLevelModel:{},academicLevelModel:{},serviceLevelModel:{},languageModel:{},errors:{},number_of_words_per_page:275,base_price:0,urls:{},data:{},form:{},initial_records:null}),c={async setInitial(i){r.initial_records=i;var e={budget:null,is_on_bidding_mode:r.is_on_bidding_mode,id:null,customer_id:null,project_id:null,service_id:r.data.services[0].id,added_services:[],title:null,instruction:null,files_data:[],dead_line:"",author_level_id:null,service_level_id:null,is_total_overridden:!1,updated_total:0};i.service_id&&(e.service_id=i.service_id,delete i.service_id),r.form=e,await v();for(let t in i)r.form[t]=i[t]},addError(i){r.errors[i.field]=i.message},setError(i){r.errors=i},removeError(i){r.errors[i]&&delete r.errors[i]}},l={constants:{style:{formGroup:"mb-3",formLabel:"form-label",formElement:"col-md-8"},priceType:{fixed:1,perWord:2,perPage:3}},findInDb(i,e,t){for(var n of i)if(n[e]==t)return n;return{}},convertQuantity(i,e,t){return e=="word"&&t=="page"?Math.ceil(i/r.number_of_words_per_page):e=="page"&&t=="word"?i*r.number_of_words_per_page:i},getQuantityInLargestUnitOfMeasurement(){let i=r.serviceModel.id;return(i==o.services.content_writing||i==o.services.academic_writing)&&r.form.unit_name=="word"?l.convertNumberOfWordsToPages():r.form.quantity},getNumberOfWordsBySpacingType(i){for(var e of r.data.spacings_types)if(e.id==i)return e.number_of_words;return 275},convertNumberOfPagesToWords:function(){return r.form.quantity*r.number_of_words_per_page},convertNumberOfWordsToPages:function(){return Math.ceil(r.form.quantity/r.number_of_words_per_page)},getBasicPrice(){let i=parseInt(r.serviceModel.id),e=null;if(i){i==o.services.academic_writing&&(e=new f),i==o.services.content_writing&&(e=new g),i==o.services.resume_writing&&(e=new m);let t=e.getBasicPrice(r);return r.base_price=t,t}return 0}};function q(i,e){var t=l.findInDb(r.data.services,"id",i);r.serviceModel=t;let n=new h(r,l,t,e),s=null;i==o.services.content_writing&&(s=new g),i==o.services.academic_writing&&(s=new f),i==o.services.resume_writing&&(s=new m),s.getFieldValues(r,n),r.form.author_level_id=n.authorLevel(),r.form.service_level_id=n.serviceLevel(),e&&P()}function L(i){r.number_of_words_per_page=l.getNumberOfWordsBySpacingType(i)}function P(){r.form.added_services=[]}function T(i,e){r.authorLevelModel=l.findInDb(r.data.author_levels,"id",i)}function D(i,e){r.serviceLevelModel=l.findInDb(r.data.service_levels,"id",i)}function j(i,e){r.languageModel=l.findInDb(r.data.content_writing_languages,"id",i)}function k(i,e){r.serviceModel.subjects?r.subjectModel=l.findInDb(r.serviceModel.subjects,"id",i):!i||i==0||i==""?r.subjectModel={}:r.subjectModel={}}function O(i,e){r.academicLevelModel=l.findInDb(r.data.academic_levels,"id",i)}function F(i,e){r.serviceModel.assignments?(r.assignmentModel=l.findInDb(r.serviceModel.assignments,"id",i),r.serviceModel.id==o.services.resume_writing&&(r.form.urgency_id=r.assignmentModel.urgency_id,r.form.author_level_id=r.assignmentModel.author_level_id)):r.assignmentModel=null}function N(i,e){let t=new Date,n=null;return e=="days"&&(n=t.setDate(t.getDate()+i)),e=="hours"&&(n=t.setHours(t.getHours()+i)),n&&(n=new Date(n).toLocaleString()),n}function R(i,e){r.urgencyModel=l.findInDb(r.data.urgencies,"id",i),r.form.dead_line=N(r.urgencyModel.value,r.urgencyModel.type)}a(()=>r.form.service_id,(i,e)=>{q(i,e)},{deep:!0});a(()=>r.form.assignment_id,(i,e)=>{F(i)},{deep:!0});a(()=>r.form.author_level_id,(i,e)=>{T(i)},{deep:!0});a(()=>r.form.urgency_id,(i,e)=>{R(i)},{deep:!0});a(()=>r.form.spacing_type_id,(i,e)=>{L(i)},{deep:!0});a(()=>r.form.unit_name,(i,e)=>{i!=e&&(i=="page"&&!r.form.spacing_type_id&&(r.form.spacing_type_id=r.data.spacings_types[0].id),(i=="word"||i=="page")&&(e=="word"||e=="page")&&(r.form.quantity=l.convertQuantity(r.form.quantity,e,i)))},{deep:!0});a(()=>r.form.quantity,(i,e)=>{var t=i,n=r.serviceModel.minimum_order_quantity;r.form.unit_name=="page"&&(t=l.convertNumberOfPagesToWords()),t<n?c.addError({field:"quantity",message:"Minimum quantity "+n}):c.removeError("quantity")},{deep:!0});a(()=>r.form.service_level_id,(i,e)=>{D(i)},{deep:!0});a(()=>r.form.academic_level_id,(i,e)=>{O(i)},{deep:!0});a(()=>r.form.subject_id,(i,e)=>{k(i)},{deep:!0});a(()=>r.form.language_id,(i,e)=>{j(i)},{deep:!0});const W={state:r,methods:c,getters:l};export{W as s};

import k from"./SettingsLayout.aad8ae28.js";import S from"./ActionToolBar.7ad35adb.js";import{I as T}from"./Input.744111e9.js";import{S as U}from"./Select.0cc97eb8.js";import{_ as N,A as u,w as y,r as a,o as i,b as s,a as n,f as V,t as m,d as b,J as v,Z as B,a1 as x,c as g,q as I,F as A,D as C}from"./app.6486bb89.js";import"./Menu.0a37914a.js";import"./bootstrap.esm.2333d793.js";const E={components:{SettingsLayout:k,ActionToolBar:S,Input:T,Select:U},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}},h={class:"mb-3"},D={class:"form-label"},K=s("span",{class:"required"},"*",-1),L={class:"text-muted"},M={class:"mb-3"},F={class:"form-label"},P=s("span",{class:"required"},"*",-1),R={class:"input-group"},J=["value"];function O(t,o,r,Q,l,Z){const w=a("ActionToolBar"),q=a("v-select"),f=a("ValidationError"),_=a("Input"),d=a("Select"),c=a("SettingsLayout");return i(),u(c,{title:r.data.title},{default:y(()=>[s("form",{onSubmit:o[14]||(o[14]=C(e=>l.form.post(r.data.urls.submit_form),["prevent"]))},[n(w,{disable_save_button:l.form.processing,toolbar:l.toolbar},null,8,["disable_save_button","toolbar"]),s("div",h,[s("label",D,[V(m(t.__("Business Operation Type"))+" ",1),K]),n(q,{reduce:e=>e.id,modelValue:l.form.business_operation_type,"onUpdate:modelValue":o[0]||(o[0]=e=>l.form.business_operation_type=e),options:r.data.dropdowns.business_operation_types,label:"name",clearable:!1,searchable:!1},{option:y(({name:e,description:p})=>[s("div",null,m(e),1),s("small",L,m(p),1)]),_:1},8,["reduce","modelValue","options"]),n(f,{name:"business_operation_type"})]),l.form.business_operation_type!="direct_order"?(i(),u(_,{key:0,modelValue:l.form.commission_rate_from_bid,"onUpdate:modelValue":o[1]||(o[1]=e=>l.form.commission_rate_from_bid=e),name:"commission_rate_from_bid",label:t.__("Commission Rate"),required:!0,onKeypress:o[2]||(o[2]=e=>t.onlyNumber(e,l.form.commission_rate_from_bid)),note:t.__("In percentage"),tooltip:t.__("The platform fee to take as a percentage of earnings from biddings")},null,8,["modelValue","label","note","tooltip"])):b("",!0),n(_,{modelValue:l.form.number_of_revision_allowed,"onUpdate:modelValue":o[3]||(o[3]=e=>l.form.number_of_revision_allowed=e),name:"number_of_revision_allowed",label:t.__("Number of times a customer can request for revision"),note:t.__("Enter -1 for unlimited, 0 to disable"),required:!0},null,8,["modelValue","label","note"]),n(_,{modelValue:l.form.payout_amount_threshold,"onUpdate:modelValue":o[4]||(o[4]=e=>l.form.payout_amount_threshold=e),name:"payout_amount_threshold",label:t.__("Payout amount threshold"),required:!0,onKeypress:o[5]||(o[5]=e=>t.onlyNumber(e,l.form.payout_amount_threshold))},null,8,["modelValue","label"]),s("div",M,[s("label",F,[V(m(t.__("Time to add to the deadline for each revision request"))+" ",1),P]),s("div",R,[v(s("input",{"onUpdate:modelValue":o[6]||(o[6]=e=>l.form.dead_line_extension_by_value=e),type:"text",class:"form-control form-control-sm w-75",onKeypress:o[7]||(o[7]=e=>t.onlyNumber(e,l.form.dead_line_extension_by_value))},null,544),[[B,l.form.dead_line_extension_by_value]]),v(s("select",{class:"form-select form-select-sm w-25","onUpdate:modelValue":o[8]||(o[8]=e=>l.form.dead_line_extension_by_type=e)},[(i(!0),g(A,null,I(r.data.dropdowns.urgency_types,(e,p)=>(i(),g("option",{value:e.id,key:p},m(e.name),9,J))),128))],512),[[x,l.form.dead_line_extension_by_type]])]),n(f,{name:"value"})]),n(d,{options:r.data.dropdowns.quality_control_availability,modelValue:l.form.disable_quality_control,"onUpdate:modelValue":o[9]||(o[9]=e=>l.form.disable_quality_control=e),label:t.__("Disable Quality Control"),required:!0,name:"disable_quality_control"},null,8,["options","modelValue","label"]),n(d,{options:r.data.dropdowns.sales_tax_availability,modelValue:l.form.enable_sales_tax,"onUpdate:modelValue":o[10]||(o[10]=e=>l.form.enable_sales_tax=e),label:t.__("Enable Sales Tax"),name:"enable_sales_tax"},null,8,["options","modelValue","label"]),l.form.enable_sales_tax?(i(),u(_,{key:1,modelValue:l.form.sales_tax_rate,"onUpdate:modelValue":o[11]||(o[11]=e=>l.form.sales_tax_rate=e),name:"sales_tax_rate",label:t.__("Sales Tax Rate"),required:!0,onKeypress:o[12]||(o[12]=e=>t.onlyNumber(e,l.form.sales_tax_rate)),note:t.__("In Percentage")},null,8,["modelValue","label","note"])):b("",!0),l.form.business_operation_type!="bidding"?(i(),u(d,{key:2,options:r.data.dropdowns.find_work_for_authors_availability,modelValue:l.form.enable_self_assigning_tasks,"onUpdate:modelValue":o[13]||(o[13]=e=>l.form.enable_self_assigning_tasks=e),label:t.__("Allow authors to assign themselves tasks when direct ordering is enabled"),required:!0,name:"enable_self_assigning_tasks"},null,8,["options","modelValue","label"])):b("",!0)],32)]),_:1},8,["title"])}const $=N(E,[["render",O]]);export{$ as default};

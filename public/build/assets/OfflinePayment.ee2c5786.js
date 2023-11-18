import p from"./CheckoutLayout.24a90480.js";import{I as y}from"./Input.9153dc0b.js";import{_ as w,A as r,w as x,r as s,o as l,c,b as t,t as o,d as _,f as v,a as d,D as C}from"./app.40136f18.js";import"./vanilla-picker.csp.e27d2510.js";import{A as k}from"./Attachment.0af465c3.js";import"./bootstrap.esm.2333d793.js";import"./debounce.84e4095c.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";const V={props:["data","gateway"],components:{CheckoutLayout:p,Input:y,Attachment:k},data(){return{form:this.$inertia.form({reference:"",files:null}),formConfig:{preserveScroll:!0},tooltip:{attachment:this.__("Allowed file types")+" "+this.data.config.allowed_file_extensions}}},methods:{handleAttachment(a){this.form.files=a}}},A={key:0,class:"mb-4"},q={class:"fw-bolder"},z={class:"pre-formatted text-muted border p-2"},B={key:1,class:"mb-3"},I={for:"attachment",class:"form-label"},N=t("span",{class:"required"},"*",-1),S=["title"],E=t("i",{class:"fa-solid fa-circle-question"},null,-1),L=[E],M={class:"text-muted"},O={class:"d-grid gap-2"},D=["disabled"];function P(a,n,e,R,i,f){const u=s("Input"),h=s("Attachment"),g=s("ValidationError"),b=s("CheckoutLayout");return l(),r(b,{data:e.data,title:e.data.title,is_payment_gateway_page:!0},{default:x(()=>[e.gateway.instruction?(l(),c("div",A,[t("div",q,o(a.__("Instructions")),1),t("div",z,o(e.gateway.instruction),1)])):_("",!0),t("form",{onSubmit:n[1]||(n[1]=C(m=>i.form.post(e.data.urls.submit_form,i.formConfig),["prevent"]))},[e.gateway.settings.requires_transaction_number?(l(),r(u,{key:0,modelValue:i.form.reference,"onUpdate:modelValue":n[0]||(n[0]=m=>i.form.reference=m),label:a.__(e.gateway.settings.reference_field_label),name:"reference",required:!0},null,8,["modelValue","label"])):_("",!0),e.gateway.settings.requires_uploading_attachment?(l(),c("div",B,[t("label",I,[v(o(a.__(e.gateway.settings.attachment_field_label))+" ",1),N,t("span",{class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:i.tooltip.attachment},L,8,S)]),d(h,{onOnChange:f.handleAttachment,upload_attachment_url:e.data.config.urls.upload_attachment,allowed_file_extensions:e.data.config.allowed_file_extensions,maximum_number_of_files_to_upload:e.data.config.maximum_number_of_files_to_upload,maximum_file_size:e.data.config.maximum_file_size,existing_files:e.data.config.existing_files},null,8,["onOnChange","upload_attachment_url","allowed_file_extensions","maximum_number_of_files_to_upload","maximum_file_size","existing_files"]),d(g,{name:"files"}),t("div",null,[t("small",M,o(a.__("Maximum file size"))+": "+o(e.data.config.maximum_file_size)+" "+o(a.__("MB")),1)])])):_("",!0),t("div",O,[t("button",{disabled:i.form.processing,type:"submit",class:"btn btn-success"},o(a.__("Submit Request")),9,D)])],32)]),_:1},8,["data","title"])}const Q=w(V,[["render",P]]);export{Q as default};

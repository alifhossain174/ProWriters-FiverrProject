import{A as f}from"./Attachment.cacf57f5.js";import{_ as u,a6 as h,A as p,w as b,r as o,o as n,a as i,c as g,b as m,f as x,t as A,d as C}from"./app.1d2673ab.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./bootstrap.esm.2333d793.js";const k={props:["task","data"],components:{Attachment:f,Modal:h},data(){return{form:this.$inertia.form({attachments:[]},{preserveState:!1},{resetOnSuccess:!0})}},methods:{handleAttachment(e){this.form.attachments=e},submitForm(){this.form.post(this.data.config.urls.submit_form)}}},V={key:0,class:"mt-3"},w=["disabled"],y=m("i",{class:"far fa-paper-plane"},null,-1);function z(e,s,t,B,l,a){const r=o("Attachment"),_=o("ValidationError"),c=o("Modal");return n(),p(c,{title:e.__("Upload attachment"),size:"regular"},{default:b(()=>[i(r,{onOnChange:a.handleAttachment,upload_attachment_url:t.data.config.urls.upload_attachment,allowed_file_extensions:t.data.config.allowed_file_extensions,maximum_number_of_files_to_upload:t.data.config.maximum_number_of_files_to_upload,maximum_file_size:t.data.config.maximum_file_size,existing_files:t.data.config.existing_files},null,8,["onOnChange","upload_attachment_url","allowed_file_extensions","maximum_number_of_files_to_upload","maximum_file_size","existing_files"]),i(_,{name:"files"}),this.form.attachments.length>0?(n(),g("div",V,[m("button",{onClick:s[0]||(s[0]=(...d)=>a.submitForm&&a.submitForm(...d)),disabled:l.form.processing,class:"btn btn-sm btn-primary",type:"submit"},[y,x(" "+A(e.__("Submit")),1)],8,w)])):C("",!0)]),_:1},8,["title"])}const F=u(k,[["render",z]]);export{F as default};

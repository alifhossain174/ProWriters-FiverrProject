import u from"./TaskShowLayout.1fd61b01.js";import{C as h}from"./CommentMessage.529c5bc4.js";import{S as k}from"./SendMessage.55aa6831.js";import{_ as b,g as c,y as g,f as l,o as s,c as i,r as p,t as a,h as r,b as e,a as f,F as v}from"./app.f4b2b251.js";import"./Countdown.b6097b39.js";import"./bootstrap.esm.2333d793.js";import"./AttachmentList.bce7c7f6.js";import"./Attachment.ee590a48.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./vue-quill.snow.1e07b934.js";const y={props:["tab","task","data","works"],components:{TaskShowLayout:u,CommentMessage:h,SendMessage:k},computed:{isSubmitWorkButtonEnabled(){return this.data.statuses_allows_submitting_work.includes(this.task.task_status_id)}},updated(){this.displaySubmitWork=!1},data(){return{displaySubmitWork:!1}},methods:{handleAttachment(t){this.form.files=t}}},C={key:0,class:"h4 text-center bg-light"},S={class:"row g-0"},w={class:"col-md-4 btask-end"},B={class:"bg-light p-2"},T={class:"col-md-4 btask-end"},q={class:"bg-light p-2"},L={class:"col-md-4"},M={class:"bg-light p-2"},N={key:0,class:"text-center"};function V(t,W,o,A,E,F){const m=l("CommentMessage"),_=l("TaskShowLayout");return s(),c(_,{task:o.task,activeTab:o.tab},{default:g(()=>[(s(!0),i(v,null,p(o.works,(n,d)=>(s(),i("div",{class:"mt-2 mb-5 fs-8",key:d},[o.works.length>1?(s(),i("div",C,a(t.__("Submission"))+" : "+a(o.works.length-d),1)):r("",!0),e("div",S,[e("div",w,[e("div",B,a(t.__("Content Creator")),1),f(m,{comment:n},null,8,["comment"])]),e("div",T,[e("div",q,a(t.__("QA")),1),n.quality_assurance?(s(),c(m,{key:0,comment:n.quality_assurance},null,8,["comment"])):r("",!0)]),e("div",L,[e("div",M,a(t.__("Customer")),1),n.revision_request?(s(),c(m,{key:0,comment:n.revision_request},null,8,["comment"])):r("",!0)])])]))),128)),o.works.length==0?(s(),i("div",N,a(t.__("No work has been submitted yet")),1)):r("",!0)]),_:1},8,["task","activeTab"])}const O=b(y,[["render",V]]);export{O as default};
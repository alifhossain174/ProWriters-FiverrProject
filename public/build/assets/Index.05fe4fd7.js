import b from"./TaskShowLayout.5ecbed2d.js";import{C as f}from"./CommentMessage.044f52bc.js";import{S as g}from"./SendMessage.371f2097.js";import{_ as p,A as r,w as _,r as m,o as e,b as t,f as v,t as a,d as i,c as l,q as y,a as w,F as S}from"./app.15906225.js";import"./Countdown.d84acab0.js";import"./bootstrap.esm.2333d793.js";import"./AttachmentList.fc8adbd0.js";import"./Attachment.054ecd9d.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./vue-quill.snow.f1cb4fc2.js";const C={props:["tab","task","data","works"],components:{TaskShowLayout:b,CommentMessage:f,SendMessage:g},computed:{isSubmitWorkButtonEnabled(){return this.data.statuses_allows_submitting_work.includes(this.task.task_status_id)}},updated(){this.displaySubmitWork=!1},data(){return{displaySubmitWork:!1}},methods:{handleAttachment(s){this.form.files=s}}},B={class:"d-flex justify-content-between"},L=t("div",null,null,-1),T=t("i",{class:"fas fa-file-upload"},null,-1),q={key:0,class:"h4 text-center bg-light"},N={class:"row g-0"},W={class:"col-md-4 btask-end"},M={class:"bg-light p-2"},V={class:"col-md-4 btask-end"},A={class:"bg-light p-2"},D={class:"col-md-4"},E={class:"bg-light p-2"},x={key:0,class:"text-center"};function F(s,j,o,I,Q,u){const h=m("DialogLink"),c=m("CommentMessage"),k=m("TaskShowLayout");return e(),r(k,{task:o.task,activeTab:o.tab},{default:_(()=>[t("div",B,[L,t("div",null,[u.isSubmitWorkButtonEnabled?(e(),r(h,{key:0,href:o.data.urls.submit_work,class:"btn btn-sm btn-primary me-2"},{default:_(()=>[T,v(" "+a(s.__("Submit Work")),1)]),_:1},8,["href"])):i("",!0)])]),(e(!0),l(S,null,y(o.works,(n,d)=>(e(),l("div",{class:"btask mt-2 mb-5 fs-8",key:d},[o.works.length>1?(e(),l("div",q,a(s.__("Submission"))+" : "+a(o.works.length-d),1)):i("",!0),t("div",N,[t("div",W,[t("div",M,a(s.__("Content Creator")),1),w(c,{comment:n},null,8,["comment"])]),t("div",V,[t("div",A,a(s.__("QA")),1),n.quality_assurance?(e(),r(c,{key:0,comment:n.quality_assurance},null,8,["comment"])):i("",!0)]),t("div",D,[t("div",E,a(s.__("Customer")),1),n.revision_request?(e(),r(c,{key:0,comment:n.revision_request},null,8,["comment"])):i("",!0)])])]))),128)),o.works.length==0?(e(),l("div",x,a(s.__("No work has been submitted yet")),1)):i("",!0)]),_:1},8,["task","activeTab"])}const Y=p(C,[["render",F]]);export{Y as default};

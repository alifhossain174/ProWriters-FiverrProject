import{_ as L,c as o,a as u,b as t,w as v,t as a,F as c,q as h,f as p,D as g,r as _,o as r,d as V}from"./app.6486bb89.js";import{T as C}from"./TextArea.33080630.js";import{S as T}from"./Select.0cc97eb8.js";import{S as j}from"./SubmitButton.6b08448a.js";import"./vanilla-picker.csp.273e51c7.js";import"./bootstrap.esm.2333d793.js";import"./debounce.2741a44f.js";const w={props:["data","applicant"],components:{Select:T,TextArea:C,SubmitButton:j},data(){return{form:this.$inertia.form({applicant_status_id:this.applicant.applicant_status_id,note:this.applicant.note}),enrollForm:this.$inertia.form({author_level_id:null}),formConfig:{preserveScroll:!0},subjects:[this.getValue(this.applicant.subject_1,"name"),this.getValue(this.applicant.subject_2,"name"),this.getValue(this.applicant.subject_3,"name"),this.getValue(this.applicant.subject_4,"name"),this.getValue(this.applicant.subject_4,"name")],services:[this.getValue(this.applicant.service_1,"name"),this.getValue(this.applicant.service_2,"name"),this.getValue(this.applicant.service_3,"name")],general:[{label:this.__("Applicant ID"),value:this.applicant.number},{label:this.__("Email"),value:this.applicant.email},{label:this.__("Phone"),value:this.applicant.phone},{label:this.__("Education Level"),value:this.applicant.education_level.name},{label:this.__("Years of experience"),value:this.applicant.years_of_experience},{label:this.__("Address"),value:this.applicant.address},{label:this.__("City"),value:this.applicant.city},{label:this.__("State"),value:this.applicant.state},{label:this.__("Country"),value:this.applicant.country.name}],links:[{label:this.__("Blog"),value:this.getValue(this.applicant,"blog_url")},{label:this.__("Portfolio"),value:this.getValue(this.applicant,"online_portfolio_url")},{label:this.__("Linkedin"),value:this.getValue(this.applicant,"linked_in_url")}]}},methods:{getValue(e,s){return e&&Object.hasOwn(e,s)?e[s]:null},enrollAsAuthor(){let e=this;this.confirmDialog(e.__("Yes, Enroll"),()=>{e.$inertia.post(route("admin.applicants.enroll",e.applicant.uuid),e.formConfig)})},destroy(){this.deleteConfirmDialog(this,route("admin.applicants.destroy",this.applicant.uuid))}}},B={class:"container page-container"},F={class:"row"},D={class:"col-md-8"},E={class:"card"},N={class:"card-body"},P=["innerHTML"],H=t("hr",null,null,-1),U={class:"table table-bordered"},M={class:"text-muted text-left"},q={class:"text-left"},I={class:"mt-4"},O=t("hr",null,null,-1),Y={class:"mt-4"},G={key:0,class:"me-2 mb-2"},R=t("hr",null,null,-1),z={class:"mt-4"},J={class:"table table-bordered"},K={class:"text-muted"},Q=["href"],W=t("i",{class:"fa-solid fa-up-right-from-square"},null,-1),X={class:"col-md-4"},Z={class:"card"},x={class:"card-body"},$={class:"card"},tt={class:"card-header"},et={class:"card-body"},lt={class:"d-grid gap-2"},at=t("i",{class:"fa-solid fa-trash-can"},null,-1);function st(e,s,i,nt,n,m){const y=_("AppHead"),S=_("Link"),k=_("PageTitle"),b=_("Select"),A=_("TextArea"),f=_("SubmitButton");return r(),o(c,null,[u(y,{title:i.data.title},null,8,["title"]),t("div",B,[u(k,{title:i.data.title},{default:v(()=>[u(S,{class:"btn btn-sm btn-light",href:e.route("admin.applicants.index")},{default:v(()=>[p(a(e.__("back to"))+" "+a(e.__("List of Applicants")),1)]),_:1},8,["href"])]),_:1},8,["title"]),t("div",F,[t("div",D,[t("div",E,[t("div",N,[t("h5",null,a(e.__("Career Summary")),1),t("div",{class:"pre-formatted",innerHTML:i.applicant.bio},null,8,P),H,t("h5",null,a(e.__("General Information")),1),t("table",U,[(r(!0),o(c,null,h(n.general,(l,d)=>(r(),o("tr",{key:d},[t("td",M,a(l.label),1),t("td",q,a(l.value),1)]))),128))]),t("h5",I,a(e.__("Service")),1),p(" "+a(i.applicant.service.name)+" ",1),O,t("h5",Y,a(e.__("Subjects")),1),(r(!0),o(c,null,h(i.data.subjects,(l,d)=>(r(),o(c,{key:d},[l?(r(),o("span",G,a(l.name),1)):V("",!0)],64))),128)),R,t("h5",z,a(e.__("Links")),1),t("table",J,[t("thead",null,[t("tr",null,[t("th",null,a(e.__("Name")),1),t("th",null,a(e.__("URL")),1)])]),t("tbody",null,[(r(!0),o(c,null,h(n.links,(l,d)=>(r(),o("tr",{key:d},[t("td",K,a(l.label),1),t("td",null,[l.value?(r(),o("a",{key:0,target:"_blank",href:l.value},[p(a(e.__("Visit"))+" ",1),W],8,Q)):V("",!0)])]))),128))])])])])]),t("div",X,[t("div",Z,[t("div",x,[t("form",{onSubmit:s[2]||(s[2]=g(l=>n.form.patch(e.route("admin.applicants.update",i.applicant.uuid)),["prevent"]))},[u(b,{label:e.__("Status"),modelValue:n.form.applicant_status_id,"onUpdate:modelValue":s[0]||(s[0]=l=>n.form.applicant_status_id=l),options:i.data.dropdowns.statuses,name:"applicant_status_id"},null,8,["label","modelValue","options"]),u(A,{modelValue:n.form.note,"onUpdate:modelValue":s[1]||(s[1]=l=>n.form.note=l),label:e.__("Note"),name:"note"},null,8,["modelValue","label"]),u(f,{disabled:n.form.processing},null,8,["disabled"])],32)])]),t("div",$,[t("div",tt,a(e.__("Enrollment")),1),t("div",et,[t("form",{onSubmit:s[4]||(s[4]=g(l=>n.enrollForm.post(e.route("admin.applicants.enroll",i.applicant.uuid)),["prevent"]))},[u(b,{label:e.__("Author Level"),modelValue:n.enrollForm.author_level_id,"onUpdate:modelValue":s[3]||(s[3]=l=>n.enrollForm.author_level_id=l),options:i.data.dropdowns.author_levels,name:"author_level_id"},null,8,["label","modelValue","options"]),u(f,{button_text:e.__("Enroll as Author"),disabled:n.enrollForm.processing},null,8,["button_text","disabled"]),t("small",null,a(e.__("Please note that applicant record will be removed after enrollment")),1)],32)])]),t("div",lt,[t("button",{onClick:s[5]||(s[5]=(...l)=>m.destroy&&m.destroy(...l)),class:"btn btn-outline-danger"},[at,p(" "+a(e.__("Delete")),1)])])])])])],64)}const pt=L(w,[["render",st]]);export{pt as default};

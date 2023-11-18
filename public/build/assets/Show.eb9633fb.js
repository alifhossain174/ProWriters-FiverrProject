import{_ as C,c as o,a as _,b as e,w as v,t as a,F as c,q as m,f as p,D as g,r as d,o as r,d as V}from"./app.571265cd.js";import{T as F}from"./TextArea.1f4fa0b9.js";import{S as A}from"./Select.7a1d9270.js";import{S as T}from"./SubmitButton.59cbcabd.js";import"./vanilla-picker.csp.d11a8b31.js";import"./bootstrap.esm.2333d793.js";import"./debounce.94acad4c.js";const j={props:["data","applicant"],components:{Select:A,TextArea:F,SubmitButton:T},data(){return{form:this.$inertia.form({applicant_status_id:this.applicant.applicant_status_id,note:this.applicant.note}),enrollForm:this.$inertia.form({freelancer_level_id:null}),formConfig:{preserveScroll:!0},subjects:[this.getValue(this.applicant.subject_1,"name"),this.getValue(this.applicant.subject_2,"name"),this.getValue(this.applicant.subject_3,"name"),this.getValue(this.applicant.subject_4,"name"),this.getValue(this.applicant.subject_4,"name")],services:[this.getValue(this.applicant.service_1,"name"),this.getValue(this.applicant.service_2,"name"),this.getValue(this.applicant.service_3,"name")],general:[{label:this.__("Applicant ID"),value:this.applicant.number},{label:this.__("Email"),value:this.applicant.email},{label:this.__("Phone"),value:this.applicant.phone},{label:this.__("Education Level"),value:this.applicant.education_level.name},{label:this.__("Years of experience"),value:this.applicant.years_of_experience},{label:this.__("Address"),value:this.applicant.address},{label:this.__("City"),value:this.applicant.city},{label:this.__("State"),value:this.applicant.state},{label:this.__("Country"),value:this.applicant.country.name}],links:[{label:this.__("Blog"),value:this.getValue(this.applicant,"blog_url")},{label:this.__("Portfolio"),value:this.getValue(this.applicant,"online_portfolio_url")},{label:this.__("Linkedin"),value:this.getValue(this.applicant,"linked_in_url")}]}},methods:{getValue(t,s){return t&&Object.hasOwn(t,s)?t[s]:null},enrollAsFreelancer(){let t=this;this.confirmDialog(t.__("Yes, Enroll"),()=>{t.$inertia.post(route("admin.applicants.enroll",t.applicant.uuid),t.formConfig)})},destroy(){this.deleteConfirmDialog(this,route("admin.applicants.destroy",this.applicant.uuid))}}},w={class:"container page-container"},B={class:"row"},D={class:"col-md-8"},E={class:"card"},N={class:"card-body"},P=["innerHTML"],H=e("hr",null,null,-1),U={class:"table table-bordered"},M={class:"text-muted text-left"},q={class:"text-left"},I={class:"mt-4"},O=e("hr",null,null,-1),Y={class:"mt-4"},G={key:0,class:"me-2 mb-2"},R=e("hr",null,null,-1),z={class:"mt-4"},J={class:"table table-bordered"},K={class:"text-muted"},Q=["href"],W=e("i",{class:"fa-solid fa-up-right-from-square"},null,-1),X={class:"col-md-4"},Z={class:"card"},x={class:"card-body"},$={class:"card"},ee={class:"card-header"},te={class:"card-body"},le={class:"d-grid gap-2"},ae=e("i",{class:"fa-solid fa-trash-can"},null,-1);function se(t,s,i,ne,n,h){const y=d("AppHead"),S=d("Link"),k=d("PageTitle"),b=d("Select"),L=d("TextArea"),f=d("SubmitButton");return r(),o(c,null,[_(y,{title:i.data.title},null,8,["title"]),e("div",w,[_(k,{title:i.data.title},{default:v(()=>[_(S,{class:"btn btn-sm btn-light",href:t.route("admin.applicants.index")},{default:v(()=>[p(a(t.__("back to"))+" "+a(t.__("List of Applicants")),1)]),_:1},8,["href"])]),_:1},8,["title"]),e("div",B,[e("div",D,[e("div",E,[e("div",N,[e("h5",null,a(t.__("Career Summary")),1),e("div",{class:"pre-formatted",innerHTML:i.applicant.bio},null,8,P),H,e("h5",null,a(t.__("General Information")),1),e("table",U,[(r(!0),o(c,null,m(n.general,(l,u)=>(r(),o("tr",{key:u},[e("td",M,a(l.label),1),e("td",q,a(l.value),1)]))),128))]),e("h5",I,a(t.__("Service")),1),p(" "+a(i.applicant.service.name)+" ",1),O,e("h5",Y,a(t.__("Subjects")),1),(r(!0),o(c,null,m(i.data.subjects,(l,u)=>(r(),o(c,{key:u},[l?(r(),o("span",G,a(l.name),1)):V("",!0)],64))),128)),R,e("h5",z,a(t.__("Links")),1),e("table",J,[e("thead",null,[e("tr",null,[e("th",null,a(t.__("Name")),1),e("th",null,a(t.__("URL")),1)])]),e("tbody",null,[(r(!0),o(c,null,m(n.links,(l,u)=>(r(),o("tr",{key:u},[e("td",K,a(l.label),1),e("td",null,[l.value?(r(),o("a",{key:0,target:"_blank",href:l.value},[p(a(t.__("Visit"))+" ",1),W],8,Q)):V("",!0)])]))),128))])])])])]),e("div",X,[e("div",Z,[e("div",x,[e("form",{onSubmit:s[2]||(s[2]=g(l=>n.form.patch(t.route("admin.applicants.update",i.applicant.uuid)),["prevent"]))},[_(b,{label:t.__("Status"),modelValue:n.form.applicant_status_id,"onUpdate:modelValue":s[0]||(s[0]=l=>n.form.applicant_status_id=l),options:i.data.dropdowns.statuses,name:"applicant_status_id"},null,8,["label","modelValue","options"]),_(L,{modelValue:n.form.note,"onUpdate:modelValue":s[1]||(s[1]=l=>n.form.note=l),label:t.__("Note"),name:"note"},null,8,["modelValue","label"]),_(f,{disabled:n.form.processing},null,8,["disabled"])],32)])]),e("div",$,[e("div",ee,a(t.__("Enrollment")),1),e("div",te,[e("form",{onSubmit:s[4]||(s[4]=g(l=>n.enrollForm.post(t.route("admin.applicants.enroll",i.applicant.uuid)),["prevent"]))},[_(b,{label:t.__("Freelancer Level"),modelValue:n.enrollForm.freelancer_level_id,"onUpdate:modelValue":s[3]||(s[3]=l=>n.enrollForm.freelancer_level_id=l),options:i.data.dropdowns.freelancer_levels,name:"freelancer_level_id"},null,8,["label","modelValue","options"]),_(f,{button_text:t.__("Enroll as Freelancer"),disabled:n.enrollForm.processing},null,8,["button_text","disabled"]),e("small",null,a(t.__("Please note that applicant record will be removed after enrollment")),1)],32)])]),e("div",le,[e("button",{onClick:s[5]||(s[5]=(...l)=>h.destroy&&h.destroy(...l)),class:"btn btn-outline-danger"},[ae,p(" "+a(t.__("Delete")),1)])])])])])],64)}const pe=C(j,[["render",se]]);export{pe as default};

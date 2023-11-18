import{I as j}from"./Input.d3e8f5e0.js";import{T as y}from"./TextArea.67869acb.js";import{C as h}from"./CheckBox.da7ffbd8.js";import{S}from"./Select.ee436180.js";import{S as U}from"./SubmitButton.d931e8b3.js";import{_ as w,c as f,a as s,y as k,b as t,t as u,h as _,w as C,g as c,F as L,f as b,o as d}from"./app.b345893e.js";import"./vanilla-picker.csp.57f392b9.js";import{P as q}from"./Phone.39ba4442.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const P={props:["data"],components:{Input:j,TextArea:y,SubmitButton:U,Phone:q,Select:S,CheckBox:h},computed:{displaySubjects(){return this.form.service_id_1&&this.form.service_id_1!=this.data.service_types.resume_writing}},data(){return{text_optional:"("+this.__("Optional")+")",form:this.$inertia.form({first_name:null,last_name:null,bio:null,email:null,phone:null,address:null,state:null,city:null,country_code:null,timezone:null,education_level_id:null,years_of_experience:null,service_id_1:null,subject_id_1:null,subject_id_2:null,subject_id_3:null,subject_id_4:null,subject_id_5:null,language_id_1:null,language_id_2:null,blog_url:null,online_portfolio_url:null,linked_in_url:null}),formConfig:{preserveScroll:!1,onSuccess:()=>this.form.reset()}}},methods:{serviceChanged(){this.form.subject_id_1=null,this.form.subject_id_2=null,this.form.subject_id_3=null,this.form.subject_id_4=null,this.form.subject_id_5=null}}},B=["content"],T=["content"],z=["content"],A=["content"],E={class:"container page-container"},I={class:"row"},N={class:"col-md-12"},H={class:"card-title"},F=t("hr",null,null,-1),M={key:0,class:"alert alert-success",role:"alert"},R={class:"col-md-6"},O={class:"border rounded-3 p-3"},D={class:"float-none w-auto px-3 author-application-form-title"},Y={class:"text-muted"},G=t("div",{class:"mb-4"},null,-1),J={class:"row"},K={class:"col-md-6"},Q={class:"col-md-6"},W={class:"w-100 p-2 bg-light mb-2 h5"},X={class:"p-2"},Z={class:"w-100 p-2 bg-light mb-2 h5"},x={class:"p-2"},$={class:"row"},ee={class:"col-md-6"},le={class:"col-md-6"},oe={class:"w-100 p-2 bg-light mb-2 h5"},te={class:"p-2"},ne={class:"col-md-6"},ae=["innerHTML"];function se(n,l,a,ie,e,m){const p=b("AppHead"),r=b("Input"),V=b("TextArea"),i=b("Select"),g=b("Phone"),v=b("SubmitButton");return d(),f(L,null,[s(p,{title:a.data.page.additional_data.meta_title},{default:k(()=>[t("meta",{name:"description",content:a.data.page.additional_data.meta_description},null,8,B),t("meta",{name:"keywords",content:a.data.page.additional_data.meta_keywords},null,8,T),t("meta",{property:"og:title",content:a.data.page.additional_data.meta_title},null,8,z),t("meta",{property:"og:image",content:n.asset(a.data.page.additional_data.meta_image)},null,8,A)]),_:1},8,["title"]),t("div",E,[t("div",I,[t("div",N,[t("h2",H,u(a.data.page.title),1),F,a.data.success_message?(d(),f("div",M,u(a.data.success_message),1)):_("",!0)]),t("div",R,[t("fieldset",O,[t("legend",D,u(a.data.page.additional_data.form_title),1),t("small",Y,u(a.data.page.additional_data.form_sub_title),1),G,t("form",{onSubmit:l[23]||(l[23]=C(o=>e.form.post(n.route("public.author.application.store"),e.formConfig),["prevent"]))},[t("div",J,[t("div",K,[s(r,{modelValue:e.form.first_name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.form.first_name=o),label:n.__("First Name"),name:"first_name",required:!0},null,8,["modelValue","label"])]),t("div",Q,[s(r,{modelValue:e.form.last_name,"onUpdate:modelValue":l[1]||(l[1]=o=>e.form.last_name=o),label:n.__("Last Name"),name:"last_name",required:!0},null,8,["modelValue","label"])])]),s(V,{modelValue:e.form.bio,"onUpdate:modelValue":l[2]||(l[2]=o=>e.form.bio=o),label:n.__("Career summary"),name:"bio"},null,8,["modelValue","label"]),t("div",W,u(n.__("Experience & Skill")),1),t("div",X,[s(i,{searchable:!0,clearable:!0,options:a.data.dropdowns.education_levels,modelValue:e.form.education_level_id,"onUpdate:modelValue":l[3]||(l[3]=o=>e.form.education_level_id=o),label:n.__("Education Level"),required:!0,name:"education_level_id"},null,8,["options","modelValue","label"]),s(i,{searchable:!0,clearable:!1,options:a.data.dropdowns.experiences,modelValue:e.form.years_of_experience,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form.years_of_experience=o),label:n.__("Years of Experience"),required:!0,name:"years_of_experience"},null,8,["options","modelValue","label"]),s(i,{searchable:!0,clearable:!1,options:a.data.dropdowns.services,modelValue:e.form.service_id_1,"onUpdate:modelValue":l[5]||(l[5]=o=>e.form.service_id_1=o),label:n.__("Type of service you are interested in"),required:!0,name:"service_id_1",onChange:m.serviceChanged},null,8,["options","modelValue","label","onChange"]),m.displaySubjects?(d(),c(i,{key:0,searchable:!0,clearable:!1,options:a.data.dropdowns.subjects[e.form.service_id_1],modelValue:e.form.subject_id_1,"onUpdate:modelValue":l[6]||(l[6]=o=>e.form.subject_id_1=o),label:n.__("Primary Subject"),required:!0,name:"subject_id_1"},null,8,["options","modelValue","label"])):_("",!0),m.displaySubjects?(d(),c(i,{key:1,searchable:!0,clearable:!0,options:a.data.dropdowns.subjects[e.form.service_id_1],modelValue:e.form.subject_id_2,"onUpdate:modelValue":l[7]||(l[7]=o=>e.form.subject_id_2=o),label:n.__("Subject 2"),name:"subject_id_2",note:e.text_optional},null,8,["options","modelValue","label","note"])):_("",!0),m.displaySubjects?(d(),c(i,{key:2,searchable:!0,clearable:!0,options:a.data.dropdowns.subjects[e.form.service_id_1],modelValue:e.form.subject_id_3,"onUpdate:modelValue":l[8]||(l[8]=o=>e.form.subject_id_3=o),label:n.__("Subject 3"),name:"subject_id_3",note:e.text_optional},null,8,["options","modelValue","label","note"])):_("",!0),m.displaySubjects?(d(),c(i,{key:3,searchable:!0,clearable:!0,options:a.data.dropdowns.subjects[e.form.service_id_1],modelValue:e.form.subject_id_4,"onUpdate:modelValue":l[9]||(l[9]=o=>e.form.subject_id_4=o),label:n.__("Subject 4"),name:"subject_id_4",note:e.text_optional},null,8,["options","modelValue","label","note"])):_("",!0),m.displaySubjects?(d(),c(i,{key:4,searchable:!0,clearable:!0,options:a.data.dropdowns.subjects[e.form.service_id_1],modelValue:e.form.subject_id_5,"onUpdate:modelValue":l[10]||(l[10]=o=>e.form.subject_id_5=o),label:n.__("Subject 5"),name:"subject_id_5",note:e.text_optional},null,8,["options","modelValue","label","note"])):_("",!0),s(i,{searchable:!0,clearable:!0,options:a.data.dropdowns.languages,modelValue:e.form.language_id_1,"onUpdate:modelValue":l[11]||(l[11]=o=>e.form.language_id_1=o),label:n.__("Primary Language"),required:!0,name:"language_id_1"},null,8,["options","modelValue","label"]),s(i,{searchable:!0,clearable:!0,options:a.data.dropdowns.languages,modelValue:e.form.language_id_2,"onUpdate:modelValue":l[12]||(l[12]=o=>e.form.language_id_2=o),label:n.__("Secondary Language"),name:"language_id_2"},null,8,["options","modelValue","label"])]),t("div",Z,u(n.__("Contact Information")),1),t("div",x,[s(r,{type:"email",modelValue:e.form.email,"onUpdate:modelValue":l[13]||(l[13]=o=>e.form.email=o),label:n.__("Email"),name:"email",required:!0},null,8,["modelValue","label"]),s(g,{modelValue:e.form.phone,"onUpdate:modelValue":l[14]||(l[14]=o=>e.form.phone=o),label:n.__("Phone"),name:"phone"},null,8,["modelValue","label"]),s(r,{modelValue:e.form.address,"onUpdate:modelValue":l[15]||(l[15]=o=>e.form.address=o),label:n.__("Address"),name:"address"},null,8,["modelValue","label"]),t("div",$,[t("div",ee,[s(r,{modelValue:e.form.city,"onUpdate:modelValue":l[16]||(l[16]=o=>e.form.city=o),label:n.__("City"),name:"city"},null,8,["modelValue","label"])]),t("div",le,[s(r,{modelValue:e.form.state,"onUpdate:modelValue":l[17]||(l[17]=o=>e.form.state=o),label:n.__("State"),name:"state"},null,8,["modelValue","label"])])]),s(i,{searchable:!0,reduce_key:"code",clearable:!0,options:a.data.dropdowns.countries,modelValue:e.form.country_code,"onUpdate:modelValue":l[18]||(l[18]=o=>e.form.country_code=o),label:n.__("Country"),required:!0,name:"country_code"},null,8,["options","modelValue","label"]),s(i,{searchable:!0,options:a.data.dropdowns.timezones,modelValue:e.form.timezone,"onUpdate:modelValue":l[19]||(l[19]=o=>e.form.timezone=o),label:n.__("Timezone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"])]),t("div",oe,u(n.__("Links")),1),t("div",te,[s(r,{modelValue:e.form.blog_url,"onUpdate:modelValue":l[20]||(l[20]=o=>e.form.blog_url=o),label:n.__("Blog URL"),name:"blog_url"},null,8,["modelValue","label"]),s(r,{modelValue:e.form.online_portfolio_url,"onUpdate:modelValue":l[21]||(l[21]=o=>e.form.online_portfolio_url=o),label:n.__("Online Portfolio URL"),name:"online_portfolio_url"},null,8,["modelValue","label"]),s(r,{modelValue:e.form.linked_in_url,"onUpdate:modelValue":l[22]||(l[22]=o=>e.form.linked_in_url=o),label:n.__("Linkedin Public Profile URL"),name:"linked_in_url"},null,8,["modelValue","label"])]),s(v,{disabled:e.form.disabled},null,8,["disabled"])],32)])]),t("div",ne,[t("div",{class:"",innerHTML:a.data.page.content},null,8,ae)])])])],64)}const ge=w(P,[["render",se]]);export{ge as default};

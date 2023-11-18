import{I as V}from"./Input.e65d7326.js";import{T as v}from"./TextArea.3edc019d.js";import{C as c}from"./CheckBox.b26ad33b.js";import{S as y}from"./Select.0af50086.js";import{S as U}from"./SubmitButton.71e94644.js";import{_ as j,A as w,w as S,r as d,o as g,b as m,a as r,t as a,D as P}from"./app.94ede146.js";import"./vanilla-picker.csp.da387394.js";import{P as k}from"./Phone.f1ee5e87.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b3e602c6.js";const q={props:["data"],components:{Input:V,TextArea:v,SubmitButton:U,Phone:k,Select:y,CheckBox:c},data(){return{form:this.$inertia.form({send_notification_email:null,password:null,first_name:null,last_name:null,email:null,phone:null,bio:null,address:null,state:null,city:null,country_code:null,timezone:null,payment_method:null,payment_method_details:null,education_level_id:null,years_of_experience:null,freelancer_level_id:null,service_id_1:null,service_id_2:null,service_id_3:null,subject_id_1:null,subject_id_2:null,subject_id_3:null,subject_id_4:null,subject_id_5:null,blog_url:null,online_portfolio_url:null,linked_in_url:null})}}},C={class:"row"},h={class:"col"},B={class:"col"},L={class:"w-100 p-2 bg-light mb-2 h5"},z={class:"p-2"},A={class:"row"},E={class:"col-md-6"},T={class:"col-md-6"},I={class:"w-100 p-2 bg-light mb-2 h5"},N={class:"p-2"},M={class:"row"},R={class:"col-md-6"},D={class:"col-md-6"},F={class:"w-100 p-2 bg-light mb-2 h5"},O={class:"p-2"},Y={class:"w-100 p-2 bg-light mb-2 h5"},G={class:"p-2"},H={class:"mt-4"};function J(n,e,i,K,l,Q){const u=d("Input"),s=d("Select"),_=d("Phone"),t=d("TextArea"),b=d("CheckBox"),p=d("SubmitButton"),f=d("Modal");return g(),w(f,{title:i.data.title,size:"small"},{default:S(()=>[m("form",{onSubmit:e[28]||(e[28]=P(o=>l.form.post(i.data.urls.submit_form,n.formConfig),["prevent"]))},[m("div",C,[m("div",h,[r(u,{modelValue:l.form.first_name,"onUpdate:modelValue":e[0]||(e[0]=o=>l.form.first_name=o),label:n.__("First Name"),name:"first_name",required:!0},null,8,["modelValue","label"])]),m("div",B,[r(u,{modelValue:l.form.last_name,"onUpdate:modelValue":e[1]||(e[1]=o=>l.form.last_name=o),label:n.__("Last Name"),name:"last_name",required:!0},null,8,["modelValue","label"])])]),r(u,{type:"email",modelValue:l.form.email,"onUpdate:modelValue":e[2]||(e[2]=o=>l.form.email=o),label:n.__("Email"),name:"email",required:!0},null,8,["modelValue","label"]),r(u,{type:"text",modelValue:l.form.password,"onUpdate:modelValue":e[3]||(e[3]=o=>l.form.password=o),label:n.__("Password"),name:"password",required:!0},null,8,["modelValue","label"]),r(s,{searchable:!0,options:i.data.dropdowns.timezones,modelValue:l.form.timezone,"onUpdate:modelValue":e[4]||(e[4]=o=>l.form.timezone=o),label:n.__("Timezone"),required:!0,name:"timezone"},null,8,["options","modelValue","label"]),r(_,{modelValue:l.form.phone,"onUpdate:modelValue":e[5]||(e[5]=o=>l.form.phone=o),label:n.__("Phone"),name:"phone"},null,8,["modelValue","label"]),m("div",L,a(n.__("Location")),1),m("div",z,[r(t,{modelValue:l.form.address,"onUpdate:modelValue":e[6]||(e[6]=o=>l.form.address=o),label:n.__("Address"),name:"address"},null,8,["modelValue","label"]),m("div",A,[m("div",E,[r(u,{modelValue:l.form.city,"onUpdate:modelValue":e[7]||(e[7]=o=>l.form.city=o),label:n.__("City"),name:"city"},null,8,["modelValue","label"])]),m("div",T,[r(u,{modelValue:l.form.state,"onUpdate:modelValue":e[8]||(e[8]=o=>l.form.state=o),label:n.__("State"),name:"state"},null,8,["modelValue","label"])])]),r(s,{searchable:!0,reduce_key:"code",clearable:!0,options:i.data.dropdowns.countries,modelValue:l.form.country_code,"onUpdate:modelValue":e[9]||(e[9]=o=>l.form.country_code=o),label:n.__("Country"),required:!0,name:"country"},null,8,["options","modelValue","label"])]),m("div",I,a(n.__("Experience & Skill")),1),m("div",N,[m("div",M,[m("div",R,[r(s,{searchable:!0,clearable:!0,options:i.data.dropdowns.education_levels,modelValue:l.form.education_level_id,"onUpdate:modelValue":e[10]||(e[10]=o=>l.form.education_level_id=o),label:n.__("Level of Education"),required:!0,name:"education_level_id"},null,8,["options","modelValue","label"])]),m("div",D,[r(u,{type:"number",modelValue:l.form.years_of_experience,"onUpdate:modelValue":e[11]||(e[11]=o=>l.form.years_of_experience=o),label:n.__("Years of Experience"),name:"years_of_experience"},null,8,["modelValue","label"])])]),r(s,{searchable:!0,clearable:!0,options:i.data.dropdowns.freelancer_levels,modelValue:l.form.freelancer_level_id,"onUpdate:modelValue":e[12]||(e[12]=o=>l.form.freelancer_level_id=o),label:n.__("Freelancer Level"),required:!0,name:"freelancer_level_id"},null,8,["options","modelValue","label"]),r(s,{searchable:!0,clearable:!1,options:i.data.dropdowns.services,modelValue:l.form.service_id_1,"onUpdate:modelValue":e[13]||(e[13]=o=>l.form.service_id_1=o),label:n.__("Service 1"),required:!0,name:"service_id_1"},null,8,["options","modelValue","label"]),r(s,{searchable:!0,clearable:!1,options:i.data.dropdowns.services,modelValue:l.form.service_id_2,"onUpdate:modelValue":e[14]||(e[14]=o=>l.form.service_id_2=o),label:n.__("Service 2"),name:"service_id_2"},null,8,["options","modelValue","label"]),r(s,{searchable:!0,clearable:!1,options:i.data.dropdowns.services,modelValue:l.form.service_id_3,"onUpdate:modelValue":e[15]||(e[15]=o=>l.form.service_id_3=o),label:n.__("Service 3"),name:"service_id_3"},null,8,["options","modelValue","label"]),r(s,{searchable:!0,clearable:!1,options:i.data.dropdowns.subjects,modelValue:l.form.subject_id_1,"onUpdate:modelValue":e[16]||(e[16]=o=>l.form.subject_id_1=o),label:n.__("Subject 1"),required:!0,name:"subject_id_1"},null,8,["options","modelValue","label"]),r(s,{searchable:!0,clearable:!0,options:i.data.dropdowns.subjects,modelValue:l.form.subject_id_2,"onUpdate:modelValue":e[17]||(e[17]=o=>l.form.subject_id_2=o),label:n.__("Subject 2"),name:"subject_id_2"},null,8,["options","modelValue","label"]),r(s,{searchable:!0,clearable:!0,options:i.data.dropdowns.subjects,modelValue:l.form.subject_id_3,"onUpdate:modelValue":e[18]||(e[18]=o=>l.form.subject_id_3=o),label:n.__("Subject 3"),name:"subject_id_3"},null,8,["options","modelValue","label"]),r(s,{searchable:!0,clearable:!0,options:i.data.dropdowns.subjects,modelValue:l.form.subject_id_4,"onUpdate:modelValue":e[19]||(e[19]=o=>l.form.subject_id_4=o),label:n.__("Subject 4"),name:"subject_id_4"},null,8,["options","modelValue","label"]),r(s,{searchable:!0,clearable:!0,options:i.data.dropdowns.subjects,modelValue:l.form.subject_id_5,"onUpdate:modelValue":e[20]||(e[20]=o=>l.form.subject_id_5=o),label:n.__("Subject 5"),name:"subject_id_5"},null,8,["options","modelValue","label"])]),m("div",F,a(n.__("Payment Settings")),1),m("div",O,[r(u,{modelValue:l.form.payment_method,"onUpdate:modelValue":e[21]||(e[21]=o=>l.form.payment_method=o),label:n.__("Preferred method for receiving payment"),name:"payment_method",required:!0,placeholder:n.__("e.g. Paypal, Stripe, etc.")},null,8,["modelValue","label","placeholder"]),r(u,{modelValue:l.form.payment_method_details,"onUpdate:modelValue":e[22]||(e[22]=o=>l.form.payment_method_details=o),label:n.__("Payment method details"),name:"payment_method_details",required:!0,placeholder:n.__("e.g. Email for your Paypal account")},null,8,["modelValue","label","placeholder"])]),m("div",Y,a(n.__("Links")),1),m("div",G,[r(u,{modelValue:l.form.blog_url,"onUpdate:modelValue":e[23]||(e[23]=o=>l.form.blog_url=o),label:n.__("Blog URL"),name:"blog_url"},null,8,["modelValue","label"]),r(u,{modelValue:l.form.online_portfolio_url,"onUpdate:modelValue":e[24]||(e[24]=o=>l.form.online_portfolio_url=o),label:n.__("Online Portfolio URL"),name:"online_portfolio_url"},null,8,["modelValue","label"]),r(u,{modelValue:l.form.linked_in_url,"onUpdate:modelValue":e[25]||(e[25]=o=>l.form.linked_in_url=o),label:n.__("Linkedin Public Profile URL"),name:"linked_in_url"},null,8,["modelValue","label"])]),r(t,{modelValue:l.form.bio,"onUpdate:modelValue":e[26]||(e[26]=o=>l.form.bio=o),label:n.__("Career summary"),name:"bio"},null,8,["modelValue","label"]),m("div",H,[r(b,{modelValue:l.form.send_notification_email,"onUpdate:modelValue":e[27]||(e[27]=o=>l.form.send_notification_email=o),name:"send_notification_email",label:n.__("Send notification email with password")},null,8,["modelValue","label"])]),r(p,{disabled:l.form.disabled},null,8,["disabled"])],32)]),_:1},8,["title"])}const me=j(q,[["render",J]]);export{me as default};

import p from"./AccountLayout.012491da.js";import{I as b}from"./Input.e65d7326.js";import{T as c}from"./TextArea.3edc019d.js";import{_ as V,c as v,a as t,w as j,F as g,r as s,o as h,b as i,t as _,D as S}from"./app.94ede146.js";import{S as y}from"./Select.0af50086.js";import{S as U}from"./SubmitButton.71e94644.js";import"./vanilla-picker.csp.da387394.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b3e602c6.js";const w={props:["data","freelancer"],components:{AccountLayout:p,Input:b,TextArea:c,SubmitButton:U,Select:y},data(){return{form:this.$inertia.form({education_level_id:this.freelancer.profile.education_level_id,years_of_experience:this.freelancer.profile.years_of_experience,subject_id_1:this.freelancer.profile.subject_id_1,subject_id_2:this.freelancer.profile.subject_id_2,subject_id_3:this.freelancer.profile.subject_id_3,blog_url:this.freelancer.profile.blog_url,online_portfolio_url:this.freelancer.profile.online_portfolio_url,linked_in_url:this.freelancer.profile.linked_in_url}),formConfig:{preserveScroll:!1}}}},A={class:"card"},k={class:"card-header h5"},L={class:"card-body"},B={class:"w-100 p-2 bg-light mb-2 h5"},E={class:"p-2"},q={class:"w-100 p-2 bg-light mb-2 h5"},C={class:"p-2"},I={class:"w-100 p-2 bg-light mb-2 h5"},P={class:"p-2"};function H(r,l,n,R,e,x){const d=s("AppHead"),u=s("Select"),a=s("Input"),m=s("SubmitButton"),f=s("AccountLayout");return h(),v(g,null,[t(d,{title:n.data.title},null,8,["title"]),t(f,{freelancer:n.freelancer},{default:j(()=>[i("div",A,[i("div",k,_(n.data.title),1),i("div",L,[i("form",{onSubmit:l[8]||(l[8]=S(o=>e.form.patch(n.data.urls.submit_form,e.formConfig),["prevent"]))},[i("div",B,_(r.__("Education & Experience")),1),i("div",E,[t(u,{searchable:!0,clearable:!0,options:n.data.dropdowns.education_levels,modelValue:e.form.education_level_id,"onUpdate:modelValue":l[0]||(l[0]=o=>e.form.education_level_id=o),label:r.__("Highest Level of Education"),required:!0,name:"education_level_id"},null,8,["options","modelValue","label"]),t(a,{type:"number",modelValue:e.form.years_of_experience,"onUpdate:modelValue":l[1]||(l[1]=o=>e.form.years_of_experience=o),label:r.__("Years of Experience"),name:"years_of_experience"},null,8,["modelValue","label"])]),i("div",q,_(r.__("Area of Expertise")),1),i("div",C,[t(u,{searchable:!0,clearable:!0,options:n.data.dropdowns.subjects,modelValue:e.form.subject_id_1,"onUpdate:modelValue":l[2]||(l[2]=o=>e.form.subject_id_1=o),label:r.__("Area 1"),required:!0,name:"subject_id_1"},null,8,["options","modelValue","label"]),t(u,{searchable:!0,clearable:!0,options:n.data.dropdowns.subjects,modelValue:e.form.subject_id_2,"onUpdate:modelValue":l[3]||(l[3]=o=>e.form.subject_id_2=o),label:r.__("Area 2"),required:!0,name:"subject_id_2"},null,8,["options","modelValue","label"]),t(u,{searchable:!0,clearable:!0,options:n.data.dropdowns.subjects,modelValue:e.form.subject_id_3,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form.subject_id_3=o),label:r.__("Area 3"),required:!0,name:"subject_id_3"},null,8,["options","modelValue","label"])]),i("div",I,_(r.__("Portfolio")),1),i("div",P,[t(a,{modelValue:e.form.blog_url,"onUpdate:modelValue":l[5]||(l[5]=o=>e.form.blog_url=o),label:r.__("Blog URL"),name:"blog_url"},null,8,["modelValue","label"]),t(a,{modelValue:e.form.online_portfolio_url,"onUpdate:modelValue":l[6]||(l[6]=o=>e.form.online_portfolio_url=o),label:r.__("Online Portfolio URL"),name:"online_portfolio_url"},null,8,["modelValue","label"]),t(a,{modelValue:e.form.linked_in_url,"onUpdate:modelValue":l[7]||(l[7]=o=>e.form.linked_in_url=o),label:r.__("Linkedin Public Profile URL"),name:"linked_in_url"},null,8,["modelValue","label"])]),t(m,{disabled:e.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["freelancer"])],64)}const J=V(w,[["render",H]]);export{J as default};

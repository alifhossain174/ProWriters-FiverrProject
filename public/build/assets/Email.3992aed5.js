import b from"./SettingsLayout.f3151d31.js";import V from"./ActionToolBar.ba87cc59.js";import{I as v}from"./Input.8aaee37e.js";import{S as g}from"./Select.15c2a802.js";import{_ as S,A as _,w,r as a,o as s,b as m,a as n,d,c as p,D as q}from"./app.15906225.js";import"./Menu.80c22340.js";import"./bootstrap.esm.2333d793.js";const y={components:{SettingsLayout:b,ActionToolBar:V,Input:v,Select:g},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}},U={class:"row"},k={class:"col-md-6"},B={class:"col-md-6"},M={key:1},T={class:"row"},P={class:"col-md-6"},E={class:"col-md-6"},A={key:2},C={class:"row"},I={class:"col-md-6"},L={class:"col-md-3"},N={class:"col-md-3"},h={class:"row"},D={class:"col-md-6"},F={class:"col-md-6"};function H(i,e,r,K,o,Q){const f=a("ActionToolBar"),u=a("Select"),t=a("Input"),c=a("SettingsLayout");return s(),_(c,{title:r.data.title},{default:w(()=>[m("form",{onSubmit:e[10]||(e[10]=q(l=>o.form.post(r.data.urls.submit_form),["prevent"]))},[n(f,{disable_save_button:o.form.processing,toolbar:o.toolbar,onSubmit:i.submitForm},null,8,["disable_save_button","toolbar","onSubmit"]),m("div",U,[m("div",k,[n(u,{modelValue:o.form.mail_mailer,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.mail_mailer=l),options:r.data.dropdowns.email_sending_options,name:"mail_mailer",label:i.__("Send email using"),required:!0},null,8,["modelValue","options","label"])]),m("div",B,[o.form.mail_mailer!="log"?(s(),_(u,{key:0,modelValue:o.form.queue_connection,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.queue_connection=l),options:r.data.dropdowns.queue_connection_options,name:"queue_connection",label:i.__("Queue Connection"),required:!0},null,8,["modelValue","options","label"])):d("",!0)])]),o.form.mail_mailer!="log"?(s(),_(t,{key:0,modelValue:o.form.mail_from_address,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.mail_from_address=l),name:"mail_from_address",label:i.__("Email from address"),required:!0},null,8,["modelValue","label"])):d("",!0),o.form.mail_mailer=="mailgun"?(s(),p("div",M,[m("div",T,[m("div",P,[n(t,{modelValue:o.form.mailgun_domain,"onUpdate:modelValue":e[3]||(e[3]=l=>o.form.mailgun_domain=l),name:"mailgun_domain",label:i.__("Mailgun Domain"),required:!0},null,8,["modelValue","label"])]),m("div",E,[n(t,{modelValue:o.form.mailgun_secret,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.mailgun_secret=l),name:"mailgun_secret",label:i.__("Mailgun Key"),required:!0},null,8,["modelValue","label"])])])])):d("",!0),o.form.mail_mailer=="smtp"?(s(),p("div",A,[m("div",C,[m("div",I,[n(t,{modelValue:o.form.mail_host,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.mail_host=l),name:"mail_host",label:i.__("SMTP Host"),required:!0},null,8,["modelValue","label"])]),m("div",L,[n(t,{modelValue:o.form.mail_port,"onUpdate:modelValue":e[6]||(e[6]=l=>o.form.mail_port=l),name:"mail_port",label:i.__("SMTP Port"),required:!0},null,8,["modelValue","label"])]),m("div",N,[n(u,{modelValue:o.form.mail_encryption,"onUpdate:modelValue":e[7]||(e[7]=l=>o.form.mail_encryption=l),options:r.data.dropdowns.email_encryptions,name:"mail_encryption",label:i.__("Email Encryption"),required:!0},null,8,["modelValue","options","label"])])]),m("div",h,[m("div",D,[n(t,{modelValue:o.form.mail_username,"onUpdate:modelValue":e[8]||(e[8]=l=>o.form.mail_username=l),name:"mail_username",label:i.__("SMTP Username"),tooltip:r.data.tooltips.smtp_username},null,8,["modelValue","label","tooltip"])]),m("div",F,[n(t,{modelValue:o.form.mail_password,"onUpdate:modelValue":e[9]||(e[9]=l=>o.form.mail_password=l),name:"mail_password",label:i.__("SMTP Password"),required:!0},null,8,["modelValue","label"])])])])):d("",!0)],32)]),_:1},8,["title"])}const X=S(y,[["render",H]]);export{X as default};

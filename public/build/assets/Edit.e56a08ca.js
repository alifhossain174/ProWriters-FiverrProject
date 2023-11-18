import{I as f}from"./Input.09d9931c.js";import{_ as p,g as b,y as V,f as u,o as d,b as a,a as m,c as g,h as x,w as v}from"./app.f4b2b251.js";import{C as w}from"./CheckBox.cc62ca79.js";import{S as q}from"./SubmitButton.e555a601.js";import"./vanilla-picker.csp.f644cdcf.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9d72112.js";const B={components:{Input:f,CheckBox:w,SubmitButton:q},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!1}}},methods:{prepareForm(){let i={name:null,minimum_order_quantity:null,allowed_file_extensions:null,maximum_file_size:null,minimum_number_of_files_to_upload:null,maximum_number_of_files_to_upload:null,disable_writing:null,disable_editing:null,disable_proofreading:null,inactive:null};return this.existing_record&&(i={...i,...this.existing_record}),i}}},U={key:0},y={class:"mt-4"},C={class:"mt-4"};function k(i,e,r,M,l,S){const n=u("Input"),t=u("CheckBox"),s=u("SubmitButton"),_=u("Modal");return d(),b(_,{title:r.data.title},{default:V(()=>[a("form",{onSubmit:e[9]||(e[9]=v(o=>l.form.patch(i.route("admin.services.update",r.existing_record.id)),["prevent"]))},[m(n,{modelValue:l.form.name,"onUpdate:modelValue":e[0]||(e[0]=o=>l.form.name=o),name:"name",label:i.__("Name"),required:!0},null,8,["modelValue","label"]),m(n,{modelValue:l.form.minimum_order_quantity,"onUpdate:modelValue":e[1]||(e[1]=o=>l.form.minimum_order_quantity=o),name:"minimum_order_quantity",label:i.__("Minimum order quantity"),required:!0},null,8,["modelValue","label"]),m(n,{modelValue:l.form.allowed_file_extensions,"onUpdate:modelValue":e[2]||(e[2]=o=>l.form.allowed_file_extensions=o),name:"allowed_file_extensions",label:i.__("Allowed file extensions"),required:!0},null,8,["modelValue","label"]),m(n,{modelValue:l.form.maximum_file_size,"onUpdate:modelValue":e[3]||(e[3]=o=>l.form.maximum_file_size=o),name:"maximum_file_size",label:i.__("Maximum file size"),required:!0},null,8,["modelValue","label"]),m(n,{modelValue:l.form.maximum_number_of_files_to_upload,"onUpdate:modelValue":e[4]||(e[4]=o=>l.form.maximum_number_of_files_to_upload=o),name:"maximum_number_of_files_to_upload",label:i.__("Maximum number of files to upload"),required:!0},null,8,["modelValue","label"]),r.existing_record.id!=r.data.service_types.resume_writing?(d(),g("div",U,[a("div",y,[m(t,{modelValue:l.form.disable_writing,"onUpdate:modelValue":e[5]||(e[5]=o=>l.form.disable_writing=o),name:"disable_writing",label:i.__("Disable Writing")},null,8,["modelValue","label"]),m(t,{modelValue:l.form.disable_editing,"onUpdate:modelValue":e[6]||(e[6]=o=>l.form.disable_editing=o),name:"disable_editing",label:i.__("Disable Editing")},null,8,["modelValue","label"]),m(t,{modelValue:l.form.disable_proofreading,"onUpdate:modelValue":e[7]||(e[7]=o=>l.form.disable_proofreading=o),name:"disable_proofreading",label:i.__("Disable Proofreading")},null,8,["modelValue","label"])])])):x("",!0),a("div",C,[m(t,{modelValue:l.form.inactive,"onUpdate:modelValue":e[8]||(e[8]=o=>l.form.inactive=o),name:"inactive",label:i.__("Inactive")},null,8,["modelValue","label"])]),m(s,{disabled:l.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const P=p(B,[["render",k]]);export{P as default};

import{I as d}from"./Input.e65d7326.js";import{_ as f,A as p,w as b,r,o as V,b as u,a as i,D as x}from"./app.94ede146.js";import{C as v}from"./CheckBox.b26ad33b.js";import{S as q}from"./SubmitButton.71e94644.js";import"./vanilla-picker.csp.da387394.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b3e602c6.js";const B={components:{Input:d,CheckBox:v,SubmitButton:q},props:["data","existing_record"],data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!1}}},methods:{prepareForm(){let m={name:null,minimum_order_quantity:null,allowed_file_extensions:null,maximum_file_size:null,minimum_number_of_files_to_upload:null,maximum_number_of_files_to_upload:null,inactive:null};return this.existing_record&&(m={...m,...this.existing_record}),m}}},w={class:"mt-4"};function C(m,e,t,c,o,g){const n=r("Input"),a=r("CheckBox"),s=r("SubmitButton"),_=r("Modal");return V(),p(_,{title:t.data.title},{default:b(()=>[u("form",{onSubmit:e[6]||(e[6]=x(l=>o.form.patch(m.route("admin.services.update",t.existing_record.id)),["prevent"]))},[i(n,{modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.name=l),name:"name",label:m.__("Name"),required:!0},null,8,["modelValue","label"]),i(n,{modelValue:o.form.minimum_order_quantity,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.minimum_order_quantity=l),name:"minimum_order_quantity",label:m.__("Minimum order quantity"),required:!0},null,8,["modelValue","label"]),i(n,{modelValue:o.form.allowed_file_extensions,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.allowed_file_extensions=l),name:"allowed_file_extensions",label:m.__("Allowed file extensions"),required:!0},null,8,["modelValue","label"]),i(n,{modelValue:o.form.maximum_file_size,"onUpdate:modelValue":e[3]||(e[3]=l=>o.form.maximum_file_size=l),name:"maximum_file_size",label:m.__("Maximum file size"),required:!0},null,8,["modelValue","label"]),i(n,{modelValue:o.form.maximum_number_of_files_to_upload,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.maximum_number_of_files_to_upload=l),name:"maximum_number_of_files_to_upload",label:m.__("Maximum number of files to upload"),required:!0},null,8,["modelValue","label"]),u("div",w,[i(a,{modelValue:o.form.inactive,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.inactive=l),name:"inactive",label:m.__("Inactive")},null,8,["modelValue","label"])]),i(s,{disabled:o.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const N=f(B,[["render",C]]);export{N as default};
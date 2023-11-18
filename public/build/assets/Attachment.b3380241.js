import{$ as l}from"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import{_ as n,o as a,c as r,b as s,t as d}from"./app.b345893e.js";const c={mounted(){var e=this;document.getElementsByClassName("dropzone")&&(e.dropzone=new l(".dropzone",{headers:{"x-csrf-token":this.$page.props.csrf_token},init:function(){let i=this;e.existing_files&&e.existing_files.length>0&&(e.existing_files.forEach(function(o){i.displayExistingFile(o,o.url)}),i.options.maxFiles=i.options.maxFiles-e.existing_files.length)},url:this.upload_attachment_url,maxFiles:this.maximum_number_of_files_to_upload,maxFilesize:this.maximum_file_size,acceptedFiles:this.allowed_file_extensions,addRemoveLinks:!0,dictDefaultMessage:"Drop files here to upload",dictRemoveFile:"Remove file",dictCancelUpload:"Cancel upload",dictFileTooBig:"File is too big",dictInvalidFileType:"Invalid file type",dictResponseError:"Server responded with {{statusCode}} code",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFileConfirmation:"Are you sure you want to remove this file?",dictMaxFilesExceeded:"You can not upload any more files",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days."}).on("success",this.onUpload).on("removedfile",this.removeFile).on("error",function(i){e.dropzone.removeFile(i)}))},props:{existing_files:{type:Array,default:()=>[]},upload_attachment_url:String,maximum_file_size:Number,maximum_number_of_files_to_upload:Number,allowed_file_extensions:String},watch:{clear_existing_files:function(e){e&&this.dropzone.removeAllFiles(!0)}},data:function(){return{files:this.existing_files?JSON.parse(JSON.stringify(this.existing_files)):[],dropzone:null}},methods:{btnClicked(){this.dropzone.hiddenFileInput.click()},onUpload(e,i){this.files.push(i),this.$emit("onChange",this.files)},removeFile(e){var i=this.$data.files.map(function(o,t){if(o.display_name==e.name)return t}).filter(isFinite)[0];this.$data.files.splice(i,1),this.$emit("onChange",this.$data.files)}}},p={id:"dropzone"},f={class:"dropzone"},u={class:"dz-message needsclick"},m={class:"text"},_=s("i",{class:"fas fa-upload"},null,-1),h=s("span",{class:"plus"},"+",-1);function x(e,i,o,t,g,F){return a(),r("div",p,[s("div",f,[s("div",u,[s("span",m,[_,s("div",null,d(e.__("Drop files here or click to upload")),1)]),h])])])}const b=n(c,[["render",x]]);export{b as A};

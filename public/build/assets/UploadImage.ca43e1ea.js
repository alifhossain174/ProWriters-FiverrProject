import{d}from"./vanilla-picker.csp.57f392b9.js";import{_ as m,f as c,o as s,c as r,d as h,t as p,h as l,a as g,F as _,b as f}from"./app.b345893e.js";const C={props:["data"],components:{AvatarCropper:d},data(){return{showCropper:null,outputOptions:{width:360,height:360},onProgress:!1}},methods:{uploadHandler(t){let e=t.getCroppedCanvas().toDataURL(this.cropperOutputMime);e=e.replace("data:image/png;base64,",""),this.$inertia.patch(this.data.urls.submit_form,{file:e},{onStart:a=>{this.onProgress=!0},onFinish:a=>{this.onProgress=!1}})}}},v=f("i",{class:"fa-solid fa-image"},null,-1),b={key:1,class:"text-center text-muted"};function V(t,e,a,k,o,i){const u=c("avatar-cropper");return s(),r(_,null,[o.onProgress?l("",!0):(s(),r("button",{key:0,class:"btn btn-sm btn-light",onClick:e[0]||(e[0]=n=>o.showCropper=!0)},[v,h(" "+p(t.__("Select an image")),1)])),o.onProgress?(s(),r("div",b,p(t.__("Uploading"))+" ... ",1)):l("",!0),g(u,{modelValue:o.showCropper,"onUpdate:modelValue":e[1]||(e[1]=n=>o.showCropper=n),"upload-handler":i.uploadHandler,"output-options":o.outputOptions},null,8,["modelValue","upload-handler","output-options"])],64)}const U=m(C,[["render",V]]);export{U};

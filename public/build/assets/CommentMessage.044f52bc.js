import{A as _}from"./AttachmentList.fc8adbd0.js";import{_ as u,r as v,o as f,c as d,b as t,t as a,a as h,d as g}from"./app.15906225.js";const w={props:["comment"],components:{AttachmentList:_},methods:{getFileIcon(i){let s=i.split(".").pop(),e="file",o=["svg","gif","png","psd","jpg","jpeg","tif","tiff","bmp","eps","raw","cr2","nef","orf","sr2"],c=["xls","xlsx"],n=["doc","docx","odt"],l=["ppts","pptx"],m=["zip","rar","7z","tar"],r=["webm","mpg","mp2","mpeg","mpe","mpv","ogg","mp4","m4p","m4v","avi","wmv","mov","qt","flv","swf"],p=["mp3","m4a","aac","oga","ogg","wav"];return o.includes(s)?e="image":c.includes(s)?e="excel":n.includes(s)?e="word":l.includes(s)?e="powerpoint":m.includes(s)?e="archive":r.includes(s)?e="video":p.includes(s)?e="audio":s=="pdf"?e="pdf":s=="csv"?e="csv":e="file",{image:'<i class="fa-solid fa-file-image fs-4"></i>',excel:'<i class="fa-solid fa-file-excel fs-4"></i>',word:'<i class="fa-solid fa-file-word fs-4"></i>',powerpoint:'<i class="fa-regular fa-file-powerpoint fs-4"></i>',archive:'<i class="fa-regular fa-file-zipper fs-4"></i>',video:'<i class="fa-solid fa-file-video  fs-4"></i>',audio:'<i class="fa-solid fa-file-audio  fs-4"></i>',pdf:'<i class="fa-solid fa-file-pdf fs-4"></i>',csv:'<i class="fa-solid fa-file-csv fs-4"></i>',file:'<i class="fa-regular fa-file-lines fs-4"></i>'}[e]}}},x={class:"ps-4 pe-4 pt-2 pb-2"},b={class:"d-flex mb-2"},A=["src","alt"],L={class:"ps-2"},k={class:"text-muted"},y=t("hr",null,null,-1),z={class:""},C=["innerHTML"],B={key:0,class:"mt-3"},M=t("hr",null,null,-1),N={class:"mb-2"};function T(i,s,e,o,c,n){const l=v("AttachmentList");return f(),d("div",x,[t("div",b,[t("img",{class:"avatar",src:e.comment.user.small_avatar,alt:e.comment.user.code,loading:"lazy"},null,8,A),t("div",L,[t("div",null,a(e.comment.user.code),1),t("small",k,a(i.__("Posted"))+" : "+a(i.localDateTime(e.comment.created_at)),1)])]),y,t("div",z,[t("div",{class:"text-break",innerHTML:e.comment.message},null,8,C),e.comment.attachments.length>0?(f(),d("div",B,[M,t("div",N,a(i.__("Attachments")),1),h(l,{attachments:e.comment.attachments},null,8,["attachments"])])):g("",!0)])])}const H=u(w,[["render",T]]);export{H as C};

import i from"./TaskShowLayout.372fbdc8.js";import _ from"./DownloadWork.a5e60a60.js";import{C as m}from"./ContentPreview.355a5e18.js";import{_ as p,A as d,w as l,r as t,o as k,b as e,a as n}from"./app.2abe2877.js";import"./Countdown.cf65ad67.js";import"./bootstrap.esm.2333d793.js";import"./Star.352b79b4.js";import"./AttachmentList.b0774401.js";const w={props:["task","content_preview"],components:{TaskShowLayout:i,DownloadWork:_,ContentPreview:m}},u={class:"row"},v={class:"col-md-8"},f={class:"col-md-4"};function h(s,C,o,x,T,y){const a=t("ContentPreview"),c=t("DownloadWork"),r=t("TaskShowLayout");return k(),d(r,{task:o.task,activeTab:"content"},{default:l(()=>[e("div",u,[e("div",v,[n(a,{content_preview:o.content_preview,url_post_comment:s.route("admin.tasks.content.comment",this.task.uuid)},null,8,["content_preview","url_post_comment"])]),e("div",f,[n(c,{task:o.task},null,8,["task"])])])]),_:1},8,["task"])}const V=p(w,[["render",h]]);export{V as default};

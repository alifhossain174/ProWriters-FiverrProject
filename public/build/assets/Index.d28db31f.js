import _ from"./TaskShowLayout.6ccafdac.js";import i from"./DownloadWork.bf604416.js";import{C as m}from"./ContentPreview.26946103.js";import{_ as d,A as p,w as l,r as o,o as k,b as e,a as n}from"./app.40136f18.js";import"./Countdown.ecd1ee44.js";import"./bootstrap.esm.2333d793.js";import"./Star.cf718d11.js";import"./AttachmentList.5ffb5524.js";const u={props:["task","content_preview","data"],components:{TaskShowLayout:_,DownloadWork:i,ContentPreview:m}},w={class:"row"},v={class:"col-md-8"},f={class:"col-md-4"};function h(a,C,t,x,T,y){const s=o("ContentPreview"),c=o("DownloadWork"),r=o("TaskShowLayout");return k(),p(r,{task:t.task,activeTab:"content"},{default:l(()=>[e("div",w,[e("div",v,[n(s,{content_preview:t.content_preview,url_post_comment:a.route("customer.tasks.content.comment",this.task.uuid)},null,8,["content_preview","url_post_comment"])]),e("div",f,[n(c,{task:t.task,data:t.data},null,8,["task","data"])])])]),_:1},8,["task"])}const V=d(u,[["render",h]]);export{V as default};

import _ from"./TaskShowLayout.fb45a126.js";import i from"./DownloadWork.891c664e.js";import{C as m}from"./ContentPreview.2f087e67.js";import{_ as d,A as p,w as l,r as o,o as k,b as e,a as n}from"./app.9acdbdf3.js";import"./Countdown.8d145ebe.js";import"./bootstrap.esm.2333d793.js";import"./Star.5ca0ea28.js";import"./AttachmentList.62abc988.js";const u={props:["task","content_preview","data"],components:{TaskShowLayout:_,DownloadWork:i,ContentPreview:m}},w={class:"row"},v={class:"col-md-8"},f={class:"col-md-4"};function h(a,C,t,x,T,y){const s=o("ContentPreview"),c=o("DownloadWork"),r=o("TaskShowLayout");return k(),p(r,{task:t.task,activeTab:"content"},{default:l(()=>[e("div",w,[e("div",v,[n(s,{content_preview:t.content_preview,url_post_comment:a.route("customer.tasks.content.comment",this.task.uuid)},null,8,["content_preview","url_post_comment"])]),e("div",f,[n(c,{task:t.task,data:t.data},null,8,["task","data"])])])]),_:1},8,["task"])}const V=d(u,[["render",h]]);export{V as default};

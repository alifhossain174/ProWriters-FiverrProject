import i from"./TaskShowLayout.1fd61b01.js";import _ from"./DownloadWork.4a4c4f27.js";import{C as m}from"./ContentPreview.230556e2.js";import{_ as d,g as p,y as l,f as o,o as k,b as e,a as n}from"./app.f4b2b251.js";import"./Countdown.b6097b39.js";import"./bootstrap.esm.2333d793.js";import"./Star.c928fe66.js";import"./AttachmentList.bce7c7f6.js";const u={props:["task","content_preview","data"],components:{TaskShowLayout:i,DownloadWork:_,ContentPreview:m}},w={class:"row"},v={class:"col-md-8"},f={class:"col-md-4"};function h(a,C,t,x,y,T){const s=o("ContentPreview"),c=o("DownloadWork"),r=o("TaskShowLayout");return k(),p(r,{task:t.task,activeTab:"content"},{default:l(()=>[e("div",w,[e("div",v,[n(s,{content_preview:t.content_preview,url_post_comment:a.route("admin.tasks.content.comment",this.task.uuid)},null,8,["content_preview","url_post_comment"])]),e("div",f,[n(c,{task:t.task,data:t.data},null,8,["task","data"])])])]),_:1},8,["task"])}const V=d(u,[["render",h]]);export{V as default};

import{O as _}from"./Order.7a1aba58.js";import{s as m}from"./CreateOrderStore.5cdac6d3.js";import{_ as p,c as f,a as r,b as s,w as a,F as u,r as o,o as h,f as g,t as k}from"./app.6486bb89.js";import"./Select.0cc97eb8.js";import"./vanilla-picker.csp.273e51c7.js";import"./debounce.2741a44f.js";import"./Input.744111e9.js";import"./TextArea.33080630.js";import"./Attachment.56188e8d.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./bootstrap.esm.2333d793.js";const v={provide(){return{$store:this.megaStore}},components:{Order:_},props:["data","initial_records","errors"],data(){return{megaStore:m,records:this.getRecords()}},methods:{getRecords(){let t=this.data.dropdowns;return t.is_admin=!0,t}}},w={class:"container page-container"},b=s("i",{class:"fa-solid fa-arrow-left-long"},null,-1),x={class:"row"},B={class:"col-md-12"};function O(t,T,e,C,i,N){const n=o("AppHead"),c=o("Link"),d=o("PageTitle"),l=o("Order");return h(),f(u,null,[r(n,{title:e.data.title},null,8,["title"]),s("div",w,[r(d,{title:e.data.title},{default:a(()=>[r(c,{class:"btn btn-sm btn-light",href:t.route("admin.tasks.index")},{default:a(()=>[b,g(" "+k(t.__("Back to Tasks")),1)]),_:1},8,["href"])]),_:1},8,["title"]),s("div",x,[s("div",B,[r(l,{data:i.records,initial_records:e.initial_records,errors:e.errors},null,8,["data","initial_records","errors"])])])])],64)}const j=p(v,[["render",O]]);export{j as default};

import{O as _}from"./Order.4ba215c7.js";import{s as m}from"./CreateOrderStore.abda108a.js";import{_ as p,c as u,a as o,b as s,w as a,F as f,r,o as h,f as g,t as k}from"./app.969842cf.js";import"./Select.df74d481.js";import"./vanilla-picker.csp.0ced5960.js";import"./debounce.ed46515d.js";import"./Input.ae708ed5.js";import"./TextArea.c8f7119a.js";import"./Attachment.c326fe73.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./bootstrap.esm.2333d793.js";const w={provide(){return{$store:this.megaStore}},components:{Order:_},props:["data","initial_records","errors"],data(){return{megaStore:m,records:this.getRecords()}},methods:{getRecords(){let t=this.data.dropdowns;return t.is_admin=!0,t.is_edit_on_mode=!0,t}}},v={class:"container page-container"},b=s("i",{class:"fa-solid fa-arrow-left-long"},null,-1),B={class:"row"},O={class:"col-md-12"};function T(t,x,e,N,i,S){const n=r("AppHead"),d=r("Link"),c=r("PageTitle"),l=r("Order");return h(),u(f,null,[o(n,{title:e.data.title},null,8,["title"]),s("div",v,[o(c,{title:e.data.title},{default:a(()=>[o(d,{class:"btn btn-sm btn-light",href:t.route("admin.tasks.show",e.data.task_uuid)},{default:a(()=>[b,g(" "+k(t.__("Back to Tasks")),1)]),_:1},8,["href"])]),_:1},8,["title"]),s("div",B,[s("div",O,[o(l,{data:i.records,initial_records:e.initial_records,errors:e.errors},null,8,["data","initial_records","errors"])])])])],64)}const j=p(w,[["render",T]]);export{j as default};

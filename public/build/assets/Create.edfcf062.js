import{O as l}from"./Order.6ebdf61d.js";import{s as _}from"./CreateOrderStore.1c1783be.js";import{_ as m,c as p,a as e,b as r,w as s,F as f,r as o,o as u,f as h,t as g}from"./app.2abe2877.js";import"./Select.7a96caba.js";import"./vanilla-picker.csp.f95a0d4d.js";import"./debounce.35ca4e92.js";import"./Input.d98634fc.js";import"./TextArea.328848c0.js";import"./Attachment.788b9155.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./bootstrap.esm.2333d793.js";const w={provide(){return{$store:this.megaStore}},components:{Order:l},props:["data","initial_records","errors"],data(){return{megaStore:_}}},k={class:"container page-container"},v=r("i",{class:"fa-solid fa-arrow-right-long"},null,-1),b={class:"row"},C={class:"col-md-12"};function O(a,V,t,x,B,N){const n=o("AppHead"),i=o("Link"),c=o("PageTitle"),d=o("Order");return u(),p(f,null,[e(n,{title:t.data.title},null,8,["title"]),r("div",k,[e(c,{title:t.data.title},{default:s(()=>[e(i,{href:a.route("checkout"),class:"btn btn-sm btn-outline-secondary"},{default:s(()=>[h(g(a.__("View Cart"))+" ",1),v]),_:1},8,["href"])]),_:1},8,["title"]),r("div",b,[r("div",C,[e(d,{data:t.data.dropdowns,initial_records:t.initial_records,errors:t.errors},null,8,["data","initial_records","errors"])])])])],64)}const q=m(w,[["render",O]]);export{q as default};

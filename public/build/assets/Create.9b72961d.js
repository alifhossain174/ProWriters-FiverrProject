import{O as l}from"./Order.813cfee3.js";import{s as _}from"./CreateOrderStore.8cc6b0c5.js";import{_ as m,c as p,a as e,b as r,w as s,F as f,r as o,o as u,f as h,t as g}from"./app.571265cd.js";import"./Select.7a1d9270.js";import"./vanilla-picker.csp.d11a8b31.js";import"./debounce.94acad4c.js";import"./Input.fe981f88.js";import"./TextArea.1f4fa0b9.js";import"./Attachment.88c86ffd.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./bootstrap.esm.2333d793.js";const w={provide(){return{$store:this.megaStore}},components:{Order:l},props:["data","initial_records","errors"],data(){return{megaStore:_}}},k={class:"container page-container"},v=r("i",{class:"fa-solid fa-arrow-right-long"},null,-1),b={class:"row"},C={class:"col-md-12"};function O(a,V,t,x,B,N){const n=o("AppHead"),i=o("Link"),c=o("PageTitle"),d=o("Order");return u(),p(f,null,[e(n,{title:t.data.title},null,8,["title"]),r("div",k,[e(c,{title:t.data.title},{default:s(()=>[e(i,{href:a.route("checkout"),class:"btn btn-sm btn-outline-secondary"},{default:s(()=>[h(g(a.__("View Cart"))+" ",1),v]),_:1},8,["href"])]),_:1},8,["title"]),r("div",b,[r("div",C,[e(d,{data:t.data.dropdowns,initial_records:t.initial_records,errors:t.errors},null,8,["data","initial_records","errors"])])])])],64)}const q=m(w,[["render",O]]);export{q as default};
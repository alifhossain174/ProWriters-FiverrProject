import{O as n}from"./Order.813cfee3.js";import{s as c}from"./CreateOrderStore.8cc6b0c5.js";import{_ as d,c as l,a as e,b as r,F as _,r as o,o as m}from"./app.571265cd.js";import"./Select.7a1d9270.js";import"./vanilla-picker.csp.d11a8b31.js";import"./debounce.94acad4c.js";import"./Input.fe981f88.js";import"./TextArea.1f4fa0b9.js";import"./Attachment.88c86ffd.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./bootstrap.esm.2333d793.js";const p={provide(){return{$store:this.megaStore}},components:{Order:n},props:["data","initial_records","errors"],data(){return{megaStore:c}}},u={class:"container page-container"},f={class:"row"},g={class:"col-md-12"};function h(v,O,t,x,B,b){const a=o("AppHead"),i=o("PageTitle"),s=o("Order");return m(),l(_,null,[e(a,{title:t.data.title},null,8,["title"]),r("div",u,[e(i,{title:t.data.title},null,8,["title"]),r("div",f,[r("div",g,[e(s,{data:t.data.dropdowns,initial_records:t.initial_records,errors:t.errors,is_on_bidding_mode:!0},null,8,["data","initial_records","errors"])])])])],64)}const E=d(p,[["render",h]]);export{E as default};

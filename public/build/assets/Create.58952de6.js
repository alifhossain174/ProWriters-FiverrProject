import{O as n}from"./Order.40d4593f.js";import{s as c}from"./CreateOrderStore.896f43e5.js";import{_ as d,c as l,a as e,b as r,F as _,r as o,o as m}from"./app.9acdbdf3.js";import"./Select.d56be4ef.js";import"./vanilla-picker.csp.612e0881.js";import"./debounce.ebc76861.js";import"./Input.e1de50c7.js";import"./TextArea.738ba188.js";import"./Attachment.5e3da68e.js";import"./Attachment.vue_vue_type_style_index_0_lang.ec1a4f61.js";import"./bootstrap.esm.2333d793.js";const p={provide(){return{$store:this.megaStore}},components:{Order:n},props:["data","initial_records","errors"],data(){return{megaStore:c}}},u={class:"container page-container"},f={class:"row"},g={class:"col-md-12"};function h(v,O,t,x,B,b){const a=o("AppHead"),i=o("PageTitle"),s=o("Order");return m(),l(_,null,[e(a,{title:t.data.title},null,8,["title"]),r("div",u,[e(i,{title:t.data.title},null,8,["title"]),r("div",f,[r("div",g,[e(s,{data:t.data.dropdowns,initial_records:t.initial_records,errors:t.errors,is_on_bidding_mode:!0},null,8,["data","initial_records","errors"])])])])],64)}const E=d(p,[["render",h]]);export{E as default};
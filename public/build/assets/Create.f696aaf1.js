import{C as s}from"./ContentGenerator.7ea6995d.js";import{C as c}from"./ContentEditor.dfe1af5a.js";import{_ as d,c as _,a as e,b as o,F as m,f as n,o as l}from"./app.b345893e.js";import"./Input.d3e8f5e0.js";import"./TextArea.67869acb.js";import"./Select.ee436180.js";import"./SubmitButton.d931e8b3.js";import"./vanilla-picker.csp.57f392b9.js";import"./debounce.b9b0fcdf.js";import"./Editor.ec6859d9.js";import"./vue-quill.snow.3afa9ab2.js";import"./bootstrap.esm.2333d793.js";const p={props:["data","existing_record"],components:{ContentGenerator:s,ContentEditor:c}},f={class:"container-fluid"},u={class:"row vh-100"},x={class:"col-md-4 vh-100",style:{background:"#f9f9f9"}},C={class:"col-md-8"};function g(h,v,t,E,k,B){const r=n("AppHead"),a=n("ContentGenerator"),i=n("ContentEditor");return l(),_(m,null,[e(r,{title:t.data.title},null,8,["title"]),o("div",f,[o("div",u,[o("div",x,[e(a,{data:t.data,existing_record:t.existing_record},null,8,["data","existing_record"])]),o("div",C,[e(i,{data:t.data,existing_record:t.existing_record},null,8,["data","existing_record"])])])])],64)}const D=d(p,[["render",g]]);export{D as default};
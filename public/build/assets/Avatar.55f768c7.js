import r from"./AccountLayout.9d41d57a.js";import{_ as d,c as m,a,w as l,F as i,r as o,o as _,b as e,t as p}from"./app.6486bb89.js";import"./vanilla-picker.csp.273e51c7.js";import{U as u}from"./UploadImage.ae9a5f95.js";import"./bootstrap.esm.2333d793.js";import"./debounce.2741a44f.js";const f={props:["data","customer"],components:{AccountLayout:r,UploadImage:u}},h={class:"card"},A={class:"card-header h5"},g={class:"card-body"};function v(y,x,t,U,B,I){const c=o("AppHead"),s=o("UploadImage"),n=o("AccountLayout");return _(),m(i,null,[a(c,{title:t.data.title},null,8,["title"]),a(n,{customer:t.customer},{default:l(()=>[e("div",h,[e("div",A,p(t.data.title),1),e("div",g,[a(s,{data:t.data},null,8,["data"])])])]),_:1},8,["customer"])],64)}const H=d(f,[["render",v]]);export{H as default};
import r from"./AccountLayout.359a4967.js";import{_ as d,c as l,a,y as i,F as _,f as o,o as m,b as e,t as p}from"./app.b345893e.js";import"./vanilla-picker.csp.57f392b9.js";import{U as u}from"./UploadImage.ca43e1ea.js";import"./bootstrap.esm.2333d793.js";import"./debounce.b9b0fcdf.js";const h={props:["data","author"],components:{AccountLayout:r,UploadImage:u}},f={class:"card"},y={class:"card-header h5"},A={class:"card-body"};function g(v,x,t,U,B,I){const c=o("AppHead"),n=o("UploadImage"),s=o("AccountLayout");return m(),l(_,null,[a(c,{title:t.data.title},null,8,["title"]),a(s,{author:t.author},{default:i(()=>[e("div",f,[e("div",y,p(t.data.title),1),e("div",A,[a(n,{data:t.data},null,8,["data"])])])]),_:1},8,["author"])],64)}const N=d(h,[["render",g]]);export{N as default};
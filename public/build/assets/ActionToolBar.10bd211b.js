import{_ as d,c as i,b as e,t as s,f as a,d as l,A as c,w as r,r as b,o}from"./app.7185dbf0.js";import"./bootstrap.esm.2333d793.js";const u={props:["toolbar","disable_save_button"],methods:{submitForm(){this.$emit("submit")}}},m={class:"actions-toolbar py-2 mb-1"},h={class:"row"},f={class:"col-6 col-md-6"},k={class:"mb-1"},v={class:"col-6 col-md-6 text-end"},y=["disabled"],g=e("i",{class:"fa-solid fa-floppy-disk"},null,-1),x=e("i",{class:"fas fa-plus"},null,-1),B=e("i",{class:"fa-solid fa-chevron-left"},null,-1),p=e("hr",null,null,-1);function w(_,C,t,N,V,A){const n=b("Link");return o(),i("div",m,[e("div",h,[e("div",f,[e("h5",k,s(t.toolbar.title),1)]),e("div",v,[t.toolbar.hide_save_button?l("",!0):(o(),i("button",{key:0,type:"submit",name:"submit",class:"btn btn-sm btn-success me-1",disabled:t.disable_save_button},[g,a(" "+s(_.__("Save record")),1)],8,y)),t.toolbar.links&&t.toolbar.links.create?(o(),c(n,{key:1,href:t.toolbar.links.create.url,class:"btn btn-sm btn-primary me-1"},{default:r(()=>[x,a(" "+s(t.toolbar.links.create.title),1)]),_:1},8,["href"])):l("",!0),t.toolbar.links&&t.toolbar.links.previous_page?(o(),c(n,{key:2,href:t.toolbar.links.previous_page.url,class:"btn btn-sm btn-light me-1"},{default:r(()=>[B,a(" "+s(t.toolbar.links.previous_page.title),1)]),_:1},8,["href"])):l("",!0)])]),p])}const T=d(u,[["render",w]]);export{T as default};

import{_ as m,c as a,b as e,t as s,d as r,F as d,r as i,h as _,o as n}from"./app.b345893e.js";import"./bootstrap.esm.2333d793.js";const u={props:["comment"]},h={class:"d-flex p-4"},f={class:"flex-shrink-0"},v=["src","alt"],g={class:"flex-grow-1 ms-3 pb-3"},k={class:"text-muted"},x=["innerHTML"],y={key:0,class:"mt-3"},T=e("hr",null,null,-1),B=["href"];function L(o,N,t,V,b,C){return n(),a("div",h,[e("div",f,[e("img",{class:"avatar float-start",src:t.comment.user.small_avatar,alt:t.comment.user.username,loading:"lazy"},null,8,v)]),e("div",g,[e("div",null,s(t.comment.user.username),1),e("small",k,s(o.__("Posted"))+" : "+s(o.localDateTime(t.comment.created_at)),1),e("div",{innerHTML:t.comment.message},null,8,x),t.comment.attachments.length>0?(n(),a("div",y,[T,r(" "+s(o.__("Attachments"))+" ",1),e("ol",null,[(n(!0),a(d,null,i(t.comment.attachments,(l,c)=>(n(),a("li",{key:c},[e("a",{href:l.name},s(l.display_name),9,B)]))),128))])])):_("",!0)])])}const H=m(u,[["render",L]]);export{H as default};

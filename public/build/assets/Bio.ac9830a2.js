import _ from"./AccountLayout.7d8075b8.js";import{E as p}from"./Editor.dfa6c890.js";import{_ as b,c as h,a as e,w as v,F as V,r,o as B,b as o,t as i,D as E,f as S}from"./app.2f940534.js";import{S as y}from"./SubmitButton.0cc09ebe.js";import"./vanilla-picker.csp.5d2100ee.js";import"./bootstrap.esm.2333d793.js";import"./vue-quill.snow.533d3b67.js";import"./debounce.0b2caf7a.js";const g={props:["data","freelancer"],components:{AccountLayout:_,Editor:p,SubmitButton:y},data(){return{form:this.$inertia.form({bio:this.freelancer.profile.bio}),formConfig:{preserveScroll:!1}}}},x={class:"card"},A={class:"card-header h5"},C={class:"card-body"},w={class:"mb-3"},L={class:"form-label"},N=o("span",{class:"required"},"*",-1);function k(l,n,s,D,t,F){const c=r("AppHead"),m=r("Editor"),d=r("ValidationError"),f=r("SubmitButton"),u=r("AccountLayout");return B(),h(V,null,[e(c,{title:s.data.title},null,8,["title"]),e(u,{freelancer:s.freelancer},{default:v(()=>[o("div",x,[o("div",A,i(s.data.title),1),o("div",C,[o("form",{onSubmit:n[1]||(n[1]=E(a=>t.form.patch(s.data.urls.submit_form,t.formConfig),["prevent"]))},[o("div",w,[o("label",L,[S(i(l.__("Tell us about yourself"))+" ",1),N]),e(m,{modelValue:t.form.bio,"onUpdate:modelValue":n[0]||(n[0]=a=>t.form.bio=a),height:"300px"},null,8,["modelValue"]),e(d,{name:"bio"})]),e(f,{disabled:t.form.disabled},null,8,["disabled"])],32)])])]),_:1},8,["freelancer"])],64)}const I=b(g,[["render",k]]);export{I as default};

import{_ as u,A as p,w as f,r as i,o as c,b as n,t as _,a,D as b}from"./app.6486bb89.js";import{S as h}from"./SubmitButton.6b08448a.js";import"./vanilla-picker.csp.273e51c7.js";import{R as S}from"./Radio.b251b681.js";import"./bootstrap.esm.2333d793.js";import"./debounce.2741a44f.js";const B={props:["data"],components:{Radio:S,SubmitButton:h},data(){return{form:this.$inertia.form({role:this.data.user_current_role})}},methods:{initializePermissionList(){let o=JSON.parse(JSON.stringify(this.data.permission_names));return o.is_super_admin=null,Object.keys(o).forEach(function(t,e){o[t]=null}),o={...o,...this.data.permissions},o}}},x={class:"border rounded-3 p-3"},R={class:"float-none w-auto px-3 fs-8"};function V(o,t,e,g,s,w){const l=i("Radio"),m=i("SubmitButton"),d=i("Modal");return c(),p(d,{title:e.data.title,size:"small"},{default:f(()=>[n("form",{onSubmit:t[1]||(t[1]=b(r=>s.form.patch(e.data.urls.submit_form),["prevent"]))},[n("fieldset",x,[n("legend",R,_(o.__("Role")),1),a(l,{options:e.data.roles,modelValue:s.form.role,"onUpdate:modelValue":t[0]||(t[0]=r=>s.form.role=r),name:"role"},null,8,["options","modelValue"])]),a(m,{class:"mt-4",disabled:s.form.processing},null,8,["disabled"])],32)]),_:1},8,["title"])}const z=u(B,[["render",V]]);export{z as default};

import d from"./SettingsLayout.5dd900f7.js";import p from"./ActionToolBar.60eb8f4e.js";import{I as _}from"./Input.c3d1dec4.js";import{S as b}from"./Select.bb2757ba.js";import{_ as c,A as f,w as y,r as u,o as V,b as g,a as n,D as S}from"./app.f21ad38e.js";import"./Menu.36275912.js";import"./bootstrap.esm.2333d793.js";const w={components:{SettingsLayout:d,ActionToolBar:p,Input:_,Select:b},props:["data","records"],data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title,hide_save_button:!1}}}};function C(l,e,t,q,o,U){const s=u("ActionToolBar"),m=u("Input"),i=u("Select"),a=u("SettingsLayout");return V(),f(a,{title:t.data.title},{default:y(()=>[g("form",{onSubmit:e[7]||(e[7]=S(r=>o.form.post(t.data.urls.submit_form),["prevent"]))},[n(s,{disable_save_button:o.form.processing,toolbar:o.toolbar,onSubmit:l.submitForm},null,8,["disable_save_button","toolbar","onSubmit"]),n(m,{modelValue:o.form.currency_symbol,"onUpdate:modelValue":e[0]||(e[0]=r=>o.form.currency_symbol=r),name:"currency_symbol",label:l.__("Currency Symbol"),required:!0},null,8,["modelValue","label"]),n(m,{modelValue:o.form.currency_code,"onUpdate:modelValue":e[1]||(e[1]=r=>o.form.currency_code=r),name:"currency_code",label:l.__("Currency Code"),required:!0},null,8,["modelValue","label"]),n(i,{modelValue:o.form.digit_grouping_method,"onUpdate:modelValue":e[2]||(e[2]=r=>o.form.digit_grouping_method=r),options:t.data.dropdowns.digit_grouping_methods,name:"digit_grouping_method",label:l.__("Digit Grouping"),required:!0},null,8,["modelValue","options","label"]),n(i,{modelValue:o.form.decimal_symbol,"onUpdate:modelValue":e[3]||(e[3]=r=>o.form.decimal_symbol=r),options:t.data.dropdowns.decimal_symbols,name:"decimal_symbol",label:l.__("Decimal Symbols"),required:!0},null,8,["modelValue","options","label"]),n(i,{modelValue:o.form.thousand_separator,"onUpdate:modelValue":e[4]||(e[4]=r=>o.form.thousand_separator=r),options:t.data.dropdowns.thousand_separators,name:"thousand_separator",label:l.__("Thousand Separator"),required:!0},null,8,["modelValue","options","label"]),n(i,{modelValue:o.form.currency_position,"onUpdate:modelValue":e[5]||(e[5]=r=>o.form.currency_position=r),options:t.data.dropdowns.currency_positions,name:"currency_position",label:l.__("Currency Position"),required:!0},null,8,["modelValue","options","label"]),n(i,{modelValue:o.form.currency_precision,"onUpdate:modelValue":e[6]||(e[6]=r=>o.form.currency_precision=r),options:t.data.dropdowns.currency_precisions,name:"currency_precision",label:l.__("Currency Precision"),required:!0},null,8,["modelValue","options","label"])],32)]),_:1},8,["title"])}const k=c(w,[["render",C]]);export{k as default};

import{_,r,o as a,c as o,f as b,t as i,d as s,a as m,B as h,b as V}from"./app.969842cf.js";const f={props:["modelValue","label","name","options","required","note","tooltip","searchable","placeholder","reduce_key","reduce_name","clearable","bottom_margin","multiple"],emits:["update:modelValue","change"],computed:{model:{get(){return this.modelValue==null||this.modelValue==null||this.modelValue==""?"":Number.isNaN(Number(this.modelValue))?this.modelValue:Number(this.modelValue)},set(l){this.$emit("update:modelValue",l),this.$emit("change",l)}}}},g={key:0,class:"form-label"},k={key:0,class:"text-muted"},N={key:1,class:"required"},y=["title"],q=V("i",{class:"fa-solid fa-circle-question"},null,-1),v=[q];function B(l,n,e,C,S,d){const c=r("v-select"),u=r("ValidationError");return a(),o("div",{class:h(e.bottom_margin?e.bottom_margin:"mb-3"),onClick:n[1]||(n[1]=t=>l.$page.props.errors[e.name]=null)},[e.label?(a(),o("label",g,[b(i(e.label)+" ",1),e.note?(a(),o("small",k,i(e.note),1)):s("",!0),e.required?(a(),o("span",N,"*")):s("",!0),e.tooltip?(a(),o("span",{key:2,class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.tooltip},v,8,y)):s("",!0)])):s("",!0),m(c,{multiple:!!e.multiple,reduce:t=>e.reduce_key?t[e.reduce_key]:t.id,modelValue:d.model,"onUpdate:modelValue":n[0]||(n[0]=t=>d.model=t),options:e.options,label:e.reduce_name?e.reduce_name:"name",clearable:!!e.clearable,searchable:!!e.searchable,placeholder:e.placeholder?e.placeholder:l.__("Select")},null,8,["multiple","reduce","modelValue","options","label","clearable","searchable","placeholder"]),m(u,{name:e.name},null,8,["name"])],2)}const E=_(f,[["render",B]]);export{E as S};
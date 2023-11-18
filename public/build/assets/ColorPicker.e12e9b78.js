import{P as u}from"./vanilla-picker.csp.29f78eb8.js";import{_ as m,r as p,o as s,c as r,b as l,f as _,t as n,d as i,B as h,a as f}from"./app.15906225.js";const k={props:["modelValue","label","name","type","placeholder","required","note","tooltip"],emits:["update:modelValue"],mounted(){this.picker=new u({parent:this.$refs.color_picker,editorFormat:"hex",popup:"left"});let t=this;this.picker.onDone=function(o){t.updateInput(o.hex)},this.modelValue&&this.picker.setColor(this.modelValue,!0)},data(){return{picker:null}},methods:{updateInput(t){this.$emit("update:modelValue",t)},openColorPicker(){this.picker.openHandler()}}},V={class:"mb-3"},b={class:"form-label"},C={key:0,class:"text-muted"},g={key:1,class:"ms-1 required"},v=["title"],y=l("i",{class:"fa-solid fa-circle-question"},null,-1),P=[y],x={class:"input-group"},q=["value","placeholder"];function B(t,o,e,N,E,c){const d=p("ValidationError");return s(),r("div",V,[l("label",b,[_(n(e.label)+" ",1),e.note?(s(),r("small",C,n(e.note),1)):i("",!0),e.required?(s(),r("span",g,"*")):i("",!0),e.tooltip?(s(),r("span",{key:2,class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.tooltip},P,8,v)):i("",!0)]),l("div",x,[l("input",{value:e.modelValue,onInput:o[0]||(o[0]=a=>t.$emit("update:modelValue",a.target.value)),class:h([{"is-invalid":t.$page.props.errors[e.name]},"form-control form-control-sm form-control-color"]),placeholder:e.placeholder,onFocus:o[1]||(o[1]=a=>t.$page.props.errors[e.name]=null),type:"text"},null,42,q),l("span",{ref:"color_picker",class:"input-group-text btn btn-sm btn-primary",onClick:o[2]||(o[2]=(...a)=>c.openColorPicker&&c.openColorPicker(...a))},n(t.__("Choose")),513)]),f(d,{name:e.name},null,8,["name"])])}const F=m(k,[["render",B]]);export{F as C};

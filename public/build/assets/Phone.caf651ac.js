import{V as _}from"./vanilla-picker.csp.fb5c8d56.js";import{_ as f,r as i,o,c as s,b as m,f as V,t as r,d as a,a as d,y as h}from"./app.f21ad38e.js";const b={props:["modelValue","label","name","type","placeholder","required","note","tooltip"],emits:["update:modelValue"],components:{VueTelInput:_},mounted(){this.tooltip&&new Tooltip(this.$refs.tooltip)},data(){return{phone:this.modelValue,propsBindings:{inputOptions:{styleClasses:"form-control form-control-sm"}}}}},g={class:"mb-3"},y={class:"form-label"},k={key:0,class:"text-muted"},v={key:1,class:"ms-1 required"},B=["title"],q=m("i",{class:"fa-solid fa-circle-question"},null,-1),x=[q];function N(u,t,e,C,l,E){const p=i("vue-tel-input"),c=i("ValidationError");return o(),s("div",g,[m("label",y,[V(r(e.label)+" ",1),e.note?(o(),s("small",k,r(e.note),1)):a("",!0),e.required?(o(),s("span",v,"*")):a("",!0),e.tooltip?(o(),s("span",{key:2,class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.tooltip},x,8,B)):a("",!0)]),d(p,h(l.propsBindings,{modelValue:l.phone,"onUpdate:modelValue":t[0]||(t[0]=n=>l.phone=n),onInput:t[1]||(t[1]=n=>u.$emit("update:modelValue",n.target.value))}),null,16,["modelValue"]),d(c,{name:e.name},null,8,["name"])])}const I=f(b,[["render",N]]);export{I as P};

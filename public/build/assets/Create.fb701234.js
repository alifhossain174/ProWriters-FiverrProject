import{I as k}from"./Input.af53aafe.js";import{_ as S,c,a as i,b as t,w as f,D as U,t as r,A as b,d as a,F as C,r as m,o as d,f as B}from"./app.2022c6b3.js";import{C as D}from"./CheckBox.95d1a9af.js";import{S as N}from"./Select.7c90381d.js";import{S as T}from"./SubmitButton.f33bde9e.js";import{D as A}from"./DatePicker.d77c1733.js";import{S as F}from"./vanilla-picker.csp.7eafc9f1.js";import"./bootstrap.esm.2333d793.js";import"./debounce.1c99c80a.js";const q={components:{Input:k,Select:N,SubmitButton:T,DatePicker:A,CheckBox:D,SearchCustomer:F},props:["data","existing_record"],watch:{"form.type":function(e){e=="fixed"&&(this.form.maximum_discount=null)},"form.first_order_only":function(e){e==!0&&(this.form.usage_limit_per_coupon=null,this.form.usage_limit_per_user=null)}},data(){return{form:this.$inertia.form(this.prepareForm()),formConfig:{preserveScroll:!0,onSuccess:()=>this.form.reset()}}},methods:{prepareForm(){let e={type:null,code:null,description:null,amount:null,active_date:null,expiry_date:null,minimum_spend:null,maximum_discount:null,usage_limit_per_coupon:null,usage_limit_per_user:null,specific_customer_only:null,customer_id:null,first_order_only:null,inactive:null,archive:null};return this.existing_record&&(e={...e,...this.existing_record}),e}}},I={class:"container page-container mt-4"},K={class:"row justify-content-center"},L={class:"col-md-8"},P={class:"row"},H={class:"col-md-2"},M={class:"h5"},E={class:"col-md-10"},j={class:"bg-light pt-2 pb-2 pl-1 pr-1"},G={class:"mt-4"},O={class:"row"},x={class:"col-md-6"},z={class:"row"},J={class:"col-md-6"},Q={class:"col-md-6"},R={class:"form-text text-muted"},W=t("hr",null,null,-1),X={class:"row mt-4"},Y={class:"col-md-2"},Z={class:"h5"},$={class:"col-md-10"},ee={class:"bg-light pt-2 pb-2 pl-1 pr-1"},oe={class:"mt-4"},le={class:"row"},te={class:"col-md-6"},se={class:"col-md-6"},ie={key:0,class:"row"},ne={class:"col-md-6"},me={class:"form-text text-muted"},re={class:"col-md-6"},ue={class:"form-text text-muted"},de={class:"mt-4"},_e={class:"mt-4"},ae={class:"mt-4"},pe={class:"row mt-2"},ce=t("div",{class:"col-md-2"},null,-1),fe={class:"col-md-10"},be=t("hr",null,null,-1);function ve(e,o,n,ye,l,Ve){const v=m("AppHead"),y=m("Link"),V=m("PageTitle"),h=m("Select"),u=m("Input"),p=m("DatePicker"),_=m("CheckBox"),g=m("SearchCustomer"),w=m("SubmitButton");return d(),c(C,null,[i(v,{title:n.data.title},null,8,["title"]),t("div",I,[i(V,{title:n.data.title},{default:f(()=>[i(y,{class:"btn btn-sm btn-light",href:n.data.urls.previous_page},{default:f(()=>[B(r(n.data.previous_link_text),1)]),_:1},8,["href"])]),_:1},8,["title"]),t("div",K,[t("div",L,[t("form",{onSubmit:o[19]||(o[19]=U(s=>n.existing_record?l.form.patch(n.data.urls.submit_form):l.form.post(n.data.urls.submit_form,l.formConfig),["prevent"]))},[t("div",P,[t("div",H,[t("div",M,r(e.__("Step 1")),1)]),t("div",E,[t("div",j,[t("b",null,r(e.__("General")),1)]),t("div",G,[t("div",O,[t("div",x,[i(h,{modelValue:l.form.type,"onUpdate:modelValue":o[0]||(o[0]=s=>l.form.type=s),options:n.data.dropdowns.coupon_types,label:e.__("Type"),name:"type",required:!0},null,8,["modelValue","options","label"])])]),i(u,{modelValue:l.form.code,"onUpdate:modelValue":o[1]||(o[1]=s=>l.form.code=s),name:"code",label:e.__("Code"),required:!0,placeholder:e.__("BlackFriday")},null,8,["modelValue","label","placeholder"]),i(u,{modelValue:l.form.description,"onUpdate:modelValue":o[2]||(o[2]=s=>l.form.description=s),name:"description",label:e.__("Description")},null,8,["modelValue","label"]),i(u,{modelValue:l.form.amount,"onUpdate:modelValue":o[3]||(o[3]=s=>l.form.amount=s),name:"amount",label:e.__("Amount"),tooltip:e.__("Value of the coupon"),required:!0,onKeypress:o[4]||(o[4]=s=>e.onlyNumber(s,l.form.amount))},null,8,["modelValue","label","tooltip"]),t("div",z,[t("div",J,[i(p,{modelValue:l.form.active_date,"onUpdate:modelValue":o[5]||(o[5]=s=>l.form.active_date=s),name:"active_date",label:e.__("Active Date"),tooltip:e.__("The date the coupon will be active"),required:!0},null,8,["modelValue","label","tooltip"])]),t("div",Q,[i(p,{modelValue:l.form.expiry_date,"onUpdate:modelValue":o[6]||(o[6]=s=>l.form.expiry_date=s),name:"expiry_date",label:e.__("Expiry Date"),tooltip:e.__("The date the coupon will expire")},null,8,["modelValue","label","tooltip"]),t("small",R,r(e.__("Leave it blank for no expiry")),1)])])])])]),W,t("div",X,[t("div",Y,[t("div",Z,r(e.__("Step 2")),1)]),t("div",$,[t("div",ee,[t("b",null,r(e.__("Usage limits")),1)]),t("div",oe,[t("div",le,[t("div",te,[i(u,{modelValue:l.form.minimum_spend,"onUpdate:modelValue":o[7]||(o[7]=s=>l.form.minimum_spend=s),name:"minimum_spend",label:e.__("Minimum Order Total"),onKeypress:o[8]||(o[8]=s=>e.onlyNumber(s,l.form.minimum_spend)),tooltip:e.__("This field allows you to set the minimum spend (subtotal) allowed to use the coupon."),required:!0},null,8,["modelValue","label","tooltip"])]),t("div",se,[l.form.type=="percentage"?(d(),b(u,{key:0,modelValue:l.form.maximum_discount,"onUpdate:modelValue":o[9]||(o[9]=s=>l.form.maximum_discount=s),name:"maximum_discount",label:e.__("Maximum Discount Amount"),tooltip:e.__("Maximum amount of discount at once"),onKeypress:o[10]||(o[10]=s=>e.onlyNumber(s,l.form.maximum_discount))},null,8,["modelValue","label","tooltip"])):a("",!0)])]),l.form.first_order_only?a("",!0):(d(),c("div",ie,[t("div",ne,[i(u,{type:"number",modelValue:l.form.usage_limit_per_coupon,"onUpdate:modelValue":o[11]||(o[11]=s=>l.form.usage_limit_per_coupon=s),name:"usage_limit_per_coupon",label:e.__("Usage limit per coupon"),tooltip:e.__("How many times this coupon can be used before it is void."),onKeypress:o[12]||(o[12]=s=>e.onlyNumber(s,l.form.usage_limit_per_coupon))},null,8,["modelValue","label","tooltip"]),t("small",me,r(e.__("Leave it blank for unlimited")),1)]),t("div",re,[i(u,{type:"number",modelValue:l.form.usage_limit_per_user,"onUpdate:modelValue":o[13]||(o[13]=s=>l.form.usage_limit_per_user=s),name:"usage_limit_per_user",label:e.__("Usage limit per user"),tooltip:e.__("How many times this coupon can be used by an individual user"),onKeypress:o[14]||(o[14]=s=>e.onlyNumber(s,l.form.usage_limit_per_user))},null,8,["modelValue","label","tooltip"]),t("small",ue,r(e.__("Leave it blank for unlimited")),1)])])),t("div",de,[i(_,{modelValue:l.form.specific_customer_only,"onUpdate:modelValue":o[15]||(o[15]=s=>l.form.specific_customer_only=s),name:"specific_customer_only",label:e.__("Specific customer only")},null,8,["modelValue","label"])]),l.form.specific_customer_only?(d(),b(g,{key:1,modelValue:l.form.customer_id,"onUpdate:modelValue":o[16]||(o[16]=s=>l.form.customer_id=s),label:e.__("Customer"),name:"customer_id",options:n.data.dropdowns.customers},null,8,["modelValue","label","options"])):a("",!0),t("div",_e,[i(_,{modelValue:l.form.first_order_only,"onUpdate:modelValue":o[17]||(o[17]=s=>l.form.first_order_only=s),name:"first_order_only",label:e.__("First order only"),tooltip:e.__("Customer can use it on the first order only")},null,8,["modelValue","label","tooltip"])]),t("div",ae,[i(_,{modelValue:l.form.inactive,"onUpdate:modelValue":o[18]||(o[18]=s=>l.form.inactive=s),name:"inactive",label:e.__("Inactive")},null,8,["modelValue","label"])])])])]),t("div",pe,[ce,t("div",fe,[be,i(w,{disabled:l.form.processing},null,8,["disabled"])])])],32)])])])],64)}const Ne=S(q,[["render",ve]]);export{Ne as default};

import{I as S}from"./Input.22a5d0b7.js";import{_ as C,r as m,o as i,c as d,b as o,D as h,B as k,t as l,a as r,d as c,F as w,q as P,w as y,J as L,U as T,f as p}from"./app.7185dbf0.js";import{S as U}from"./SubmitButton.78189237.js";import"./vanilla-picker.csp.ad3cebef.js";import{P as q}from"./Phone.fbcfb39e.js";import{S as M}from"./SocialLogin.4ee6a53c.js";import"./bootstrap.esm.2333d793.js";import"./debounce.eb1a3499.js";const I={components:{Input:S,Phone:q,SubmitButton:U,SocialLogin:M},data(){return{form:this.$inertia.form({customer_type:"returning_customer",first_name:"",last_name:"",email:"",password:"",password_confirmation:"",phone:"",coupon_code:""}),formConfig:{preserveScroll:!1},bindProps:{placeholder:this.__("Enter your phone number"),inputClasses:"form-control"}}},methods:{changeCustomerType(e){this.form.customer_type=e}}},R={class:"nav nav-tabs"},B={class:"nav-item"},F={class:"nav-item"},N={key:0,class:"p-2"},O={class:"row"},A={class:"col-md-6"},E={class:"col-md-6"},D={key:1,class:"p-2"},H={class:"row"},z={class:"col-md-6"},J={class:"col-md-6"},Q={class:"row"},Y={class:"col-md-6"},j={class:"col-md-6"},G={class:"row"},K={class:"col-md-6"},W={class:"col-md-6"},X={class:"border rounded-3 p-3 mb-2"},Z={class:"float-none w-auto px-3",style:{"margin-left":"auto","margin-right":"auto"}},x={class:"text-center mb-3"};function $(e,t,a,V,s,u){const _=m("Input"),b=m("SubmitButton"),v=m("Phone"),f=m("SocialLogin");return i(),d(w,null,[o("ul",R,[o("li",B,[o("a",{onClick:t[0]||(t[0]=h(n=>u.changeCustomerType("returning_customer"),["prevent"])),href:"#",class:k(["nav-link",{active:s.form.customer_type=="returning_customer"}])},l(e.__("Returning customer")),3)]),o("li",F,[o("a",{onClick:t[1]||(t[1]=h(n=>u.changeCustomerType("new_customer"),["prevent"])),href:"#",class:k(["nav-link",{active:s.form.customer_type=="new_customer"}])},l(e.__("New customer")),3)])]),s.form.customer_type=="returning_customer"?(i(),d("div",N,[o("form",{onSubmit:t[4]||(t[4]=h(n=>s.form.post(e.route("checkout.loginOrRegister"),s.formConfig),["prevent"]))},[o("div",O,[o("div",A,[r(_,{modelValue:s.form.email,"onUpdate:modelValue":t[2]||(t[2]=n=>s.form.email=n),name:"email",label:e.__("Email"),required:!0},null,8,["modelValue","label"])]),o("div",E,[r(_,{modelValue:s.form.password,"onUpdate:modelValue":t[3]||(t[3]=n=>s.form.password=n),type:"password",name:"password",label:e.__("Password"),required:!0},null,8,["modelValue","label"])])]),r(b,{button_text:e.__("Login")},null,8,["button_text"])],32)])):c("",!0),s.form.customer_type=="new_customer"?(i(),d("div",D,[o("form",{onSubmit:t[11]||(t[11]=h(n=>s.form.post(e.route("checkout.loginOrRegister"),s.formConfig),["prevent"]))},[o("div",H,[o("div",z,[r(_,{modelValue:s.form.first_name,"onUpdate:modelValue":t[5]||(t[5]=n=>s.form.first_name=n),name:"first_name",label:e.__("First Name"),required:!0},null,8,["modelValue","label"])]),o("div",J,[r(_,{modelValue:s.form.last_name,"onUpdate:modelValue":t[6]||(t[6]=n=>s.form.last_name=n),name:"last_name",label:e.__("Last Name"),required:!0},null,8,["modelValue","label"])])]),o("div",Q,[o("div",Y,[r(_,{modelValue:s.form.email,"onUpdate:modelValue":t[7]||(t[7]=n=>s.form.email=n),name:"email",label:e.__("Email"),required:!0},null,8,["modelValue","label"])]),o("div",j,[r(v,{modelValue:s.form.phone,"onUpdate:modelValue":t[8]||(t[8]=n=>s.form.phone=n),label:e.__("Phone"),name:"phone"},null,8,["modelValue","label"])])]),o("div",G,[o("div",K,[r(_,{modelValue:s.form.password,"onUpdate:modelValue":t[9]||(t[9]=n=>s.form.password=n),type:"password",name:"password",label:e.__("Password"),required:!0},null,8,["modelValue","label"])]),o("div",W,[r(_,{modelValue:s.form.password_confirmation,"onUpdate:modelValue":t[10]||(t[10]=n=>s.form.password_confirmation=n),type:"password",name:"password_confirmation",label:e.__("Confirm Password"),required:!0},null,8,["modelValue","label"])])]),r(b,{button_text:e.__("Register")},null,8,["button_text"])],32)])):c("",!0),o("fieldset",X,[o("legend",Z,l(e.__("or")),1),o("div",x,[r(f,{is_checkout:!0})])])],64)}const oo=C(I,[["render",$]]),eo={components:{RegisterOrLogin:oo},props:["data"],data(){return{coupon_code:this.data.coupon?this.data.coupon.code:null,coupon_discount:this.data.coupon?parseFloat(this.data.coupon.discount_amount):0,coupon_error_message:null,form:{sales_tax_rate:0,sales_tax_amount:0,coupon_code:this.data.coupon?this.data.coupon.code:null}}},methods:{applyCoupon(){let e=this;e.coupon_error_message=null,axios.post(route("coupons.verify"),{coupon_code:this.coupon_code}).then(function(t){t.data.status==2?e.coupon_error_message=t.data.message:(e.coupon_discount=t.data.amount,e.form.coupon_code=e.coupon_code)})},removeCouponCode(){this.coupon_code=null,this.coupon_discount=null,this.form.coupon_code=null,axios.post(route("coupons.remove"))},submitForm(){this.$inertia.post(route("proceed_to_payment"),this.form)},removeCartItem(e){this.$inertia.delete(route("cart.destroy.item",e),{preserveScroll:!0})}}},to={class:"container page-container"},so={key:0},no={class:"card"},lo={class:"card-body"},ro={class:"row"},ao={key:0,class:"col-md-12"},io={class:"col-md-12"},uo={class:"card-title order-form-section-title"},_o={class:"table"},mo=o("th",null,null,-1),co={class:"text-end"},po=["onClick"],fo=o("i",{class:"fa-solid fa-circle-minus"},null,-1),ho=[fo],bo={class:"text-muted"},vo={class:"text-end"},go={class:"col-md-8"},yo=o("i",{class:"fa-solid fa-plus"},null,-1),wo={class:"col-md-4 text-end"},ko={key:0,class:"input-group"},Co=["placeholder"],Vo=["disabled"],So={class:"invalid-feedback d-block"},Po={class:"row"},Lo=o("div",{class:"col-md-7"},null,-1),To={class:"col-md-5"},Uo={class:"table table-striped"},qo={class:"text-end"},Mo={key:0},Io={class:"text-end"},Ro={key:1},Bo={class:"text-end"},Fo={class:"text-end"},No={class:"d-grid gap-2"},Oo=["disabled"],Ao=o("i",{class:"fa-solid fa-arrow-right-long"},null,-1),Eo={key:0,class:"text-center"},Do={key:1};function Ho(e,t,a,V,s,u){const _=m("AppHead"),b=m("PageTitle"),v=m("RegisterOrLogin"),f=m("Link");return i(),d(w,null,[r(_,{title:a.data.title},null,8,["title"]),o("div",to,[r(b,{title:a.data.title},null,8,["title"]),a.data.items?(i(),d("div",so,[o("div",no,[o("div",lo,[o("div",ro,[a.data.is_logged_in?c("",!0):(i(),d("div",ao,[r(v)])),o("div",io,[o("h5",uo,l(e.__("Your order")),1),o("table",_o,[o("thead",null,[o("tr",null,[mo,o("th",null,l(e.__("Item")),1),o("th",null,l(e.__("Price")),1),o("th",null,l(e.__("Quantity")),1),o("th",co,l(e.__("Sub Total")),1)])]),o("tbody",null,[(i(!0),d(w,null,P(a.data.items,(n,g)=>(i(),d("tr",{key:g},[o("td",null,[o("button",{onClick:zo=>u.removeCartItem(g),class:"btn btn-link"},ho,8,po)]),o("td",null,[r(f,{href:e.route("customer.tasks.create",{id:g})},{default:y(()=>[p(l(n.name),1)]),_:2},1032,["href"]),o("p",bo,l(n.title),1)]),o("td",null,l(e.formatMoney(n.price)),1),o("td",null,l(n.quantity),1),o("td",vo,l(e.formatMoney(n.price)),1)]))),128))])])]),o("div",go,[r(f,{href:a.data.links.create_order,class:"btn btn-outline-success btn-sm"},{default:y(()=>[yo,p(" "+l(e.__("Add another task")),1)]),_:1},8,["href"])]),o("div",wo,[s.form.coupon_code?c("",!0):(i(),d("div",ko,[L(o("input",{type:"text",class:"form-control form-control-sm",placeholder:e.__("Coupon code"),"onUpdate:modelValue":t[0]||(t[0]=n=>s.coupon_code=n)},null,8,Co),[[T,s.coupon_code]]),o("button",{disabled:!s.coupon_code,onClick:t[1]||(t[1]=(...n)=>u.applyCoupon&&u.applyCoupon(...n)),type:"button",class:"btn btn-secondary btn-sm"},l(e.__("Apply coupon")),9,Vo),o("div",So,l(s.coupon_error_message),1)]))])])])]),o("div",Po,[Lo,o("div",To,[o("table",Uo,[o("tbody",null,[o("tr",null,[o("td",null,l(e.__("Sub Total")),1),o("td",qo,l(e.formatMoney(a.data.sub_total)),1)]),s.form.coupon_code?(i(),d("tr",Mo,[o("td",null,[p(l(e.__("Coupon"))+" : "+l(s.form.coupon_code)+" ",1),o("a",{href:"#",class:"fs-8",onClick:t[2]||(t[2]=h((...n)=>u.removeCouponCode&&u.removeCouponCode(...n),["stop","prevent"]))},"[ x "+l(e.__("Remove"))+"]",1)]),o("td",Io,l(e.formatMoney(s.coupon_discount)),1)])):c("",!0),a.data.sales_tax_information.enable_sales_tax?(i(),d("tr",Ro,[o("td",null,l(e.__("Sales Tax"))+" ("+l(Math.round(a.data.sales_tax_information.sales_tax_rate,2))+"%)",1),o("td",Bo,l(e.formatMoney(a.data.sales_tax_information.sales_tax_amount)),1)])):c("",!0),o("tr",null,[o("td",null,l(e.__("Total")),1),o("td",Fo,l(e.formatMoney(a.data.total-s.coupon_discount)),1)])])]),o("div",No,[o("button",{disabled:!e.$page.props.is_user_logged_in||a.data.items.length==0,onClick:t[3]||(t[3]=(...n)=>u.submitForm&&u.submitForm(...n)),type:"button",class:"btn btn-primary btn-sm"},[p(l(e.__("Proceed to payment"))+" ",1),Ao],8,Oo),e.$page.props.is_user_logged_in?c("",!0):(i(),d("div",Eo,l(e.__("Please login to proceed")),1))])])])])):(i(),d("div",Do,[p(l(a.data.no_item_message)+" ",1),r(f,{href:a.data.links.create_order},{default:y(()=>[p(l(e.__("Create new order")),1)]),_:1},8,["href"])]))])],64)}const Zo=C(eo,[["render",Ho]]);export{Zo as default};

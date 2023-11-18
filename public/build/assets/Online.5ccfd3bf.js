import h from"./SettingsLayout.aad8ae28.js";import w from"./ActionToolBar.7ad35adb.js";import S from"./PayPal.137f5223.js";import v from"./Stripe.2414e0c2.js";import b from"./Braintree.f8885625.js";import L from"./PayStack.0f81f0ce.js";import A from"./PayU.eaab0e4e.js";import{_ as C,A as o,w as c,r as a,o as e,a as m,b as l,c as _,q as N,f as T,t as V,B as U,F as x,d as r}from"./app.6486bb89.js";import"./Menu.0a37914a.js";import"./bootstrap.esm.2333d793.js";import"./Input.744111e9.js";import"./CheckBox.eb1c4a7d.js";import"./Select.0cc97eb8.js";import"./SubmitButton.6b08448a.js";import"./vanilla-picker.csp.273e51c7.js";import"./debounce.2741a44f.js";const F={components:{SettingsLayout:h,ActionToolBar:w,PayPal:S,Stripe:v,Braintree:b,PayStack:L,PayU:A},props:["data"],provide(){return{data:this.data}},data(){return{toolbar:{title:this.data.title,hide_save_button:!0}}}},q={class:"nav nav-tabs"},z={class:"p-4"};function D(n,E,t,O,u,j){const p=a("ActionToolBar"),y=a("Link"),d=a("PayPal"),f=a("Stripe"),k=a("Braintree"),g=a("PayStack"),P=a("PayU"),B=a("SettingsLayout");return e(),o(B,{title:t.data.title},{default:c(()=>[m(p,{toolbar:u.toolbar},null,8,["toolbar"]),l("ul",q,[(e(!0),_(x,null,N(t.data.gateways,(s,i)=>(e(),_("li",{key:i,class:"nav-item"},[m(y,{href:n.route("admin.settings.payment.gateways",{gateway:s.slug}),class:U(["nav-link",{active:t.data.current_gateway==i}])},{default:c(()=>[T(V(n.__(s.name)),1)]),_:2},1032,["href","class"])]))),128))]),l("div",z,[t.data.current_gateway=="paypal_checkout"?(e(),o(d,{key:0})):r("",!0),t.data.current_gateway=="stripe"?(e(),o(f,{key:1})):r("",!0),t.data.current_gateway=="braintree"?(e(),o(k,{key:2})):r("",!0),t.data.current_gateway=="paystack"?(e(),o(g,{key:3})):r("",!0),t.data.current_gateway=="payu"?(e(),o(P,{key:4})):r("",!0)])]),_:1},8,["title"])}const ot=C(F,[["render",D]]);export{ot as default};

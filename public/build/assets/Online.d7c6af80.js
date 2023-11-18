import h from"./SettingsLayout.5dd900f7.js";import w from"./ActionToolBar.60eb8f4e.js";import S from"./PayPal.7bf04bca.js";import v from"./Stripe.7d290003.js";import b from"./Braintree.10c53f8c.js";import L from"./PayStack.6730e2c6.js";import A from"./PayU.d741d808.js";import{_ as C,A as o,w as c,r as a,o as e,a as m,b as l,c as _,q as N,f as T,t as V,B as U,F as x,d as r}from"./app.f21ad38e.js";import"./Menu.36275912.js";import"./bootstrap.esm.2333d793.js";import"./Input.c3d1dec4.js";import"./CheckBox.e0d5ac7d.js";import"./Select.bb2757ba.js";import"./SubmitButton.7c32795f.js";import"./vanilla-picker.csp.fb5c8d56.js";import"./debounce.af629436.js";const F={components:{SettingsLayout:h,ActionToolBar:w,PayPal:S,Stripe:v,Braintree:b,PayStack:L,PayU:A},props:["data"],provide(){return{data:this.data}},data(){return{toolbar:{title:this.data.title,hide_save_button:!0}}}},q={class:"nav nav-tabs"},z={class:"p-4"};function D(n,E,t,O,u,j){const p=a("ActionToolBar"),y=a("Link"),d=a("PayPal"),f=a("Stripe"),k=a("Braintree"),g=a("PayStack"),P=a("PayU"),B=a("SettingsLayout");return e(),o(B,{title:t.data.title},{default:c(()=>[m(p,{toolbar:u.toolbar},null,8,["toolbar"]),l("ul",q,[(e(!0),_(x,null,N(t.data.gateways,(s,i)=>(e(),_("li",{key:i,class:"nav-item"},[m(y,{href:n.route("admin.settings.payment.gateways",{gateway:s.slug}),class:U(["nav-link",{active:t.data.current_gateway==i}])},{default:c(()=>[T(V(n.__(s.name)),1)]),_:2},1032,["href","class"])]))),128))]),l("div",z,[t.data.current_gateway=="paypal_checkout"?(e(),o(d,{key:0})):r("",!0),t.data.current_gateway=="stripe"?(e(),o(f,{key:1})):r("",!0),t.data.current_gateway=="braintree"?(e(),o(k,{key:2})):r("",!0),t.data.current_gateway=="paystack"?(e(),o(g,{key:3})):r("",!0),t.data.current_gateway=="payu"?(e(),o(P,{key:4})):r("",!0)])]),_:1},8,["title"])}const ot=C(F,[["render",D]]);export{ot as default};
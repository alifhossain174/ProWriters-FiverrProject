import u from"./CheckoutLayout.e7574d11.js";import{_ as f,A as p,w as _,r as b,o as d,b as r,t as n,c,d as h,f as y}from"./app.6486bb89.js";import"./bootstrap.esm.2333d793.js";const C={props:["data"],components:{CheckoutLayout:u},mounted(){this.includeStripe("js.stripe.com/v3",function(){this.initializeStripe()}.bind(this))},data(){return{publishableKey:this.data.publishable_key,stripe:null,cardElement:null,isButtonDisabled:!0,loading:!1,errorText:null,stripeStyle:{base:{color:"#32325d",fontFamily:'"Nunito", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}},methods:{includeStripe(e,t){let i=document,a="script",o=i.createElement(a),s=i.getElementsByTagName(a)[0];o.src="//"+e,t&&o.addEventListener("load",function(l){t(null,l)},!1),s.parentNode.insertBefore(o,s)},initializeStripe(){let e=this;e.loading=!1,this.stripe=Stripe(this.publishableKey);var t=this.stripe.elements();this.cardElement=t.create("card",{hidePostalCode:!0,style:this.stripeStyle}),this.cardElement.mount("#card-element"),e.disableConfirmButton(),this.cardElement.on("change",function(i){i.complete?(e.errorText="",e.enableConfirmButton()):i.error?(e.errorText=i.error.message,e.disableConfirmButton()):(e.errorText="",e.enableConfirmButton())})},disableConfirmButton(){this.isButtonDisabled=!0},enableConfirmButton(){this.isButtonDisabled=!1},showError(e){this.showAlertMessage(e)},onSubmit(){this.disableConfirmButton(),this.loading=!0,this.stripe.createPaymentMethod({type:"card",card:this.cardElement}).then(this.stripePaymentMethodHandler)},stripePaymentMethodHandler(e){if(this.loading=!1,e.error)e.error.hasOwnProperty("message")?this.showError(e.error.message):this.showError(e.error),this.enableConfirmButton();else{let t=this;t.loading=!0,axios.post(this.data.urls.stripe_process,{payment_method_id:e.paymentMethod.id}).then(function(i){t.loading=!1,t.handleServerResponse(i.data)}).catch(function(i){t.loading=!1,t.enableConfirmButton()})}},handleServerResponse(e){e.error?(this.showError(e.error),this.enableConfirmButton()):e.requires_action?(this.disableConfirmButton(),this.stripe.handleCardAction(e.payment_intent_client_secret).then(this.handleStripeJsResult)):e.success&&(this.disableConfirmButton(),this.loading=!0,this.$inertia.get(e.redirect_url))},handleStripeJsResult(e){if(e.error)this.showError(e.error.message),this.enableConfirmButton();else{let t=this;t.disableConfirmButton(),axios.post(this.data.urls.stripe_process,{payment_intent_id:e.paymentIntent.id}).then(function(i){t.handleServerResponse(i.data)}).catch(function(i){t.showError(__("Could not process your payment. Please try again.")),t.enableConfirmButton()})}}}},g={id:"payment-form"},B={class:"mb-3"},S={class:"form-label",for:"card-element"},E=r("div",{id:"card-element"},null,-1),w={key:0,class:"invalid-feedback d-block"},k=["disabled"],v=r("i",{class:"fas fa-shopping-cart"},null,-1),x={key:0,class:"text-center"};function T(e,t,i,a,o,s){const l=b("CheckoutLayout");return d(),p(l,{data:i.data,title:e.__("Pay with")+" "+i.data.gateway_name,is_payment_gateway_page:!0},{default:_(()=>[r("form",g,[r("div",B,[r("label",S,n(e.__("Credit or Debit Card")),1),E,o.errorText?(d(),c("div",w,n(o.errorText),1)):h("",!0)]),r("button",{type:"button",class:"btn btn-success btn-block",disabled:o.isButtonDisabled,onClick:t[0]||(t[0]=(...m)=>s.onSubmit&&s.onSubmit(...m))},[v,y(" "+n(e.__("Confirm Payment")),1)],8,k)]),o.loading?(d(),c("div",x,n(e.__("Please wait "))+"...",1)):h("",!0)]),_:1},8,["data","title"])}const M=f(C,[["render",T]]);export{M as default};

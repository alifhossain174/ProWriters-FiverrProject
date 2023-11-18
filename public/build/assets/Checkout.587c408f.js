import p from"./CheckoutLayout.e7574d11.js";import{_ as w,A as g,w as y,r as m,o as u,b as v,c as b,t as E,d as _}from"./app.6486bb89.js";import"./bootstrap.esm.2333d793.js";/*!
 * paypal-js v5.1.4 (2022-11-29T23:08:21.847Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){var r=document.querySelector('script[src="'.concat(e,'"]'));if(r===null)return null;var a=d(e,t),n=r.cloneNode();if(delete n.dataset.uidAuto,Object.keys(n.dataset).length!==Object.keys(a.dataset).length)return null;var o=!0;return Object.keys(n.dataset).forEach(function(i){n.dataset[i]!==a.dataset[i]&&(o=!1)}),o?r:null}function A(e){var t=e.url,r=e.attributes,a=e.onSuccess,n=e.onError,o=d(t,r);o.onerror=n,o.onload=a,document.head.insertBefore(o,document.head.firstElementChild)}function B(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),D(e);var r=Object.keys(e).filter(function(o){return typeof e[o]<"u"&&e[o]!==null&&e[o]!==""}).reduce(function(o,i){var c=e[i].toString();return i.substring(0,5)==="data-"?o.dataAttributes[i]=c:o.queryParams[i]=c,o},{queryParams:{},dataAttributes:{}}),a=r.queryParams,n=r.dataAttributes;return{url:"".concat(t,"?").concat(x(a)),dataAttributes:n}}function x(e){var t="";return Object.keys(e).forEach(function(r){t.length!==0&&(t+="&"),t+=r+"="+e[r]}),t}function k(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}function d(e,t){t===void 0&&(t={});var r=document.createElement("script");return r.src=e,Object.keys(t).forEach(function(a){r.setAttribute(a,t[a]),a==="data-csp-nonce"&&r.setAttribute("nonce",t["data-csp-nonce"])}),r}function D(e){var t=e["merchant-id"],r=e["data-merchant-id"],a="",n="";return Array.isArray(t)?t.length>1?(a="*",n=t.toString()):a=t.toString():typeof t=="string"&&t.length>0?a=t:typeof r=="string"&&r.length>0&&(a="*",n=r),e["merchant-id"]=a,e["data-merchant-id"]=n,e}function L(e,t){if(t===void 0&&(t=l()),f(e,t),typeof window>"u")return t.resolve(null);var r=B(e),a=r.url,n=r.dataAttributes,o=n["data-namespace"]||"paypal",i=s(o);return S(a,n)&&i?t.resolve(i):C({url:a,attributes:n},t).then(function(){var c=s(o);if(c)return c;throw new Error("The window.".concat(o," global variable is not available."))})}function C(e,t){t===void 0&&(t=l()),f(e,t);var r=e.url,a=e.attributes;if(typeof r!="string"||r.length===0)throw new Error("Invalid url.");if(typeof a<"u"&&typeof a!="object")throw new Error("Expected attributes to be an object.");return new t(function(n,o){if(typeof window>"u")return n();A({url:r,attributes:a,onSuccess:function(){return n()},onError:function(){var i=new Error('The script "'.concat(r,'" failed to load.'));return window.fetch?fetch(r).then(function(c){return c.status===200&&o(i),c.text()}).then(function(c){var h=k(c);o(new Error(h))}).catch(function(c){o(c)}):o(i)}})})}function l(){if(typeof Promise>"u")throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function s(e){return window[e]}function f(e,t){if(typeof e!="object"||e===null)throw new Error("Expected an options object.");if(typeof t<"u"&&typeof t!="function")throw new Error("Expected PromisePonyfill to be a function.")}const j={props:["data"],components:{CheckoutLayout:p},async mounted(){let e;try{e=await L({"client-id":this.data.client_id})}catch(t){console.error("failed to load the PayPal JS SDK script",t)}if(e)try{await this.loadButtons(e)}catch(t){console.error("failed to render the PayPal Buttons",t)}},data(){return{loading:!0,errorText:null}},methods:{hideLoading(){this.loading=!1,this.$refs.paypalButton.style.display="block"},showLoading(){this.loading=!0,this.$refs.paypalButton.style.display="none"},loadButtons(e){let t=this;return e.Buttons({createOrder:function(r,a){return axios.post(t.data.urls.generate_token).then(function(n){return n.data.status=="success"?n.data.id:null})},onApprove:function(r,a){r.orderID&&(t.$inertia.post(t.data.urls.capture_payment,{order_id:r.orderID}),t.showLoading())},onDisplay:function(){t.hideLoading()},onError:function(r){t.hideLoading(),showError(t.__('"Something went wrong, please try again later, or use a different payment method"'))}}).render("#paypal-button-container")},showError(e){this.showAlertMessage(e)}}},I={ref:"paypalButton",id:"paypal-button-container"},O={key:0,class:"text-center"};function M(e,t,r,a,n,o){const i=m("CheckoutLayout");return u(),g(i,{data:r.data,title:e.__("Pay with")+" "+r.data.gateway_name,is_payment_gateway_page:!0},{default:y(()=>[v("div",I,null,512),n.loading?(u(),b("div",O,E(e.__("Please wait "))+"...",1)):_("",!0)]),_:1},8,["data","title"])}const R=w(j,[["render",M]]);export{R as default};
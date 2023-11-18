import g from"./SettingsLayout.f3151d31.js";import v from"./ActionToolBar.ba87cc59.js";import{I as k}from"./Input.8aaee37e.js";import{T as U}from"./TextArea.6fdedaa7.js";import{_ as u,o as d,c as C,b as _,e as L,A as S,w as s,r as i,a as r,D as B}from"./app.15906225.js";import{S as H}from"./Select.15c2a802.js";import{S as T}from"./SubmitButton.9e7b4015.js";import"./vanilla-picker.csp.29f78eb8.js";import{F}from"./FileChooser.dd04bb33.js";import{C as h}from"./ColorPicker.e12e9b78.js";import"./Menu.80c22340.js";import"./bootstrap.esm.2333d793.js";import"./debounce.23c94884.js";const y={props:["title"]},A={class:"border rounded-3 p-3 mb-4"},I=["innerHTML"];function P(t,e,m,f,o,p){return d(),C("fieldset",A,[_("legend",{class:"float-none w-auto px-3 fs-8",innerHTML:m.title},null,8,I),L(t.$slots,"default")])}const W=u(y,[["render",P]]),M={props:["data","records"],components:{SettingsLayout:g,ActionToolBar:v,Input:k,Select:H,TextArea:U,SubmitButton:T,FileChooser:F,ColorPicker:h,Fieldset:W},data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}},N={class:"row"},O={class:"col-md-6"},D={class:"col-md-6"},E={class:"row"},j={class:"col-md-6"},q={class:"col-md-6"},z={class:"row"},G={class:"col-md-6"},J={class:"col-md-6"};function K(t,e,m,f,o,p){const w=i("ActionToolBar"),n=i("ColorPicker"),b=i("Fieldset"),V=i("Select"),a=i("FileChooser"),c=i("SettingsLayout");return d(),S(c,{title:m.data.title},{default:s(()=>[_("form",{onSubmit:e[19]||(e[19]=B(l=>o.form.patch(t.route("admin.settings.websiteUi.update")),["prevent"]))},[r(w,{disable_save_button:o.form.processing,toolbar:o.toolbar},null,8,["disable_save_button","toolbar"]),r(b,{title:t.__("Top Navigation")},{default:s(()=>[r(n,{modelValue:o.form.website_top_nav_bg_color,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.website_top_nav_bg_color=l),label:t.__("Background color of top menu"),name:"website_top_nav_bg_color"},null,8,["modelValue","label"]),r(n,{modelValue:o.form.website_top_nav_link_color,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.website_top_nav_link_color=l),label:t.__("Link color of top menu"),name:"website_top_nav_link_color"},null,8,["modelValue","label"]),r(n,{modelValue:o.form.website_top_nav_link_hover_color,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.website_top_nav_link_hover_color=l),label:t.__("Link Hover color of top menu"),name:"website_top_nav_link_hover_color"},null,8,["modelValue","label"]),r(n,{modelValue:o.form.website_order_now_button_bg_color,"onUpdate:modelValue":e[3]||(e[3]=l=>o.form.website_order_now_button_bg_color=l),label:t.__("Order now button background color on top menu"),name:"website_order_now_button_bg_color"},null,8,["modelValue","label"]),r(n,{modelValue:o.form.website_order_now_button_hover_bg_color,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.website_order_now_button_hover_bg_color=l),label:t.__("Order now button hover background color on top menu"),name:"website_order_now_button_hover_bg_color"},null,8,["modelValue","label"]),r(n,{modelValue:o.form.website_order_now_button_text_color,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.website_order_now_button_text_color=l),label:t.__("Order now button text color on top menu"),name:"website_order_now_button_text_color"},null,8,["modelValue","label"])]),_:1},8,["title"]),r(b,{title:t.__("Homepage Hero Section")},{default:s(()=>[_("div",N,[_("div",O,[r(V,{modelValue:o.form.website_hero_image_position,"onUpdate:modelValue":e[6]||(e[6]=l=>o.form.website_hero_image_position=l),options:m.data.dropdowns.image_positions,label:t.__("Hero Image Position"),name:"website_hero_image_position"},null,8,["modelValue","options","label"])]),_("div",D,[r(a,{modelValue:o.form.website_hero_image,"onUpdate:modelValue":e[7]||(e[7]=l=>o.form.website_hero_image=l),label:t.__("Hero Image"),name:"website_hero_image"},null,8,["modelValue","label"])])]),_("div",E,[_("div",j,[r(n,{modelValue:o.form.website_hero_bg_color,"onUpdate:modelValue":e[8]||(e[8]=l=>o.form.website_hero_bg_color=l),label:t.__("Hero Background Color"),name:"website_hero_bg_color"},null,8,["modelValue","label"])]),_("div",q,[r(n,{modelValue:o.form.website_hero_text_color,"onUpdate:modelValue":e[9]||(e[9]=l=>o.form.website_hero_text_color=l),label:t.__("Hero Text Color"),name:"website_hero_text_color"},null,8,["modelValue","label"])])])]),_:1},8,["title"]),r(b,{title:t.__("Footer")},{default:s(()=>[r(n,{modelValue:o.form.website_footer_bg_color,"onUpdate:modelValue":e[10]||(e[10]=l=>o.form.website_footer_bg_color=l),label:t.__("Background color of footer section"),name:"website_footer_bg_color"},null,8,["modelValue","label"]),r(n,{modelValue:o.form.website_footer_text_color,"onUpdate:modelValue":e[11]||(e[11]=l=>o.form.website_footer_text_color=l),label:t.__("Text color of footer section"),name:"website_footer_text_color"},null,8,["modelValue","label"]),r(n,{modelValue:o.form.website_footer_link_color,"onUpdate:modelValue":e[12]||(e[12]=l=>o.form.website_footer_link_color=l),label:t.__("Link color of footer section"),name:"website_footer_link_color"},null,8,["modelValue","label"]),r(n,{modelValue:o.form.website_footer_link_hover_color,"onUpdate:modelValue":e[13]||(e[13]=l=>o.form.website_footer_link_hover_color=l),label:t.__("Link Hover color of footer section"),name:"website_footer_link_hover_color"},null,8,["modelValue","label"])]),_:1},8,["title"]),r(b,{title:t.__("Links")},{default:s(()=>[_("div",z,[_("div",G,[r(n,{modelValue:o.form.website_link_color,"onUpdate:modelValue":e[14]||(e[14]=l=>o.form.website_link_color=l),label:t.__("Link Color"),name:"website_link_color"},null,8,["modelValue","label"])]),_("div",J,[r(n,{modelValue:o.form.website_link_hover_color,"onUpdate:modelValue":e[15]||(e[15]=l=>o.form.website_link_hover_color=l),label:t.__("Link Hover Color"),name:"website_link_hover_color"},null,8,["modelValue","label"])])])]),_:1},8,["title"]),r(a,{modelValue:o.form.website_logo,"onUpdate:modelValue":e[16]||(e[16]=l=>o.form.website_logo=l),label:t.__("Website Logo"),name:"website_logo"},null,8,["modelValue","label"]),r(a,{modelValue:o.form.website_favicon,"onUpdate:modelValue":e[17]||(e[17]=l=>o.form.website_favicon=l),label:t.__("Website Favicon"),name:"website_favicon"},null,8,["modelValue","label"]),r(a,{modelValue:o.form.website_accept_payment_image,"onUpdate:modelValue":e[18]||(e[18]=l=>o.form.website_accept_payment_image=l),label:t.__("Image for - We accept payments via section"),name:"website_accept_payment_image"},null,8,["modelValue","label"])],32)]),_:1},8,["title"])}const _o=u(M,[["render",K]]);export{_o as default};
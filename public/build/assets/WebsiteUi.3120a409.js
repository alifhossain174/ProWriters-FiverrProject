import p from"./SettingsLayout.c4c1eef0.js";import w from"./ActionToolBar.d201cce6.js";import{I as V}from"./Input.9153dc0b.js";import{T as v}from"./TextArea.667d8c75.js";import{_ as g,A as c,w as m,r as i,o as k,b as n,a as r,D as U}from"./app.40136f18.js";import{S as C}from"./Select.d1ffb357.js";import{S as L}from"./SubmitButton.96a19e7f.js";import"./vanilla-picker.csp.e27d2510.js";import{F as S}from"./FileChooser.07a78c07.js";import{C as B}from"./ColorPicker.090aaf15.js";import{F}from"./Fieldset.e9c4f863.js";import"./Menu.07e62899.js";import"./bootstrap.esm.2333d793.js";import"./debounce.84e4095c.js";const H={props:["data","records"],components:{SettingsLayout:p,ActionToolBar:w,Input:V,Select:C,TextArea:v,SubmitButton:L,FileChooser:S,ColorPicker:B,Fieldset:F},data(){return{form:this.$inertia.form(this.records),toolbar:{title:this.data.title}}}},T={class:"row"},y={class:"col-md-6"},A={class:"col-md-6"},I={class:"row"},h={class:"col-md-6"},P={class:"col-md-6"},W={class:"row"},N={class:"col-md-6"},O={class:"col-md-6"};function D(t,e,a,M,o,j){const u=i("ActionToolBar"),_=i("ColorPicker"),s=i("Fieldset"),d=i("Select"),b=i("FileChooser"),f=i("SettingsLayout");return k(),c(f,{title:a.data.title},{default:m(()=>[n("form",{onSubmit:e[19]||(e[19]=U(l=>o.form.patch(t.route("admin.settings.websiteUi.update")),["prevent"]))},[r(u,{disable_save_button:o.form.processing,toolbar:o.toolbar},null,8,["disable_save_button","toolbar"]),r(s,{title:t.__("Top Navigation")},{default:m(()=>[r(_,{modelValue:o.form.website_top_nav_bg_color,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.website_top_nav_bg_color=l),label:t.__("Background color of top menu"),name:"website_top_nav_bg_color"},null,8,["modelValue","label"]),r(_,{modelValue:o.form.website_top_nav_link_color,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.website_top_nav_link_color=l),label:t.__("Link color of top menu"),name:"website_top_nav_link_color"},null,8,["modelValue","label"]),r(_,{modelValue:o.form.website_top_nav_link_hover_color,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.website_top_nav_link_hover_color=l),label:t.__("Link Hover color of top menu"),name:"website_top_nav_link_hover_color"},null,8,["modelValue","label"]),r(_,{modelValue:o.form.website_order_now_button_bg_color,"onUpdate:modelValue":e[3]||(e[3]=l=>o.form.website_order_now_button_bg_color=l),label:t.__("Order now button background color on top menu"),name:"website_order_now_button_bg_color"},null,8,["modelValue","label"]),r(_,{modelValue:o.form.website_order_now_button_hover_bg_color,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.website_order_now_button_hover_bg_color=l),label:t.__("Order now button hover background color on top menu"),name:"website_order_now_button_hover_bg_color"},null,8,["modelValue","label"]),r(_,{modelValue:o.form.website_order_now_button_text_color,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.website_order_now_button_text_color=l),label:t.__("Order now button text color on top menu"),name:"website_order_now_button_text_color"},null,8,["modelValue","label"])]),_:1},8,["title"]),r(s,{title:t.__("Homepage Hero Section")},{default:m(()=>[n("div",T,[n("div",y,[r(d,{modelValue:o.form.website_hero_image_position,"onUpdate:modelValue":e[6]||(e[6]=l=>o.form.website_hero_image_position=l),options:a.data.dropdowns.image_positions,label:t.__("Hero Image Position"),name:"website_hero_image_position"},null,8,["modelValue","options","label"])]),n("div",A,[r(b,{modelValue:o.form.website_hero_image,"onUpdate:modelValue":e[7]||(e[7]=l=>o.form.website_hero_image=l),label:t.__("Hero Image"),name:"website_hero_image"},null,8,["modelValue","label"])])]),n("div",I,[n("div",h,[r(_,{modelValue:o.form.website_hero_bg_color,"onUpdate:modelValue":e[8]||(e[8]=l=>o.form.website_hero_bg_color=l),label:t.__("Hero Background Color"),name:"website_hero_bg_color"},null,8,["modelValue","label"])]),n("div",P,[r(_,{modelValue:o.form.website_hero_text_color,"onUpdate:modelValue":e[9]||(e[9]=l=>o.form.website_hero_text_color=l),label:t.__("Hero Text Color"),name:"website_hero_text_color"},null,8,["modelValue","label"])])])]),_:1},8,["title"]),r(s,{title:t.__("Footer")},{default:m(()=>[r(_,{modelValue:o.form.website_footer_bg_color,"onUpdate:modelValue":e[10]||(e[10]=l=>o.form.website_footer_bg_color=l),label:t.__("Background color of footer section"),name:"website_footer_bg_color"},null,8,["modelValue","label"]),r(_,{modelValue:o.form.website_footer_text_color,"onUpdate:modelValue":e[11]||(e[11]=l=>o.form.website_footer_text_color=l),label:t.__("Text color of footer section"),name:"website_footer_text_color"},null,8,["modelValue","label"]),r(_,{modelValue:o.form.website_footer_link_color,"onUpdate:modelValue":e[12]||(e[12]=l=>o.form.website_footer_link_color=l),label:t.__("Link color of footer section"),name:"website_footer_link_color"},null,8,["modelValue","label"]),r(_,{modelValue:o.form.website_footer_link_hover_color,"onUpdate:modelValue":e[13]||(e[13]=l=>o.form.website_footer_link_hover_color=l),label:t.__("Link Hover color of footer section"),name:"website_footer_link_hover_color"},null,8,["modelValue","label"])]),_:1},8,["title"]),r(s,{title:t.__("Links")},{default:m(()=>[n("div",W,[n("div",N,[r(_,{modelValue:o.form.website_link_color,"onUpdate:modelValue":e[14]||(e[14]=l=>o.form.website_link_color=l),label:t.__("Link Color"),name:"website_link_color"},null,8,["modelValue","label"])]),n("div",O,[r(_,{modelValue:o.form.website_link_hover_color,"onUpdate:modelValue":e[15]||(e[15]=l=>o.form.website_link_hover_color=l),label:t.__("Link Hover Color"),name:"website_link_hover_color"},null,8,["modelValue","label"])])])]),_:1},8,["title"]),r(b,{modelValue:o.form.website_logo,"onUpdate:modelValue":e[16]||(e[16]=l=>o.form.website_logo=l),label:t.__("Website Logo"),name:"website_logo"},null,8,["modelValue","label"]),r(b,{modelValue:o.form.website_favicon,"onUpdate:modelValue":e[17]||(e[17]=l=>o.form.website_favicon=l),label:t.__("Website Favicon"),name:"website_favicon"},null,8,["modelValue","label"]),r(b,{modelValue:o.form.website_accept_payment_image,"onUpdate:modelValue":e[18]||(e[18]=l=>o.form.website_accept_payment_image=l),label:t.__("Image for - We accept payments via section"),name:"website_accept_payment_image"},null,8,["modelValue","label"])],32)]),_:1},8,["title"])}const eo=g(H,[["render",D]]);export{eo as default};

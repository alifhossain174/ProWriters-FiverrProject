import{h as r,k as i,l as d}from"./app.2022c6b3.js";function u(){const t=r(null),c=window.recaptcha.site_key,a=window.recaptcha.is_enabled;function o(e){grecaptcha.ready(function(){grecaptcha.execute(c,{action:"contact"}).then(function(n){n&&(t.value=n)})})}return i(function(){if(a){window.ReCaptchaLoaded=o;let e=document.createElement("script");e.setAttribute("src","https://www.google.com/recaptcha/api.js?onload=ReCaptchaLoaded&render="+c),e.id="recaptcha-script",e.async=!0,document.head.appendChild(e)}else t.value=1}),d(function(){if(a){const e=document.getElementById("recaptcha-script");e&&e.remove(),document.querySelector(".grecaptcha-badge").remove(),document.querySelector('script[src*="recaptcha"]').remove()}}),{token:t}}export{u};

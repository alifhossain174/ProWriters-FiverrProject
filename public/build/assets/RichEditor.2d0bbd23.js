import{m as E,i as I,a3 as L,h as j,k as x,a0 as N,a4 as F,a5 as T,a1 as w,I as M,_ as z,r as K,o as h,c as b,f as q,t as V,d as _,a as H,B as G,b as W}from"./app.2f940534.js";var J=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],Q=function(e){return J.map(function(t){return t.toLowerCase()}).indexOf(e.toLowerCase())!==-1},X=function(e,t,n){Object.keys(t).filter(Q).forEach(function(i){var o=t[i];typeof o=="function"&&(i==="onInit"?o(e,n):n.on(i.substring(2),function(a){return o(a,n)}))})},Y=function(e,t,n,i){var o=e.modelEvents?e.modelEvents:null,a=Array.isArray(o)?o.join(" "):o;E(i,function(d,l){n&&typeof d=="string"&&d!==l&&d!==n.getContent({format:e.outputFormat})&&n.setContent(d)}),n.on(a||"change input undo redo",function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))})},Z=function(e,t,n,i,o,a){i.setContent(a()),n.attrs["onUpdate:modelValue"]&&Y(t,n,i,o),X(e,n.attrs,i)},k=0,R=function(e){var t=Date.now(),n=Math.floor(Math.random()*1e9);return k++,e+"_"+n+k+String(t)},$=function(e){return e!==null&&e.tagName.toLowerCase()==="textarea"},D=function(e){return typeof e>"u"||e===""?[]:Array.isArray(e)?e:e.split(" ")},ee=function(e,t){return D(e).concat(D(t))},ne=function(e){return e==null},B=function(){return{listeners:[],scriptId:R("tiny-script"),scriptLoaded:!1}},te=function(){var e=B(),t=function(o,a,d,l){var r=a.createElement("script");r.referrerPolicy="origin",r.type="application/javascript",r.id=o,r.src=d;var v=function(){r.removeEventListener("load",v),l()};r.addEventListener("load",v),a.head&&a.head.appendChild(r)},n=function(o,a,d){e.scriptLoaded?d():(e.listeners.push(d),o.getElementById(e.scriptId)||t(e.scriptId,o,a,function(){e.listeners.forEach(function(l){return l()}),e.scriptLoaded=!0}))},i=function(){e=B()};return{load:n,reinitialize:i}},oe=te(),ie=function(){return typeof window<"u"?window:global},c=function(){var e=ie();return e&&e.tinymce?e.tinymce:null},ae={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return e==="html"||e==="text"}}},f=globalThis&&globalThis.__assign||function(){return f=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},f.apply(this,arguments)},re=function(e,t,n,i){return e(i||"div",{id:t,ref:n})},le=function(e,t,n){return e("textarea",{id:t,visibility:"hidden",ref:n})},ue=I({props:ae,setup:function(e,t){var n=e.init?f({},e.init):{},i=L(e),o=i.disabled,a=i.modelValue,d=i.tagName,l=j(null),r=null,v=e.id||R("tiny-vue"),p=e.init&&e.init.inline||e.inline,C=!!t.attrs["onUpdate:modelValue"],S=!0,A=e.initialValue?e.initialValue:"",y="",O=function(u){return C?function(){return a!=null&&a.value?a.value:""}:function(){return u?A:y}},g=function(){var u=O(S),s=f(f({},n),{readonly:e.disabled,selector:"#"+v,plugins:ee(n.plugins,e.plugins),toolbar:e.toolbar||n.toolbar,inline:p,setup:function(m){r=m,m.on("init",function(U){return Z(U,e,t,m,a,u)}),typeof n.setup=="function"&&n.setup(m)}});$(l.value)&&(l.value.style.visibility=""),c().init(s),S=!1};E(o,function(u){var s;r!==null&&(typeof((s=r.mode)===null||s===void 0?void 0:s.set)=="function"?r.mode.set(u?"readonly":"design"):r.setMode(u?"readonly":"design"))}),E(d,function(u){var s;C||(y=r.getContent()),(s=c())===null||s===void 0||s.remove(r),M(function(){return g()})}),x(function(){if(c()!==null)g();else if(l.value&&l.value.ownerDocument){var u=e.cloudChannel?e.cloudChannel:"5",s=e.apiKey?e.apiKey:"no-api-key",m=ne(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+s+"/tinymce/"+u+"/tinymce.min.js":e.tinymceScriptSrc;oe.load(l.value.ownerDocument,m,g)}}),N(function(){c()!==null&&c().remove(r)}),p||(F(function(){S||g()}),T(function(){var u;C||(y=r.getContent()),(u=c())===null||u===void 0||u.remove(r)}));var P=function(u){var s;y=r.getContent(),(s=c())===null||s===void 0||s.remove(r),n=f(f({},n),u),M(function(){return g()})};return t.expose({rerender:P}),function(){return p?re(w,v,l,e.tagName):le(w,v,l)}}});const se={props:["modelValue","height","label","note","required","tooltip"],components:{Editor:ue},emits:["update:modelValue"],watch:{richEditorModel:function(e,t){this.$emit("update:modelValue",e)}},data(){return{richEditorModel:this.modelValue,config:{path_absolute:this.$page.props.rich_editor_base_url,document_base_url:this.$page.props.rich_editor_base_url,convert_urls:!1,plugins:"link image code table directionality emoticons",toolbar:"table | undo redo | styleselect | forecolor backcolor removeformat | pagebreak | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code | ltr rtl",branding:!1,file_picker_callback:this.openFileManger,height:this.height?this.height:"400px",force_br_newlines:!0,image_dimensions:!1,image_class_list:[{title:this.__("Responsive"),value:"img-fluid"}],table_class_list:[{title:"None",value:"table table-sm"},{title:"Stripe Rows",value:"table table-sm table-striped"},{title:"Hoverable Rows",value:"table table-sm table-hover"},{title:"Stripe & Hoverable Rows",value:"table table-sm table-striped table-hover"}]}}},methods:{openFileManger(e,t,n){tinymce.activeEditor.windowManager.openUrl({url:this.$page.props.auth_user.urls.image_manager+"&editor="+n.fieldname,title:this.__("File Manager"),onMessage:(i,o)=>{i.close();let a=new URL(o.content).pathname;e(a)}})}}},de={key:0,class:"form-label"},ce={key:0,class:"text-muted"},fe={key:1,class:"ms-1 required"},ve=["title"],me=W("i",{class:"fa-solid fa-circle-question"},null,-1),ge=[me];function he(e,t,n,i,o,a){const d=K("editor");return h(),b("div",{class:G({"mb-3":n.label})},[n.label?(h(),b("label",de,[q(V(n.label)+" ",1),n.note?(h(),b("small",ce,V(n.note),1)):_("",!0),n.required?(h(),b("span",fe,"*")):_("",!0),n.tooltip?(h(),b("span",{key:2,class:"ms-1",ref:"tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:n.tooltip},ge,8,ve)):_("",!0)])):_("",!0),H(d,{modelValue:o.richEditorModel,"onUpdate:modelValue":t[0]||(t[0]=l=>o.richEditorModel=l),"api-key":this.$page.props.auth_user.api_keys.tinymce,init:o.config},null,8,["modelValue","api-key","init"])],2)}const ye=z(se,[["render",he]]);export{ye as R};

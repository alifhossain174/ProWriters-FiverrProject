import{_ as m,o as d,c as h,b as o,t as l,J as _,U as p,C as u,D as g,V as x,W as v}from"./app.2f940534.js";const w={props:["content_preview","url_post_comment"],mounted(){let e=this;this.$refs.commentBox&&(e.commentBoxStyle=this.$refs.commentBox.style,document.getElementById("contentBody").addEventListener("mouseup",t=>{e.unwrapHighlightedText(),this.textSelected(t)}),document.addEventListener("keydown",function(t){t.key=="Escape"&&(e.unwrapHighlightedText(),e.hideCommentBox(e))}))},data(){return{message:null,comment:null,selectedText:null,commentBoxStyle:null}},methods:{unwrapHighlightedText(){document.querySelectorAll(".highlight").forEach(e=>e.replaceWith(...e.childNodes))},hideCommentBox(e){e.selectedText=null,e.message=null,e.commentBoxStyle.display="none"},sendMessage(e){if(e!=null&&e!=""&&e.length>0){let t=this;axios.post(this.url_post_comment,{message:e,quote:this.selectedText}).then(function(n){t.showAlertMessage(t.__("Comment Sent"))}),this.message=null,this.unwrapHighlightedText(),this.hideCommentBox(this)}},textSelected(e){var t=window.getSelection().toString();let n=this.commentBoxStyle;if(t!=""&&t.length>0){var r=window.getSelection(),s=r.getRangeAt(0),c=s.getBoundingClientRect(),i=document.createElement("span");i.className="highlight",i.appendChild(s.extractContents()),s.insertNode(i),n.display="block",n.top=e.pageY+12+"px",n.left=c.left+"px",this.selectedText=t}else this.hideCommentBox(this)}}},a=e=>(x("data-v-c8682647"),e=e(),v(),e),y={class:"w-100 border p-2 content-box"},f={class:"bg-light p-2"},B=a(()=>o("hr",null,null,-1)),S={key:0},C={style:{"overflow-x":"hidden","overflow-y":"auto",height:"500px"}},T={class:"h4 ps-4 pe-4"},E=a(()=>o("hr",null,null,-1)),k=["innerHTML"],M={class:"popup-tag",ref:"commentBox"},b={class:"row mt-5",style:{"font-size":"12px"}},H={class:"col-4 text-right"},I={class:"col-8 text-right"},N={key:1,class:"text-center align-middle"};function A(e,t,n,r,s,c){return d(),h("div",y,[o("h6",f,l(e.__("Content Preview")),1),B,n.content_preview?(d(),h("div",S,[o("div",C,[o("h1",T,l(n.content_preview.title),1),E,o("div",{class:"nl2br mt-4 ps-4 pe-4",ref:"contentBody",id:"contentBody",innerHTML:n.content_preview.content},null,8,k)]),o("div",M,[_(o("textarea",{class:"form-control",rows:"2",placeholder:"Add your comment","onUpdate:modelValue":t[0]||(t[0]=i=>s.message=i),onKeydown:t[1]||(t[1]=u(g(i=>c.sendMessage(s.message),["exact","prevent"]),["enter"]))},null,544),[[p,s.message]]),o("div",b,[o("div",H,l(e.__("Esc to cancel")),1),o("div",I,l(e.__("Press Enter to add comments")),1)])],512)])):(d(),h("div",N,l(e.__("No content to preview at this moment")),1))])}const D=m(w,[["render",A],["__scopeId","data-v-c8682647"]]);export{D as C};

import p from"./TaskShowLayout.afd97267.js";import{R as c}from"./RichEditor.6837c886.js";import{I as u}from"./Input.ae708ed5.js";import{_ as f,A as _,w as b,r,o as h,b as o,D as k,a,f as v,t as V}from"./app.969842cf.js";import{S}from"./SubmitButton.f6813064.js";import"./vanilla-picker.csp.0ced5960.js";import"./Countdown.9e888945.js";import"./bootstrap.esm.2333d793.js";import"./debounce.ed46515d.js";const w={props:["task","data"],components:{TaskShowLayout:p,RichEditor:c,Input:u,SubmitButton:S},data(){return{form:this.$inertia.form(this.prepareForm())}},methods:{prepareForm(){let t={title:null,content:null};return this.task.content&&(t={...t,...this.task.content}),t}}},y={class:"border p-4"},T={class:"row"},g={class:"col-md-8 border-end"},B={class:"col-md-4"},C={class:"d-grid gap-2 mt-4"},I=["disabled"],R=o("i",{class:"fa-solid fa-floppy-disk"},null,-1);function E(t,e,i,L,s,N){const l=r("Input"),d=r("RichEditor"),m=r("TaskShowLayout");return h(),_(m,{task:i.task,activeTab:"content"},{default:b(()=>[o("div",y,[o("form",{onSubmit:e[2]||(e[2]=k(n=>s.form.patch(t.route("freelancer.tasks.content.update",i.task.uuid)),["prevent"]))},[o("div",T,[o("div",g,[a(l,{modelValue:s.form.title,"onUpdate:modelValue":e[0]||(e[0]=n=>s.form.title=n),label:t.__("Title"),required:!0,name:"title"},null,8,["modelValue","label"]),a(d,{modelValue:s.form.content,"onUpdate:modelValue":e[1]||(e[1]=n=>s.form.content=n),label:t.__("Content")},null,8,["modelValue","label"])]),o("div",B,[o("div",C,[o("button",{disabled:s.form.processing,type:"submit",class:"btn btn-success"},[R,v(" "+V(t.__("Save")),1)],8,I)])])])],32)])]),_:1},8,["task"])}const G=f(w,[["render",E]]);export{G as default};

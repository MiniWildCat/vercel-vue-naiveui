import{j as C,l as g,_ as v,r as a,o as i,i as c,w as t,h as o,g as n,e,f as y,u as P,a as I,b as j,c as F,d as V,n as O}from"./index-6d22af44.js";function L(){return Array.from({length:100}).map((r,l)=>({label:"Option "+l,value:l,disabled:l%5===0}))}function R(){return Array.from({length:50}).map((r,l)=>l)}const q=C({setup(){return{options:L(),value:g(R())}}}),W={class:"demo-card__view"};function G(r,l,_,s,h,B){const A=a("n-p"),d=a("n-legacy-transfer"),p=a("component-demo");return i(),c(p,{"demo-file-name":"basic.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-legacy-transfer%20ref%3D%22transfer%22%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Afunction%20createOptions%20()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20'Option%20'%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%0A%7D%0A%0Afunction%20createValues%20()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-legacy-transfer%20ref%3D%22transfer%22%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Afunction%20createOptions()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20%22Option%20%22%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%3B%0A%7D%0A%0Afunction%20createValues()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%3B%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" Basic ")]),content:t(()=>[n(A,null,{default:t(()=>[o("Basic example of the Transfer component. If you have tons of data, see below for virtualized list.")]),_:1})]),demo:t(()=>[e("div",W,[n(d,{ref:"transfer",value:r.value,"onUpdate:value":l[0]||(l[0]=f=>r.value=f),options:r.options},null,8,["value","options"])])]),_:1})}const H=v(q,[["render",G],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/basic.demo.vue"]]);function J(){return Array.from({length:42e3}).map((r,l)=>({label:"Option"+l,value:l,disabled:l%5===0}))}function K(){return Array.from({length:50}).map((r,l)=>l)}const Q=C({setup(){return{options:J(),value:g(K())}}}),X={class:"demo-card__view"};function Y(r,l,_,s,h,B){const A=a("n-text"),d=a("n-p"),p=a("n-legacy-transfer"),f=a("component-demo");return i(),c(f,{"demo-file-name":"large-data.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/large-data.demo.vue",title:"Large Data","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-legacy-transfer%0A%20%20%20%20ref%3D%22transfer%22%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20virtual-scroll%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Afunction%20createOptions%20()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2042000%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20'Option'%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%0A%7D%0A%0Afunction%20createValues%20()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-legacy-transfer%0A%20%20%20%20ref%3D%22transfer%22%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20virtual-scroll%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Afunction%20createOptions()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2042e3%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20%22Option%22%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%3B%0A%7D%0A%0Afunction%20createValues()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%3B%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" Large Data ")]),content:t(()=>[n(d,null,{default:t(()=>[o("If you have tons of data, you may need to speed the transfer up! Set "),n(A,{code:""},{default:t(()=>[o("virtual-scroll")]),_:1}),o(" on transfer to use a blazing fast transfer (which turns the ridiculous animation off).")]),_:1})]),demo:t(()=>[e("div",X,[n(p,{ref:"transfer",value:r.value,"onUpdate:value":l[0]||(l[0]=m=>r.value=m),options:r.options,"virtual-scroll":""},null,8,["value","options"])])]),_:1})}const Z=v(Q,[["render",Y],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/large-data.demo.vue"]]);function e0(){return Array.from({length:100}).map((r,l)=>({label:"Option "+l,value:l,disabled:l%5===0}))}function t0(){return Array.from({length:50}).map((r,l)=>l)}const n0=C({setup(){return{options:e0(),value:g(t0())}}}),o0={class:"demo-card__view"};function l0(r,l,_,s,h,B){const A=a("n-p"),d=a("n-legacy-transfer"),p=a("n-space"),f=a("component-demo");return i(),c(f,{"demo-file-name":"size.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/size.demo.vue",title:"Size","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-legacy-transfer%0A%20%20%20%20%20%20ref%3D%22transfer%22%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cn-legacy-transfer%0A%20%20%20%20%20%20ref%3D%22transfer%22%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20size%3D%22large%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Afunction%20createOptions%20()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20'Option%20'%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%0A%7D%0A%0Afunction%20createValues%20()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-legacy-transfer%0A%20%20%20%20%20%20ref%3D%22transfer%22%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cn-legacy-transfer%0A%20%20%20%20%20%20ref%3D%22transfer%22%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20size%3D%22large%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Afunction%20createOptions()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20%22Option%20%22%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%3B%0A%7D%0A%0Afunction%20createValues()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%3B%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" Size ")]),content:t(()=>[n(A,null,{default:t(()=>[o("Mixing sizes does not look harmonious.")]),_:1})]),demo:t(()=>[e("div",o0,[n(p,{vertical:""},{default:t(()=>[n(d,{ref:"transfer",value:r.value,"onUpdate:value":l[0]||(l[0]=m=>r.value=m),options:r.options,size:"small"},null,8,["value","options"]),n(d,{ref:"transfer",value:r.value,"onUpdate:value":l[1]||(l[1]=m=>r.value=m),options:r.options,size:"large"},null,8,["value","options"])]),_:1})])]),_:1})}const r0=v(n0,[["render",l0],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/size.demo.vue"]]);function a0(){return Array.from({length:100}).map((r,l)=>({label:"Option "+l,value:l,disabled:l%5===0}))}function u0(){return Array.from({length:50}).map((r,l)=>l)}const s0=C({setup(){return{options:a0(),value:g(u0())}}}),i0={class:"demo-card__view"};function d0(r,l,_,s,h,B){const A=a("n-legacy-transfer"),d=a("component-demo");return i(),c(d,{"demo-file-name":"filterable.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/filterable.demo.vue",title:"Filterable","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-legacy-transfer%0A%20%20%20%20ref%3D%22transfer%22%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20virtual-scroll%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20filterable%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Afunction%20createOptions%20()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20'Option%20'%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%0A%7D%0A%0Afunction%20createValues%20()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-legacy-transfer%0A%20%20%20%20ref%3D%22transfer%22%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20virtual-scroll%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20filterable%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Afunction%20createOptions()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20%22Option%20%22%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%3B%0A%7D%0A%0Afunction%20createValues()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%3B%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" Filterable ")]),content:t(()=>[y("CONTENT_SLOT")]),demo:t(()=>[e("div",i0,[n(A,{ref:"transfer",value:r.value,"onUpdate:value":l[0]||(l[0]=p=>r.value=p),"virtual-scroll":"",options:r.options,filterable:""},null,8,["value","options"])])]),_:1})}const c0=v(s0,[["render",d0],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/filterable.demo.vue"]]),A0={components:{basicVueDemo:H,largeDataVueDemo:Z,sizeVueDemo:r0,filterableVueDemo:c0},setup(){const r=P(),l=I(()=>!r.value),_=r;return{showAnchor:l,displayMode:j(),wrapperStyle:F(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:F(()=>l.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/index.demo-entry.md"}}},p0={class:"md-table-wrapper"},f0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),m0=e("td",null,"default-value",-1),_0=e("td",null,"Default value.",-1),D0=e("td",null,"disabled",-1),v0=e("td",null,"Disabled state.",-1),h0=e("td",null,"filterable",-1),B0=e("td",null,"Filterable state.",-1),C0=e("td",null,"filter",-1),g0=e("td",null,"A basic label string match function.",-1),y0=e("td",null,"options",-1),E0=e("td",null,"For configuration options, see the TransferOption Type below.",-1),b0=e("td",null,"size",-1),F0=e("td",null,"Size.",-1),V0=e("td",null,"source-filter-placeholder",-1),O0=e("td",null,"Placeholder for the source items search box.",-1),x0=e("td",null,"source-title",-1),w0=e("td",null,"Source items title.",-1),$0=e("td",null,"target-filter-placeholder",-1),T0=e("td",null,"Placeholder for the target items search box.",-1),U0=e("td",null,"target-title",-1),S0=e("td",null,"Target items title.",-1),z0=e("td",null,"value",-1),k0=e("td",null,"Value when being set manually.",-1),N0=e("td",null,"on-update:value",-1),M0=e("td",null,"Callback when the value changes.",-1),P0=e("td",null,"virtual-scroll",-1),I0=e("td",null,"Enable virtual scrolling.",-1),j0={class:"md-table-wrapper"},L0=e("thead",null,[e("tr",null,[e("th",null,"Property"),e("th",null,"Type"),e("th",null,"Description")])],-1),R0=e("td",null,"label",-1),q0=e("td",null,"The option's label to display.",-1),W0=e("td",null,"value",-1),G0=e("td",null,"The option's unique value.",-1),H0=e("td",null,"disabled",-1),J0=e("td",null,"The option's disabled state.",-1),K0={key:0,style:{width:"192px"}};function Q0(r,l,_,s,h,B){const A=a("edit-on-github-header"),d=a("n-a"),p=a("router-link"),f=a("n-alert"),m=a("n-p"),E=a("n-h2"),x=a("basicVueDemo"),w=a("largeDataVueDemo"),$=a("sizeVueDemo"),T=a("filterableVueDemo"),U=a("component-demos"),S=a("n-h3"),u=a("n-text"),b=a("n-table"),z=a("n-h4"),D=a("n-anchor-link"),k=a("n-anchor");return i(),V("div",{class:"doc",style:O(s.wrapperStyle)},[e("div",{style:O(s.contentStyle)},[n(A,{"relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/index.demo-entry.md",text:"Legacy Transfer"}),y("single-column"),n(f,{title:"Warning",type:"warning",bordered:!1},{default:t(()=>[o(" The transfer component is deprecated. It won't have any new feature and will be removed in the next major version. It's recommended to use new "),n(p,{to:"transfer",custom:""},{default:t(({href:N,navigate:M})=>[n(d,{href:N,onClick:M},{default:t(()=>[o("Transfer")]),_:2},1032,["href","onClick"])]),_:1}),o(". ")]),_:1}),n(m,null,{default:t(()=>[o("Left, right, right, left... I'm a simple man, and I can play this all day.")]),_:1}),n(E,{id:"Demos"},{default:t(()=>[o("Demos")]),_:1}),n(U,{span:1},{default:t(()=>[n(x),n(w),n($),n(T)]),_:1}),n(E,{id:"API"},{default:t(()=>[o("API")]),_:1}),n(S,{id:"Transfer-Props"},{default:t(()=>[o("Transfer Props")]),_:1}),e("div",p0,[n(b,{"single-column":"",class:"md-table"},{default:t(()=>[f0,e("tbody",null,[e("tr",null,[m0,e("td",null,[n(u,{code:""},{default:t(()=>[o("Array<string | number> | null")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("null")]),_:1})]),_0]),e("tr",null,[D0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("true")]),_:1})]),v0]),e("tr",null,[h0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("false")]),_:1})]),B0]),e("tr",null,[C0,e("td",null,[n(u,{code:""},{default:t(()=>[o("function")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("(pattern: string, option: TransferOption, from: 'source' | 'target') => boolean")]),_:1})]),g0]),e("tr",null,[y0,e("td",null,[n(u,{code:""},{default:t(()=>[o("TransferOption[]")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("[]")]),_:1})]),E0]),e("tr",null,[b0,e("td",null,[n(u,{code:""},{default:t(()=>[o("'small' | 'medium' | 'large'")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("'medium'")]),_:1})]),F0]),e("tr",null,[V0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),O0]),e("tr",null,[x0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("'Source'")]),_:1})]),w0]),e("tr",null,[$0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),T0]),e("tr",null,[U0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("'Target'")]),_:1})]),S0]),e("tr",null,[z0,e("td",null,[n(u,{code:""},{default:t(()=>[o("Array<string | number> | null")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),k0]),e("tr",null,[N0,e("td",null,[n(u,{code:""},{default:t(()=>[o("(value: Array<string | number>) => void")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),M0]),e("tr",null,[P0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("false")]),_:1})]),I0])])]),_:1})]),n(z,{id:"TransferOption-Type"},{default:t(()=>[o("TransferOption Type")]),_:1}),e("div",j0,[n(b,{"single-column":"",class:"md-table"},{default:t(()=>[L0,e("tbody",null,[e("tr",null,[R0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),q0]),e("tr",null,[W0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string | number")]),_:1})]),G0]),e("tr",null,[H0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),J0])])]),_:1})])],4),s.showAnchor?(i(),V("div",K0,[n(k,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(s.displayMode,i(),c(D,{key:0,title:"Basic",href:"#basic.vue"})),(s.displayMode,i(),c(D,{key:1,title:"Large Data",href:"#large-data.vue"})),(s.displayMode,i(),c(D,{key:2,title:"Size",href:"#size.vue"})),(s.displayMode,i(),c(D,{key:3,title:"Filterable",href:"#filterable.vue"})),(s.displayMode,i(),c(D,{key:4,title:"API",href:"#API"})),(s.displayMode,i(),c(D,{key:5,title:"Transfer Props",href:"#Transfer-Props"}))]),_:1})])):y("v-if",!0)],4)}const Y0=v(A0,[["render",Q0],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/legacy-transfer/demos/enUS/index.demo-entry.md"]]);export{Y0 as default};

import{j as w,l as x,_ as g,r,o as d,i as h,w as n,h as t,f as v,e as o,g as e,u as $,a as M,b as N,c as b,d as y,n as B}from"./index-6d22af44.js";const G=w({setup(){return{showRail:x(!0),showBackground:x(!0)}}}),z={class:"demo-card__view"};function O(i,s,c,l,A,m){const u=r("n-switch"),D=r("n-space"),f=r("n-anchor-link"),C=r("n-anchor"),E=r("component-demo");return d(),h(E,{"demo-file-name":"basic.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-space%20style%3D%22margin-bottom%3A%2012px%22%3E%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22showRail%22%20%2F%3E%20Show%20Rail%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22showBackground%22%20%2F%3E%20Show%20Background%0A%20%20%3C%2Fn-space%3E%0A%20%20%3Cn-anchor%20%3Ashow-rail%3D%22showRail%22%20%3Ashow-background%3D%22showBackground%22%3E%0A%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0A%20%20%20%20%3C%2Fn-anchor-link%3E%0A%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0A%20%20%3C%2Fn-anchor%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showRail%3A%20ref(true)%2C%0A%20%20%20%20%20%20showBackground%3A%20ref(true)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-space%20style%3D%22margin-bottom%3A%2012px%22%3E%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22showRail%22%20%2F%3E%20Show%20Rail%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22showBackground%22%20%2F%3E%20Show%20Background%0A%20%20%3C%2Fn-space%3E%0A%20%20%3Cn-anchor%20%3Ashow-rail%3D%22showRail%22%20%3Ashow-background%3D%22showBackground%22%3E%0A%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0A%20%20%20%20%3C%2Fn-anchor-link%3E%0A%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0A%20%20%3C%2Fn-anchor%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showRail%3A%20ref(true)%2C%0A%20%20%20%20%20%20showBackground%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[t(" Basic ")]),content:n(()=>[v("CONTENT_SLOT")]),demo:n(()=>[o("div",z,[e(D,{style:{"margin-bottom":"12px"}},{default:n(()=>[e(u,{value:i.showRail,"onUpdate:value":s[0]||(s[0]=p=>i.showRail=p)},null,8,["value"]),t(" Show Rail "),e(u,{value:i.showBackground,"onUpdate:value":s[1]||(s[1]=p=>i.showBackground=p)},null,8,["value"]),t(" Show Background ")]),_:1}),e(C,{"show-rail":i.showRail,"show-background":i.showBackground},{default:n(()=>[e(f,{title:"Demos",href:"#Demos"},{default:n(()=>[e(f,{title:"Basic",href:"#basic.vue"}),e(f,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(f,{title:"Affix",href:"#affix.vue"}),e(f,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(f,{title:"API",href:"#API"})]),_:1},8,["show-rail","show-background"])])]),_:1})}const j=g(G,[["render",O],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/basic.demo.vue"]]),L={},W={class:"demo-card__view"},H={style:{height:"200px"}},q=o("div",null,null,-1),J=o("div",null,null,-1),K={style:{width:"160px"}},Q={style:{width:"160px"}};function X(i,s){const c=r("n-col"),l=r("n-anchor-link"),A=r("n-anchor"),m=r("n-row"),u=r("component-demo");return d(),h(u,{"demo-file-name":"ignore-gap.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/ignore-gap.demo.vue",title:"Ignore gap","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22height%3A%20200px%22%3E%0A%20%20%20%20%3Cn-row%20%3Agutter%3D%2212%22%3E%0A%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-col%3E%0A%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-col%3E%0A%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20160px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-anchor%0A%20%20%20%20%20%20%20%20%20%20%20%20affix%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atrigger-top%3D%2224%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atop%3D%2288%22%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%22z-index%3A%201%22%0A%20%20%20%20%20%20%20%20%20%20%20%20ignore-gap%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-anchor%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fn-col%3E%0A%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20160px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-anchor%20affix%20%3Atrigger-top%3D%2224%22%20%3Atop%3D%2288%22%20style%3D%22z-index%3A%201%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-anchor%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fn-col%3E%0A%20%20%20%20%3C%2Fn-row%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[t(" Ignore gap ")]),content:n(()=>[v("CONTENT_SLOT")]),demo:n(()=>[o("div",W,[o("div",H,[e(m,{gutter:12},{default:n(()=>[e(c,{span:6},{default:n(()=>[q]),_:1}),e(c,{span:6},{default:n(()=>[J]),_:1}),e(c,{span:6},{default:n(()=>[o("div",K,[e(A,{affix:"","trigger-top":24,top:88,style:{"z-index":"1"},"ignore-gap":""},{default:n(()=>[e(l,{title:"Demos",href:"#Demos"},{default:n(()=>[e(l,{title:"Basic",href:"#basic.vue"}),e(l,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(l,{title:"Affix",href:"#affix.vue"}),e(l,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(l,{title:"API",href:"#API"})]),_:1})])]),_:1}),e(c,{span:6},{default:n(()=>[o("div",Q,[e(A,{affix:"","trigger-top":24,top:88,style:{"z-index":"1"}},{default:n(()=>[e(l,{title:"Demos",href:"#Demos"},{default:n(()=>[e(l,{title:"Basic",href:"#basic.vue"}),e(l,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(l,{title:"Affix",href:"#affix.vue"}),e(l,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(l,{title:"API",href:"#API"})]),_:1})])]),_:1})]),_:1})])])]),_:1})}const Y=g(L,[["render",X],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/ignore-gap.demo.vue"]]),Z={},e2={class:"demo-card__view"},o2={style:{height:"200px"}};function n2(i,s){const c=r("n-p"),l=r("n-anchor-link"),A=r("n-anchor"),m=r("component-demo");return d(),h(m,{"demo-file-name":"affix.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/affix.demo.vue",title:"Affix","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22height%3A%20200px%22%3E%0A%20%20%20%20%3Cn-anchor%0A%20%20%20%20%20%20affix%0A%20%20%20%20%20%20listen-to%3D%22.document-scroll-container%22%0A%20%20%20%20%20%20%3Atrigger-top%3D%2224%22%0A%20%20%20%20%20%20%3Atop%3D%2288%22%0A%20%20%20%20%20%20style%3D%22z-index%3A%201%22%0A%20%20%20%20%20%20%3Abound%3D%2224%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0A%20%20%20%20%3C%2Fn-anchor%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[t(" Affix ")]),content:n(()=>[e(c,null,{default:n(()=>[t("When in affix mode, Anchor can recieve addition props as same as Affix.")]),_:1})]),demo:n(()=>[o("div",e2,[o("div",o2,[e(A,{affix:"","listen-to":".document-scroll-container","trigger-top":24,top:88,style:{"z-index":"1"},bound:24},{default:n(()=>[e(l,{title:"Demos",href:"#Demos"},{default:n(()=>[e(l,{title:"Basic",href:"#basic.vue"}),e(l,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(l,{title:"Affix",href:"#affix.vue"}),e(l,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(l,{title:"API",href:"#API"})]),_:1})])])]),_:1})}const t2=g(Z,[["render",n2],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/affix.demo.vue"]]),l2=w({setup(){const i=x(null);return{anchorRef:i,scrollTo:c=>{var l;(l=i.value)==null||l.scrollTo(c)}}}}),r2={class:"demo-card__view"},i2={style:{height:"200px","padding-left":"200px"}};function a2(i,s,c,l,A,m){const u=r("n-anchor-link"),D=r("n-anchor"),f=r("n-button"),C=r("n-space"),E=r("component-demo");return d(),h(E,{"demo-file-name":"scrollto.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/scrollto.demo.vue",title:"Scroll to","ts-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22height%3A%20200px%3B%20padding-left%3A%20200px%22%3E%0A%20%20%20%20%3Cn-anchor%0A%20%20%20%20%20%20ref%3D%22anchorRef%22%0A%20%20%20%20%20%20affix%0A%20%20%20%20%20%20%3Atrigger-top%3D%2224%22%0A%20%20%20%20%20%20%3Atop%3D%2288%22%0A%20%20%20%20%20%20%3Abound%3D%2224%22%0A%20%20%20%20%20%20style%3D%22z-index%3A%201%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0A%20%20%20%20%3C%2Fn-anchor%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cn-space%20style%3D%22padding-left%3A%20400px%22%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22scrollTo('%23basic.vue')%22%3E%0A%20%20%20%20%20%20Basic%0A%20%20%20%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22scrollTo('%23affix.vue')%22%3E%0A%20%20%20%20%20%20Affix%0A%20%20%20%20%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20AnchorInst%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20anchorRef%20%3D%20ref%3CAnchorInst%20%7C%20null%3E(null)%0A%20%20%20%20const%20scrollTo%20%3D%20(href%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20%20%20anchorRef.value%3F.scrollTo(href)%0A%20%20%20%20%7D%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20anchorRef%2C%0A%20%20%20%20%20%20scrollTo%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22height%3A%20200px%3B%20padding-left%3A%20200px%22%3E%0A%20%20%20%20%3Cn-anchor%0A%20%20%20%20%20%20ref%3D%22anchorRef%22%0A%20%20%20%20%20%20affix%0A%20%20%20%20%20%20%3Atrigger-top%3D%2224%22%0A%20%20%20%20%20%20%3Atop%3D%2288%22%0A%20%20%20%20%20%20%3Abound%3D%2224%22%0A%20%20%20%20%20%20style%3D%22z-index%3A%201%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0A%20%20%20%20%3C%2Fn-anchor%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cn-space%20style%3D%22padding-left%3A%20400px%22%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22scrollTo('%23basic.vue')%22%3E%0A%20%20%20%20%20%20Basic%0A%20%20%20%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22scrollTo('%23affix.vue')%22%3E%0A%20%20%20%20%20%20Affix%0A%20%20%20%20%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20anchorRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20scrollTo%20%3D%20(href)%20%3D%3E%20%7B%0A%20%20%20%20%20%20anchorRef.value%3F.scrollTo(href)%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20anchorRef%2C%0A%20%20%20%20%20%20scrollTo%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[t(" Scroll to ")]),content:n(()=>[v("CONTENT_SLOT")]),demo:n(()=>[o("div",r2,[o("div",i2,[e(D,{ref:"anchorRef",affix:"","trigger-top":24,top:88,bound:24,style:{"z-index":"1"}},{default:n(()=>[e(u,{title:"Demos",href:"#Demos"},{default:n(()=>[e(u,{title:"Basic",href:"#basic.vue"}),e(u,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(u,{title:"Affix",href:"#affix.vue"}),e(u,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(u,{title:"API",href:"#API"})]),_:1},512)]),e(C,{style:{"padding-left":"400px"}},{default:n(()=>[e(f,{onClick:s[0]||(s[0]=p=>i.scrollTo("#basic.vue"))},{default:n(()=>[t(" Basic ")]),_:1}),e(f,{onClick:s[1]||(s[1]=p=>i.scrollTo("#affix.vue"))},{default:n(()=>[t(" Affix ")]),_:1})]),_:1})])]),_:1})}const s2=g(l2,[["render",a2],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/scrollto.demo.vue"]]),c2={components:{basicVueDemo:j,ignoreGapVueDemo:Y,affixVueDemo:t2,scrolltoVueDemo:s2},setup(){const i=$(),s=M(()=>!i.value),c=i;return{showAnchor:s,displayMode:N(),wrapperStyle:b(()=>c.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:b(()=>s.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/index.demo-entry.md"}}},u2={class:"md-table-wrapper"},d2=o("thead",null,[o("tr",null,[o("th",null,"Name"),o("th",null,"Type"),o("th",null,"Default"),o("th",null,"Description")])],-1),f2=o("td",null,"affix",-1),h2=o("td",null,"bound",-1),A2=o("td",null,"The height of the border when scrolling.",-1),p2=o("td",null,"ignore-gap",-1),_2=o("td",null,"offset-target",-1),m2=o("td",null,"The element or selector used to calc offset of link elements. If you are not scrolling the entire document but only a part of it, you may need to set this.",-1),D2=o("td",null,"show-rail",-1),C2=o("td",null,"Whether to show the sider rail.",-1),E2=o("td",null,"show-background",-1),v2=o("td",null,"Whether to show background of links.",-1),g2=o("td",null,"type",-1),x2=o("td",null,"The type to use.",-1),k2={class:"md-table-wrapper"},F2=o("thead",null,[o("tr",null,[o("th",null,"Name"),o("th",null,"Type"),o("th",null,"Description")])],-1),b2=o("td",null,"scrollTo",-1),y2=o("td",null,"Manually scroll to the specific position.",-1),B2={key:0,style:{width:"192px"}};function w2(i,s,c,l,A,m){const u=r("edit-on-github-header"),D=r("n-p"),f=r("n-h2"),C=r("basicVueDemo"),E=r("ignoreGapVueDemo"),p=r("affixVueDemo"),I=r("scrolltoVueDemo"),T=r("component-demos"),k=r("n-h3"),a=r("n-text"),S=r("n-a"),P=r("router-link"),F=r("n-table"),_=r("n-anchor-link"),R=r("n-anchor");return d(),y("div",{class:"doc",style:B(l.wrapperStyle)},[o("div",{style:B(l.contentStyle)},[e(u,{"relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/index.demo-entry.md",text:"Anchor"}),v("single-column"),e(D,null,{default:n(()=>[t("Tell you where you are.")]),_:1}),e(f,{id:"Demos"},{default:n(()=>[t("Demos")]),_:1}),e(T,{span:1},{default:n(()=>[e(C),e(E),e(p),e(I)]),_:1}),e(f,{id:"API"},{default:n(()=>[t("API")]),_:1}),e(k,{id:"Anchor-Props"},{default:n(()=>[t("Anchor Props")]),_:1}),o("div",u2,[e(F,{"single-column":"",class:"md-table"},{default:n(()=>[d2,o("tbody",null,[o("tr",null,[f2,o("td",null,[e(a,{code:""},{default:n(()=>[t("boolean")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("false")]),_:1})]),o("td",null,[t("If it works like an affix. If set to "),e(a,{code:""},{default:n(()=>[t("true")]),_:1}),t(", it will receive props from "),e(P,{to:"affix#Affix-Props",custom:""},{default:n(({navigate:U,href:V})=>[e(S,{href:V,onClick:U},{default:n(()=>[t("affix")]),_:2},1032,["href","onClick"])]),_:1}),t(".")])]),o("tr",null,[h2,o("td",null,[e(a,{code:""},{default:n(()=>[t("number")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("12")]),_:1})]),A2]),o("tr",null,[p2,o("td",null,[e(a,{code:""},{default:n(()=>[t("boolean")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("false")]),_:1})]),o("td",null,[t("If set to "),e(a,{code:""},{default:n(()=>[t("true")]),_:1}),t(", it will be displayed on the exact href.")])]),o("tr",null,[_2,o("td",null,[e(a,{code:""},{default:n(()=>[t("string | HTMLElement | Window | Document | (() => HTMLElement)")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("document")]),_:1})]),m2]),o("tr",null,[D2,o("td",null,[e(a,{code:""},{default:n(()=>[t("boolean")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("true")]),_:1})]),C2]),o("tr",null,[E2,o("td",null,[e(a,{code:""},{default:n(()=>[t("boolean")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("true")]),_:1})]),v2]),o("tr",null,[g2,o("td",null,[e(a,{code:""},{default:n(()=>[t("'rail' | 'block'")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("'rail'")]),_:1})]),x2])])]),_:1})]),e(k,{id:"Anchor-Methods"},{default:n(()=>[t("Anchor Methods")]),_:1}),o("div",k2,[e(F,{"single-column":"",class:"md-table"},{default:n(()=>[F2,o("tbody",null,[o("tr",null,[b2,o("td",null,[e(a,{code:""},{default:n(()=>[t("(href: string) => void")]),_:1})]),y2])])]),_:1})])],4),l.showAnchor?(d(),y("div",B2,[e(R,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(l.displayMode,d(),h(_,{key:0,title:"Basic",href:"#basic.vue"})),(l.displayMode,d(),h(_,{key:1,title:"Ignore gap",href:"#ignore-gap.vue"})),(l.displayMode,d(),h(_,{key:2,title:"Affix",href:"#affix.vue"})),(l.displayMode,d(),h(_,{key:3,title:"Scroll to",href:"#scrollto.vue"})),(l.displayMode,d(),h(_,{key:4,title:"API",href:"#API"})),(l.displayMode,d(),h(_,{key:5,title:"Anchor Props",href:"#Anchor-Props"})),(l.displayMode,d(),h(_,{key:6,title:"Anchor Methods",href:"#Anchor-Methods"}))]),_:1})])):v("v-if",!0)],4)}const T2=g(c2,[["render",w2],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/anchor/demos/enUS/index.demo-entry.md"]]);export{T2 as default};

import{j as F,l as h,_ as C,r as o,o as r,i as m,w as n,h as u,f as y,e,g as t,A as V,u as M,a as U,b as z,c as R,d as g,n as N}from"./index-6d22af44.js";const J=F({setup(){const i=h(null);return{numberAnimationInstRef:i,handleClick(){var s;(s=i.value)==null||s.play()}}}}),P={class:"demo-card__view"};function S(i,s,p,a,B,D){const c=o("n-number-animation"),d=o("n-statistic"),A=o("n-button"),E=o("n-space"),_=o("component-demo");return r(),m(_,{"demo-file-name":"basic.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22%E4%BD%A0%E4%B8%80%E5%85%B1%E5%A4%84%E7%90%86%E4%BA%86%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%20ref%3D%22numberAnimationInstRef%22%20%3Afrom%3D%220%22%20%3Ato%3D%2212039%22%20%2F%3E%0A%20%20%20%20%3Ctemplate%20%23suffix%3E%0A%20%20%20%20%20%20%E6%9D%A1%E7%BE%A4%E6%B6%88%E6%81%AF%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%E8%8A%B1%E6%97%B6%E9%97%B4%E3%80%81%E8%8A%B1%E7%B2%BE%E5%8A%9B%E3%80%81%E8%8A%B1%E5%BF%83%E6%80%9D%EF%BC%8C%E6%84%BF%E4%BD%A0%E6%AF%8F%E4%B8%80%E4%BB%BD%E5%8A%AA%E5%8A%9B%E9%83%BD%E4%B8%8D%E8%B4%9F%E6%89%80%E6%9C%9B%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%20%20%E6%92%AD%E6%94%BE%0A%20%20%20%20%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20NumberAnimationInst%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick%20()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22%E4%BD%A0%E4%B8%80%E5%85%B1%E5%A4%84%E7%90%86%E4%BA%86%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%20ref%3D%22numberAnimationInstRef%22%20%3Afrom%3D%220%22%20%3Ato%3D%2212039%22%20%2F%3E%0A%20%20%20%20%3Ctemplate%20%23suffix%3E%0A%20%20%20%20%20%20%E6%9D%A1%E7%BE%A4%E6%B6%88%E6%81%AF%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%E8%8A%B1%E6%97%B6%E9%97%B4%E3%80%81%E8%8A%B1%E7%B2%BE%E5%8A%9B%E3%80%81%E8%8A%B1%E5%BF%83%E6%80%9D%EF%BC%8C%E6%84%BF%E4%BD%A0%E6%AF%8F%E4%B8%80%E4%BB%BD%E5%8A%AA%E5%8A%9B%E9%83%BD%E4%B8%8D%E8%B4%9F%E6%89%80%E6%9C%9B%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%20%20%E6%92%AD%E6%94%BE%0A%20%20%20%20%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[u(" 基础用法 ")]),content:n(()=>[y("CONTENT_SLOT")]),demo:n(()=>[e("div",P,[t(d,{label:"你一共处理了","tabular-nums":""},{suffix:n(()=>[u(" 条群消息 ")]),default:n(()=>[t(c,{ref:"numberAnimationInstRef",from:0,to:12039},null,512)]),_:1}),t(E,{vertical:""},{default:n(()=>[u(" 花时间、花精力、花心思，愿你每一份努力都不负所望 "),t(A,{onClick:i.handleClick},{default:n(()=>[u(" 播放 ")]),_:1},8,["onClick"])]),_:1})])]),_:1})}const T=C(J,[["render",S],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/basic.demo.vue"]]),j=F({setup(){const i=h(null);return{numberAnimationInstRef:i,handleClick(){var s;(s=i.value)==null||s.play()}}}}),O={class:"demo-card__view"};function G(i,s,p,a,B,D){const c=o("n-text"),d=o("n-p"),A=o("n-number-animation"),E=o("n-statistic"),_=o("n-button"),b=o("component-demo");return r(),m(b,{"demo-file-name":"precision.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/precision.demo.vue",title:"精度","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22JJJJNM%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0A%20%20%20%20%20%20%3Afrom%3D%220.0%22%0A%20%20%20%20%20%20%3Ato%3D%2224.0%22%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0A%20%20%20%20%20%20%3Aprecision%3D%222%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%E6%92%AD%E6%94%BE%0A%20%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20NumberAnimationInst%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick%20()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22JJJJNM%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0A%20%20%20%20%20%20%3Afrom%3D%220.0%22%0A%20%20%20%20%20%20%3Ato%3D%2224.0%22%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0A%20%20%20%20%20%20%3Aprecision%3D%222%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%E6%92%AD%E6%94%BE%0A%20%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[u(" 精度 ")]),content:n(()=>[t(d,null,{default:n(()=>[u("使用 "),t(c,{code:""},{default:n(()=>[u("precision")]),_:1}),u(" 设定精度。")]),_:1})]),demo:n(()=>[e("div",O,[t(E,{label:"JJJJNM","tabular-nums":""},{default:n(()=>[t(A,{ref:"numberAnimationInstRef",from:0,to:24,active:!1,precision:2},null,512)]),_:1}),t(_,{onClick:i.handleClick},{default:n(()=>[u(" 播放 ")]),_:1},8,["onClick"])])]),_:1})}const L=C(j,[["render",G],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/precision.demo.vue"]]),W=F({setup(){const i=h(null);return{numberAnimationInstRef:i,handleClick(){var s;(s=i.value)==null||s.play()}}}}),q={class:"demo-card__view"};function H(i,s,p,a,B,D){const c=o("n-p"),d=o("n-number-animation"),A=o("n-statistic"),E=o("n-button"),_=o("component-demo");return r(),m(_,{"demo-file-name":"separator.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/separator.demo.vue",title:"分隔符","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22%E4%B8%80%E4%B8%AA%E5%B0%8F%E7%9B%AE%E6%A0%87%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0A%20%20%20%20%20%20show-separator%0A%20%20%20%20%20%20%3Afrom%3D%220%22%0A%20%20%20%20%20%20%3Ato%3D%22100000000%22%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%E6%92%AD%E6%94%BE%0A%20%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20NumberAnimationInst%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick%20()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22%E4%B8%80%E4%B8%AA%E5%B0%8F%E7%9B%AE%E6%A0%87%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0A%20%20%20%20%20%20show-separator%0A%20%20%20%20%20%20%3Afrom%3D%220%22%0A%20%20%20%20%20%20%3Ato%3D%22100000000%22%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%E6%92%AD%E6%94%BE%0A%20%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[u(" 分隔符 ")]),content:n(()=>[t(c,null,{default:n(()=>[u("欢乐豆太多的时候容易数不清有几位。")]),_:1})]),demo:n(()=>[e("div",q,[t(A,{label:"一个小目标","tabular-nums":""},{default:n(()=>[t(d,{ref:"numberAnimationInstRef","show-separator":"",from:0,to:1e8,active:!1},null,512)]),_:1}),t(E,{onClick:i.handleClick},{default:n(()=>[u(" 播放 ")]),_:1},8,["onClick"])])]),_:1})}const K=C(W,[["render",H],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/separator.demo.vue"]]),Q=F({setup(){const i=h(null);return{numberAnimationInstRef:i,handleClick(){var s;(s=i.value)==null||s.play()}}}}),X={class:"demo-card__view"};function Y(i,s,p,a,B,D){const c=o("n-text"),d=o("n-p"),A=o("n-a"),E=o("n-number-animation"),_=o("n-statistic"),b=o("n-button"),v=o("component-demo");return r(),m(v,{"demo-file-name":"intl.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/intl.demo.vue",title:"国际化","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22%E4%BD%A0%E5%8F%AF%E8%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BF%84%E8%AF%AD%E7%9A%84%E5%B0%8F%E6%95%B0%E7%82%B9%E6%98%AF%E9%80%97%E5%8F%B7%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0A%20%20%20%20%20%20%3Afrom%3D%220.0%22%0A%20%20%20%20%20%20%3Ato%3D%22699700.699%22%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0A%20%20%20%20%20%20%3Aprecision%3D%223%22%0A%20%20%20%20%20%20locale%3D%22ru-RU%22%0A%20%20%20%20%20%20show-separator%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%E6%92%AD%E6%94%BE%0A%20%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20NumberAnimationInst%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick%20()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22%E4%BD%A0%E5%8F%AF%E8%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BF%84%E8%AF%AD%E7%9A%84%E5%B0%8F%E6%95%B0%E7%82%B9%E6%98%AF%E9%80%97%E5%8F%B7%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0A%20%20%20%20%20%20%3Afrom%3D%220.0%22%0A%20%20%20%20%20%20%3Ato%3D%22699700.699%22%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0A%20%20%20%20%20%20%3Aprecision%3D%223%22%0A%20%20%20%20%20%20locale%3D%22ru-RU%22%0A%20%20%20%20%20%20show-separator%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%E6%92%AD%E6%94%BE%0A%20%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[u(" 国际化 ")]),content:n(()=>[t(d,null,{default:n(()=>[u("使用 "),t(c,{code:""},{default:n(()=>[u("locale")]),_:1}),u(" 设定国际化语言。")]),_:1}),t(d,null,{default:n(()=>[u("需要注意的是，该功能使用了 "),t(c,{code:""},{default:n(()=>[u("Intl")]),_:1}),u(" API，兼容性请参考 "),t(A,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format",target:"_blank"},{default:n(()=>[u("format")]),_:1}),u(" 和 "),t(A,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts",target:"_blank"},{default:n(()=>[u("formatToParts")]),_:1}),u("。")]),_:1})]),demo:n(()=>[e("div",X,[t(_,{label:"你可能不知道俄语的小数点是逗号","tabular-nums":""},{default:n(()=>[t(E,{ref:"numberAnimationInstRef",from:0,to:699700.699,active:!1,precision:3,locale:"ru-RU","show-separator":""},null,512)]),_:1}),t(b,{onClick:i.handleClick},{default:n(()=>[u(" 播放 ")]),_:1},8,["onClick"])])]),_:1})}const Z=C(Q,[["render",Y],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/intl.demo.vue"]]),e0=F({setup(){const i=h(null),s=V();return{numberAnimationInstRef:i,handleClick(){var p;(p=i.value)==null||p.play()},handleFinish(){s.success("Finished")}}}}),n0={class:"demo-card__view"};function t0(i,s,p,a,B,D){const c=o("n-number-animation"),d=o("n-statistic"),A=o("n-button"),E=o("component-demo");return r(),m(E,{"demo-file-name":"finish.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/finish.demo.vue",title:"结束的回调","ts-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22%E5%AE%8C%E6%88%90%E4%B9%8B%E5%90%8E%E5%8F%91%E4%B8%AA%E6%B6%88%E6%81%AF%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0A%20%20%20%20%20%20show-separator%0A%20%20%20%20%20%20%3Afrom%3D%220%22%0A%20%20%20%20%20%20%3Ato%3D%22100000000%22%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0A%20%20%20%20%20%20%40finish%3D%22handleFinish%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%E5%BC%80%E5%A7%8B%0A%20%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20NumberAnimationInst%2C%20useMessage%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick%20()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleFinish%20()%20%7B%0A%20%20%20%20%20%20%20%20message.success('Finished')%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-statistic%20label%3D%22%E5%AE%8C%E6%88%90%E4%B9%8B%E5%90%8E%E5%8F%91%E4%B8%AA%E6%B6%88%E6%81%AF%22%20tabular-nums%3E%0A%20%20%20%20%3Cn-number-animation%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0A%20%20%20%20%20%20show-separator%0A%20%20%20%20%20%20%3Afrom%3D%220%22%0A%20%20%20%20%20%20%3Ato%3D%22100000000%22%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0A%20%20%20%20%20%20%40finish%3D%22handleFinish%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fn-statistic%3E%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0A%20%20%20%20%E5%BC%80%E5%A7%8B%0A%20%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20useMessage%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20message%20%3D%20useMessage()%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleFinish()%20%7B%0A%20%20%20%20%20%20%20%20message.success(%22Finished%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[u(" 结束的回调 ")]),content:n(()=>[y("CONTENT_SLOT")]),demo:n(()=>[e("div",n0,[t(d,{label:"完成之后发个消息","tabular-nums":""},{default:n(()=>[t(c,{ref:"numberAnimationInstRef","show-separator":"",from:0,to:1e8,active:!1,onFinish:i.handleFinish},null,8,["onFinish"])]),_:1}),t(A,{onClick:i.handleClick},{default:n(()=>[u(" 开始 ")]),_:1},8,["onClick"])])]),_:1})}const u0=C(e0,[["render",t0],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/finish.demo.vue"]]),o0={components:{basicVueDemo:T,precisionVueDemo:L,separatorVueDemo:K,intlVueDemo:Z,finishVueDemo:u0},setup(){const i=M(),s=U(()=>!i.value),p=i;return{showAnchor:s,displayMode:z(),wrapperStyle:R(()=>p.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:R(()=>s.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/index.demo-entry.md"}}},i0={class:"md-table-wrapper"},s0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明"),e("th",null,"版本")])],-1),a0=e("td",null,"active",-1),l0=e("td",null,"是否开始动画",-1),r0=e("td",null,"2.23.2",-1),A0=e("td",null,"duration",-1),m0=e("td",null,"动画持续时间",-1),c0=e("td",null,"2.23.2",-1),d0=e("td",null,"from",-1),E0=e("td",null,"数值动画起始值",-1),p0=e("td",null,"2.23.2",-1),_0=e("td",null,"locale",-1),f0=e("td",null,"跟随 config provider",-1),C0=e("td",null,"国际化的语言",-1),B0=e("td",null,"2.24.2",-1),D0=e("td",null,"precision",-1),b0=e("td",null,"精度，保留小数点后几位",-1),F0=e("td",null,"2.23.2",-1),h0=e("td",null,"show-separator",-1),v0=e("td",null,"是否显示分隔符",-1),y0=e("td",null,"2.23.2",-1),I0=e("td",null,"to",-1),k0=e("td",null,"目标值",-1),R0=e("td",null,"2.23.2",-1),g0=e("td",null,"on-finish",-1),N0=e("td",null,"动画结束的回调",-1),x0=e("td",null,"2.31.0",-1),w0={class:"md-table-wrapper"},$0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"参数"),e("th",null,"说明"),e("th",null,"版本")])],-1),V0=e("td",null,"play",-1),M0=e("td",null,"播放动画",-1),U0=e("td",null,"2.23.2",-1),z0={key:0,style:{width:"192px"}};function J0(i,s,p,a,B,D){const c=o("edit-on-github-header"),d=o("n-p"),A=o("n-h2"),E=o("basicVueDemo"),_=o("precisionVueDemo"),b=o("separatorVueDemo"),v=o("intlVueDemo"),x=o("finishVueDemo"),w=o("component-demos"),I=o("n-h3"),l=o("n-text"),k=o("n-table"),f=o("n-anchor-link"),$=o("n-anchor");return r(),g("div",{class:"doc",style:N(a.wrapperStyle)},[e("div",{style:N(a.contentStyle)},[t(c,{"relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/index.demo-entry.md",text:"数值动画 Number Animation"}),t(d,null,{default:n(()=>[u("这个动画，那么有科技感，快请到我们的大屏上来。")]),_:1}),t(A,{id:"演示"},{default:n(()=>[u("演示")]),_:1}),t(w,{span:2},{default:n(()=>[t(E),t(_),t(b),t(v),t(x)]),_:1}),t(A,{id:"API"},{default:n(()=>[u("API")]),_:1}),t(I,{id:"NumberAnimation-Props"},{default:n(()=>[u("NumberAnimation Props")]),_:1}),e("div",i0,[t(k,{"single-column":"",class:"md-table"},{default:n(()=>[s0,e("tbody",null,[e("tr",null,[a0,e("td",null,[t(l,{code:""},{default:n(()=>[u("boolean")]),_:1})]),e("td",null,[t(l,{code:""},{default:n(()=>[u("true")]),_:1})]),l0,r0]),e("tr",null,[A0,e("td",null,[t(l,{code:""},{default:n(()=>[u("number")]),_:1})]),e("td",null,[t(l,{code:""},{default:n(()=>[u("3000")]),_:1})]),m0,c0]),e("tr",null,[d0,e("td",null,[t(l,{code:""},{default:n(()=>[u("number")]),_:1})]),e("td",null,[t(l,{code:""},{default:n(()=>[u("0")]),_:1})]),E0,p0]),e("tr",null,[_0,e("td",null,[t(l,{code:""},{default:n(()=>[u("string")]),_:1})]),f0,C0,B0]),e("tr",null,[D0,e("td",null,[t(l,{code:""},{default:n(()=>[u("number")]),_:1})]),e("td",null,[t(l,{code:""},{default:n(()=>[u("0")]),_:1})]),b0,F0]),e("tr",null,[h0,e("td",null,[t(l,{code:""},{default:n(()=>[u("boolean")]),_:1})]),e("td",null,[t(l,{code:""},{default:n(()=>[u("false")]),_:1})]),v0,y0]),e("tr",null,[I0,e("td",null,[t(l,{code:""},{default:n(()=>[u("number")]),_:1})]),e("td",null,[t(l,{code:""},{default:n(()=>[u("undefined")]),_:1})]),k0,R0]),e("tr",null,[g0,e("td",null,[t(l,{code:""},{default:n(()=>[u("() => void")]),_:1})]),e("td",null,[t(l,{code:""},{default:n(()=>[u("undefined")]),_:1})]),N0,x0])])]),_:1})]),t(I,{id:"NumberAnimation-Methods"},{default:n(()=>[u("NumberAnimation Methods")]),_:1}),e("div",w0,[t(k,{"single-column":"",class:"md-table"},{default:n(()=>[$0,e("tbody",null,[e("tr",null,[V0,e("td",null,[t(l,{code:""},{default:n(()=>[u("()")]),_:1})]),M0,U0])])]),_:1})])],4),a.showAnchor?(r(),g("div",z0,[t($,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(a.displayMode,r(),m(f,{key:0,title:"基础用法",href:"#basic.vue"})),(a.displayMode,r(),m(f,{key:1,title:"精度",href:"#precision.vue"})),(a.displayMode,r(),m(f,{key:2,title:"分隔符",href:"#separator.vue"})),(a.displayMode,r(),m(f,{key:3,title:"国际化",href:"#intl.vue"})),(a.displayMode,r(),m(f,{key:4,title:"结束的回调",href:"#finish.vue"})),(a.displayMode,r(),m(f,{key:5,title:"API",href:"#API"})),(a.displayMode,r(),m(f,{key:6,title:"NumberAnimation Props",href:"#NumberAnimation-Props"})),(a.displayMode,r(),m(f,{key:7,title:"NumberAnimation Methods",href:"#NumberAnimation-Methods"}))]),_:1})])):y("v-if",!0)],4)}const S0=C(o0,[["render",J0],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/number-animation/demos/zhCN/index.demo-entry.md"]]);export{S0 as default};

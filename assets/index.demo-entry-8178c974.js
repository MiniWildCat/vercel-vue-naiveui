import{j as b,l as F,_ as E,r as i,o as c,i as f,w as t,h as e,g as o,e as n,x as y,y as w,u as $,a as S,b as U,c as D,d as B,n as v,f as V}from"./index-6d22af44.js";const M=b({setup(){return{containerRef:F(void 0)}}});const I=a=>(y("data-v-ceede21a"),a=a(),w(),a),P={class:"demo-card__view"},N={ref:"containerRef",class:"container"},H=I(()=>n("div",{class:"padding"},null,-1)),L={class:"content"};function j(a,p,_,r,x,h){const d=i("n-text"),s=i("n-p"),A=i("n-tag"),l=i("n-affix"),u=i("n-col"),g=i("n-row"),C=i("component-demo");return c(),f(C,{"demo-file-name":"basic.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/affix/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20ref%3D%22containerRef%22%20class%3D%22container%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22padding%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20class%3D%22content%22%3E%0A%20%20%20%20%20%20%3Cn-row%3E%0A%20%20%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-affix%20%3Atop%3D%22120%22%20%3Atrigger-top%3D%2260%22%20%3Alisten-to%3D%22()%20%3D%3E%20containerRef%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-tag%3EAffix%20Trigger%20Top%2060px%3C%2Fn-tag%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-affix%3E%0A%20%20%20%20%20%20%20%20%3C%2Fn-col%3E%0A%20%20%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-affix%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Abottom%3D%22120%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atrigger-bottom%3D%2260%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Alisten-to%3D%22()%20%3D%3E%20containerRef%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-tag%3EAffix%20Trigger%20Bottom%2060px%3C%2Fn-tag%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-affix%3E%0A%20%20%20%20%20%20%20%20%3C%2Fn-col%3E%0A%20%20%20%20%20%20%3C%2Fn-row%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20containerRef%20%3D%20ref%3CHTMLElement%20%7C%20undefined%3E(undefined)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20containerRef%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.container%20%7B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20200px%3B%0A%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.3)%3B%0A%20%20border-radius%3A%203px%3B%0A%20%20overflow%3A%20auto%3B%0A%7D%0A%0A.padding%20%7B%0A%20%20height%3A%20150px%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.15)%3B%0A%7D%0A%0A.content%20%7B%0A%20%20height%3A%20600px%3B%0A%7D%0A%3C%2Fstyle%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20ref%3D%22containerRef%22%20class%3D%22container%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22padding%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20class%3D%22content%22%3E%0A%20%20%20%20%20%20%3Cn-row%3E%0A%20%20%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-affix%20%3Atop%3D%22120%22%20%3Atrigger-top%3D%2260%22%20%3Alisten-to%3D%22()%20%3D%3E%20containerRef%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-tag%3EAffix%20Trigger%20Top%2060px%3C%2Fn-tag%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-affix%3E%0A%20%20%20%20%20%20%20%20%3C%2Fn-col%3E%0A%20%20%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-affix%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Abottom%3D%22120%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atrigger-bottom%3D%2260%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Alisten-to%3D%22()%20%3D%3E%20containerRef%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-tag%3EAffix%20Trigger%20Bottom%2060px%3C%2Fn-tag%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-affix%3E%0A%20%20%20%20%20%20%20%20%3C%2Fn-col%3E%0A%20%20%20%20%20%20%3C%2Fn-row%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20containerRef%20%3D%20ref(void%200)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20containerRef%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.container%20%7B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20200px%3B%0A%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.3)%3B%0A%20%20border-radius%3A%203px%3B%0A%20%20overflow%3A%20auto%3B%0A%7D%0A%0A.padding%20%7B%0A%20%20height%3A%20150px%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.15)%3B%0A%7D%0A%0A.content%20%7B%0A%20%20height%3A%20600px%3B%0A%7D%0A%3C%2Fstyle%3E","language-type":"ts"},{title:t(()=>[e(" Basic ")]),content:t(()=>[o(s,null,{default:t(()=>[e("Affix has "),o(d,{code:""},{default:t(()=>[e("trigger-top")]),_:1}),e(", "),o(d,{code:""},{default:t(()=>[e("top")]),_:1}),e(", "),o(d,{code:""},{default:t(()=>[e("trigger-bottom")]),_:1}),e(" and "),o(d,{code:""},{default:t(()=>[e("bottom")]),_:1}),e(". "),o(d,{code:""},{default:t(()=>[e("trigger-top")]),_:1}),e(" is top affixing trigger point. "),o(d,{code:""},{default:t(()=>[e("top")]),_:1}),e(" is the style "),o(d,{code:""},{default:t(()=>[e("top")]),_:1}),e(" value after top affixing is trigger. "),o(d,{code:""},{default:t(()=>[e("trigger-bottom")]),_:1}),e(" and "),o(d,{code:""},{default:t(()=>[e("bottom")]),_:1}),e(" work in similar way.")]),_:1})]),demo:t(()=>[n("div",P,[n("div",N,[H,n("div",L,[o(g,null,{default:t(()=>[o(u,{span:12},{default:t(()=>[o(l,{top:120,"trigger-top":60,"listen-to":()=>a.containerRef},{default:t(()=>[o(A,null,{default:t(()=>[e("Affix Trigger Top 60px")]),_:1})]),_:1},8,["listen-to"])]),_:1}),o(u,{span:12},{default:t(()=>[o(l,{bottom:120,"trigger-bottom":60,"listen-to":()=>a.containerRef},{default:t(()=>[o(A,null,{default:t(()=>[e("Affix Trigger Bottom 60px")]),_:1})]),_:1},8,["listen-to"])]),_:1})]),_:1})])],512)])]),_:1})}const z=E(M,[["render",j],["__scopeId","data-v-ceede21a"],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/affix/demos/enUS/basic.demo.vue"]]),W=b({setup(){return{containerRef:F(void 0)}}});const Y=a=>(y("data-v-2064c315"),a=a(),w(),a),q={class:"demo-card__view"},G={class:"absolute-anchor-container"},J={ref:"containerRef",class:"container"},K=Y(()=>n("div",{class:"padding"},null,-1)),O={class:"content"},Q={style:{display:"inline-block",width:"50%"}},X={style:{display:"inline-block",width:"50%"}};function Z(a,p,_,r,x,h){const d=i("n-text"),s=i("n-p"),A=i("n-tag"),l=i("n-affix"),u=i("component-demo");return c(),f(u,{"demo-file-name":"position.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/affix/demos/enUS/position.demo.vue",title:"Position","ts-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22absolute-anchor-container%22%3E%0A%20%20%20%20%3Cdiv%20ref%3D%22containerRef%22%20class%3D%22container%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22padding%22%20%2F%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22content%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3A%20inline-block%3B%20width%3A%2050%25%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-affix%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atrigger-top%3D%2250%22%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Alisten-to%3D%22()%20%3D%3E%20containerRef%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-tag%3EAffix%20Trigger%20Top%2050px%3C%2Fn-tag%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-affix%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3A%20inline-block%3B%20width%3A%2050%25%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-affix%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atrigger-bottom%3D%2260%22%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Alisten-to%3D%22()%20%3D%3E%20containerRef%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-tag%3EAffix%20Trigger%20Bottom%2060px%3C%2Fn-tag%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-affix%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20containerRef%20%3D%20ref%3CHTMLElement%20%7C%20undefined%3E(undefined)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20containerRef%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.absolute-anchor-container%20%7B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20200px%3B%0A%20%20position%3A%20relative%3B%0A%7D%0A%0A.container%20%7B%0A%20%20height%3A%20200px%3B%0A%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.3)%3B%0A%20%20border-radius%3A%203px%3B%0A%20%20overflow%3A%20auto%3B%0A%7D%0A%0A.padding%20%7B%0A%20%20height%3A%20150px%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.15)%3B%0A%7D%0A%0A.content%20%7B%0A%20%20height%3A%20600px%3B%0A%7D%0A%3C%2Fstyle%3E","js-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22absolute-anchor-container%22%3E%0A%20%20%20%20%3Cdiv%20ref%3D%22containerRef%22%20class%3D%22container%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22padding%22%20%2F%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22content%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3A%20inline-block%3B%20width%3A%2050%25%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-affix%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atrigger-top%3D%2250%22%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Alisten-to%3D%22()%20%3D%3E%20containerRef%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-tag%3EAffix%20Trigger%20Top%2050px%3C%2Fn-tag%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-affix%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3A%20inline-block%3B%20width%3A%2050%25%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-affix%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atrigger-bottom%3D%2260%22%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Alisten-to%3D%22()%20%3D%3E%20containerRef%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-tag%3EAffix%20Trigger%20Bottom%2060px%3C%2Fn-tag%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-affix%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20containerRef%20%3D%20ref(void%200)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20containerRef%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.absolute-anchor-container%20%7B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20200px%3B%0A%20%20position%3A%20relative%3B%0A%7D%0A%0A.container%20%7B%0A%20%20height%3A%20200px%3B%0A%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.3)%3B%0A%20%20border-radius%3A%203px%3B%0A%20%20overflow%3A%20auto%3B%0A%7D%0A%0A.padding%20%7B%0A%20%20height%3A%20150px%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.15)%3B%0A%7D%0A%0A.content%20%7B%0A%20%20height%3A%20600px%3B%0A%7D%0A%3C%2Fstyle%3E","language-type":"ts"},{title:t(()=>[e(" Position ")]),content:t(()=>[o(s,null,{default:t(()=>[e("Affix can be "),o(d,{code:""},{default:t(()=>[e("absolute")]),_:1}),e(" or "),o(d,{code:""},{default:t(()=>[e("fixed")]),_:1}),e(" positioned. You may need some css tricks to make it works as following. By default position is set to "),o(d,{code:""},{default:t(()=>[e("fixed")]),_:1}),e(", because in most cases scrolled element is "),o(d,{code:""},{default:t(()=>[e("document")]),_:1}),e(".")]),_:1})]),demo:t(()=>[n("div",q,[n("div",G,[n("div",J,[K,n("div",O,[n("div",Q,[o(l,{"trigger-top":50,position:"absolute","listen-to":()=>a.containerRef},{default:t(()=>[o(A,null,{default:t(()=>[e("Affix Trigger Top 50px")]),_:1})]),_:1},8,["listen-to"])]),n("div",X,[o(l,{"trigger-bottom":60,position:"absolute","listen-to":()=>a.containerRef},{default:t(()=>[o(A,null,{default:t(()=>[e("Affix Trigger Bottom 60px")]),_:1})]),_:1},8,["listen-to"])])])],512)])])]),_:1})}const e2=E(W,[["render",Z],["__scopeId","data-v-2064c315"],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/affix/demos/enUS/position.demo.vue"]]),t2={components:{basicVueDemo:z,positionVueDemo:e2},setup(){const a=$(),p=S(()=>!a.value),_=a;return{showAnchor:p,displayMode:U(),wrapperStyle:D(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:D(()=>p.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/affix/demos/enUS/index.demo-entry.md"}}},o2={class:"md-table-wrapper"},n2=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Type"),n("th",null,"Default"),n("th",null,"Description")])],-1),i2=n("td",null,"bottom",-1),s2=n("td",null,"listen-to",-1),a2=n("td",null,"The scrolling element to listen scrolling.",-1),d2=n("td",null,"trigger-bottom",-1),r2=n("td",null,"trigger-top",-1),l2=n("td",null,"position",-1),c2=n("td",null,"CSS position of the affix.",-1),A2=n("td",null,"top",-1),u2={key:0,style:{width:"192px"}};function f2(a,p,_,r,x,h){const d=i("edit-on-github-header"),s=i("n-text"),A=i("n-p"),l=i("n-h2"),u=i("basicVueDemo"),g=i("positionVueDemo"),C=i("component-demos"),k=i("n-h3"),R=i("n-table"),m=i("n-anchor-link"),T=i("n-anchor");return c(),B("div",{class:"doc",style:v(r.wrapperStyle)},[n("div",{style:v(r.contentStyle)},[o(d,{"relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/affix/demos/enUS/index.demo-entry.md",text:"Affix"}),o(A,null,{default:t(()=>[e("Affix can make content stick to fixed places when scrolling. It's similar to "),o(s,{code:""},{default:t(()=>[e("position: sticky")]),_:1}),e(" but can do more things.")]),_:1}),o(l,{id:"Demos"},{default:t(()=>[e("Demos")]),_:1}),o(C,{span:2},{default:t(()=>[o(u),o(g)]),_:1}),o(l,{id:"API"},{default:t(()=>[e("API")]),_:1}),o(k,{id:"Affix-Props"},{default:t(()=>[e("Affix Props")]),_:1}),n("div",o2,[o(R,{"single-column":"",class:"md-table"},{default:t(()=>[n2,n("tbody",null,[n("tr",null,[i2,n("td",null,[o(s,{code:""},{default:t(()=>[e("number")]),_:1})]),n("td",null,[o(s,{code:""},{default:t(()=>[e("undefined")]),_:1})]),n("td",null,[e("The css bottom property after trigger bottom affix. (if not set, use "),o(s,{code:""},{default:t(()=>[e("trigger-bottom")]),_:1}),e(" prop)")])]),n("tr",null,[s2,n("td",null,[o(s,{code:""},{default:t(()=>[e("string | HTMLElement | Document | Window | (() => HTMLElement)")]),_:1})]),n("td",null,[o(s,{code:""},{default:t(()=>[e("document")]),_:1})]),a2]),n("tr",null,[d2,n("td",null,[o(s,{code:""},{default:t(()=>[e("number")]),_:1})]),n("td",null,[o(s,{code:""},{default:t(()=>[e("undefined")]),_:1})]),n("td",null,[e("The distance px to bottom of target to trigger bottom affix. (if not set, use "),o(s,{code:""},{default:t(()=>[e("bottom")]),_:1}),e(" prop)")])]),n("tr",null,[r2,n("td",null,[o(s,{code:""},{default:t(()=>[e("number")]),_:1})]),n("td",null,[o(s,{code:""},{default:t(()=>[e("undefined")]),_:1})]),n("td",null,[e("The distance px to top of target to trigger top affix. (if not set, use "),o(s,{code:""},{default:t(()=>[e("top")]),_:1}),e(" prop)")])]),n("tr",null,[l2,n("td",null,[o(s,{code:""},{default:t(()=>[e("'fixed' | 'absolute'")]),_:1})]),n("td",null,[o(s,{code:""},{default:t(()=>[e("'fixed'")]),_:1})]),c2]),n("tr",null,[A2,n("td",null,[o(s,{code:""},{default:t(()=>[e("number")]),_:1})]),n("td",null,[o(s,{code:""},{default:t(()=>[e("undefined")]),_:1})]),n("td",null,[e("The css top property after trigger top affix. (if not set, use "),o(s,{code:""},{default:t(()=>[e("trigger-top")]),_:1}),e(" prop)")])])])]),_:1})])],4),r.showAnchor?(c(),B("div",u2,[o(T,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(r.displayMode,c(),f(m,{key:0,title:"Basic",href:"#basic.vue"})),(r.displayMode,c(),f(m,{key:1,title:"Position",href:"#position.vue"})),(r.displayMode,c(),f(m,{key:2,title:"API",href:"#API"})),(r.displayMode,c(),f(m,{key:3,title:"Affix Props",href:"#Affix-Props"}))]),_:1})])):V("v-if",!0)],4)}const _2=E(t2,[["render",f2],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/affix/demos/enUS/index.demo-entry.md"]]);export{_2 as default};

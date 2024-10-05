import{_ as w,u as S,a as k,b as P,c as _,r as a,o as y,d as g,e as t,g as s,w as n,h as e,n as b,f as A}from"./index-6d22af44.js";const C={components:{},setup(){const i=S(),d=k(()=>(i.value,!1)),f=i;return{showAnchor:d,displayMode:P(),wrapperStyle:_(()=>f.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:_(()=>d.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/demo/pages/docs/style-conflict/enUS/index.md"}}},D=t("pre",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"head"),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"xxx"),e(" />")]),e(`
  `),t("span",{class:"hljs-comment"},"<!-- naive-ui's style will be inserted here -->"),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"meta"),e(),t("span",{class:"hljs-attr"},"name"),e("="),t("span",{class:"hljs-string"},'"naive-ui-style"'),e(" />")]),e(`
  `),t("span",{class:"hljs-comment"},"<!-- vueuc's style will be inserted here -->"),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"meta"),e(),t("span",{class:"hljs-attr"},"name"),e("="),t("span",{class:"hljs-string"},'"vueuc-style"'),e(" />")]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"xxx"),e(" />")]),e(`
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"head"),e(">")])],-1),R=t("pre",null,[t("span",{class:"hljs-keyword"},"const"),e(" meta = "),t("span",{class:"hljs-variable language_"},"document"),e("."),t("span",{class:"hljs-title function_"},"createElement"),e("("),t("span",{class:"hljs-string"},"'meta'"),e(`)
meta.`),t("span",{class:"hljs-property"},"name"),e(" = "),t("span",{class:"hljs-string"},"'naive-ui-style'"),e(`
`),t("span",{class:"hljs-variable language_"},"document"),e("."),t("span",{class:"hljs-property"},"head"),e("."),t("span",{class:"hljs-title function_"},"appendChild"),e(`(meta)

vueApp.`),t("span",{class:"hljs-title function_"},"mount"),e("("),t("span",{class:"hljs-string"},"'#app'"),e(")")],-1),E=t("pre",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"n-config-provider"),e(),t("span",{class:"hljs-attr"},"preflight-style-disabled"),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"your-app"),e(" />")]),e(`
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"n-config-provider"),e(">")])],-1),T={key:0,style:{width:"192px"}};function U(i,d,f,c,I,M){const x=a("edit-on-github-header"),r=a("n-h2"),l=a("n-p"),o=a("n-text"),v=a("n-a"),p=a("n-code"),u=a("n-scrollbar"),h=a("n-card"),m=a("n-anchor-link"),j=a("n-anchor");return y(),g("div",{class:"doc",style:b(c.wrapperStyle)},[t("div",{style:b(c.contentStyle)},[s(x,{"relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/demo/pages/docs/style-conflict/enUS/index.md",text:"Potential Style Conflict"}),s(r,{id:"Style-Element-Position"},{default:n(()=>[e("Style Element Position")]),_:1}),s(l,null,{default:n(()=>[e("Sometimes you want to control where the style element should be inserted.")]),_:1}),s(l,null,{default:n(()=>[e("For example. If you have a tailwind reset style, you don't want it to be inserted after naive-ui's style. Since it may override button's style, etc.")]),_:1}),s(l,null,{default:n(()=>[e("You can create a "),s(o,{code:""},{default:n(()=>[e('<meta name="naive-ui-style" />')]),_:1}),e(" element inside "),s(o,{code:""},{default:n(()=>[e("head")]),_:1}),e(" element, then naive-ui's style will be inserted right before it.")]),_:1}),s(l,null,{default:n(()=>[e("Also, naive-ui uses "),s(v,{href:"https://github.com/07akioni/vueuc",target:"_blank"},{default:n(()=>[e("vueuc")]),_:1}),e(". If you need, its style can be controlled by "),s(o,{code:""},{default:n(()=>[e('<meta name="vueuc-style" />')]),_:1}),e(" (generally it's not needed).")]),_:1}),s(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[s(u,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[s(p,null,{default:n(()=>[D]),_:1})]),_:1})]),_:1}),s(r,{id:"About-Tailwind's-Preflight-Style-Override"},{default:n(()=>[e("About Tailwind's Preflight Style Override")]),_:1}),s(l,null,{default:n(()=>[e("You may find adding a meta tag to your static html files doesn't work (naive's style would still be overriden), since your toolchain may always insert tailwind's style at the end of the head tag. In this situation, you need to insert the meta tag dynamically right before the app is mounted.")]),_:1}),s(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[s(u,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[s(p,null,{default:n(()=>[R]),_:1})]),_:1})]),_:1}),s(r,{id:"Disable-Preflight-Style-(CSS-Reset)"},{default:n(()=>[e("Disable Preflight Style (CSS Reset)")]),_:1}),s(l,null,{default:n(()=>[e("To make naive-ui work for most users out of box, mounting any component of naive would create global preflight style. However it may not be expected. If you want to disable it, using "),s(o,{code:""},{default:n(()=>[e("n-config-provider")]),_:1}),e(" like this.")]),_:1}),s(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[s(u,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[s(p,null,{default:n(()=>[E]),_:1})]),_:1})]),_:1})],4),c.showAnchor?(y(),g("div",T,[s(j,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[s(m,{title:"Style Element Position",href:"#Style-Element-Position"}),s(m,{title:"About Tailwind's Preflight Style Override",href:"#About-Tailwind's-Preflight-Style-Override"}),s(m,{title:"Disable Preflight Style (CSS Reset)",href:"#Disable-Preflight-Style-(CSS-Reset)"})]),_:1})])):A("v-if",!0)],4)}const O=w(C,[["render",U],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/demo/pages/docs/style-conflict/enUS/index.md"]]);export{O as default};

import{_ as z,u as F,a as N,b as U,c as f,r as o,o as _,d as v,e,f as y,g as a,w as n,h as s,n as b}from"./index-6d22af44.js";const I={components:{},setup(){const d=F(),m=N(()=>!d.value),u=d;return{showAnchor:m,displayMode:U(),wrapperStyle:f(()=>u.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:f(()=>m.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/demo/pages/docs/customize-theme/enUS/index.md"}}},B=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme"),s("="),e("span",{class:"hljs-string"},'"darkTheme"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { darkTheme } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(),e("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),e("span",{class:"hljs-title function_"},"setup"),s("("),e("span",{class:"hljs-params"}),s(`) {
      `),e("span",{class:"hljs-keyword"},"return"),s(` {
        darkTheme
      }
    }
  })
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")])],-1),P=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-comment"},[s(`/**
   * Use this for type hints under js file
   * `),e("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),e("span",{class:"hljs-keyword"},"const"),s(` themeOverrides = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),e("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),e("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),e("span",{class:"hljs-attr"},"peers"),s(`: {
        `),e("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
        }
      }
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),G=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"lang"),s("="),e("span",{class:"hljs-string"},'"ts"'),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"themeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),e("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    }
  }

  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),M=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"lang"),s("="),e("span",{class:"hljs-string"},'"ts"'),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"SelectProps"),s(", "),e("span",{class:"hljs-title class_"},"ButtonProps"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  type `),e("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(" = "),e("span",{class:"hljs-title class_"},"NonNullable"),s("<"),e("span",{class:"hljs-title class_"},"SelectProps"),s("["),e("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>
  type `),e("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(" = "),e("span",{class:"hljs-title class_"},"NonNullable"),s("<"),e("span",{class:"hljs-title class_"},"ButtonProps"),s("["),e("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>

  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"selectThemeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-attr"},"menuBoxShadow"),s(`:
      `),e("span",{class:"hljs-string"},"'0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'"),s(`,
    `),e("span",{class:"hljs-attr"},"peers"),s(`: {
      `),e("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
        `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`,
        `),e("span",{class:"hljs-attr"},"heightMedium"),s(": "),e("span",{class:"hljs-string"},"'42px'"),s(`
      }
    }
  }
  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"buttonThemeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-attr"},"heightMedium"),s(": "),e("span",{class:"hljs-string"},"'40px'"),s(`,
    `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'rgba(24, 127, 231, 1)'"),s(`
  }

  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-select"),s(`
    `),e("span",{class:"hljs-attr"},"v-model:value"),s("="),e("span",{class:"hljs-string"},'"value"'),s(`
    `),e("span",{class:"hljs-attr"},":options"),s("="),e("span",{class:"hljs-string"},'"options"'),s(`
    `),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"selectThemeOverrides"'),s(`
  />`)]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-button"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"buttonThemeOverrides"'),s(">")]),s("theme"),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),D=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(", darkTheme } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-comment"},[s(`/**
   * `),e("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),e("span",{class:"hljs-keyword"},"const"),s(` lightThemeOverrides = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#000000'"),s(`
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),e("span",{class:"hljs-keyword"},"const"),s(` darkThemeOverrides = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#FFFFFF'"),s(`
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),e("span",{class:"hljs-keyword"},"const"),s(" theme = "),e("span",{class:"hljs-literal"},"null"),s(`
  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(`
    `),e("span",{class:"hljs-attr"},":theme"),s("="),e("span",{class:"hljs-string"},'"theme"'),s(`
    `),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"theme === null ? lightThemeOverrides : darkThemeOverrides"'),s(`
  >`)]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),E=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"lang"),s("="),e("span",{class:"hljs-string"},'"ts"'),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"themeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),e("span",{class:"hljs-attr"},"peers"),s(`: {
        `),e("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
        },
        `),e("span",{class:"hljs-title class_"},"InternalSelectMenu"),s(`: {
          `),e("span",{class:"hljs-attr"},"borderRadius"),s(": "),e("span",{class:"hljs-string"},"'6px'"),s(`
        }
      }
    },
    `),e("span",{class:"hljs-title class_"},"DataTable"),s(`: {
      `),e("span",{class:"hljs-attr"},"paginationMargin"),s(": "),e("span",{class:"hljs-string"},"'40px 0 0 0'"),s(`,
      `),e("span",{class:"hljs-attr"},"peers"),s(`: {
        `),e("span",{class:"hljs-title class_"},"Empty"),s(`: {
          `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#ccc'"),s(`
        },
        `),e("span",{class:"hljs-title class_"},"Pagination"),s(`: {
          `),e("span",{class:"hljs-attr"},"itemTextColor"),s(": "),e("span",{class:"hljs-string"},"'#ccc'"),s(`
        }
      }
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }
  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),R=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},"..."),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"app"),s(" />")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-global-style"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),V=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NThemeEditor"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(),e("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),e("span",{class:"hljs-attr"},"components"),s(`: {
      `),e("span",{class:"hljs-title class_"},"NThemeEditor"),s(`
    }
  })
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")])],-1),A={key:0,style:{width:"192px"}};function Y(d,m,u,j,q,L){const x=o("edit-on-github-header"),l=o("n-text"),t=o("n-p"),w=o("n-a"),k=o("router-link"),c=o("n-h2"),r=o("n-code"),p=o("n-scrollbar"),i=o("n-card"),g=o("n-li"),T=o("n-ol"),h=o("n-anchor-link"),C=o("n-anchor");return _(),v("div",{class:"doc",style:b(j.wrapperStyle)},[e("div",{style:b(j.contentStyle)},[y("anchor:on"),a(x,{"relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/demo/pages/docs/customize-theme/enUS/index.md",text:"Customizing theme"}),a(t,null,{default:n(()=>[s("Naive-ui provides "),a(l,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" to customize the theme.")]),_:1}),a(t,null,{default:n(()=>[s("By default all of the components are light themed, without any configuration.")]),_:1}),a(t,null,{default:n(()=>[s("To learn more about "),a(l,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(", see "),a(k,{to:"../components/config-provider",custom:""},{default:n(({navigate:S,href:O})=>[a(w,{href:O,onClick:S},{default:n(()=>[s("Config Provider")]),_:2},1032,["href","onClick"])]),_:1}),s(".")]),_:1}),a(c,{id:"Use-dark-theme"},{default:n(()=>[s("Use dark theme")]),_:1}),a(t,null,{default:n(()=>[s("Set "),a(l,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s("'s "),a(l,{code:""},{default:n(()=>[s("theme")]),_:1}),s(" prop to "),a(l,{code:""},{default:n(()=>[s("darkTheme")]),_:1}),s(" imported from naive-ui to set dark theme inside "),a(l,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(".")]),_:1}),a(t,null,{default:n(()=>[s("If "),a(l,{code:""},{default:n(()=>[s("theme")]),_:1}),s(" is "),a(l,{code:""},{default:n(()=>[s("undefined")]),_:1}),s(" it won't affect the theme of components inside.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[a(r,null,{default:n(()=>[B]),_:1})]),_:1})]),_:1}),a(c,{id:"Customizing-theme-vars-(design-tokens)"},{default:n(()=>[s("Customizing theme vars (design tokens)")]),_:1}),a(t,null,{default:n(()=>[s("No CSS (Scss, Less) needed.")]),_:1}),a(t,null,{default:n(()=>[s("The configured global theme variables will overwrite the theme variables that take effect on descendant components.")]),_:1}),a(t,null,{default:n(()=>[s("Set "),a(l,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s("'s "),a(l,{code:""},{default:n(()=>[s("theme-overrides")]),_:1}),s(" to customize theme vars. Naive-ui exports type "),a(l,{code:""},{default:n(()=>[s("GlobalThemeOverrides")]),_:1}),s(" to help you define "),a(l,{code:""},{default:n(()=>[s("theme-overrides")]),_:1}),s(".")]),_:1}),a(t,null,{default:n(()=>[s("For available vars please follow the type hint of "),a(l,{code:""},{default:n(()=>[s("GlobalThemeOverrides")]),_:1}),s(".")]),_:1}),a(t,null,{default:n(()=>[s("If you want to view more theme variables, you can view them in the edit button at the bottom right corner of the Naive UI homepage.")]),_:1}),a(t,null,{default:n(()=>[s("You can modify the corresponding theme variable, you can get the themeOverrides object after export.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[a(r,null,{default:n(()=>[P]),_:1})]),_:1})]),_:1}),a(c,{id:"Customizing-theme-vars-in-TypeScript"},{default:n(()=>[s("Customizing theme vars in TypeScript")]),_:1}),a(t,null,{default:n(()=>[s("If you are using ts to write code, this one is more suitable for you.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[a(r,null,{default:n(()=>[G]),_:1})]),_:1})]),_:1}),a(c,{id:"Customizing-component-theme-vars"},{default:n(()=>[s("Customizing component theme vars")]),_:1}),a(t,null,{default:n(()=>[s("The use of component theme variables is the same as the use of global theme variables, and the component theme variables will override the global theme variables.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[a(r,null,{default:n(()=>[M]),_:1})]),_:1})]),_:1}),a(c,{id:"Customizing-theme-vars-under-different-themes"},{default:n(()=>[s("Customizing theme vars under different themes")]),_:1}),a(t,null,{default:n(()=>[s("If you want to use different theme variables on light and dark theme at the same time, you can take a look at this.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[a(r,null,{default:n(()=>[D]),_:1})]),_:1})]),_:1}),a(c,{id:"Use-the-peers-vars"},{default:n(()=>[s("Use the peers vars")]),_:1}),a(t,null,{default:n(()=>[s("In many cases, another component will be reused inside a component, so the theme variable of peers appears.")]),_:1}),a(t,null,{default:n(()=>[s("The theme variables related to peers have not been exposed yet. Use "),a(l,{code:""},{default:n(()=>[s("GlobalThemeOverrides")]),_:1}),s(" to view the peers variables of the corresponding component.")]),_:1}),a(t,null,{default:n(()=>[s("The specific available peers will be updated later.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[a(r,null,{default:n(()=>[E]),_:1})]),_:1})]),_:1}),a(c,{id:"Sync-style-of-the-body-element"},{default:n(()=>[s("Sync style of the body element")]),_:1}),a(t,null,{default:n(()=>[s("For the following reasons, you may need to set some styles on "),a(l,{code:""},{default:n(()=>[s("document.body")]),_:1}),s(".")]),_:1}),a(T,null,{default:n(()=>[a(g,null,{default:n(()=>[s("Naive-ui will mount some global style that is unresponsive (to theme, not media query). For example "),a(l,{code:""},{default:n(()=>[s("font-family")]),_:1}),s(". The style works fine by default, however they won't change when theme is changed.")]),_:1}),a(g,null,{default:n(()=>[a(l,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" can't sync global style (for example, body's background color) outside it.")]),_:1})]),_:1}),a(t,null,{default:n(()=>[s("You can use "),a(l,{code:""},{default:n(()=>[s("n-global-style")]),_:1}),s(" to sync common global style to the body element. In the following example, "),a(l,{code:""},{default:n(()=>[s("n-global-style")]),_:1}),s(" will sync the theme provided by "),a(l,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" to "),a(l,{code:""},{default:n(()=>[s("document.body")]),_:1}),s(".")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[a(r,null,{default:n(()=>[R]),_:1})]),_:1})]),_:1}),a(c,{id:"Theme-editor"},{default:n(()=>[s("Theme editor")]),_:1}),a(t,null,{default:n(()=>[s("Naive-ui provides a theme editor to help you edit theme and export the corresponding configuration. It can be placed inside "),a(l,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(".")]),_:1}),a(t,null,{default:n(()=>[s("The theme editor is not included in global installation ("),a(l,{code:""},{default:n(()=>[s("app.use(naive)")]),_:1}),s("). You need to import it explicitly to use it.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[a(r,null,{default:n(()=>[V]),_:1})]),_:1})]),_:1})],4),j.showAnchor?(_(),v("div",A,[a(C,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[a(h,{title:"Use dark theme",href:"#Use-dark-theme"}),a(h,{title:"Customizing theme vars (design tokens)",href:"#Customizing-theme-vars-(design-tokens)"}),a(h,{title:"Customizing theme vars in TypeScript",href:"#Customizing-theme-vars-in-TypeScript"}),a(h,{title:"Customizing component theme vars",href:"#Customizing-component-theme-vars"}),a(h,{title:"Customizing theme vars under different themes",href:"#Customizing-theme-vars-under-different-themes"}),a(h,{title:"Use the peers vars",href:"#Use-the-peers-vars"}),a(h,{title:"Sync style of the body element",href:"#Sync-style-of-the-body-element"}),a(h,{title:"Theme editor",href:"#Theme-editor"})]),_:1})])):y("v-if",!0)],4)}const H=z(I,[["render",Y],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/demo/pages/docs/customize-theme/enUS/index.md"]]);export{H as default};

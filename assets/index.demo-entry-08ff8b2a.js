import{_ as x,r as o,o as d,i as u,w as e,h as n,g as t,e as a,u as H,a as z,b as J,c as D,d as F,n as w,f as S}from"./index-6d22af44.js";const B={},U={class:"demo-card__view"},M={style:{"padding-left":"24px",position:"relative"}},G=a("div",{style:{position:"absolute",left:"0",top:"0",bottom:"0",width:"24px","background-color":"rgba(128, 128, 128, 0.5)"}},null,-1);function K(y,E){const i=o("n-p"),r=o("n-text"),p=o("n-h1"),A=o("n-h2"),f=o("n-h3"),_=o("n-h4"),c=o("n-h5"),g=o("n-h6"),s=o("component-demo");return d(),u(s,{"demo-file-name":"header.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/header.demo.vue",title:"Header","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22padding-left%3A%2024px%3B%20position%3A%20relative%22%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20style%3D%22%0A%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20%20%20%20%20width%3A%2024px%3B%0A%20%20%20%20%20%20%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.5)%3B%0A%20%20%20%20%20%20%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cn-h1%3E%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22primary%22%3E%0A%20%20%20%20%20%20%20%20sin(x)%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0A%20%20%20%20%3C%2Fn-h1%3E%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%3E%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22primary%22%3E%0A%20%20%20%20%20%20%20%20sin(x)%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0A%20%20%20%20%3C%2Fn-h1%3E%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%3E%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22primary%22%3E%0A%20%20%20%20%20%20%20%20sin(x)%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0A%20%20%20%20%3C%2Fn-h1%3E%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22success%22%3E%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20sin(x)%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0A%20%20%20%20%3C%2Fn-h1%3E%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22info%22%3E%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22info%22%3E%0A%20%20%20%20%20%20%20%20sin(x)%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0A%20%20%20%20%3C%2Fn-h1%3E%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22warning%22%3E%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22warning%22%3E%0A%20%20%20%20%20%20%20%20sin(x)%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0A%20%20%20%20%3C%2Fn-h1%3E%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22error%22%3E%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22error%22%3E%0A%20%20%20%20%20%20%20%20sin(x)%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0A%20%20%20%20%3C%2Fn-h1%3E%0A%20%20%20%20%3Cn-h2%3Ecos(x)%3C%2Fn-h2%3E%0A%20%20%20%20%3Cn-h2%20prefix%3D%22bar%22%3E%0A%20%20%20%20%20%20cos(x)%0A%20%20%20%20%3C%2Fn-h2%3E%0A%20%20%20%20%3Cn-h2%20prefix%3D%22bar%22%20align-text%3E%0A%20%20%20%20%20%20cos(x)%0A%20%20%20%20%3C%2Fn-h2%3E%0A%20%20%20%20%3Cn-h3%3E-sin(x)%3C%2Fn-h3%3E%0A%20%20%20%20%3Cn-h3%20prefix%3D%22bar%22%3E%0A%20%20%20%20%20%20-sin(x)%0A%20%20%20%20%3C%2Fn-h3%3E%0A%20%20%20%20%3Cn-h3%20prefix%3D%22bar%22%20align-text%3E%0A%20%20%20%20%20%20-sin(x)%0A%20%20%20%20%3C%2Fn-h3%3E%0A%20%20%20%20%3Cn-h4%3E-cos(x)%3C%2Fn-h4%3E%0A%20%20%20%20%3Cn-h4%20prefix%3D%22bar%22%3E%0A%20%20%20%20%20%20-cos(x)%0A%20%20%20%20%3C%2Fn-h4%3E%0A%20%20%20%20%3Cn-h4%20prefix%3D%22bar%22%20align-text%3E%0A%20%20%20%20%20%20-cos(x)%0A%20%20%20%20%3C%2Fn-h4%3E%0A%20%20%20%20%3Cn-h5%3Esin(x)%3C%2Fn-h5%3E%0A%20%20%20%20%3Cn-h5%20prefix%3D%22bar%22%3E%0A%20%20%20%20%20%20sin(x)%0A%20%20%20%20%3C%2Fn-h5%3E%0A%20%20%20%20%3Cn-h5%20prefix%3D%22bar%22%20align-text%3E%0A%20%20%20%20%20%20sin(x)%0A%20%20%20%20%3C%2Fn-h5%3E%0A%20%20%20%20%3Cn-h6%3EWhat%20a%20loop!%3C%2Fn-h6%3E%0A%20%20%20%20%3Cn-h6%20prefix%3D%22bar%22%3E%0A%20%20%20%20%20%20What%20a%20loop!%0A%20%20%20%20%3C%2Fn-h6%3E%0A%20%20%20%20%3Cn-h6%20prefix%3D%22bar%22%20align-text%3E%0A%20%20%20%20%20%20What%20a%20loop!%0A%20%20%20%20%3C%2Fn-h6%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[n(" Header ")]),content:e(()=>[t(i,null,{default:e(()=>[n("Make your headers pop with a little bar to the left. Much less boring.")]),_:1})]),demo:e(()=>[a("div",U,[a("div",M,[G,t(p,null,{default:e(()=>[t(r,{type:"primary"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar"},{default:e(()=>[t(r,{type:"primary"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":""},{default:e(()=>[t(r,{type:"primary"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":"",type:"success"},{default:e(()=>[t(r,{type:"success"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":"",type:"info"},{default:e(()=>[t(r,{type:"info"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":"",type:"warning"},{default:e(()=>[t(r,{type:"warning"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":"",type:"error"},{default:e(()=>[t(r,{type:"error"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(A,null,{default:e(()=>[n("cos(x)")]),_:1}),t(A,{prefix:"bar"},{default:e(()=>[n(" cos(x) ")]),_:1}),t(A,{prefix:"bar","align-text":""},{default:e(()=>[n(" cos(x) ")]),_:1}),t(f,null,{default:e(()=>[n("-sin(x)")]),_:1}),t(f,{prefix:"bar"},{default:e(()=>[n(" -sin(x) ")]),_:1}),t(f,{prefix:"bar","align-text":""},{default:e(()=>[n(" -sin(x) ")]),_:1}),t(_,null,{default:e(()=>[n("-cos(x)")]),_:1}),t(_,{prefix:"bar"},{default:e(()=>[n(" -cos(x) ")]),_:1}),t(_,{prefix:"bar","align-text":""},{default:e(()=>[n(" -cos(x) ")]),_:1}),t(c,null,{default:e(()=>[n("sin(x)")]),_:1}),t(c,{prefix:"bar"},{default:e(()=>[n(" sin(x) ")]),_:1}),t(c,{prefix:"bar","align-text":""},{default:e(()=>[n(" sin(x) ")]),_:1}),t(g,null,{default:e(()=>[n("What a loop!")]),_:1}),t(g,{prefix:"bar"},{default:e(()=>[n(" What a loop! ")]),_:1}),t(g,{prefix:"bar","align-text":""},{default:e(()=>[n(" What a loop! ")]),_:1})])])]),_:1})}const P=x(B,[["render",K],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/header.demo.vue"]]),I={},W={class:"demo-card__view"};function V(y,E){const i=o("n-p"),r=o("n-a"),p=o("n-h1"),A=o("n-h2"),f=o("n-h3"),_=o("n-h4"),c=o("n-h5"),g=o("n-h6"),s=o("n-li"),b=o("n-ul"),k=o("n-hr"),v=o("n-ol"),m=o("n-blockquote"),l=o("component-demo");return d(),u(l,{"demo-file-name":"tags.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/tags.demo.vue",title:"Tags","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-a%20href%3D%22https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHear_the_Wind_Sing%22%20target%3D%22_blank%22%3E%0A%20%20%20%20Hear%20the%20Wind%20Sing%0A%20%20%3C%2Fn-a%3E%0A%20%20%3Cn-h1%3Eh1%20tag%3C%2Fn-h1%3E%0A%20%20%3Cn-p%3E%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0A%20%20%3C%2Fn-p%3E%0A%20%20%3Cn-h2%3Eh2%20tag%3C%2Fn-h2%3E%0A%20%20%3Cn-p%3E%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0A%20%20%3C%2Fn-p%3E%0A%20%20%3Cn-h3%3Eh3%20tag%3C%2Fn-h3%3E%0A%20%20%3Cn-p%3E%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0A%20%20%3C%2Fn-p%3E%0A%20%20%3Cn-h4%3Eh4%20tag%3C%2Fn-h4%3E%0A%20%20%3Cn-p%3E%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0A%20%20%3C%2Fn-p%3E%0A%20%20%3Cn-h5%3Eh5%20tag%3C%2Fn-h5%3E%0A%20%20%3Cn-p%3E%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0A%20%20%3C%2Fn-p%3E%0A%20%20%3Cn-h6%3Eh6%20tag%3C%2Fn-h6%3E%0A%20%20%3Cn-p%3E%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0A%20%20%3C%2Fn-p%3E%0A%20%20%3Cn-ul%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%3C%2Fn-ul%3E%0A%20%20%3Cn-hr%20%2F%3E%0A%20%20%3Cn-ol%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%3C%2Fn-ol%3E%0A%20%20%3Cn-ul%20align-text%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%3C%2Fn-ul%3E%0A%20%20%3Cn-hr%20%2F%3E%0A%20%20%3Cn-ol%20align-text%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0A%20%20%3C%2Fn-ol%3E%0A%20%20%3Cn-blockquote%3E%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0A%20%20%3C%2Fn-blockquote%3E%0A%20%20%3Cn-blockquote%20align-text%3E%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0A%20%20%3C%2Fn-blockquote%3E%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[n(" Tags ")]),content:e(()=>[t(i,null,{default:e(()=>[n("Other naive-ui built-in tags.")]),_:1})]),demo:e(()=>[a("div",W,[t(r,{href:"https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",target:"_blank"},{default:e(()=>[n(" Hear the Wind Sing ")]),_:1}),t(p,null,{default:e(()=>[n("h1 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(A,null,{default:e(()=>[n("h2 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(f,null,{default:e(()=>[n("h3 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(_,null,{default:e(()=>[n("h4 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(c,null,{default:e(()=>[n("h5 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(g,null,{default:e(()=>[n("h6 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(b,null,{default:e(()=>[t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1})]),_:1}),t(k),t(v,null,{default:e(()=>[t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1})]),_:1}),t(b,{"align-text":""},{default:e(()=>[t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1})]),_:1}),t(k),t(v,{"align-text":""},{default:e(()=>[t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1})]),_:1}),t(m,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(m,{"align-text":""},{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1})])]),_:1})}const N=x(I,[["render",V],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/tags.demo.vue"]]),O={},q={class:"demo-card__view"};function j(y,E){const i=o("n-text"),r=o("n-p"),p=o("component-demo");return d(),u(p,{"demo-file-name":"text.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/text.demo.vue",title:"Text","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-text%20type%3D%22info%22%3E%0A%20%20%20%20Info%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20type%3D%22success%22%3E%0A%20%20%20%20Success%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20type%3D%22warning%22%3E%0A%20%20%20%20Warning%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20type%3D%22error%22%3E%0A%20%20%20%20Error%0A%20%20%3C%2Fn-text%3E%20%3Cn-text%20strong%3E%0A%20%20%20%20Strong%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20italic%3E%0A%20%20%20%20Italic%0A%20%20%3C%2Fn-text%3E%20%3Cn-text%20underline%3E%0A%20%20%20%20Underline%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20delete%3E%0A%20%20%20%20Delete%0A%20%20%3C%2Fn-text%3E%20%3Cn-text%20code%3E%0A%20%20%20%20Code%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20code%20delete%3E%0A%20%20%20%20Code%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20depth%3D%221%22%3E%0A%20%20%20%20Primary%20Depth%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20depth%3D%222%22%3E%0A%20%20%20%20Secondary%20Depth%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20depth%3D%223%22%3E%0A%20%20%20%20Tertiary%20Depth%0A%20%20%3C%2Fn-text%3E%0A%20%20%3Cn-text%20tag%3D%22div%22%3E%0A%20%20%20%20As%20Div%0A%20%20%3C%2Fn-text%3E%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[n(" Text ")]),content:e(()=>[t(r,null,{default:e(()=>[n("Use different "),t(i,{code:""},{default:e(()=>[n("types")]),_:1}),n(" to add some variety to your styles.")]),_:1})]),demo:e(()=>[a("div",q,[t(i,{type:"info"},{default:e(()=>[n(" Info ")]),_:1}),t(i,{type:"success"},{default:e(()=>[n(" Success ")]),_:1}),t(i,{type:"warning"},{default:e(()=>[n(" Warning ")]),_:1}),t(i,{type:"error"},{default:e(()=>[n(" Error ")]),_:1}),n(),t(i,{strong:""},{default:e(()=>[n(" Strong ")]),_:1}),t(i,{italic:""},{default:e(()=>[n(" Italic ")]),_:1}),n(),t(i,{underline:""},{default:e(()=>[n(" Underline ")]),_:1}),t(i,{delete:""},{default:e(()=>[n(" Delete ")]),_:1}),n(),t(i,{code:""},{default:e(()=>[n(" Code ")]),_:1}),t(i,{code:"",delete:""},{default:e(()=>[n(" Code ")]),_:1}),t(i,{depth:"1"},{default:e(()=>[n(" Primary Depth ")]),_:1}),t(i,{depth:"2"},{default:e(()=>[n(" Secondary Depth ")]),_:1}),t(i,{depth:"3"},{default:e(()=>[n(" Tertiary Depth ")]),_:1}),t(i,{tag:"div"},{default:e(()=>[n(" As Div ")]),_:1})])]),_:1})}const L=x(O,[["render",j],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/text.demo.vue"]]),$={},R={class:"demo-card__view"};function Y(y,E){const i=o("n-text"),r=o("n-p"),p=o("n-a"),A=o("router-link"),f=o("component-demo");return d(),u(f,{"demo-file-name":"router-link.vue","relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/router-link.demo.vue",title:"Use n-a with router link","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Crouter-link%20to%3D%22%2F%22%20%23%3D%22%7B%20navigate%2C%20href%20%7D%22%20custom%3E%0A%20%20%20%20%3Cn-a%20%3Ahref%3D%22href%22%20%40click%3D%22navigate%22%3E%0A%20%20%20%20%20%20Back%20Home%0A%20%20%20%20%3C%2Fn-a%3E%0A%20%20%3C%2Frouter-link%3E%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[n(" Use n-a with router link ")]),content:e(()=>[t(r,null,{default:e(()=>[n("You can use "),t(i,{code:""},{default:e(()=>[n("<n-a />")]),_:1}),n(" for links and routes.")]),_:1}),t(r,null,{default:e(()=>[n("If you think the following method is a little verbose for routes, you can always make it a new component.")]),_:1})]),demo:e(()=>[a("div",R,[t(A,{to:"/",custom:""},{default:e(({navigate:_,href:c})=>[t(p,{href:c,onClick:_},{default:e(()=>[n(" Back Home ")]),_:2},1032,["href","onClick"])]),_:1})])]),_:1})}const Q=x($,[["render",Y],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/router-link.demo.vue"]]),X={components:{headerVueDemo:P,tagsVueDemo:N,textVueDemo:L,routerLinkVueDemo:Q},setup(){const y=H(),E=z(()=>!y.value),i=y;return{showAnchor:E,displayMode:J(),wrapperStyle:D(()=>i.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:D(()=>E.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/index.demo-entry.md"}}},Z={class:"md-table-wrapper"},e2=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),t2=a("td",null,"type",-1),n2=a("td",null,"Typography type.",-1),a2=a("td",null,"strong",-1),o2=a("td",null,"Strong.",-1),l2=a("td",null,"italic",-1),i2=a("td",null,"Italic.",-1),r2=a("td",null,"underline",-1),d2=a("td",null,"Underline.",-1),s2=a("td",null,"delete",-1),u2=a("td",null,"code",-1),p2=a("td",null,"depth",-1),h2=a("td",null,"Text depth (shade of text).",-1),_2=a("td",null,"tag",-1),c2={class:"md-table-wrapper"},f2=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),m2=a("td",null,"depth",-1),A2=a("td",null,"Text depth (shade of text).",-1),y2={class:"md-table-wrapper"},E2=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),g2=a("td",null,"align-text",-1),C2=a("td",null,"Text alignment.",-1),x2=a("td",null,"type",-1),b2=a("td",null,"Text color style.",-1),k2=a("td",null,"prefix",-1),v2=a("td",null,"Show a bar in front of the heading.",-1),D2={class:"md-table-wrapper"},F2=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),w2=a("td",null,"align-text",-1),T2=a("td",null,"Text alignment.",-1),H2={class:"md-table-wrapper"},z2=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),J2=a("td",null,"align-text",-1),S2=a("td",null,"Text alignment.",-1),B2={class:"md-table-wrapper"},U2=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Parameters"),a("th",null,"Description")])],-1),M2=a("td",null,"default",-1),G2=a("td",null,"The content of typography.",-1),K2={key:0,style:{width:"192px"}};function P2(y,E,i,r,p,A){const f=o("edit-on-github-header"),_=o("n-p"),c=o("n-h2"),g=o("headerVueDemo"),s=o("tagsVueDemo"),b=o("textVueDemo"),k=o("routerLinkVueDemo"),v=o("component-demos"),m=o("n-h3"),l=o("n-text"),C=o("n-table"),h=o("n-anchor-link"),T=o("n-anchor");return d(),F("div",{class:"doc",style:w(r.wrapperStyle)},[a("div",{style:w(r.contentStyle)},[t(f,{"relative-url":"D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/index.demo-entry.md",text:"Typography"}),t(_,null,{default:e(()=>[n("Naive UI provides some HTML text styling.")]),_:1}),t(_,null,{default:e(()=>[n("Typography is an art.")]),_:1}),t(c,{id:"Demos"},{default:e(()=>[n("Demos")]),_:1}),t(v,{span:2},{default:e(()=>[t(g),t(s),t(b),t(k)]),_:1}),t(c,{id:"API"},{default:e(()=>[n("API")]),_:1}),t(m,{id:"Text-Props"},{default:e(()=>[n("Text Props")]),_:1}),a("div",Z,[t(C,{"single-column":"",class:"md-table"},{default:e(()=>[e2,a("tbody",null,[a("tr",null,[t2,a("td",null,[t(l,{code:""},{default:e(()=>[n("'default' | 'success' | 'info' | 'warning' | 'error'")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("'default'")]),_:1})]),n2]),a("tr",null,[a2,a("td",null,[t(l,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("false")]),_:1})]),o2]),a("tr",null,[l2,a("td",null,[t(l,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("false")]),_:1})]),i2]),a("tr",null,[r2,a("td",null,[t(l,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("false")]),_:1})]),d2]),a("tr",null,[s2,a("td",null,[t(l,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("false")]),_:1})]),a("td",null,[n("Use the "),t(l,{code:""},{default:e(()=>[n("del")]),_:1}),n(" tag and strikethrough style.")])]),a("tr",null,[u2,a("td",null,[t(l,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("false")]),_:1})]),a("td",null,[n("Use the "),t(l,{code:""},{default:e(()=>[n("code")]),_:1}),n(" tag and style.")])]),a("tr",null,[p2,a("td",null,[t(l,{code:""},{default:e(()=>[n("1 | 2 | 3 | '1' | '2' | '3'")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("undefined")]),_:1})]),h2]),a("tr",null,[_2,a("td",null,[t(l,{code:""},{default:e(()=>[n("string")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("undefined")]),_:1})]),a("td",null,[n("Tag to use. "),t(l,{code:""},{default:e(()=>[n("code")]),_:1}),n(" or "),t(l,{code:""},{default:e(()=>[n("delete")]),_:1}),n(" properties will override this.")])])])]),_:1})]),t(m,{id:"P-Props"},{default:e(()=>[n("P Props")]),_:1}),a("div",c2,[t(C,{"single-column":"",class:"md-table"},{default:e(()=>[f2,a("tbody",null,[a("tr",null,[m2,a("td",null,[t(l,{code:""},{default:e(()=>[n("1 | 2 | 3 | '1' | '2' | '3'")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("undefined")]),_:1})]),A2])])]),_:1})]),t(m,{id:"H1,-H2,-H3,-H4,-H5,-H6-Props"},{default:e(()=>[n("H1, H2, H3, H4, H5, H6 Props")]),_:1}),a("div",y2,[t(C,{"single-column":"",class:"md-table"},{default:e(()=>[E2,a("tbody",null,[a("tr",null,[g2,a("td",null,[t(l,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("false")]),_:1})]),C2]),a("tr",null,[x2,a("td",null,[t(l,{code:""},{default:e(()=>[n("'default' | 'success' | 'info' | 'warning' | 'error'")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("'default'")]),_:1})]),b2]),a("tr",null,[k2,a("td",null,[t(l,{code:""},{default:e(()=>[n("'bar'")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("undefined")]),_:1})]),v2])])]),_:1})]),t(m,{id:"Ul,-Ol-Props"},{default:e(()=>[n("Ul, Ol Props")]),_:1}),a("div",D2,[t(C,{"single-column":"",class:"md-table"},{default:e(()=>[F2,a("tbody",null,[a("tr",null,[w2,a("td",null,[t(l,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("false")]),_:1})]),T2])])]),_:1})]),t(m,{id:"Blockquote-Props"},{default:e(()=>[n("Blockquote Props")]),_:1}),a("div",H2,[t(C,{"single-column":"",class:"md-table"},{default:e(()=>[z2,a("tbody",null,[a("tr",null,[J2,a("td",null,[t(l,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(l,{code:""},{default:e(()=>[n("false")]),_:1})]),S2])])]),_:1})]),t(m,{id:"All-Typography-Components-Slots"},{default:e(()=>[n("All Typography Components Slots")]),_:1}),a("div",B2,[t(C,{"single-column":"",class:"md-table"},{default:e(()=>[U2,a("tbody",null,[a("tr",null,[M2,a("td",null,[t(l,{code:""},{default:e(()=>[n("()")]),_:1})]),G2])])]),_:1})])],4),r.showAnchor?(d(),F("div",K2,[t(T,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(r.displayMode,d(),u(h,{key:0,title:"Header",href:"#header.vue"})),(r.displayMode,d(),u(h,{key:1,title:"Tags",href:"#tags.vue"})),(r.displayMode,d(),u(h,{key:2,title:"Text",href:"#text.vue"})),(r.displayMode,d(),u(h,{key:3,title:"Use n-a with router link",href:"#router-link.vue"})),(r.displayMode,d(),u(h,{key:4,title:"API",href:"#API"})),(r.displayMode,d(),u(h,{key:5,title:"Text Props",href:"#Text-Props"})),(r.displayMode,d(),u(h,{key:6,title:"P Props",href:"#P-Props"})),(r.displayMode,d(),u(h,{key:7,title:"H1, H2, H3, H4, H5, H6 Props",href:"#H1,-H2,-H3,-H4,-H5,-H6-Props"})),(r.displayMode,d(),u(h,{key:8,title:"Ul, Ol Props",href:"#Ul,-Ol-Props"})),(r.displayMode,d(),u(h,{key:9,title:"Blockquote Props",href:"#Blockquote-Props"})),(r.displayMode,d(),u(h,{key:10,title:"All Typography Components Slots",href:"#All-Typography-Components-Slots"}))]),_:1})])):S("v-if",!0)],4)}const W2=x(X,[["render",P2],["__file","D:/Users/编程工作台/项目工作台/study-notes/4.学习工程化/0.学习turborepo/0.naive-ui-main/src/typography/demos/enUS/index.demo-entry.md"]]);export{W2 as default};

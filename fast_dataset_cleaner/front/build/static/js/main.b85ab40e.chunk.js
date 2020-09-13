(this["webpackJsonpfast-dataset-cleaner"]=this["webpackJsonpfast-dataset-cleaner"]||[]).push([[0],{103:function(e,t){},138:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(66),c=n.n(i),s=(n(75),n(2)),l=n(28),u=n.n(l),d=n(67),g=n.n(d),f=function(e){return{isNightMode:e,unit:8,color:{FAST_DATASET_CLEANER:"#00155A",FAST_DATASET_CLEANER_LIGHT:"#2457ff",page:e?"#333":"#fff",reversePage:e?"#fff":"#333",pageNight:"#333",pageDay:"#fff",VALID:"#3caf40",NOTVALID:"#e45247",banner:"#000e3e",bannerText:"#fff",bannerSeparator:"#ddd",overlay:"#000"},speed:{fast:.3,veryFast:.15,ultraFast:0},fontSize:{small:10,medium:14,large:16,xlarge:20},fontFamily:"Ubuntu",opacity:{light:.2,medium:.5,dark:.8}}},m=(n(138),n(1)),h=n(14),p=n(15),v=["ArrowLeft"],b=["ArrowRight"],E=["Enter"],S=[" ","m"],O=["g","i"],w=function(e){return Object(r.useEffect)((function(){return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[e])},y=function(e,t,n,a){var r=e.key;v.includes(r)?t():b.includes(r)?n():E.includes(r)&&a()},x=function(e){return localStorage.getItem(e)},k=function(e,t){return localStorage.setItem(e,t.trim())},j=function(){return x("annotator")},C=["2","4","6","8"],A=function(){return parseInt(x("imagesPerPage")||"8")},I=function(e){return k("imagesPerPage",e)},_=function(){return x("sha_pass")},P=function(e){return k("sha_pass",e)},N=function(){return x("datasetPath")},M=function(e){return k("datasetPath",e)},F=function(){return x("imagesFolder")},L=function(e){return k("imagesFolder",e)},D=function(){return x("masksFolder")},T=function(e){return k("masksFolder",e)},H=["true","false"],R=function(){return x("useMasks")},V=function(e){return k("useMasks",e)},B=function(){return x("idColumnName")},z=function(e){return k("idColumnName",e)},G=function(){return x("imagesExtension")},U=function(e){return k("imagesExtension",e)},W=function(){return x("masksExtension")},X=function(e){return k("masksExtension",e)},K=function(){return"true"===x("annotationUltraFast")},J=n(68),Y=n.n(J);!function(e){e.PASSWORD="sha",e.IMAGES_PER_PAGE="imgPerPage",e.CSV_PATH="csv",e.IMAGES_FOLDER="imagesFolder",e.MASKS_FOLDER="masksFolder",e.USE_MASKS="useMasks",e.ID_COLUMN="idColumn",e.IMAGES_EXTENSION="imgExt",e.MASKS_EXTENSION="maskExt"}(a||(a={}));var $=function(){var e=new URL(window.location.href).origin,t=function(){var e=[],t=_(),n=N(),r=A(),o=F(),i=D(),c=R(),s=B(),l=G(),u=W();return n&&e.push("".concat(a.CSV_PATH,"=").concat(n)),r&&e.push("".concat(a.IMAGES_PER_PAGE,"=").concat(r)),s&&e.push("".concat(a.ID_COLUMN,"=").concat(s)),o&&e.push("".concat(a.IMAGES_FOLDER,"=").concat(o)),c&&e.push("".concat(a.USE_MASKS,"=").concat(c)),"true"===(null===c||void 0===c?void 0:c.toLowerCase())&&i&&e.push("".concat(a.MASKS_FOLDER,"=").concat(i)),l&&e.push("".concat(a.IMAGES_EXTENSION,"=").concat(l)),u&&e.push("".concat(a.MASKS_EXTENSION,"=").concat(u)),t&&e.push("".concat(a.PASSWORD,"=").concat(t)),e===[]?"":"?"+e.join("&")}();return"".concat(e).concat(t)};function q(){window.history.pushState(null,"Fast Dataset Cleaner",$())}var Q=function(e,t,n){var a=e.searchParams.get(t);a&&n(a)};var Z=Object(m.withStyles)((function(e){var t=e.unit,n=e.fontSize,a=e.fontFamily,r=e.color,o=e.speed,i=e.isNightMode;return{button:{width:"100%",fontFamily:a,fontSize:n.large,fontWeight:"bold",padding:"".concat(t,"px ").concat(1.5*t,"px"),borderRadius:2*t,background:i?r.pageNight:r.pageDay,color:i?r.pageDay:r.pageNight,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxHeight:n.large+.25*t+3*t,cursor:"pointer",transition:"background ".concat(o.fast,"s ease-in-out, color ").concat(o.fast,"s ease-in-out")},bannerElement:{transition:"transform ".concat(o.fast," ease-in-out, opacity ").concat(o.fast," ease-in-out")},bannerHidden:{transform:"scale(0.9)",opacity:0}}}))((function(e){var t=e.title,n=e.isHidden,a=e.handleClick,r=e.css,i=e.styles;return o.a.createElement("div",r(i.bannerElement,n&&i.bannerHidden),o.a.createElement("button",Object.assign({type:"button"},r(i.button),{onClick:a}),t))}));var ee=Object(m.withStyles)((function(e){var t=e.unit,n=e.fontSize;return{displayedText:{color:e.color.bannerText,textAlign:"left",fontSize:n.medium,marginBlockEnd:1.5*t,textOverflow:"ellipsis",overflow:"hidden","line-break":"anywhere"}}}))((function(e){var t=e.text,n=e.css,a=e.styles;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("h3",n(a.displayedText),t))}));var te=Object(m.withStyles)((function(e){var t=e.unit,n=e.fontSize,a=e.fontFamily,r=e.color,o=e.speed;return{titleInput:{color:r.bannerText,textAlign:"left",fontSize:n.large,marginBlockEnd:1.5*t,textOverflow:"ellipsis",overflow:"hidden",maxHeight:n.large+.25*t},inputArea:{width:"calc(100% - ".concat(4*t,"px)"),fontSize:n.large,padding:"".concat(.5*t,"px ").concat(1.5*t,"px"),borderRadius:1.5*t,background:r.page,color:r.reversePage,fontFamily:a,transition:"background ".concat(o.fast,"s ease-in-out,\n                    color ").concat(o.fast,"s ease-in-out,\n                    box-shadow ").concat(o.fast,"s ease-in-out"),":focus":{boxShadow:"0 0 ".concat(t,"px 0 ").concat(r.bannerText)}},bannerElement:{margin:"".concat(t,"px 0"),transition:"transform ".concat(o.fast," ease-in-out, opacity ").concat(o.fast," ease-in-out")},bannerHidden:{transform:"scale(0.9)",opacity:0}}}))((function(e){var t=e.title,n=e.isHidden,a=e.value,i=e.displayInputValue,c=e.onChange,l=e.onBlur,u=e.css,d=e.styles,g=Object(r.useState)(null===a?"":a),f=Object(s.a)(g,2),m=f[0],h=f[1];return o.a.createElement("div",u(d.bannerElement,n&&d.bannerHidden),o.a.createElement("label",null,t&&o.a.createElement("h3",u(d.titleInput),t),i&&o.a.createElement(ee,{text:m}),o.a.createElement("input",Object.assign({type:"text",value:a||"",onChange:function(e){var t=e.target.value;h(t),c&&c(e)},onBlur:l},u(d.inputArea)))))})),ne=Object(m.withStyles)((function(e){var t=e.unit,n=e.color;return{separator:{width:"100%",margin:"".concat(3*t,"px 0"),borderRadius:3*t,height:.25*t,background:n.bannerSeparator},thinSeparator:{height:.125*t,margin:"".concat(2.5*t,"px 0 ").concat(2*t,"px 0")}}}))((function(e){var t=e.thin,n=e.css,a=e.styles;return o.a.createElement("div",n(a.separator,t&&a.thinSeparator))}));var ae=Object(m.withStyles)((function(e){var t=e.unit,n=e.fontSize,a=e.color,r=e.speed;return{titleSection:{color:a.bannerText,textAlign:"center",fontSize:n.xlarge,marginBlockEnd:1.5*t,marginBlockStart:.5*t,textOverflow:"ellipsis",overflow:"hidden"},bannerElement:{margin:"0 0 ".concat(t,"px 0"),transition:"transform ".concat(r.fast," ease-in-out, opacity ").concat(r.fast," ease-in-out")},bannerHidden:{transform:"scale(0.9)",opacity:0}}}))((function(e){var t=e.title,n=e.isHidden,a=e.children,r=e.css,i=e.styles;return o.a.createElement("div",r(i.bannerElement,n&&i.bannerHidden),t&&o.a.createElement("h2",r(i.titleSection),t),a,o.a.createElement(ne,{thin:!0}))}));var re=Object(m.withStyles)((function(e){var t=e.unit,n=e.fontSize,a=e.fontFamily,r=e.color,o=e.speed;return{titleInput:{color:r.bannerText,textAlign:"left",fontSize:n.large,marginBlockEnd:1.5*t,textOverflow:"ellipsis",overflow:"hidden",maxHeight:n.large+.25*t},select:{width:"100%",fontSize:n.large,height:n.large+2*t,padding:"".concat(.5*t,"px ").concat(1.5*t,"px"),borderRadius:1.5*t,background:r.page,color:r.reversePage,fontFamily:a,transition:"background ".concat(o.fast,"s ease-in-out,\n                    color ").concat(o.fast,"s ease-in-out,\n                    box-shadow ").concat(o.fast,"s ease-in-out"),":focus":{boxShadow:"0 0 ".concat(t,"px 0 ").concat(r.bannerText)}},bannerElement:{margin:"".concat(t,"px 0"),transition:"transform ".concat(o.fast," ease-in-out, opacity ").concat(o.fast," ease-in-out")},bannerHidden:{transform:"scale(0.9)",opacity:0}}}))((function(e){var t=e.title,n=e.name,a=e.isHidden,r=e.value,i=e.options,c=e.onChange,s=e.css,l=e.styles;return o.a.createElement("div",s(l.bannerElement,a&&l.bannerHidden),o.a.createElement("label",null,o.a.createElement("h3",s(l.titleInput),t),o.a.createElement("select",Object.assign({name:n,value:r||"",onChange:c},s(l.select)),i.map((function(e){return o.a.createElement("option",{key:e,value:e},e)})))))})),oe=Object(m.withStyles)((function(e){var t=e.fontSize,n=e.color,a=e.speed;return{switch:{position:"relative",display:"inline-block",width:56,height:32,backgroundColor:n.bannerSeparator,borderRadius:32,margin:"".concat(4,"px ").concat(12,"px"),transition:"background-color ".concat(a.fast,"s ease-in-out")},switchChecked:{backgroundColor:n.FAST_DATASET_CLEANER_LIGHT},switchInput:{opacity:0,width:0,height:0},roundSlider:{position:"absolute",top:4,right:0,transition:"transform ".concat(a.fast,"s ease-in-out"),borderRadius:32,content:"",height:24,width:24,left:4,bottom:4,backgroundColor:"white"},roundSliderChecked:{transform:"translateX(".concat(24,"px)")},switchArea:{cursor:"pointer"},switchLegend:{position:"relative",display:"inline-block",fontSize:t.medium,top:6,margin:0,color:n.pageDay},bannerHidden:{transform:"scale(0.9)",opacity:0}}}))((function(e){var t=e.value,n=e.stateFalse,a=e.stateTrue,i=e.isHidden,c=e.handleClick,l=e.css,u=e.styles,d=Object(r.useState)(t),g=Object(s.a)(d,2),f=g[0],m=g[1];return o.a.createElement("label",l(u.switchArea,i&&u.bannerHidden),o.a.createElement("h4",l(u.switchLegend),n),o.a.createElement("div",l(u.switch,f&&u.switchChecked),o.a.createElement("input",Object.assign({type:"checkbox",onClick:function(){var e=!f;m(e),c(e)}},l(u.switchInput))),o.a.createElement("span",l(u.roundSlider,f&&u.roundSliderChecked))),o.a.createElement("h4",l(u.switchLegend),a))})),ie=function(){return window.location.reload(!1)};var ce=Object(m.withStyles)((function(e){var t=e.unit,n=e.speed;return{bannerContent:{width:0,margin:24,marginTop:19*t,zIndex:2,overflowY:"auto",maxHeight:"85vh",transition:"width ".concat(n.fast,"s ease-in-out")},bannerOpen:{width:"calc(100% - 2 * ".concat(24,"px)")}}}))((function(e){var t=e.isClicked,n=e.css,i=e.styles,c=new URL(window.location.href).searchParams,l=c.get(a.CSV_PATH),u=c.get(a.IMAGES_PER_PAGE),d=c.get(a.PASSWORD),g=c.get(a.IMAGES_FOLDER),f=c.get(a.MASKS_FOLDER),m=c.get(a.USE_MASKS),h=c.get(a.ID_COLUMN),p=c.get(a.IMAGES_EXTENSION),v=c.get(a.MASKS_EXTENSION),b=Object(r.useState)(j()||""),E=Object(s.a)(b,2),S=E[0],O=E[1],w=Object(r.useState)(l||N()||""),y=Object(s.a)(w,2),x=y[0],J=y[1],Y=Object(r.useState)(u||A()||8),$=Object(s.a)(Y,2),Q=$[0],ce=$[1],se=Object(r.useState)(d||_()||""),le=Object(s.a)(se,2),ue=le[0],de=le[1],ge=Object(r.useState)(g||F()||""),fe=Object(s.a)(ge,2),me=fe[0],he=fe[1],pe=Object(r.useState)(f||D()||""),ve=Object(s.a)(pe,2),be=ve[0],Ee=ve[1],Se=Object(r.useState)(m||R()||"false"),Oe=Object(s.a)(Se,2),we=Oe[0],ye=Oe[1],xe=Object(r.useState)(h||B()||"id"),ke=Object(s.a)(xe,2),je=ke[0],Ce=ke[1],Ae=Object(r.useState)(p||G()||""),Ie=Object(s.a)(Ae,2),_e=Ie[0],Pe=Ie[1],Ne=Object(r.useState)(v||W()||""),Me=Object(s.a)(Ne,2),Fe=Me[0],Le=Me[1],De=Object(r.useState)(K()||!1),Te=Object(s.a)(De,2),He=Te[0],Re=Te[1];Object(r.useEffect)((function(){B()||z("id")}),[]);var Ve=Object(r.useCallback)((function(e){return o.a.createElement(te,Object.assign({isHidden:!t},e))}),[t]),Be=Object(r.useCallback)((function(e){return o.a.createElement(re,Object.assign({isHidden:!t},e))}),[t]),ze=Object(r.useCallback)((function(e){return o.a.createElement(oe,Object.assign({isHidden:!t},e))}),[t]),Ge=Object(r.useCallback)((function(e){return o.a.createElement(ae,Object.assign({isHidden:!t},e))}),[t]),Ue=Object(r.useCallback)((function(e){return o.a.createElement(Z,Object.assign({isHidden:!t},e))}),[t]);return o.a.createElement("div",n(i.bannerContent,t&&i.bannerOpen),t&&o.a.createElement(ne,null),o.a.createElement(Ge,{title:"Password"},o.a.createElement(Ve,{value:ue,onChange:function(e){var t=e.target.value;de(t),P(t),q()}})),o.a.createElement(Ge,{title:"About the CSV"},o.a.createElement(Ve,{displayInputValue:!0,title:"CSV path",value:x,onChange:function(e){var t=e.target.value;M(t),J(t),q()}}),o.a.createElement(Ve,{title:"Name of the id column",value:je,onChange:function(e){var t=e.target.value;Ce(t),z(t),q()}})),o.a.createElement(Ge,{title:"Images"},o.a.createElement(ee,{text:"".concat(me||"/path/to/folder/","{id}").concat(_e)}),o.a.createElement(Ve,{title:"Images folder",value:me,onChange:function(e){var t=e.target.value;L(t),he(t),q()}}),o.a.createElement(Ve,{title:"Images extension",value:_e,onChange:function(e){var t=e.target.value;Pe(t),U(t),q()}})),o.a.createElement(Ge,{title:"Masks"},o.a.createElement(Be,{title:"Use masks",name:"use_masks",value:we,options:H,onChange:function(e){var t=e.target.value;ye(t),V(t),q()}}),"true"===we&&o.a.createElement(o.a.Fragment,null,o.a.createElement(ee,{text:"".concat(be||"/path/to/folder/","{id}").concat(Fe)}),o.a.createElement(Ve,{title:"Masks folder",value:be,onChange:function(e){var t=e.target.value;T(t),Ee(t),q()}}),o.a.createElement(Ve,{title:"Masks extension",value:Fe,onChange:function(e){var t=e.target.value;Le(t),X(t),q()}}))),o.a.createElement(Ge,{title:"Annotation"},o.a.createElement(Ve,{title:"Annotator",value:S,onChange:function(e){var t=e.target.value;!function(e){k("annotator",e)}(t),O(t)}}),o.a.createElement(Be,{title:"Images per page",name:"img_per_page",value:Q.toString(),options:C,onChange:function(e){var t=e.target.value;I(t),ce(t),q()}}),o.a.createElement(ze,{value:He,stateFalse:"Fast mode",stateTrue:"Ludicrous mode",handleClick:function(e){Re(e),function(e){k("annotationUltraFast","".concat(e))}(e)}})),o.a.createElement(Ue,{title:"Get images",handleClick:ie}))}));var se=Object(m.withStyles)((function(e){var t=e.opacity,n=e.color,a=e.speed;return{overlay:{width:"100vw",height:"100vh",position:"fixed",top:0,left:0,background:n.overlay,opacity:t.dark,transition:"opacity ".concat(a.fast,"s ease-in-out"),":hover":{cursor:"pointer"}},overlayHidden:{opacity:0}}}))((function(e){var t=e.zIndex,n=e.isVisible,a=e.handleClick,r=e.css,i=e.styles;return o.a.createElement("div",Object.assign({onClick:a,style:{zIndex:t||1}},r(n?i.overlay:i.overlayHidden)))})),le=function(){},ue=["input","select","button","textarea"];var de=Object(m.withStyles)((function(e){var t=e.unit,n=e.color,a=e.speed;return{banner:{width:88,height:"100vh",background:n.banner,boxShadow:"0px 0px 20px 0px #000",position:"fixed",top:0,left:0,zIndex:2,cursor:"pointer",transition:"width ".concat(a.fast,"s ease-in-out")},bannerOpen:{width:336,cursor:"default"},logoClicked:{transform:"rotate(720deg)",height:96,left:3*t,top:3*t},logoNotClicked:{transform:"rotate(0deg)"},logo:{position:"fixed",top:2*t,left:t,height:64,cursor:"pointer",transition:"transform ".concat(a.fast,"s ease-in-out, height ").concat(a.fast,"s ease-in-out, left ").concat(a.fast,"s ease-in-out, top ").concat(a.fast,"s ease-in-out")},nightButton:{position:"fixed",left:6*t+96,top:96-t,width:"calc(".concat(240-6*t-5*t,"px)"),padding:"0 ".concat(t,"px"),opacity:1,transition:"opacity ".concat(.5*a.fast,"s ease-in-out, width ").concat(a.fast-.05,"s ease-in-out 0.05s, left ").concat(a.fast,"s ease-in-out")},nightButtonHidden:{left:4*t+64,width:"calc(".concat(24-4*t-5*t,"px * 0.75)"),opacity:0}}}))((function(e){var t=e.isBannerOpen,n=e.handleBanner,a=e.nightMode,i=e.changeNightMode,c=e.css,s=e.styles;Object(r.useEffect)((function(){var e=function(e){var a=e.key,r=document.activeElement&&-1===ue.indexOf(document.activeElement.tagName.toLowerCase());r&&S.includes(a)?n(!t):r&&t&&O.includes(a)&&ie()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[t,n]);var l=function(){n(!t)},u=a?"Night mode":"Day mode";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",Object.assign({onClick:t?le:l},c(s.banner,t&&s.bannerOpen)),o.a.createElement("img",Object.assign({src:Y.a,alt:"Logo",onClick:l},c(s.logo,t?s.logoClicked:s.logoNotClicked))),o.a.createElement("div",c(s.nightButton,!t&&s.nightButtonHidden),o.a.createElement(Z,{title:u,isHidden:!t,handleClick:i})),o.a.createElement(ce,{isClicked:t})),o.a.createElement(se,{isVisible:t,handleClick:function(){n(!1)}}))}));var ge="calc(100vh / ".concat(A()/2," - ").concat(16,"px)"),fe=Object(m.withStyles)((function(e){var t=e.unit,n=e.color,a=e.speed,r=e.fontSize;return{card:{maxHeight:"calc(100vh / ".concat(A()/2,")"),border:"1px solid #ccc",borderRadius:3*t,margin:"".concat(.5*t,"px ").concat(1*t,"px"),height:"calc(100% - 2 * ".concat(.75*t,"px)"),minHeight:"calc((100vh - ".concat(4*t+2*t,"px) / ").concat(A()/2," - ").concat(1*t,"px)"),transition:"background ".concat(a.fast,"s ease,\n            box-shadow ").concat(a.fast,"s ease,\n            transform ").concat(a.fast,"s ease,\n            opacity ").concat(a.fast,"s ease"),overflow:"hidden",cursor:"pointer",":hover":{boxShadow:"0 0 ".concat(2.5*t,"px 0 #000")}},cardUltraFast:{transition:"background ".concat(a.ultraFast,"s ease,\n            box-shadow ").concat(a.ultraFast,"s ease,\n            transform ").concat(a.ultraFast,"s ease,\n            opacity ").concat(a.ultraFast,"s ease")},cardValid:{background:n.VALID},cardNotValid:{background:n.NOTVALID},cardNotValidUltraFast:{opacity:.05},annotated:{marginTop:t,fontSize:r.large},cardAnnotated:{opacity:.5},idCard:{fontWeight:"bold",position:"absolute",width:5*t,borderRight:"1px solid #ccc",height:"100%",maxHeight:ge},id:{marginTop:1.5*t},image:{height:"100%",marginLeft:5*t,maxHeight:ge,maxWidth:"calc(100% - ".concat(5*t+2*t,"px)")}}}))((function(e){var t=e.isBannerOpen,n=e.sample,a=e.navigationDirection,i=e.fetchService,c=e.handleChangeValue,l=e.css,u=e.styles,d=n.id,g=n.value,f=n.sampleNumber,m=n.annotated,v=n.changing,b=n.name,E=Object(r.useState)(g),S=Object(s.a)(E,2),O=S[0],y=S[1],x=K();Object(r.useEffect)((function(){return y(g)}),[g]);var k=Object(r.useState)(!1),j=Object(s.a)(k,2),C=j[0],A=j[1];Object(r.useEffect)((function(){return A(!0),function(){return A(!1)}}),[]);var I=Object(r.useCallback)((function(){c(!O,f),y(!O)}),[O,f,c]),_=Object(r.useCallback)((function(e){var n=e.key;parseInt(n)!==d||t||I()}),[d,t,I]);w(_);var P={maxWidth:"45vw",width:"calc((100vw - ".concat(88,"px) / 2 - ").concat(80,"px)"),display:"inline-block"},N="translateX(".concat("left"===a?"-":"","100vw)"),M={from:Object(h.a)({opacity:0,transform:N},P),enter:Object(h.a)({opacity:1,transform:"translateX(0)"},P),leave:Object(h.a)({opacity:0,transform:N},P)},F=Object(p.b)(C,null,M);return o.a.createElement(o.a.Fragment,null,F.map((function(e){var t=e.item,n=e.key,a=e.props;return t&&o.a.createElement(p.a.div,{key:n,style:a},o.a.createElement("div",Object.assign({onClick:I,onKeyDown:_},l(u.card,x&&u.cardUltraFast,O?u.cardValid:u.cardNotValid,m&&!v&&u.cardAnnotated,x&&!O&&u.cardNotValidUltraFast)),o.a.createElement("div",l(u.idCard),o.a.createElement("div",l(u.id),d),m&&o.a.createElement("div",l(u.annotated),O?"\u2714":"\u2718")),o.a.createElement("img",Object.assign({src:i.getImage(b),alt:"source"},l(u.image)))))})))}));var me,he="calc(100vh - 2 * ".concat(8,"px)"),pe=Object(m.withStyles)((function(e){var t=e.color,n=e.unit,a=e.speed;return{mainColumn:{background:t.page,marginLeft:88+2*n,marginRight:0,paddingTop:n,paddingBottom:n,display:"flex",flexWrap:"wrap",height:he,transition:"background ".concat(a.fast,"s ease-in-out")}}}))((function(e){var t=e.isBannerOpen,n=e.images,a=e.fetchService,r=e.navigationDirection,i=e.handleChangeValue,c=e.css,s=e.styles;return o.a.createElement("div",c(s.mainColumn),n.map((function(e){return o.a.createElement(fe,{sample:e,isBannerOpen:t,handleChangeValue:i,navigationDirection:r,fetchService:a,key:e.name})})))})),ve=n(8),be=n.n(ve),Ee=n(19),Se=n(4),Oe=n(7),we="get-annotations",ye="get-image",xe="annotate",ke={accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},je=function(e){return{method:"POST",headers:ke,body:JSON.stringify(Object(h.a)({sha:_()},e))}};!function(e){e.ID="id",e.PASSWORD="sha"}(me||(me={}));var Ce=function(e){return e.map((function(e){return function(e){return{id:e.index%A()+1,sampleNumber:e.index,value:"string"==typeof e.value||e.value,name:e.id,annotated:"None"!==e.value,changing:!1}}(e)}))},Ae=function(){function e(t){var n=this;Object(Se.a)(this,e),this.api_address=void 0,this.page=void 0,this.images=void 0,this.totalImages=void 0,this.processedImages=void 0,this.samples=void 0,this.firstLoading=!0,this.getSample=function(){return n.samples||[]},this.getProgress=function(){return{currentPage:n.page,numberImagesPerPage:A(),totalImages:n.totalImages}},this.changePage=function(e,t){return e?(n.page=t,n.getAnnotations()):new Promise((function(){}))},this.incrPage=function(){var e=n.page*A()<=n.totalImages;return n.changePage(e,n.page+1)},this.decrPage=function(){var e=n.page>0;return n.changePage(e,n.page-1)},this.nextPage=function(){n.annotate();var e=n.page*A()<=n.totalImages;return n.changePage(e,n.page+1)},this.setValue=function(e,t){n.samples=n.samples&&n.samples.map((function(n){if(n.sampleNumber===t){var a=n;return n.value=e,n.changing=!n.changing,a}return n}))},this.get=function(){var e=Object(Ee.a)(be.a.mark((function e(t){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(n.api_address).concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.post=function(){var e=Object(Ee.a)(be.a.mark((function e(t,a){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(n.api_address).concat(t),je(a)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.getAnnotations=Object(Ee.a)(be.a.mark((function e(){var t,a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.firstLoading?-1:n.page*A(),a={first:t,offset:A(),sha:_(),csv_path:N(),images_folder:F(),masks_folder:D(),with_masks:"true"===R(),id_column_name:B(),image_ext:G(),mask_ext:W()},e.abrupt("return",n.post("".concat(we),a).then((function(e){e.error?alert(e.error):(n.firstLoading&&(n.firstLoading=!1),n.treatNewData(e))})));case 3:case"end":return e.stop()}}),e)}))),this.getImage=function(e){return"".concat(n.api_address).concat(ye,"?").concat(me.ID,"=").concat(e,"&").concat(me.PASSWORD,"=").concat(_())},this.annotate=Object(Ee.a)(be.a.mark((function e(){var t,a,r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={},null===(t=n.samples)||void 0===t||t.map((function(e){return a[e.name]=e.value})),r={annotator:j(),annotations:a,sha:_()},n.post(xe,r).then((function(e){}));case 4:case"end":return e.stop()}}),e)}))),this.api_address=t.api_address,this.page=t.page||0,this.images=t.images||[],this.totalImages=t.totalImages||0,this.processedImages=t.processedImages||0,this.samples=t.images&&Ce(t.images)||[]}return Object(Oe.a)(e,[{key:"treatNewData",value:function(e){var t=e.images,n=e.total,a=e.processed;if(t&&n&&void 0!==a){if(this.images=t,this.totalImages=n,this.processedImages=a,a<n)this.page=0!==t.length?t[0].index/A():this.page;else{var r=Math.ceil((n-1)/A());this.page=0!==t.length?this.page:r}this.samples=Ce(t)}}}]),e}(),Ie=n(69),_e=function(e,t,n){var a=e.deltaX,r=e.deltaY;!(1!==window.visualViewport.scale)&&Math.abs(a)>10&&Math.abs(r)<=5&&(a>0?n():t())},Pe=function(){return window.location.reload(!1)},Ne=function(e){var t=e.css,n=e.styles;return o.a.createElement("div",t(n.card),o.a.createElement("p",t(n.paragraph),"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2554\u2557\u2500\u2500\u2500\u2554\u2557\u2500\u2500\u2500\u2554\u2557\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2554\u2557\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2554\u255d\u255a\u2557\u2500\u2500\u2551\u2551\u2500\u2500\u2554\u255d\u255a\u2557\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2551\u2551\n\u2554\u2550\u2550\u2566\u2550\u2550\u2566\u2550\u2557\u2554\u2550\u2550\u2566\u2550\u2566\u2550\u2569\u2557\u2554\u256c\u2557\u2554\u2563\u2551\u2554\u2550\u2569\u2557\u2554\u256c\u2566\u2550\u2550\u2566\u2550\u2557\u2554\u2550\u2550\u2563\u2551\n\u2551\u2554\u2550\u2563\u2554\u2557\u2551\u2554\u2557\u2563\u2554\u2557\u2551\u2554\u2563\u2554\u2557\u2551\u2551\u2551\u2551\u2551\u2551\u2551\u2551\u2554\u2557\u2551\u2551\u2560\u2563\u2554\u2557\u2551\u2554\u2557\u2563\u2550\u2550\u256c\u255d\n\u2551\u255a\u2550\u2563\u255a\u255d\u2551\u2551\u2551\u2551\u255a\u255d\u2551\u2551\u2551\u2554\u2557\u2551\u255a\u2563\u255a\u255d\u2551\u255a\u2563\u2554\u2557\u2551\u255a\u2563\u2551\u255a\u255d\u2551\u2551\u2551\u2560\u2550\u2550\u2560\u2557\n\u255a\u2550\u2550\u2569\u2550\u2550\u2569\u255d\u255a\u2569\u2550\u2557\u2560\u255d\u255a\u255d\u255a\u2569\u2550\u2569\u2550\u2550\u2569\u2550\u2569\u255d\u255a\u2569\u2550\u2569\u2569\u2550\u2550\u2569\u255d\u255a\u2569\u2550\u2550\u2569\u255d\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2554\u2550\u255d\u2551\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u255a\u2550\u2550\u255d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),o.a.createElement("p",null,"\ud83c\udf8a\ud83c\udf89\ud83d\udc4f Congratulations! \ud83d\udc4f\ud83c\udf89\ud83c\udf8a \n\nYou reached the end of your dataset!\n\nRefresh the page to be sure that you annotated all the images.\n\n If after a refresh you get here, you're good to go on ! \ud83c\udfcb\ud83d\udcbb"),o.a.createElement("div",t(n.reloadButton),o.a.createElement(Z,{title:"Reload the page",isHidden:!1,handleClick:Pe})))};var Me=Object(m.withStyles)((function(e){var t=e.unit,n=e.color,a=e.fontSize;return{card:{display:"block",position:"fixed",top:0,left:0,color:n.reversePage,fontSize:a.xlarge,whiteSpace:"pre-line",margin:"auto",marginTop:"20vh",width:"100vw"},paragraph:{margin:"".concat(4*t,"px 0")},reloadButton:{width:"20%",margin:"auto"}}}))((function(e){var t=e.navigationDirection,n=Object(r.useState)(!1),a=Object(s.a)(n,2),i=a[0],c=a[1];Object(r.useEffect)((function(){return c(!0),function(){return c(!1)}}),[]);var l="translateX(".concat("left"===t?"-":"","100vw)"),u={from:{opacity:0,transform:l},enter:{opacity:1,transform:"translateX(0)"},leave:{opacity:0,transform:l}},d=Object(p.b)(i,null,u);return o.a.createElement(o.a.Fragment,null,d.map((function(t){var n=t.item,a=t.key,r=t.props;return n&&o.a.createElement(p.a.div,{key:a,style:r},o.a.createElement(Ne,e))})))}));var Fe=Object(m.withStyles)((function(e){var t=e.unit,n=e.fontSize,a=e.color,r=e.speed,o=e.isNightMode;return{title:{marginBlockStart:t,marginBlockEnd:t,textAlign:"right"},progress:{position:"absolute",right:0,top:0,fontSize:n.medium,paddingRight:2*t,fontWeight:"bold",borderRadius:2*t,background:o?a.pageNight:a.pageDay,color:o?a.pageDay:a.pageNight,transition:"background ".concat(r.fast,"s ease-in-out, color ").concat(r.fast,"s ease-in-out")},bannerElement:{transition:"transform ".concat(r.fast," ease-in-out, opacity ").concat(r.fast," ease-in-out")},bannerHidden:{transform:"scale(0.9)",opacity:0},arrow:{display:"inline-block",margin:"".concat(2*t,"px ").concat(.25*t,"px"),cursor:"pointer"},navigationArrows:{position:"absolute",display:"inline-block",top:4.5*t}}}))((function(e){var t=e.progress,n=e.handlePressLeft,a=e.handlePressRight,r=e.css,i=e.styles,c=t.currentPage,s=t.numberImagesPerPage,l=t.totalImages,u=l>0?c*s+1:0,d=Math.min((c+1)*s,l),g=(c*s*100/l).toPrecision(4);return o.a.createElement("div",r(i.progress),o.a.createElement("h3",r(i.title),u,"-",d," / ",l),o.a.createElement("h3",r(i.title),"(",g,"%)"),o.a.createElement("h3",r(i.navigationArrows),c>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",Object.assign({onClick:n},r(i.arrow)),"\u2b05"),o.a.createElement("div",r(i.arrow),"|")),o.a.createElement("div",Object.assign({onClick:a},r(i.arrow)),"\u2b95")))})),Le=new Ae({api_address:"".concat(window.location.origin,"/api/")}),De=function(){};var Te=function(e){var t=e.nightMode,n=e.changeNightMode,i=Object(r.useState)(!j()||!N()||!B()||!_()),c=Object(s.a)(i,2),l=c[0],u=c[1],d=Object(r.useState)([]),g=Object(s.a)(d,2),f=g[0],m=g[1],h=Object(r.useState)("none"),p=Object(s.a)(h,2),v=p[0],b=p[1],E=function(e){b(e),m(Le.getSample())};Object(r.useEffect)((function(){!function(){var e=new URL(window.location.href);Q(e,a.PASSWORD,P),Q(e,a.CSV_PATH,M),Q(e,a.IMAGES_PER_PAGE,I),Q(e,a.IMAGES_FOLDER,L),Q(e,a.MASKS_FOLDER,T),Q(e,a.USE_MASKS,V),Q(e,a.ID_COLUMN,z),Q(e,a.IMAGES_EXTENSION,U),Q(e,a.MASKS_EXTENSION,X)}(),Le.getAnnotations().finally((function(){return E("none")}))}),[]);var S,O=function(){return Le.decrPage().then((function(){return E("left")}))},x=function(){return Le.incrPage().then((function(){return E("right")}))},k=function(){return Le.nextPage().then((function(){return E("right")}))};return w((function(e){return l?De:y(e,O,x,k)})),S=function(e){return l?De:_e(e,O,x)},Object(r.useEffect)((function(){var e=Object(Ie.throttle)(S,320);return window.addEventListener("wheel",e),function(){return window.removeEventListener("wheel",e)}}),[S]),o.a.createElement("div",{className:"App"},o.a.createElement(de,{handleBanner:u,isBannerOpen:l,nightMode:t,changeNightMode:n}),0!==f.length?o.a.createElement(pe,{images:f,isBannerOpen:l,handleChangeValue:function(e,t){return Le.setValue(e,t)},navigationDirection:v,fetchService:Le}):o.a.createElement(Me,{navigationDirection:v}),0!==f.length&&o.a.createElement(Fe,{progress:Le.getProgress(),handlePressLeft:O,handlePressRight:x}))},He=(new Date).getHours(),Re=He<=8||He>=20;var Ve=function(){var e=Object(r.useState)(Re),t=Object(s.a)(e,2),n=t[0],a=t[1];return document.body.style=function(e){return"transition: background ".concat(f(e).speed.fast,"s ease; background: ").concat(f(e).color.page)}(n),o.a.createElement(u.a.Provider,{value:{stylesInterface:g.a,stylesTheme:f(n)}},o.a.createElement(Te,{nightMode:n,changeNightMode:function(){return a(!n)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,n){e.exports=n.p+"static/media/menu_logo.3c82aef9.png"},70:function(e,t,n){e.exports=n(150)},75:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.b85ab40e.chunk.js.map
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"1Kl1":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reachout",function(){return a("FEVF")}])},"30+C":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("kKAo"),s=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,u=void 0!==l&&l,d=Object(o.a)(e,["classes","className","raised"]);return r.createElement(c.a,Object(n.a)({className:Object(i.a)(a.root,s),elevation:u?8:1,ref:t},d))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"50B7":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),s=a("ofer"),l=r.forwardRef((function(e,t){var a=e.action,c=e.avatar,l=e.classes,u=e.className,d=e.component,f=void 0===d?"div":d,m=e.disableTypography,b=void 0!==m&&m,p=e.subheader,v=e.subheaderTypographyProps,h=e.title,y=e.titleTypographyProps,g=Object(o.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),w=h;null==w||w.type===s.a||b||(w=r.createElement(s.a,Object(n.a)({variant:c?"body2":"h5",className:l.title,component:"span",display:"block"},y),w));var E=p;return null==E||E.type===s.a||b||(E=r.createElement(s.a,Object(n.a)({variant:c?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},v),E)),r.createElement(f,Object(n.a)({className:Object(i.a)(l.root,u),ref:t},g),c&&r.createElement("div",{className:l.avatar},c),r.createElement("div",{className:l.content},w,E),a&&r.createElement("div",{className:l.action},a))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(l)},FEVF:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a("J4zp"),o=a.n(n),r=a("q1tI"),i=a.n(r),c=a("R/WZ"),s=a("30+C"),l=a("50B7"),u=a("oa/T"),d=a("ofer"),f=a("hlie"),m=Object(c.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(3),marginBottom:"10px"}}}));function b(){var e=m(),t=i.a.useState(!1),a=o()(t,2),n=(a[0],a[1],i.a.useState("")),r=o()(n,2);r[0],r[1];return i.a.createElement(s.a,{className:e.root},i.a.createElement(l.a,{title:"Welcome to Docudio!"}),i.a.createElement(u.a,null,i.a.createElement(d.a,{align:"center",variant:"h3"},"Docudio Slack"),i.a.createElement(f.a,{align:"center",color:"inherit",target:"_blank",rel:"noreferrer",href:"https://join.slack.com/t/docudio/shared_invite/zt-io1hneog-SX2sVVmRTtf2jh7jybvcKA"},i.a.createElement(d.a,{align:"center",variant:"h5",style:{marginBottom:"30px"}},"Join our slack and ask questions/ask to join! ")," ")," "))}},G7As:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),o=a("i8i4"),r=!0,i=!1,c=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(r=!0)}function u(){r=!1}function d(){"hidden"===this.visibilityState&&i&&(r=!0)}function f(e){var t=e.target;try{return t.matches(":focus-visible")}catch(a){}return r||function(e){var t=e.type,a=e.tagName;return!("INPUT"!==a||!s[t]||e.readOnly)||"TEXTAREA"===a&&!e.readOnly||!!e.isContentEditable}(t)}function m(){i=!0,window.clearTimeout(c),c=window.setTimeout((function(){i=!1}),100)}function b(){return{isFocusVisible:f,onBlurVisible:m,ref:n.useCallback((function(e){var t,a=o.findDOMNode(e);null!=a&&((t=a.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",d,!0))}),[])}}},GIek:function(e,t,a){"use strict";function n(e,t){"function"===typeof e?e(t):e&&(e.current=t)}a.d(t,"a",(function(){return n}))},bfFb:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),o=a("GIek");function r(e,t){return n.useMemo((function(){return null==e&&null==t?null:function(a){Object(o.a)(e,a),Object(o.a)(t,a)}}),[e,t])}},hlie:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("NqtD"),s=a("H2TA"),l=a("G7As"),u=a("bfFb"),d=a("ofer"),f=r.forwardRef((function(e,t){var a=e.classes,s=e.className,f=e.color,m=void 0===f?"primary":f,b=e.component,p=void 0===b?"a":b,v=e.onBlur,h=e.onFocus,y=e.TypographyClasses,g=e.underline,w=void 0===g?"hover":g,E=e.variant,j=void 0===E?"inherit":E,N=Object(o.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),O=Object(l.a)(),T=O.isFocusVisible,x=O.onBlurVisible,k=O.ref,F=r.useState(!1),_=F[0],A=F[1],C=Object(u.a)(t,k);return r.createElement(d.a,Object(n.a)({className:Object(i.a)(a.root,a["underline".concat(Object(c.a)(w))],s,_&&a.focusVisible,"button"===p&&a.button),classes:y,color:m,component:p,onBlur:function(e){_&&(x(),A(!1)),v&&v(e)},onFocus:function(e){T(e)&&A(!0),h&&h(e)},ref:C,variant:j},N))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(f)},"oa/T":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),s=r.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,u=Object(o.a)(e,["classes","className","component"]);return r.createElement(l,Object(n.a)({className:Object(i.a)(a.root,c),ref:t},u))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)}},[["1Kl1",0,1,2]]]);
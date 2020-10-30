(this["webpackJsonpasterisk-art-app"]=this["webpackJsonpasterisk-art-app"]||[]).push([[0],{25:function(t){t.exports=JSON.parse('{"light":{"--bg":"#fff","--alt-bg":"#eee","--text":"#383E48","--info":"#005fcc","--action":"#f84184","--danger":"#ee0000","--focus":"#005fcc"},"dark":{"--bg":"#212529","--alt-bg":"#363a3f","--text":"#eee","--info":"#51a4ff","--action":"#f84184","--danger":"#f36971","--focus":"#cce4ff"}}')},37:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"Layer",(function(){return k})),e.d(r,"layerSettings",(function(){return C}));var o={};e.r(o),e.d(o,"Layer",(function(){return E})),e.d(o,"layerSettings",(function(){return z}));var a={};e.r(a),e.d(a,"Layer",(function(){return A})),e.d(a,"layerSettings",(function(){return I}));var i={};e.r(i),e.d(i,"example1",(function(){return r})),e.d(i,"example2",(function(){return o})),e.d(i,"example3",(function(){return a}));var c=e(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=e(0),l=e(22),u=e.n(l),d=e(7),b=e(9),m=e(14),h=e(2),f=e(1),g=e.n(f);function p(){return Object(s.c)("div",null,Object(s.c)("h1",null,"About"))}function O(){var t=Object(h.f)().pathname;return Object(s.c)("nav",null,Object(s.c)("ul",{css:{listStyle:"none",display:"block",padding:"0 5rem 0 0",margin:0}},[{name:"Editor",url:"/"},{name:"Settings",url:"/settings"},{name:"About",url:"/about"}].map((function(n){var e=n.name,r=n.url;return Object(s.c)("li",{key:r,css:{display:"inline-block",margin:"0 0.5rem"}},Object(s.c)(m.b,{to:r,css:{display:"inline-block",fontWeight:t===r?900:400,":hover":{textDecoration:"none"}}},e))}))))}function y(){var t=P(),n=t.theme,e=t.setTheme;return Object(s.c)("header",null,Object(s.c)("h1",null,"Logo"),Object(s.c)(O,null),Object(s.c)("button",{onClick:function(){return e("light"===n?"dark":"light")},css:{background:"var(--danger)",margin:"1rem",":focus":{outline:"none",boxShadow:"0 0 0 2px var(--bg), 0 0 0 5px var(--focus)"}}},"Switch theme"))}function j(t){var n=t.canvas;return Object(s.c)("div",null,Object(s.c)("h2",null,"Canvas"),n.map((function(t,n){var e=t.Layer,r=(t.layerSettings.name,t.userSettings);return Object(s.c)(e,Object(d.a)({key:n},r))})))}var v=e(24),S=e(19),x="asterisk-art-settings";function w(){var t={colorMode:"default",manualAdjustments:!1},n=localStorage.getItem(x);if(!n)return t;try{return JSON.parse(n)}catch(e){return t}}function k(t){var n=t.strokeColor,e=t.strokeWidth,r=t.lineNumbers,o=w();return Object(s.c)("div",null,"An example 1 layer that will use the data that was set in the sidebar and the stored settings",Object(s.c)("ul",null,Object(s.c)("li",null,JSON.stringify(n)),Object(s.c)("li",null,JSON.stringify(e)),Object(s.c)("li",null,JSON.stringify(r)),Object(s.c)("li",null,JSON.stringify(o))))}var C={name:"Example 1",config:{strokeColor:{name:"Stroke color",type:"color"},strokeWidth:{name:"Stroke width",type:"number",min:1,max:5,steps:.5},lineNumbers:{name:"Number of lines",type:"number",min:1,max:20}}};function E(t){var n=t.color,e=t.dotsAmount,r=w();return Object(s.c)("div",null,"An example 2 layer that will use the data that was set in the sidebar and the stored settings",Object(s.c)("ul",null,Object(s.c)("li",null,JSON.stringify(n)),Object(s.c)("li",null,JSON.stringify(e)),Object(s.c)("li",null,JSON.stringify(r))))}var z={name:"Example 2",config:{color:{name:"Color",type:"color"},dotsAmount:{name:"Amount of dots",type:"number",min:1,max:20}}};function A(t){var n=t.circleAmount,e=t.dotsAmount,r=w();return Object(s.c)("div",null,"An example 3 layer that will use the data that was set in the sidebar and the stored settings",Object(s.c)("ul",null,Object(s.c)("li",null,JSON.stringify(n)),Object(s.c)("li",null,JSON.stringify(e)),Object(s.c)("li",null,JSON.stringify(r))))}var I={name:"Example 3",config:{circleAmount:{name:"Number of circles",type:"number",min:0,max:10},dotsAmount:{name:"Amount of dots",type:"number",min:1,max:20}}};function N(t,n){return Object(d.a)(Object(d.a)({config:1,config2:2},t),{},{phrase:n})}function M(t){var n=t.phrase,e=t.setPhrase,r=t.canvas,o=t.setCanvas;return Object(s.c)("aside",null,Object(s.c)("h2",null,"Sidebar"),Object(s.c)("label",{css:{display:"block"}},"Phrase",Object(s.c)("input",{type:"text",value:n,onChange:function(t){return function(t){var n=r.map((function(n){var e=n.layerSettings,r=(n.userSettings,Object(v.a)(n,["layerSettings","userSettings"]));return Object(d.a)({userSettings:N(e.config,t),layerSettings:e},r)}));o(n),e(t)}(t.target.value)}})),"Choose a layer:",Object(s.c)("ul",null,Object.entries(i).map((function(t){var e=Object(b.a)(t,2),a=e[0],i=e[1],c=i.Layer,l=i.layerSettings;return Object(s.c)("li",{key:a},Object(s.c)("button",{onClick:function(){return(t={Layer:c,layerSettings:l}).userSettings=N(t.layerSettings.config,n),void o([].concat(Object(S.a)(r),[t]));var t},disabled:!n},l.name))}))),"Your selected layer:",Object(s.c)("ul",null,r.map((function(t,n){var e=t.layerSettings.name,a=t.userSettings;return Object(s.c)("li",{key:n},e,Object(s.c)("button",{onClick:function(){return function(t){var n=Object(S.a)(r);n.splice(t,1),o(n)}(n)}},"delete"),Object(s.c)("textarea",{defaultValue:JSON.stringify(a,null,2)}))}))))}function R(t){var n=t.phrase,e=t.setPhrase,r=t.canvas,o=t.setCanvas;return Object(s.c)("div",{css:{display:"grid",gridTemplateColumns:"1fr 18.75rem"}},Object(s.c)(j,{canvas:r}),Object(s.c)(M,{phrase:n,setPhrase:e,canvas:r,setCanvas:o}))}function J(){var t=w(),n=Object(f.useState)(t.colorMode),e=Object(b.a)(n,2),r=e[0],o=e[1],a=Object(f.useState)(t.manualAdjustments),i=Object(b.a)(a,2),c=i[0],l=i[1];return Object(s.c)("div",null,Object(s.c)("h1",null,"Settings"),Object(s.c)("form",{onSubmit:function(t){var n;t.preventDefault(),n={colorMode:r,manualAdjustments:c},localStorage.setItem(x,JSON.stringify(n))}},Object(s.c)("fieldset",null,Object(s.c)("legend",null,"Canvas settings"),Object(s.c)("ul",null,Object(s.c)("li",null,Object(s.c)("p",{id:"colorMode"},"Mode for color generations"),Object(s.c)("label",{"aria-describedby":"colorMode"},Object(s.c)("input",{type:"radio",name:"colorMode",value:"default",checked:"default"===r,onChange:function(){return o("default")}}),"Default"),Object(s.c)("label",{"aria-describedby":"colorMode"},Object(s.c)("input",{type:"radio",name:"colorMode",value:"rainbow",checked:"rainbow"===r,onChange:function(){return o("rainbow")}}),"Rainbow"),Object(s.c)("label",{"aria-describedby":"colorMode"},Object(s.c)("input",{type:"radio",name:"colorMode",value:"monochromatic",checked:"monochromatic"===r,onChange:function(){return o("monochromatic")}}),"Monochromatic")),Object(s.c)("li",null,Object(s.c)("label",null,Object(s.c)("input",{type:"checkbox",value:"manualAdjustments",checked:c,onChange:function(t){return l(!!t.target.checked)}}),"Allow manual adjustments")))),Object(s.c)("button",{type:"submit"},"Save")))}var F=e(25),L=Object(f.createContext)(),P=function(){var t=Object(f.useContext)(L);if(!t)throw new Error("To use useTheme please wrap your component into <App />.");return t};function T(){var t=Object(f.useState)(""),n=Object(b.a)(t,2),e=n[0],r=n[1],o=Object(f.useState)([]),a=Object(b.a)(o,2),i=a[0],c=a[1],l=Object(f.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),u=Object(b.a)(l,2),g=u[0],O=u[1];return Object(f.useEffect)((function(){var t=function(t){t.matches?O("dark"):O("light")};return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",t)}),[]),Object(s.c)(L.Provider,{value:{theme:g,setTheme:O}},Object(s.c)(s.a,{styles:{":root":Object(d.a)({},F[g])}}),Object(s.c)("main",{css:{textRendering:"optimizeLegibility",fontKerning:"auto",MozOsxFontSmoothing:"grayscale"}},Object(s.c)(m.a,null,Object(s.c)(y,null),Object(s.c)(h.c,null,Object(s.c)(h.a,{exact:!0,path:"/",component:function(){return Object(s.c)(R,{phrase:e,setPhrase:r,canvas:i,setCanvas:c})}}),Object(s.c)(h.a,{exact:!0,path:"/about",component:p}),Object(s.c)(h.a,{exact:!0,path:"/settings",component:J})))))}var W=e(26);function B(){var t=Object(W.a)(["\n\t/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n\t/* Document\n\t\t ========================================================================== */\n\n\t/**\n\t * 1. Correct the line height in all browsers.\n\t * 2. Prevent adjustments of font size after orientation changes in iOS.\n\t */\n\n\thtml {\n\t\tline-height: 1.15; /* 1 */\n\t\t-webkit-text-size-adjust: 100%; /* 2 */\n\t}\n\n\t/* Sections\n\t\t ========================================================================== */\n\n\t/**\n\t * Remove the margin in all browsers.\n\t */\n\n\tbody {\n\t\tmargin: 0;\n\t}\n\n\t/**\n\t * Render the \"main\" element consistently in IE.\n\t */\n\n\tmain {\n\t\tdisplay: block;\n\t}\n\n\t/**\n\t * Correct the font size and margin on \"h1\" elements within \"section\" and\n\t * \"article\" contexts in Chrome, Firefox, and Safari.\n\t */\n\n\th1 {\n\t\tfont-size: 2em;\n\t\tmargin: 0.67em 0;\n\t}\n\n\t/* Grouping content\n\t\t ========================================================================== */\n\n\t/**\n\t * 1. Add the correct box sizing in Firefox.\n\t * 2. Show the overflow in Edge and IE.\n\t */\n\n\thr {\n\t\tbox-sizing: content-box; /* 1 */\n\t\theight: 0; /* 1 */\n\t\toverflow: visible; /* 2 */\n\t}\n\n\t/**\n\t * 1. Correct the inheritance and scaling of font size in all browsers.\n\t * 2. Correct the odd \"em\" font sizing in all browsers.\n\t */\n\n\tpre {\n\t\tfont-family: monospace, monospace; /* 1 */\n\t\tfont-size: 1em; /* 2 */\n\t}\n\n\t/* Text-level semantics\n\t\t ========================================================================== */\n\n\t/**\n\t * Remove the gray background on active links in IE 10.\n\t */\n\n\ta {\n\t\tbackground-color: transparent;\n\t}\n\n\t/**\n\t * 1. Remove the bottom border in Chrome 57-\n\t * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n\t */\n\n\tabbr[title] {\n\t\tborder-bottom: none; /* 1 */\n\t\ttext-decoration: underline; /* 2 */\n\t\ttext-decoration: underline dotted; /* 2 */\n\t}\n\n\t/**\n\t * Add the correct font weight in Chrome, Edge, and Safari.\n\t */\n\n\tb,\n\tstrong {\n\t\tfont-weight: bolder;\n\t}\n\n\t/**\n\t * 1. Correct the inheritance and scaling of font size in all browsers.\n\t * 2. Correct the odd \"em\" font sizing in all browsers.\n\t */\n\n\tcode,\n\tkbd,\n\tsamp {\n\t\tfont-family: monospace, monospace; /* 1 */\n\t\tfont-size: 1em; /* 2 */\n\t}\n\n\t/**\n\t * Add the correct font size in all browsers.\n\t */\n\n\tsmall {\n\t\tfont-size: 80%;\n\t}\n\n\t/**\n\t * Prevent \"sub\" and \"sup\" elements from affecting the line height in\n\t * all browsers.\n\t */\n\n\tsub,\n\tsup {\n\t\tfont-size: 75%;\n\t\tline-height: 0;\n\t\tposition: relative;\n\t\tvertical-align: baseline;\n\t}\n\n\tsub {\n\t\tbottom: -0.25em;\n\t}\n\n\tsup {\n\t\ttop: -0.5em;\n\t}\n\n\t/* Embedded content\n\t\t ========================================================================== */\n\n\t/**\n\t * Remove the border on images inside links in IE 10.\n\t */\n\n\timg {\n\t\tborder-style: none;\n\t}\n\n\t/* Forms\n\t\t ========================================================================== */\n\n\t/**\n\t * 1. Change the font styles in all browsers.\n\t * 2. Remove the margin in Firefox and Safari.\n\t */\n\n\tbutton,\n\tinput,\n\toptgroup,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit; /* 1 */\n\t\tfont-size: 100%; /* 1 */\n\t\tline-height: 1.15; /* 1 */\n\t\tmargin: 0; /* 2 */\n\t}\n\n\t/**\n\t * Show the overflow in IE.\n\t * 1. Show the overflow in Edge.\n\t */\n\n\tbutton,\n\tinput {\n\t\t/* 1 */\n\t\toverflow: visible;\n\t}\n\n\t/**\n\t * Remove the inheritance of text transform in Edge, Firefox, and IE.\n\t * 1. Remove the inheritance of text transform in Firefox.\n\t */\n\n\tbutton,\n\tselect {\n\t\t/* 1 */\n\t\ttext-transform: none;\n\t}\n\n\t/**\n\t * Correct the inability to style clickable types in iOS and Safari.\n\t */\n\n\tbutton,\n\t[type='button'],\n\t[type='reset'],\n\t[type='submit'] {\n\t\t-webkit-appearance: button;\n\t}\n\n\t/**\n\t * Remove the inner border and padding in Firefox.\n\t */\n\n\tbutton::-moz-focus-inner,\n\t[type='button']::-moz-focus-inner,\n\t[type='reset']::-moz-focus-inner,\n\t[type='submit']::-moz-focus-inner {\n\t\tborder-style: none;\n\t\tpadding: 0;\n\t}\n\n\t/**\n\t * Restore the focus styles unset by the previous rule.\n\t */\n\n\tbutton:-moz-focusring,\n\t[type='button']:-moz-focusring,\n\t[type='reset']:-moz-focusring,\n\t[type='submit']:-moz-focusring {\n\t\toutline: 1px dotted ButtonText;\n\t}\n\n\t/**\n\t * Correct the padding in Firefox.\n\t */\n\n\tfieldset {\n\t\tpadding: 0.35em 0.75em 0.625em;\n\t}\n\n\t/**\n\t * 1. Correct the text wrapping in Edge and IE.\n\t * 2. Correct the color inheritance from \"fieldset\" elements in IE.\n\t * 3. Remove the padding so developers are not caught out when they zero out\n\t *    \"fieldset\" elements in all browsers.\n\t */\n\n\tlegend {\n\t\tbox-sizing: border-box; /* 1 */\n\t\tcolor: inherit; /* 2 */\n\t\tdisplay: table; /* 1 */\n\t\tmax-width: 100%; /* 1 */\n\t\tpadding: 0; /* 3 */\n\t\twhite-space: normal; /* 1 */\n\t}\n\n\t/**\n\t * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n\t */\n\n\tprogress {\n\t\tvertical-align: baseline;\n\t}\n\n\t/**\n\t * Remove the default vertical scrollbar in IE 10+.\n\t */\n\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\n\t/**\n\t * 1. Add the correct box sizing in IE 10.\n\t * 2. Remove the padding in IE 10.\n\t */\n\n\t[type='checkbox'],\n\t[type='radio'] {\n\t\tbox-sizing: border-box; /* 1 */\n\t\tpadding: 0; /* 2 */\n\t}\n\n\t/**\n\t * Correct the cursor style of increment and decrement buttons in Chrome.\n\t */\n\n\t[type='number']::-webkit-inner-spin-button,\n\t[type='number']::-webkit-outer-spin-button {\n\t\theight: auto;\n\t}\n\n\t/**\n\t * 1. Correct the odd appearance in Chrome and Safari.\n\t * 2. Correct the outline style in Safari.\n\t */\n\n\t[type='search'] {\n\t\t-webkit-appearance: textfield; /* 1 */\n\t\toutline-offset: -2px; /* 2 */\n\t}\n\n\t/**\n\t * Remove the inner padding in Chrome and Safari on macOS.\n\t */\n\n\t[type='search']::-webkit-search-decoration {\n\t\t-webkit-appearance: none;\n\t}\n\n\t/**\n\t * 1. Correct the inability to style clickable types in iOS and Safari.\n\t * 2. Change font properties to \"inherit\" in Safari.\n\t */\n\n\t::-webkit-file-upload-button {\n\t\t-webkit-appearance: button; /* 1 */\n\t\tfont: inherit; /* 2 */\n\t}\n\n\t/* Interactive\n\t\t ========================================================================== */\n\n\t/*\n\t * Add the correct display in Edge, IE 10+, and Firefox.\n\t */\n\n\tdetails {\n\t\tdisplay: block;\n\t}\n\n\t/*\n\t * Add the correct display in all browsers.\n\t */\n\n\tsummary {\n\t\tdisplay: list-item;\n\t}\n\n\t/* Misc\n\t\t ========================================================================== */\n\n\t/**\n\t * Add the correct display in IE 10+.\n\t */\n\n\ttemplate {\n\t\tdisplay: none;\n\t}\n\n\t/**\n\t * Add the correct display in IE 10.\n\t */\n\n\t[hidden] {\n\t\tdisplay: none;\n\t}\n"]);return B=function(){return t},t}var D=Object(s.b)(B());u.a.render(Object(c.jsxs)(g.a.StrictMode,{children:[Object(c.jsx)(s.a,{styles:D}),Object(c.jsx)(s.a,{styles:{html:{height:"100%"},body:{fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',lineHeight:1.2,margin:0,padding:0,color:"var(--text)",background:"var(--bg)"},a:{color:"var(--text)"},"*, *:before, *:after":{boxSizing:"border-box"}}}),Object(c.jsx)(T,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5acfef16.chunk.js.map
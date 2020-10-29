(this["webpackJsonpasterisk-art-app"]=this["webpackJsonpasterisk-art-app"]||[]).push([[0],{24:function(t){t.exports=JSON.parse('{"light":{"--bg":"#fff","--alt-bg":"#eee","--text":"#383E48","--info":"#005fcc","--action":"#f84184","--danger":"#ee0000","--focus":"#005fcc"},"dark":{"--bg":"#212529","--alt-bg":"#363a3f","--text":"#eee","--info":"#51a4ff","--action":"#f84184","--danger":"#f36971","--focus":"#cce4ff"}}')},37:function(t,n,e){"use strict";e.r(n);var o={};e.r(o),e.d(o,"Example1",(function(){return S})),e.d(o,"settings",(function(){return C}));var r={};e.r(r),e.d(r,"Example2",(function(){return E})),e.d(r,"settings",(function(){return z}));var a={};e.r(a),e.d(a,"Example3",(function(){return A})),e.d(a,"settings",(function(){return I}));var i={};e.r(i),e.d(i,"example1",(function(){return o})),e.d(i,"example2",(function(){return r})),e.d(i,"example3",(function(){return a}));var c=e(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=e(0),s=e(21),u=e.n(s),d=e(26),b=e(7),m=e(13),h=e(2),f=e(1),p=e.n(f);function g(){return Object(l.c)("div",null,Object(l.c)("h1",null,"About"))}function j(){var t=Object(h.f)().pathname;return Object(l.c)("nav",null,Object(l.c)("ul",{css:{listStyle:"none",display:"block",padding:"0 5rem 0 0",margin:0}},[{name:"Editor",url:"/"},{name:"Settings",url:"/settings"},{name:"About",url:"/about"}].map((function(n){var e=n.name,o=n.url;return Object(l.c)("li",{key:o,css:{display:"inline-block",margin:"0 0.5rem"}},Object(l.c)(m.b,{to:o,css:{display:"inline-block",fontWeight:t===o?900:400,":hover":{textDecoration:"none"}}},e))}))))}function O(){var t=T(),n=t.theme,e=t.setTheme;return Object(l.c)("header",null,Object(l.c)("h1",null,"Logo"),Object(l.c)(j,null),Object(l.c)("button",{onClick:function(){return e("light"===n?"dark":"light")},css:{background:"var(--danger)",margin:"1rem",":focus":{outline:"none",boxShadow:"0 0 0 2px var(--bg), 0 0 0 5px var(--focus)"}}},"Switch theme"))}function v(t){var n=t.canvas;return Object(l.c)("div",null,Object(l.c)("h2",null,"Canvas"),n.map((function(t){var n=t.component,e=t.settings.name;return Object(l.c)(n,{key:e})})))}var y=e(18),x=e(23),w="asterisk-art-settings";function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=localStorage.getItem(w);try{return JSON.parse(n)}catch(e){return t}}function S(t){var n=t.strokeColor,e=t.strokeWidth,o=t.lineNumbers,r=k();return Object(l.c)("div",null,"An example 1 layer that will use the data that was set in the sidebar and the stored settings",Object(l.c)("ul",null,Object(l.c)("li",null,n),Object(l.c)("li",null,e),Object(l.c)("li",null,o),Object(l.c)("li",null,Object(l.c)("textarea",{defaultValue:JSON.stringify(r,null,2)}))))}var C={name:"Example 1",config:[{name:"Stroke color",prop:"strokeColor",type:"color"},{name:"Stroke width",prop:"strokeWidth",type:"range",from:1,to:5,steps:.5},{name:"Number of lines",prop:"lineNumbers",type:"number",min:1}]};function E(t){var n=t.color,e=t.dotsAmount,o=k();return Object(l.c)("div",null,"An example 2 layer that will use the data that was set in the sidebar and the stored settings",Object(l.c)("ul",null,Object(l.c)("li",null,n),Object(l.c)("li",null,e),Object(l.c)("li",null,Object(l.c)("textarea",{defaultValue:JSON.stringify(o,null,2)}))))}var z={name:"Example 2",config:[{name:"Color",prop:"color",type:"color"},{name:"Amount of dots",prop:"dotsAmount",type:"number",min:1,max:20}]};function A(t){var n=t.circleAmount,e=t.dotsAmount,o=k();return Object(l.c)("div",null,"An example 3 layer that will use the data that was set in the sidebar and the stored settings",Object(l.c)("ul",null,Object(l.c)("li",null,n),Object(l.c)("li",null,e),Object(l.c)("li",null,Object(l.c)("textarea",{defaultValue:JSON.stringify(o,null,2)}))))}var I={name:"Example 3",config:[{name:"Number of circles",prop:"circleAmount",type:"number",max:10},{name:"Amount of dots",prop:"dotsAmount",type:"number",min:1,max:20}]};function M(t){var n=t.phrase,e=t.setPhrase,o=t.canvas,r=t.setCanvas;return Object(l.c)("aside",null,Object(l.c)("h2",null,"Sidebar"),Object(l.c)("label",{css:{display:"block"}},"Phrase",Object(l.c)("input",{type:"text",value:n,onChange:function(t){return e(t.target.value)}})),"Choose a layer:",Object(l.c)("ul",null,Object.entries(i).filter((function(t){var n=Object(b.a)(t,2),e=(n[0],n[1].settings.name);return!o.map((function(t){return t.settings.name})).includes(e)})).map((function(t){var n=Object(b.a)(t,2),e=n[0],a=n[1],i=a.settings,c=Object(x.a)(a,["settings"]);return Object(l.c)("li",{key:e},Object(l.c)("button",{onClick:function(){return r([].concat(Object(y.a)(o),[{component:c[Object.keys(c)[0]],settings:i}]))}},i.name))}))),"Your selected layer:",Object(l.c)("ul",null,o.map((function(t){var n=t.settings,e=n.name;n.config;return Object(l.c)("li",{key:e},e,Object(l.c)("button",{onClick:function(){return r(Object(y.a)(o.filter((function(t){return t.settings.name!==e}))))}},"delete"))}))))}function R(){var t=Object(f.useState)(""),n=Object(b.a)(t,2),e=n[0],o=n[1],r=Object(f.useState)([]),a=Object(b.a)(r,2),i=a[0],c=a[1];return Object(l.c)("div",{css:{display:"grid",gridTemplateColumns:"1fr 18.75rem"}},Object(l.c)(v,{canvas:i}),Object(l.c)(M,{phrase:e,setPhrase:o,canvas:i,setCanvas:c}))}function F(){var t=k({colorMode:"default",manualAdjustments:!1}),n=Object(f.useState)(t.colorMode),e=Object(b.a)(n,2),o=e[0],r=e[1],a=Object(f.useState)(t.manualAdjustments),i=Object(b.a)(a,2),c=i[0],s=i[1];return Object(l.c)("div",null,Object(l.c)("h1",null,"Settings"),Object(l.c)("form",{onSubmit:function(t){var n;t.preventDefault(),n={colorMode:o,manualAdjustments:c},localStorage.setItem(w,JSON.stringify(n))}},Object(l.c)("fieldset",null,Object(l.c)("legend",null,"Canvas settings"),Object(l.c)("ul",null,Object(l.c)("li",null,Object(l.c)("p",{id:"colorMode"},"Mode for color generations"),Object(l.c)("label",{"aria-describedby":"colorMode"},Object(l.c)("input",{type:"radio",name:"colorMode",value:"default",checked:"default"===o,onChange:function(){return r("default")}}),"Default"),Object(l.c)("label",{"aria-describedby":"colorMode"},Object(l.c)("input",{type:"radio",name:"colorMode",value:"rainbow",checked:"rainbow"===o,onChange:function(){return r("rainbow")}}),"Rainbow"),Object(l.c)("label",{"aria-describedby":"colorMode"},Object(l.c)("input",{type:"radio",name:"colorMode",value:"monochromatic",checked:"monochromatic"===o,onChange:function(){return r("monochromatic")}}),"Monochromatic")),Object(l.c)("li",null,Object(l.c)("label",null,Object(l.c)("input",{type:"checkbox",value:"manualAdjustments",checked:c,onChange:function(t){return s(!!t.target.checked)}}),"Allow manual adjustments")))),Object(l.c)("button",{type:"submit"},"Save")))}var N=e(24),J=Object(f.createContext)(),T=function(){var t=Object(f.useContext)(J);if(!t)throw new Error("To use useTheme please wrap your component into <App />.");return t};function P(){var t=Object(f.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),n=Object(b.a)(t,2),e=n[0],o=n[1];return Object(f.useEffect)((function(){var t=function(t){t.matches?o("dark"):o("light")};return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",t)}),[]),Object(l.c)(J.Provider,{value:{theme:e,setTheme:o}},Object(l.c)(l.a,{styles:{":root":Object(d.a)({},N[e])}}),Object(l.c)("main",{css:{textRendering:"optimizeLegibility",fontKerning:"auto",MozOsxFontSmoothing:"grayscale"}},Object(l.c)(m.a,null,Object(l.c)(O,null),Object(l.c)(h.c,null,Object(l.c)(h.a,{exact:!0,path:"/",component:R}),Object(l.c)(h.a,{exact:!0,path:"/about",component:g}),Object(l.c)(h.a,{exact:!0,path:"/settings",component:F})))))}var L=e(25);function W(){var t=Object(L.a)(["\n\t/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n\t/* Document\n\t\t ========================================================================== */\n\n\t/**\n\t * 1. Correct the line height in all browsers.\n\t * 2. Prevent adjustments of font size after orientation changes in iOS.\n\t */\n\n\thtml {\n\t\tline-height: 1.15; /* 1 */\n\t\t-webkit-text-size-adjust: 100%; /* 2 */\n\t}\n\n\t/* Sections\n\t\t ========================================================================== */\n\n\t/**\n\t * Remove the margin in all browsers.\n\t */\n\n\tbody {\n\t\tmargin: 0;\n\t}\n\n\t/**\n\t * Render the \"main\" element consistently in IE.\n\t */\n\n\tmain {\n\t\tdisplay: block;\n\t}\n\n\t/**\n\t * Correct the font size and margin on \"h1\" elements within \"section\" and\n\t * \"article\" contexts in Chrome, Firefox, and Safari.\n\t */\n\n\th1 {\n\t\tfont-size: 2em;\n\t\tmargin: 0.67em 0;\n\t}\n\n\t/* Grouping content\n\t\t ========================================================================== */\n\n\t/**\n\t * 1. Add the correct box sizing in Firefox.\n\t * 2. Show the overflow in Edge and IE.\n\t */\n\n\thr {\n\t\tbox-sizing: content-box; /* 1 */\n\t\theight: 0; /* 1 */\n\t\toverflow: visible; /* 2 */\n\t}\n\n\t/**\n\t * 1. Correct the inheritance and scaling of font size in all browsers.\n\t * 2. Correct the odd \"em\" font sizing in all browsers.\n\t */\n\n\tpre {\n\t\tfont-family: monospace, monospace; /* 1 */\n\t\tfont-size: 1em; /* 2 */\n\t}\n\n\t/* Text-level semantics\n\t\t ========================================================================== */\n\n\t/**\n\t * Remove the gray background on active links in IE 10.\n\t */\n\n\ta {\n\t\tbackground-color: transparent;\n\t}\n\n\t/**\n\t * 1. Remove the bottom border in Chrome 57-\n\t * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n\t */\n\n\tabbr[title] {\n\t\tborder-bottom: none; /* 1 */\n\t\ttext-decoration: underline; /* 2 */\n\t\ttext-decoration: underline dotted; /* 2 */\n\t}\n\n\t/**\n\t * Add the correct font weight in Chrome, Edge, and Safari.\n\t */\n\n\tb,\n\tstrong {\n\t\tfont-weight: bolder;\n\t}\n\n\t/**\n\t * 1. Correct the inheritance and scaling of font size in all browsers.\n\t * 2. Correct the odd \"em\" font sizing in all browsers.\n\t */\n\n\tcode,\n\tkbd,\n\tsamp {\n\t\tfont-family: monospace, monospace; /* 1 */\n\t\tfont-size: 1em; /* 2 */\n\t}\n\n\t/**\n\t * Add the correct font size in all browsers.\n\t */\n\n\tsmall {\n\t\tfont-size: 80%;\n\t}\n\n\t/**\n\t * Prevent \"sub\" and \"sup\" elements from affecting the line height in\n\t * all browsers.\n\t */\n\n\tsub,\n\tsup {\n\t\tfont-size: 75%;\n\t\tline-height: 0;\n\t\tposition: relative;\n\t\tvertical-align: baseline;\n\t}\n\n\tsub {\n\t\tbottom: -0.25em;\n\t}\n\n\tsup {\n\t\ttop: -0.5em;\n\t}\n\n\t/* Embedded content\n\t\t ========================================================================== */\n\n\t/**\n\t * Remove the border on images inside links in IE 10.\n\t */\n\n\timg {\n\t\tborder-style: none;\n\t}\n\n\t/* Forms\n\t\t ========================================================================== */\n\n\t/**\n\t * 1. Change the font styles in all browsers.\n\t * 2. Remove the margin in Firefox and Safari.\n\t */\n\n\tbutton,\n\tinput,\n\toptgroup,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit; /* 1 */\n\t\tfont-size: 100%; /* 1 */\n\t\tline-height: 1.15; /* 1 */\n\t\tmargin: 0; /* 2 */\n\t}\n\n\t/**\n\t * Show the overflow in IE.\n\t * 1. Show the overflow in Edge.\n\t */\n\n\tbutton,\n\tinput {\n\t\t/* 1 */\n\t\toverflow: visible;\n\t}\n\n\t/**\n\t * Remove the inheritance of text transform in Edge, Firefox, and IE.\n\t * 1. Remove the inheritance of text transform in Firefox.\n\t */\n\n\tbutton,\n\tselect {\n\t\t/* 1 */\n\t\ttext-transform: none;\n\t}\n\n\t/**\n\t * Correct the inability to style clickable types in iOS and Safari.\n\t */\n\n\tbutton,\n\t[type='button'],\n\t[type='reset'],\n\t[type='submit'] {\n\t\t-webkit-appearance: button;\n\t}\n\n\t/**\n\t * Remove the inner border and padding in Firefox.\n\t */\n\n\tbutton::-moz-focus-inner,\n\t[type='button']::-moz-focus-inner,\n\t[type='reset']::-moz-focus-inner,\n\t[type='submit']::-moz-focus-inner {\n\t\tborder-style: none;\n\t\tpadding: 0;\n\t}\n\n\t/**\n\t * Restore the focus styles unset by the previous rule.\n\t */\n\n\tbutton:-moz-focusring,\n\t[type='button']:-moz-focusring,\n\t[type='reset']:-moz-focusring,\n\t[type='submit']:-moz-focusring {\n\t\toutline: 1px dotted ButtonText;\n\t}\n\n\t/**\n\t * Correct the padding in Firefox.\n\t */\n\n\tfieldset {\n\t\tpadding: 0.35em 0.75em 0.625em;\n\t}\n\n\t/**\n\t * 1. Correct the text wrapping in Edge and IE.\n\t * 2. Correct the color inheritance from \"fieldset\" elements in IE.\n\t * 3. Remove the padding so developers are not caught out when they zero out\n\t *    \"fieldset\" elements in all browsers.\n\t */\n\n\tlegend {\n\t\tbox-sizing: border-box; /* 1 */\n\t\tcolor: inherit; /* 2 */\n\t\tdisplay: table; /* 1 */\n\t\tmax-width: 100%; /* 1 */\n\t\tpadding: 0; /* 3 */\n\t\twhite-space: normal; /* 1 */\n\t}\n\n\t/**\n\t * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n\t */\n\n\tprogress {\n\t\tvertical-align: baseline;\n\t}\n\n\t/**\n\t * Remove the default vertical scrollbar in IE 10+.\n\t */\n\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\n\t/**\n\t * 1. Add the correct box sizing in IE 10.\n\t * 2. Remove the padding in IE 10.\n\t */\n\n\t[type='checkbox'],\n\t[type='radio'] {\n\t\tbox-sizing: border-box; /* 1 */\n\t\tpadding: 0; /* 2 */\n\t}\n\n\t/**\n\t * Correct the cursor style of increment and decrement buttons in Chrome.\n\t */\n\n\t[type='number']::-webkit-inner-spin-button,\n\t[type='number']::-webkit-outer-spin-button {\n\t\theight: auto;\n\t}\n\n\t/**\n\t * 1. Correct the odd appearance in Chrome and Safari.\n\t * 2. Correct the outline style in Safari.\n\t */\n\n\t[type='search'] {\n\t\t-webkit-appearance: textfield; /* 1 */\n\t\toutline-offset: -2px; /* 2 */\n\t}\n\n\t/**\n\t * Remove the inner padding in Chrome and Safari on macOS.\n\t */\n\n\t[type='search']::-webkit-search-decoration {\n\t\t-webkit-appearance: none;\n\t}\n\n\t/**\n\t * 1. Correct the inability to style clickable types in iOS and Safari.\n\t * 2. Change font properties to \"inherit\" in Safari.\n\t */\n\n\t::-webkit-file-upload-button {\n\t\t-webkit-appearance: button; /* 1 */\n\t\tfont: inherit; /* 2 */\n\t}\n\n\t/* Interactive\n\t\t ========================================================================== */\n\n\t/*\n\t * Add the correct display in Edge, IE 10+, and Firefox.\n\t */\n\n\tdetails {\n\t\tdisplay: block;\n\t}\n\n\t/*\n\t * Add the correct display in all browsers.\n\t */\n\n\tsummary {\n\t\tdisplay: list-item;\n\t}\n\n\t/* Misc\n\t\t ========================================================================== */\n\n\t/**\n\t * Add the correct display in IE 10+.\n\t */\n\n\ttemplate {\n\t\tdisplay: none;\n\t}\n\n\t/**\n\t * Add the correct display in IE 10.\n\t */\n\n\t[hidden] {\n\t\tdisplay: none;\n\t}\n"]);return W=function(){return t},t}var B=Object(l.b)(W());u.a.render(Object(c.jsxs)(p.a.StrictMode,{children:[Object(c.jsx)(l.a,{styles:B}),Object(c.jsx)(l.a,{styles:{html:{height:"100%"},body:{fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',lineHeight:1.2,margin:0,padding:0,color:"var(--text)",background:"var(--bg)"},a:{color:"var(--text)"},"*, *:before, *:after":{boxSizing:"border-box"}}}),Object(c.jsx)(P,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.efb0c32e.chunk.js.map
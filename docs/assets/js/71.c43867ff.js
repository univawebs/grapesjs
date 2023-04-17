(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{424:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"selector-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selector-manager"}},[t._v("#")]),t._v(" Selector Manager")]),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:t.$withBase("/selector-manager.jpg"),alt:"GrapesJS - Selector Manager"}})]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/api/selector.html"}},[t._v("Selector")]),t._v(" allows the reuse of styles across all of your "),s("RouterLink",{attrs:{to:"/modules/Components.html"}},[t._v("Components")]),t._v(" in the project (exactly what classes do in HTML) and the main goal of the Selector Manager is to collect them and indicate the current state of the selection.")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This guide is referring to GrapesJS v0.17.28 or higher")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#configuration"}},[t._v("Configuration")])]),s("li",[s("a",{attrs:{href:"#initialization"}},[t._v("Initialization")])]),s("li",[s("a",{attrs:{href:"#component-first-selectors"}},[t._v("Component-first selectors")])]),s("li",[s("a",{attrs:{href:"#programmatic-usage"}},[t._v("Programmatic usage")])]),s("li",[s("a",{attrs:{href:"#customization"}},[t._v("Customization")])]),s("li",[s("a",{attrs:{href:"#events"}},[t._v("Events")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("To change the default configurations you have to pass the "),s("code",[t._v("selectorManager")]),t._v(" property with the main configuration object.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("selectorManager")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Check the full list of available options here: "),s("a",{attrs:{href:"https://github.com/GrapesJS/grapesjs/blob/master/src/selector_manager/config/config.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Selector Manager Config"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"initialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[t._v("#")]),t._v(" Initialization")]),t._v(" "),s("p",[t._v("The Selector Manager starts to collect data once componenets and styles are loaded. The default UI is displayed along with the default panels provided by GrapesJS core, in case you need to setup the editor with your own panels we recommend following the "),s("RouterLink",{attrs:{to:"/getting-started.html"}},[t._v("Getting Started")]),t._v(" guide.")],1),t._v(" "),s("p",[t._v("In the example below we init the editor with already provided components and styles.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("container")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#gjs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("storageManager")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("components")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\n    <div class="class-a">Element A</div>\n    <div class="class-a class-b">Element A-B</div>\n    <div class="class-a class-b class-c">Element A-B-C</div>\n  ')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n    .class-a { color: red }\n    .class-b { color: green }\n    .class-c { color: blue }\n  ")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Internally, the example above will provide to Selector Manager 3 selectors: "),s("code",[t._v("class-a")]),t._v(", "),s("code",[t._v("class-b")]),t._v(" and "),s("code",[t._v("class-c")]),t._v(".")]),t._v(" "),s("p",[t._v("Without any selected component, the Selector Manager UI is hidden by default (along with the Style Manager). By selecting the "),s("code",[t._v("Element A-B-C")]),t._v(" you will see the current selection of what will be actually styled.")]),t._v(" "),s("img",{staticStyle:{display:"block",margin:"auto"},attrs:{src:t.$withBase("/sm-selected-component.jpg"),alt:"Selected component"}}),t._v(" "),s("p",[t._v("The label "),s("strong",[t._v("Selected")]),t._v(" indicates on which CSS query styles will be applied, so if you try to change the color of the current selection, this is what you'll get in the final code:")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".class-a.class-b.class-c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #483acb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You can also disable specific selectors and change the state (eg. Hover) in order to switch the target of styling.")]),t._v(" "),s("img",{staticStyle:{display:"block",margin:"auto"},attrs:{src:t.$withBase("/sm-disable-selector.jpg"),alt:"Disabled selectors"}}),t._v(" "),s("h2",{attrs:{id:"component-first-selectors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-first-selectors"}},[t._v("#")]),t._v(" Component-first selectors")]),t._v(" "),s("p",[t._v("By default, selecting components with classes will indicate their selectors as target style. That means that any change in Style Manager will be applied to all components containing those "),s("strong",[t._v("Selected")]),t._v(" classes.")]),t._v(" "),s("p",[t._v("In case you need to select single components as style targets, you can enable "),s("code",[t._v("componentFirst")]),t._v(" option.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("selectorManager")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("componentFirst")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This option enables also the possibility to style multiple components and the ability to sync common selectors with the current component styles (the refresh icon).")]),t._v(" "),s("img",{staticStyle:{display:"block",margin:"auto"},attrs:{src:t.$withBase("/sm-component-first.jpg"),alt:"Component First"}}),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("With multiple selection, the Style Manager shows always styles of the last selected component.")])]),t._v(" "),s("h2",{attrs:{id:"programmatic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#programmatic-usage"}},[t._v("#")]),t._v(" Programmatic usage")]),t._v(" "),s("p",[t._v("If you need to manage your selectors programmatically you can use its "),s("RouterLink",{attrs:{to:"/api/selector_manager.html"}},[t._v("APIs")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"customization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[t._v("#")]),t._v(" Customization")]),t._v(" "),s("p",[t._v("The default UI can handle most of the common tasks but in case you need a more advanced logic/elements, that requires a replace of the default UI.")]),t._v(" "),s("p",[t._v("All you have to do is to indicate the editor your intent to use a custom UI and then subscribe to the "),s("code",[t._v("selector:custom")]),t._v(" event that will trigger on any necessary update of the UI.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("selectorManager")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("custom")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\neditor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'selector:custom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// props.container (HTMLElement) - The default element where you can append your UI")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here you would put the logic to render/update your UI.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("In the example below we'll replicate most of the default functionality by using solely the Selector Manager API.")]),t._v(" "),s("demo-viewer",{attrs:{value:"v8cgkLfr",height:"500",darkcode:""}}),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("p",[t._v("For a complete list of available events, you can check it "),s("RouterLink",{attrs:{to:"/api/selector_manager.html#available-events"}},[t._v("here")]),t._v(".")],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);
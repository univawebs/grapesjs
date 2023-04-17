(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{411:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"replace-the-built-in-rich-text-editor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replace-the-built-in-rich-text-editor"}},[t._v("#")]),t._v(" Replace the built-in Rich Text Editor")]),t._v(" "),s("p",[t._v("As you might have noticed the default Rich Text Editor (RTE) is really tiny and so doesn't seem like a complete solution as a text editor. Instead of showing how to add new commands inside the default one we'll show how to completely replace it with another one.")]),t._v(" "),s("p",[t._v("In the following guide we'll integrate the CKEditor and to accomplish this task we just need to provide few functions to the GrapesJS API method "),s("code",[t._v("setCustomRte")]),t._v(" as an interface.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#interface"}},[t._v("Interface")]),s("ul",[s("li",[s("a",{attrs:{href:"#enable"}},[t._v("Enable")])]),s("li",[s("a",{attrs:{href:"#disable"}},[t._v("Disable")])]),s("li",[s("a",{attrs:{href:"#focus"}},[t._v("Focus")])])])]),s("li",[s("a",{attrs:{href:"#toolbar-position"}},[t._v("Toolbar position")])]),s("li",[s("a",{attrs:{href:"#the-built-in-vs-third-party"}},[t._v("The built-in vs third-party")])]),s("li",[s("a",{attrs:{href:"#plugins"}},[t._v("Plugins")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interface"}},[t._v("#")]),t._v(" Interface")]),t._v(" "),s("h3",{attrs:{id:"enable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[t._v("#")]),t._v(" Enable")]),t._v(" "),s("p",[t._v("The first step is to indicate how to enable the third-party library and so for we gonna start with the "),s("code",[t._v("enable()")]),t._v(" function. This method should take care of the first initialization of our custom RTE but also for the next time is called on the same element, this is why there is the "),s("code",[t._v("rte")]),t._v(" argument.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" editor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\neditor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomRte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Enabling the custom RTE\n   * @param  {HTMLElement} el This is the HTML node which was selected to be edited\n   * @param  {Object} rte It's the instance you'd return from the first call of enable().\n   *                      At the first call it'd be undefined. This is useful when you need\n   *                      to check if the RTE is already enabled on the component\n   * @return {Object} The return should be the RTE initialized instance\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If already exists just focus")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rte"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implemented later")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rte"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CKEditor initialization")]),t._v("\n    rte "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CKEDITOR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your configurations...")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("toolbar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IMPORTANT")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generally, inline editors are attached exactly at the same position of")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the selected element but in this case it'd work until you start to scroll")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the canvas. For this reason you have to move the RTE's toolbar inside the")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// one from GrapesJS. For this purpose we used a plugin which simplify")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this process and move all next CKEditor's toolbars inside our indicated")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sharedSpaces")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RichTextEditor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getToolbarEl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implemented later")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rte"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"disable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable"}},[t._v("#")]),t._v(" Disable")]),t._v(" "),s("p",[t._v("Once we know how to enable the RTE let's implement the method which disable it, so let's create the "),s("code",[t._v("disable()")]),t._v(" function.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomRte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * The signature of the function is the same of the enable\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("disable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentEditable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rte "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rte"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rte"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("blur")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"focus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#focus"}},[t._v("#")]),t._v(" Focus")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("focus()")]),t._v(" method is just a helper used inside "),s("code",[t._v("enable()")]),t._v(" and not required by the interface")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomRte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do nothing if already focused")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rte "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rte"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasFocus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentEditable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rte "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rte"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"toolbar-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toolbar-position"}},[t._v("#")]),t._v(" Toolbar position")]),t._v(" "),s("p",[t._v("Sometimes the default top-left position of the toolbar is not always what you need. For example, when you scroll the canvas and the toolbar reaches the top,  you'd like to move it down. For this purpose, you can add a listener which applies your logic in this way:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rteToolbarPosUpdate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvasTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"the-built-in-vs-third-party"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-built-in-vs-third-party"}},[t._v("#")]),t._v(" The built-in vs third-party")]),t._v(" "),s("p",[t._v("The only one thing you have to keep in mind when using a custom RTE is that all the content and its behavior are handled by the library itself, the GrapesJS's component will just store the content as it is.\nFor example, when you create a link using the built-in RTE then you'll be able to select it and edit its "),s("code",[t._v("href")]),t._v(" via Component Settings. With a custom RTE, it will be its own task to show the proper modal for the link editing.\nObviously, each third-party library has its own APIs and can present some limitations and drawbacks, so, a minimal knowledge of the library is a plus.")]),t._v(" "),s("h2",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),s("p",[t._v("For the CKEditor, you can find a complete plugin here "),s("a",{attrs:{href:"https://github.com/GrapesJS/ckeditor",target:"_blank",rel:"noopener noreferrer"}},[t._v("grapesjs-plugin-ckeditor"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=e.exports}}]);
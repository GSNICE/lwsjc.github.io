(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{368:function(t,s,n){"use strict";n.r(s);var a=n(42),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),n("h2",{attrs:{id:"_1-uiview动画与核心动画的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-uiview动画与核心动画的区别"}},[t._v("#")]),t._v(" 1.UIView动画与核心动画的区别?")]),t._v(" "),n("ul",[n("li",[t._v("核心动画只作用在layer.")]),t._v(" "),n("li",[t._v("核心动画修改的值都是假像.它的真实位置没有发生变化.")]),t._v(" "),n("li",[t._v("当需要与用户进行交互时用UIView动画,不需要与用户进行交互时两个都可以.")])]),t._v(" "),n("h2",{attrs:{id:"_2-当我们要做一些基于-calayer-的动画时-有时需要设置-layer-的锚点来配合动画-这时候我们需要注意什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-当我们要做一些基于-calayer-的动画时-有时需要设置-layer-的锚点来配合动画-这时候我们需要注意什么"}},[t._v("#")]),t._v(" 2.当我们要做一些基于 CALayer 的动画时，有时需要设置 layer 的锚点来配合动画，这时候我们需要注意什么？")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("需要注意的是设置锚点会引起原来 position 的变化，可能会发生不符合预期的行为，所以要做一下转化，示例代码如下：")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为 layer 的动画设置不同的 anchor point，但是又不想改变 view 原来的 position，则需要做一些转换。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("setAnchorPoint"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CGPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("anchorPoint forView"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("view "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分别计算原来锚点和将更新的锚点对应的坐标点，这些坐标点是相对该 view 内部坐标系的。")]),t._v("\n    CGPoint oldPoint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGPointMake")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anchorPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                   view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anchorPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    CGPoint newPoint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGPointMake")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" anchorPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                   view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" anchorPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果当前 view 有做过 transform，这里要同步计算。")]),t._v("\n    oldPoint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGPointApplyAffineTransform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    newPoint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGPointApplyAffineTransform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// position 是当前 view 的 anchor point 在其父 view 的位置。")]),t._v("\n    CGPoint position "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// anchor point 的改变会造成 position 的改变，从而影响 view 在其父 view 的位置，这里把这个位移给计算回来。")]),t._v("\n    position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" newPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" oldPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" newPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" oldPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translatesAutoresizingMaskIntoConstraints "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anchorPoint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anchorPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置了新的 anchor point 会改变位置。")]),t._v("\n    view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过在 position 上做逆向偏移，把位置给移回来。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=o.exports}}]);
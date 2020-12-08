(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{374:function(_,v,t){"use strict";t.r(v);var e=t(42),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[_._v("#")]),_._v(" 设计模式")]),_._v(" "),t("h2",{attrs:{id:"_1-ios有哪些常见的设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-ios有哪些常见的设计模式"}},[_._v("#")]),_._v(" 1.iOS有哪些常见的设计模式?")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("单例模式：单例保证了应用程序的生命周期内仅有一个该类的实例对象,而且易于外界访问.在ios sdk中,UIApplication, NSBundle, NSNotificationCenter, NSFileManager, NSUserDefault, NSURLCache等都是单例.")])]),_._v(" "),t("li",[t("p",[_._v("委托模式：委托Delegate是协议的一种,通过@protocol方式实现，常见的有tableView，textField等。")])]),_._v(" "),t("li",[t("p",[_._v("观察者模式：观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。在iOS中,观察者模式的具体实现有两种: 通知机制(notification)和KVO机制(Key-value Observing)")])])]),_._v(" "),t("h2",{attrs:{id:"_2-单例会有什么弊端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-单例会有什么弊端"}},[_._v("#")]),_._v(" 2.单例会有什么弊端？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("主要优点：")]),_._v(" "),t("p",[_._v("1、提供了对唯一实例的受控访问。")]),_._v(" "),t("p",[_._v("2、由于在系统内存中只存在一个对象，因此可以节约系统资源，对于一些需要频繁创建和销毁的对象单例模式无疑可以提高系统的性能。")]),_._v(" "),t("p",[_._v("3、允许可变数目的实例。")])]),_._v(" "),t("li",[t("p",[_._v("主要缺点：")]),_._v(" "),t("p",[_._v("1、由于单利模式中没有抽象层，因此单例类的扩展有很大的困难。")]),_._v(" "),t("p",[_._v("2、单例类的职责过重，在一定程度上违背了“单一职责原则”。")]),_._v(" "),t("p",[_._v("3、滥用单例将带来一些负面问题，如为了节省资源将数据库连接池对象设计为的单例类，可能会导致共享连接池对象的程序过多而出现连接池溢出；如果实例化的对象长时间不被利用，系统会认为是垃圾而被回收，这将导致对象状态的丢失。")])])]),_._v(" "),t("h2",{attrs:{id:"_3-编程中的六大设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-编程中的六大设计原则"}},[_._v("#")]),_._v(" 3.编程中的六大设计原则？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("1.单一职责原则")]),_._v(" "),t("p",[_._v("通俗地讲就是一个类只做一件事")]),_._v(" "),t("p",[_._v("CALayer：动画和视图的显示。")]),_._v(" "),t("p",[_._v("UIView：只负责事件传递、事件响应。")])]),_._v(" "),t("li",[t("p",[_._v("2.开闭原则")]),_._v(" "),t("p",[_._v("对修改关闭，对扩展开放。 要考虑到后续的扩展性，而不是在原有的基础上来回修改")])]),_._v(" "),t("li",[t("p",[_._v("3.接口隔离原则")]),_._v(" "),t("p",[_._v("使用多个专门的协议、而不是一个庞大臃肿的协议，如 UITableviewDelegate + UITableViewDataSource")])]),_._v(" "),t("li",[t("p",[_._v("4.依赖倒置原则")]),_._v(" "),t("p",[_._v("抽象不应该依赖于具体实现、具体实现可以依赖于抽象。 调用接口感觉不到内部是如何操作的")])]),_._v(" "),t("li",[t("p",[_._v("5.里氏替换原则")]),_._v(" "),t("p",[_._v("父类可以被子类无缝替换，且原有的功能不受任何影响 如：KVO")])]),_._v(" "),t("li",[t("p",[_._v("6.迪米特法则")]),_._v(" "),t("p",[_._v("一个对象应当对其他对象尽可能少的了解，实现高聚合、低耦合")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{917:function(t,s,a){"use strict";a.r(s);var n=a(22),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_2-creating-and-destroying-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-creating-and-destroying-objects"}},[t._v("#")]),t._v(" 2. Creating and Destroying Objects")]),t._v(" "),a("h3",{attrs:{id:"item-1-consider-static-factory-methods-instead-of-constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-1-consider-static-factory-methods-instead-of-constructors"}},[t._v("#")]),t._v(" Item 1: Consider static factory methods instead of constructors")]),t._v(" "),a("p",[t._v("编写为一个 class 实例化 instance 的方式通常有两种：")]),t._v(" "),a("ul",[a("li",[t._v("提供一个 "),a("em",[t._v("public constructor")])]),t._v(" "),a("li",[t._v("提供一个 "),a("em",[t._v("public static factory method")])])]),t._v(" "),a("p",[t._v("两者各有优缺点，根据不同的场景，选择一个合适的实例化方法。")]),t._v(" "),a("h3",{attrs:{id:"item-2-consider-a-builder-when-faced-with-many-constructor-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-2-consider-a-builder-when-faced-with-many-constructor-parameters"}},[t._v("#")]),t._v(" Item 2: Consider a builder when faced with many constructor parameters")]),t._v(" "),a("p",[t._v("静态工厂和构造器都无法很好地适应存在大量"),a("strong",[t._v("可选")]),t._v("参数的情况。这一节介绍了三种用来生成这种对象的模式，并进行比较，体现了 Builder 模式在这种情况下的优点。")]),t._v(" "),a("p",[t._v("三种用来构建存在大量可选参数的模式：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("telescoping constructor")]),t._v(" pattern：先写一个有所有必选参数的 ctor，然后写一个带所有参数和一个可选参数的 ctor，再写一个带所有参数和两个可选参数的 ctor，....，直至在一个 ctor 里有所有的可选参数。")]),t._v(" "),a("li",[a("strong",[t._v("JavaBeans")]),t._v(" pattern：ctor 是无参的，调用 ctor 后再通过各 setter 方法来设置各个成员变量。")]),t._v(" "),a("li",[a("strong",[t._v("Builder")]),t._v(" pattern：在 class 内写一个 Builder 类，并通过它的 "),a("code",[t._v("build()")]),t._v(" 方法来生成我们需要的实例。")])]),t._v(" "),a("p",[t._v("Builder pattern 对于调用者来说可读性更好，并很好地与类的继承体系进行融合，如何编写出 Builder 可以参考原文。")]),t._v(" "),a("blockquote",[a("p",[t._v("这部分原文讲的很好，并涉及了如何编写类的泛型。")])]),t._v(" "),a("h3",{attrs:{id:"item-3-enforce-the-singleton-property-with-a-private-constructor-or-an-enum-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-3-enforce-the-singleton-property-with-a-private-constructor-or-an-enum-type"}},[t._v("#")]),t._v(" Item 3: Enforce the singleton property with a private constructor or an enum type")]),t._v(" "),a("p",[t._v("这节主要介绍了在实现 "),a("em",[t._v("singleton")]),t._v(" 的常见方法和注意事项。")]),t._v(" "),a("p",[t._v("两种常见方式：")]),t._v(" "),a("ul",[a("li",[t._v("方式 1：有一个 "),a("code",[t._v("public static final")]),t._v(" 的属性 INSTANCE，并通过自身的私有构造器来初始化为单例。")]),t._v(" "),a("li",[t._v("方式 2：有一个 "),a("code",[t._v("private static final")]),t._v(" 的属性 INSTANCE 并被私有构造器初始化，然后写一个静态工厂 "),a("code",[t._v("getInstance()")]),t._v(" 用来获得这个单例。")])]),t._v(" "),a("blockquote",[a("p",[t._v("其实还经常使用“双重检查锁”的方法来实现单例。")])]),t._v(" "),a("p",[t._v("实现单例的注意点：")]),t._v(" "),a("ul",[a("li",[t._v("使用者也许会通过反射来获取私有构造器进而破坏单例。\n"),a("ul",[a("li",[t._v("预防方法：让 ctor 在第二次被调用时抛出异常")])])]),t._v(" "),a("li",[t._v("对 singleton 序列化再反序列化后，可以获得新的实例，从而破坏了单例\n"),a("ul",[a("li",[t._v("预防方法：修改 "),a("code",[t._v("readResolve()")]),t._v(" 方法，让其也直接返回已有的单例")])])])]),t._v(" "),a("p",[t._v("之后原文重点介绍了通过声明 "),a("strong",[t._v("a single-element enum")]),t._v(" 的方式来实现单例：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Elvis")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    INSTANCE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("customMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("这种方式可以抵御因序列化、反射而导致的破坏单例的攻击，但无法让你的 class 去继承一个非 Enum 的 superclass。如果可以，"),a("font",{attrs:{color:"blue"}},[t._v("a single-element enum type is often the best way to implement a singleton")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"item-4-enforce-noninstantiability-with-a-private-constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-4-enforce-noninstantiability-with-a-private-constructor"}},[t._v("#")]),t._v(" Item 4: Enforce noninstantiability with a private constructor")]),t._v(" "),a("p",[t._v("往往我们会写一些 utility classes，这种 class 里面是一堆 static methods 和 static fields，他们不被设计为可以实例化的。")]),t._v(" "),a("p",[t._v("然而 Java 编译器会默认为 class 生成 public、parameterless 的 ctor，为了防止有人将其实例化，我们可以"),a("strong",[t._v("为这种类编写一个显式的 private 无参构造器")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Noninstantiable utility class")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UtilityClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Suppress default constructor for noninstantiability")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UtilityClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AssertionError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Remainder omitted")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("这样就不会有人能够实例化或继承这个类了。")]),t._v(" "),a("h3",{attrs:{id:"item-5-prefer-dependency-injection-to-hardwiring-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-5-prefer-dependency-injection-to-hardwiring-resources"}},[t._v("#")]),t._v(" Item 5: Prefer dependency injection to hardwiring resources")]),t._v(" "),a("p",[a("strong",[t._v("依赖注入")]),t._v("就是在创建这个类时将它所依赖的其他类传递（pass）进去。区别于依赖注入的方式是这个类在内部把自己依赖的其他类给创建出来，而不是通过外界传入进去的方式。")]),t._v(" "),a("p",[t._v("最简单的注入方法就是在构造器方法中声明它所依赖的类，并在调用构造器实例化时完成依赖的注入。如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpellChecker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lexion")]),t._v(" dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpellChecker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lexicon")]),t._v(" dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Objects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireNonNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("这里的 dependency injection 不要局限于 Spring 的依赖注入。")])]),t._v(" "),a("h3",{attrs:{id:"item-6-avoid-creating-unnecessary-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-6-avoid-creating-unnecessary-objects"}},[t._v("#")]),t._v(" Item 6: Avoid creating unnecessary objects")]),t._v(" "),a("p",[t._v("复用一个 single object 是比每次创建一个新的 functionally equivalent object 更好的。")]),t._v(" "),a("ul",[a("li",[t._v("static factory methods 能帮助我们避免创建不必要的实例。")]),t._v(" "),a("li",[t._v("很多你看不见的地方会偷偷创建实例，比如 String 的 "),a("code",[t._v("match()")]),t._v(" 方法内部会每次调用时创建一个 Pattern 实例用于正则匹配，而且用一次后就扔。")]),t._v(" "),a("li",[t._v("为了节省一两个对象的创建开销而使用惰性初始化技术是得不偿失的。")]),t._v(" "),a("li",[a("strong",[t._v("不可变类")]),t._v("是可以安全地复用的。")]),t._v(" "),a("li",[t._v("为了避免 object 的创建而维护一个你自己的 object pool 是得不偿失的。")])]),t._v(" "),a("h3",{attrs:{id:"item-7-eliminate-obsolete-object-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-7-eliminate-obsolete-object-references"}},[t._v("#")]),t._v(" Item 7: Eliminate obsolete object references")]),t._v(" "),a("p",[a("strong",[t._v("Null out references once they become obsolete.")])]),t._v(" "),a("p",[t._v("但是，Nulling out object references should be the exception rather than the norm. 消除引用的最好方式是让引用这个 object 的变量自然地 fall out of scope。")]),t._v(" "),a("blockquote",[a("p",[t._v("Cache 的维护容易出现内存泄漏。如果你的 cache entry 的生命周期取决于 key 的外部引用，而不取决于 value，那使用 "),a("strong",[t._v("WeakHashMap")]),t._v(" 来实现 cache 是一个很好地选择。")])]),t._v(" "),a("h3",{attrs:{id:"item-8-avoid-finalizers-and-cleaners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-8-avoid-finalizers-and-cleaners"}},[t._v("#")]),t._v(" Item 8: Avoid finalizers and cleaners")]),t._v(" "),a("p",[t._v("finalizer 和 cleaner 都不是啥好东西，如果不是很了解他们的行为，那都不要用。")]),t._v(" "),a("p",[t._v("如果你需要在实例使用完后关闭一些资源，实现 AutoCloseable 是更好的选择。")]),t._v(" "),a("h3",{attrs:{id:"item-9-prefer-try-with-resources-to-try-finally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-9-prefer-try-with-resources-to-try-finally"}},[t._v("#")]),t._v(" Item 9: Prefer try-with-resources to try-finally")]),t._v(" "),a("p",[t._v("关闭资源的最好编码风格是 try-with-resources 的方式，尤其是需要关闭多个资源时。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// try-with-resources on multiple resources - short and sweet")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" dst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileInputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OutputStream")]),t._v(" out "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileOutputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("BUFFER_SIZE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
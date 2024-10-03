(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{910:function(a,t,s){"use strict";s.r(t);var n=s(22),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-日志框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-日志框架"}},[a._v("#")]),a._v(" 1. 日志框架")]),a._v(" "),s("h3",{attrs:{id:"_1-1-日志技术概述概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-日志技术概述概述"}},[a._v("#")]),a._v(" 1.1 日志技术概述概述")]),a._v(" "),s("p",[a._v("程序中的"),s("strong",[a._v("日志")]),a._v("可以用来记录程序运行过程中的信息，并可以进行永久存储。")]),a._v(" "),s("p",[a._v("print 语句的弊端：")]),a._v(" "),s("ul",[s("li",[a._v("信息只能展示在控制台")]),a._v(" "),s("li",[a._v("不能将其记录到其他的位置（文件，数据库）")]),a._v(" "),s("li",[a._v("想取消记录的信息需要修改代码才可以完成")])]),a._v(" "),s("p",[a._v("日志技术的优势：")]),a._v(" "),s("ul",[s("li",[a._v("可以将系统执行的信息选择性的记录到指定的位置（控制台、文件中、数据库中）。")]),a._v(" "),s("li",[a._v("可以随时以开关的形式控制是否记录日志，无需修改源代码。")])]),a._v(" "),s("h3",{attrs:{id:"_1-2-日志技术体系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-日志技术体系"}},[a._v("#")]),a._v(" 1.2 日志技术体系")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220201160223185.png",alt:"image-20220201160223185"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("日志规范")]),a._v("：一些"),s("u",[a._v("接口")]),a._v("，提供给日志的实现框架设计的标准。")]),a._v(" "),s("li",[s("strong",[a._v("日志框架")]),a._v("：牛人或者第三方公司已经做好的日志记录实现代码，后来者直接可以拿去使用。")])]),a._v(" "),s("blockquote",[s("p",[a._v("因为对 Commons Logging 的接口不满意，有人就搞了 Slf4j。因为对 Log4j 的性能不满意，有人就搞了 Logback。我们首先重点学习 Logback。")])]),a._v(" "),s("h3",{attrs:{id:"_1-3-logback-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-logback-概述"}},[a._v("#")]),a._v(" 1.3 Logback 概述")]),a._v(" "),s("p",[a._v("Logback 是由 log4j 创始人设计的另一个开源日志组件，性能比 log4j 要好，是基于 slf4j 的日志规范实现的框架。")]),a._v(" "),s("p",[a._v("Logback 主要分为三个技术模块：")]),a._v(" "),s("ol",[s("li",[a._v("logback-core： logback-core 模块为其他两个模块奠定了基础，必须有。")]),a._v(" "),s("li",[a._v("logback-classic：它是 log4j 的一个改良版本，同时它完整实现了 slf4j API。")]),a._v(" "),s("li",[a._v("logback-access 模块与 Tomcat 和 Jetty 等 Servlet 容器集成，以提供 HTTP 访问日志功能。")])]),a._v(" "),s("h3",{attrs:{id:"_1-4-logback-快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-logback-快速入门"}},[a._v("#")]),a._v(" 1.4 Logback 快速入门")]),a._v(" "),s("p",[s("strong",[a._v("需求")]),a._v("：导入 Logback 日志技术到项目中，用于纪录系统的日志信息。")]),a._v(" "),s("p",[s("strong",[a._v("分析")]),a._v("：")]),a._v(" "),s("ol",[s("li",[a._v("在项目下新建文件夹lib，导入 Logback 的相关 jar 包到该文件夹下，并添加到项目依赖库中去。")])]),a._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220201161034330.png",alt:"image-20220201161034330"}}),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[a._v("将 Logback 的核心配置文件 "),s("strong",[a._v("logback.xml")]),a._v(" 直接拷贝到src目录下（必须是src下）。")])]),a._v(" "),s("li",[s("p",[a._v("在代码中获取日志的对象：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Logger")]),a._v(" LOGGER "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"类对象"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("使用日志对象 LOGGER 调用其方法输出不能的日志信息。")])])]),a._v(" "),s("h3",{attrs:{id:"_1-5-配置详解-输出位置、格式设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-配置详解-输出位置、格式设置"}},[a._v("#")]),a._v(" 1.5 配置详解——输出位置、格式设置")]),a._v(" "),s("p",[a._v("Logback 日志系统的特性都是通过核心配置文件 logback.xml 控制的。")]),a._v(" "),s("p",[a._v("Logback 日志"),s("strong",[a._v("输出位置、格式设置")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("通过 logback.xml 中的"),s("code",[a._v("<append>")]),a._v("标签可以设置输出位置和日志信息的详细格式；")]),a._v(" "),s("li",[a._v("通常可以设置2个日志输出位置："),s("strong",[a._v("一个是控制台，一个是系统文件中")])])]),a._v(" "),s("p",[a._v("输出到控制台的配置标志：")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("appender")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("CONSOLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("ch.qos.logback.core.ConsoleAppender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("输出到系统文件的配置标志：")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("appender")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("FILE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("ch.qos.logback.core.rolling.RollingFileAppender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-6-配置详解-日志级别设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-配置详解-日志级别设置"}},[a._v("#")]),a._v(" 1.6 配置详解——日志级别设置")]),a._v(" "),s("blockquote",[s("p",[a._v("Q：如果系统上线后只想记录一些错误的日志信息或者不想记录日志了，怎么办？")]),a._v(" "),s("p",[a._v("A：可以通过设置日志的输出级别来控制哪些日志信息输出或者不输出。")])]),a._v(" "),s("p",[s("strong",[a._v("日志级别")]),a._v("依次是：TRACE < DEBUG < INFO < WARN < ERROR ; 默认级别是 debug（忽略大小写），对应其方法。")]),a._v(" "),s("p",[s("strong",[a._v("作用")]),a._v("：用于控制系统中哪些日志级别是可以输出的，只输出级别不低于设定级别的日志信息。")]),a._v(" "),s("ul",[s("li",[a._v("ALL 和 OFF 分别是打开全部日志信息，及关闭全部日志信息")])]),a._v(" "),s("p",[a._v("具体是在 "),s("code",[a._v('<root level="INFO">')]),a._v(" 标签的 level 属性中设置日志级别：")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v('<root level=“INFO">\n    '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("appender-ref")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("CONSOLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("appender-ref")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("FILE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
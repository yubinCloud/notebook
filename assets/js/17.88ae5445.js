(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1067:function(t,s,a){"use strict";a.r(s);var v=a(22),A=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_3-7-1-运行时栈"}},[t._v("3.7.1 运行时栈")])]),v("li",[v("a",{attrs:{href:"#_3-7-2-转移控制"}},[t._v("3.7.2 转移控制")])]),v("li",[v("a",{attrs:{href:"#_3-7-3-数据传送"}},[t._v("3.7.3 数据传送")])]),v("li",[v("a",{attrs:{href:"#_3-7-4-栈上的局部存储"}},[t._v("3.7.4 栈上的局部存储")])]),v("li",[v("a",{attrs:{href:"#_3-7-5-寄存器中的局部存储空间"}},[t._v("3.7.5 寄存器中的局部存储空间")]),v("ul",[v("li",[v("a",{attrs:{href:"#被调用者保存寄存器"}},[t._v("被调用者保存寄存器")])]),v("li",[v("a",{attrs:{href:"#调用者保存寄存器"}},[t._v("调用者保存寄存器")])])])]),v("li",[v("a",{attrs:{href:"#_3-7-6-递归过程"}},[t._v("3.7.6 递归过程")])])])]),v("p"),t._v(" "),v("h1",{attrs:{id:"_3-7-过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-过程"}},[t._v("#")]),t._v(" 3.7 过程")]),t._v(" "),v("p",[t._v("过程是软件的一种很重要的抽象，它提供了一种封装代码的方式，用一组参数和一个可选返回值实现了某种功能。在不同编程语言中，过程形式多样：函数（function）、方法（method）、子例程（subroutine）、处理函数（handler）等，但它们有一些共有特性。")]),t._v(" "),v("p",[t._v("假设过程 P 调用过程 Q，Q 执行后返回到 P，这些动作包括下面一个或多个机制：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("传递控制")]),t._v("：PC 指向 Q")]),t._v(" "),v("li",[v("strong",[t._v("传递数据")])]),t._v(" "),v("li",[v("strong",[t._v("分配和释放内存")]),t._v("：开始前 Q 为局部变量等分配空间，返回前又必须释放")])]),t._v(" "),v("h2",{attrs:{id:"_3-7-1-运行时栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-1-运行时栈"}},[t._v("#")]),t._v(" 3.7.1 运行时栈")]),t._v(" "),v("p",[t._v("栈和程序寄存器存放着传递控制和数据、分配内存所需要的信息。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(526),alt:""}})]),t._v(" "),v("ul",[v("li",[t._v("将栈指针减小一个适当的量就可以为没有指定初始值的数据在栈上分配空间。类似地，也可以通过增加栈指针来释放空间。")]),t._v(" "),v("li",[t._v("当 x86-64 过程所需要的存储空间超过寄存器能够存放的大小时，就会在栈上分配空间。这个部分称为过程的"),v("strong",[t._v("栈帧")]),t._v("，即栈中单个过程实例的状态数据。")]),t._v(" "),v("li",[t._v("当前正在执行的过程的帧总是在栈顶。")]),t._v(" "),v("li",[t._v("为了提高空间和效率，x86-64 过程只分配自己所需要的栈帧部分。比如参数全部可以通过 reg 来传递。实际上有的函数根本不需要栈帧。")])]),t._v(" "),v("h2",{attrs:{id:"_3-7-2-转移控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-2-转移控制"}},[t._v("#")]),t._v(" 3.7.2 转移控制")]),t._v(" "),v("p",[t._v("将控制从函数 P 转移到 Q，可以通过 call Q 指令来实现，这个指令会把地址 A 压入栈中，并把 PC 设置为 Q 的起始地址。压入的地址 A 称为"),v("strong",[t._v("返回地址")]),t._v("，是"),v("u",[t._v("紧跟在 call 指令后面的那条指令的地址")]),t._v(" "),v("a-tag",{attrs:{color:"blue"}},[t._v("易错")]),t._v("。")],1),t._v(" "),v("p",[v("img",{attrs:{src:a(527),alt:""}})]),t._v(" "),v("p",[t._v("call 指令有一个目标，直接调用的目标是一个标号，而间接调用的目标是 "),v("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[v("mjx-math",{staticClass:" MJX-TEX"},[v("mjx-mo",{staticClass:"mjx-n"},[v("mjx-c",{attrs:{c:"2217"}})],1)],1)],1),t._v(" 后面紧跟一个操作数指示符。")],1),t._v(" "),v("details",{staticClass:"custom-block details"},[v("summary",[t._v("转移控制示例")]),t._v(" "),v("p",[t._v("有下面的汇编代码，main 调用了 multstore：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(528),alt:""}})]),t._v(" "),v("p",[t._v("其执行情况是：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(529),alt:""}})])]),t._v(" "),v("p",[t._v("可以看到，这种把返回地址压入栈的简单机制能够让函数在稍后返回到程序中正确的点（即调用完后会使栈恢复至调用前的状态）。")]),t._v(" "),v("h2",{attrs:{id:"_3-7-3-数据传送"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-3-数据传送"}},[t._v("#")]),t._v(" 3.7.3 数据传送")]),t._v(" "),v("p",[t._v("x86-64 中大部分过程见的数据传送是通过寄存器实现的。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(530),alt:""}})]),t._v(" "),v("ul",[v("li",[t._v("寄存器是按照特殊顺序来使用的，而使用的名字是根据参数的大小来确定的。")])]),t._v(" "),v("p",[t._v("如果一个函数有大于 6 个整型参数，那超出部分要通过栈来传递。要把参数 1-6 复制到对应的寄存器，把参数 7-n 放到栈上，而参数 7 位于栈顶。通过栈传递参数时，所有的数据大小都向 8 的倍数对齐。参数就放在图 3-25 中“参数构造区”的区域。")]),t._v(" "),v("details",{staticClass:"custom-block details"},[v("summary",[t._v("Example")]),t._v(" "),v("p",[t._v("C 函数：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(531),alt:""}})]),t._v(" "),v("p",[t._v("生成的汇编代码：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(532),alt:""}})])]),t._v(" "),v("h2",{attrs:{id:"_3-7-4-栈上的局部存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-4-栈上的局部存储"}},[t._v("#")]),t._v(" 3.7.4 栈上的局部存储")]),t._v(" "),v("p",[t._v("有些时候，局部数据必须存放到内存上，常见的情况包括：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("寄存器不足")]),t._v("以存放所有本地数据；")]),t._v(" "),v("li",[t._v("对一个局部变量"),v("strong",[t._v("取地址")]),t._v("，因此必须能够为它产生一个地址；")]),t._v(" "),v("li",[t._v("某些局部变量是"),v("strong",[t._v("数组或结构")]),t._v("，因此必须能够通过数组或结构引用被访问到。")])]),t._v(" "),v("p",[t._v("一般来说，过程通过减少栈指针在栈上分配空间，分配的结果作为栈帧的一部分，标号为“局部变量”。过程返回时要释放掉所分配的空间。")]),t._v(" "),v("h2",{attrs:{id:"_3-7-5-寄存器中的局部存储空间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-5-寄存器中的局部存储空间"}},[t._v("#")]),t._v(" 3.7.5 寄存器中的局部存储空间")]),t._v(" "),v("p",[t._v("寄存器是唯一被所有过程共享的资源，因此必须采用统一的寄存器使用惯例，所有的过程都必须遵循：")]),t._v(" "),v("h3",{attrs:{id:"被调用者保存寄存器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#被调用者保存寄存器"}},[t._v("#")]),t._v(" 被调用者保存寄存器")]),t._v(" "),v("p",[t._v("寄存器%rbx、%rbp 和 %r12 ~ %r15 被划分为"),v("strong",[t._v("被调用者保存寄存器")]),t._v("。")]),t._v(" "),v("p",[t._v("当过程 P 调用 Q 时，Q 必须保存这些寄存器的值，保证在返回给 Q 时内容不变。这是 Q 可以：")]),t._v(" "),v("ul",[v("li",[t._v("要么根本不去改变它；")]),t._v(" "),v("li",[t._v("要么把原始值压入栈帧中的“被保存的寄存器”部分，返回前在弹出旧值恢复。（注意弹出顺序与压入顺序相反）")])]),t._v(" "),v("h3",{attrs:{id:"调用者保存寄存器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调用者保存寄存器"}},[t._v("#")]),t._v(" 调用者保存寄存器")]),t._v(" "),v("p",[t._v("所有其他寄存器，除了栈指针 %rsp，都分类为"),v("strong",[t._v("调用者保存寄存器")]),t._v("。")]),t._v(" "),v("p",[t._v("这意味着任何函数都能修改他们。在调用之前保存好这些数据是调用者 P 的责任。")]),t._v(" "),v("h2",{attrs:{id:"_3-7-6-递归过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-6-递归过程"}},[t._v("#")]),t._v(" 3.7.6 递归过程")]),t._v(" "),v("p",[t._v("递归调用一个函数本身与调用其他函数一样。栈规则提供了一种机制，每次函数调用都有它自己私有的状态信息，如果需要，它还可以提供局部变量的存储。")])])}),[],!1,null,null,null);s.default=A.exports},526:function(t,s,a){t.exports=a.p+"assets/img/2021-07-20-17-19-19.b9b64aba.png"},527:function(t,s){t.exports="data:image/png;base64,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"},528:function(t,s,a){t.exports=a.p+"assets/img/2021-07-20-18-55-20.dd12941b.png"},529:function(t,s,a){t.exports=a.p+"assets/img/2021-07-20-18-56-38.a4f7ab5c.png"},530:function(t,s,a){t.exports=a.p+"assets/img/2021-07-20-18-59-36.8604bac6.png"},531:function(t,s,a){t.exports=a.p+"assets/img/2021-07-20-19-03-25.0912cf3b.png"},532:function(t,s,a){t.exports=a.p+"assets/img/2021-07-20-19-03-52.6883b33f.png"}}]);
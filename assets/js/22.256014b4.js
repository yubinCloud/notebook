(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1077:function(t,_,a){"use strict";a.r(_);var e=a(22),v=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_8-1-异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-异常"}},[t._v("#")]),t._v(" 8.1 异常")]),t._v(" "),e("p",[t._v("处理器中每条指令的过渡称为"),e("strong",[t._v("控制转移")]),t._v("，这样的控制转移序列叫做处理器的"),e("strong",[t._v("控制流")]),t._v("。")]),t._v(" "),e("p",[t._v("用来响应某些处理器状态变化的控制流的突变称为"),e("strong",[t._v("异常控制流（ECF）")]),t._v("，状态变化称为"),e("strong",[t._v("事件")]),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("异常控制流发生在计算机系统的各个层次。在高层中，如"),e("u",[t._v("进程切换")]),t._v("（OS+硬件定时器实现）、"),e("u",[t._v("信号到来")]),t._v("（OS实现）、"),e("u",[t._v("非本地跳转")]),t._v("（C运行库实现）；在低层中，如"),e("u",[t._v("异常")]),t._v("（OS+硬件实现）。")]),t._v(" "),e("li",[t._v("事件可能和当前指令的执行直接相关，如缺页、算术溢出等；也可能和当前指令的执行无关，如系统定时器产生信号、IO请求完成。")])]),t._v(" "),e("p",[t._v("事件发生时，处理器通过"),e("strong",[t._v("异常表")]),t._v("进行间接过程调用一个"),e("strong",[t._v("异常处理程序")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_8-1-1-异常的处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-1-异常的处理"}},[t._v("#")]),t._v(" 8.1.1 异常的处理")]),t._v(" "),e("p",[t._v("每个异常有一个唯一的"),e("strong",[t._v("异常号")]),t._v("。")]),t._v(" "),e("p",[t._v("系统启动时，操作系统分配和初始化一张称为"),e("strong",[t._v("异常表")]),t._v("的跳转表，使得表目 k 包含异常 k 的处理程序的地址。异常号是到异常表的索引，异常表的起始地址放在"),e("strong",[t._v("异常表基址寄存器")]),t._v("中。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(641),alt:"image-20211207124147205"}})]),t._v(" "),e("p",[t._v("一旦硬件触发异常，剩下的工作就是由异常处理程序在软件中完成。处理完后通过执行“从中断返回”指令，可选地返回到被中断的程序。")]),t._v(" "),e("h3",{attrs:{id:"_8-1-2-异常的类别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-2-异常的类别"}},[t._v("#")]),t._v(" 8.1.2 异常的类别")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("类别")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("原因")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("异步/同步")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("返回行为")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("中断")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("来自 I/O 设备的信号")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("异步")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("总是返回到下一条指令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("陷阱")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("有意的异常，是执行一条指令的结果")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("同步")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("总是返回到下一条指令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("故障")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("潜在的可恢复的错误，如缺页")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("同步")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("可能返回到当前指令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("终止")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不可恢复的错误，如硬件错误")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("同步")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不会返回")])])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("异步异常")]),t._v("是由处理器外部的 I/O 设备中的事件产生的，"),e("strong",[t._v("同步异常")]),t._v("是执行一条指令的直接产物。")])]),t._v(" "),e("h4",{attrs:{id:"_1-中断-interrupt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-中断-interrupt"}},[t._v("#")]),t._v(" 1）中断（interrupt）")]),t._v(" "),e("p",[t._v("硬件中断不是由任何一条专门的指令造成的，是来自处理器外部的 I/O 设备的信号的结果。硬件中断的异常处理程序也叫"),e("strong",[t._v("中断处理程序")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(642),alt:"image-20211207125113138"}})]),t._v(" "),e("h4",{attrs:{id:"_2-陷阱-trap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-陷阱-trap"}},[t._v("#")]),t._v(" 2）陷阱（trap）")]),t._v(" "),e("p",[t._v("为了允许对操作系统内核服务的受控访问，处理器提供了"),e("code",[t._v("syscall n")]),t._v("指令，执行该指令会导致一个到异常处理程序的陷阱，处理程序解析参数并调用适当的内核程序。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(643),alt:"image-20211207125323810"}})]),t._v(" "),e("h4",{attrs:{id:"_3-故障-fault"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-故障-fault"}},[t._v("#")]),t._v(" 3）故障（fault）")]),t._v(" "),e("p",[t._v("故障由错误情况引起，它可能能够被故障处理程序修正。能修正就在返回后重新执行指令；不能修正则返回到内核的 abort 例程，从而终止应用程序。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(644),alt:"image-20211207125544806"}})]),t._v(" "),e("p",[t._v("一个经典的故障示例是缺页异常。发生缺页时引发故障，缺页处理程序从磁盘加载适当的页面后将控制重新返回给引起故障的指令，从而可以正常继续运行了。")]),t._v(" "),e("h4",{attrs:{id:"_4-终止-abort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-终止-abort"}},[t._v("#")]),t._v(" 4）终止（abort）")]),t._v(" "),e("p",[t._v("终止是不可恢复的致命错误造成的结果，通常是一些硬件错误。终止处理程序从不将控制返回给应用程序。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(645),alt:"image-20211207125812604"}})])])}),[],!1,null,null,null);_.default=v.exports},641:function(t,_,a){t.exports=a.p+"assets/img/image-20211207124147205.fbf21246.png"},642:function(t,_,a){t.exports=a.p+"assets/img/image-20211207125113138.645489b2.png"},643:function(t,_,a){t.exports=a.p+"assets/img/image-20211207125323810.7c65a622.png"},644:function(t,_,a){t.exports=a.p+"assets/img/image-20211207125544806.839cba68.png"},645:function(t,_,a){t.exports=a.p+"assets/img/image-20211207125812604.87cb7617.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{903:function(e,t,a){"use strict";a.r(t);var s=a(22),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_1-试验环境概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-试验环境概要"}},[e._v("#")]),e._v(" 1. 试验环境概要")]),e._v(" "),a("p",[e._v("本书中安全隐患用例的运行环境：")]),e._v(" "),a("ul",[a("li",[e._v("Linux（Ubuntu 10.04）")]),e._v(" "),a("li",[e._v("Apache 2.2")]),e._v(" "),a("li",[e._v("PHP 5.3")]),e._v(" "),a("li",[e._v("PostgreSQL 8.4")]),e._v(" "),a("li",[e._v("Postfix 等兼容 Sendmail 的电子邮件服务器")])]),e._v(" "),a("p",[e._v("使用 VMware 搭建环境作为 Linux 服务器。")]),e._v(" "),a("h2",{attrs:{id:"_2-运行虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行虚拟机"}},[e._v("#")]),e._v(" 2. 运行虚拟机")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.ituring.com.cn/book/1249",target:"_blank",rel:"noopener noreferrer"}},[e._v("随书代码下载"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("其中 WASBOOK.zip 中存在 "),a("code",[e._v("wasbook.vmx")]),e._v("，启动 VMware 打开它即可。第一次启动时选择“我已移动该虚拟机”。之后会出现 wasbook login 的登录提示，说明启动完成，此时输入用户名 root 和密码 wasbook 即可登陆成功。")]),e._v(" "),a("p",[e._v("执行 "),a("code",[e._v("ifconfig")]),e._v(" 命令，查看 eth0 中的 inet addr，这是它的 IP 地址，之后修改 hosts 文件需要它。")]),e._v(" "),a("p",[e._v("之后编辑本机的 hosts 文件，加入刚刚 ifconfig 看到的 IP 地址是 192.168.1.128，那么在 hosts 文件中加入下面一行：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("192.168.1.128   example.jp   trap.example.com\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("然后使用 ping 来测试连接是否成功：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ping")]),e._v(" example.jp \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("确认 Apache 与 PHP 的运行：在宿主机 Windows 上打开网址 "),a("code",[e._v("http://example.jp/phpinfo.php")]),e._v("，就可以看到网页页面。")]),e._v(" "),a("h2",{attrs:{id:"_3-安装-fiddler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-fiddler"}},[e._v("#")]),e._v(" 3. 安装 Fiddler")]),e._v(" "),a("p",[e._v("启动 Fiddler 后，用浏览器打开 "),a("code",[e._v("http://example.jp/phpinfo.php")]),e._v("（虚拟机上的网页），可以在 Fiddler 中查看到该信息。在 Fiddler 的 “Inspect” 和 “Raw” 等中可以看到 HTTP 的原始状态。")])])}),[],!1,null,null,null);t.default=r.exports}}]);
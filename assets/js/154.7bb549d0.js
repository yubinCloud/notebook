(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{906:function(t,e,a){"use strict";a.r(e);var r=a(22),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("转自："),a("a",{attrs:{href:"https://github.com/TideSec/TideFinger",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web指纹识别技术研究与优化实现"),a("OutboundLink")],1),t._v("，作者 "),a("em",[t._v("TIde安全团队重剑无锋")])])]),t._v(" "),a("p",[t._v("本文通过分析web指纹的检测对象、检测方法、检测原理及常用工具，设计了一个简易的指纹搜集脚本来协助发现新指纹，并提取了多个开源指纹识别工具的规则库并进行了规则重组，开发了一个简单快捷的指纹识别小工具TideFinger，并实现了一套在线的指纹识别平台“潮汐指纹”，希望能为大家带来方便。")]),t._v(" "),a("h2",{attrs:{id:"_1-前沿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前沿"}},[t._v("#")]),t._v(" 1. 前沿")]),t._v(" "),a("p",[t._v("在 web 渗透过程中，Web 指纹识别是信息收集环节中一个比较重要的步骤，通过一些开源的工具、平台或者手工检测 CMS 系统是公开的 CMS 程序还是二次开发至关重要，能准确的获取 CMS 类型、Web 服务组件类型及版本信息可以帮助安全工程师快速有效的去验证已知漏洞。")]),t._v(" "),a("h2",{attrs:{id:"_2-常见指纹检测的对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见指纹检测的对象"}},[t._v("#")]),t._v(" 2. 常见指纹检测的对象")]),t._v(" "),a("p",[t._v("1、CMS信息：比如大汉CMS、织梦、帝国CMS、phpcms、ecshop等；")]),t._v(" "),a("p",[t._v("2、前端技术：比如HTML5、jquery、bootstrap、pure、ace等；")]),t._v(" "),a("p",[t._v("3、Web服务器：比如Apache、lighttpd, Nginx, IIS等；")]),t._v(" "),a("p",[t._v("4、应用服务器：比如Tomcat、Jboss、weblogic、websphere等；")]),t._v(" "),a("p",[t._v("5、开发语言：比如PHP、Java、Ruby、Python、C#等；")]),t._v(" "),a("p",[t._v("6、操作系统信息：比如linux、win2k8、win7、kali、centos等；")]),t._v(" "),a("p",[t._v("7、CDN信息：是否使用CDN，如cloudflare、360cdn、365cyd、yunjiasu等；")]),t._v(" "),a("p",[t._v("8、WAF信息：是否使用waf，如Topsec、Jiasule、Yundun等；")]),t._v(" "),a("p",[t._v("9、IP及域名信息：IP和域名注册信息、服务商信息等；")]),t._v(" "),a("p",[t._v("10、端口信息：有些软件或平台还会探测服务器开放的常见端口。")]),t._v(" "),a("h2",{attrs:{id:"_3-常见的指纹识别方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见的指纹识别方式"}},[t._v("#")]),t._v(" 3. 常见的指纹识别方式")]),t._v(" "),a("h3",{attrs:{id:"_3-1-特定文件的-md5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-特定文件的-md5"}},[t._v("#")]),t._v(" 3.1 特定文件的 MD5")]),t._v(" "),a("p",[t._v("一些网站的特定图片文件、js 文件、CSS 等静态文件，如favicon.ico、css、logo.ico、js 等文件一般不会修改，通过爬虫对这些文件进行抓取并比对 md5 值，如果和规则库中的Md5一致则说明是同一 CMS。这种方式速度比较快，误报率相对低一些，但也不排除有些二次开发的 CMS 会修改这些文件。")]),t._v(" "),a("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107230739824.png",alt:"image-20230107230739824"}}),t._v(" "),a("h3",{attrs:{id:"_3-2-正常页面或错误网页中包含的关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-正常页面或错误网页中包含的关键字"}},[t._v("#")]),t._v(" 3.2 正常页面或错误网页中包含的关键字")]),t._v(" "),a("p",[t._v("先访问首页或特定页面如 robots.txt 等，通过正则的方式去匹配某些关键字，如 Powered by Discuz、dedecms 等。")]),t._v(" "),a("p",[t._v("或者可以构造错误页面，根据报错信息来判断使用的 CMS 或者中间件信息，比较常见的如 tomcat 的报错页面。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107230839178.png",alt:"image-20230107230839178"}})]),t._v(" "),a("h3",{attrs:{id:"_3-3-请求头信息的关键字匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-请求头信息的关键字匹配"}},[t._v("#")]),t._v(" 3.3 请求头信息的关键字匹配")]),t._v(" "),a("p",[t._v("根据网站 response 返回头信息进行关键字匹配，whatweb 和 Wappalyzer 就是通过 banner 信息来快速识别指纹，之前 fofa 的 web 指纹库很多都是使用的这种方法，效率非常高，基本请求一次就可以，但搜集这些规则可能会耗时很长。而且这些 banner 信息有些很容易被改掉。")]),t._v(" "),a("p",[t._v("根据response header一般有以下几种识别方式：")]),t._v(" "),a("ul",[a("li",[t._v("查看 http 响应报头的 X-Powered-By 字段来识别；")]),t._v(" "),a("li",[t._v("根据 Cookies 来进行判断，比如一些 WAF 会在返回头中包含一些信息，如 360wzws、Safedog、yunsuo 等；")]),t._v(" "),a("li",[t._v("根据 header 中的 Server 信息来判断，如 DVRDVS-Webs、yunjiasu-nginx、Mod_Security、nginx-wallarm 等；")]),t._v(" "),a("li",[t._v("根据 WWW-Authenticate 进行判断，一些路由交换设备可能存在这个字段，如 NETCORE、huawei、h3c 等设备。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5Cyubin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230107231316325.png",alt:"image-20230107231316325"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5Cyubin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230107231341663.png",alt:"image-20230107231341663"}})]),t._v(" "),a("h3",{attrs:{id:"_3-4-部分-url-中包含的关键字-比如-wp-includes、dede-等-url-关键特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-部分-url-中包含的关键字-比如-wp-includes、dede-等-url-关键特征"}},[t._v("#")]),t._v(" 3.4 部分 URL 中包含的关键字，比如 wp-includes、dede 等 URL 关键特征")]),t._v(" "),a("p",[t._v("通过规则库去探测是否有相应目录，或者根据爬虫结果对链接 URL 进行分析，或者对 robots.txt 文件中目录进行检测等等方式，通过 URL 地址来判别是否使用了某 CMS，比如 wordpress 默认存在 wp-includes 和 wp-admin 目录，织梦默认管理后台为 dede 目录，solr 平台可能使用 /solr 目录，weblogic 可能使用 wls-wsat 目录等。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107231900686.png",alt:"image-20230107231900686"}})]),t._v(" "),a("h3",{attrs:{id:"_3-5-开发语言的识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-开发语言的识别"}},[t._v("#")]),t._v(" 3.5 开发语言的识别")]),t._v(" "),a("p",[t._v("Web 开发语言一般常见的有 PHP、jsp、aspx、asp 等，常见的识别方式有：")]),t._v(" "),a("ul",[a("li",[t._v("通过爬虫获取动态链接进行直接判断是比较简便的方法。")])]),t._v(" "),a("p",[t._v("asp 判别规则如下 "),a("code",[t._v("<a[^>]*?href=('|\")[^http][^>]*?\\.asp(\\?|\\#|\\1)")]),t._v("，其他语言可替换相应asp 即可。")]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("X-Powered-By")]),t._v(" 识别")])]),t._v(" "),a("p",[t._v("比较常见的有"),a("code",[t._v("X-Powered-By: ASP.NET")]),t._v("或者"),a("code",[t._v("X-Powered-By: PHP/7.1.8")])]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("Set-Cookie")]),t._v(" 进行识别")])]),t._v(" "),a("p",[t._v("这种方法比较常见也很快捷，比如"),a("code",[t._v("Set-Cookie")]),t._v("中包含"),a("code",[t._v("PHPSSIONID")]),t._v("说明是 php、包含"),a("code",[t._v("JSESSIONID")]),t._v("说明是 java、包含"),a("code",[t._v("ASP.NET_SessionId")]),t._v("说明是 aspx 等。")]),t._v(" "),a("h2",{attrs:{id:"_4-国外指纹识别工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-国外指纹识别工具"}},[t._v("#")]),t._v(" 4. 国外指纹识别工具")]),t._v(" "),a("p",[t._v("在研究指纹识别技术的时候，不可避免的分析了大量指纹识别工具，在此将自己用过的几个感觉不错的工具和平台介绍一下。")]),t._v(" "),a("p",[t._v("这里首先介绍一下国外的一些指纹识别工具。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-whatweb-★★★★★"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-whatweb-★★★★★"}},[t._v("#")]),t._v(" 4.1 WhatWeb（★★★★★）")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://github.com/urbanadventurer/WhatWeb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/urbanadventurer/WhatWeb"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Whatweb 是一个开源的网站指纹识别软件，拥有超过 1700+ 个插件，它能识别的指纹包括 cms 类型、博客平台、网站流量分析软件、javascript 库、网站服务器，还可以识别版本号、邮箱地址、账户 id、web 框架模块等。")]),t._v(" "),a("p",[t._v("关于安装：")]),t._v(" "),a("ul",[a("li",[t._v("Whatweb 是基于 ruby 语言开发，因此可以安装在具备 ruby 环境的系统中，目前支持 Windows/Mac OSX/Linux。")]),t._v(" "),a("li",[t._v("在 debian/ubuntu 系统下可直接 "),a("code",[t._v("apt-get install whatweb")]),t._v("，Kali 已自带。")])]),t._v(" "),a("p",[t._v("使用非常简单，"),a("code",[t._v("whatweb http://www.tidesec.net")]),t._v(" 即可，也可以加参数-v显示更详细的信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107232648652.png",alt:"image-20230107232648652"}})]),t._v(" "),a("h3",{attrs:{id:"_4-2-wapplyzer-★★★★"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-wapplyzer-★★★★"}},[t._v("#")]),t._v(" 4.2 Wapplyzer（★★★★）")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/AliasIO/Wappalyzer"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Wappalyzer 是一个实用的跨平台网站分析工具，用于帮助开发者、研究者和设计者检测网页使用的是什么技术，以更好地衡量自己的项目中该使用什么技术。Wappalyzer 的功能和 BuiltWith 类似，可检测内容管理系统（CMS），电子商务平台、Web 服务器、JavaScript 框架和已安装的分析工具等。")]),t._v(" "),a("p",[t._v("Wappalyzer 可直接在 chrome 或火狐的应用商城直接搜索安装。Wappalyzer 目前可识别 65 个大类的 1216 个应用，查看可检测的应用程序列表："),a("a",{attrs:{href:"https://wappalyzer.com/applications",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wappalyzer.com/applications"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107232928313.png",alt:"image-20230107232928313"}})]),t._v(" "),a("h3",{attrs:{id:"_4-3-whatruns-★★★★"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-whatruns-★★★★"}},[t._v("#")]),t._v(" 4.3 Whatruns（★★★★）")]),t._v(" "),a("p",[t._v("Whatruns 是为 chrome 开发的一款 web 指纹识别程序，还可以显示托管的 CDN、wordpress 插件、wordpress 字体等，拥有丰富的插件支持。")]),t._v(" "),a("p",[t._v("跟 Wappalyzer 安装类似，Whatruns 可直接在 chrome 应用商城直接搜索安装。")]),t._v(" "),a("p",[t._v("安装完成后，通过插件图标来获取服务的详细运行信息，效果如下。有时候信息会比 Wapplyzer 还详细一些，但有时候获取速度稍慢。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107234114572.png",alt:"image-20230107234114572"}})]),t._v(" "),a("h3",{attrs:{id:"_4-4-plecost-★★★"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-plecost-★★★"}},[t._v("#")]),t._v(" 4.4 Plecost（★★★）")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://github.com/iniqua/plecost",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/iniqua/plecost"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Plecost 是 Wordpress 博客引擎的漏洞指纹识别和漏洞查找器，能识别 Wordpress 版本并能查找到 cve，不过访问不了 google 的话可能有些功能就受限了。Plecost 基于 python 架构，利用了 Beautiful Soup 来解析 html、xml 文件识别网站使用的插件及版本。")]),t._v(" "),a("p",[t._v("使用也比较方便"),a("code",[t._v("plecost -i /usr/share/plecost/wp_plugin_list.txt http://www.freebuf.com")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107234240781.png",alt:"image-20230107234240781"}})]),t._v(" "),a("h3",{attrs:{id:"_4-5-blindelephant-★★"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-blindelephant-★★"}},[t._v("#")]),t._v(" 4.5 BlindElephant（★★）")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://github.com/lokifer/BlindElephant",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lokifer/BlindElephant"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("BlindElephant 是一款 Web 应用程序指纹识别工具。该工具可以读取目标网站的特定静态文件，计算其对应的哈希值，然后和预先计算出的哈希值做对比，从而判断目标网站的类型和版本号。目前，该工具支持 15 种常见的 Web 应用程序的几百个版本。同时，它还提供 WordPress 和 Joomla 的各种插件。该工具还允许用户自己扩展，添加更多的版本支持。")]),t._v(" "),a("p",[t._v("不过该软件最新更新是在2013年，插件库应该算比较旧的了。可以在 GitHub 中下载，Kali 已经内置。")]),t._v(" "),a("p",[t._v("使用命令："),a("code",[t._v("BlindElephant.py http://www.freebuf.com wordpress")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107234458845.png",alt:"image-20230107234458845"}})]),t._v(" "),a("h2",{attrs:{id:"_5-国内指纹识别工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-国内指纹识别工具"}},[t._v("#")]),t._v(" 5. 国内指纹识别工具")]),t._v(" "),a("h3",{attrs:{id:"_5-1-御剑-web-指纹识别程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-御剑-web-指纹识别程序"}},[t._v("#")]),t._v(" 5.1 御剑 Web 指纹识别程序")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://www.webshell.cc/4697.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.webshell.cc/4697.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("御剑 web 指纹识别程序是一款 CMS 指纹识别小工具，该程序由 .NET 2.0 框架开发，配置灵活、支持自定义关键字和正则匹配两种模式、使用起来简洁、体验良好。在指纹命中方面表现不错、识别速度很快、但目前比较明显的缺陷是指纹的配置库偏少。")]),t._v(" "),a("p",[t._v("windows下图形界面，比较亲民，扫描速度略慢，指纹库略少，可手工更新。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107234632470.png",alt:"image-20230107234632470"}})]),t._v(" "),a("h3",{attrs:{id:"_5-2-test404-轻量-web-指纹识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-test404-轻量-web-指纹识别"}},[t._v("#")]),t._v(" 5.2 Test404 轻量 Web 指纹识别")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://www.test404.com/post-1618.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.test404.com/post-1618.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Test404 轻量 Web 指纹识别程序是一款CMS指纹识别小工具，配置灵活、支持自行添加字典、使用起来简洁、体验良好。在指纹命中方面表现不错、识别速度很快。可手动更新指纹识别库，而且该软件在 2019.04 月刚刚更新了一版。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107234742063.png",alt:"image-20230107234742063"}})]),t._v(" "),a("h3",{attrs:{id:"_5-3-w11scan-分布式-web-指纹识别平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-w11scan-分布式-web-指纹识别平台"}},[t._v("#")]),t._v(" 5.3 w11scan 分布式 WEB 指纹识别平台")]),t._v(" "),a("p",[t._v("w11scan是一款分布式的WEB指纹识别系统（包括CMS识别、js框架、组件容器、代码语言、WAF等等），管理员可以在WEB端新增/修改指纹，建立批量的扫描任务，并且支持多种搜索语法。")]),t._v(" "),a("p",[t._v("安装和下载可参考："),a("code",[t._v("https://github.com/w-digital-scanner/w11scan")])]),t._v(" "),a("p",[t._v("手工安装稍微复杂，不过作者提供了docker部署，方便很多，使用了Mongodb，内置了1800多条常见的指纹，可以识别多达538种常见CMS，当然也可以手工添加指纹。")]),t._v(" "),a("h3",{attrs:{id:"_5-4-dayu-指纹识别工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-dayu-指纹识别工具"}},[t._v("#")]),t._v(" 5.4 Dayu 指纹识别工具")]),t._v(" "),a("p",[t._v("下载地址："),a("code",[t._v("https://github.com/Ms0x0/Dayu")])]),t._v(" "),a("p",[t._v("“大禹”为一款c/s结构jar文件工具，只需本地安装java环境，加参数-u即可，具体设置参数可参考github介绍。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107235717817.png",alt:"image-20230107235717817"}})]),t._v(" "),a("h3",{attrs:{id:"_5-5-webeye"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-webeye"}},[t._v("#")]),t._v(" 5.5 WebEye")]),t._v(" "),a("p",[t._v("下载地址："),a("code",[t._v("https://github.com/zerokeeper/WebEye/")])]),t._v(" "),a("p",[t._v("WebEye可快速简单地识别WEB服务器类型、CMS类型、WAF类型、WHOIS信息、以及语言框架，使用异步实现指纹的快速识别。")]),t._v(" "),a("p",[t._v("识别速度比较快，不过指纹库不是很多，指纹库不是基于md5之类的，而是类似于fofa通过http头信息、关键字等进行快速识别。")]),t._v(" "),a("p",[t._v("作者对指纹进行了分类，如摄像头、waf、cdn、网络设备等，很多指纹都是精心搜集的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107235750620.png",alt:"image-20230107235750620"}})]),t._v(" "),a("h3",{attrs:{id:"_5-6-wtf-scan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-wtf-scan"}},[t._v("#")]),t._v(" 5.6 WTF_Scan")]),t._v(" "),a("p",[t._v("下载地址："),a("code",[t._v("https://github.com/dyboy2017/WTF_Scan")])]),t._v(" "),a("p",[t._v("WTF团队出品的指纹识别平台，包括的功能也相对比较多，除了指纹识别外，还有DNS解析、子域名、CDN、端口扫描、敏感目录等。")]),t._v(" "),a("p",[t._v("不过就单独说指纹规则来说，不算很多，可以自己添加完善，在"),a("code",[t._v("WTF_Scan/wtf/app/api/cms/cms.txt")]),t._v("文件中进行指纹修改。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107235835529.png",alt:"image-20230107235835529"}})]),t._v(" "),a("h3",{attrs:{id:"_5-7-webfinger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-webfinger"}},[t._v("#")]),t._v(" 5.7 Webfinger")]),t._v(" "),a("p",[t._v("基于fofa的规则库进行快速检索，大约2000+条指纹数据，位于lib/web.db可自行添加修改。")]),t._v(" "),a("p",[t._v("下载地址："),a("code",[t._v("https://github.com/se55i0n/Webfinger")])]),t._v(" "),a("p",[t._v("类似的还有个CMSCAN"),a("code",[t._v("https://github.com/cuijianxiong/cmscan/")])]),t._v(" "),a("h3",{attrs:{id:"_5-8-fingerprint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-fingerprint"}},[t._v("#")]),t._v(" 5.8 FingerPrint")]),t._v(" "),a("p",[t._v("好像是百度的一个MM用perl写的一款工具，调用Wappalyzer模块进行指纹识别。")]),t._v(" "),a("p",[t._v("下载地址："),a("code",[t._v("https://github.com/tanjiti/FingerPrint")])]),t._v(" "),a("h2",{attrs:{id:"_6-在线指纹识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-在线指纹识别"}},[t._v("#")]),t._v(" 6. 在线指纹识别")]),t._v(" "),a("h3",{attrs:{id:"_6-1-云悉指纹识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-云悉指纹识别"}},[t._v("#")]),t._v(" 6.1 云悉指纹识别")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.yunsee.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.yunsee.cn/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("指纹库很强大，速度也很快，我们前端还仿了下云悉的界面，免费服务，还能提供api接口！")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230107235952796.png",alt:"image-20230107235952796"}})]),t._v(" "),a("h3",{attrs:{id:"_6-2-bugscaner-指纹识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-bugscaner-指纹识别"}},[t._v("#")]),t._v(" 6.2 bugscaner 指纹识别")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://whatweb.bugscaner.com/look/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://whatweb.bugscaner.com/look/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("目前好像指纹比较少，很多都识别不出来了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230108000049255.png",alt:"image-20230108000049255"}})]),t._v(" "),a("h3",{attrs:{id:"_6-3-whatweb-net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-whatweb-net"}},[t._v("#")]),t._v(" 6.3 whatweb.net")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://whatweb.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://whatweb.net/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("之前功能还不错，现在好像只能查看到header信息了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230108000118787.png",alt:"image-20230108000118787"}})]),t._v(" "),a("h3",{attrs:{id:"_6-4-tidefinger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-tidefinger"}},[t._v("#")]),t._v(" 6.4 TideFinger")]),t._v(" "),a("p",[t._v("上面介绍了那么多超级工具，都不好意思写自己做的小破烂东西了...大佬们可以关掉本页面了...")]),t._v(" "),a("p",[t._v("通过对各种识别对象、识别方法、识别工具的分析，发现大家的指纹库各式各样，识别方式也是各有千秋，传统的md5、url路径的方式居多，识别header信息的也是不少，但没有一个能集众家之长的小工具。")]),t._v(" "),a("p",[t._v("于是我们就做了一个小工具TideFinger："),a("a",{attrs:{href:"https://github.com/TideSec/TideFinger",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/TideSec/TideFinger"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这一部分具体可以参考原文 "),a("a",{attrs:{href:"https://github.com/TideSec/TideFinger",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web指纹识别技术研究与优化实现"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[t._v("https://www.freebuf.com/articles/2555.html")]),t._v(" "),a("p",[t._v("https://blog.51cto.com/simeon/2115190")]),t._v(" "),a("p",[t._v("https://www.freebuf.com/news/137497.html")]),t._v(" "),a("p",[t._v("https://www.freebuf.com/articles/web/129939.html")]),t._v(" "),a("p",[t._v("https://www.freebuf.com/sectool/135216.html")]),t._v(" "),a("p",[t._v("https://www.test404.com/post-1299.html?wafcloud=1")]),t._v(" "),a("p",[t._v("https://github.com/se55i0n/Webfinger")]),t._v(" "),a("p",[t._v("https://github.com/tanjiti/FingerPrint")]),t._v(" "),a("p",[t._v("https://github.com/dyboy2017/WTF_Scan")]),t._v(" "),a("p",[t._v("https://github.com/zerokeeper/WebEye/")]),t._v(" "),a("p",[t._v("https://github.com/Ms0x0/Dayu")]),t._v(" "),a("p",[t._v("https://github.com/w-digital-scanner/w11scan")]),t._v(" "),a("p",[t._v("https://www.webshell.cc/4697.html")]),t._v(" "),a("p",[t._v("https://github.com/lokifer/BlindElephant")]),t._v(" "),a("p",[t._v("https://github.com/iniqua/plecost")]),t._v(" "),a("p",[t._v("https://github.com/AliasIO/Wappalyzer")]),t._v(" "),a("p",[t._v("https://github.com/urbanadventurer/WhatWeb")])])}),[],!1,null,null,null);e.default=_.exports}}]);
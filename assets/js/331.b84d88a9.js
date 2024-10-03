(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{1102:function(e,t,r){"use strict";r.r(t);var s=r(22),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("blockquote",[r("p",[e._v("参考 "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/585518828",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入容器系列之二——深入容器运行时"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("上一篇文章，我们了解到构建容器的两个主要组件是 Linux namespace 和 Cgroup。在这篇文章中，我们将了解什么是 Container Runtime 以及它如何与 Container 一起工作？")]),e._v(" "),r("center",[r("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20221127161440868.png",alt:"image-20221127161440868"}})]),e._v(" "),r("h2",{attrs:{id:"_1-container-和-container-runtime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-container-和-container-runtime"}},[e._v("#")]),e._v(" 1.  Container 和 Container Runtime")]),e._v(" "),r("p",[e._v("创建容器是为了帮助我们在完全独立于同一台计算机上的其他程序的环境中运行程序。但是如果只使用 Linux namespace和 Cgroup 来运行容器，我们之后会遇到一些问题。")]),e._v(" "),r("ol",[r("li",[e._v("第一个问题是，创建一个容器，我们需要运行很多命令，分别是创建 Linux namespace 的命令，包括创建 Cgroup 进程的命令、为 Cgroup 进程配置限制的命令。那么如果我们要删除容器，我们必须运行命令来清除 namespace 和 Cgroup。")]),e._v(" "),r("li",[e._v("第二个问题是，当我们使用 Linux namespace 和 Cgroup 命令运行数十个容器时，我们如何管理这些容器？如何知道容器正在运行什么以及它用于哪个进程？")]),e._v(" "),r("li",[e._v("第三个问题是，有些容器已经有了我们需要的东西，而且它在 Container Registry 上，我们如何下载并运行它，而不必从头开始创建容器？")])]),e._v(" "),r("p",[e._v("有了上面的问题，与其运行那么多命令，不如自己做一个工具来减少这个工作量，我们只需要运行一个命令就可以创建容器并删除它。而且那个工具还可以帮助我们管理很多正在运行的容器，我们知道哪个容器正在被哪个进程使用。我们还可以使用该工具下载互联网上可用的容器。"),r("strong",[e._v("这就是容器运行时诞生的原因。")])]),e._v(" "),r("p",[e._v("总结一下，"),r("mark",[e._v("Container Runtime")]),e._v(" （容器运行时，"),r("strong",[e._v("CR")]),e._v("）是一个"),r("strong",[e._v("管理容器所有运行进程的工具")]),e._v("，包括创建和删除容器、打包和共享容器。容器运行时分为两种：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("低级容器运行时")]),e._v("：主要任务是创建和删除容器")]),e._v(" "),r("li",[r("strong",[e._v("高层容器运行时")]),e._v("：管理容器，下载容器镜像，然后提取容器镜像传递给底层容器运行时，由它创建并运行容器")])]),e._v(" "),r("center",[r("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20221127162334274.png",alt:"image-20221127162334274"}})]),e._v(" "),r("blockquote",[r("p",[e._v("一些高级容器运行时甚至包括将容器打包成容器镜像并将其传输到 container registry 的功能。")])]),e._v(" "),r("h2",{attrs:{id:"_2-low-level-container-runtime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-low-level-container-runtime"}},[e._v("#")]),e._v(" 2. Low level container runtime")]),e._v(" "),r("center",[r("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20221127164045613.png",alt:"image-20221127164045613"}})]),e._v(" "),r("p",[e._v("正如我上面所说，低级容器运行时的主要任务是创建和删除容器。低级容器运行时要做的是：")]),e._v(" "),r("ul",[r("li",[e._v("创建 cgroup。")]),e._v(" "),r("li",[e._v("在 cgroup 中运行 CLI。")]),e._v(" "),r("li",[e._v("运行 unshare 命令以创建隔离进程。")]),e._v(" "),r("li",[e._v("设置 rootfs。")]),e._v(" "),r("li",[e._v("命令完成后清理 cgroup。")])]),e._v(" "),r("p",[e._v("底层容器运行时还做其他的事情，但以上是主要的工作。比如模拟容器运行时创建容器的过程：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ROOTFS=$(mktemp -d) && UUID=9999\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("创建一个 Cgroup：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo cgcreate -g cpu,memory:$UUID\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("为这个 cgroup 设置 memory 限制：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo cgset -r memory.limit_in_bytes=100000000 $UUIDxxxxxxxxxx1 1sudo cgset -r memory.limit_in_bytes=100000000 $UUID\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("为这个 Cgroup 设置 CPU 限制：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo cgset -r cpu.shares=512 $UUID && sudo cgset -r cpu.cfs_period_us=1000000 $UUID && sudo cgset -r cpu.cfs_quota_us=2000000 $UUID\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("创建一个容器：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('sudo cgexec -g cpu,memory:$UUID unshare -uinpUrf --mount-proc sh -c "/bin/hostname $UUID && chroot $ROOTFS /bin/sh"\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("删除这个 cgroup：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo cgdelete -r -g cpu,memory:$UUID\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("以上就是模拟容器运行时创建容器的过程。")]),e._v(" "),r("p",[e._v("或许，"),r("strong",[r("mark",[e._v("runc")]),e._v(" 是最常见的低级容器运行时")]),e._v("。如果要用 runc 创建一个容器，我们只需要运行如下命令即可：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('$ runc run runc-container \n/# echo "Hello from in a container" \nHello from in a container\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("非常简单~")]),e._v(" "),r("h2",{attrs:{id:"_3-high-level-container-runtime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-high-level-container-runtime"}},[e._v("#")]),e._v(" 3. High level container runtime")]),e._v(" "),r("center",[r("img",{staticStyle:{zoom:"72%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20221127164909571.png",alt:"image-20221127164909571"}})]),e._v(" "),r("p",[e._v("低级容器运行时专注于创建和删除容器，而"),r("strong",[e._v("高级容器运行时将专注于管理多个容器、传输和管理容器镜像，以及将容器镜像加载和解压到低级容器运行时")]),e._v("。")]),e._v(" "),r("p",[e._v("containerd 就是一个常见的高级容器运行时，它为我们提供了以下特性：")]),e._v(" "),r("ul",[r("li",[e._v("从 container registry 下载容器镜像。")]),e._v(" "),r("li",[e._v("管理容器镜像。")]),e._v(" "),r("li",[e._v("使用容器镜像来运行容器。")]),e._v(" "),r("li",[e._v("管理容器。")])]),e._v(" "),r("p",[e._v("例如，我们将运行以下命令来创建一个 Redis 容器，container registry 上有可用的 Redis 容器镜像，下载容器镜像：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo ctr images pull docker.io/library/redis:latest\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("运行一个容器：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo ctr container create docker.io/library/redis:latest redis\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("如果你想删除一个容器，运行下面的命令：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo ctr container delete redis\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("你可以用下面的命令列出容器和镜像：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo ctr images list sudo ctr container list\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("这与我们运行 docker 的命令很相似吧？尽管您可以从现有的容器镜像加载和运行容器，"),r("code",[e._v("containerd")]),e._v(" 和许多其他高级容器运行时并不能帮助您构建容器，而且高级容器运行时并不侧重于为用户提供 UI 支持。")]),e._v(" "),r("p",[e._v("于是为了让用户更方便地与容器进行交流，一种叫做"),r("strong",[e._v("容器管理")]),e._v("的新工具诞生了，Docker 就是其中之一。")]),e._v(" "),r("h2",{attrs:{id:"_4-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-docker"}},[e._v("#")]),e._v(" 4. Docker")]),e._v(" "),r("p",[e._v("Docker 是最早完全支持容器交互的工具之一。Docker 支持：")]),e._v(" "),r("ul",[r("li",[e._v("镜像构建（Dockerfile/docker build）")]),e._v(" "),r("li",[e._v("管理容器镜像（docker images）")]),e._v(" "),r("li",[e._v("创建、删除和管理容器（docker run、docker rm、docker ps）")]),e._v(" "),r("li",[e._v("共享容器镜像（docker push）")]),e._v(" "),r("li",[e._v("提供 UI 供用户操作，而不是使用 CLI")])]),e._v(" "),r("p",[e._v("Docker 将通过 API 与底层容器运行时交互，为我们创建和运行容器。docker 使用的高级容器运行时是 "),r("code",[e._v("dockerd")]),e._v("，"),r("code",[e._v("docker-containerd")]),e._v("，"),r("code",[e._v("dockerd-runc")]),e._v("。")]),e._v(" "),r("center",[r("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20221127165306448.png",alt:"image-20221127165306448"}})]),e._v(" "),r("p",[e._v("使用 dockerd 将为我们提供构建映像功能，docker-containerd 类似于 containerd，docker-runc 类似于 runc。")]),e._v(" "),r("h2",{attrs:{id:"_5-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[e._v("#")]),e._v(" 5. 总结")]),e._v(" "),r("p",[e._v("通过本文，我们了解了容器运行时。低级容器运行时负责创建和删除容器。高级容器运行时负责管理容器镜像和容器。而 Docker 是我们通过容器运行时与底层容器交互的完整工具，包括构建容器镜像。")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);
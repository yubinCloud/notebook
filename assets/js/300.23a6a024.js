(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{1052:function(a,e,_){"use strict";_.r(e);var r=_(22),v=Object(r.a)({},(function(){var a=this,e=a.$createElement,_=a._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("blockquote",[_("p",[a._v("参考 "),_("a",{attrs:{href:"https://time.geekbang.org/column/intro/100029201",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kafka 核心技术与实战"),_("OutboundLink")],1),a._v(" 第 06-08 讲")])]),a._v(" "),_("h2",{attrs:{id:"_1-kafka-线上集群部署方案怎么做"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-kafka-线上集群部署方案怎么做"}},[a._v("#")]),a._v(" 1. Kafka 线上集群部署方案怎么做？")]),a._v(" "),_("p",[a._v("真正线上的 Kafka 集群由多个节点构成，并且需要仔细地考量各种因素（OS、磁盘、带宽等），结合自身的业务需求而制定。")]),a._v(" "),_("h3",{attrs:{id:"_1-1-操作系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-操作系统"}},[a._v("#")]),a._v(" 1.1 操作系统")]),a._v(" "),_("p",[a._v("Kafka 运行在 JVM 中，那不同的 OS 区别大吗？")]),a._v(" "),_("p",[a._v("其实部署环境的操作系统最好选择 Linux 而不是 Windows 或 MacOS Server，原因如下：")]),a._v(" "),_("ol",[_("li",[_("strong",[a._v("在 Linux 上能够获得更高效的 I/O 性能")]),a._v("。Kafka Client 使用了 Java 的 selector，而 selector 在 Linux 上的实现机制是 epoll，而在 Windows 上的实现机制是 select。")]),a._v(" "),_("li",[_("strong",[a._v("Linux 上可以享受到 zero-copy 带来的快速数据传输特性")]),a._v("。Zero Copy 技术可以当数据在磁盘和网络进行传输时避免昂贵的内核态数据拷贝从而实现快速地数据传输。")]),a._v(" "),_("li",[_("strong",[a._v("Windows 上的 kafka bug 不做任何承诺")]),a._v("。")])]),a._v(" "),_("h3",{attrs:{id:"_1-2-磁盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-磁盘"}},[a._v("#")]),a._v(" 1.2 磁盘")]),a._v(" "),_("p",[a._v("我们经常面临选择普通机械硬盘还是固态硬盘的问题。建议是：使用普通机械硬盘即可。")]),a._v(" "),_("p",[a._v("Kafka 大量使用磁盘不假，可"),_("strong",[a._v("它使用的方式多是顺序读写操作")]),a._v("，一定程度上规避了机械磁盘最大的劣势，即随机读写操作慢。从这一点上来说，使用 SSD 似乎并没有太大的性能优势，毕竟从性价比上来说，机械磁盘物美价廉，而它因易损坏而造成的可靠性差等缺陷，又由 Kafka 在软件层面提供机制来保证，故使用普通机械磁盘是很划算的。")]),a._v(" "),_("p",[a._v("关于磁盘选择另一个经常讨论的话题就是到底是否应该使用磁盘阵列（RAID）。使用 RAID 的两个主要优势在于：")]),a._v(" "),_("ul",[_("li",[a._v("提供冗余的磁盘存储空间")]),a._v(" "),_("li",[a._v("提供负载均衡")])]),a._v(" "),_("p",[a._v("以上两个优势对于任何一个分布式系统都很有吸引力。不过就 Kafka 而言，一方面 Kafka 自己实现了冗余机制和分区，并在软件层面自行实现了负载均衡。这样 RAID 的优势就没有那么明显了。当然这并不是说 RAID 不好，实际上依然有很多大厂确实是把 Kafka 底层的存储交由 RAID 的，只是目前 Kafka 在存储这方面提供了越来越便捷的高可靠性方案，因此在线上环境使用 RAID 似乎变得不是那么重要了。综合以上的考量，我给出的建议是：")]),a._v(" "),_("ul",[_("li",[_("strong",[a._v("追求性价比的公司可以不搭建 RAID，使用普通磁盘组成存储空间即可")]),a._v("。")]),a._v(" "),_("li",[_("strong",[a._v("使用机械磁盘完全能够胜任 Kafka 线上环境")]),a._v("。")])]),a._v(" "),_("h3",{attrs:{id:"_1-3-磁盘容量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-磁盘容量"}},[a._v("#")]),a._v(" 1.3 磁盘容量")]),a._v(" "),_("p",[a._v("Kafka 集群到底需要多大的存储空间？这是一个非常经典的规划问题。Kafka 需要将消息保存在底层的磁盘上，这些消息默认会被保存一段时间然后自动被删除。虽然这段时间是可以配置的，但你应该如何结合自身业务场景和存储需求来规划 Kafka 集群的存储容量呢？")]),a._v(" "),_("p",[a._v("我举一个简单的例子来说明该如何思考这个问题。假设你所在公司有个业务每天需要向 Kafka 集群发送 1 亿条消息，每条消息保存两份以防止数据丢失，另外消息默认保存两周时间。现在假设消息的平均大小是 1KB，那么你能说出你的 Kafka 集群需要为这个业务预留多少磁盘空间吗？")]),a._v(" "),_("p",[a._v("我们来计算一下：每天 1 亿条 1KB 大小的消息，保存两份且留存两周的时间，那么总的空间大小就等于 1 亿 * 1KB * 2 / 1000 / 1000 = 200GB。一般情况下 Kafka 集群除了消息数据还有其他类型的数据，比如索引数据等，故我们再为这些数据预留出 10% 的磁盘空间，因此总的存储容量就是 220GB。既然要保存两周，那么整体容量即为 220GB * 14，大约 3TB 左右。Kafka 支持数据的压缩，假设压缩比是 0.75，那么最后你需要规划的存储空间就是 0.75 * 3 = 2.25TB。")]),a._v(" "),_("p",[a._v("总之在规划磁盘容量时你需要考虑下面这几个元素：")]),a._v(" "),_("ul",[_("li",[a._v("新增消息数")]),a._v(" "),_("li",[a._v("消息留存时间")]),a._v(" "),_("li",[a._v("平均消息大小")]),a._v(" "),_("li",[a._v("备份数")]),a._v(" "),_("li",[a._v("是否启用压缩")])]),a._v(" "),_("h3",{attrs:{id:"_1-4-带宽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-带宽"}},[a._v("#")]),a._v(" 1.4 带宽")]),a._v(" "),_("p",[a._v("对于 Kafka 这种通过网络大量进行数据传输的框架而言，带宽特别容易成为瓶颈。事实上，在我接触的真实案例当中，带宽资源不足导致 Kafka 出现性能问题的比例至少占 60% 以上。如果你的环境中还涉及跨机房传输，那么情况可能就更糟了。")]),a._v(" "),_("p",[a._v("如果你不是超级土豪的话，我会认为你和我平时使用的都是普通的以太网络，带宽也主要有两种：1Gbps 的千兆网络和 10Gbps 的万兆网络，特别是千兆网络应该是一般公司网络的标准配置了。下面我就以千兆网络举一个实际的例子，来说明一下如何进行带宽资源的规划。")]),a._v(" "),_("p",[a._v("与其说是带宽资源的规划，其实真正要规划的是所需的 Kafka 服务器的数量。假设你公司的机房环境是千兆网络，即 1Gbps，现在你有个业务，其业务目标或 SLA 是在 1 小时内处理 1TB 的业务数据。那么问题来了，你到底需要多少台 Kafka 服务器来完成这个业务呢？")]),a._v(" "),_("p",[a._v("让我们来计算一下，由于带宽是 1Gbps，即每秒处理 1Gb 的数据，假设每台 Kafka 服务器都是安装在专属的机器上，也就是说每台 Kafka 机器上没有混布其他服务，毕竟真实环境中不建议这么做。通常情况下你只能假设 Kafka 会用到 70% 的带宽资源，因为总要为其他应用或进程留一些资源。")]),a._v(" "),_("p",[a._v("根据实际使用经验，超过 70% 的阈值就有网络丢包的可能性了，故 70% 的设定是一个比较合理的值，也就是说单台 Kafka 服务器最多也就能使用大约 700Mb 的带宽资源。")]),a._v(" "),_("p",[a._v("稍等，这只是它能使用的最大带宽资源，你不能让 Kafka 服务器常规性使用这么多资源，故通常要再额外预留出 2/3 的资源，即单台服务器使用带宽 700Mb / 3 ≈ 240Mbps。需要提示的是，这里的 2/3 其实是相当保守的，你可以结合你自己机器的使用情况酌情减少此值。")]),a._v(" "),_("p",[a._v("好了，有了 240Mbps，我们就可以计算 1 小时内处理 1TB 数据所需的服务器数量了。根据这个目标，我们每秒需要处理 2336Mb 的数据，除以 240，约等于 10 台服务器。如果消息还需要额外复制两份，那么总的服务器台数还要乘以 3，即 30 台。")]),a._v(" "),_("p",[a._v("怎么样，还是很简单的吧。用这种方法评估线上环境的服务器台数是比较合理的，而且这个方法能够随着你业务需求的变化而动态调整。")]),a._v(" "),_("h3",{attrs:{id:"_1-5-小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-小结"}},[a._v("#")]),a._v(" 1.5 小结")]),a._v(" "),_("table",[_("thead",[_("tr",[_("th",[a._v("因素")]),a._v(" "),_("th",[a._v("考量点")]),a._v(" "),_("th",[a._v("建议")])])]),a._v(" "),_("tbody",[_("tr",[_("td",[a._v("操作系统")]),a._v(" "),_("td",[a._v("操作系统 I/O 模型")]),a._v(" "),_("td",[a._v("将Kafka部署在Linux系统上")])]),a._v(" "),_("tr",[_("td",[a._v("磁盘")]),a._v(" "),_("td",[a._v("磁盘 I/O 性能")]),a._v(" "),_("td",[a._v("普通环境使用机械磁盘，不需要搭建 RAID")])]),a._v(" "),_("tr",[_("td",[a._v("磁盘容量")]),a._v(" "),_("td",[a._v("根据消息数、留存时间预估磁盘容量")]),a._v(" "),_("td",[a._v("实际使用中建议预留20%~30%的磁盘空间")])]),a._v(" "),_("tr",[_("td",[a._v("带宽")]),a._v(" "),_("td",[a._v("根据实际带宽资源和业务SLA预估服务器数量")]),a._v(" "),_("td",[a._v("对于千兆网络，建议每台服务器按照700Mbps来计算，避免大流量下的丢包")])])])]),a._v(" "),_("h2",{attrs:{id:"_2-最最最重要的集群参数配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-最最最重要的集群参数配置"}},[a._v("#")]),a._v(" 2. 最最最重要的集群参数配置")]),a._v(" "),_("p",[a._v("有些配置的重要性并未体现在官方文档中，并且从实际表现看，很多参数对系统的影响要比从文档上看更加明显，因此很有必要集中讨论一下。")]),a._v(" "),_("h3",{attrs:{id:"_2-1-broker-端参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-broker-端参数"}},[a._v("#")]),a._v(" 2.1 Broker 端参数")]),a._v(" "),_("p",[a._v("目前 Kafka Broker 提供了近 200 个参数，这其中绝大部分参数都不用你亲自过问。下面按照大的用途类别一组一组地介绍它们，希望可以更有针对性，也更方便你记忆。")]),a._v(" "),_("h4",{attrs:{id:"_2-1-1-存储信息的重要参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-存储信息的重要参数"}},[a._v("#")]),a._v(" 2.1.1 存储信息的重要参数")]),a._v(" "),_("p",[a._v("首先 Broker 是需要配置存储信息的，即 Broker 使用哪些磁盘。那么针对存储信息的重要参数有以下这么几个：")]),a._v(" "),_("ul",[_("li",[_("code",[a._v("log.dirs")]),a._v("：这是非常重要的参数，指定了 Broker 需要使用的若干个文件目录路径。要知道这个参数是没有默认值的，这说明什么？这说明它必须"),_("strong",[a._v("由你亲自指定")]),a._v("。")]),a._v(" "),_("li",[_("code",[a._v("log.dir")]),a._v("：注意这是 dir，结尾没有 s，说明它只能表示单个路径，它是补充上一个参数用的。")])]),a._v(" "),_("p",[a._v("这两个参数应该怎么设置呢？很简单，你只要设置log.dirs，即第一个参数就好了，不要设置log.dir。而且更重要的是，在线上生产环境中一定要为log.dirs配置多个路径，具体格式是一个 CSV 格式，也就是用逗号分隔的多个路径，比如/home/kafka1,/home/kafka2,/home/kafka3这样。如果有条件的话你最好保证这些目录挂载到不同的物理磁盘上。这样做有两个好处：")]),a._v(" "),_("ul",[_("li",[a._v("提升读写性能：比起单块磁盘，多块物理磁盘同时读写数据有更高的吞吐量。")]),a._v(" "),_("li",[a._v("能够实现故障转移：即 Failover。这是 Kafka 1.1 版本新引入的强大功能。要知道在以前，只要 Kafka Broker 使用的任何一块磁盘挂掉了，整个 Broker 进程都会关闭。但是自 1.1 开始，这种情况被修正了，坏掉的磁盘上的数据会自动地转移到其他正常的磁盘上，而且 Broker 还能正常工作。还记得上一期我们关于 Kafka 是否需要使用 RAID 的讨论吗？这个改进正是我们舍弃 RAID 方案的基础：没有这种 Failover 的话，我们只能依靠 RAID 来提供保障。")])]),a._v(" "),_("h4",{attrs:{id:"_2-1-2-zookeeper-相关配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-zookeeper-相关配置"}},[a._v("#")]),a._v(" 2.1.2 ZooKeeper 相关配置")]),a._v(" "),_("p",[a._v("ZooKeeper 是一个分布式协调框架，负责协调管理并保存 Kafka 集群的所有元数据信息，比如集群都有哪些 Broker 在运行、创建了哪些 Topic，每个 Topic 都有多少分区以及这些分区的 Leader 副本都在哪些机器上等信息。")]),a._v(" "),_("p",[a._v("Kafka 与 ZooKeeper 相关的最重要的参数当属 "),_("strong",[a._v("zookeeper.connect")]),a._v("。这也是一个 CSV 格式的参数，比如我可以指定它的值为zk1:2181,zk2:2181,zk3:2181。2181 是 ZooKeeper 的默认端口。")]),a._v(" "),_("p",[a._v("现在问题来了，如果我让多个 Kafka 集群使用同一套 ZooKeeper 集群，那么这个参数应该怎么设置呢？这时候 chroot 就派上用场了。这个 chroot 是 ZooKeeper 的概念，类似于别名。")]),a._v(" "),_("p",[a._v("如果你有两套 Kafka 集群，假设分别叫它们 kafka1 和 kafka2，那么两套集群的zookeeper.connect参数可以这样指定：zk1:2181,zk2:2181,zk3:2181/kafka1和zk1:2181,zk2:2181,zk3:2181/kafka2。切记 chroot 只需要写一次，而且是加到最后的。我经常碰到有人这样指定：zk1:2181/kafka1,zk2:2181/kafka2,zk3:2181/kafka3，这样的格式是不对的。")]),a._v(" "),_("h4",{attrs:{id:"_2-1-3-broker-连接相关参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-broker-连接相关参数"}},[a._v("#")]),a._v(" 2.1.3 Broker 连接相关参数")]),a._v(" "),_("p",[a._v("第三组参数是与 Broker 连接相关的，即客户端程序或其他 Broker 如何与该 Broker 进行通信的设置。有以下三个参数：")]),a._v(" "),_("ul",[_("li",[_("code",[a._v("listeners")]),a._v("：学名叫监听器，其实就是告诉外部连接者要通过什么协议访问指定主机名和端口开放的 Kafka 服务。")]),a._v(" "),_("li",[_("code",[a._v("advertised.listeners")]),a._v("：和 listeners 相比多了个 advertised。Advertised 的含义表示宣称的、公布的，就是说这组监听器是 Broker 用于对外发布的。")]),a._v(" "),_("li",[_("code",[a._v("host.name/port")]),a._v("：列出这两个参数就是想说你把它们忘掉吧，压根不要为它们指定值，毕竟都是过期的参数了。")])]),a._v(" "),_("p",[_("mark",[a._v("监听器")]),a._v("就是若干个逗号分隔的三元组，"),_("strong",[a._v("每个三元组的格式为<协议名称，主机名，端口号>")]),a._v("。这里的协议名称可能是标准的名字，比如 PLAINTEXT 表示明文传输、SSL 表示使用 SSL 或 TLS 加密传输等；也可能是你自己定义的协议名字，比如 "),_("code",[a._v("CONTROLLER: //localhost:9092")]),a._v("。")]),a._v(" "),_("p",[a._v("一旦你自己定义了协议名称，你必须还要指定listener.security.protocol.map参数告诉这个协议底层使用了哪种安全协议，比如指定listener.security.protocol.map=CONTROLLER:PLAINTEXT表示CONTROLLER这个自定义协议底层使用明文不加密传输数据。")]),a._v(" "),_("p",[a._v("至于三元组中的主机名和端口号则比较直观，不需要做过多解释。不过有个事情你还是要注意一下，经常有人会问主机名这个设置中我到底使用 IP 地址还是主机名。这里我给出统一的建议："),_("strong",[a._v("最好全部使用主机名，即 Broker 端和 Client 端应用配置中全部填写主机名")]),a._v("。 Broker 源代码中也使用的是主机名，如果你在某些地方使用了 IP 地址进行连接，可能会发生无法连接的问题。")]),a._v(" "),_("h4",{attrs:{id:"_2-1-4-topic-管理的相关参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-topic-管理的相关参数"}},[a._v("#")]),a._v(" 2.1.4 Topic 管理的相关参数")]),a._v(" "),_("ul",[_("li",[_("code",[a._v("auto.create.topics.enable")]),a._v("：是否允许自动创建 Topic。")]),a._v(" "),_("li",[_("code",[a._v("unclean.leader.election.enable")]),a._v("：是否允许 Unclean Leader 选举。")]),a._v(" "),_("li",[_("code",[a._v("auto.leader.rebalance.enable")]),a._v("：是否允许定期进行 Leader 选举。")])]),a._v(" "),_("p",[a._v("下面分开说明。")]),a._v(" "),_("p",[_("strong",[a._v("auto.create.topics.enable")]),a._v(" 参数我建议最好设置成 false，即不允许自动创建 Topic。在我们的线上环境里面有很多名字稀奇古怪的 Topic，我想大概都是因为该参数被设置成了 true 的缘故。")]),a._v(" "),_("p",[a._v("你可能有这样的经历，要为名为 test 的 Topic 发送事件，但是不小心拼写错误了，把 test 写成了 tst，之后启动了生产者程序。恭喜你，一个名为 tst 的 Topic 就被自动创建了。所以我一直相信好的运维应该防止这种情形的发生，特别是对于那些大公司而言，"),_("strong",[a._v("每个部门被分配的 Topic 应该由运维严格把控，决不能允许自行创建任何 Topic")]),a._v("。")]),a._v(" "),_("p",[_("strong",[a._v("unclean.leader.election.enable")]),a._v(" 是关闭 Unclean Leader 选举的。何谓 Unclean？还记得 Kafka 有多个副本这件事吗？每个分区都有多个副本来提供高可用。在这些副本中只能有一个副本对外提供服务，即所谓的 Leader 副本。那么问题来了，这些副本都有资格竞争 Leader 吗？显然不是，只有保存数据比较多的那些副本才有资格竞选，那些落后进度太多的副本没资格做这件事。")]),a._v(" "),_("p",[a._v("好了，现在出现这种情况了：假设那些保存数据比较多的副本都挂了怎么办？我们还要不要进行 Leader 选举了？此时这个参数就派上用场了。如果设置成 false，那么就坚持之前的原则，坚决不能让那些落后太多的副本竞选 Leader。这样做的后果是这个分区就不可用了，因为没有 Leader 了。反之如果是 true，那么 Kafka 允许你从那些“跑得慢”的副本中选一个出来当 Leader。这样做的后果是数据有可能就丢失了，因为这些副本保存的数据本来就不全，当了 Leader 之后它本人就变得膨胀了，认为自己的数据才是权威的。")]),a._v(" "),_("p",[a._v("这个参数在最新版的 Kafka 中默认就是 false，本来不需要我特意提的，但是比较搞笑的是社区对这个参数的默认值来来回回改了好几版了，鉴于我不知道你用的是哪个版本的 Kafka，所以"),_("strong",[a._v("建议你还是显式地把它设置成 false 吧")]),a._v("。")]),a._v(" "),_("p",[_("strong",[a._v("auto.leader.rebalance.enable")]),a._v(" 对生产环境影响非常大。设置它的值为 true 表示允许 Kafka 定期地对一些 Topic 分区进行 Leader 重选举，当然这个重选举不是无脑进行的，它要满足一定的条件才会发生。严格来说它与上一个参数中 Leader 选举的最大不同在于，它不是选 Leader，而是换 Leader！比如 Leader A 一直表现得很好，但若auto.leader.rebalance.enable=true，那么有可能一段时间后 Leader A 就要被强行卸任换成 Leader B。你要知道换一次 Leader 代价很高的，原本向 A 发送请求的所有客户端都要切换成向 B 发送请求，而且这种换 Leader 本质上没有任何性能收益，"),_("strong",[a._v("因此我建议你在生产环境中把这个参数设置成 false")]),a._v("。")]),a._v(" "),_("h4",{attrs:{id:"_2-1-5-数据留存相关的参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5-数据留存相关的参数"}},[a._v("#")]),a._v(" 2.1.5 数据留存相关的参数")]),a._v(" "),_("ul",[_("li",[_("code",[a._v("log.retention.{hour|minutes|ms}")]),a._v("：这是个“三兄弟”，都是控制一条消息数据被保存多长时间。从优先级上来说 ms 设置最高、minutes 次之、hour 最低。")]),a._v(" "),_("li",[_("code",[a._v("log.retention.bytes")]),a._v("：这是指定 Broker 为消息保存的总磁盘容量大小。")]),a._v(" "),_("li",[_("code",[a._v("message.max.bytes")]),a._v("：控制 Broker 能够接收的最大消息大小。")])]),a._v(" "),_("p",[a._v("先说这个 "),_("code",[a._v("log.retention.{hour|minutes|ms}")]),a._v("，虽然 ms 设置有最高的优先级，但是通常情况下我们还是设置 hour 级别的多一些，比如 log.retention.hour =168表示默认保存 7 天的数据，自动删除 7 天前的数据。很多公司把 Kafka 当做存储来使用，那么这个值就要相应地调大。")]),a._v(" "),_("p",[a._v("其次是这个 "),_("code",[a._v("log.retention.bytes")]),a._v("。这个值默认是 -1，表明你想在这台 Broker 上保存多少数据都可以，至少在容量方面 Broker 绝对为你开绿灯，不会做任何阻拦。这个参数真正发挥作用的场景其实是在云上构建多租户的 Kafka 集群：设想你要做一个云上的 Kafka 服务，每个租户只能使用 100GB 的磁盘空间，为了避免有个“恶意”租户使用过多的磁盘空间，设置这个参数就显得至关重要了。")]),a._v(" "),_("p",[a._v("最后说说 "),_("code",[a._v("message.max.bytes")]),a._v("。实际上今天我和你说的重要参数都是指那些不能使用默认值的参数，这个参数也是一样，默认的 1000012 太少了，还不到 1MB。实际场景中突破 1MB 的消息都是屡见不鲜的，因此"),_("strong",[a._v("在线上环境中设置一个比较大的值还是比较保险的做法")]),a._v("。毕竟它只是一个标尺而已，仅仅衡量 Broker 能够处理的最大消息大小，即使设置大一点也不会耗费什么磁盘空间的。")]),a._v(" "),_("h3",{attrs:{id:"_2-2-topic-级别的参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-topic-级别的参数"}},[a._v("#")]),a._v(" 2.2 Topic 级别的参数")]),a._v(" "),_("p",[a._v("如果同时设置了 Topic 级别参数和全局 Broker 参数，到底听谁的呢？答案就是 "),_("strong",[a._v("Topic 级别参数会覆盖全局 Broker 参数的值")]),a._v("，而每个 Topic 都能设置自己的参数值，这就是所谓的 Topic 级别参数。")]),a._v(" "),_("p",[a._v("下面按照用途分组的方式引出重要的 Topic 级别参数。")]),a._v(" "),_("p",[a._v("从保存消息方面来考量的话，下面这组参数是非常重要的：")]),a._v(" "),_("ul",[_("li",[_("code",[a._v("retention.ms")]),a._v("：规定了该 Topic 消息被保存的时长。默认是 7 天，即该 Topic 只保存最近 7 天的消息。一旦设置了这个值，它会覆盖掉 Broker 端的全局参数值。")]),a._v(" "),_("li",[_("code",[a._v("retention.bytes")]),a._v("：规定了要为该 Topic 预留多大的磁盘空间。和全局参数作用相似，这个值通常在多租户的 Kafka 集群中会有用武之地。当前默认值是 -1，表示可以无限使用磁盘空间。")])]),a._v(" "),_("p",[a._v("上面这些是从保存消息的维度来说的。如果从能处理的消息大小这个角度来看的话，有一个参数是必须要设置的，即 "),_("code",[a._v("max.message.bytes")]),a._v("。"),_("strong",[a._v("它决定了 Kafka Broker 能够正常接收该 Topic 的最大消息大小")]),a._v("。我知道目前在很多公司都把 Kafka 作为一个基础架构组件来运行，上面跑了很多的业务数据。如果在全局层面上，我们不好给出一个合适的最大消息值，那么不同业务部门能够自行设定这个 Topic 级别参数就显得非常必要了。在实际场景中，这种用法也确实是非常常见的。")]),a._v(" "),_("p",[a._v("Topic 级的参数有两种设置方式：")]),a._v(" "),_("ul",[_("li",[a._v("创建 Topic 时进行设置")]),a._v(" "),_("li",[a._v("修改 Topic 时设置")])]),a._v(" "),_("p",[a._v("我们先来看看如何在创建 Topic 时设置这些参数。我用上面提到的retention.ms和max.message.bytes举例。设想你的部门需要将交易数据发送到 Kafka 进行处理，需要保存最近半年的交易数据，同时这些数据很大，通常都有几 MB，但一般不会超过 5MB。现在让我们用以下命令来创建 Topic：")]),a._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[a._v("bin/kafka-topics.sh--bootstrap-serverlocalhost:9092--create--topictransaction--partitions1--replication-factor1--configretention.ms"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[a._v("15552000000")]),a._v("--configmax.message.bytes"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[a._v("5242880")]),a._v("\n")])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br")])]),_("p",[a._v("我们只需要知道 Kafka 开放了 kafka-topics 命令供我们来创建 Topic 即可。对于上面这样一条命令，请注意结尾处的 --config 设置，我们就是在 config 后面指定了想要设置的 Topic 级别参数。")]),a._v(" "),_("p",[a._v("下面看看使用另一个自带的命令kafka-configs来修改 Topic 级别参数。假设我们现在要发送最大值是 10MB 的消息，该如何修改呢？命令如下：")]),a._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[a._v("bin/kafka-configs.sh--zookeeperlocalhost:2181--entity-typetopics--entity-nametransaction--alter--add-configmax.message.bytes"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[a._v("10485760")]),a._v("\n")])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br")])]),_("p",[a._v("总体来说，你只能使用这么两种方式来设置 Topic 级别参数。我个人的建议是，你最好始终坚持使用第二种方式来设置，并且在未来，Kafka 社区很有可能统一使用kafka-configs脚本来调整 Topic 级别参数。")]),a._v(" "),_("h3",{attrs:{id:"_2-3-jvm-参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-jvm-参数"}},[a._v("#")]),a._v(" 2.3 JVM 参数")]),a._v(" "),_("p",[a._v("Kafka 集群运行在 JVM 上。")]),a._v(" "),_("p",[a._v("首先是 Java 版本，有条件的话至少使用 Java 8。")]),a._v(" "),_("p",[a._v("说到 JVM 端设置，堆大小这个参数至关重要。虽然在后面我们还会讨论如何调优 Kafka 性能的问题，但现在我想无脑给出一个通用的建议："),_("strong",[a._v("将你的 JVM 堆大小设置成 6GB 吧")]),a._v("，这是目前业界比较公认的一个合理值。我见过很多人就是使用默认的 Heap Size 来跑 Kafka，说实话默认的 1GB 有点小，毕竟 Kafka Broker 在与客户端进行交互时会在 JVM 堆上创建大量的 ByteBuffer 实例，Heap Size 不能太小。")]),a._v(" "),_("p",[a._v("JVM 端配置的另一个重要参数就是垃圾回收器的设置，也就是平时常说的 GC 设置。如果你依然在使用 Java 7，那么可以根据以下法则选择合适的垃圾回收器：")]),a._v(" "),_("ul",[_("li",[a._v("如果 Broker 所在机器的 CPU 资源非常充裕，建议使用 CMS 收集器。启用方法是指定-XX:+UseCurrentMarkSweepGC。")]),a._v(" "),_("li",[a._v("否则，使用吞吐量收集器。开启方法是指定-XX:+UseParallelGC。")])]),a._v(" "),_("p",[a._v("当然了，如果你已经在使用 Java 9+ 了，那么就"),_("strong",[a._v("用默认的 G1 收集器就好了")]),a._v("。在没有任何调优的情况下，G1 表现得要比 CMS 出色，主要体现在更少的 Full GC，需要调整的参数更少等，所以使用 G1 就好了。")]),a._v(" "),_("p",[a._v("如何为 Kafka 进行设置 JVM 参数呢？只需要设置下面这两个环境变量即可：")]),a._v(" "),_("ul",[_("li",[a._v("KAFKA_HEAP_OPTS：指定堆大小。")]),a._v(" "),_("li",[a._v("KAFKA_JVM_PERFORMANCE_OPTS：指定 GC 参数。")])]),a._v(" "),_("p",[a._v("比如你可以这样启动 Kafka Broker，即在启动 Kafka Broker 之前，先设置上这两个环境变量：")]),a._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[a._v("$"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KAFKA_HEAP_OPTS")]),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("--Xms6g  --Xmx6g\n$"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v("  "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KAFKA_JVM_PERFORMANCE_OPTS")]),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -server -XX:+UseG1GC -XX:MaxGCPauseMillis"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(" -XX:InitiatingHeapOccupancyPercent"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[a._v("35")]),a._v(" -XX:+ExplicitGCInvokesConcurrent -Djava.awt.headless"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n$"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" bin/kafka-server-start.sh config/server.properties\n")])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br"),_("span",{staticClass:"line-number"},[a._v("2")]),_("br"),_("span",{staticClass:"line-number"},[a._v("3")]),_("br")])]),_("h3",{attrs:{id:"_2-4-操作系统参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-操作系统参数"}},[a._v("#")]),a._v(" 2.4 操作系统参数")]),a._v(" "),_("p",[a._v("通常情况下，Kafka 并不需要设置太多的 OS 参数，但有些因素最好还是关注一下，比如下面这几个：")]),a._v(" "),_("ul",[_("li",[a._v("文件描述符限制")]),a._v(" "),_("li",[a._v("文件系统类型")]),a._v(" "),_("li",[a._v("Swappiness")]),a._v(" "),_("li",[a._v("提交时间")])]),a._v(" "),_("p",[a._v("首先是 "),_("strong",[a._v("ulimit -n")]),a._v("。我觉得任何一个 Java 项目最好都调整下这个值。实际上，文件描述符系统资源并不像我们想象的那样昂贵，你不用太担心调大此值会有什么不利的影响。通常情况下将它设置成一个超大的值是合理的做法，比如ulimit -n 1000000。还记得电影《让子弹飞》里的对话吗：“你和钱，谁对我更重要？都不重要，没有你对我很重要！”。这个参数也有点这么个意思。其实设置这个参数一点都不重要，但不设置的话后果很严重，比如你会经常看到“Too many open files”的错误。")]),a._v(" "),_("p",[a._v("其次是"),_("strong",[a._v("文件系统类型的选择")]),a._v("。这里所说的文件系统指的是如 ext3、ext4 或 XFS 这样的日志型文件系统。根据官网的测试报告，XFS 的性能要强于 ext4，所以生产环境最好还是使用 XFS。对了，最近有个 Kafka 使用 "),_("a",{attrs:{href:"https://www.confluent.io/kafka-summit-sf18/kafka-on-zfs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("ZFS 的数据报告"),_("OutboundLink")],1),a._v("，貌似性能更加强劲，有条件的话不妨一试。")]),a._v(" "),_("p",[a._v("第三是 "),_("strong",[a._v("swap 的调优")]),a._v("。网上很多文章都提到设置其为 0，将 swap 完全禁掉以防止 Kafka 进程使用 swap 空间。我个人反倒觉得还是不要设置成 0 比较好，我们可以设置成一个较小的值。为什么呢？因为一旦设置成 0，当物理内存耗尽时，操作系统会触发 OOM killer 这个组件，它会随机挑选一个进程然后 kill 掉，即根本不给用户任何的预警。但如果设置成一个比较小的值，当开始使用 swap 空间时，你至少能够观测到 Broker 性能开始出现急剧下降，从而给你进一步调优和诊断问题的时间。基于这个考虑，我个人"),_("strong",[a._v("建议将 swappniess 配置成一个接近 0 但不为 0 的值，比如 1")]),a._v("。")]),a._v(" "),_("p",[a._v("最后是"),_("strong",[a._v("提交时间")]),a._v("或者说是 "),_("strong",[a._v("Flush 落盘时间")]),a._v("。向 Kafka 发送数据并不是真要等数据被写入磁盘才会认为成功，而是只要数据被写入到操作系统的页缓存（Page Cache）上就可以了，随后操作系统根据 LRU 算法会定期将页缓存上的“脏”数据落盘到物理磁盘上。这个定期就是由提交时间来确定的，默认是 5 秒。一般情况下我们会认为这个时间太频繁了，可以适当地增加提交间隔来降低物理磁盘的写操作。当然你可能会有这样的疑问：如果在页缓存中的数据在写入到磁盘前机器宕机了，那岂不是数据就丢失了。的确，这种情况数据确实就丢失了，但鉴于 Kafka 在软件层面已经提供了多副本的冗余机制，因此这里"),_("strong",[a._v("稍微拉大提交间隔去换取性能还是一个合理的做法")]),a._v("。")]),a._v(" "),_("h3",{attrs:{id:"_2-5-小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-小结"}},[a._v("#")]),a._v(" 2.5 小结")]),a._v(" "),_("p",[a._v("以上构成了完整的 Kafka 参数配置列表。我希望这些最佳实践能够在你搭建 Kafka 集群时助你一臂之力，但切记配置因环境而异，一定要结合自身业务需要以及具体的测试来验证它们的有效性。")])])}),[],!1,null,null,null);e.default=v.exports}}]);
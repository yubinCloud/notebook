(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1046:function(_,t,v){"use strict";v.r(t);var e=v(22),s=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("blockquote",[v("p",[_._v("参考：")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://time.geekbang.org/column/intro/100056701?tab=catalog9",target:"_blank",rel:"noopener noreferrer"}},[_._v("32 Redis 主从同步与故障切换，有哪些坑？| 极客时间"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://time.geekbang.org/column/intro/100056701?tab=catalog9",target:"_blank",rel:"noopener noreferrer"}},[_._v("33 脑裂：一次奇怪的数据丢失| 极客时间"),v("OutboundLink")],1)])])]),_._v(" "),v("h2",{attrs:{id:"_1-redis-主从同步与故障切换-有哪些坑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis-主从同步与故障切换-有哪些坑"}},[_._v("#")]),_._v(" 1. Redis 主从同步与故障切换，有哪些坑？")]),_._v(" "),v("p",[_._v("Redis 的主从同步机制不仅可以让从库服务更多的读请求，分担主库的压力，而且还能在主库发生故障时，进行主从库切换，提供高可靠服务。不过在使用主从机制时可能会遇到一些坑，这里主要介绍三个坑：主从数据不一致、读到过期数据，以及配置项设置得不合理从而导致服务挂掉。")]),_._v(" "),v("h3",{attrs:{id:"_1-1-主从数据不一致"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-主从数据不一致"}},[_._v("#")]),_._v(" 1.1 主从数据不一致")]),_._v(" "),v("p",[v("mark",[_._v("主从数据不一致")]),_._v("，就是指客户端从从库中读取到的值和主库中的最新值并不一致。")]),_._v(" "),v("p",[_._v("出现的原因就是主从之间的数据复制是异步进行的。从库出现滞后的两个主要原因：")]),_._v(" "),v("ol",[v("li",[_._v("网络延迟")]),_._v(" "),v("li",[_._v("从库因其他操作而阻塞较长时间")])]),_._v(" "),v("p",[_._v("应对方法主要有两个：")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("硬件方面，尽量保证主从库间的网络状况良好")]),_._v("。例如，我们要避免把主从库部署在不同的机房，或者是避免把网络通信密集的应用（例如数据分析应用）和Redis主从库部署在一起。")]),_._v(" "),v("li",[v("strong",[_._v("还可以开发一个外部程序来监控主从库间的复制进度")]),_._v("。下面介绍方法。")])]),_._v(" "),v("p",[_._v("因为Redis的INFO replication命令可以查看主库接收写命令的进度信息（master_repl_offset）和从库复制写命令的进度信息（slave_repl_offset），所以，我们就可以开发一个监控程序，先用INFO replication命令查到主、从库的进度，然后，我们用master_repl_offset减去slave_repl_offset，这样就能得到从库和主库间的复制进度差值了。")]),_._v(" "),v("p",[_._v("如果某个从库的进度差值大于我们预设的阈值，我们可以让客户端不再和这个从库连接进行数据读取，这样就可以减少读到不一致数据的情况。不过，"),v("strong",[_._v("为了避免出现客户端和所有从库都不能连接的情况，我们需要把复制进度差值的阈值设置得大一些")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"_1-2-读取过期数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-读取过期数据"}},[_._v("#")]),_._v(" 1.2 读取过期数据")]),_._v(" "),v("p",[_._v("我们在使用 Redis 主从集群时，有时会读到过期数据。例如，数据 X 的过期时间是 202010240900，但是客户端在 202010240910 时，仍然可以从从库中读到数据 X。一个数据过期后，应该是被删除的，客户端不能再读取到该数据，但是，Redis 为什么还能在从库中读到过期的数据呢？")]),_._v(" "),v("p",[v("strong",[_._v("其实，这个问题是由Redis的过期数据删除策略引起的")]),_._v("。")]),_._v(" "),v("p",[_._v("Redis 同时使用了两种策略来删除过期数据：")]),_._v(" "),v("ol",[v("li",[v("mark",[_._v("惰性删除策略")]),_._v("：当一个数据的过期时间到了以后，并不会立即删除数据，而是等到再有请求来读写这个数据时，对数据进行检查，如果发现数据已经过期了，再删除这个数据。\n"),v("ul",[v("li",[_._v("这种方法减少了删除数据对 CPU 资源的使用，但会导致大量已过期数据留在内存中。")])])]),_._v(" "),v("li",[v("mark",[_._v("定期删除策略")]),_._v("：Redis 每隔一段时间（默认100ms），就会随机选出一定数量的数据，检查它们是否过期，并把其中过期的数据删除，这样就可以及时释放一些内存。")])]),_._v(" "),v("p",[_._v("清楚了这两个删除策略，我们再来看看它们为什么会导致读取到过期数据。")]),_._v(" "),v("ul",[v("li",[_._v("定期删除策略只会随机检查一部分数据，仍会存在过期数据残留的问题。")]),_._v(" "),v("li",[_._v("惰性删除策略只在数据再次被访问时才会实际删除。如果客户端从主库上读取留存的过期数据，主库会触发删除操作，此时，客户端并不会读到过期数据。但是，从库本身不会执行删除操作，如果客户端在从库中访问留存的过期数据，从库并不会触发数据删除。那么，从库会给客户端返回过期数据吗？这就和你使用的Redis版本有关了。如果你使用的是Redis 3.2之前的版本，那么，从库在服务读请求时，并不会判断数据是否过期，而是会返回过期数据。在3.2版本后，Redis做了改进，如果读取的数据已经过期了，从库虽然不会删除，但是会返回空值，这就避免了客户端读到过期数据。所以，"),v("strong",[_._v("在应用主从集群时，尽量使用 Redis 3.2 及以上版本")]),_._v("。")])]),_._v(" "),v("p",[_._v("那只要使用了Redis 3.2 后的版本，就不会读到过期数据了吗？其实还是会的。原因跟 Redis 用于设置过期时间的命令有关系，有些命令给数据设置的过期时间在从库上可能会被延后，导致应该过期的数据又在从库上被读取到了，我来给你具体解释下。")]),_._v(" "),v("p",[_._v("设置数据过期时间的命令一共有4个，我们可以把它们分成两类：")]),_._v(" "),v("ul",[v("li",[_._v("EXPIRE 和 PEXPIRE：它们给数据设置的是"),v("strong",[_._v("从命令执行时开始计算的存活时间")]),_._v("；")]),_._v(" "),v("li",[_._v("EXPIREAT 和 PEXPIREAT："),v("strong",[_._v("它们会直接把数据的过期时间设置为具体的一个时间点")]),_._v("。")])]),_._v(" "),v("p",[_._v("这 4 个命令的参数和含义如下表所示：")]),_._v(" "),v("center",[v("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20230401110858.png",alt:"20230401110858"}})]),_._v(" "),v("p",[_._v("示例：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("EXPIRE testkey 60")]),_._v("：把 testkey 的过期时间设置为 60s 后")]),_._v(" "),v("li",[v("code",[_._v("EXPIREAT testkey 1603501200")]),_._v("：让testkey在2020年10月24日上午9点过期，命令中的1603501200就是以秒数时间戳表示的10月24日上午9点。")])]),_._v(" "),v("p",[_._v("由于网络延迟，使用 EXPIRE 可能会让主从库的过期时间点不一样。因此建议："),v("font",{attrs:{color:"blue"}},[_._v("在业务应用中使用 EXPIREAT/PEXPIREAT 命令，把数据的过期时间设置为具体的时间点，避免读到过期数据")]),_._v("。另外注意，EXPIREAT/PEXPIREAT 设置的是时间点，所以"),v("strong",[_._v("主从节点上的时钟要保持一致")]),_._v("，具体的做法是，让主从节点和相同的 NTP 服务器进行时钟同步。")],1),_._v(" "),v("h3",{attrs:{id:"_1-3-不合理配置项导致的服务挂掉"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-不合理配置项导致的服务挂掉"}},[_._v("#")]),_._v(" 1.3 不合理配置项导致的服务挂掉")]),_._v(" "),v("p",[_._v("这里涉及到的配置项有两个，分别是 "),v("strong",[_._v("protected-mode 和 cluster-node-timeout")]),_._v("。")]),_._v(" "),v("h4",{attrs:{id:"_1-protected-mode-配置项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-protected-mode-配置项"}},[_._v("#")]),_._v(" 1）protected-mode 配置项")]),_._v(" "),v("p",[_._v("这个配置项的作用是限定哨兵实例能否被其他服务器访问：")]),_._v(" "),v("ul",[v("li",[_._v("yes：哨兵实例只能在部署的服务器本地进行访问")]),_._v(" "),v("li",[_._v("no：其他服务器也可以访问这个哨兵实例")])]),_._v(" "),v("p",[_._v("正因为这样，如果protected-mode被设置为yes，而其余哨兵实例部署在其它服务器，那么，这些哨兵实例间就无法通信。当主库故障时，哨兵无法判断主库下线，也无法进行主从切换，最终Redis服务不可用。")]),_._v(" "),v("p",[_._v("所以，"),v("strong",[_._v("我们在应用主从集群时，要注意将 protected-mode 配置项设置为no，并且将bind配置项设置为其它哨兵实例的IP地址")]),_._v("。这样一来，只有在bind中设置了IP地址的哨兵，才可以访问当前实例，既保证了实例间能够通信进行主从切换，也保证了哨兵的安全性。")]),_._v(" "),v("p",[_._v("我们来看一个简单的小例子。如果设置了下面的配置项，那么，部署在192.168.10.3/4/5这三台服务器上的哨兵实例就可以相互通信，执行主从切换：")]),_._v(" "),v("div",{staticClass:"language-plain line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-plain"}},[v("code",[_._v("protected-mode no\nbind 192.168.10.3 192.168.10.4 192.168.10.5\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br")])]),v("h4",{attrs:{id:"_2-cluster-node-timeout-配置项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-cluster-node-timeout-配置项"}},[_._v("#")]),_._v(" 2）cluster-node-timeout 配置项")]),_._v(" "),v("p",[v("strong",[_._v("这个配置项设置了Redis Cluster中实例响应心跳消息的超时时间")]),_._v("。")]),_._v(" "),v("p",[_._v("当我们在Redis Cluster集群中为每个实例配置了“一主一从”模式时，如果主实例发生故障，从实例会切换为主实例，受网络延迟和切换操作执行的影响，切换时间可能较长，就会导致实例的心跳超时（超出cluster-node-timeout）。实例超时后，就会被Redis Cluster判断为异常。而Redis Cluster正常运行的条件就是，有半数以上的实例都能正常运行。")]),_._v(" "),v("p",[_._v("所以，如果执行主从切换的实例超过半数，而主从切换时间又过长的话，就可能有半数以上的实例心跳超时，从而可能导致整个集群挂掉。所以，"),v("font",{attrs:{color:"blue"}},[_._v("我建议你将cluster-node-timeout调大些（例如10到20秒）")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"_1-4-小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-小结"}},[_._v("#")]),_._v(" 1.4 小结")]),_._v(" "),v("p",[_._v("这一节主要讲了 Redis 做主从同步时可能出现的 3 个坑：主从数据不一致、读取到过期数据和不合理配置项导致服务挂掉。总结如下：")]),_._v(" "),v("center",[v("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20230401194138.png",alt:"20230401194138"}})]),_._v(" "),v("p",[_._v("最后，关于主从库数据不一致的问题，我还想再给你提一个小建议：Redis中的slave-serve-stale-data配置项设置了从库能否处理数据读写命令，你可以把它设置为no。这样一来，从库只能服务INFO、SLAVEOF命令，这就可以避免在从库中读到不一致的数据了。")]),_._v(" "),v("p",[_._v("不过，你要注意下这个配置项和slave-read-only的区别，slave-read-only是设置从库能否处理写命令，slave-read-only设置为yes时，从库只能处理读请求，无法处理写请求，你可不要搞混了。")]),_._v(" "),v("h2",{attrs:{id:"_2-脑裂-一次奇怪的数据丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-脑裂-一次奇怪的数据丢失"}},[_._v("#")]),_._v(" 2. 脑裂：一次奇怪的数据丢失")]),_._v(" "),v("blockquote",[v("p",[_._v("在使用主从集群时，我曾遇到过这样一个问题：我们的主从集群有1个主库、5个从库和3个哨兵实例，在使用的过程中，我们发现客户端发送的一些数据丢失了，这直接影响到了业务层的数据可靠性。通过排查才知道，这其实是主从集群中脑裂问题导致的。")])]),_._v(" "),v("p",[v("mark",[_._v("脑裂")]),_._v("：指在主从集群中，同时有两个主节点，它们都能接收写请求。而脑裂最直接的影响，就是客户端不知道应该往哪个主节点写入数据，结果就是不同的客户端会往不同的主节点上写入数据。而且，严重的话，脑裂会进一步导致数据丢失。")]),_._v(" "),v("h3",{attrs:{id:"_2-1-为什么会发生脑裂"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-为什么会发生脑裂"}},[_._v("#")]),_._v(" 2.1 为什么会发生脑裂？")]),_._v(" "),v("p",[_._v("刚才我提到，我最初发现的问题是，在主从集群中，客户端发送的数据丢失了。所以，我们首先要弄明白，为什么数据会丢失？是不是数据同步出了问题？")]),_._v(" "),v("h4",{attrs:{id:"_2-1-1-第一步-确认是不是数据同步出现了问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-第一步-确认是不是数据同步出现了问题"}},[_._v("#")]),_._v(" 2.1.1 第一步：确认是不是数据同步出现了问题")]),_._v(" "),v("p",[_._v("在主从集群中发生数据丢失，最常见的原因就是："),v("strong",[_._v("主库的数据还没有同步到从库，结果主库发生了故障，等从库升级为主库后，未同步的数据就丢失了")]),_._v("。")]),_._v(" "),v("p",[_._v("如果是这种情况的数据丢失，我们可以通过比对主从库上的复制进度差值来进行判断，也就是计算master_repl_offset和slave_repl_offset的差值。如果从库上的slave_repl_offset小于原主库的master_repl_offset，那么，我们就可以认定数据丢失是由数据同步未完成导致的。")]),_._v(" "),v("p",[_._v("在背景问题中，我们如上做了检查，发现并不是这个问题。")]),_._v(" "),v("h4",{attrs:{id:"_2-1-2-第二步-排查客户端的操作日志-发现脑裂现象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-第二步-排查客户端的操作日志-发现脑裂现象"}},[_._v("#")]),_._v(" 2.1.2 第二步：排查客户端的操作日志，发现脑裂现象")]),_._v(" "),v("p",[_._v("在排查客户端的操作日志时，我们发现，在主从切换后的一段时间内，有一个客户端仍然在和原主库通信，并没有和升级的新主库进行交互。这就相当于主从集群中同时有了两个主库。根据这个迹象，我们就想到了在分布式主从集群发生故障时会出现的一个问题：脑裂。")]),_._v(" "),v("p",[_._v("但是，不同客户端给两个主库发送数据写操作，按道理来说，只会导致新数据会分布在不同的主库上，并不会造成数据丢失。那么，为什么我们的数据仍然丢失了呢？")]),_._v(" "),v("p",[_._v("到这里，我们的排查思路又一次中断了。不过，在分析问题时，我们一直认为“从原理出发是追本溯源的好方法”。脑裂是发生在主从切换的过程中，我们猜测，肯定是漏掉了主从集群切换过程中的某个环节，所以，我们把研究的焦点投向了主从切换的执行过程。")]),_._v(" "),v("h4",{attrs:{id:"_2-1-3-第三步-发现是原主库假故障导致的脑裂"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-第三步-发现是原主库假故障导致的脑裂"}},[_._v("#")]),_._v(" 2.1.3 第三步：发现是原主库假故障导致的脑裂")]),_._v(" "),v("p",[_._v("我们是采用哨兵机制进行主从切换的，当主从切换发生时，一定是有超过预设数量（quorum配置项）的哨兵实例和主库的心跳都超时了，才会把主库判断为客观下线，然后，哨兵开始执行切换操作。哨兵切换完成后，客户端会和新主库进行通信，发送请求操作。")]),_._v(" "),v("p",[_._v("但是，在切换过程中，既然客户端仍然和原主库通信，这就表明，"),v("strong",[_._v("原主库并没有真的发生故障")]),_._v("（例如主库进程挂掉）。我们猜测，主库是由于某些原因无法处理请求，也没有响应哨兵的心跳，才被哨兵错误地判断为客观下线的。结果，在被判断下线之后，原主库又重新开始处理请求了，而此时，哨兵还没有完成主从切换，客户端仍然可以和原主库通信，客户端发送的写操作就会在原主库上写入数据了。")]),_._v(" "),v("p",[_._v("为了验证原主库只是“假故障”，我们也查看了原主库所在服务器的资源使用监控记录。")]),_._v(" "),v("p",[_._v("的确，我们看到原主库所在的机器有一段时间的CPU利用率突然特别高，这是我们在机器上部署的一个数据采集程序导致的。因为这个程序基本把机器的CPU都用满了，导致Redis主库无法响应心跳了，在这个期间内，哨兵就把主库判断为客观下线，开始主从切换了。不过，这个数据采集程序很快恢复正常，CPU的使用率也降下来了。此时，原主库又开始正常服务请求了。")]),_._v(" "),v("p",[_._v("正因为原主库并没有真的发生故障，我们在客户端操作日志中就看到了和原主库的通信记录。等到从库被升级为新主库后，主从集群里就有两个主库了，到这里，我们就把脑裂发生的原因摸清楚了。")]),_._v(" "),v("p",[_._v("为了帮助你加深理解，我再画一张图，展示一下脑裂的发生过程：")]),_._v(" "),v("center",[v("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20230401222906.png",alt:"20230401222906"}})]),_._v(" "),v("p",[_._v("弄清楚了脑裂发生的原因后，我们又结合主从切换的原理过程进行了分析，很快就找到数据丢失的原因了。")]),_._v(" "),v("h3",{attrs:{id:"_2-2-为什么脑裂会导致数据丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-为什么脑裂会导致数据丢失"}},[_._v("#")]),_._v(" 2.2 为什么脑裂会导致数据丢失？")]),_._v(" "),v("p",[_._v("主从切换后，从库一旦升级为新主库，哨兵就会让原主库执行slave of命令，和新主库重新进行全量同步。而在全量同步执行的最后阶段，原主库需要清空本地的数据，加载新主库发送的RDB文件，这样一来，原主库在主从切换期间保存的新写数据就丢失了。")]),_._v(" "),v("p",[_._v("下面这张图直观地展示了原主库数据丢失的过程：")]),_._v(" "),v("center",[v("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20230401230617.png",alt:"20230401230617"}})]),_._v(" "),v("p",[_._v("到这里，我们就完全弄明白了这个问题的发生过程和原因。")]),_._v(" "),v("p",[_._v("在主从切换的过程中，如果原主库只是“假故障”，它会触发哨兵启动主从切换，一旦等它从假故障中恢复后，又开始处理请求，这样一来，就会和新主库同时存在，形成脑裂。"),v("strong",[_._v("等到哨兵让原主库和新主库做全量同步后，原主库在切换期间保存的数据就丢失了")]),_._v("。")]),_._v(" "),v("p",[_._v("看到这里，你肯定会很关心，我们该怎么应对脑裂造成的数据丢失问题呢？")]),_._v(" "),v("h3",{attrs:{id:"_2-3-如何应对脑裂问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-如何应对脑裂问题"}},[_._v("#")]),_._v(" 2.3 如何应对脑裂问题？")]),_._v(" "),v("p",[_._v("刚刚说了，主从集群中的数据丢失事件，归根结底是因为发生了脑裂。所以，我们必须要找到应对脑裂问题的策略。")]),_._v(" "),v("p",[_._v("既然问题是出在原主库发生假故障后仍然能接收请求上，我们就开始在主从集群机制的配置项中查找是否有限制主库接收请求的设置。")]),_._v(" "),v("p",[_._v("通过查找，我们发现，Redis 已经提供了两个配置项来限制主库的请求处理，分别是 min-slaves-to-write 和 min-slaves-max-lag：")]),_._v(" "),v("ul",[v("li",[_._v("min-slaves-to-write：这个配置项设置了主库能进行数据同步的最少从库数量；")]),_._v(" "),v("li",[_._v("min-slaves-max-lag：这个配置项设置了主从库间进行数据复制时，从库给主库发送 ACK 消息的最大延迟（以秒为单位）。")])]),_._v(" "),v("p",[_._v("有了这两个配置项后，我们就可以轻松地应对脑裂问题了。具体咋做呢？我们可以把min-slaves-to-write和min-slaves-max-lag这两个配置项搭配起来使用，分别给它们设置一定的阈值，假设为N和T。这两个配置项组合后的要求是，主库连接的从库中至少有N个从库，和主库进行数据复制时的ACK消息延迟不能超过T秒，否则，主库就不会再接收客户端的请求了。")]),_._v(" "),v("p",[_._v("即使原主库是假故障，它在假故障期间也无法响应哨兵心跳，也不能和从库进行同步，自然也就无法和从库进行ACK确认了。这样一来，min-slaves-to-write和min-slaves-max-lag的组合要求就无法得到满足，原主库就会被限制接收客户端请求，客户端也就不能在原主库中写入新数据了。")]),_._v(" "),v("p",[_._v("等到新主库上线时，就只有新主库能接收和处理客户端请求，此时，新写的数据会被直接写到新主库中。而原主库会被哨兵降为从库，即使它的数据被清空了，也不会有新数据丢失。")]),_._v(" "),v("p",[_._v("我再来给你举个例子。")]),_._v(" "),v("p",[_._v("假设我们将min-slaves-to-write设置为1，把min-slaves-max-lag设置为12s，把哨兵的down-after-milliseconds设置为10s，主库因为某些原因卡住了15s，导致哨兵判断主库客观下线，开始进行主从切换。同时，因为原主库卡住了15s，没有一个从库能和原主库在12s内进行数据复制，原主库也无法接收客户端请求了。这样一来，主从切换完成后，也只有新主库能接收请求，不会发生脑裂，也就不会发生数据丢失的问题了。")]),_._v(" "),v("h3",{attrs:{id:"_2-4-小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-小结"}},[_._v("#")]),_._v(" 2.4 小结")]),_._v(" "),v("p",[_._v("这节课，我们学习了主从切换时可能遇到的脑裂问题。脑裂是指在主从集群中，同时有两个主库都能接收写请求。在Redis的主从切换过程中，如果发生了脑裂，客户端数据就会写入到原主库，如果原主库被降为从库，这些新写入的数据就丢失了。")]),_._v(" "),v("p",[_._v("脑裂发生的原因主要是原主库发生了假故障，我们来总结下假故障的两个原因。")]),_._v(" "),v("ol",[v("li",[_._v("和主库部署在同一台服务器上的其他程序临时占用了大量资源（例如CPU资源），导致主库资源使用受限，短时间内无法响应心跳。其它程序不再使用资源时，主库又恢复正常。")]),_._v(" "),v("li",[_._v("主库自身遇到了阻塞的情况，例如，处理bigkey或是发生内存swap，短时间内无法响应心跳，等主库阻塞解除后，又恢复正常的请求处理了。")])]),_._v(" "),v("p",[_._v("为了应对脑裂，你可以在主从集群部署时，通过合理地配置参数min-slaves-to-write和min-slaves-max-lag，来预防脑裂的发生。")]),_._v(" "),v("p",[_._v("在实际应用中，可能会因为网络暂时拥塞导致从库暂时和主库的ACK消息超时。在这种情况下，并不是主库假故障，我们也不用禁止主库接收请求。")]),_._v(" "),v("p",[_._v("所以，我给你的建议是，"),v("font",{attrs:{color:"blue"}},[_._v("假设从库有K个，可以将min-slaves-to-write设置为K/2+1（如果K等于1，就设为1），将min-slaves-max-lag设置为十几秒（例如10～20s），在这个配置下，如果有一半以上的从库和主库进行的ACK消息延迟超过十几秒，我们就禁止主库接收客户端写请求")]),_._v("。")],1),_._v(" "),v("p",[_._v("这样一来，我们可以避免脑裂带来数据丢失的情况，而且，也不会因为只有少数几个从库因为网络阻塞连不上主库，就禁止主库接收请求，增加了系统的鲁棒性。")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);
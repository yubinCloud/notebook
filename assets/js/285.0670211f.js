(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1039:function(e,s,a){"use strict";a.r(s);var t=a(22),i=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v("参考：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/intro/100056701?tab=catalog",target:"_blank",rel:"noopener noreferrer"}},[e._v("14 如何在 Redis 中保存时间序列数据？| 极客时间"),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"_1-如何在-redis-中保存时间序列数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何在-redis-中保存时间序列数据"}},[e._v("#")]),e._v(" 1. 如何在 Redis 中保存时间序列数据？")]),e._v(" "),a("p",[e._v("我们经常面临这样一个需求：记录用户在网站或者 App 上的点击行为数据，来分析用户行为。这里的数据一般包括用户 ID、行为类型（例如浏览、登录、下单等）、行为发生的时间戳：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("UserID, Type, TimeStamp\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这些与发生时间相关的一组数据，就是"),a("mark",[e._v("时间序列数据")]),e._v("。"),a("strong",[e._v("这些数据的特点是没有严格的关系模型，记录的信息可以表示成键和值的关系")]),e._v("（例如，一个设备ID对应一条记录），所以，并不需要专门用关系型数据库（例如 MySQL）来保存。而 Redis 的键值数据模型，正好可以满足这里的数据存取需求。"),a("strong",[e._v("Redis 基于自身数据结构以及扩展模块，提供了两种解决方案")]),e._v("。我们在这里对其进行讨论。")]),e._v(" "),a("h3",{attrs:{id:"_1-1-时间序列数据的读写特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-时间序列数据的读写特点"}},[e._v("#")]),e._v(" 1.1 时间序列数据的读写特点")]),e._v(" "),a("h4",{attrs:{id:"_1-写特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-写特点"}},[e._v("#")]),e._v(" 1） 写特点")]),e._v(" "),a("p",[e._v("在实际应用中，时间序列数据通常是持续高并发写入的，这些数据的写入主要是插入新数据，而不是更新数据。因为这些数据往往代表某个设备在某个时刻的测量值。")]),e._v(" "),a("p",[e._v("所以，这种数据的写入特点很简单，就是插入数据快，这就"),a("strong",[e._v("要求我们选择的数据类型，在进行数据插入时，复杂度要低，尽量不要阻塞")]),e._v("。")]),e._v(" "),a("h4",{attrs:{id:"_2-读特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-读特点"}},[e._v("#")]),e._v(" 2） 读特点")]),e._v(" "),a("p",[e._v("我们在查询时间序列数据时，既有对单条记录的查询（如查询一个设备的某时刻状态），也有对某个时间范围内的数据的查询（如查看一上午所有设备的状态）。除此之外，还有一些更复杂的查询，比如对某个时间范围内的数据做聚合计算，如计算均值、求最大值等。")]),e._v(" "),a("p",[e._v("概括时间序列数据的特点：查询模式多。")]),e._v(" "),a("p",[e._v("弄清楚了时间序列数据的读写特点，接下来我们就看看如何在 Redis 中保存这些数据。我们来分析下：针对时间序列数据的“写要快”，Redis的高性能写特性直接就可以满足了；而针对“查询模式多”，也就是要支持单点查询、范围查询和聚合计算，Redis 提供了保存时间序列数据的两种方案，分别可以基于 Hash 和 Sorted Set 实现，以及基于 RedisTimeSeries 模块实现。")]),e._v(" "),a("h3",{attrs:{id:"_1-2-基于-hash-和-sorted-set-保存时间序列数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-基于-hash-和-sorted-set-保存时间序列数据"}},[e._v("#")]),e._v(" 1.2 基于 Hash 和 Sorted Set 保存时间序列数据")]),e._v(" "),a("p",[e._v("Hash 和 Sorted Set 组合的方式有一个明显的好处：它们是 Redis 内在的数据类型，代码成熟和性能稳定。所以，基于这两个数据类型保存时间序列数据，系统稳定性是可以预期的。")]),e._v(" "),a("h4",{attrs:{id:"_1-2-1-为什么要同时使用这两种类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-为什么要同时使用这两种类型"}},[e._v("#")]),e._v(" 1.2.1 为什么要同时使用这两种类型？")]),e._v(" "),a("p",[e._v("不过，在前面学习的场景中，我们都是使用一个数据类型来存取数据，那么，"),a("strong",[e._v("为什么保存时间序列数据，要同时使用这两种类型")]),e._v("？这是我们要回答的第一个问题。")]),e._v(" "),a("p",[e._v("关于 Hash 类型，我们都知道，它有一个特点是，可以实现对单键的快速查询。这就满足了时间序列数据的单键查询需求。我们可以把时间戳作为 Hash 集合的 key，把记录的设备状态值作为 Hash 集合的 value。")]),e._v(" "),a("p",[e._v("可以看下用 Hash 集合记录设备的温度值的示意图：")]),e._v(" "),a("center",[a("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20230319201038.png",alt:"20230319201038"}})]),e._v(" "),a("p",[e._v("当我们想要查询某个时间点或者是多个时间点上的温度数据时，直接使用 "),a("strong",[e._v("HGET 命令")]),e._v("或者 "),a("strong",[e._v("HMGET 命令")]),e._v("，就可以分别获得 Hash 集合中的一个 key 和多个 key 的 value 值了。示例如下：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('HGET device:temperature 202008030905\n"25.1"\n\nHMGET device:temperature 202008030905 202008030907 202008030908\n1) "25.1"\n2) "25.9"\n3) "24.9"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("你看，用 Hash 类型来实现单键的查询很简单。但是，"),a("strong",[e._v("Hash类型有个短板：它并不支持对数据进行范围查询")]),e._v("。如果想要做范围查询的话，Hash 类型需要全部扫描才行。")]),e._v(" "),a("p",[e._v("为了能同时支持按时间戳范围的查询，可以用 Sorted Set 来保存时间序列数据，因为它能够根据元素的权重分数来排序。我们可以把时间戳作为 Sorted Set 集合的元素分数，把时间点上记录的数据作为元素本身：")]),e._v(" "),a("center",[a("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20230319201345.png",alt:"20230319201345"}})]),e._v(" "),a("p",[e._v("使用 Sorted Set 保存数据后，我们就可以使用ZRANGEBYSCORE命令，按照输入的最大时间戳和最小时间戳来查询这个时间范围内的温度值了。如下所示，我们来查询一下在2020年8月3日9点7分到9点10分间的所有温度值：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('ZRANGEBYSCORE device:temperature 202008030907 202008030910\n1) "25.9"\n2) "24.9"\n3) "25.3"\n4) "25.2"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h4",{attrs:{id:"_1-2-2-如何保证原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-如何保证原子性"}},[e._v("#")]),e._v(" 1.2.2 如何保证原子性？")]),e._v(" "),a("p",[e._v("同时使用 Hash 与 Sorted Set 满足了单个时间点和一个时间范围内的数据查询需求了，但是我们又会面临一个新的问题："),a("strong",[e._v("如何保证写入 Hash 和 Sorted Set 是一个原子性的操作呢")]),e._v("？所谓的原子性操作，就是指多个写命令要么全部成功，要么全都不成功。")]),e._v(" "),a("p",[e._v("那 Redis 是怎么保证原子性操作的呢？这里就涉及到了 Redis 用来实现简单的事务的 MULTI 和 EXEC 命令。"),a("strong",[e._v("当多个命令及其参数本身无误时，MULTI 和 EXEC 命令可以保证执行这些命令时的原子性")]),e._v("：")]),e._v(" "),a("ul",[a("li",[a("mark",[e._v("MULTI 命令")]),e._v("：表示一系列原子性操作的开始。收到这个命令后，Redis 就知道，接下来再收到的命令需要放到一个内部队列中，后续一起执行，保证原子性。")]),e._v(" "),a("li",[a("mark",[e._v("EXEC 命令")]),e._v("：表示一系列原子性操作的结束。一旦 Redis 收到了这个命令，就表示所有要保证原子性的命令操作都已经发送完成了。此时，Redis 开始执行刚才放到内部队列中的所有命令操作。")])]),e._v(" "),a("p",[e._v("如下图所示：")]),e._v(" "),a("center",[a("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20230319210436.png",alt:"20230319210436"}})]),e._v(" "),a("p",[e._v("以保存设备状态信息的需求为例，我们执行下面的代码，把设备在2020年8月3日9时5分的温度，分别用 HSET 命令和 ZADD 命令写入 Hash 集合和 Sorted Set 集合：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("127.0.0.1:6379> MULTI\nOK\n\n127.0.0.1:6379> HSET device:temperature 202008030911 26.8\nQUEUED\n\n127.0.0.1:6379> ZADD device:temperature 202008030911 26.8\nQUEUED\n\n127.0.0.1:6379> EXEC\n1) (integer) 1\n2) (integer) 1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("到这里，我们就解决了时间序列数据的单点查询、范围查询问题，并使用MUTLI和EXEC命令保证了Redis能原子性地把数据保存到Hash和Sorted Set中。")]),e._v(" "),a("h3",{attrs:{id:"_1-3-基于-redistimeseries-模块保存时间序列数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-基于-redistimeseries-模块保存时间序列数据"}},[e._v("#")]),e._v(" 1.3 基于 RedisTimeSeries 模块保存时间序列数据")]),e._v(" "),a("h4",{attrs:{id:"_1-3-1-redistimeseries-适合的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-redistimeseries-适合的场景"}},[e._v("#")]),e._v(" 1.3.1 RedisTimeSeries 适合的场景")]),e._v(" "),a("p",[e._v("接下来，我们要继续解决第三个问题："),a("strong",[e._v("如何对时间序列数据进行聚合计算")]),e._v("？聚合计算一般被用来周期性地统计时间窗口内的数据汇总状态，在实时监控与预警等场景下会频繁执行。")]),e._v(" "),a("p",[e._v("因为Sorted Set只支持范围查询，无法直接进行聚合计算，所以，我们只能先把时间范围内的数据取回到客户端，然后在客户端自行完成聚合计算。这个方法虽然能完成聚合计算，但是会带来一定的潜在风险，也就是 "),a("strong",[e._v("大量数据在Redis实例和客户端间频繁传输，这会和其他操作命令竞争网络资源，导致其他操作变慢")]),e._v("。")]),e._v(" "),a("p",[e._v("在一个物联网项目中，需要每3分钟统计一下各个设备的温度状态，一旦设备温度超出了设定的阈值，就要进行报警。这是一个典型的聚合计算场景，我们可以来看看这个过程中的数据体量：假设我们需要每3分钟计算一次的所有设备各指标的最大值，每个设备每15秒记录一个指标值，1分钟就会记录4个值，3分钟就会有12个值。我们要统计的设备指标数量有33个，所以，单个设备每3分钟记录的指标数据有将近400个（33 * 12 = 396），而设备总数量有1万台，这样一来，每3分钟就有将近400万条（396 * 1万 = 396万）数据需要在客户端和Redis实例间进行传输。")]),e._v(" "),a("p",[a("strong",[e._v("为了避免客户端和Redis实例间频繁的大量数据传输，我们可以使用 RedisTimeSeries 来保存时间序列数据")]),e._v("。")]),e._v(" "),a("p",[a("strong",[e._v("RedisTimeSeries 支持直接在 Redis 实例上进行聚合计算")]),e._v("。还是以刚才每3分钟算一次最大值为例。在Redis实例上直接聚合计算，那么，对于单个设备的一个指标值来说，每3分钟记录的12条数据可以聚合计算成一个值，单个设备每3分钟也就只有33个聚合值需要传输，1万台设备也只有33万条数据。数据量大约是在客户端做聚合计算的十分之一，很显然，可以减少大量数据传输对Redis实例网络的性能影响。")]),e._v(" "),a("p",[e._v("所以：")]),e._v(" "),a("ul",[a("li",[e._v("如果我们只需要进行单个时间点查询或是对某个时间范围查询的话，"),a("strong",[e._v("适合使用 Hash 和 Sorted Set 的组合")]),e._v("，它们都是 Redis 的内在数据结构，性能好，稳定性高。")]),e._v(" "),a("li",[e._v("但是，如果我们需要进行大量的聚合计算，同时网络带宽条件不是太好时，"),a("strong",[e._v("使用 RedisTimeSeries 就更加合适一些")]),e._v("。")])]),e._v(" "),a("p",[e._v("那我们就学习一下 RedisTimeSeries。")]),e._v(" "),a("h4",{attrs:{id:"_1-3-2-redistimeseries-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-redistimeseries-是什么"}},[e._v("#")]),e._v(" 1.3.2 RedisTimeSeries 是什么")]),e._v(" "),a("p",[a("mark",[e._v("RedisTimeSeries")]),e._v(" 是 Redis 的一个扩展模块。它专门面向时间序列数据提供了数据类型和访问接口，并且支持在 Redis 实例上直接对数据进行按时间范围的聚合计算。")]),e._v(" "),a("p",[e._v("因为 RedisTimeSeries 不属于Redis的内建功能模块，在使用时，我们需要先把它的源码单独编译成动态链接库 redistimeseries.so，再使用 "),a("mark",[e._v("loadmodule 命令")]),e._v("进行加载，如下所示：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("loadmodule redistimeseries.so\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("当用于时间序列数据存取时，RedisTimeSeries 的操作主要有 5 个：")]),e._v(" "),a("ul",[a("li",[e._v("用 TS.CREATE 命令创建时间序列数据集合；")]),e._v(" "),a("li",[e._v("用 TS.ADD 命令插入数据；")]),e._v(" "),a("li",[e._v("用 TS.GET 命令读取最新数据；")]),e._v(" "),a("li",[e._v("用 TS.MGET 命令按标签过滤查询数据集合；")]),e._v(" "),a("li",[e._v("用 TS.RANGE 支持聚合计算的范围查询。")])]),e._v(" "),a("p",[e._v("下面，我来介绍一下如何使用这5个操作。")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("1）用 TS.CREATE 命令创建一个时间序列数据集合")]),e._v("：")]),e._v(" "),a("p",[e._v("在TS.CREATE命令中，我们需要设置时间序列数据集合的key和数据的过期时间（以毫秒为单位）。此外，我们还可以为数据集合设置标签，来表示数据集合的属性。")]),e._v(" "),a("p",[e._v("例如，我们执行下面的命令，创建一个key为device:temperature、数据有效期为600s的时间序列数据集合。也就是说，这个集合中的数据创建了600s后，就会被自动删除。最后，我们给这个集合设置了一个标签属性{device_id:1}，表明这个数据集合中记录的是属于设备ID号为1的数据。")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("TS.CREATE device:temperature RETENTION 600000 LABELS device_id 1\nOK\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("hr"),e._v(" "),a("p",[a("strong",[e._v("2）用 TS.ADD 命令插入数据，用 TS.GET 命令读取最新数据")]),e._v("：")]),e._v(" "),a("p",[e._v("我们可以用 TS.ADD 命令往时间序列集合中插入数据，包括时间戳和具体的数值，并使用 TS.GET 命令读取数据集合中的最新一条数据。")]),e._v(" "),a("p",[e._v("例如，我们执行下列 TS.ADD 命令时，就往 device:temperature 集合中插入了一条数据，记录的是设备在2020年8月3日9时5分的设备温度；再执行 TS.GET 命令时，就会把刚刚插入的最新数据读取出来：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("TS.ADD device:temperature 1596416700 25.1\n1596416700\n\nTS.GET device:temperature\n25.1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("strong",[e._v("3）用 TS.MGET 命令按标签过滤查询数据集合")]),e._v("：")]),e._v(" "),a("p",[e._v("在保存多个设备的时间序列数据时，我们通常会把不同设备的数据保存到不同集合中。此时，我们就可以使用TS.MGET命令，按照标签查询部分集合中的最新数据。在使用TS.CREATE创建数据集合时，我们可以给集合设置标签属性。当我们进行查询时，就可以在查询条件中对集合标签属性进行匹配，最后的查询结果里只返回匹配上的集合中的最新数据。")]),e._v(" "),a("p",[e._v("举个例子。假设我们一共用4个集合为4个设备保存时间序列数据，设备的ID号是1、2、3、4，我们在创建数据集合时，把device_id设置为每个集合的标签。此时，我们就可以使用下列TS.MGET命令，以及FILTER设置（这个配置项用来设置集合标签的过滤条件），查询device_id不等于2的所有其他设备的数据集合，并返回各自集合中的最新的一条数据。")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('TS.MGET FILTER device_id!=2\n1) 1) "device:temperature:1"\n   2) (empty list or set)\n   3) 1) (integer) 1596417000\n      2) "25.3"\n2) 1) "device:temperature:3"\n   2) (empty list or set)\n   3) 1) (integer) 1596417000\n      2) "29.5"\n3) 1) "device:temperature:4"\n   2) (empty list or set)\n   3) 1) (integer) 1596417000\n      2) "30.1"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[a("strong",[e._v("4）用 TS.RANGE 支持需要聚合计算的范围查询")]),e._v("：")]),e._v(" "),a("p",[e._v("最后，在对时间序列数据进行聚合计算时，我们可以使用TS.RANGE命令指定要查询的数据的时间范围，同时用AGGREGATION参数指定要执行的聚合计算类型。RedisTimeSeries支持的聚合计算类型很丰富，包括求均值（avg）、求最大/最小值（max/min），求和（sum）等。")]),e._v(" "),a("p",[e._v("例如，在执行下列命令时，我们就可以按照每180s的时间窗口，对2020年8月3日9时5分和2020年8月3日9时12分这段时间内的数据进行均值计算了。")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('TS.RANGE device:temperature 1596416700 1596417120 AGGREGATION avg 180000\n1) 1) (integer) 1596416700\n   2) "25.6"\n2) 1) (integer) 1596416880\n   2) "25.8"\n3) 1) (integer) 1596417060\n   2) "26.1"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("与使用Hash和Sorted Set来保存时间序列数据相比，RedisTimeSeries是专门为时间序列数据访问设计的扩展模块，能支持在Redis实例上直接进行聚合计算，以及按标签属性过滤查询数据集合，当我们需要频繁进行聚合计算，以及从大量集合中筛选出特定设备或用户的数据集合时，RedisTimeSeries就可以发挥优势了。")]),e._v(" "),a("h3",{attrs:{id:"_1-4-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-小结"}},[e._v("#")]),e._v(" 1.4 小结")]),e._v(" "),a("p",[e._v("这一节学习了如何使用 Redis 保存时间序列数据。时间序列数据的写入特点是要能快速写入，而查询的特点有三个：")]),e._v(" "),a("ul",[a("li",[e._v("点查询，根据一个时间戳，查询相应时间的数据；")]),e._v(" "),a("li",[e._v("范围查询，查询起始和截止时间戳范围内的数据；")]),e._v(" "),a("li",[e._v("聚合计算，针对起始和截止时间戳范围内的所有数据进行计算，例如求最大/最小值，求均值等。")])]),e._v(" "),a("p",[e._v("为了针对多样化的查询需求，Redis 提供了两种方案：")]),e._v(" "),a("ol",[a("li",[e._v("组合使用 Redis 内置的 Hash 和 Sorted Set 类型")]),e._v(" "),a("li",[e._v("使用 RedisTimeSeries 模块")])]),e._v(" "),a("p",[e._v("这两种方案各有优劣，建议是：")]),e._v(" "),a("ul",[a("li",[e._v("如果你的部署环境中网络带宽高、Redis实例内存大，可以优先考虑第一种方案；")]),e._v(" "),a("li",[e._v("如果你的部署环境中网络、内存资源有限，而且数据量大，聚合计算频繁，需要按数据集合属性查询，可以优先考虑第二种方案。")])])],1)}),[],!1,null,null,null);s.default=i.exports}}]);
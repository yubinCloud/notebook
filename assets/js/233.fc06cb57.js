(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{986:function(_,v,t){"use strict";t.r(v);var a=t(22),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("上一章主要讲复制，本章转向分区。这是两个相对正交但勾连的两个概念：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("分区")]),_._v("（Partition）：解决数据集尺度与单机容量、负载不匹配的问题，分区之后可以利用多机容量和负载。")]),_._v(" "),t("li",[t("strong",[_._v("复制")]),_._v("（Replication）：系统机器一多，单机故障概率便增大，为了防止数据丢失以及服务高可用，需要做多副本。")])]),_._v(" "),t("blockquote",[t("p",[_._v("分区，Partition，有很多别称。通用的有 Shard；具体到实际系统，HBase 中叫 Region，Bigtable 中叫 tablet，等等。"),t("strong",[_._v("本质上是对数据集的一种逻辑划分")]),_._v("，后面行文，分区和分区可能混用，且有时为名词，有时为动词。")])]),_._v(" "),t("p",[_._v("通常来说，数据系统在分布式系统中会有三级划分：数据集（如 Database、Bucket）——分区（Partition）——数据条目（Row、KV）。")]),_._v(" "),t("p",[_._v("本章思路：先介绍数据集"),t("strong",[_._v("切分的方法")]),_._v("，并讨论索引和分区的配合；然后将会讨论分区"),t("strong",[_._v("再平衡")]),_._v("（rebalancing），集群节点增删会引起数据再平衡；最后，会探讨数据库如何将请求"),t("strong",[_._v("路由")]),_._v("到相应的分区并执行。")]),_._v(" "),t("h2",{attrs:{id:"_1-分区和复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-分区和复制"}},[_._v("#")]),_._v(" 1. 分区和复制")]),_._v(" "),t("p",[t("strong",[_._v("分区通常和复制结合使用")]),_._v("：")]),_._v(" "),t("ul",[t("li",[t("u",[_._v("每个分区在多个节点上都存有副本")]),_._v("，更泛化一点：多个容错阈；")]),_._v(" "),t("li",[t("u",[_._v("每个机器含有多个分区")]),_._v("，但通常不会有一个分区的两个副本放到一个机器上。")])]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"95%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230121182324415.png",alt:"image-20230121182324415"}})]),_._v(" "),t("blockquote",[t("p",[_._v("由于分区方式和复制策略相对正交，本章会暂时忽略复制策略（在上章讲过），专注分析分区方式。")])]),_._v(" "),t("h2",{attrs:{id:"_2-kv-数据的分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-kv-数据的分区"}},[_._v("#")]),_._v(" 2. KV 数据的分区")]),_._v(" "),t("p",[t("strong",[_._v("键值对是数据的一种最通用、泛化的表示")]),_._v("，其他种类数据库都可以转化为键值对表示：")]),_._v(" "),t("ol",[t("li",[_._v("关系型数据库：primary key → row")]),_._v(" "),t("li",[_._v("文档型数据库：document id → document")]),_._v(" "),t("li",[_._v("图数据库：vertex id → vertex props, edge id → edge props")])]),_._v(" "),t("p",[_._v("因此，接下来主要针对键值对集合的分区方式，则其他数据库在构建存储层时，可以首先转化为 KV 对，然后进行分区。")]),_._v(" "),t("p",[t("mark",[_._v("分区")]),_._v("（Partition）的"),t("strong",[_._v("本质是对数据集合的划分")]),_._v("。但"),t("strong",[_._v("在实践中")]),_._v("，可以细分为两个步骤：")]),_._v(" "),t("ol",[t("li",[_._v("对数据集进行"),t("strong",[_._v("逻辑划分")])]),_._v(" "),t("li",[_._v("将逻辑分区"),t("strong",[_._v("调度")]),_._v("到物理节点")])]),_._v(" "),t("p",[_._v("因此，在分区时，有一些基本要求：")]),_._v(" "),t("ul",[t("li",[_._v("分区过程中，要保证"),t("strong",[_._v("每个分区的数据量尽量均匀")]),_._v("，否则会有"),t("mark",[_._v("数据偏斜")]),_._v("（"),t("strong",[_._v("skew")]),_._v("），甚而形成"),t("mark",[_._v("数据热点")]),_._v("。")]),_._v(" "),t("li",[t("strong",[_._v("分区后，需要保存路由信息")]),_._v("，给一个 KV 条目，能知道去"),t("strong",[_._v("哪个")]),_._v("机器上去查；稍差一些，可以知道去"),t("strong",[_._v("哪几个")]),_._v("机器上去找；最差的，如果需要去所有机器逐一查询，但性能一般不可接受。")])]),_._v(" "),t("p",[t("strong",[_._v("这两条是互相依赖和制约的")]),_._v("。比如说，假设分区数目确定，为了分区均匀，每来一条数据，我们可以等概率随机选择一个分区；但在查询每个数据条目时，就得去所有机器上都查一遍。")]),_._v(" "),t("p",[_._v("保存所有数据条目路由信息，有三种常用的策略：")]),_._v(" "),t("ol",[t("li",[_._v("通过某种固定规则，比如哈希，算出一个位置。")]),_._v(" "),t("li",[_._v("使用内存，保存所有数据条目到机器的映射。")]),_._v(" "),t("li",[_._v("结合两种，首先通过规则算出到逻辑分区的映射，然后通过内存保存逻辑分区到物理节点的映射。")])]),_._v(" "),t("p",[_._v("本节主要讨论根据 data Item 算出 partition，常见的有两种方式：基于 Key Range 分区，基于 Key Hash 分区。")]),_._v(" "),t("h3",{attrs:{id:"_2-1-基于-key-range-分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基于-key-range-分区"}},[_._v("#")]),_._v(" 2.1 基于 Key Range 分区")]),_._v(" "),t("p",[t("mark",[_._v("基于 Key Range 分区")]),_._v("：每个分区分配一段连续的 key 或者 key 区间范围（以最小值和最大值来指示）。")]),_._v(" "),t("p",[_._v("如，百科全书系列，通常是按照名词的字母序来分册的，每个分册可理解为该系列的一个分区：")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230121195937136.png",alt:"image-20230121195937136"}})]),_._v(" "),t("p",[_._v("由于键并不一定在定义域内均匀分布，因此简单按照定义域等分，并不能将数据等分。因此，需要按照数据的分布，"),t("strong",[_._v("动态调整分区的界限")]),_._v("，保证分区间数据大致均匀。这个调整的过程，既可以手动完成 ，也可以自动进行。")]),_._v(" "),t("blockquote",[t("p",[_._v("动态调整的过程一般是先设只有一个分区，随着数据的到来再不断划分。")])]),_._v(" "),t("p",[_._v("Key Range 分区的优缺点：")]),_._v(" "),t("ul",[t("li",[_._v("优点："),t("strong",[_._v("快速的范围查询")]),_._v("（range query）。")]),_._v(" "),t("li",[_._v("缺点：数据分散不均匀，且"),t("strong",[_._v("容易造成热点")]),_._v("。可能需要动态的调整的分区边界，以维护分区的相对均匀。")])]),_._v(" "),t("p",[_._v("错误使用示例：以传感器数据存储为例，以时间戳为 Key，按天的粒度进行分区，那么所有最新写入就都被路由到最后一个分区节点，造成严重的写入倾斜，不能充分利用所有机器的写入带宽。一个解决办法是"),t("strong",[_._v("分级")]),_._v("或者"),t("strong",[_._v("混合")]),_._v("，使用拼接主键，如使用传感器名称+时间戳作为主键，则可以将同时写入的多个传感器的数据分散到多机上去。")]),_._v(" "),t("h3",{attrs:{id:"_2-2-基于-key-hash-分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-基于-key-hash-分区"}},[_._v("#")]),_._v(" 2.2 基于 Key Hash 分区")]),_._v(" "),t("p",[t("mark",[_._v("基于 Key Hash 分区")]),_._v("：使用 key 的 hash function 值来分区。")]),_._v(" "),t("p",[_._v("选择 hash function 的依据是：使得数据散列尽量均匀。即给定一个 key，经 hash 后可以等概率在一个区间内产生一个值。")]),_._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[_._v("hash function 选择的注意点")]),_._v(" "),t("ul",[t("li",[_._v("hash function 的选择"),t("strong",[_._v("不需要考虑加密")]),_._v("方面的强弱，因此选择简单的 function 就可以。\n"),t("ul",[t("li",[_._v("如，Cassandra 和 MongoDB 使用 MD5，Voldemort 使用 Fowler-Noll-Vo 函数。")])])]),_._v(" "),t("li",[t("strong",[_._v("许多编程语言内置的 hash function 可能不适合分区")]),_._v("。比如 Java 的 Object.hashCode，因为同一个 key 在不同的进程中可能返回不同的 hash value。")])])]),_._v(" "),t("p",[_._v("hash function 将 key 的定义域映射到了均匀的散列值域：")]),_._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230121202257888.png",alt:"image-20230121202257888"}}),_._v(" "),t("p",[_._v("Key Hash 分区的优缺点：")]),_._v(" "),t("ul",[t("li",[_._v("优点：均匀散列能力")]),_._v(" "),t("li",[_._v("缺点：丧失了良好的区间查询特性")])]),_._v(" "),t("p",[_._v("一种折中方式：使用"),t("strong",[_._v("组合索引")]),_._v("的方式，先散列，再顺序。如使用主键进行散列得到分区，在每个分区内使用其他列顺序存储。如在社交网络上，首先按 user_id 进行散列分区，再使用 update_time 对用户事件进行顺序排序，则可以通过 (user_id, update_timestamp) 高效查询某个用户一段事件的事件。")]),_._v(" "),t("h3",{attrs:{id:"_2-3-一致性哈希"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-一致性哈希"}},[_._v("#")]),_._v(" 2.3 一致性哈希")]),_._v(" "),t("p",[_._v("还有一种常提的哈希方法叫做"),t("a",{attrs:{href:"https://zh.m.wikipedia.org/zh-hans/%E4%B8%80%E8%87%B4%E5%93%88%E5%B8%8C",target:"_blank",rel:"noopener noreferrer"}},[_._v("一致性哈希"),t("OutboundLink")],1),_._v("。其特点是，会考虑逻辑分区和物理拓扑，将数据和物理节点按同样的哈希函数进行哈希，来决定如何将哈希分区路由到不同机器上。它可以避免在内存中维护逻辑分区到物理节点的映射，而是每次计算出来。即"),t("strong",[_._v("用一套算法同时解决了我们在最初提出的逻辑分区和物理路由的两个问题")]),_._v("。 比较经典的数据系统，"),t("a",{attrs:{href:"https://www.qtmuniao.com/2020/06/13/dynamo/",target:"_blank",rel:"noopener noreferrer"}},[_._v("Amazon Dynamo"),t("OutboundLink")],1),_._v(" 就用了这种方式。")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230121203212350.png",alt:"image-20230121203212350"}})]),_._v(" "),t("p",[_._v("如果不使用一致性哈希，我们需要在元数据节点中，维护逻辑分区到物理节点的映射。则在某些物理节点宕机后，需要调整该映射并手动进行数据迁移，而不能像一致性哈希一样，半自动的增量式迁移。")]),_._v(" "),t("p",[_._v("但正如后面“分区再平衡”一节将要介绍的，这种特殊的分区方法对于数据库"),t("u",[_._v("实际效果并不好")]),_._v("，所有目前已很少使用。")]),_._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[_._v("小结")]),_._v(" "),t("p",[_._v("小结一下，两种分区方式区别在于，一个使用应用相关值（ "),t("code",[_._v("Key")]),_._v(" ）分区，一个使用应用无关值（"),t("code",[_._v("Hash(key)")]),_._v("）分区，前者支持高效范围查询，后者可以均摊负载。但可使用多个字段，组合使用两种方式，使用一个字段进行分区，使用另一个字段在分区内进行排序，兼取两者优点。")])]),_._v(" "),t("h3",{attrs:{id:"_2-4-负载偏斜和热点消除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-负载偏斜和热点消除"}},[_._v("#")]),_._v(" 2.4 负载偏斜和热点消除")]),_._v(" "),t("p",[_._v("基于 Key Hash 的分区方法可以减轻热点，但无法做到完全避免。一个极端情况是：所有的 read-write 操作都是针对同一个 key，则最终的所有请求都被路由到同一个分区了。")]),_._v(" "),t("p",[_._v("如在社交网络中的大 V，其发布的信息，天然会引起同一个键（假设键是用户 id）大量数据的写入，因为可能会有针对该用户信息的大量评论和互动。")]),_._v(" "),t("p",[t("strong",[_._v("大多数的系统至今仍然无法自动消除这种高度倾斜的负载，而只能通过应用层来减轻倾斜程度")]),_._v("。一种简单的方式是给大 V 用户制造“分身”，也就是在用户主键开始或结尾处添加一个随机数，从而让这个原本对一个 key 的写操作分不到多个不同的 key 上。但这无疑需要应用层做额外的工作，之后的任何读取都必须从所有分身上读取数据再合并返回，也就是说，请求时需要进行拆分，返回时需要进行合并。")]),_._v(" "),t("p",[_._v("也许以后某天，数据库可以自动检测负载倾斜的问题并处理。但目前，仍然需要开发者自己结合应用来综合权衡。")]),_._v(" "),t("h2",{attrs:{id:"_3-partition-与-secondary-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-partition-与-secondary-index"}},[_._v("#")]),_._v(" 3. Partition 与 Secondary Index")]),_._v(" "),t("p",[t("mark",[_._v("二级索引")]),_._v("（"),t("strong",[_._v("secondary index")]),_._v("），即主键以外的列的索引。由于分区都是基于主键的，在针对有分区的数据建立二级索引时，就会遇到一些困难。")]),_._v(" "),t("blockquote",[t("p",[_._v("举个例子，对于某个用户表（id, name, age, company），我们按用户 id（如身份证）对所有用户数据进行分区。但我们常常会根据名字对用户进行查询，为了加快查询，于是需要基于 name 字段，建立二级索引。")])]),_._v(" "),t("p",[_._v("在关系型和文档型数据库中，二级索引很常见。"),t("u",[_._v("在 KV 存储中，为了降低实现复杂度，一般不支持")]),_._v("。但大部分场景，因为我们不可能只按单一维度对数据进行检索，因此二级索引很有用。尤其对于搜索场景，比如 Solr 和 Elasticsearch，二级索引（在搜索领域称为"),t("strong",[_._v("倒排索引")]),_._v("）更是其实现基石。")]),_._v(" "),t("p",[_._v("在有分区的数据中，常见的建立二级索引的方法有：")]),_._v(" "),t("ul",[t("li",[_._v("本地索引（local index），DDIA 书中又称 documented-based index")]),_._v(" "),t("li",[_._v("全局索引（global index），DDIA 书中又称为 term-based index")])]),_._v(" "),t("blockquote",[t("p",[_._v("注：书中给的 document-based、term-based 两个名词（包括 document 和 term）是从搜索中来的。由于搜索中都是 term -> document id list 的映射，document-based 是指按 document id 进行分区，每个分区存的索引都是本地的 document ids，而不管其他分区，因此是本地索引，查询时需要发到所有分区逐个查询。term-based 是指按 term 进行分区，则每个倒排索引都是存的全局的 document id list，因此查询的时候只需要去 term 所在分区查询即可。")])]),_._v(" "),t("h3",{attrs:{id:"_3-1-local-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-local-index"}},[_._v("#")]),_._v(" 3.1 local index")]),_._v(" "),t("blockquote",[t("p",[_._v("书中举了一个维护汽车信息数据例子：每种汽车信息由 (id, color, make, location) 四元组构成。首先会根据其主键 id 进行分区，其次为了方便查询，需要对汽车颜色（ color ）和制造商（make）字段（文档数据库中称为 "),t("strong",[_._v("field，字段")]),_._v("；关系型数据库中称为 "),t("strong",[_._v("column，列")]),_._v("，图数据库中称为 "),t("strong",[_._v("property，属性")]),_._v("）建立二级索引。")])]),_._v(" "),t("p",[_._v("二级索引会对每个数据条目建立一个索引条目，这给数据库的实现带来了"),t("strong",[_._v("一些问题")]),_._v("：")]),_._v(" "),t("ol",[t("li",[_._v("当数据库已有数据时，建立索引，"),t("strong",[_._v("何时针对存量数据构建索引")]),_._v("。如果立刻建立索引，则会影响数据库对外所提供服务的性能；如果异步建立索引，则会让用户感到迷惑，“为啥我建了索引还没加快”。")]),_._v(" "),t("li",[_._v("当数据库中数据条目发生更改时，"),t("strong",[_._v("如何维护数据和索引的一致性")]),_._v("，尤其是多客户端并发修改时。这需要看数据库支持什么样的一致性要求了。")])]),_._v(" "),t("p",[t("mark",[_._v("本地索引")]),_._v("（local index）：每个数据分区独立地建立并维护自己的二级索引，不关心其他分区中的数据。")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"68%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230128165937490.png",alt:"image-20230128165937490"}})]),_._v(" "),t("p",[_._v("优缺点：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("优点")]),_._v("：维护方便，在更新数据时，只需要在该分区所在机器同时更新索引即可")]),_._v(" "),t("li",[t("strong",[_._v("缺点")]),_._v("：查询效率相对较低，所有基于索引的查询请求，都要发送到所有分区，并将结果合并，这个过程称为 "),t("mark",[_._v("scatter/gather")]),_._v("。\n"),t("ul",[t("li",[_._v("即使使用多分区并发（而非顺序）进行索引查询优化，也仍然容易在某些机器上发生"),t("strong",[_._v("长尾请求")]),_._v("（由于机器负载过高或者网络问题，导致改请求返回特别慢，称为长尾请求），导致整个请求过程变慢。")])])])]),_._v(" "),t("p",[_._v("但由于实现简单，本地索引被广泛使用，如 MongoDB，Riak ，Cassandra，Elasticsearch ，SolrCloud 和 VoltDB 都使用本地索引。")]),_._v(" "),t("h3",{attrs:{id:"_3-2-global-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-global-index"}},[_._v("#")]),_._v(" 3.2 global index")]),_._v(" "),t("p",[t("mark",[_._v("全局索引")]),_._v("（"),t("strong",[_._v("global index")]),_._v("）：每个二级索引条目都是针对全局数据。但为了避免索引查询热点产生瓶颈，我们会将索引数据本身也分区，分散到多个机器上。")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230128170615441.png",alt:"image-20230128170615441"}})]),_._v(" "),t("p",[_._v("当然，与数据本身一样，对于索引进行分区，也可基于 Range 或基于 Hash，同样也是各有优劣（面向扫描还是均匀散列）。")]),_._v(" "),t("p",[_._v("这种方法的讨论：全局索引能避免索引查询时的 scatter/gather 操作，但"),t("strong",[_._v("维护起来较为复杂，因为每个数据的插入，可能会影响多个索引分区")]),_._v("（基于该数据不同字段可能会有多个二级索引）。因此，为了避免增加写入延迟，在实践中，全局索引多为异步更新。但由此"),t("strong",[_._v("会带来短暂（有时可能会比较长）的数据和索引不一致")]),_._v("。如果想要保证强一致性，需要引入跨分区的分布式事务（实现复杂度高，且会带来较大的性能损耗），但并不是所有数据库都支持。")]),_._v(" "),t("blockquote",[t("p",[_._v("👉 比较 local index 和 global index，两种方法的选择其实主要是读放大和写放大的 trade-off。")])]),_._v(" "),t("h2",{attrs:{id:"_4-分区再平衡的策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-分区再平衡的策略"}},[_._v("#")]),_._v(" 4. 分区再平衡的策略")]),_._v(" "),t("p",[_._v("数据库在运行过程中，数据和机器都会发生一些变化：")]),_._v(" "),t("ul",[t("li",[_._v("查询吞吐增加，需要增加机器以应对增加的负载。")]),_._v(" "),t("li",[_._v("数据集变大，需要增加磁盘和 RAM 来存储增加数据。")]),_._v(" "),t("li",[_._v("有机器故障，需要其他机器来接管故障机器数据。")])]),_._v(" "),t("p",[_._v("所有这些问题都会引起数据分片在节点间的迁移，我们将之称为："),t("mark",[_._v("再平衡")]),_._v("（"),t("strong",[_._v("rebalancing")]),_._v("），也称为“"),t("strong",[_._v("均衡")]),_._v("”。对于 rebalancing 我们期望：")]),_._v(" "),t("ol",[t("li",[_._v("均衡后负载（存储、读写）在节点间均匀分布")]),_._v(" "),t("li",[_._v("均衡时不能禁止读写，并且尽量减小影响")]),_._v(" "),t("li",[_._v("尽量减少不必要的数据移动，尽量降低网络和磁盘 IO")])]),_._v(" "),t("p",[_._v("分区策略会影响均衡策略。比如动态分区、静态分区，对应的均衡策略就不太一样；此外，分区的粒度和数量也会影响均衡策略。")]),_._v(" "),t("h3",{attrs:{id:"_4-1-不要使用-hash-mod-n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-不要使用-hash-mod-n"}},[_._v("#")]),_._v(" 4.1 不要使用：hash mod N")]),_._v(" "),t("p",[_._v("在说如何进行均衡之前，先说下不应该怎样做。")]),_._v(" "),t("p",[_._v("之前提到过，分区包括"),t("strong",[_._v("逻辑分区")]),_._v("和"),t("strong",[_._v("物理调度")]),_._v("两个阶段，此处说的是将两者合二为一：假设集群有 N 个节点，编号 "),t("code",[_._v("0 ~ N-1")]),_._v("，一条键为 key 的数据到来后，通过 "),t("code",[_._v("hash(key) mod N")]),_._v(" 得到一个编号 n，然后将该数据发送到编号为 n 的机器上去。")]),_._v(" "),t("p",[_._v("为什么说这种策略不好呢？因为他不能应对机器数量的变化，如果要增删节点，就会有大量的数据需要发生迁移，否则，就不能保证数据在 "),t("code",[_._v("hash(key) mod N")]),_._v(" 标号的机器上。在大规模集群中，机器节点增删比较频繁，"),t("strong",[_._v("这种策略更是不可接受")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"_4-2-固定数量的分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-固定数量的分区"}},[_._v("#")]),_._v(" 4.2 固定数量的分区")]),_._v(" "),t("p",[t("mark",[_._v("固定数量的分区")]),_._v("（"),t("strong",[_._v("静态分区")]),_._v("）：首先创建远超实际节点数的固定逻辑分区数，然后为每个节点分配多个逻辑分区。接下来，如果集群中添加了一个新节点，该新节点可以从每个现有的节点上匀走几个分区，直到分区再次达到全局平衡。")]),_._v(" "),t("p",[_._v("下图是一个再平衡前后的示意图：")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230128174353344.png",alt:"image-20230128174353344"}})]),_._v(" "),t("p",[_._v("这种方法需要设置几个元信息节点，用来维护逻辑分区到物理节点的映射，并以此发现不均衡现象，进而进行调度。")]),_._v(" "),t("p",[_._v("在静态分区中，让分区数量远大于机器节点的好处在于：")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("应对将来可能的扩容")]),_._v("。加入分区数量等于机器数量，则将来增加机器，仅就单个数据集来说，并不能增加其存储容量和吞吐。")]),_._v(" "),t("li",[t("strong",[_._v("调度粒度更细，数据更容易均衡")]),_._v("。举个例子，假设只有 20 个分区，然后有 9 个机器，假设每个分区数据量大致相同，则最均衡的情况，也会有两个机器数的数据量比其他机器多 50%；")]),_._v(" "),t("li",[t("strong",[_._v("应对集群中的异构性")]),_._v("。比如集群中某些节点磁盘容量比其他机器大，则可以多分配几个分区到该机器上。")])]),_._v(" "),t("p",[_._v("但当然，分区数量也不能太大，因为每个分区信息也是有管理成本的：比如元信息开销、均衡调度开销等。一般来说，可以取一个你将来集群可能扩展到的最多节点数量作为初始分区数量。")]),_._v(" "),t("p",[_._v("对于数据量会超预期增长的数据集，静态分区策略就会让用户进退两难，已经有很多数据，重新分区代价很大，不重新分区又难以应对数据量的进一步增长。因此这种再平衡的方案适合有预期规模的数据。")]),_._v(" "),t("h3",{attrs:{id:"_4-3-动态分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-动态分区"}},[_._v("#")]),_._v(" 4.3 动态分区")]),_._v(" "),t("p",[_._v("对于按键范围（key range）进行分区的策略来说，由于数据在定义域内并"),t("strong",[_._v("不均匀分布")]),_._v("，如果固定分区数量，则天然地难以均衡。因此，按范围分区策略下，都会支持动态分区。按生命周期来说：")]),_._v(" "),t("ol",[t("li",[_._v("开始，数据量很少，只有一个分区。")]),_._v(" "),t("li",[_._v("随着数据量不断增长，单个分区超过一定"),t("strong",[_._v("上界")]),_._v("，则按尺寸一分为二，变成两个新的分区。")]),_._v(" "),t("li",[_._v("如果某个分区，数据删除过多，少于某个"),t("strong",[_._v("下界")]),_._v("，则会和相邻分区合并。")])]),_._v(" "),t("p",[_._v("动态分区好处在于，小数据量使用少量分区，减少开销；大数据量增加分区，以均摊负载。")]),_._v(" "),t("p",[_._v("但同时，小数据量时，如果只有一个分区，会限制写入并发。因此，工程中有些数据库支持"),t("mark",[_._v("预分裂")]),_._v("（pre-"),t("strong",[_._v("splitting")]),_._v("），如 HBase 和 MongoDB，即允许在空数据库中，配置最少量的初始分区，并确定每个分区的起止键。")]),_._v(" "),t("p",[_._v("动态分区不仅适用于 key range 分区，也适用于基于 hash 的分区策略（也就是在 hash 空间中对相邻数据集进行合并和分裂）。")]),_._v(" "),t("h3",{attrs:{id:"_4-4-与节点成比例分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-与节点成比例分区"}},[_._v("#")]),_._v(" 4.4 与节点成比例分区")]),_._v(" "),t("p",[_._v("先总结一下前面两种讲的方法：")]),_._v(" "),t("ul",[t("li",[_._v("固定数量的分区数量一开始就固定的，但是单分区尺寸会随着总数量增大而增大。")]),_._v(" "),t("li",[_._v("动态均衡会按着数据量多少进行动态切合，单分区尺寸相对保持不变，一直于某个设定的上下界。")])]),_._v(" "),t("p",[_._v("这两种方法的分区数量都与节点数无关。")]),_._v(" "),t("p",[t("mark",[_._v("与节点成比例分区")]),_._v("：保持分区数和节点数量成正比关系。也即，保持每个节点分区数量不变。")]),_._v(" "),t("p",[_._v("假设集群有 m 个节点，每个节点有 n 个分区，在此种均衡策略下，当有新节点加入时，会从 m*n 个分区中随机选择 n 个分区，将其一分为二，一半由新节点分走，另一半留在原机器上。")]),_._v(" "),t("p",[_._v("随机选择，很"),t("strong",[_._v("容易产生有倾斜的分割")]),_._v("。但如果 n 比较大，如 Cassandra 默认是 256，则新节点会比较容易均摊负载。Cassandra 在 3.0 时改进了算法，可以避免上述不公平的分裂。")]),_._v(" "),t("p",[_._v("随机选择分区，要求使用基于 hash 的分区策略，也就是可以从 hash function 产生的数字范围里面设置边界。")]),_._v(" "),t("h3",{attrs:{id:"_4-5-运维-自动均衡还是手动均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-运维-自动均衡还是手动均衡"}},[_._v("#")]),_._v(" 4.5 运维：自动均衡还是手动均衡？")]),_._v(" "),t("p",[_._v("在实践中，分区再平衡是自动进行还是手动进行需要慎重考虑：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("自动进行")]),_._v("：系统自动检测是否均衡，然后自动决策搬迁策略以及搬迁时间。")]),_._v(" "),t("li",[t("strong",[_._v("手动进行")]),_._v("：管理员指定迁移策略和迁移时间。")])]),_._v(" "),t("p",[_._v("数据均衡是一项非常昂贵且易出错的操作，会给网络带来很大压力，甚至影正常负载。自动均衡诚然可以减少运维，但在实践中，"),t("strong",[_._v("如何有效甄别是否真的需要均衡")]),_._v("（比如网络抖动了一段时间、节点宕机又重启、故障但能修复）"),t("strong",[_._v("是一个很复杂的事情")]),_._v("，如果做出错误决策，就会带来大量无用的数据搬迁。")]),_._v(" "),t("blockquote",[t("p",[_._v("也就是说，让机器自身来甄别是否需要做分区再平衡是一件很难的事情。有时机器出现“故障”可能只是需要负责人员去机房动一下就好了，或者可能网络暂时出了一点扰动，过一小会就好了，这种情况下本来不需要发生分区再平衡，但机器很可能就认为需要做再平衡，从而产生大规模的数据移动，进而让局面变得更加糟糕。")])]),_._v(" "),t("p",[_._v("因此，数据均衡通常会半自动的进行，如系统通过负载情况给出搬迁策略，由管理员审核没问题后，决定某个时间段运行（避开正常流量高峰），Couchbase、Riak 和 Voldemort 便采用了类似做法。")]),_._v(" "),t("h2",{attrs:{id:"_5-请求路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-请求路由"}},[_._v("#")]),_._v(" 5. 请求路由")]),_._v(" "),t("h3",{attrs:{id:"_5-1-请求路由的方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-请求路由的方案"}},[_._v("#")]),_._v(" 5.1 请求路由的方案")]),_._v(" "),t("p",[_._v("在我们将分区放到节点上去后，当客户端请求到来时，我们如何知道将请求路由到哪台机器？这势必要求我们"),t("strong",[_._v("以某种方式")]),_._v("记下：")]),_._v(" "),t("ol",[t("li",[_._v("数据条目到逻辑分区的映射。")]),_._v(" "),t("li",[_._v("逻辑分区到物理机器的映射。")])]),_._v(" "),t("p",[_._v("其次，是在哪里记下这些路由（映射）信息，泛化一下，是一个"),t("strong",[_._v("服务发现")]),_._v("（service discovery）问题。概括来说，由内而外，有几种方案：")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("每个节点都有全局路由表")]),_._v("。客户端可以连接集群中"),t("u",[_._v("任意一个")]),_._v("节点，如该节点恰有该分区，则处理后返回；否则，根据路由信息，将其路由合适节点。")]),_._v(" "),t("li",[t("strong",[_._v("由一个专门的路由层来记录")]),_._v("。客户端所有请求"),t("u",[_._v("都打到路由层")]),_._v("，路由层依据分区路由信息，将请求转发给相关节点。路由层只负责请求路由，并不处理具体逻辑。")]),_._v(" "),t("li",[t("strong",[_._v("让客户端感知分区到节点映射")]),_._v("。客户端可以直接根据该映射，向某个节点发送请求。")])]),_._v(" "),t("p",[_._v("具体选择哪种存在灵活性和便捷性上的 trade-off，三种方案的示意图如下：")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230128190438230.png",alt:"image-20230128190438230"}})]),_._v(" "),t("p",[_._v("无论服务发现信息记在何处，都有一个"),t("strong",[_._v("核心问题")]),_._v("："),t("u",[_._v("如何让相关组件（节点本身、路由层、客户端）及时感知（分区到节点）的映射变化，将请求正确的路由到相关节点")]),_._v("？也即，如何让所有节点就路由信息快速达成共识。分布式系统有专门的共识协议算法，但比较难以正确实现，"),t("strong",[_._v("业界的做法有如下")]),_._v("：")]),_._v(" "),t("h4",{attrs:{id:"_1-依赖外部协调组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖外部协调组件"}},[_._v("#")]),_._v(" 1）依赖外部协调组件")]),_._v(" "),t("p",[_._v("使用 Zookeeper、Etcd 等协调服务来跟踪集群范围内的元数据，他们各自使用某种共识协议保持高可用，可以维护轻量的路由表，并提供发布订阅接口，在有路由信息更新时，让外部所有节点快速达成一致。")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230128190802909.png",alt:"image-20230128190802909"}})]),_._v(" "),t("blockquote",[t("p",[_._v("例如 LinkedIn 的 Espresso 使用 Helix 进行集群管理（底层是 ZooKeeper），他就实现了上图所示的请求路由层。HBase、SolrCloud、Kafka 使用 ZooKeeper 来跟踪分区分配情况。MongoDB 也有类似的设计，但它依赖于自己的配置服务器和 mongos 守护进程来充当路由层。")])]),_._v(" "),t("h4",{attrs:{id:"_2-使用内部元数据服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用内部元数据服务器"}},[_._v("#")]),_._v(" 2）使用内部元数据服务器")]),_._v(" "),t("p",[_._v("如三节点的 Meta 服务器，每个节点都存储一份路由数据，使用某种共识协议达成一致。如 TiDB 的 Placement Driver。")]),_._v(" "),t("h4",{attrs:{id:"_3-使用某种协议点对点同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用某种协议点对点同步"}},[_._v("#")]),_._v(" 3）使用某种协议点对点同步")]),_._v(" "),t("p",[_._v("如 Dynamo 、Cassandra 和 Riak 使用"),t("strong",[_._v("流言协议")]),_._v("（"),t("strong",[_._v("Gossip Protocol")]),_._v("），在集群内所有机器节点间就路由信息进行传播，并最终达成一致。")]),_._v(" "),t("p",[_._v("更简单一些，如 Couchbase 不支持自动的负载均衡，因此只需要使用一个路由层通过心跳从集群节点收集到所有路由信息即可。")]),_._v(" "),t("p",[_._v("当使用路由层（或者 Proxy 层，通常由多个实例构成），或者客户端将请求随机发动到某个集群节点时，客户端需要确定一个具体 IP 地址，但这些信息变化相对较少，因此直接使用 DNS 或者反向代理进行轮询即可。")]),_._v(" "),t("h3",{attrs:{id:"_5-2-并行查询执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-并行查询执行"}},[_._v("#")]),_._v(" 5.2 并行查询执行")]),_._v(" "),t("p",[_._v("目前我们只关注了读取或写入单个关键字这样的简单查询，比如基于主键的查询、基于二级索引的 scatter/gather 查询。这也是大部分 NoSQL 分布式数据存储所支持的访问类型。")]),_._v(" "),t("p",[_._v("但对于关系型数据库产品，尤其是支持"),t("strong",[_._v("大规模并行处理")]),_._v("（"),t("mark",[_._v("MPP")]),_._v(", Massively parallel processing）数仓，一个查询语句在执行层要复杂的多，可能会：")]),_._v(" "),t("ol",[t("li",[_._v("Stage：由多个阶段组成。")]),_._v(" "),t("li",[_._v("Partition：每个阶段包含多个针对每个分区的并行的子查询计划。")])]),_._v(" "),t("p",[_._v("数仓的大规模的快速并行执行是另一个需要专门讨论的话题，由于多用于支持 BI，因此其优化具有重要意义，本书后面第十章会专门讨论。")])],1)}),[],!1,null,null,null);v.default=e.exports}}]);
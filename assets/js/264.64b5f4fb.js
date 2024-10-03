(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{1016:function(o,_,v){"use strict";v.r(_);var l=v(22),r=Object(l.a)({},(function(){var o=this,_=o.$createElement,v=o._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[v("blockquote",[v("p",[o._v("参考：")]),o._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://time.geekbang.org/column/article/68633",target:"_blank",rel:"noopener noreferrer"}},[o._v("02 | 日志系统：一条SQL更新语句是如何执行的？| 极客时间"),v("OutboundLink")],1)]),o._v(" "),v("li",[v("a",{attrs:{href:"https://time.geekbang.org/column/article/73161",target:"_blank",rel:"noopener noreferrer"}},[o._v("答疑文章（一）：日志和索引相关问题"),v("OutboundLink")],1)])])]),o._v(" "),v("p",[o._v("前面介绍了一个查询语句的执行流程：一般是经过连接器、分析器、优化器、执行器等功能模块，最后到达存储引擎。那一条更新语句的执行流程又是怎样的呢？")]),o._v(" "),v("blockquote",[v("p",[o._v("之前你可能经常听 DBA 同事说，"),v("strong",[o._v("MySQL 可以恢复到半个月内任意一秒的状态")]),o._v("，惊叹的同时，你是不是心中也会不免会好奇，这是怎样做到的呢？")])]),o._v(" "),v("p",[o._v("我们还是从一个表的一条更新语句说起，下面是这个表的创建语句，这个表有一个主键 ID 和一个整型字段 c：")]),o._v(" "),v("div",{staticClass:"language-mysql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[o._v("mysql> create table T(ID int primary key, c int);\n")])]),o._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[o._v("1")]),v("br")])]),v("p",[o._v("如果要将 ID=2 这一行的值加 1，SQL 语句就会这么写：")]),o._v(" "),v("div",{staticClass:"language-mysql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[o._v("mysql> update T set c=c+1 where ID=2;\n")])]),o._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[o._v("1")]),v("br")])]),v("p",[o._v("其实，查询语句的那一套流程，更新语句也会同样走一遍，下图是之前的架构图：")]),o._v(" "),v("center",[v("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230117174025545.png",alt:"image-20230117174025545"}})]),o._v(" "),v("ul",[v("li",[o._v("先通过连接器来连数据库")]),o._v(" "),v("li",[o._v("在一个表上有更新的时候，跟这个表有关的查询缓存会失效，所以这条语句就会把表 T 上所有缓存结果都清空")]),o._v(" "),v("li",[o._v("接下来，分析器会解析得知这是一条更新语句")]),o._v(" "),v("li",[o._v("优化器决定执行方案")]),o._v(" "),v("li",[o._v("执行器负责具体执行，找到这一行，然后更新")])]),o._v(" "),v("p",[o._v("与查询流程不一样的是，更新流程还涉及两个重要的日志模块："),v("strong",[o._v("redo log")]),o._v("（重做日志）和 "),v("strong",[o._v("binlog")]),o._v("（归档日志），它俩是本文的主角。")]),o._v(" "),v("h2",{attrs:{id:"_1-重要的日志模块-redo-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-重要的日志模块-redo-log"}},[o._v("#")]),o._v(" 1. 重要的日志模块：redo log")]),o._v(" "),v("p",[o._v("还记得《孔乙己》吗，酒店掌柜有一个"),v("strong",[o._v("粉板")]),o._v("，专门用来记录客人的赊账记录。如果赊账的人不多，那么他可以把顾客名和账目写在板上。但如果赊账的人多了，粉板总会有记不下的时候，这个时候掌柜一定还有一个"),v("strong",[o._v("专门记录赊账的账本")]),o._v("。")]),o._v(" "),v("p",[o._v("如果有人要赊账或者还账的话，掌柜一般有两种做法：")]),o._v(" "),v("ul",[v("li",[o._v("一种做法是直接把账本翻出来，更新账本；")]),o._v(" "),v("li",[o._v("另一种做法是先在粉板上记下账，等空闲再把账本翻出来核算。")])]),o._v(" "),v("p",[o._v("平时生意忙的时候，掌柜一定会选后者，毕竟前者太麻烦了，这么大的账本去找一个人很费时间。相比之下，还是先在粉板上记一下方便。同样，在 MySQL 里也有这个问题，如果每一次的更新操作都需要写进磁盘，然后磁盘也要找到对应的那条记录，然后再更新，整个过程 IO 成本、查找成本都很高。为了解决这个问题，MySQL 的设计者就也采用了类似酒店掌柜的做法。")]),o._v(" "),v("p",[o._v("粉板和账本配合的整个过程，其实就是 MySQL 中常说的 "),v("mark",[o._v("WAL")]),o._v("（"),v("strong",[o._v("预写日志")]),o._v("）技术。WAL 的全称是 Write-Ahead Logging，"),v("strong",[o._v("它的关键点就是先写日志，等空闲时再写磁盘")]),o._v("。")]),o._v(" "),v("p",[o._v("具体来说，当有一条记录需要更新的时候，InnoDB 引擎就会先把记录写到 redo log 里面，并更新内存，这个时候更新就算完成了。同时，InnoDB 引擎会在适当的时候，将这个操作记录更新到磁盘里面，而这个更新往往是在系统比较空闲的时候做。")]),o._v(" "),v("blockquote",[v("p",[o._v("注意，"),v("u",[o._v("只要写入 redo log，那这个数据库就算做了这个事情")]),o._v("，也就是做了相应的更新，尽管可能还没真的去做，但对外来看就是做了。")])]),o._v(" "),v("p",[o._v("类似于掌柜的粉板会写满，"),v("strong",[o._v("InnoDB 的 redo log 也是固定大小的")]),o._v("。比如可以配置为一组 4 个文件，每个文件的大小是 1GB，那么这块“粉板”总共就可以记录 4GB 的操作。从头开始写，"),v("strong",[o._v("写到末尾就又回到开头循环写")]),o._v("，如下面这个图所示：")]),o._v(" "),v("center",[v("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230117212111043.png",alt:"image-20230117212111043"}})]),o._v(" "),v("ul",[v("li",[o._v("write pos 是当前记录的位置，一边写一边后移，写到第 3 号文件末尾后就回到 0 号文件开头。")]),o._v(" "),v("li",[o._v("checkpoint 是当前要擦除的位置，也是往后推移并且循环的，擦除记录前要把记录更新到数据文件。")])]),o._v(" "),v("p",[o._v("write pos 和 checkpoint 之间的是“粉板”上还空着的部分，可以用来记录新的操作。"),v("strong",[o._v("如果 write pos 追上 checkpoint")]),o._v("，表示“粉板”满了，"),v("strong",[o._v("这时候不能再执行新的更新")]),o._v("，得停下来先擦掉一些记录，把 checkpoint 推进一下。")]),o._v(" "),v("p",[v("font",{attrs:{color:"blue"}},[o._v("有了 redo log，InnoDB 就可以保证即使数据库发生异常重启，之前提交的记录都不会丢失")]),o._v("，这个能力称为 "),v("mark",[o._v("crash-safe")]),o._v("。")],1),o._v(" "),v("blockquote",[v("p",[o._v("要理解 crash-safe 这个概念，可以想想我们前面赊账记录的例子。只要赊账记录记在了粉板上或写在了账本上，之后即使掌柜忘记了，比如突然停业几天，恢复生意后依然可以通过账本和粉板上的数据明确赊账账目。")]),o._v(" "),v("p",[o._v("所以我们说了，只要往 redo log 写了，就算数据库做过这件事了。")])]),o._v(" "),v("h2",{attrs:{id:"_2-重要的日志模块-binlog"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-重要的日志模块-binlog"}},[o._v("#")]),o._v(" 2. 重要的日志模块：binlog")]),o._v(" "),v("p",[o._v("前面我们讲过，MySQL 整体来看，其实就有两块：一块是 Server 层，它主要做的是 MySQL 功能层面的事情；还有一块是引擎层，负责存储相关的具体事宜。上面我们聊到的粉板 "),v("strong",[o._v("redo log 是 InnoDB 引擎"),v("font",{attrs:{color:"blue"}},[o._v("特有")]),o._v("的日志")],1),o._v("，而 Server 层也有自己的日志，称为 "),v("mark",[o._v("binlog")]),o._v("（"),v("strong",[o._v("归档日志")]),o._v("）。")]),o._v(" "),v("blockquote",[v("p",[o._v("也许你会问：为什么会有两份日志呢？")]),o._v(" "),v("p",[o._v("因为最开始 MySQL 里并没有 InnoDB 引擎。MySQL 自带的引擎是 MyISAM，但是 MyISAM 没有 crash-safe 的能力，"),v("u",[o._v("binlog 日志只能用于归档")]),o._v("。而 InnoDB 是另一个公司以插件形式引入 MySQL 的，既然"),v("u",[o._v("只依靠 binlog 是没有 crash-safe 能力的")]),o._v("，所以 InnoDB 使用另外一套日志系统——也就是 redo log 来实现 crash-safe 能力。")])]),o._v(" "),v("p",[o._v("redo log 与 binlog 有以下"),v("strong",[o._v("三点不同")]),o._v("：")]),o._v(" "),v("ol",[v("li",[o._v("redo log 是 InnoDB 引擎特有的；binlog 是 MySQL 的 Server 层实现的，所有引擎都可以使用。")]),o._v(" "),v("li",[o._v("redo log 是物理日志，记录的是“在某个数据页上做了什么修改”；binlog 是逻辑日志，记录的是这个语句的原始逻辑，比如“给 ID=2 这一行的 c 字段加 1 ”。")]),o._v(" "),v("li",[o._v("redo log 是循环写的，空间固定会用完；binlog 是可以追加写入的。“追加写”是指 binlog 文件写到一定大小后会切换到下一个，并不会覆盖以前的日志。")])]),o._v(" "),v("p",[o._v("有了对这两个日志的概念性理解，我们再来看执行器和 InnoDB 引擎在执行这个简单的 update 语句时的内部流程：")]),o._v(" "),v("ol",[v("li",[o._v("执行器先找引擎取 ID=2 这一行。ID 是主键，引擎直接用树搜索找到这一行。如果 ID=2 这一行所在的数据页本来就在内存中，就直接返回给执行器；否则，需要先从磁盘读入内存，然后再返回。")]),o._v(" "),v("li",[o._v("执行器拿到引擎给的行数据，把这个值加上 1，比如原来是 N，现在就是 N+1，得到新的一行数据，再调用引擎接口写入这行新数据。")]),o._v(" "),v("li",[o._v("引擎将这行新数据更新到内存中，同时将这个更新操作记录到 redo log 里面，此时 redo log 处于 prepare 状态。然后告知执行器执行完成了，随时可以提交事务。")]),o._v(" "),v("li",[o._v("执行器生成这个操作的 binlog，并把 binlog 写入磁盘。")]),o._v(" "),v("li",[o._v("执行器调用引擎的提交事务接口，引擎把刚刚写入的 redo log 改成提交（commit）状态，更新完成。")])]),o._v(" "),v("p",[o._v("下面给出这个 update 语句的执行流程图，图中浅色框表示是在 InnoDB 内部执行的，深色框表示是在执行器中执行的。")]),o._v(" "),v("center",[v("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230117213746509.png",alt:"image-20230117213746509"}})]),o._v(" "),v("p",[o._v('你可能注意到了，最后三步看上去有点“绕”，将 redo log 的写入拆成了两个步骤：prepare 和 commit，这就是"'),v("mark",[o._v("两阶段提交")]),o._v('"。')]),o._v(" "),v("blockquote",[v("p",[o._v("这与 DDIA 中在分布式事务的原子提交中才讲的“两阶段提交”有点区别，这里不是分布式事务的。")])]),o._v(" "),v("h2",{attrs:{id:"_3-两阶段提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-两阶段提交"}},[o._v("#")]),o._v(" 3. 两阶段提交")]),o._v(" "),v("p",[o._v("为什么必须有“两阶段提交”呢？这是"),v("strong",[o._v("为了让两份日志之间的逻辑一致")]),o._v("。要说明这个问题，我们得从文章开头的那个问题说起：怎样让数据库恢复到半个月内任意一秒的状态？")]),o._v(" "),v("h3",{attrs:{id:"_3-1-数据库的恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-数据库的恢复"}},[o._v("#")]),o._v(" 3.1 数据库的恢复")]),o._v(" "),v("p",[o._v("前面我们说过了，binlog 会记录所有的逻辑操作，并且是采用“追加写”的形式。如果你的 DBA 承诺说半个月内可以恢复，那么备份系统中一定会保存最近半个月的所有 binlog，同时系统会定期做整库备份。这里的“定期”取决于系统的重要性，可以是一天一备，也可以是一周一备。")]),o._v(" "),v("blockquote",[v("p",[o._v("具体的备份频率，需要考虑 RTO（恢复时间目标）这个指标。太频繁会消耗太多存储空间，但太久会使得 RTO 太大。")])]),o._v(" "),v("p",[o._v("当需要恢复到指定的某一秒时，比如某天下午两点发现中午十二点有一次误删表，需要找回数据，那你可以这么做：")]),o._v(" "),v("ul",[v("li",[o._v("首先找到最近的一次全量备份")]),o._v(" "),v("li",[o._v("然后从备份的时间点开始，将备份的 binlog 依次取出来，重放到中午误删表之前的那个时刻")])]),o._v(" "),v("p",[o._v("这样你的临时库就跟误删之前的线上库一样了，然后你可以把表数据从临时库取出来，按需要恢复到线上库去。")]),o._v(" "),v("p",[o._v("除了恢复误删的表，有时候还需要增加从节点副本来增加读性能，现在常见的做法也是用全量备份加上应用 binlog 来实现的。因此，这个操作十分重要。")]),o._v(" "),v("h3",{attrs:{id:"_3-2-为什么需要两阶段提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-为什么需要两阶段提交"}},[o._v("#")]),o._v(" 3.2 为什么需要两阶段提交")]),o._v(" "),v("p",[o._v("说完了数据恢复过程，我们回来说说，为什么日志需要“两阶段提交”。")]),o._v(" "),v("p",[o._v("这里不妨用反证法来进行解释。由于 redo log 和 binlog 是两个独立的逻辑，如果不用两阶段提交，要么就是先写完 redo log 再写 binlog，要么采用反过来的顺序。我们看看这两种方式会有什么问题：")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("先写 redo log 后写 binlog")]),o._v("：假设在 redo log 写完，binlog 还没有写完的时候，MySQL 进程异常重启。由于我们前面说过的，redo log 写完之后，就算数据库做了这件事了，系统即使崩溃，仍然能够把数据恢复回来，所以恢复后这一行 c 的值是 1。但是由于 binlog 没写完就 crash 了，这时候 binlog 里面就没有记录这个语句。因此，之后备份日志的时候，存起来的 binlog 里面就没有这条语句。然后你会发现，如果需要用这个 binlog 来恢复临时库的话，"),v("strong",[o._v("由于这个语句的 binlog 丢失，这个临时库就会少了这一次更新")]),o._v("，恢复出来的这一行 c 的值就是 0，与原库的值不同。")]),o._v(" "),v("li",[v("strong",[o._v("先写 binlog 后写 redo log")]),o._v("：如果在 binlog 写完之后 crash，由于 redo log 还没写，所以数据库就算还没做这件事，崩溃恢复以后这个事务无效，所以这一行 c 的值是 0。但是 binlog 里面已经记录了“把 c 从 0 改成 1”这个日志。所以，"),v("strong",[o._v("在之后用 binlog 来恢复的时候就多了一个事务出来")]),o._v("，恢复出来的这一行 c 的值就是 1，与原库的值不同。")])]),o._v(" "),v("p",[o._v("可以看到，"),v("strong",[o._v("如果不使用“两阶段提交”，那么数据库的状态就有可能和用它的日志恢复出来的库的状态不一致")]),o._v("。再采用了两阶段提交之后，可以分成这么三个过程：1. prepare 阶段 2. 写 binlog 3. commit，那：")]),o._v(" "),v("ul",[v("li",[o._v("如果在 2 之前崩溃：重启恢复：恢复后发现没有 commit，事务回滚，备份恢复时没有 binlog，两者一致。")]),o._v(" "),v("li",[o._v("如果在 3 之前崩溃：虽然没 commit，但满足 prepare 和 binlog 完整，所以重启后会自动 commit，备份恢复时有 binlog，两者一致。")])]),o._v(" "),v("blockquote",[v("p",[o._v("要理清这里的关系。当发生崩溃时，重启恢复是只依靠 redo log 来实现的安全。而当需要备份或恢复时，是需要 binlog 来实现，毕竟 binlog 的记录主要就是用于备份，它有完整的逻辑记录。我们要实现的目标是重启恢复和备份恢复两个状况恢复得到的库是一样的状态，这样就不用担心日志写错了。")])]),o._v(" "),v("p",[o._v("如果不用两阶段提交，那崩溃恢复后的主库可能与备份出来的从库产生数据不一致现象。")]),o._v(" "),v("p",[o._v("简单说，redo log 和 binlog 都可以用于表示事务的提交状态，而两阶段提交就是让这两个状态保持逻辑上的一致。")]),o._v(" "),v("h2",{attrs:{id:"summary"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[o._v("#")]),o._v(" Summary")]),o._v(" "),v("p",[o._v("今天介绍了 MySQL 中最重要的两个日志：物理日志 redo log 和逻辑日志 binlog。")]),o._v(" "),v("ul",[v("li",[o._v("redo log 用于保证 crash-safe 能力。innodb_flush_log_at_trx_commit 这个参数设置成 1 的时候，表示每次事务的 redo log 都直接持久化到磁盘。这个参数我建议你设置成 1，这样可以保证 MySQL 异常重启之后数据不丢失。")]),o._v(" "),v("li",[o._v("binlog 有完整的逻辑记录，就可以用于备份恢复，sync_binlog 这个参数设置成 1 的时候，表示每次事务的 binlog 都持久化到磁盘。这个参数我也建议你设置成 1，这样可以保证 MySQL 异常重启之后 binlog 不丢失。")])]),o._v(" "),v("p",[o._v("两阶段提交是跨系统维持数据逻辑一致性时常用的一个方案，即使你不做数据库内核开发，日常开发中也有可能会用到。")]),o._v(" "),v("h2",{attrs:{id:"_4-日志相关问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-日志相关问题"}},[o._v("#")]),o._v(" 4. 日志相关问题")]),o._v(" "),v("p",[o._v("这一章专门找了几个联系非常紧密的问题，串了起来，希望可以帮你解决关于日志和索引的一些疑惑。")]),o._v(" "),v("p",[o._v("前面介绍了 binlog 和 redo log 配合来做崩溃恢复，当时用了反证法来说明如果没有两阶段提交，会导致 MySQL 出现主备数据不一致等问题。但有很多同学问，在两阶段提交的不同瞬间，MySQL 如果发生异常重启，是怎么保证数据完整性的？现在来解释一下这个问题。")]),o._v(" "),v("p",[o._v("先放一张两阶段提交的图：")]),o._v(" "),v("center",[v("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20231230153003.png",alt:"20231230153003"}})]),o._v(" "),v("center",[v("font",{attrs:{color:"gray"}},[o._v("两阶段提交示意图")])],1),o._v(" "),v("p",[o._v("这里先解释一下这里的 commit 指的是一个步骤，而非事务中的 commit：")]),o._v(" "),v("ul",[v("li",[o._v("commit 语句是 MySQL 语法中用于提交一个事务的命令，一般跟 begin/start transaction 配对使用。")]),o._v(" "),v("li",[o._v("这里的“commit 步骤”指的是事务提交过程中的一个小步骤，也是最后一步。当这个步骤执行完成后，这个事务就提交完成了。")]),o._v(" "),v("li",[o._v("“commit 语句”执行的时候，会包含“commit 步骤”。")])]),o._v(" "),v("p",[o._v("这个示例中并没有显式开启事务，所以这个 update 语句本身自己就是一个事务，在执行完成后提交事务时，就会用到这个“commit 步骤“。")]),o._v(" "),v("p",[o._v("接下来，我们就一起分析一下"),v("strong",[o._v("在两阶段提交的不同时刻，MySQL 异常重启会出现什么现象")]),o._v("。")]),o._v(" "),v("p",[o._v("如果在图中时刻 A 的地方，也就是写入 redo log 处于 prepare 阶段之后、写 binlog 之前，发生了崩溃（crash），由于此时 binlog 还没写，redo log 也还没提交，所以崩溃恢复的时候，这个事务会回滚。这时候，binlog 还没写，所以也不会传到备库。到这里，大家都可以理解。")]),o._v(" "),v("p",[o._v("大家出现问题的地方，主要集中在时刻 B，也就是 binlog 写完，redo log 还没 commit 前发生 crash，那崩溃恢复的时候 MySQL 会怎么处理？")]),o._v(" "),v("p",[o._v("我们先看一下崩溃恢复时的判断规则：")]),o._v(" "),v("ol",[v("li",[o._v("如果 redo log 里面的事务是完整的，也就是已经有了 commit 标识，则直接提交；")]),o._v(" "),v("li",[o._v("如果 redo log 里面的事务只有完整的 prepare，则判断对应的事务 binlog 是否存在并完整：\n"),v("ul",[v("li",[o._v("a. 如果是，则提交事务；")]),o._v(" "),v("li",[o._v("b. 否则，回滚事务。")])])])]),o._v(" "),v("p",[o._v("这里，时刻 B 发生 crash 对应的就是 2(a) 的情况，崩溃恢复过程中事务会被提交。")]),o._v(" "),v("p",[o._v("现在，我们继续延展一下这个问题。")]),o._v(" "),v("h3",{attrs:{id:"_4-1-mysql-怎么知道-binlog-是完整的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-mysql-怎么知道-binlog-是完整的"}},[o._v("#")]),o._v(" 4.1 MySQL 怎么知道 binlog 是完整的？")]),o._v(" "),v("p",[o._v("回答：一个事务的 binlog 是有完整格式的：")]),o._v(" "),v("ul",[v("li",[o._v("statement 格式的 binlog，最后会有 COMMIT；")]),o._v(" "),v("li",[o._v("row 格式的 binlog，最后会有一个 XID event。")])]),o._v(" "),v("p",[o._v("另外，在 MySQL 5.6.2 版本以后，还引入了 binlog-checksum 参数，用来验证 binlog 内容的正确性。对于 binlog 日志由于磁盘原因，可能会在日志中间出错的情况，MySQL 可以通过校验 checksum 的结果来发现。所以，"),v("strong",[o._v("MySQL 还是有办法验证事务 binlog 的完整性的")]),o._v("。")]),o._v(" "),v("h3",{attrs:{id:"_4-2-redo-log-和-binlog-是怎么关联起来的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-redo-log-和-binlog-是怎么关联起来的"}},[o._v("#")]),o._v(" 4.2 redo log 和 binlog 是怎么关联起来的？")]),o._v(" "),v("p",[o._v("回答：它们有一个共同的数据字段，叫 "),v("mark",[o._v("XID")]),o._v("。")]),o._v(" "),v("p",[o._v("崩溃恢复的时候，会按顺序扫描 redo log：")]),o._v(" "),v("ul",[v("li",[o._v("如果碰到既有 prepare、又有 commit 的 redo log，就直接提交；")]),o._v(" "),v("li",[o._v("如果碰到只有 parepare、而没有 commit 的 redo log，就拿着 XID 去 binlog 找对应的事务。")])]),o._v(" "),v("h3",{attrs:{id:"_4-3-处于-prepare-阶段的-redo-log-加上完整-binlog-重启就能恢复-mysql-为什么要这么设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-处于-prepare-阶段的-redo-log-加上完整-binlog-重启就能恢复-mysql-为什么要这么设计"}},[o._v("#")]),o._v(" 4.3 处于 prepare 阶段的 redo log 加上完整 binlog，重启就能恢复，MySQL 为什么要这么设计?")]),o._v(" "),v("p",[o._v("回答：其实，这个问题还是跟我们在反证法中说到的数据与备份的一致性有关。在时刻 B，也就是 binlog 写完以后 MySQL 发生崩溃，这时候 binlog 已经写入了，之后就会被从库（或者用这个 binlog 恢复出来的库）使用。")]),o._v(" "),v("p",[o._v("所以，在主库上也要提交这个事务。采用这个策略，主库和备库的数据就保证了一致性。")]),o._v(" "),v("h3",{attrs:{id:"_4-4-如果这样的话-为什么还要两阶段提交呢-干脆先-redo-log-写完-再写-binlog。崩溃恢复的时候-必须得两个日志都完整才可以。是不是一样的逻辑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-如果这样的话-为什么还要两阶段提交呢-干脆先-redo-log-写完-再写-binlog。崩溃恢复的时候-必须得两个日志都完整才可以。是不是一样的逻辑"}},[o._v("#")]),o._v(" 4.4 如果这样的话，为什么还要两阶段提交呢？干脆先 redo log 写完，再写 binlog。崩溃恢复的时候，必须得两个日志都完整才可以。是不是一样的逻辑？")]),o._v(" "),v("p",[o._v("回答：其实，两阶段提交是经典的分布式系统问题，并不是 MySQL 独有的。")]),o._v(" "),v("p",[o._v("如果必须要举一个场景，来说明这么做的必要性的话，那就是事务的持久性问题。对于 InnoDB 引擎来说，如果 redo log 提交完成了，事务就不能回滚（如果这还允许回滚，就可能覆盖掉别的事务的更新）。而如果 redo log 直接提交，然后 binlog 写入的时候失败，InnoDB 又回滚不了，数据和 binlog 日志又不一致了。")]),o._v(" "),v("p",[v("strong",[o._v("两阶段提交就是为了给所有人一个机会，当每个人都说“我 ok”的时候，再一起提交")]),o._v("。")]),o._v(" "),v("h3",{attrs:{id:"_4-5-不引入两个日志-也就没有两阶段提交的必要了。只用-binlog-来支持崩溃恢复-又能支持归档-不就可以了"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-不引入两个日志-也就没有两阶段提交的必要了。只用-binlog-来支持崩溃恢复-又能支持归档-不就可以了"}},[o._v("#")]),o._v(" 4.5 不引入两个日志，也就没有两阶段提交的必要了。只用 binlog 来支持崩溃恢复，又能支持归档，不就可以了？")]),o._v(" "),v("p",[o._v("回答：这位同学的意思是，只保留 binlog，然后可以把提交流程改成这样：… -> “数据更新到内存” -> “写 binlog” -> “提交事务”，是不是也可以提供崩溃恢复的能力？")]),o._v(" "),v("p",[o._v("答案是不可以。")]),o._v(" "),v("p",[o._v("如果说历史原因的话，那就是 InnoDB 并不是 MySQL 的原生存储引擎。MySQL 的原生引擎是 MyISAM，设计之初就有没有支持崩溃恢复。InnoDB 在作为 MySQL 的插件加入 MySQL 引擎家族之前，就已经是一个提供了崩溃恢复和事务支持的引擎了。InnoDB 接入了 MySQL 后，发现既然 binlog 没有崩溃恢复的能力，那就用 InnoDB 原有的 redo log 好了。")]),o._v(" "),v("p",[o._v("而如果说实现上的原因的话，就有很多了。就按照问题中说的，只用 binlog 来实现崩溃恢复的流程，我画了一张示意图，这里就没有 redo log 了：")]),o._v(" "),v("center",[v("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20231230160732.png",alt:"20231230160732"}})]),o._v(" "),v("p",[o._v("这样的流程下，binlog 还是不能支持崩溃恢复的。我说一个不支持的点吧：binlog 没有能力恢复“数据页”。")]),o._v(" "),v("p",[o._v("如果在图中标的位置，也就是 binlog2 写完了，但是整个事务还没有 commit 的时候，MySQL 发生了 crash。重启后，引擎内部事务 2 会回滚，然后应用 binlog2 可以补回来；但是对于事务 1 来说，系统已经认为提交完成了，不会再应用一次 binlog1。但是，InnoDB 引擎使用的是 WAL 技术，执行事务的时候，写完内存和日志，事务就算完成了。如果之后崩溃，要依赖于日志来恢复数据页。也就是说在图中这个位置发生崩溃的话，事务 1 也是可能丢失了的，而且是数据页级的丢失。此时，"),v("strong",[o._v("binlog 里面并没有记录数据页的更新细节，是补不回来的")]),o._v("。")]),o._v(" "),v("p",[o._v("你如果要说，那我优化一下 binlog 的内容，让它来记录数据页的更改可以吗？但，这其实就是又做了一个 redo log 出来。"),v("strong",[o._v("所以，至少现在的 binlog 能力，还不能支持崩溃恢复")]),o._v("。")]),o._v(" "),v("h3",{attrs:{id:"_4-6-那能不能反过来-只用-redo-log-不要-binlog"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-那能不能反过来-只用-redo-log-不要-binlog"}},[o._v("#")]),o._v(" 4.6 那能不能反过来，只用 redo log，不要 binlog？")]),o._v(" "),v("p",[o._v("回答：如果只从崩溃恢复的角度来讲是可以的。你可以把 binlog 关掉，这样就没有两阶段提交了，但系统依然是 crash-safe 的。")]),o._v(" "),v("p",[o._v("但是，如果你了解一下业界各个公司的使用场景的话，就会发现在正式的生产库上，binlog 都是开着的。"),v("strong",[o._v("因为 binlog 有着 redo log 无法替代的功能")]),o._v("。")]),o._v(" "),v("ul",[v("li",[o._v("一个是归档。redo log 是循环写，写到末尾是要回到开头继续写的。这样历史日志没法保留，redo log 也就起不到归档的作用。")]),o._v(" "),v("li",[o._v("一个就是 MySQL 系统依赖于 binlog。binlog 作为 MySQL 一开始就有的功能，被用在了很多地方。其中，MySQL 系统高可用的基础，就是 binlog 复制。")])]),o._v(" "),v("p",[o._v("还有很多公司有异构系统（比如一些数据分析系统），这些系统就靠消费 MySQL 的 binlog 来更新自己的数据。关掉 binlog 的话，这些下游系统就没法输入了。总之，由于现在包括 MySQL 高可用在内的很多系统机制都依赖于 binlog，所以“鸠占鹊巢”redo log 还做不到。你看，发展生态是多么重要。")]),o._v(" "),v("h3",{attrs:{id:"_4-7-redo-log-一般设置多大"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-redo-log-一般设置多大"}},[o._v("#")]),o._v(" 4.7 redo log 一般设置多大？")]),o._v(" "),v("p",[o._v("回答：redo log 太小的话，会导致很快就被写满，然后不得不强行刷 redo log，这样 WAL 机制的能力就发挥不出来了。所以，如果是现在常见的几个 TB 的磁盘的话，就不要太小气了，直接将 redo log 设置为 4 个文件、每个文件 1GB 吧。")]),o._v(" "),v("h3",{attrs:{id:"_4-8-正常运行中的实例-数据写入后的最终落盘-是从-redo-log-更新过来的还是从-buffer-pool-更新过来的呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-正常运行中的实例-数据写入后的最终落盘-是从-redo-log-更新过来的还是从-buffer-pool-更新过来的呢"}},[o._v("#")]),o._v(" 4.8 正常运行中的实例，数据写入后的最终落盘，是从 redo log 更新过来的还是从 buffer pool 更新过来的呢？")]),o._v(" "),v("p",[o._v("回答：这个问题其实问得非常好。这里涉及到了，“redo log 里面到底是什么”的问题。")]),o._v(" "),v("p",[o._v("实际上，redo log 并没有记录数据页的完整数据，所以它并没有能力自己去更新磁盘数据页，也就不存在“数据最终落盘，是由 redo log 更新过去”的情况。")]),o._v(" "),v("ol",[v("li",[o._v("如果是正常运行的实例的话，数据页被修改以后，跟磁盘的数据页不一致，称为脏页。最终数据落盘，就是把内存中的数据页写盘。这个过程，甚至与 redo log 毫无关系。")]),o._v(" "),v("li",[o._v("在崩溃恢复场景中，InnoDB 如果判断到一个数据页可能在崩溃恢复的时候丢失了更新，就会将它读到内存，然后让 redo log 更新内存内容。更新完成后，内存页变成脏页，就回到了第一种情况的状态。")])]),o._v(" "),v("h3",{attrs:{id:"_4-9-redo-log-buffer-是什么-是先修改内存-还是先写-redo-log-文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-redo-log-buffer-是什么-是先修改内存-还是先写-redo-log-文件"}},[o._v("#")]),o._v(" 4.9 redo log buffer 是什么？是先修改内存，还是先写 redo log 文件？")]),o._v(" "),v("p",[o._v("这两个问题可以一起回答。")]),o._v(" "),v("p",[o._v("在一个事务的更新过程中，日志是要写多次的。比如下面这个事务：")]),o._v(" "),v("div",{staticClass:"language-plain line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-plain"}},[v("code",[o._v("begin;\ninsert into t1 ...\ninsert into t2 ...\ncommit;\n")])]),o._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[o._v("1")]),v("br"),v("span",{staticClass:"line-number"},[o._v("2")]),v("br"),v("span",{staticClass:"line-number"},[o._v("3")]),v("br"),v("span",{staticClass:"line-number"},[o._v("4")]),v("br")])]),v("p",[o._v("这个事务要往两个表中插入记录，插入数据的过程中，生成的日志都得先保存起来，但又不能在还没 commit 的时候就直接写到 redo log 文件里。所以，"),v("mark",[o._v("redo log buffer")]),o._v(" 就是一块内存，用来先存 redo 日志的。也就是说，在执行第一个 insert 的时候，数据的内存被修改了，redo log buffer 也写入了日志。")]),o._v(" "),v("p",[o._v("但是，真正把日志写到 redo log 文件（"),v("strong",[o._v("文件名是 ib_logfile + 数字")]),o._v("），是在执行 commit 语句的时候做的（也可能是后台进程在定期刷入磁盘的过程中）。")]),o._v(" "),v("p",[o._v("单独执行一个更新语句的时候，InnoDB 会自己启动一个事务，在语句执行完成的时候提交。过程跟上面是一样的，只不过是“压缩”到了一个语句里面完成。")])],1)}),[],!1,null,null,null);_.default=r.exports}}]);
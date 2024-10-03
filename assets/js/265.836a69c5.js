(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1017:function(t,s,a){"use strict";a.r(s);var n=a(22),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/article/68963",target:"_blank",rel:"noopener noreferrer"}},[t._v("03 | 事务隔离：为什么你改了我还看不见？| 极客时间"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/article/70562",target:"_blank",rel:"noopener noreferrer"}},[t._v("08 | 事务到底是隔离的还是不隔离的？| 极客时间"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("简单来说，事务就是要保证一组数据库操作，要么全部成功，要么全部失败。在 MySQL 中，事务支持是在引擎层实现的。MySQL 原生的 MyISAM 引擎就不支持事务，这也是 MyISAM 被 InnoDB 取代的重要原因之一。")]),t._v(" "),a("p",[t._v("今天的文章将以 InnoDB 为例，剖析 MySQL 在事务支持方面的特定实现，并基于原理给出相应的实践建议。")]),t._v(" "),a("h2",{attrs:{id:"_1-隔离性与隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-隔离性与隔离级别"}},[t._v("#")]),t._v(" 1. 隔离性与隔离级别")]),t._v(" "),a("p",[t._v("提到事务，你肯定会想到 ACID，今天主要要讲的是其中的 I，也就是隔离性。")]),t._v(" "),a("p",[t._v("当数据库上有多个事务同时执行的时候，就可能出现脏读（dirty read）、不可重复读（non-repeatable read）、幻读（phantom read）的问题，为了解决这些问题，就有了“隔离级别”的概念。在谈隔离级别之前，你首先要知道，"),a("strong",[t._v("你隔离得越严实，效率就会越低")]),t._v("。因此很多时候，我们都要在二者之间做 trade-off。")]),t._v(" "),a("p",[t._v("SQL 标准的事务隔离级别包括：")]),t._v(" "),a("ul",[a("li",[a("mark",[t._v("读未提交")]),t._v("（read uncommitted）：指一个事务还没提交时，它做的变更就能被别的事务看到。")]),t._v(" "),a("li",[a("mark",[t._v("读提交")]),t._v("（read committed）：一个事务提交之后，它做的变更才会被其他事务看到。")]),t._v(" "),a("li",[a("mark",[t._v("可重复读")]),t._v("（repeatable read）：一个事务执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的。当然在可重复读隔离级别下，未提交变更对其他事务也是不可见的。")]),t._v(" "),a("li",[a("mark",[t._v("可串行化")]),t._v("（serializable）：顾名思义是对于同一行记录，“写”会加“写锁”，“读”会加“读锁”。当出现读写锁冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行。")])]),t._v(" "),a("p",[t._v("其中“读提交”和“可重复读”比较难理解，所以我用一个例子说明这几种隔离级别。假设数据表 T 中只有一列，其中一行的值为 1，下面是按照时间顺序执行两个事务的行为。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("center",[a("img",{staticStyle:{zoom:"70%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230117233935073.png",alt:"image-20230117233935073"}})]),t._v(" "),a("p",[t._v("我们来看看在不同的隔离级别下，事务 A 会有哪些不同的返回结果，也就是图里面 V1、V2、V3 的返回值分别是什么：")]),t._v(" "),a("ul",[a("li",[t._v("若隔离级别是“读未提交”， 则 V1 的值就是 2。这时候事务 B 虽然还没有提交，但是结果已经被 A 看到了。因此，V2、V3 也都是 2。")]),t._v(" "),a("li",[t._v("若隔离级别是“读提交”，则 V1 是 1，V2 的值是 2。事务 B 的更新在提交后才能被 A 看到。所以， V3 的值也是 2。")]),t._v(" "),a("li",[t._v("若隔离级别是“可重复读”，则 V1、V2 是 1，V3 是 2。之所以 V2 还是 1，遵循的就是这个要求：事务在执行期间看到的数据前后必须是一致的。")]),t._v(" "),a("li",[t._v("若隔离级别是“串行化”，则在事务 B 执行“将 1 改成 2”的时候，会被锁住。直到事务 A 提交后，事务 B 才可以继续执行。所以从 A 的角度看， V1、V2 值是 1，V3 的值是 2。")])]),t._v(" "),a("p",[t._v("在实现上，"),a("strong",[t._v("数据库里面会创建一个视图（快照），访问的时候以视图的逻辑结果为准")]),t._v("。在“可重复读”隔离级别下，这个视图（快照）是在事务启动时创建的，整个事务存在期间都用这个静态视图。在“读提交”隔离级别下，这个视图是在每个 SQL 语句开始执行的时候创建的。这里需要注意的是，“读未提交”隔离级别下直接返回记录上的最新值，没有视图概念；而“串行化”隔离级别下直接用加锁的方式来避免并行访问。")]),t._v(" "),a("blockquote",[a("p",[t._v("这里所说的“视图”就是 DDIA 中所讲的“快照级别隔离”的快照。")])]),t._v(" "),a("p",[t._v("我们可以看到在不同的隔离级别下，数据库行为是有所不同的。Oracle 数据库的默认隔离级别其实就是“读提交”，因此对于一些从 Oracle 迁移到 MySQL 的应用，为保证数据库隔离级别的一致，你一定要记得将 MySQL 的隔离级别设置为“读提交”。")]),t._v(" "),a("p",[t._v("配置的方式是，将启动参数 transaction-isolation 的值设置成 READ-COMMITTED。你可以用 show variables 来查看当前的值。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> show variables like 'transaction_isolation';\n+-----------------------+----------------+\n| Variable_name | Value |\n+-----------------------+----------------+\n| transaction_isolation | READ-COMMITTED |\n+-----------------------+----------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("总结来说，存在即合理，"),a("strong",[t._v("每种隔离级别都有自己的使用场景")]),t._v("，你要根据自己的业务情况来定。")]),t._v(" "),a("p",[t._v("你可能会问那什么时候需要“可重复读”的场景呢？我们来看一个数据校对逻辑的案例。假设你在管理一个个人银行账户表。一个表存了账户余额，一个表存了账单明细。到了月底你要做数据校对，也就是判断上个月的余额和当前余额的差额，是否与本月的账单明细一致。你一定希望在校对过程中，即使有用户发生了一笔新的交易，也不影响你的校对结果。这时候使用“可重复读”隔离级别就很方便。事务启动时的视图可以认为是静态的，不受其他事务更新的影响。")]),t._v(" "),a("h2",{attrs:{id:"_2-事务隔离的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-事务隔离的实现"}},[t._v("#")]),t._v(" 2. 事务隔离的实现")]),t._v(" "),a("p",[t._v("理解了事务的隔离级别，我们再来看看事务隔离具体是怎么实现的。这里我们展开说明“可重复读”。")]),t._v(" "),a("p",[t._v("在 MySQL 中，实际上每条记录在更新的时候都会同时记录一条回滚操作。记录上的最新值，通过回滚操作，都可以得到前一个状态的值。")]),t._v(" "),a("p",[t._v("假设一个值从 1 被按顺序改成了 2、3、4，在"),a("strong",[t._v("回滚日志")]),t._v("里面就会有类似下面的记录：")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"90%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230117235019840.png",alt:"image-20230117235019840"}})]),t._v(" "),a("p",[t._v("当前值是 4，但是在查询这条记录的时候，不同时刻启动的事务会有不同的 read-view。如图中看到的，在视图 A、B、C 里面，这一个记录的值分别是 1、2、4，同一条记录在系统中可以存在多个版本，就是数据库的"),a("mark",[t._v("多版本并发控制")]),t._v("（"),a("strong",[t._v("MVCC")]),t._v("）。对于 read-view A，要得到 1，就必须将当前值依次执行图中所有的回滚操作得到。")]),t._v(" "),a("p",[t._v("同时你会发现，即使现在有另外一个事务正在将 4 改成 5，这个事务跟 read-view A、B、C 对应的事务是不会冲突的。")]),t._v(" "),a("p",[t._v("你一定会问，回滚日志总不能一直保留吧，什么时候删除呢？答案是，在不需要的时候才删除。也就是说，系统会判断，"),a("strong",[t._v("当没有事务再需要用到这些回滚日志时，回滚日志会被删除")]),t._v("。什么时候才不需要了呢？就是当系统里没有比这个回滚日志更早的 read-view 的时候。")]),t._v(" "),a("p",[t._v("基于上面的说明，我们来讨论一下为什么建议你"),a("font",{attrs:{color:"red"}},[t._v("尽量不要使用长事务")]),t._v(":")],1),t._v(" "),a("ul",[a("li",[t._v("长事务意味着系统里面会存在很老的事务视图。由于这些事务随时可能访问数据库里面的任何数据，所以这个事务提交之前，数据库里面它可能用到的回滚记录都必须保留，这就"),a("strong",[t._v("会导致大量占用存储空间")]),t._v("。")]),t._v(" "),a("li",[t._v("在 MySQL 5.5 及以前的版本，回滚日志是跟数据字典一起放在 ibdata 文件里的，即使长事务最终提交，回滚段被清理，文件也不会变小。我见过数据只有 20GB，而回滚段有 200GB 的库。最终只好为了清理回滚段，重建整个库。")]),t._v(" "),a("li",[t._v("除了对回滚段的影响，长事务还占用锁资源，也可能拖垮整个库，这个我们会在后面讲锁的时候展开。")])]),t._v(" "),a("h2",{attrs:{id:"_3-事务的启动方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-事务的启动方式"}},[t._v("#")]),t._v(" 3. 事务的启动方式")]),t._v(" "),a("p",[t._v("如前面所述，长事务有这些潜在风险，我当然是建议你尽量避免。"),a("u",[t._v("其实很多时候业务开发同学并不是有意使用长事务，通常是由于误用所致")]),t._v("。MySQL 的"),a("strong",[t._v("事务启动方式有以下几种")]),t._v("：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("显式启动事务语句")]),t._v("， begin 或 start transaction。配套的提交语句是 commit，回滚语句是 rollback。")]),t._v(" "),a("li",[a("strong",[t._v("set autocommit=0")]),t._v("，这个命令会将这个线程的自动提交关掉。意味着如果你只执行一个 select 语句，这个事务就启动了，而且并不会自动提交。这个事务持续存在直到你主动执行 commit 或 rollback 语句，或者断开连接。")])]),t._v(" "),a("p",[t._v("有些客户端连接框架会默认连接成功后先执行一个 set autocommit=0 的命令。这就导致接下来的查询都在事务中，如果是长连接，就导致了意外的长事务。")]),t._v(" "),a("p",[t._v("因此，我会"),a("font",{attrs:{color:"red"}},[t._v("建议你总是使用 set autocommit=1, 通过显式语句的方式来启动事务")]),t._v("。")],1),t._v(" "),a("p",[t._v("但是有的开发同学会纠结“多一次交互”的问题。对于一个需要频繁使用事务的业务，第二种方式每个事务在开始时都不需要主动执行一次 “begin”，减少了语句的交互次数。如果你也有这个顾虑，我建议你使用 "),a("mark",[t._v("commit work and chain 语法")]),t._v("：在 autocommit 为 1 的情况下，用 begin 显式启动的事务，如果执行 commit 则提交事务。如果执行 commit work and chain，则是提交事务并自动启动下一个事务，这样也省去了再次执行 begin 语句的开销。同时带来的好处是从程序开发的角度明确地知道每个语句是否处于事务中。")]),t._v(" "),a("p",[t._v("你可以在 information_schema 库的 innodb_trx 这个表中查询长事务，比如下面这个语句，用于查找持续时间超过 60s 的事务：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innodb_trx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" TIME_TO_SEC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timediff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("trx_started"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("以上介绍了 MySQL 的事务隔离级别的现象和实现，根据实现原理分析了长事务存在的风险，以及如何用正确的方式避免长事务。希望我举的例子能够帮助你理解事务，并更好地使用 MySQL 的事务特性。")]),t._v(" "),a("h2",{attrs:{id:"_4-事务到底隔离还是不隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-事务到底隔离还是不隔离"}},[t._v("#")]),t._v(" 4. 事务到底隔离还是不隔离？")]),t._v(" "),a("p",[t._v("前面说了，如果是可重复读隔离级别，事务 T 启动的时候会创建一个视图 read-view，之后事务 T 执行期间，即使有其他事务修改了数据，事务 T 看到的仍然跟在启动时看到的一样。但在"),a("RouterLink",{attrs:{to:"/pages/8d05b4/"}},[t._v("全局锁、表级锁和行锁")]),t._v("中提到，一个事务要更新一行，如果刚好有另外一个事务拥有这一行的行锁，它又不能这么独身事外了，它会被锁住，进入等待状态。问题是，既然进入了等待状态，那么等到这个事务自己获取到行锁要更新数据的时候，它读到的值又是什么呢？")],1),t._v(" "),a("p",[t._v("举一个例子，下面是一个只有两行的表的初始化语句：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("事务 A、B、C 的流程如下：")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"90%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230120184944142.png",alt:"image-20230120184944142"}})]),t._v(" "),a("p",[t._v("这里，我们需要注意的是事务的启动时机。begin/start transaction 命令并不是一个事务的起点，在执行到它们之后的第一个操作 InnoDB 表的语句，事务才真正启动。如果你想要马上启动一个事务，可以使用 start transaction with consistent snapshot 这个命令。")]),t._v(" "),a("ul",[a("li",[t._v("第一种启动方式：一致性视图是在执行第一个快照读语句时创建的；")]),t._v(" "),a("li",[t._v("第二种启动方式，一致性视图是在执行 start transaction with consistent snapshot 时创建的。")])]),t._v(" "),a("p",[t._v("还需注意的是，之后如果没有特别说明，都默认 autocommit=1，也就是即使没有手动 start transaction 开启事务，mysql 默认也会将用户的操作当做事务即时提交。")]),t._v(" "),a("p",[a("strong",[t._v("现在你知道 A、B 事务看到的值是什么吗")]),t._v("。这一大节就把这个疑惑解开，更深一步地理解 MVCC。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-snapshot-在-mvcc-里是怎样工作的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-snapshot-在-mvcc-里是怎样工作的"}},[t._v("#")]),t._v(" 4.1 snapshot 在 MVCC 里是怎样工作的？")]),t._v(" "),a("p",[t._v("在可重复读隔离级别下，事务在启动的时候就“拍了个快照”。注意，"),a("strong",[t._v("这个快照是基于整库的")]),t._v("。")]),t._v(" "),a("p",[t._v("但真的要给全库拍快照又不太可行，一个数据库有 100G，怎么可能每个事务都先复制 100G 数据出来。实际上，DB 并不需要真的拷贝这 100G 数据。我们看一下这个 snapshot 是怎么实现的。")]),t._v(" "),a("p",[t._v("InnoDB 里面每个事务有一个唯一的事务 ID，叫作 "),a("mark",[t._v("transaction id")]),t._v("。它是在事务开始的时候向 InnoDB 的事务系统申请的，是"),a("strong",[t._v("按申请顺序严格递增的")]),t._v("。而每行数据也都是有多个版本的。每次事务更新数据的时候，都会生成一个新的数据版本，并且把 transaction id 赋值给这个数据版本的事务 ID，记为 "),a("mark",[t._v("row trx_id")]),t._v("。同时，旧的数据版本要保留，并且在新的数据版本中，能够有信息可以直接拿到它。")]),t._v(" "),a("blockquote",[a("p",[t._v("也就是说，数据表中的一行记录，其实可能有多个版本 (row)，每个版本有自己的 row trx_id。")])]),t._v(" "),a("p",[t._v("下图就是一个记录被多个事务连续更新后的状态：")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"90%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230120190328050.png",alt:"image-20230120190328050"}})]),t._v(" "),a("p",[t._v("图中虚线框里是同一行数据的 4 个版本，当前最新版本是 V4，k 的值是 22，它是被 transaction id 为 25 的事务更新的，因此它的 row trx_id 也是 25。")]),t._v(" "),a("p",[t._v("其实，图中的三个绿色虚线箭头就是 undo log（回滚日志），而且 "),a("strong",[t._v("旧版本 V1、V2、V3 并不是物理上真实存在的，而是每次需要的时候根据当前版本和 undo log 计算出来的")]),t._v("。比如在需要 V2 的时候，就是通过 V4 依次执行 U3、U2 算出来。")]),t._v(" "),a("p",[t._v("明白了多版本和 row trx_id 的概念后，我们再来想一下，InnoDB 是怎么定义那个“100G”的快照的。")]),t._v(" "),a("p",[t._v("按照可重复读的定义，一个事务启动的时候，能够看到所有已经提交的事务结果。但是之后，这个事务执行期间，其他事务的更新对它不可见。因此，一个事务只需要在启动后只承认那些位于自己启动之前的数据版本和自己更新的数据就好了。")]),t._v(" "),a("p",[t._v("在实现上，"),a("strong",[t._v("InnoDB 为每个事务构造了一个"),a("mark",[t._v("视图数组")]),t._v("，用来保存这个事务启动瞬间，当前正在“活跃”的所有事务 ID")]),t._v("。“活跃”指的就是，启动了但还没提交。数组里面事务 ID 的最小值记为"),a("mark",[t._v("低水位")]),t._v("，当前系统里面已经创建过的事务 ID 的最大值加 1 记为"),a("mark",[t._v("高水位")]),t._v("。这个视图数组和高水位，就组成了当前事务的"),a("mark",[t._v("一致性视图")]),t._v("（"),a("strong",[t._v("read-view")]),t._v("）。而"),a("strong",[t._v("数据版本的可见性规则，就是基于数据的 row trx_id 和这个一致性视图的对比结果得到的")]),t._v("。")]),t._v(" "),a("p",[t._v("这个视图数组把所有的 row trx_id 分成了几种不同的情况：")]),t._v(" "),a("center",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230120191357827.png",alt:"image-20230120191357827"}})]),t._v(" "),a("p",[t._v("这样，对于当前事务的启动瞬间来说，一个数据版本的 row trx_id，有以下几种可能：")]),t._v(" "),a("ol",[a("li",[t._v("如果落在绿色部分，表示这个版本是已提交的事务或者是当前事务自己生成的，这个数据是可见的；")]),t._v(" "),a("li",[t._v("如果落在红色部分，表示这个版本是由将来启动的事务生成的，是肯定不可见的；")]),t._v(" "),a("li",[t._v("如果落在黄色部分，那就包括两种情况：\n"),a("ul",[a("li",[t._v("若 row trx_id 在数组中，表示这个版本是由还没提交的事务生成的，不可见")]),t._v(" "),a("li",[t._v("若 row trx_id 不在数组中，表示这个版本是已经提交了的事务生成的，可见")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("易混："),a("strong",[t._v("落在黄色区域意味着是事务 ID 在低水位和高水位这个范围里面，而真正是是否可见，看黄色区域是否有这个值")]),t._v("。如果黄色区域没有这个事务 ID，则可见，如果有，则不可见。在这个范围里面并不意味这这个范围里有这个值，比如 [1,2,3,5]，4 在这个数组 1-5 的范围里，却没在这个数组里面。")])]),t._v(" "),a("p",[t._v("比如，对于图 2 中的数据来说，如果有一个事务，它的低水位是 18，那么当它访问这一行数据时，就会从 V4 通过 U3 计算出 V3，所以在它看来，这一行的值是 11。")]),t._v(" "),a("p",[t._v("有了这个可见性规则，系统里面随后发生的更新就与这个事务看到的内容无关了，所以这个事务的 snapshot 就是“静态”的了。所以你现在知道了，"),a("font",{attrs:{color:"blue"}},[t._v("InnoDB 利用了“所有数据都有多个版本”的这个特性，实现了“秒级创建快照”的能力")]),t._v("。")],1),t._v(" "),a("p",[t._v("现在借助于这个知识，我们对之前的例子进行分析。我们不妨假设：")]),t._v(" "),a("ol",[a("li",[t._v("事务 A 开始前，系统里面只有一个活跃事务 ID 是 99；")]),t._v(" "),a("li",[t._v("事务 A、B、C 的版本号分别是 100、101、102，且当前系统里只有这四个事务；")]),t._v(" "),a("li",[t._v("三个事务开始前，(1,1）这一行数据的 row trx_id 是 90。")])]),t._v(" "),a("p",[t._v("这样，事务 A 的视图数组就是[99,100], 事务 B 的视图数组是[99,100,101], 事务 C 的视图数组是[99,100,101,102]。为了简化分析，我先把其他干扰语句去掉，只画出跟事务 A 查询逻辑有关的操作：")]),t._v(" "),a("img",{staticStyle:{zoom:"90%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230120193049568.png",alt:"image-20230120193049568"}}),t._v(" "),a("p",[t._v("从图中可以看到，第一个有效更新是事务 C，把数据从 (1,1) 改成了 (1,2)。这时候，这个数据的最新版本的 row trx_id 是 102，而 90 这个版本已经成为了历史版本。第二个有效更新是事务 B，把数据从 (1,2) 改成了 (1,3)。这时候，这个数据的最新版本（即 row trx_id）是 101，而 102 又成为了历史版本。你可能注意到了，在事务 A 查询的时候，其实事务 B 还没有提交，但是它生成的 (1,3) 这个版本已经变成当前版本了。但这个版本对事务 A 必须是不可见的，否则就变成脏读了。好，现在事务 A 要来读数据了，它的视图数组是[99,100]。当然了，读数据都是从当前版本读起的。")]),t._v(" "),a("p",[t._v("所以，事务 A 查询语句的读数据流程是这样的：")]),t._v(" "),a("ul",[a("li",[t._v("找到 (1,3) 的时候，判断出 row trx_id=101，比高水位大，处于红色区域，不可见；")]),t._v(" "),a("li",[t._v("接着，找到上一个历史版本，一看 row trx_id=102，比高水位大，处于红色区域，不可见；")]),t._v(" "),a("li",[t._v("再往前找，终于找到了（1,1)，它的 row trx_id=90，比低水位小，处于绿色区域，可见。")])]),t._v(" "),a("p",[t._v("这样执行下来，虽然期间这一行数据被修改过，但是事务 A 不论在什么时候查询，看到这行数据的结果都是一致的，所以我们称之为"),a("strong",[t._v("一致性读")]),t._v("。")]),t._v(" "),a("p",[t._v("这个判断规则是从代码逻辑直接转译过来的，但是正如你所见，用于人肉分析可见性很麻烦。所以，用更直观的话说："),a("strong",[t._v("一个数据版本，对于一个事务视图来说，除了自己的更新总是可见以外，有三种情况")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"green"}},[t._v("版本未提交，不可见")]),t._v("；")],1),t._v(" "),a("li",[a("font",{attrs:{color:"green"}},[t._v("版本已提交，但是是在视图创建后提交的，不可见")]),t._v("；")],1),t._v(" "),a("li",[a("font",{attrs:{color:"green"}},[t._v("版本已提交，而且是在视图创建前提交的，可见")]),t._v("。")],1)]),t._v(" "),a("p",[t._v("现在，我们用这个规则来判断示例中的查询结果，事务 A 的查询语句的视图数组是在事务 A 启动的时候生成的，这时候：")]),t._v(" "),a("ul",[a("li",[t._v("(1,3) 还没提交，属于情况 1，不可见；")]),t._v(" "),a("li",[t._v("(1,2) 虽然提交了，但是是在视图数组创建之后提交的，属于情况 2，不可见；")]),t._v(" "),a("li",[t._v("(1,1) 是在视图数组创建之前提交的，可见。")])]),t._v(" "),a("p",[t._v("你看，"),a("strong",[t._v("去掉数字对比后，只用时间先后顺序来判断，分析起来是不是轻松多了")]),t._v("。所以，后面我们就都用这个规则来分析。")]),t._v(" "),a("h3",{attrs:{id:"_4-2-更新逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-更新逻辑"}},[t._v("#")]),t._v(" 4.2 更新逻辑")]),t._v(" "),a("p",[t._v("更细心的话，可以提出这样一个疑问："),a("strong",[t._v("事务 B 的 update 语句，如果按照一致性读，好像结果不对哦")]),t._v("？你看图 5 中，事务 B 的视图数组是先生成的，之后事务 C 才提交，不是应该看不见 (1,2) 吗，怎么能算出 (1,3) 来？")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230120193831898.png",alt:"image-20230120193831898"}})]),t._v(" "),a("p",[t._v("是的，如果事务 B 在更新之前查询一次数据，这个查询返回的 k 的值确实是 1。但是，"),a("strong",[t._v("当它要去更新数据的时候，就不能再在历史版本上更新了，否则事务 C 的更新就丢失了")]),t._v("。因此，事务 B 此时的 set k=k+1 是在（1,2）的基础上进行的操作。")]),t._v(" "),a("p",[t._v("所以，这里就用到了这样一条规则："),a("font",{attrs:{color:"blue"}},[t._v("更新数据都是先读后写的，而这个读，只能读当前的值")]),t._v("，称为“"),a("mark",[t._v("当前读")]),t._v("”（"),a("strong",[t._v("current read")]),t._v("）。")],1),t._v(" "),a("p",[t._v("因此，在更新的时候，当前读拿到的数据是 (1,2)，更新后生成了新版本的数据 (1,3)，这个新版本的 row trx_id 是 101。所以，在执行事务 B 查询语句的时候，一看自己的版本号是 101，最新数据的版本号也是 101，是自己的更新，可以直接使用，所以查询得到的 k 的值是 3。")]),t._v(" "),a("p",[t._v("这里我们提到了一个概念，叫作当前读。其实，"),a("strong",[t._v("除了 update 语句外，select 语句如果加锁，也是当前读")]),t._v("。所以，如果把事务 A 的查询语句 select * from t where id=1 修改一下，加上 lock in share mode 或 for update，也都可以读到版本号是 101 的数据，返回的 k 的值是 3。下面这两个 select 语句，就是分别加了读锁（S 锁，共享锁）和写锁（X 锁，排他锁）：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("再往前一步，假设事务 C 不是马上提交的，而是变成了下面的事务 C’，会怎么样呢？")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"90%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230120194318603.png",alt:"image-20230120194318603"}})]),t._v(" "),a("p",[t._v("事务 C’的不同是，更新后并没有马上提交，在它提交前，事务 B 的更新语句先发起了。前面说过了，虽然事务 C’还没提交，但是 (1,2) 这个版本也已经生成了，并且是当前的最新版本。那么，事务 B 的更新语句会怎么处理呢？")]),t._v(" "),a("p",[t._v("这时候，我们在上一篇文章中提到的“两阶段锁协议”就要上场了。事务 C’ 没提交，也就是说 (1,2) 这个版本上的写锁还没释放。而事务 B 是当前读，必须要读最新版本，而且必须加锁，因此就被锁住了，必须等到事务 C’ 释放这个锁，才能继续它的当前读。")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230120195038403.png",alt:"image-20230120195038403"}})]),t._v(" "),a("p",[a("strong",[t._v("到这里，我们把一致性读、当前读和行锁就串起来了")]),t._v("。")]),t._v(" "),a("p",[t._v("现在，我们再回到文章开头的问题：事务的可重复读的能力是怎么实现的？"),a("font",{attrs:{color:"blue"}},[t._v("可重复读的核心就是一致性读（consistent read）；而事务更新数据的时候，只能用当前读。如果当前的记录的行锁被其他事务占用的话，就需要进入锁等待")]),t._v("。")],1),t._v(" "),a("p",[t._v("而读提交的逻辑和可重复读的逻辑类似，它们最主要的区别是：")]),t._v(" "),a("ul",[a("li",[t._v("在可重复读隔离级别下，只需要在事务开始的时候创建一致性视图，之后事务里的其他查询都共用这个一致性视图；")]),t._v(" "),a("li",[t._v("在读提交隔离级别下，每一个语句执行前都会重新算出一个新的视图。")])]),t._v(" "),a("p",[t._v("那么，我们再看一下，"),a("strong",[t._v("在读提交隔离级别下，事务 A 和事务 B 的查询语句查到的 k，分别应该是多少呢")]),t._v("？")]),t._v(" "),a("blockquote",[a("p",[t._v("这里需要说明一下，“start transaction with consistent snapshot; ”的意思是从这个语句开始，创建一个持续整个事务的一致性快照。所以，在读提交隔离级别下，这个用法就没意义了，等效于普通的 start transaction。")])]),t._v(" "),a("p",[t._v("下面是读提交时的状态图，可以看到这两个查询语句的创建视图数组的时机发生了变化，就是图中的 read view 框。（注意：这里，我们用的还是事务 C 的逻辑直接提交，而不是事务 C’）")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230120195418637.png",alt:"image-20230120195418637"}})]),t._v(" "),a("p",[t._v("这时，事务 A 的查询语句的视图数组是在执行这个语句的时候创建的，时序上 (1,2)、(1,3) 的生成时间都在创建这个视图数组的时刻之前。但是，在这个时刻：")]),t._v(" "),a("ul",[a("li",[t._v("(1,3) 还没提交，属于情况 1，不可见；")]),t._v(" "),a("li",[t._v("(1,2) 提交了，属于情况 3，可见。")])]),t._v(" "),a("p",[t._v("所以，这时候事务 A 查询语句返回的是 k=2。显然地，事务 B 查询结果 k=3。")]),t._v(" "),a("h3",{attrs:{id:"_4-3-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-summary"}},[t._v("#")]),t._v(" 4.3 Summary")]),t._v(" "),a("p",[t._v("InnoDB 的行数据有多个版本，每个数据版本有自己的 row trx_id，每个事务或者语句有自己的一致性视图。普通查询语句是一致性读，一致性读会根据 row trx_id 和一致性视图确定数据版本的可见性。")]),t._v(" "),a("ul",[a("li",[t._v("对于可重复读，查询只承认在事务启动前就已经提交完成的数据；")]),t._v(" "),a("li",[t._v("对于读提交，查询只承认在语句启动前就已经提交完成的数据；")])]),t._v(" "),a("p",[t._v("而当前读，总是读取已经提交完成的最新版本。")]),t._v(" "),a("p",[t._v("你也可以想一下，为什么表结构不支持“可重复读”？这是因为表结构没有对应的行数据，也没有 row trx_id，因此只能遵循当前读的逻辑。")]),t._v(" "),a("p",[t._v("当然，MySQL 8.0 已经可以把表结构放在 InnoDB 字典里了，也许以后会支持表结构的可重复读。")]),t._v(" "),a("h2",{attrs:{id:"qa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qa"}},[t._v("#")]),t._v(" QA")]),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：你现在知道了系统里面应该避免长事务，如果你是业务开发负责人同时也是数据库负责人，你会有什么方案来避免出现或者处理这种情况呢？")]),t._v(" "),a("p",[a("strong",[t._v("A")]),t._v("：这个问题，我们可以从应用开发端和数据库端来看：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("从应用开发端来看")]),t._v("：\n"),a("ol",[a("li",[t._v("确认是否使用了 set autocommit=0。这个确认工作可以在测试环境中开展，把 MySQL 的 general_log 开起来，然后随便跑一个业务逻辑，通过 general_log 的日志来确认。一般框架如果会设置这个值，也就会提供参数来控制行为，你的目标就是把它改成 1。")]),t._v(" "),a("li",[t._v("确认是否有不必要的只读事务。有些框架会习惯不管什么语句先用 begin/commit 框起来。我见过有些是业务并没有这个需要，但是也把好几个 select 语句放到了事务中。这种只读事务可以去掉。")]),t._v(" "),a("li",[t._v("业务连接数据库的时候，根据业务本身的预估，通过 SET MAX_EXECUTION_TIME 命令，来控制每个语句执行的最长时间，避免单个语句意外执行太长时间。")])])]),t._v(" "),a("li",[a("strong",[t._v("从数据库端来看")]),t._v("：\n"),a("ol",[a("li",[t._v("监控 information_schema.Innodb_trx 表，设置长事务阈值，超过就报警 / 或者 kill；")]),t._v(" "),a("li",[t._v("Percona 的 pt-kill 这个工具不错，推荐使用；")]),t._v(" "),a("li",[t._v("在业务功能测试阶段要求输出所有的 general_log，分析日志行为提前发现问题；")]),t._v(" "),a("li",[t._v("如果使用的是 MySQL 5.6 或者更新版本，把 innodb_undo_tablespaces 设置成 2（或更大的值）。如果真的出现大事务导致回滚段过大，这样设置后清理起来更方便。")])])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);
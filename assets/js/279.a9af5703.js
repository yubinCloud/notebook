(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{1032:function(_,v,t){"use strict";t.r(v);var r=t(22),e=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("blockquote",[t("p",[_._v("参考文章：")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://time.geekbang.org/column/article/78658",target:"_blank",rel:"noopener noreferrer"}},[_._v("31 误删数据后除了跑路，还能怎么办？|  极客时间"),t("OutboundLink")],1)])])]),_._v(" "),t("h2",{attrs:{id:"_1-误删数据后怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-误删数据后怎么办"}},[_._v("#")]),_._v(" 1. 误删数据后怎么办")]),_._v(" "),t("p",[_._v("误删数据前后，我们可以做些什么，减少误删数据的风险，和由误删数据带来的损失。")]),_._v(" "),t("p",[_._v("MySQL 中误删数据分为以下情况：")]),_._v(" "),t("ol",[t("li",[_._v("使用 DELETE 语句误删 row")]),_._v(" "),t("li",[_._v("使用 DROP TABLE 或者 TRUNCATE TABLE 语句误删 table")]),_._v(" "),t("li",[_._v("使用 DROP DATABASE 误删 database")]),_._v(" "),t("li",[_._v("使用 rm 命令误删 MySQL 实例")])]),_._v(" "),t("h3",{attrs:{id:"_1-1-误删-row"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-误删-row"}},[_._v("#")]),_._v(" 1.1 误删 row")]),_._v(" "),t("h4",{attrs:{id:"_1-1-1-事后处理办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-事后处理办法"}},[_._v("#")]),_._v(" 1.1.1 事后处理办法")]),_._v(" "),t("p",[_._v("对于 DELETE 语句误删 row 的情况，"),t("strong",[_._v("可以用 Flashback 工具通过闪回把数据恢复回来")]),_._v("，原理是：修改 binlog 的内容，拿回原库重放。而能够使用这个方案的前提是，需要确保 binlog_format=row 和 binlog_row_image=FULL。")]),_._v(" "),t("p",[_._v("具体恢复数据时，"),t("strong",[_._v("对单个事务做如下处理")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("对于 insert 语句，对应的 binlog event 类型是 Write_rows event，把它改成 Delete_rows event 即可；")]),_._v(" "),t("li",[_._v("对于 delete 语句，也是将 Delete_rows event 改为 Write_rows event；")]),_._v(" "),t("li",[_._v("如果是 Update_rows 的话，binlog 里面记录了数据行修改前和修改后的值，对调这两行的位置即可。")])]),_._v(" "),t("p",[_._v("如果误删数据涉及到了多个事务的话，需要将事务的顺序调过来再执行。")]),_._v(" "),t("p",[t("strong",[_._v("需要说明的是，不建议你直接在主库上执行这些操作")]),_._v("。恢复数据比较安全的做法，是恢复出一个备份，或者找一个从库作为临时库，在这个临时库上执行这些操作，然后再将确认过的临时库的数据，恢复回主库。")]),_._v(" "),t("h4",{attrs:{id:"_1-1-2-事前预防"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-事前预防"}},[_._v("#")]),_._v(" 1.1.2 事前预防")]),_._v(" "),t("ul",[t("li",[_._v("把 sql_safe_updates 参数设置为 on。这样一来，如果我们忘记在 delete 或者 update 语句中写 where 条件，或者 where 条件里面没有包含索引字段的话，这条语句的执行就会报错。")]),_._v(" "),t("li",[_._v("代码上线前，必须经过 SQL 审计。")])]),_._v(" "),t("h3",{attrs:{id:"_1-2-误删库-表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-误删库-表"}},[_._v("#")]),_._v(" 1.2 误删库/表")]),_._v(" "),t("p",[_._v("方法：全量备份 + 增量日志")]),_._v(" "),t("p",[_._v("在这两个条件都具备的情况下，假如有人中午 12 点误删了一个库，恢复数据的流程如下：")]),_._v(" "),t("ol",[t("li",[_._v("取最近一次全量备份，假设这个库是一天一备，上次备份是当天 0 点；")]),_._v(" "),t("li",[_._v("用备份恢复出一个临时库；")]),_._v(" "),t("li",[_._v("从日志备份里面，取出凌晨 0 点之后的日志；")]),_._v(" "),t("li",[_._v("把这些日志，除了误删除数据的语句外，全部应用到临时库。")])]),_._v(" "),t("blockquote",[t("p",[_._v("这个数据恢复功能最好做成自动化工具，并经常拿出来演练。")])]),_._v(" "),t("h3",{attrs:{id:"_1-3-延迟复制备库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-延迟复制备库"}},[_._v("#")]),_._v(" 1.3 延迟复制备库")]),_._v(" "),t("p",[_._v("在一个全量快照生成的实例上运行一段时间的日志，这个过程可能会很慢，恢复时间可能按天来算。所以需要想办法缩短恢复数据所需时间。")]),_._v(" "),t("p",[_._v("如果有非常核心的业务，不允许太长的恢复时间，我们可以考虑"),t("strong",[_._v("搭建延迟复制的备库")]),_._v("。")]),_._v(" "),t("p",[_._v("一般的主备复制是，主库上有了变化之后，会很快反映到从库上。"),t("mark",[_._v("延迟复制的备库")]),_._v("是指：是一个特殊的备库，并指定它跟主库保持 N 秒的延迟，这样如果主库发生了数据误删，那么可以利用这个 N 秒的延迟打断从主库到从库的连接，从而保证数据的安全。")]),_._v(" "),t("h3",{attrs:{id:"_1-4-rm-删除数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-rm-删除数据"}},[_._v("#")]),_._v(" 1.4 rm 删除数据")]),_._v(" "),t("p",[_._v("其实，对于一个有高可用机制的 MySQL 集群来说，"),t("strong",[_._v("最不怕的就是 rm 删除数据了")]),_._v("。只要不是恶意地把整个集群删除，而只是删掉了其中某一个节点的数据的话，HA 系统就会开始工作，选出一个新的主库，从而保证整个集群的正常工作。")]),_._v(" "),t("p",[_._v("同时尽量做好跨机房备份，防止一个机房或一个地区出现难以预料的灾难。")]),_._v(" "),t("h3",{attrs:{id:"_1-5-预防误删库-表的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-预防误删库-表的方法"}},[_._v("#")]),_._v(" 1.5 预防误删库 / 表的方法")]),_._v(" "),t("p",[_._v("这里给出一些减少误删操作风险的建议：")]),_._v(" "),t("ol",[t("li",[_._v("账号分离，给与最小权限（比如业务开发的同学就不需要 truncate/drop 权限）")]),_._v(" "),t("li",[_._v("制定操作规范。这样做的目的，是避免写错要删除的表名。比如：\n"),t("ul",[t("li",[_._v("在删除数据表之前，必须先对表做改名操作。然后，观察一段时间，确保对业务无影响以后再删除这张表。")]),_._v(" "),t("li",[_._v("改表名的时候，要求给表名加固定的后缀（比如加 _to_be_deleted)，然后删除表的动作必须通过管理系统执行。并且，管理系删除表的时候，只能删除固定后缀的表。")])])])]),_._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),t("p",[_._v("这一大节讨论了误删数据的几种可能，以及误删后的处理方法。")]),_._v(" "),t("p",[_._v("但要强调的是："),t("strong",[_._v("预防远比处理的意义来得大")]),_._v("。")]),_._v(" "),t("p",[_._v("另外，在 MySQL 的集群方案中，会时不时地用到备份来恢复实例，因此"),t("strong",[_._v("定期检查备份的有效性也很有必要")]),_._v("。")])])}),[],!1,null,null,null);v.default=e.exports}}]);
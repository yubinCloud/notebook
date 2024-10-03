(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{811:function(t,s,a){"use strict";a.r(s);var m=a(22),c=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("转自 "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/_-fqTH6Vn1R22Aw0uc571A",target:"_blank",rel:"noopener noreferrer"}},[t._v("NLP机器学习关键技术总结：面向任务建模的数据划分、评估指标与拟合问题总结概述"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("当大家使用机器学习模型完成一项分类或者实体抽取等任务后，如何对模型完成任务效果进行评估？当模型完成效果达不到预期时，如何对模型进行优化？")]),t._v(" "),a("p",[t._v("本文将聚焦以上痛点，介绍【机器学习模型评估方法和优化相关知识】。对模型评估和优化进行阐述，过程中将尽量结合示例说明，使大家容易理解。本章将对实际项目使用过程中最普遍的分类模型和回归模型评估及优化方法进行阐述。")]),t._v(" "),a("h2",{attrs:{id:"_1-机器学习模型数据划分方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-机器学习模型数据划分方法"}},[t._v("#")]),t._v(" 1. 机器学习模型数据划分方法")]),t._v(" "),a("p",[t._v("当模型开发完成后，必须对建立的模型进行评估，评估其是否满足使用的需求，模型的评估有着标准的评价指标。")]),t._v(" "),a("h3",{attrs:{id:"_1-1-数据集划分概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数据集划分概述"}},[t._v("#")]),t._v(" 1.1 数据集划分概述")]),t._v(" "),a("p",[t._v("为准确评估模型性能，一般把整个数据集分为两个部分，一部分为 "),a("strong",[t._v("training set")]),t._v("，用于训练模型并得到估计参数，另一部分为 "),a("strong",[t._v("testing set")]),t._v("，用于评估模型的误差并得到准确率。")]),t._v(" "),a("p",[t._v("更进一步，在一些项目中，例如分类问题中，使用多种分类器时，不知道那种算法表现好且不同算法中包含大量需要人为设定的超参数，这种情况需要再划分一个验证集 "),a("strong",[t._v("validation set")]),t._v("，用于选择具体的超参数。")]),t._v(" "),a("p",[t._v("通常的做法是，将已知的数据切分成“测试集”(testing set)和“训练集”(training set)。在训练集上训练学习器，得到的误差为经验误差；在测试集上测试学习器对新样本的判别能力，产生的误差为"),a("u",[t._v("“测试误差”，作为泛化误差的近似")]),t._v("。")]),t._v(" "),a("p",[t._v("那么如何切分才能达到尽量好的效果呢？以下介绍 3 种常用的方法。（假设 D 为已知的样本，S 是训练集，T 是测试集）")]),t._v(" "),a("h3",{attrs:{id:"_1-2-留出法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-留出法"}},[t._v("#")]),t._v(" 1.2 留出法")]),t._v(" "),a("p",[t._v("留出法直接将数据集 D 拆分成互斥的两个集合，其中一个作为训练集 S，另一个作为测试集 T。在 S 上训练模型，在 T 上测试，得到测试误差近似泛化误差。")]),t._v(" "),a("p",[t._v("以下 3 个问题是使用留出法绕不开的话题：")]),t._v(" "),a("h4",{attrs:{id:"_1-2-1-如何划分保证数据分布的一致性-分层采样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-如何划分保证数据分布的一致性-分层采样"}},[t._v("#")]),t._v(" 1.2.1 如何划分保证数据分布的一致性？–> 分层采样")]),t._v(" "),a("p",[t._v("假设有1000个样本，500个是正例，500个是反例。如果随机地将1000个样本分成两部分，很可能在训练集或测试集中正反的比例不在是1比1，这就会引入额外的偏差。所以采用“"),a("mark",[t._v("分层采样")]),t._v("”的方法来"),a("strong",[t._v("保证数据分布的一致性")]),t._v("。")]),t._v(" "),a("p",[t._v("比如像在1000个样本中，70%作为训练，30%作为测试，使用分层采样，就是先对所有正例样本取出70%放到训练集中，30%放到测试集中；再对所有反例的样本取出70%放到训练集中，30%放到测试集中。"),a("u",[t._v("这样的分层采样，保证了切割之后的两个数据集与原始数据集拥有一样的正负例比例")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"_1-2-2-如何保证随机划分的稳定性-多次随机划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-如何保证随机划分的稳定性-多次随机划分"}},[t._v("#")]),t._v(" 1.2.2 如何保证随机划分的稳定性？–> 多次随机划分")]),t._v(" "),a("p",[t._v("就算采用了分层采样，在每层中的采样也是随机的，每次采样的时候被选进训练集中的样本也是变化的，故单次使用留出法得到的估计结果往往不够稳定，在使用留出法时一般采用"),a("mark",[t._v("多次随机划分")]),t._v("。例如进行100次随机划分，那么就会有100组训练/测试集，进行模型的训练测试之后会有100个结果，将这100个结果进行平均作为一次留出法的最终结果。")]),t._v(" "),a("h4",{attrs:{id:"_1-2-3-训练与测试集划分的比例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-训练与测试集划分的比例"}},[t._v("#")]),t._v(" 1.2.3 训练与测试集划分的比例？")]),t._v(" "),a("p",[t._v("关于划分的比例没有完美的解决方案，常见的是大约 2/3 ~ 4/5 的数据用于训练，剩余的用于测试。")]),t._v(" "),a("h3",{attrs:{id:"_1-3-交叉验证法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-交叉验证法"}},[t._v("#")]),t._v(" 1.3 交叉验证法")]),t._v(" "),a("p",[t._v("对模型进行评估，防止低估/高估性能，十次交叉验证是最标准的做法。由于我们需要拿出一部分数据作为测试，因此总有部分的数据不能用于构建模型，而一种更好的选择是交叉验证，一般也简称 "),a("strong",[t._v("CV")]),t._v("。")]),t._v(" "),a("p",[a("mark",[t._v("k 折交叉验证法")]),t._v("是一个将整体数据集平均划分为 k 份，先取第一份子集数据作为测试集，剩下的 k-1 份子集数据作为训练集进行一次试验；之后再取第二份子集数据，剩下的 k-1 份子集数据在进行一次试验，不断往复，最后重复 k 次的过程，一般我们称之为 k 折交叉检验，交叉检验是我们进行参数调整过程中非常重要的一个方法。")]),t._v(" "),a("h4",{attrs:{id:"_1-3-1-k-的取值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-k-的取值"}},[t._v("#")]),t._v(" 1.3.1 k 的取值？")]),t._v(" "),a("p",[t._v("我们将这个过程称为“k-折交叉验证”。k 的取值会影响结果的稳定性与保真性，"),a("strong",[t._v("k 的取值一般为 10")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"_1-3-2-如何保证随机划分的稳定性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-如何保证随机划分的稳定性"}},[t._v("#")]),t._v(" 1.3.2 如何保证随机划分的稳定性？")]),t._v(" "),a("p",[t._v("同样，因为将数据集 D 划分成 k 个子集的过程也是随机的，为了保障稳定性，"),a("strong",[t._v("k-折交叉验证通常要随机使用不同的划分重复 p 次")]),t._v("，最终的评估结果是 p 次 k 折交叉验证的均值，例如常见的有10次10折交叉验证（如此就要做100次训练与测试）。")]),t._v(" "),a("h4",{attrs:{id:"_1-3-3-留一法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-留一法"}},[t._v("#")]),t._v(" 1.3.3 留一法")]),t._v(" "),a("p",[t._v("如果数据集 D 中有 m 个样本，当 k=m 时，则得到了交叉验证的一个特例："),a("mark",[t._v("留一法")]),t._v("(Leave-One-Out, "),a("strong",[t._v("LOO")]),t._v(")。")]),t._v(" "),a("p",[a("strong",[t._v("留一法不受随机样本划分的干扰")]),t._v("，使用的训练集比原始数据集 D 只少了 1 个样本，如此使用留一法训练的模型与使用原始数据 D 训练得到的模型很相似，评估结果会相对准确。但留一法的"),a("strong",[t._v("缺点")]),t._v("是，在数据集比较大的时候，训练 m 个模型的开销十分大；并且留一法也未必永远比其他方法更准确。")]),t._v(" "),a("h3",{attrs:{id:"_1-4-自助法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-自助法"}},[t._v("#")]),t._v(" 1.4 自助法")]),t._v(" "),a("p",[t._v("我们希望得到数据集D训练出的模型，但在留出法与交叉验证法中，为了保留一部分数据用于测试，实际训练模型的数据集比D小，这必然会引起一些偏差，如果数据集D比较小，偏差会更大。")]),t._v(" "),a("h4",{attrs:{id:"_1-4-1-训练集何来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-训练集何来"}},[t._v("#")]),t._v(" 1.4.1 训练集何来？")]),t._v(" "),a("p",[a("mark",[t._v("自助法")]),t._v("以自助采样为基础。给定数据集D，有m个样本，采样后产生的数据集为 D’。每次随机从 D 中挑选一个样本放到 D’ 中，然后将该样本放回到初始数据集 D 中（也就是有放回抽样）。这样进行 m 次后，D’ 中就有了 m 个样本，这就是自助采样的结果，D’ 可作为训练集。")]),t._v(" "),a("h4",{attrs:{id:"_1-4-2-测试集何来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-测试集何来"}},[t._v("#")]),t._v(" 1.4.2 测试集何来？")]),t._v(" "),a("p",[t._v("显然，D中有一部分数据会在D’中重复出现，而另一部分样本不出现。样本在m次采样中始终不被采到的概率为 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mfrac",{attrs:{space:"3"}},[a("mjx-frac",[a("mjx-num",[a("mjx-nstrut"),a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line"),a("mjx-row",[a("mjx-den",[a("mjx-dstrut"),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"m"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"m"}})],1)],1)],1)],1)],1),t._v("，取极限 m -> 无穷，可得到概率为约等于 0.368。")],1),t._v(" "),a("p",[t._v("也就是说，通过自助采样，约有36.8%的样本未出现在数据集D’中。于是，我们可"),a("strong",[t._v("将D’作为训练集，D\\D’作为测试集")]),t._v("。")]),t._v(" "),a("p",[t._v("使用自助法，我们保证了训练集仍然有与原数据集D相等的样本量m，也保证了仍然有1/3的样本是没有出现在训练集中，可用于测试的。这样的测试结果称为“"),a("strong",[t._v("包外估计")]),t._v("”(out of bag estimate)。")]),t._v(" "),a("p",[a("strong",[t._v("优点")]),t._v("：自助法在训练集较少，难以有效划分数据集时很有用。")]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("：自助法产生的数据集改变了数据集的原始分布，会引起偏差。因此"),a("u",[t._v("如果数据集足够，优先选用留出法与交叉验证法")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_2-机器学习模型的评估指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-机器学习模型的评估指标"}},[t._v("#")]),t._v(" 2. 机器学习模型的评估指标")]),t._v(" "),a("p",[t._v("以上章节介绍了如何对数据集进行划分从而尽量准确地估计模型的泛化能力。这一部分要讲的是有哪些性能度量的指标可以去评估模型的好坏。")]),t._v(" "),a("p",[a("strong",[t._v("不同的性能指标会导致不同的评估结果，也就是说模型的好坏是相对的，什么样的模型优秀，不仅取决于算法与数据，还取决于任务需求")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-分类模型评估指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-分类模型评估指标"}},[t._v("#")]),t._v(" 2.1 分类模型评估指标")]),t._v(" "),a("p",[t._v("混淆矩阵知识，该方法针对二分类模型进行评价，"),a("strong",[t._v("混淆矩阵")]),t._v("(Confusion Matrix)可以解释大部分的概念：")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20221117233723276.png",alt:"image-20221117233723276"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("TP")]),t._v("(true positive)：真实为1，预测也为1；")]),t._v(" "),a("li",[a("strong",[t._v("FN")]),t._v("(false negative)：真实为1，预测为0；")]),t._v(" "),a("li",[a("strong",[t._v("FP")]),t._v("(false positive)：真实为0，预测为1；")]),t._v(" "),a("li",[a("strong",[t._v("TN")]),t._v("(true negative)：真实为0，预测也为0")])]),t._v(" "),a("h4",{attrs:{id:"_2-1-1-准确率-accuracy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-准确率-accuracy"}},[t._v("#")]),t._v(" 2.1.1 准确率（accuracy）")]),t._v(" "),a("p",[t._v("基于混淆矩阵的模型评价指标有准确率(Accuracy)，它的计算公式如下：")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"A"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"u"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"N"}})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"F"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"N"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"F"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"N"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("准确率衡量的是分类正确的样本占总样本数量的比例。")]),t._v(" "),a("p",[t._v("在某些情况，例如样本比例相差过大（样本中为1的样本占总样本数的99%），将所有的样本判定为1的分类器将取得99%的正确率。")]),t._v(" "),a("h4",{attrs:{id:"_2-1-2-精确率-precision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-精确率-precision"}},[t._v("#")]),t._v(" 2.1.2 精确率（precision）")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"F"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("由上式可知，精确率是预测为 1 的样本中，真实标签为 1 的样本占比。")]),t._v(" "),a("h4",{attrs:{id:"_2-1-3-召回率-recall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-召回率-recall"}},[t._v("#")]),t._v(" 2.1.3 召回率（recall）")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"R"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"F"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"N"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("由上式可知，召回率是实际为1的样本中，预测为1的概率。")]),t._v(" "),a("p",[t._v("以挑选西瓜为例，以召回率为衡量标准，则是希望尽可能将好瓜选取来，错判相对会较多。")]),t._v(" "),a("h4",{attrs:{id:"_2-1-4-f1-值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-f1-值"}},[t._v("#")]),t._v(" 2.1.4 F1 值")]),t._v(" "),a("p",[t._v("// TODO")])],1)}),[],!1,null,null,null);s.default=c.exports}}]);
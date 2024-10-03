(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{815:function(e,t,n){"use strict";n.r(t);var a=n(22),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("blockquote",[n("p",[e._v("参考 "),n("a",{attrs:{href:"https://mp.weixin.qq.com/s/eotJ500kA96PPpvDOk4ChA",target:"_blank",rel:"noopener noreferrer"}},[e._v("深度学习进阶篇-国内预训练模型[5]：ERINE、ERNIE 3.0、ERNIE-的设计思路、模型结构、应用场景等详解"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"_1-erine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-erine"}},[e._v("#")]),e._v(" 1. ERINE")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://arxiv.org/abs/1904.09223",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERNIE: Enhanced Representation through Knowledge Integration"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"_1-1-erine-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-erine-简介"}},[e._v("#")]),e._v(" 1.1 ERINE 简介")]),e._v(" "),n("p",[e._v("ERINE 是百度发布一个预训练模型，它通过引入三种级别的 Knowledge Masking 帮助模型学习语言知识，在多项任务上超越了BERT。在模型结构方面，它采用了 Transformer 的 Encoder 部分作为模型主干进行训练。")]),e._v(" "),n("p",[e._v("接下来，我们将聚焦在ERNIE本身的主要改进点进行讨论，即三个层级的 Knowledge Masking 策略。这三种策略都是应用在ERNIE预训练过程中的预训练任务，期望通过这三种级别的任务帮助 ERNIE 学到更多的语言知识。")]),e._v(" "),n("h3",{attrs:{id:"_1-2-knowledge-masking-task"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-knowledge-masking-task"}},[e._v("#")]),e._v(" 1.2 Knowledge Masking Task")]),e._v(" "),n("p",[e._v("训练语料中蕴含着大量的语言知识，例如词法，句法，语义信息，如何让模型有效地学习这些复杂的语言知识是一件有挑战的事情。BERT使用了MLM（masked language-model）和NSP（Next Sentence Prediction）两个预训练任务来进行训练，这两个任务可能并不足以让BERT学到那么多复杂的语言知识，特别是后来多个研究人士提到NSP任务是比较简单的任务，它实际的作用不是很大。")]),e._v(" "),n("p",[e._v("考虑到这一点，ERNIE提出了Knowledge Masking的策略，其包含三个级别：ERNIE将Knowledge分成了三个类别：")]),e._v(" "),n("ul",[n("li",[e._v("token级别(Basic-Level)、")]),e._v(" "),n("li",[e._v("短语级别(Phrase-Level)")]),e._v(" "),n("li",[e._v("实体级别(Entity-Level)。")])]),e._v(" "),n("p",[e._v("通过对这三个级别的对象进行Masking，提高模型对字词、短语的知识理解。")]),e._v(" "),n("p",[e._v("下图展示了这三个级别的Masking策略和BERT Masking的对比，显然，Basic-Level Masking 同BERT的Masking一样，随机地对某些单词(如 written)进行Masking，在预训练过程中，让模型去预测这些被Mask后的单词；Phrase-Level Masking 是对语句中的短语进行masking，如 a series of；Entity-Level Masking是对语句中的实体词进行Masking，如人名 J. K. Rowling。")]),e._v(" "),n("center",[n("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/20230606143647.png",alt:"20230606143647"}})]),e._v(" "),n("p",[e._v("除了上边的Knowledge Masking外，ERNIE还采用多个异源语料帮助模型训练，例如对话数据，新闻数据，百科数据等等。通过这些改进以保证模型在字词、语句和语义方面更深入地学习到语言知识。当ERINE通过这些预训练任务学习之后，就会变成一个更懂语言知识的预训练模型，接下来，就可以应用ERINE在不同的下游任务进行微调，提高下游任务的效果。例如，文本分类任务。")]),e._v(" "),n("blockquote",[n("p",[e._v("异源语料：来自不同源头的数据，比如百度贴吧，百度新闻，维基百科等等")])]),e._v(" "),n("h2",{attrs:{id:"_2-ernie-3-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-ernie-3-0"}},[e._v("#")]),e._v(" 2. ERNIE 3.0")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);
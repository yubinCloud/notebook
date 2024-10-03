(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{831:function(t,s,a){"use strict";a.r(s);var m=a(22),i=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-deep-learning"}},[t._v("1. Deep Learning")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-1-different-types-of-functions"}},[t._v("1.1 Different types of Functions")])]),a("li",[a("a",{attrs:{href:"#_1-2-case-study"}},[t._v("1.2 Case Study")])]),a("li",[a("a",{attrs:{href:"#_1-3-分段线性曲线"}},[t._v("1.3 分段线性曲线")])]),a("li",[a("a",{attrs:{href:"#_1-4-回到-ml-step2-define-loss-from-training-data"}},[t._v("1.4 回到 ML-Step2：define loss from training data")])]),a("li",[a("a",{attrs:{href:"#_1-5-回到-ml-step3-optimization"}},[t._v("1.5 回到 ML-Step3：Optimization")])]),a("li",[a("a",{attrs:{href:"#_1-6-模型变形"}},[t._v("1.6 模型变形")])]),a("li",[a("a",{attrs:{href:"#_1-7-多做几次"}},[t._v("1.7 多做几次")])]),a("li",[a("a",{attrs:{href:"#_1-8-给他们起个名字"}},[t._v("1.8 给他们起个名字")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_1-deep-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-deep-learning"}},[t._v("#")]),t._v(" 1. Deep Learning")]),t._v(" "),a("p",[t._v("先简单介绍一下 machine learning 还有 deep learning 的基本概念。"),a("strong",[t._v("机器学习就是让机器具备找一个函式的能力")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("函式")]),t._v("即 function，也就是常说的函数。")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-different-types-of-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-different-types-of-functions"}},[t._v("#")]),t._v(" 1.1 Different types of Functions")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Regression")]),t._v("：要找的函式的输出是一个 scalar，即数值")]),t._v(" "),a("li",[a("strong",[t._v("Classification")]),t._v("：就是要机器做选择题")]),t._v(" "),a("li",[a("strong",[t._v("Structured Learning")]),t._v("：让机器画一张图，写一篇文章，这种叫机器產生有结构的东西的问题就叫作 Structured Learning")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-case-study"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-case-study"}},[t._v("#")]),t._v(" 1.2 Case Study")]),t._v(" "),a("p",[t._v("机器怎么找一个函式呢？举一个例子，在 YouTube 后台，你可以看到很多相关的资讯，比如说每一天按讚的人数有多少，每一天订阅的人数有多少，每一天观看的次数有多少。我们能不能够根据一个频道过往所有的资讯去预测它明天有可能的观看的次数是多少呢，我们能不能够"),a("u",[t._v("找一个函式，这个函式的输入是我 YouTube 后台的资讯，输出就是某一天，隔天这个频道会有的总观看的次数")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("机器学习找这个函式的过程，分成三个步骤")]),t._v("，那我们就用 YouTube 频道点阅人数预测这件事情，来跟大家说明这三个步骤，是怎么运作的：")]),t._v(" "),a("h4",{attrs:{id:"_1-function-with-unknown-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-function-with-unknown-parameters"}},[t._v("#")]),t._v(" 1）Function with Unknown Parameters")]),t._v(" "),a("p",[t._v("第一个步骤是我们要"),a("strong",[t._v("写出一个带有未知参数的函式")]),t._v("。简单来说就是 我们先猜测一下,我们打算找的这个函式,它的数学式到底长什麼样子。举例来说，我们这边先做一个最初步的猜测，我们写成这个样子："),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"D7"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"x"}})],1)],1)],1),t._v("，其中：")],1),t._v(" "),a("ul",[a("li",[a("u",[t._v("y 是我们準备要预测的东西")]),t._v("，我们準备要预测的是今天 2 月 26 号这个频道总共观看的人；")]),t._v(" "),a("li",[a("u",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),t._v(" 是这个频道前一天总共观看的人数")],1),t._v("，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1)],1)],1),t._v(" 跟 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),t._v(" 都是数值；")],1),t._v(" "),a("li",[a("u",[t._v("b 跟 w 是未知的参数")]),t._v("，它是准备要透过资料去找出来的，我们还不知道w跟b应该是多少,我们只是隐约的猜测")])]),t._v(" "),a("p",[a("strong",[t._v("这个猜测往往就来自于你对这个问题本质上的了解，也就是 "),a("u",[t._v("Domain knowledge")])]),t._v("，所以才会听到有人说,这个做机器学习啊，就需要一些 Domain knowledge。")]),t._v(" "),a("p",[t._v("我们就随便猜说 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2217"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-TeXAtom",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("ₗ")])],1)],1)],1)],1),t._v("，而 "),a("u",[t._v("b 跟 w 是未知的")]),t._v("，"),a("strong",[t._v("这个带有 Unknown 的 Parameter 的 Function 我们就叫做 "),a("mark",[t._v("Model")])]),t._v("。这个 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),t._v(" 是这个 function 里面我们已知的，它是来自于 YouTube 后台的资讯，我们已经知道2月25号点阅的总人数是多少，称之为 "),a("mark",[t._v("Feature")]),t._v("。")],1),t._v(" "),a("h4",{attrs:{id:"_2-define-loss-from-training-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-define-loss-from-training-data"}},[t._v("#")]),t._v(" 2）Define Loss from Training Data")]),t._v(" "),a("p",[t._v("第二个步骤我们要"),a("strong",[t._v("定义一个 Loss")]),t._v("。"),a("u",[a("mark",[t._v("Loss")]),t._v(" 也是一个 function，输入是 Model 里面的参数，输出的值代表说，现在如果我们把这一组未知的参数，设定某一个数值的时候，这笔数值好还是不好")]),t._v("。比如例子中 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("、")])],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"w"}})],1)],1)],1),t._v(" 就是 Loss 的输入。Loss 要从训练样本中进行计算，计算结果为 L，"),a("u",[t._v("大 L 越大，代表我们现在这一组参数越不好")]),t._v("，这个大 L 越小，代表现在这一组参数越好。")],1),t._v(" "),a("p",[t._v("估测的值跟实际的值之间的差距，其实有不同的计算方法。比如 MAE、MSE 以及 Cross-Entropy 等。")]),t._v(" "),a("p",[t._v("为不同的 w 跟 b 的组合，都去计算它的 Loss，然后就可以画出以下这一个等高线图，称为 "),a("strong",[t._v("Error Surface")]),t._v("：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220120144323003.png",alt:"image-20220120144323003"}})]),t._v(" "),a("ul",[a("li",[t._v("越偏红色系，代表计算出来的Loss越大，就代表这一组 w 跟 b 越差，如果越偏蓝色系，就代表 Loss 越小，就代表这一组 w 跟 b 越好。")])]),t._v(" "),a("h4",{attrs:{id:"_3-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-optimization"}},[t._v("#")]),t._v(" 3）Optimization")]),t._v(" "),a("p",[t._v("第三步要做其实是"),a("strong",[t._v("解一个最佳化的问题")]),t._v("。在这个例子中就是找一个 w 跟 b，从未知的参数中找一个数值出来，代入后可以让 Loss 值最小。在这一门课里面，我们唯一会用到的 Optimization 的方法叫做 "),a("mark",[t._v("Gradient Descent")]),t._v("。")]),t._v(" "),a("p",[t._v("为了要简化，我们先假设未知的参数只有一个 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1)],1)],1),t._v("，得到其 Error Surface：")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220120144912668.png",alt:"image-20220120144912668"}})]),t._v(" "),a("p",[a("strong",[t._v("那怎样找一个 w 让这个 loss 的值最小呢")]),t._v("？随机选取一个初始的点，这个初始的点,我们叫做 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),t._v(" -> 求参数对 Loss 的微分 -> 更新参数值。更新时这一步要跨多大呢？这一步的步伐的大小取决于这个地方的斜率和学习率 ("),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3B7"}})],1)],1)],1),t._v(")。")],1),t._v(" "),a("p",[a("strong",[t._v("什么时候停下来呢")]),t._v("？往往有两种状况：")]),t._v(" "),a("ul",[a("li",[t._v("第一种状况是你失去耐心了，你一开始会设定说，我今天在调整我的参数的时候，我"),a("strong",[t._v("最多计算几次")]),t._v("；")]),t._v(" "),a("li",[t._v("那还有另外一种理想上停下来的可能是，今天当我们不断调整参数时调整到一个地方，它的微分的值算出来正好是 0 的时候，如果这一项正好算出来是0.0乘上 learning rate 还是 0，所以你的参数就不会再移动位置，那参数的位置就不会再更新。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220120152717142.png",alt:"image-20220120152717142"}})]),t._v(" "),a("p",[t._v("你可能会发现 Gradient Descent 这个方法有一个巨大的问题，我们没有找到真正最好的解，我们只是找到的 local minima 而不是 global minima。其实，"),a("strong",[t._v("local minima 是一个假问题")]),t._v("，我们在做 Gradient Descent 的时候真正面对的难题不是 local minima，之后会讲到它的真正痛点在哪。")]),t._v(" "),a("p",[t._v("刚刚只有一个参数 w，将其扩展至二维乃至多维是同理。")]),t._v(" "),a("h3",{attrs:{id:"_1-3-分段线性曲线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-分段线性曲线"}},[t._v("#")]),t._v(" 1.3 分段线性曲线")]),t._v(" "),a("p",[t._v("Linear 的 Model 也许太过简单了，对 Linear 的 model 来说，x1 跟 y 的关係就是一条直线，这也就是说前一天观看的人数越多，隔天的观看人数就越多，但也许现实并不是这个样子，不管怎么摆弄 w 和 b，你永远制造不出一个不完全线性（或带有分段）的一个函数曲线，显然 Linear 的 Model 有很大的限制，"),a("strong",[t._v("这一种来自于 model 的限制，叫做 "),a("mark",[t._v("model 的 Bias")])]),t._v("。所以我们需要写一个更复杂的，更有弹性的，有未知参数的 Function。")]),t._v(" "),a("blockquote",[a("p",[t._v("这里 “model 的 bias” 和 y = wx + b 中 b 这个 bias 是不一样的，model 的 bias 是说没有办法模拟真实的状况。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121175537107.png",alt:"image-20220121175537107"}})]),t._v(" "),a("p",[t._v("我们可以观察一下"),a("strong",[t._v("这个红线，它可以看做是一个常数，再加上一群蓝色的曲线组合而成的 function")]),t._v("：")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("怎样让蓝色曲线通过变化组合成红色的曲线呢？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121175751041.png",alt:"image-20220121175751041"}})]),t._v(" "),a("p",[a("strong",[t._v("蓝线“1”Function")]),t._v(" 斜坡的"),a("strong",[t._v("起点")]),t._v(",设在"),a("strong",[t._v("红色 Function")]),t._v(" 的"),a("strong",[t._v("起始")]),t._v("的地方,然后第二个,"),a("strong",[t._v("斜坡的终点")]),t._v("设在第一个转角处,你刻意让这边这个蓝色 Function 的斜坡,跟这个红色 Function 的斜坡,它们的"),a("strong",[t._v("斜率是一样")]),t._v("的,这个时候如果你把 0 加上 1,你就可以得到红色曲线")]),t._v(" "),a("p",[t._v("然后接下来,再加第二个蓝色的 Function,你就看红色这个线,"),a("strong",[t._v("第二个转折点")]),t._v("出现在哪裡, 所以第二个"),a("strong",[t._v("蓝色 Function")]),t._v(",它的斜坡就在红色 Function 的"),a("strong",[t._v("第一个转折点,到第二个转折点之间")]),t._v(",你刻意让这边的"),a("strong",[t._v("斜率跟这边的斜率一样")]),t._v(",这个时候你把 0加 1+2,你就可以得到两个转折点这边的线段,就可以得到红色的这一条线这边的部分")]),t._v(" "),a("p",[t._v("然后接下来第三个部分,第二个转折点之后的部分,你就加第三个蓝色的 Function,第三个蓝色的 Function,它这个坡度的起始点,故意设的跟这个"),a("strong",[t._v("转折点一样")]),t._v(",这边的斜率,故意设的跟这边的"),a("strong",[t._v("斜率一样")]),t._v(",好 接下来你把 0加 1+2+3 全部加起来,你就得到红色的这个线。")]),t._v(" "),a("p",[t._v("所以"),a("strong",[t._v("红色这个线,可以看作是一个常数,再加上一堆蓝色的 Function")])])]),t._v(" "),a("p",[t._v("类似，对于光滑曲线可以将其分成若干点，这些点就可以组成一个接近于光滑曲线的分段线性曲线，然后再用一群蓝色曲线去拟合。")]),t._v(" "),a("p",[t._v("所以我们今天知道一件事情，"),a("font",{attrs:{color:"blue"}},[t._v("你可以用分段线性曲线去逼近任何的连续的曲线，而每一个分段线性曲线又都可以用一大堆蓝色的 Function 组合起来，也就是说，我只要有足够的蓝色 Function 把它加起来，也许就可以变成任何连续的曲线。")])],1),t._v(" "),a("p",[t._v("但这个蓝色曲线怎么写出来呢？我们可以使用 Sigmoid 的 function 来作为这个蓝色 function。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Sigmoid")]),t._v(" "),a("p",[t._v("非线性 sigmoid 函数（常简写为 "),a("strong",[t._v("sigm")]),t._v("）："),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",[a("mjx-num",[a("mjx-nstrut"),a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line"),a("mjx-row",[a("mjx-den",[a("mjx-dstrut"),a("mjx-mrow",{attrs:{size:"s"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220118144558229.png",alt:"image-20220118144558229"}})],1),t._v(" "),a("ul",[a("li",[t._v("助记："),a("strong",[t._v("S")]),t._v("igmoid 可以记成 S 函数，因为它的图像很像一个大 S。")])])]),t._v(" "),a("p",[t._v("对 Sigmoid 做各种变化（拉长、上移等）后，可以用下面这个公式表达：")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"22C5"}})],1),a("mjx-mfrac",{attrs:{space:"3"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-msup",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("各种变化后的 function 如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121181544309.png",alt:"image-20220121181544309"}})]),t._v(" "),a("ul",[a("li",[t._v("如果改 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1)],1)],1),t._v(" 你就会改变"),a("u",[t._v("斜率")])],1),t._v(" "),a("li",[t._v("如果你动了  "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1)],1),t._v(" 你就可以把这一个 Sigmoid Function "),a("u",[t._v("左右移动")])],1),t._v(" "),a("li",[t._v("如果你改 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1),t._v(" 你就可以改变它的"),a("u",[t._v("高度")])],1)]),t._v(" "),a("p",[t._v("那我们把之前那条红色曲线的函数写出来，可能会长成：")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-munder",{attrs:{space:"3"}},[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.6em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1),a("mjx-TeXAtom",{attrs:{space:"2"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"22C5"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"d"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("利用这个形式，我们就可以突破之前 Linear Model 的限制，即减少 Model 的 Bias。于是对之前的 model 做以下改变：")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2192"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-munder",{attrs:{space:"3"}},[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.6em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1),a("mjx-TeXAtom",{attrs:{space:"2"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"22C5"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"d"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("但这只是一个 feature "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),t._v("，如果有多个 feature 呢？我们假设"),a("strong",[t._v("用 j 来代表 features 的编号")]),t._v("：")],1),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-munder",{attrs:{space:"3"}},[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.576em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-TeXAtom",{attrs:{space:"2"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2192"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-munder",{attrs:{space:"3"}},[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.6em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1),a("mjx-TeXAtom",{attrs:{space:"2"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"22C5"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"d"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-munder",{attrs:{space:"3"}},[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.576em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-TeXAtom",{attrs:{space:"2"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121182740639.png",alt:"image-20220121182740639"}})]),t._v(" "),a("p",[t._v("考虑一个实际的例子，只考虑有三个 feature，即 j=3，在之前的例子中，我们只考虑前一天、前两天和前三天的 Case 作为输入，即 "),a("u",[t._v("x1 代表前一天的观看人数，x2 两天前观看人数，x3 三天前的观看人数")]),t._v("。")]),t._v(" "),a("p",[t._v("Sigmoid 里面这部分的运算过程就是：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121183743273.png",alt:"image-20220121183743273"}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("j")]),t._v(" 表示 features，"),a("code",[t._v("i")]),t._v(" 表示有几个 sigmoid 函数")])]),t._v(" "),a("p",[t._v("把运算结果 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1)],1)],1),t._v(" 进行整理可以得到：")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121183905851.png",alt:"image-20220121183905851"}})]),t._v(" "),a("p",[t._v("写成矩阵形式就是：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121183932078.png",alt:"image-20220121183932078"}})]),t._v(" "),a("p",[t._v("再经过 sigmoid 和 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-munder",{attrs:{limits:"false"}},[a("mjx-mo",{staticClass:"mjx-sop"},[a("mjx-c",{attrs:{c:"2211"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.285em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1),t._v(" 后得到：")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121184031352.png",alt:"image-20220121184031352"}})]),t._v(" "),a("ul",[a("li",[t._v("这里 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-TeXAtom",[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.098em","margin-bottom":"-0.516em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"20D7"}})],1)],1),a("mjx-base",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3B1"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"3C3"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-TeXAtom",[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.056em","margin-bottom":"-0.516em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"20D7"}})],1)],1),a("mjx-base",{staticStyle:{"padding-left":"0.024em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C3"}})],1)],1)],1),t._v(" 是 Sigmoid")],1)]),t._v(" "),a("p",[t._v("最后我们可以得到如下公式："),a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121184309842.png",alt:"image-20220121184309842"}})]),t._v(" "),a("p",[t._v("这里我们将未知参数合并起来统称为 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3B8"}})],1)],1)],1),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"_1-4-回到-ml-step2-define-loss-from-training-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-回到-ml-step2-define-loss-from-training-data"}},[t._v("#")]),t._v(" 1.4 回到 ML-Step2：define loss from training data")]),t._v(" "),a("p",[t._v("有了新的 model 以后，我们的 Loss 定义仍然相同，只是参数变了下，写成 "),a("strong",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"L"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3B8"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),t._v("。计算方法仍然与以前一样：")]),t._v(" "),a("ul",[a("li",[t._v("代入一组 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3B8"}})],1)],1)],1)],1),t._v(" "),a("li",[t._v("把一种 feature "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-TeXAtom",[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.064em","margin-bottom":"-0.516em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"20D7"}})],1)],1),a("mjx-base",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1)],1)],1)],1)],1)],1),t._v(" 代入进去，然后看看估测的 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1)],1)],1)],1),t._v(" "),a("li",[t._v("计算一下估测值 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1)],1)],1),t._v(" 与真实值 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-TeXAtom",[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.056em","margin-bottom":"-0.531em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"^"}})],1)],1),a("mjx-base",{staticStyle:{"padding-left":"0.005em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1)],1)],1)],1)],1)],1),t._v(" 的差距，得到一个 e")],1),t._v(" "),a("li",[t._v("把所有误差统统加起来，就可以得到 Loss："),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"L"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",[a("mjx-num",[a("mjx-nstrut"),a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line"),a("mjx-row",[a("mjx-den",[a("mjx-dstrut"),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"N"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-munder",{attrs:{space:"2",limits:"false"}},[a("mjx-mo",{staticClass:"mjx-sop"},[a("mjx-c",{attrs:{c:"2211"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.285em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"n"}})],1)],1)],1),a("mjx-TeXAtom",{attrs:{space:"2"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"n"}})],1)],1)],1)],1)],1)],1)],1)]),t._v(" "),a("h3",{attrs:{id:"_1-5-回到-ml-step3-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-回到-ml-step3-optimization"}},[t._v("#")]),t._v(" 1.5 回到 ML-Step3：Optimization")]),t._v(" "),a("p",[t._v("Optimization 思路与之前仍然相同：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121185553407.png",alt:"image-20220121185553407"}})]),t._v(" "),a("h4",{attrs:{id:"batch-与-epoch-的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-与-epoch-的概念"}},[t._v("#")]),t._v(" batch 与 epoch 的概念")]),t._v(" "),a("p",[t._v("在实际中，假设我们有 N 笔资料，我们会将其分成一个一个的 Batch，分 B 笔资料为一组，一组叫做一个 "),a("strong",[t._v("Batch")]),t._v("。")]),t._v(" "),a("p",[t._v("本来我们是把所有的 Data 拿出来算一个 Loss，现在我们不这么做，我们"),a("strong",[t._v("只拿一个 Batch 里面的数据出来算一个 Loss")]),t._v("，对这个 Loss 算一次 Gradient 来 "),a("strong",[t._v("update 一次")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121190728556.png",alt:"image-20220121190728556"}})]),t._v(" "),a("p",[t._v("每次更新一次参数叫做一次 "),a("strong",[t._v("Update")]),t._v("，把所有的 Batch 都看过一遍,叫做一个 "),a("strong",[t._v("Epoch")]),t._v("。至于为什么要这么分，我们下节再讲。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Example")]),t._v(" "),a("p",[a("strong",[t._v("Example 1")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Q")]),t._v("：10,000 examples（N = 10,000），Batch size is 10（B = 10）。How many update in 1 epoch？")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("A")]),t._v("：1,000 updates")])])]),t._v(" "),a("p",[a("strong",[t._v("Example 2")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Q")]),t._v("：1,000 examples（N = 1,000），Batch size is 100（B = 100）。How many update in 1 epoch？")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("A")]),t._v("：10 updates")])])]),t._v(" "),a("p",[t._v("所以做了一个 Epoch 的训练,你其实不知道它更新了几次参数,有可能 1000 次,也有可能 10 次，"),a("strong",[t._v("取决于它的 Batch Size 有多大")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"_1-6-模型变形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-模型变形"}},[t._v("#")]),t._v(" 1.6 模型变形")]),t._v(" "),a("p",[t._v("刚刚我们用的 Soft Sigmoid 来当成小蓝色曲线，但也可以用其他的，比如两个 Rectified Linear Unit（"),a("strong",[t._v("ReLU")]),t._v("） 可以组合成一个 Hard Sigmoid：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121191649433.png",alt:"image-20220121191649433"}})]),t._v(" "),a("p",[t._v("所以要表示这个蓝色曲线不只有一种做法，完全可以用其他的做法，他们统称为 "),a("strong",[t._v("Activation Function")]),t._v("。到底用哪个好，之后再讨论。")]),t._v(" "),a("h3",{attrs:{id:"_1-7-多做几次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-多做几次"}},[t._v("#")]),t._v(" 1.7 多做几次")]),t._v(" "),a("p",[t._v("我们刚刚从 x 到 a 要做的事情是：把 x 乘上 w 加 b，再通过 Sigmoid Function。我们"),a("strong",[t._v("可以把这个同样的事情，再反覆地多做几次")]),t._v("，如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121192217950.png",alt:"image-20220121192217950"}})]),t._v(" "),a("p",[a("strong",[t._v("这个过程做几次呢？这又是一个 Hyper Parameter")]),t._v("。")]),t._v(" "),a("p",[t._v("实验结果："),a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121192331462.png",alt:"image-20220121192331462"}})]),t._v(" "),a("h3",{attrs:{id:"_1-8-给他们起个名字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-给他们起个名字"}},[t._v("#")]),t._v(" 1.8 给他们起个名字")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220121192448856.png",alt:"image-20220121192448856"}})])])}),[],!1,null,null,null);s.default=i.exports}}]);
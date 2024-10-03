(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{863:function(t,s,a){"use strict";a.r(s);var m=a(22),c=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-无监督学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-无监督学习"}},[t._v("#")]),t._v(" 1. 无监督学习")]),t._v(" "),a("p",[t._v("在无监督学习中，我们的 training set data 没有附带任何 label，我们拿到的数据长这样：")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220718130834500.png",alt:"image-20220718130834500"}}),t._v(" "),a("p",[t._v("图上画的这些点都没有 label 信息。图上的数据看起来可以分成两个分开的点集（称为 "),a("mark",[t._v("cluster")]),t._v("），一个能够找到我圈出的这些点集的算法，就被称为"),a("mark",[t._v("聚类算法")]),t._v("。当然，其他的无监督学习也可以为我们找到其他类型的结构或者其他的一些模式，而不只是簇。")]),t._v(" "),a("p",[t._v("这些聚类算法有什么用呢？市场分割、社交网络分析、组织计算机集群等等。")]),t._v(" "),a("h2",{attrs:{id:"_2-k-means-algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-k-means-algorithm"}},[t._v("#")]),t._v(" 2. K-Means Algorithm")]),t._v(" "),a("p",[t._v("K-Means 是最普及的聚类算法，算法接受一个未标记的数据集，然后将数据聚类成不同的组。")]),t._v(" "),a("p",[a("mark",[t._v("K-Means")]),t._v(" 是一个迭代算法，假设我们想要将数据聚类成 K 个组，其方法为：")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("K-Means 算法")]),a("p",[a("strong",[t._v("Input")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("K（number of clusters）")]),t._v(" "),a("li",[t._v("training set "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"{"}})],1),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-msup",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"22EF"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-msup",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"}"}})],1)],1)],1),t._v("，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2208"}})],1),a("mjx-msup",[a("mjx-TeXAtom",[a("mjx-mi",{staticClass:"mjx-cal"},[a("mjx-c",{attrs:{c:"R"}})],1)],1),a("mjx-script",{staticStyle:{"vertical-align":"0.409em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"n"}})],1)],1)],1)],1)],1)],1)]),t._v(" "),a("p",[a("font",{attrs:{color:"blue"}},[t._v("首先根据划分聚类的个数 K，随机设置聚类中心的位置，然后遍历所有的数据，把每个数据分配到离它最近的坐标，对于同一个簇的数据计算它们坐标的中心位置，并设置为新的聚类中心，以此不断的迭代。")])],1),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220718133116160.png",alt:"image-20220718133116160"}})])],1),a("p",[t._v("令 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BC"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"k"}})],1)],1)],1)],1)],1),t._v(" 为 cluster centroids，即每个 cluster 中心的 ID。在每轮迭代过程中，计算任务分成了两个步骤：")],1),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Cluster assignment step")]),t._v("：依次计算 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1),t._v("，它是能够 minimize "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BC"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"k"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1),t._v(" 的 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1)],1)],1),t._v("，其中 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2208"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"223C"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"K"}})],1)],1)],1),t._v("。")],1),t._v(" "),a("li",[a("strong",[t._v("Move Centroid")]),t._v("：计算每个 cluster 的中心位置，并赋给 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BC"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"k"}})],1)],1)],1)],1)],1),t._v("。")],1)]),t._v(" "),a("p",[t._v("这样的计算过程就能够完成如下图的聚类：")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220718133931435.png",alt:"image-20220718133931435"}}),t._v(" "),a("p",[t._v("但在实际中，K-Means 也有可能用于 non-separated clusters，比如如下图：")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220718134025539.png",alt:"image-20220718134025539"}}),t._v(" "),a("p",[t._v("上图是收集到的人身高、体重等信息，现在我们想将衣服分成小号、中号和大号，并确定它们的尺寸大小。通过执行 K-Means 算法，可以将他们分成三个 cluster：")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220718134228006.png",alt:"image-20220718134228006"}}),t._v(" "),a("p",[t._v("从而就可以确定每个类型的衣服的尺寸大小了。")]),t._v(" "),a("h2",{attrs:{id:"_3-optimization-objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-optimization-objective"}},[t._v("#")]),t._v(" 3. Optimization Objective")]),t._v(" "),a("p",[t._v("K-Means 最小化问题，是要最小化所有的数据点与其所关联的聚类中心点之间的距离之和。因此 K-Means 的 cost function（又称为"),a("mark",[t._v("畸变函数")]),t._v(" "),a("strong",[t._v("Distortion function")]),t._v("）为：")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"J"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"22EF"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-msup",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-msub",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BC"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"22EF"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("，")])],1),a("mjx-msub",{attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BC"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"K"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-munderover",{attrs:{space:"2"}},[a("mjx-over",{staticStyle:{"padding-bottom":"0.192em","padding-left":"0.412em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"m"}})],1)],1),a("mjx-box",[a("mjx-munder",[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.148em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"X"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BC"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.278em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("ul",[a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BC"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.278em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" 代表与 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1),t._v(" 最近的 cluster centroid。")],1)]),t._v(" "),a("p",[t._v("回顾刚才给出 K-Means 迭代算法，可以看出第一个循环是用于减小 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1),t._v(" 引起的代价，而第二个循环则是用于减小 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BC"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"k"}})],1)],1)],1)],1)],1),t._v(" 引起的代价。"),a("strong",[t._v("迭代的过程一定会是每一次迭代都在减小 cost function 的值")]),t._v("，不然便是出现了错误。")],1),t._v(" "),a("h2",{attrs:{id:"_4-random-initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-random-initialization"}},[t._v("#")]),t._v(" 4. Random Initialization")]),t._v(" "),a("p",[t._v("在运行 K-Means 算法的之前，我们首先要随机初始化所有的 cluster 中心点，下面介绍怎样做：")]),t._v(" "),a("ol",[a("li",[t._v("我们应该选择 K < m，即聚类中心点的个数要小于所有训练集实例的数量；")]),t._v(" "),a("li",[t._v("随机选择 K 个训练实例，然后令 K 个聚类中心分别与这 K 个训练实例相等。")])]),t._v(" "),a("p",[a("strong",[t._v("K-Means 的一个问题在于它有可能会停留在一个局部最小值处，而这取决于初始化的情况")]),t._v("。")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220718135403541.png",alt:"image-20220718135403541"}})]),t._v(" "),a("p",[t._v("为了解决这个问题，我们通常需要"),a("strong",[t._v("多次运行 K-Means 算法")]),t._v("，每一次都重新进行随机初始化，最后再比较多次运行 K-Means 的结果，选择代价函数最小的结果。")]),t._v(" "),a("p",[t._v("当然这种方法在 K 较小的时候（2--10）还是可行的，但是如果 K 较大，这么做也可能不会有明显地改善。")]),t._v(" "),a("p",[a("strong",[t._v("还有一种初始化的方法是随机选现有样本中 K 个样本作为初始的中心点")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_5-choosing-the-number-of-clusters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-choosing-the-number-of-clusters"}},[t._v("#")]),t._v(" 5. Choosing the Number of Clusters")]),t._v(" "),a("p",[t._v("没有所谓最好的选择聚类数的方法，通常是需要根据不同的问题，人工进行选择的。选择的时候"),a("strong",[t._v("思考我们运用 K-Means 算法聚类的动机是什么，然后选择能最好服务于该目的标聚类数")]),t._v("。")]),t._v(" "),a("p",[t._v("当人们在讨论，选择聚类数目的方法时，有一个可能会谈及的方法叫作“"),a("mark",[t._v("肘部法则")]),t._v("”（"),a("strong",[t._v("Elbow method")]),t._v("）。这种方法的做法是改变 K 值来运行 K-Means 算法，然后计算 cost function "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"J"}})],1)],1)],1),t._v("，画出图像：")],1),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220718135800781.png",alt:"image-20220718135800781"}})]),t._v(" "),a("p",[t._v("这个曲线的拐角处像一个人的肘部，这就是肘部法则的来源。当然，"),a("strong",[t._v("实际很多情况下是从图像中看不出肘部的")]),t._v("，这时候要根据实际业务来选择了。")]),t._v(" "),a("h2",{attrs:{id:"_6-k-means-的-python-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-k-means-的-python-实现"}},[t._v("#")]),t._v(" 6. K-Means 的 Python 实现")]),t._v(" "),a("p",[t._v("在 scikit-learn 库中，聚类算法都放在 cluster 类库下。聚类算法看似都是想把对象聚成 K 个类，但方法却似百花齐放，代表性的几个类如下：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("KMeans")]),t._v(" 类：这个类就是本文介绍的 K -means 聚类算法。")]),t._v(" "),a("li",[a("strong",[t._v("MiniBatchKMeans")]),t._v(" 类：这是 K-Means 算法的变体，使用 mini-batch 来减少一次聚类所需的计算时间。mini-batch 也是深度学习常使用的方法。")]),t._v(" "),a("li",[a("strong",[t._v("DBSCAN")]),t._v(" 类：使用 DBSCAN 聚类算法， DBSCAN 算法的主要思想是将聚类的类视为被低密度区域分隔的高密度区域。")]),t._v(" "),a("li",[a("strong",[t._v("MeanShift")]),t._v(" 类：使用 MeanShift 聚类算法，MeanShift 算法的主要方法是以任意点作为质心的起点，根据距离均值将质心不断往高密度的地方移动，也即所谓均值漂移，当不满足漂移条件后说明密度已经达到最高，就可以划分成簇。")]),t._v(" "),a("li",[a("strong",[t._v("AffinityPropagation")]),t._v(" 类：使用 Affinity Propagation 聚类算法，简称 AP 算法，聚类过程是一个“不断合并同类项”的过程，用类似于归纳法的思想方法完成聚类这种方法被称为“层次聚类”。")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("matplotlib inline\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" make_blobs\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cluster "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" KMeans\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 make_blobs 生成聚类测试数据集")]),t._v("\nn_samples "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v("\nX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" make_blobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_samples"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n_samples"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进行聚类")]),t._v("\ny_pred "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" KMeans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_clusters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit_predict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("y_pred"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20220718140844411.png",alt:"image-20220718140844411"}}),t._v(" "),a("p",[t._v("需要特别说明的是，这里的 "),a("code",[t._v("pred")]),t._v(" 和分类算法中的 "),a("code",[t._v("pred")]),t._v(" 不同，不应该理解成是对类别的预测，而应该作为“聚类后得到的簇的编号”来理解，本段代码中 "),a("code",[t._v("y_pred")]),t._v(" 的值其实是每个样本对应的簇的编号，实际值如下：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7-k-means-的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-k-means-的优缺点"}},[t._v("#")]),t._v(" 7. K-Means 的优缺点")]),t._v(" "),a("p",[t._v("K-Means 算法原理简单，实现容易，能够很快地实现部署；聚类过程中只涉及求均值运算，不需要进行其他太复杂的运算，执行效率较高，而且往往能取得较好的聚类效果。因此遇到聚类问题，不妨首先选择使用 K-Means算法，可能一上来就把问题给解决了，而且原理也容易说清楚。")]),t._v(" "),a("p",[t._v("虽然简单不是缺点，但 K-Means 算法当然还是存在缺点的，最明显的问题就是需要先验地设置“K”，也就是根据外部经验人为地设置聚类的簇的个数。同时，由于需要求均值，这就要求数据集的维度属性类型应该是数值类型。此外，K-Means 算法使用随机选择的方法初始化质心，不同的随机选择可能对最终的聚类结果产生明显影响，增加了不可控因素。最后，“K--means”中的“means”也会带来一些原生的问题，如果数据集中出现一些孤立点，也就是远离其他数据集点的数据点时，会对聚类结果产生非常明显的扰动。")])],1)}),[],!1,null,null,null);s.default=c.exports}}]);
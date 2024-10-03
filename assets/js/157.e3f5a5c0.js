(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{909:function(t,s,a){"use strict";a.r(s);var n=a(22),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Java 提供了一套"),a("strong",[t._v("容器类")]),t._v("用来“保存对象”，并将其划分为两个不同的概念：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Collection")]),t._v("：一个独立元素的序列，包括 List、Set 和 Queue")]),t._v(" "),a("li",[a("strong",[t._v("Map")]),t._v("：一组“键值对”的映射表")])]),t._v(" "),a("p",[t._v("这些类型统称为"),a("strong",[t._v("集合类")]),t._v("，但由于 Collection 又是其中一个特定子集的术语，所以往往也使用更宽泛的术语“容器”。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/java_collections_overview.png",alt:"java_collections_overview"}})]),t._v(" "),a("h2",{attrs:{id:"_1-collection-集合体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-collection-集合体系"}},[t._v("#")]),t._v(" 1. Collection 集合体系")]),t._v(" "),a("p",[t._v("Collection 是单列集合的祖宗接口，它的功能是全部单列集合都可以继承使用的。")]),t._v(" "),a("h3",{attrs:{id:"_1-1-collection-常用-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-collection-常用-api"}},[t._v("#")]),t._v(" 1.1 Collection 常用 API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("public  boolean add(E e)")]),t._v(" "),a("td",[t._v("把给定的对象添加到当前集合中")])]),t._v(" "),a("tr",[a("td",[t._v("public  void clear()")]),t._v(" "),a("td",[t._v("清空集合中所有的元素")])]),t._v(" "),a("tr",[a("td",[t._v("public  boolean remove(E e)")]),t._v(" "),a("td",[t._v("把给定的对象在当前集合中删除")])]),t._v(" "),a("tr",[a("td",[t._v("public  boolean contains(Object obj)")]),t._v(" "),a("td",[t._v("判断当前集合中是否包含给定的对象")])]),t._v(" "),a("tr",[a("td",[t._v("public  boolean isEmpty()")]),t._v(" "),a("td",[t._v("判断当前集合是否为空")])]),t._v(" "),a("tr",[a("td",[t._v("public  int size()")]),t._v(" "),a("td",[t._v("返回集合中元素的个数。")])]),t._v(" "),a("tr",[a("td",[t._v("public  Object[] toArray()")]),t._v(" "),a("td",[t._v("把集合中的元素，存储到数组中")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-collection-的遍历方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-collection-的遍历方式"}},[t._v("#")]),t._v(" 1.2 Collection 的遍历方式")]),t._v(" "),a("h4",{attrs:{id:"_1-方式一-迭代器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-方式一-迭代器"}},[t._v("#")]),t._v(" 1）方式一：迭代器")]),t._v(" "),a("p",[t._v("Collection 集合获取迭代器：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("Iterator<E> iterator()")])]),t._v(" "),a("td",[t._v("返回集合中的迭代器对象，该迭代器对象"),a("strong",[t._v("默认指向当前集合的 0 索引")])])])])]),t._v(" "),a("p",[t._v("Iterator 中的常用方法：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("boolean hasNext()")]),t._v(" "),a("td",[t._v("询问当前位置是否有元素存在，存在返回true ,不存在返回false")])]),t._v(" "),a("tr",[a("td",[t._v("E  next()")]),t._v(" "),a("td",[t._v("获取当前位置的元素，并同时将迭代器对象移向下一个位置，注意防止取出越界。")])])])]),t._v(" "),a("ul",[a("li",[t._v("迭代器取元素时越界会出现 NoSuchElementException 异常。")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" it "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" ele "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"_2-方式二-foreach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-方式二-foreach"}},[t._v("#")]),t._v(" 2）方式二：foreach")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Type")]),t._v(" varName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 数组或者"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),t._v("集合"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("既可以遍历集合也可以遍历数组。")])]),t._v(" "),a("h4",{attrs:{id:"_3-方式三-lambda-表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-方式三-lambda-表达式"}},[t._v("#")]),t._v(" 3）方式三：lambda 表达式")]),t._v(" "),a("p",[t._v("JDK 8 的新技术 Lambda 表达式，提供了一种更简单、更直接的遍历集合的方式。")]),t._v(" "),a("p",[t._v("Collection 结合 Lambda 遍历的 API：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("default void forEach(Consumer<? super T> action)")])]),t._v(" "),a("td",[t._v("结合 lambda 遍历集合")])])])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("lists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"_2-list-系列集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-list-系列集合"}},[t._v("#")]),t._v(" 2. List 系列集合")]),t._v(" "),a("p",[t._v("特点：有序、可重复、有索引。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-list-特有方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-list-特有方法"}},[t._v("#")]),t._v(" 2.1 List 特有方法")]),t._v(" "),a("p",[t._v("List 集合因为支持索引，所以多了很多索引操作的独特 API，其他 Collection 的功能List也都继承了。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("void add(int  index,E element)")]),t._v(" "),a("td",[t._v("在此集合中的指定位置插入指定的元素")])]),t._v(" "),a("tr",[a("td",[t._v("E remove(int  index)")]),t._v(" "),a("td",[t._v("删除指定索引处的元素，返回被删除的元素")])]),t._v(" "),a("tr",[a("td",[t._v("E set(int index, E element)")]),t._v(" "),a("td",[t._v("修改指定索引处的元素，返回被修改的元素")])]),t._v(" "),a("tr",[a("td",[t._v("E get(int  index)")]),t._v(" "),a("td",[t._v("返回指定索引处的元素")])])])]),t._v(" "),a("ul",[a("li",[t._v("ArrayList 底层是基于数组实现的，根据查询元素快，增删相对慢（但在实际上也非常快）。")]),t._v(" "),a("li",[t._v("LinkedList 底层"),a("strong",[t._v("基于双链表")]),t._v("实现的，查询元素慢，增删首尾元素是非常快的（多了很多增删首尾的 API）。")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-list-的遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-list-的遍历"}},[t._v("#")]),t._v(" 2.2 List 的遍历")]),t._v(" "),a("p",[t._v("① 迭代器 ② foreach ③ Lambda ④ 普通 for 循环（因为 List 支持索引）")]),t._v(" "),a("h2",{attrs:{id:"_3-泛型深入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-泛型深入"}},[t._v("#")]),t._v(" 3. 泛型深入")]),t._v(" "),a("h3",{attrs:{id:"_3-1-泛型概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-泛型概述"}},[t._v("#")]),t._v(" 3.1 泛型概述")]),t._v(" "),a("p",[t._v("泛型是 JDK5 中引入的特性，可以"),a("strong",[t._v("在编译阶段")]),t._v("约束操作的数据类型，并进行检查。")]),t._v(" "),a("p",[t._v("格式："),a("code",[t._v("<Type>")]),t._v("，只支持引用数据类型。")]),t._v(" "),a("p",[t._v("泛型"),a("strong",[t._v("好处")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("统一数据类型")]),t._v(" "),a("li",[t._v("把运行时期的问题"),a("strong",[t._v("提前到了编译期间")]),t._v("，避免了强制类型转换可能出现的异常，因为编译阶段类型就能确定下来")])]),t._v(" "),a("p",[t._v("泛型可以在很多地方使用：泛型"),a("strong",[t._v("类")]),t._v("、泛型"),a("strong",[t._v("方法")]),t._v("、泛型"),a("strong",[t._v("接口")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-自定义泛型类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-自定义泛型类"}},[t._v("#")]),t._v(" 3.2 自定义泛型类")]),t._v(" "),a("p",[t._v("格式示例："),a("code",[t._v("public class MyArrayList<T> {}")])]),t._v(" "),a("ul",[a("li",[t._v("泛型变量常用的标识是：T、E、K、V 等")])]),t._v(" "),a("p",[t._v("核心思想：把出现泛型变量的地方全部替换成传输的真实数据类型")]),t._v(" "),a("p",[t._v("类似地可定义泛型方法和泛型接口。")]),t._v(" "),a("h3",{attrs:{id:"_3-3-泛型通配符、上下限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-泛型通配符、上下限"}},[t._v("#")]),t._v(" 3.3 泛型通配符、上下限")]),t._v(" "),a("p",[t._v("通配符："),a("code",[t._v("?")])]),t._v(" "),a("ul",[a("li",[t._v("? 可以在“使用泛型”的时候代表一切类型")]),t._v(" "),a("li",[t._v("E T K V 是在定义泛型的时候使用的")])]),t._v(" "),a("p",[a("strong",[t._v("案例导学")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("开发一个极品飞车的游戏，所有的汽车都能一起参与比赛")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 宝马 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BMW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 奔驰 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BENZ")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[a("strong",[t._v("注意")]),t._v("：🔺 虽然 BMW 和 BENZ 都继承了 Car 但是 "),a("code",[t._v("ArrayList<BMW>")]),t._v(" 和 "),a("code",[t._v("ArrayList<BENZ>")]),t._v(" 与 "),a("code",[t._v("ArrayList<Car>")]),t._v(" 没有关系的！!")]),t._v(" "),a("p",[t._v("泛型的上下限：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("? extends Car")]),t._v("：其中的 "),a("code",[t._v("?")]),t._v(" 必须是 Car 或者其"),a("strong",[t._v("子类")]),t._v("，泛型上限")]),t._v(" "),a("li",[a("code",[t._v("? super Car")]),t._v("：其中的 "),a("code",[t._v("?")]),t._v(" 必须是 Car 或者其"),a("strong",[t._v("父类")]),t._v("，泛型下限")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("助记")]),t._v(" "),a("p",[t._v("extends —— 子类")]),t._v(" "),a("p",[t._v("super —— 父类")])]),t._v(" "),a("h2",{attrs:{id:"_4-set-系列集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-set-系列集合"}},[t._v("#")]),t._v(" 4. Set 系列集合")]),t._v(" "),a("ul",[a("li",[t._v("HashSet : 无序、不重复、无索引。")]),t._v(" "),a("li",[t._v("LinkedHashSet："),a("strong",[t._v("有序")]),t._v("、不重复、无索引。")]),t._v(" "),a("li",[t._v("TreeSet："),a("strong",[t._v("排序")]),t._v("、不重复、无索引。")])]),t._v(" "),a("p",[t._v("Set 集合的功能上基本上与 Collection 的 API 一致。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-hashset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-hashset"}},[t._v("#")]),t._v(" 4.1 HashSet")]),t._v(" "),a("p",[t._v("HashSet 集合底层采取"),a("strong",[t._v("哈希表")]),t._v("存储的数据，哈希表的组成：")]),t._v(" "),a("ul",[a("li",[t._v("JDK8 之前的，底层使用"),a("strong",[t._v("数组+链表")]),t._v("（拉链法）组成")]),t._v(" "),a("li",[t._v("JDK8 开始后，底层采用"),a("strong",[t._v("数组+链表+红黑树")]),t._v("组成\n"),a("ul",[a("li",[t._v("当一条拉链上数据过多时（长度超过 8），这条链表会自动转换成红黑树")])])])]),t._v(" "),a("p",[t._v("Object 类的 API "),a("code",[t._v("public int hashCode()")]),t._v(" 会返回"),a("strong",[t._v("对象的哈希值")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("如果希望 Set 集合认为两个内容相同的对象是重复的应该怎么办？")]),t._v(" "),a("ul",[a("li",[t._v("重写对象的 "),a("code",[t._v("hashCode")]),t._v(" 和 "),a("code",[t._v("equals")]),t._v(" 方法。")])])]),t._v(" "),a("h3",{attrs:{id:"_4-2-linkedhashset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-linkedhashset"}},[t._v("#")]),t._v(" 4.2 LinkedHashSet")]),t._v(" "),a("p",[t._v("有序、不重复、无索引。底层数据结构依然是哈希表，只是每个元素又额外地多了一个"),a("strong",[t._v("双链表")]),t._v("的机制来"),a("strong",[t._v("记录存储顺序")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_4-3-treeset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-treeset"}},[t._v("#")]),t._v(" 4.3 TreeSet")]),t._v(" "),a("p",[t._v("不重复、无索引、可排序。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("可排序")]),t._v("：按照元素的大小默认升序排序。注意：TreeSet 是一定要排序的，可以将元素按照指定的规则进行排序。")])]),t._v(" "),a("p",[t._v("TreeSet 底层是"),a("strong",[t._v("基于红黑树")]),t._v("实现排序的，增删查改的性能都较好。")]),t._v(" "),a("h4",{attrs:{id:"_4-3-1-为-treeset-自定义排序规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-为-treeset-自定义排序规则"}},[t._v("#")]),t._v(" 4.3.1 为 TreeSet 自定义排序规则")]),t._v(" "),a("p",[t._v("🖊"),a("strong",[t._v("方式一")]),t._v("：让自定义的类（如 Student 类）实现 "),a("strong",[t._v("Comparable 接口")]),t._v("重写里面的 "),a("code",[t._v("compareTo")]),t._v(" 方法来定制比较规则。")]),t._v(" "),a("p",[t._v("🖊"),a("strong",[t._v("方式二")]),t._v("：TreeSet "),a("strong",[t._v("有参构造器")]),t._v("，可以设置 "),a("strong",[t._v("Comparator 接口")]),t._v("对应的比较器对象，来定制比较规则。")]),t._v(" "),a("p",[t._v("关于"),a("strong",[t._v("比较的返回值规则")]),t._v("：第一个元素大于第二个元素则返回正整数，小于则返回负整数，相等则返回 0。")]),t._v(" "),a("h2",{attrs:{id:"_5-java-可变参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-java-可变参数"}},[t._v("#")]),t._v(" 5. Java 可变参数")]),t._v(" "),a("p",[a("strong",[t._v("可变参数")]),t._v("用在"),a("strong",[t._v("形参中")]),t._v("可以接收多个数据。格式："),a("code",[t._v("Type... argName")]),t._v("，例如：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("调用时可以传递 "),a("strong",[t._v("0")]),t._v("~N 个参数，也可以传输一个数组。可变参数在方法内部"),a("strong",[t._v("本质上就是一个数组")]),t._v("。")]),t._v(" "),a("p",[t._v("注意事项：")]),t._v(" "),a("ul",[a("li",[t._v("一个形参列表中可变参数"),a("strong",[t._v("至多有一个")])]),t._v(" "),a("li",[t._v("可变参数必须放在"),a("strong",[t._v("形参列表的最后")])])]),t._v(" "),a("h2",{attrs:{id:"_6-集合工具类-collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-集合工具类-collections"}},[t._v("#")]),t._v(" 6. 集合工具类 Collections")]),t._v(" "),a("p",[t._v("Collections 是用来操作集合的工具类。")]),t._v(" "),a("h4",{attrs:{id:"_6-1-常用-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-常用-api"}},[t._v("#")]),t._v(" 6.1 常用 API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("public static <T> boolean addAll(Collection<? super T> c, T... elements)")])]),t._v(" "),a("td",[t._v("给集合对象批量添加元素")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("public static void shuffle(List<?> list)")])]),t._v(" "),a("td",[t._v("打乱 List 集合元素的顺序")])])])]),t._v(" "),a("h4",{attrs:{id:"_6-2-排序-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-排序-api"}},[t._v("#")]),t._v(" 6.2 排序 API")]),t._v(" "),a("p",[t._v("只能对于 List 集合的排序。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("public static <T> void sort(List<T> list)")])]),t._v(" "),a("td",[t._v("将集合中元素"),a("strong",[t._v("按默认规则")]),t._v("排序")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("public static <T> void sort(List<T> list，Comparator<? super T> c)")])]),t._v(" "),a("td",[t._v("将集合中元素"),a("strong",[t._v("按指定规则")]),t._v("排序")])])])]),t._v(" "),a("h2",{attrs:{id:"_7-map-集合体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-map-集合体系"}},[t._v("#")]),t._v(" 7. Map 集合体系")]),t._v(" "),a("p",[t._v("// TODO")])])}),[],!1,null,null,null);s.default=e.exports}}]);
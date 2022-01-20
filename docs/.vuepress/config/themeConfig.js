const nav = require('./nav.js');
const htmlModules = require('./htmlModules.js');
// const sidebar = require('./sidebar.js');

// 主题配置
module.exports = {
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  repo: 'yubincloud/notebook', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  bodyBgImg: [
    'https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/decoration/body1.png',
    'https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/decoration/body2.jpg',
    // 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImgOpacity: 1.0, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: true, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'yubin', // 必需
    link: 'https://github.com/yubincloud', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: 'https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/head.jpg',
    name: '学习笔记',
    slogan: '啦啦啦，向太阳~',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'yubin_inbuy@163.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/yubincloud',
      },
    ],
  },
  footer: {
    // 页脚信息
    createYear: 2021, // 博客创建年份
    copyrightInfo:
      'yubincloud | <a href="https://github.com/yubincloud/notebook/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
  },
  htmlModules, // 插入hmtl(广告)模块,
  indexImg: {  // 首页大图配置
    navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
    switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
    // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
    bgTimeColor: false,     // 是否开启图片的背景色随一天的不同时间而变化，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
    bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效
    descFadeIn: true,   // 是否开启图片中间描述的淡入效果，默认为 false
    desc: ["愿原力与你同在"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
    descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
    descFadeInTime: 200,  // 描述的淡入效果持续时间，descFadeIn 为 true 生效，默认 200 毫秒
    descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFadeIn 为 true 生效，默认 100 毫秒
    descNextTime: 800,  // 当有多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
    bubble: false,    // 是否开启图片的气泡效果，默认为 false
    bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
    bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
  },
}

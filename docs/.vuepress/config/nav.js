
/**
 * 基础
 */
 basicItems = [
  { text: '计算机网络', link: '/network/' },
  { text: '计算机系统', link: '/computer-system/' },
  { text: '数据结构与算法', link: '/data-structure/' },
  { text: '计算机专业课', link: '/major/'}
]

developItems = [
  { text: '前端', link: 'https://yubincloud.github.io/notebook-front/' },
  { text: 'Java 开发', link: '/java/' },
  { text: 'Python 开发', link: '/python/'},
  { text: 'Git', link: '/git/' },
  {
    text: '常见开发工具',
    items: [
      { text: 'Nginx', link: '/nginx/' },
    ]
  },
]

dataScienceItems = [
  { text: '爬虫', link: '/data-science/spider/' },
  { text: 'Python 数据分析', link: '/data-science/py-data-analysis/'},
  { text: '大数据开发', link: 'https://www.yuque.com/yubincloud/big-data' },
]

aiItems = [
  { text: '深度学习', link: '/deep-learning/' },
  { text: '机器学习', link: '/machine-learning/' },
  { text: '知识图谱', link: '/kg/' },
  { text: '图神经网络', link: '/gnn/' },
]

securityItems = [
  { text: '应用安全', link: '/security/application-security/' },
]

opsItems = [
  { text: 'Linux', link: '/ops/linux/' },
  { text: '云原生', link: '/ops/cloud-native/' },
]

myItems = [
  { text: '收藏', link: '/pages/favorite/'},
]

// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '基础',
    items: basicItems
  }, 
  {
    text: '开发',
    items: developItems
  },
  {
    text: '数据科学',
    items: dataScienceItems
  },
  {
    text: 'AI',
    items: aiItems
  },
  {
    text: '安全',
    items: securityItems
  },
  {
    text: '运维',
    items: opsItems
  },
  {
    text: '我的',
    items: myItems
  }
]



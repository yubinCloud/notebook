
/**
 * 基础
 */
 basicItems = [
  { text: '计算机网络', link: '/network/' },
  { text: '计算机系统', link: '/computer-system/' },
  { text: '数据结构', link: '/data-structure/' },
  { text: '计算机专业课', link: '/major/'}
]

developItems = [
  { text: '前端', link: '/front/' },
  { text: 'Java 开发', link: '/java/' },
]

dataScienceItems = [
  { text: '爬虫', link: '/data-science/spider/' },
]

/**
 * AI
 * 
 */
aiItems = [
  { text: '知识图谱', link: '/kg/' },
  { text: '深度学习', link: '/deep-learning/' },
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
]




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
  { text: '前端', link: '/front' },
]

/**
 * AI
 */
aiItems = [
  { text: '知识图谱', link: '/kg/' },
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
    text: 'AI',
    items: aiItems
  },
]



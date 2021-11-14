
/**
 * 基础
 */
 basicItems = [
  { text: '计算机网络', link: '/network/' },
  { text: '组成与设计', link: '/computer-system/' },
  { text: '数据结构', link: '/data-structure/' },
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
    text: 'AI',
    items: aiItems
  },
]



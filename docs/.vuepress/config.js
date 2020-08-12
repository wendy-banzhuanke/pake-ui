module.exports = {
  title: 'PAKE UI',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/avatar01.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/avatar01.jpeg',  // 左上角logo
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: '技术文档', link: '/tech/' },
      {text: '个人主页', link: 'https://www.banzhuanke.com'}      
    ],
    // sidebar: 'auto', // 侧边栏配置
    sidebar: [
      '',
      {
        title: '美丽的css',
        path: '/tech/',
        collapsable: false, //是否展开
        sidebarDepth: 0,
        children: [
          '/tech/css01',
          '/tech/css02',
        ],
      }
    ],
    sidebarDepth: 2,
  }
};
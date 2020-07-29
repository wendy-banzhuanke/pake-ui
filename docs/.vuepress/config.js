module.exports = {
  title: '南宫的博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/avatar.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/avatar.jpeg',  // 左上角logo
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: '技术文档', link: '/tech/' },
      {text: '简书主页', link: 'https://www.jianshu.com/u/c455567c7f50'}      
    ],
    sidebar: 'auto', // 侧边栏配置
  }
};
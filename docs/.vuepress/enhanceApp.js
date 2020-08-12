/**
 * 安装一些扩展库
 */

import VueCompositionApi from '@vue/composition-api'

export default ({
  Vue, // VuePress 当前正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(VueCompositionApi)
}
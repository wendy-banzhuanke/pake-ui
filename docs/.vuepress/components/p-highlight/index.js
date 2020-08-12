import PHighlight from './index.vue'

export default {
  ...PHighlight,
  install: Vue => Vue.component(PHighlight.name, PHighlight),
}

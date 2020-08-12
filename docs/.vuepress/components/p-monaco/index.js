import PMonaco from './index.vue'

export default {
  ...PMonaco,
  install: Vue => Vue.component(PMonaco.name, PMonaco),
}

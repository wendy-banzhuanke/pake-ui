<template>
  <div class="showcode">
    <h2 class="showcode-title">{{title}}</h2>
    <small class="showcode-description">{{description}}</small>

    <!-- 案例area -->
    <div class="showcode-example">
      <slot></slot>
    </div>

    <!-- 代码area -->
    <div v-if="isShow" class="showcode-segment">
      <slot name="codeText"></slot>
    </div>

    <div v-if="$slots.codeText" class="showcode-toggle-button" @click="handleToggleShow">{{codeTextBtn}}</div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'

export default {
  name: 'show',

  props: {
    title: {
      type: String,
      default: '标题',
    }, 
    description: {
      type: String,
      default: '描述',
    },
  },

  setup () {
    const state = reactive({
      isShow: false,
      codeTextBtn: '显示代码'
    })

    const handleToggleShow = () => {
      state.isShow = !state.isShow
      state.codeTextBtn = state.isShow ? '隐藏代码' : '显示代码'
    }

    return {
      ...toRefs(state),
      handleToggleShow,
    }
  },

  // data () {
  //   return {
  //     isShow: false,
  //     codeTextBtn: '显示代码'
  //   }
  // },

  // methods: {
  //   handleToggleShow() {
  //     this.isShow = !this.isShow
  //     this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
  //   }
  // }
}
</script>

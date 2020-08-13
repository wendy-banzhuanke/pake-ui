<template>
  <pre>{{code.trim()}}</pre>
</template>

<script>
  import hljs from 'highlight.js'

  const THEMES = {
    github: () => import('highlight.js/styles/github.css'),
  }
  const DEFAULT_THEME = 'github'
  const LOADED_THEMES = {}

  const LANGS = {
    sql: () => import('highlight.js/lib/languages/sql'),
    json: () => import('highlight.js/lib/languages/json'),
  }
  const LOADED_LANGS = {}

  export default {
    name: 'p-highlight',

    props: {
      code: {
        type: String,
        default: '',
      },

      theme: {
        type: String,
        default: DEFAULT_THEME,
      },

      language: {
        type: String,
      },
    },

    watch: {
      theme: {
        immediate: true,
        handler (theme) {
          if (!THEMES[theme]) theme = DEFAULT_THEME

          if (!LOADED_THEMES[theme]) {
            THEMES[theme]()
            LOADED_THEMES[theme] = true
          }
        },
      },

      language: {
        immediate: true,
        async handler (lang) {
          if (!LOADED_LANGS[lang] && LANGS[lang]) {
            const {default: spec} = await LANGS[lang]()
            hljs.registerLanguage(lang, spec)
            LOADED_LANGS[lang] = true
          }
        },
      },
    },

    mounted () {
      this.highlight()
    },

    updated () {
      this.highlight()
    },

    methods: {
      async highlight () {
        await this.$nextTick()
        hljs.highlightBlock(this.$el)
      },
    },
  }
</script>


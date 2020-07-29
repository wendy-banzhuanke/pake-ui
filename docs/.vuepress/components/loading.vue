<template>
  <div><button @click="handleClick">this is a button</button></div>
</template>

<script>
export default {
  name: 'p-loading',

  methods: {
    handleClick () {
      console.log("this is a button")
    },
  },
}
</script>
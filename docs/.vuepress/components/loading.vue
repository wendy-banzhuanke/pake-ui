<template>
  <div><button @click="handleClick">this is a button</button></div>
</template>

<script>
export default {
  name: 'p-loading',

  setup () {
    const handleClick = () => {
      console.log("this is a button")
    }

    return {
      handleClick,
    }
  },
}
</script>
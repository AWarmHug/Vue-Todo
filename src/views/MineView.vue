<template>
  <div class="container">
    <img class="logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Mine'
}
</script>

<style scoped lang="less">
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .logo {
    width: 5rem;
    height: 5rem;
    display: block;
    position: absolute;
    top: 16%;
    left: 50%;
    margin-left: -2.5rem;
  }

</style>

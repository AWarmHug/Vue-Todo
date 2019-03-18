<template>
  <div class="container">
    <p class="date">{{item.date}}</p>
    <h6 class="title">{{item.title}}</h6>
    <p class="content">{{item.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'ListViewItem',
  props: {
    item: Object
  }
}
</script>

<style scoped lang="less">

  .date {
    color: #0086ff;
    font-size: 0.4rem;
    font-weight: bold;
    line-height: 1rem;
  }

  .title {
    color: #2a2a2a;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.6rem;
  }

  .content {
    color: #2a2a2a;
    font-size: 0.6rem;
    font-weight: initial;
    line-height: 1.2rem;
  }

</style>

<template>
  <div class="container">
    <ul class="list">
      <li v-for="(item,index) in itemList" :key="index">
        <list-view-item :item="item"></list-view-item>
      </li>
    </ul>
    <div class="add" @click="goAdd">
      <i class="add-img"></i>
    </div>
  </div>

</template>

<script>
import store from '../store'
import ListViewItem from '../components/ListViewItem'

export default {
  name: 'TodoList',
  store,
  components: { ListViewItem },
  computed: {
    itemList: function () {
      return store.state.list
    }
  },
  methods: {
    goAdd: function () {
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";

  .container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .list {
    padding: 0 1rem;
  }

  li {
    font-size: 2rem;
    border-bottom: #7d7d7d 0.08rem solid;
    padding: 0.4rem 0;
    list-style: none;
  }

  .add {
    width: 3rem;
    height: 3rem;
    position: fixed;
    right: 1rem;
    bottom: (1rem+3rem);
    background: @colorPrimary;
    border-radius: 1.5rem;

    .add-img {
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      background: url("../assets/img/ic_add.png");
      background-size: 100% 100%;
    }

  }
</style>

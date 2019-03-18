<template>
  <div class="container">
    <top-navigator :config="config"></top-navigator>
    <div class="content">
      <router-view/>
    </div>
    <ul class="bottom_nav">
      <li>
        <router-link :to="{name:'list'} " class="list rl">列表</router-link>
      </li>
      <li>
        <router-link :to="{name:'mine'}" class="mine rl">我的</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import TopNavigator from '../components/TopNavigator'

export default {
  name: 'Main',
  components: { TopNavigator },
  data: function () {
    return {
      config: {
        title: 'TODO'
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";

  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .content {
    width: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    position: absolute;
    top: 3rem;
    bottom: 3rem;
  }

  .bottom_nav {
    position: absolute;
    height: 3rem;
    list-style: none;
    width: 100%;
    line-height: 3rem;
    overflow: hidden;
    border-top: 0.08rem #9b9b9b solid;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
  }

  .rl {
    width: 50%;
    float: left;
    text-align: center;
    text-decoration: none;
    color: @colorPrimary;
    background: white;
  }

  .router-link-active {
    color: white;
    background: @colorPrimary;
  }

</style>

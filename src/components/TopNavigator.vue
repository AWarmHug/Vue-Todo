<template>
  <div class="top-nav">
    <div class="action" :style="iconLeftBgStyle" @click="navLeftFunc">
      {{navLeftText}}
    </div>
    <span class="title">
      {{navTitle}}
    </span>
    <div class="action" :style="iconRightBgStyle" @click="navRightFunc">
      {{navRightText}}
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TopNavigator',
  props: {
    config: {
      title: String,
      left: Object,
      right: Object
    }
  },
  data: function () {
    return {
      iconLeftBgStyle: {},
      iconRightBgStyle: {}
    }
  },
  computed: {
    navTitle () {
      if (this.config) {
        return this.config.title
      }
      return ''
    },
    navLeftText () {
      if (this.config.left) {
        return this.config.left.name
      }
      return ''
    },
    navLeftFunc () {
      if (this.config.left) {
        return _.debounce(this.config.left.action, 500)
      }
      return function () {
      }
    },
    navRightText () {
      if (this.config.right) {
        return this.config.right.name
      }
      return ''
    },
    navRightFunc () {
      if (this.config.right) {
        return _.debounce(this.config.right.action, 500)
      }
      return function () {
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";

  .top-nav {
    background-color: @colorPrimary;
    width: 100%;
    height: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    color: white;

    .action {
      width: 3rem;
      padding: 0.4rem;
    }

    .title {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
</style>

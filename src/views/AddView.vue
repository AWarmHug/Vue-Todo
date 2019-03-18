<template>
  <div class="container">
    <top-navigator :config="config"></top-navigator>
    <div class="body-content">
      <div class="title">
        <p class="ip-label">标题</p>
        <input class="ip-title ip" placeholder="请输入标题" v-model="itemTitle">
      </div>
      <div class="content">
        <p class="ip-label">内容</p>
        <textarea class="ip-content ip" placeholder="请输入内容" v-model="itemContent"></textarea>
      </div>
      <button class="btn longBtn" @click="addTodoItem">确定</button>
    </div>
  </div>
</template>

<script>

import _ from 'lodash'
import store from '../store'
import TopNavigator from '../components/TopNavigator'

export default {
  name: 'AddView',
  store,
  components: { TopNavigator },
  data: function () {
    return {
      itemTitle: '',
      itemContent: '',
      config: {
        title: '添加',
        left: {
          name: '返回',
          icon: '../src/assets/img/ic_back.png',
          action: this.back
        }
      }
    }
  },
  methods: {
    checkContent: function () {
      return !_.isEmpty(this.itemTitle) && !_.isEmpty(this.itemContent)
    },

    addTodoItem: function () {
      if (this.checkContent()) {
        // 检查通过 添加数据
        let now = new Date()
        store.commit('addItem', {
          title: this.itemTitle,
          content: this.itemContent,
          date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        })
        this.itemTitle = ''
        this.itemContent = ''
        this.$router.push('/main/list')
      }
    },
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";
  @import "../assets/css/view.css";

  .container {
    width: 100%;
    height: 100%;
    position: relative;

    .body-content {
      padding: 1rem 1rem 1rem 1rem;
    }

    .ip {
      margin-top: 0.5rem;
      width: 100%;
      border: #929292 solid 0.08rem;
      padding: 0.25rem;
      box-sizing: border-box;
    }

    .ip-label {
      font-size: 1rem;
    }

    .ip-title {
      color: #2a2a2a;
      font-size: 1.1rem;
      font-weight: bold;
      line-height: 2.4rem;
      height: 2.4rem;
    }

    .content {
      margin-top: 1rem;
    }

    .ip-content {
      color: #2a2a2a;
      font-size: 1rem;
      font-weight: initial;
      line-height: 1.6rem;
      height: 8rem;
    }

    .longBtn {
      display: block;
      width: 80%;
      position: absolute;
      bottom: 1rem;
      left: 50%;
      margin-left: -40%;
    }

  }

</style>

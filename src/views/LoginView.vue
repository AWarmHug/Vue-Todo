<template>
  <div class="container">
    <top-navigator :config="config"></top-navigator>
    <img class="logo" src="../assets/logo.png">
    <div class="content">
      <div class="c_phone">
        <label>手机号</label><input class="phone" type="tel" placeholder="请输入手机号">
      </div>
      <div class="c_pwd">
        <label>密码 </label><input class="pwd" type="password" placeholder="请输入密码">
      </div>
      <button class="loginBtn btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>

import TopNavigator from '../components/TopNavigator'

export default {
  name: 'Login',
  components: { TopNavigator },
  data () {
    return {
      config: {
        title: '登录',
        right: {
          name: '注册',
          action: this.goReg
        }
      }
    }
  },
  methods: {
    goReg () {
      this.isLogin = false
    },
    login () {
      this.$router.push('/main/list')
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

  .content {
    width: 100%;
    position: absolute;
    top: 40%;

    label {
      display: inline-block;
      width: 4.5rem;
      font-size: 1rem;
      text-align: left;
    }

    input {
      font-size: 1rem;
      line-height: 2.4rem;
      height: 2.4rem;
      background-color: transparent;
      border: none;
    }

    & > div {
      text-align: center;
      background: fade(@colorPrimary, 10%);
      border-top: #ffffff 0.05rem solid;
    }

    .loginBtn {
      display: block;
      width: 80%;
      margin: 1rem auto 0;
    }
  }
</style>

<template>
  <div class="my-login">
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
    <!--  -->
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" @click="onLogin" native-type="submit">登录</van-button>
    </div>
    <!--  -->
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" to="/regist">注册</van-button>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button, NavBar } from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onLogin() {
      let data = { username: this.username, password: this.password };
      this.$http.fetchLogin(data).then(res=> {
        localStorage.setItem('token',res.token)
        this.$router.back();
      });
    },
    onClickLeft() {
      this.$router.back();
    },
  }
};
</script>

<style lang='scss' scoped>
</style>

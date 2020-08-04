<template>
  <div class="my-login">
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />
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
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="password1"
      type="password"
      label="确认密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" @click="regist" native-type="submit">提交</van-button>
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
      password: "",
      password1: ""
    };
  },
  methods: {
    regist() {
      let data = {
        username: this.username,
        password: this.password,
        password2: this.password1
      };
      this.$http.fetchRegist(data).then(()=>{
          console.log('注册成功');
          this.$router.back();
      });
    },
    onClickLeft() {
      this.$router.back();
    },
    onSubmit(values) {
      // 表单验证
      let data = {
        username: values.用户名,
        password: values.密码
      };
      this.$http
        .fetchLogin(data)
        .then(() => {
          this.$router.push("/home");
        })
        .catch(() => {
          this.$router.push("/regist");
        });
    }
  }
};
</script>

<style lang='scss' scoped>
</style>

<template>
<div class="regist">
  <head>
    <meta charset="utf-8" />
    <title>登录界面</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <form class="box">
      <h1>regist</h1>
      <input type="text"  placeholder="Username" v-model="username"/>
      <input type="password" placeholder="Password" v-model="password" />
      <input type="password" placeholder="Password again" v-model="password2"/>
      <input type="button" @click="rigist" value="Regist" />
      <a @click="toLogin">已有账号，去登陆</a>
    </form>
  </body>
</div>
</template>

<script>
export default {
  data:function() {
    return {
      username:'',
      password:'',
      password2:'',
    }
  },
  methods: {
    rigist() {
      if(this.password===this.password2) {
        let list = {
          username:this.username,
          password:this.password
        }
        this.$http.regist(list).then(()=>{
            alert("注册成功！")
            this.$router.push('/login')
        })
      }else{
        alert("密码不一致！")
      }
    },
    toLogin() {
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss">

</style>
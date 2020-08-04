<template>
<div class="regist">
  <head>
    <meta charset="utf-8" />
    <title>登录界面</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <form class="box">
      <h1>login</h1>
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="button" @click="login" value="Login" />
      <a @click="toRegist">去注册</a>
    </form>
  </body>
</div>
</template>

<script>

export default {
    name:'login',
    data:function() {
        return {
            username:'',
            password:''
        }
    },
    methods: {
        login() {
            let data = {
                username:this.username,
                password:this.password
            }
            this.$http.login(data).then(res=>{
                if(res.token){
                  localStorage.setItem('token',res.token)
                  this.$message({
                    message: '登录成功！',
                    type: 'success'
                  });
                  this.$router.push('/index')
                }else{
                  this.$message.error(res.msg);
                }
            })
        },
        toRegist() {
            this.$router.push('/regist')
        }
    }
};
</script>

<style lang="scss">

</style>
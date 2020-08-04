<template>
  <div class="index">
    <el-container>
      <el-aside width="200px" class="aside-layout">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#0000002c"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <!-- 头像 -->
          <div class="photo-h">
            <div>
              <img src="../../assets/T1.jpeg" alt="头像" />
            </div>
          </div>
          <!-- 操作列表 -->
          <el-submenu 
          v-for="item in routes"
          :index="item.id" 
          :key="item.id"
          >
            <template slot="title">
              <i :class='item.icon' />
              <span>{{item.text}}</span>
            </template>
              <el-menu-item 
                v-for="list in item.children"
                :key="list.id"
                :index="list.path"
                >
                <i :class='list.icon' />
                {{list.text}}
              </el-menu-item>
          </el-submenu>
          <!-- 信息中心 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user" />
              <span>信息中心</span>
            </template>
          </el-submenu>
          <!-- 退出 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-back" />
              <span @click="exit">退出</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import routes from '@/components/'

export default {
  data () {
    return {
      routes,
    }
  },
  components: {
    // main:this.routes.children
  },
  methods: {
    exit(){
      this.$router.push('/login')
      localStorage.removeItem('token')
    }
  },
};
</script>

<style lang="scss" scoped>
// .aside-layout{
//   position: fixed;
//   left: 0;top: 0;
//   overflow: hidden;
// }
.photo-h {
  height: 200px;
  width: 100%;
  div {
    margin: 25px 25px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
  margin: 20px 0 0 20px;
}
.el-main {
  background: #0000002c;
  color: #333;
  height: 900px;
  margin: 20px 20px 0 0 ;
  border-top: 1px solid #E6E6E6;
}
</style>
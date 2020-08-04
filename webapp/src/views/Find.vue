<template>
  <div class="my-home">
    <!-- 筛选栏 -->
    <van-nav-bar fixed placeholder z-index="9999" left-arrow @click-left="onClickLeft">
      <template #title>
        <input type="text" @click="search" class="searchBtn" />
      </template>
    </van-nav-bar>

    <div class="boxL">
      <!-- 侧边导航 -->
      <van-sidebar v-model="activeKey" @change="onChange">
        <div v-for="item in list" :key="item._id" @click="cates(item)">
          <van-sidebar-item :title="item.cates_zh" />
        </div>
      </van-sidebar>
    </div>
    <!-- 内容列表 -->
    <div class="boxR">
      <van-grid :column-num="3">
        <van-grid-item v-for="item in goodArr" :key="item._id">
          <img :src="'http://10.36.135.69:9999/'+item.imgs" :alt="item.goodsname" />
          <div class="goodName">{{item.goodsname}}</div>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 选项栏 -->
    <MyTabbar />
  </div>
</template>

<script>
import { MyTabbar } from "@/components/index";
import { Grid, GridItem, Sidebar, SidebarItem, NavBar } from "vant";
export default {
  data() {
    return {
      changeId: 1,
      activeKey: 0,
      list: [],
      goodArr: []
    };
  },
  components: {
    MyTabbar,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [NavBar.name]: NavBar,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  methods: {
    cates(item) {
      let params = { cate: item.cates_zh };
      this.$http.fetchGoodsOfCate(params).then(res=>{
        this.goodArr = res;
      })
    },
    onChange(index) {
      this.changeId = index + 1;
    },
    onClickLeft() {
      this.$router.back();
    },
    search() {
      //
    },
    changeS() {},
    async getData() {
      let arr = await this.$http.fetchAllCates();
      let params = { cate: arr[0].cates_zh };
      let goodArr = await this.$http.fetchGoodsOfCate(params);
      this.list = arr;
      this.goodArr = goodArr;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang='scss' scoped>
.searchBtn {
  background: #ffffff;
  border-radius: 5rem;
  border: 0.013333rem solid #ddd;
  padding-left: 0.4rem;
}
.my-home {
  position: relative;
  height: 100%;
  width: 100%;
  .boxL {
    position: absolute;
    top: 1.226667rem;
    left: 0;
    bottom: 1.333333rem;
    width: 2.266667rem;
    overflow: auto;
  }
  .boxR {
    text-align: center;
    font-size: 0.133333rem;
    position: absolute;
    top: 1.226667rem;
    bottom: 1.333333rem;
    left: 2.266667rem;
    width: 7.68rem;
    overflow: auto;
    .goodName{
      width: 1.733333rem;
      height: 0.533333rem;
      text-overflow: ellipsis;
      white-space:nowrap; 
      overflow: hidden;
    }
    img {
      width: 100%;
    }
  }
}
.van-sidebar-item {
  line-height: 0.2rem;
  height: 1.233333rem;
}
.on {
  color: red;
}
</style>

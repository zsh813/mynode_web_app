<template>
  <div class="my-home">
    <!-- 通知栏 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-notice-bar
        color="#fff"
        background="#ee0a24"
        mode="closeable"
        left-icon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
      <!-- 搜索框 -->
      <van-sticky @scroll="scrollTop">
        <form action="/">
          <van-search background="#ee0a24" show-action placeholder="请输入搜索关键词">
            <template #action>
              <div @click="onLogin">登录</div>
            </template>
          </van-search>
        </form>
      </van-sticky>
      <!-- 轮播 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <!-- 分割线 -->
      <van-divider :style="{ color: '#666', borderColor: '#666', padding: '0 16px' }">信息列表</van-divider>
      <!-- 信息列表 -->

      <van-list
        v-model="loading"
        :offset="20"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <div
          @click="info(img._id)"
          class="listBox"
          v-for="img in goods"
          :key="img._id"
          :title="img.goodsname"
        >
          <img :src="'http://10.36.135.69:9999/'+img.imgs" :alt="img.desc" />
          <div>
            <span>{{img.goodsname}}</span>
            <br />
            <span>￥{{img.price}}</span>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <!-- 选项栏 -->
    <MyTabbar />
  </div>
</template>

<script>
import Vue from "vue";
import {
  NoticeBar,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Divider,
  PullRefresh,
  Toast,
  Sticky,
  List
} from "vant";

Vue.use(Lazyload);

import { MyTabbar } from "@/components/index";
// import { fetchGoodList } from "@/utils/api";

export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      goods: [],
      // 下拉刷新
      refreshing: false,
      // 触底加载
      loading: false,
      finished: false,
      page: 1
    };
  },
  computed: {
    length: function() {
      return Math.floor(this.goods.length / 2);
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let _this = this;
      // 调列表接口
      let params = {
        page: _this.page,
        size: 4
      };
      _this.$http.fetchGoodList(params).then(res => {
        if (res.list.length === 0) Toast.success("没有数据了");
        if (res.list.length > 0) {
          // 下拉刷新
          if (_this.refreshing) {
            _this.goods = res.list;
          } else {
            // 触底加载
            _this.goods = [..._this.goods, ...res.list];
          }
          // 控制触底加载是否reset
          _this.loading = false;
          // 控制下拉刷新是否reset
          _this.refreshing = false;
        }
      });
    },
    onLogin() {
      // 跳转到登录页
      this.$router.push('/login')
    },
    onLoad() {
      this.page++;
      this.getList();
    },
    // 下拉刷新
    onRefresh() {
      this.page = 1;
      this.getList();
    },
    scrollTop() {
      return { scrollTop: "1.066667rem", isFixed: true };
    },
    info(val) {
      this.$router.push("/detail/"+val);
    }
  },
  components: {
    MyTabbar,
    [NoticeBar.name]: NoticeBar,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [Divider.name]: Divider,
    [PullRefresh.name]: PullRefresh,
    [Sticky.name]: Sticky,
    [List.name]: List
  }
};
</script>

<style lang='scss' scoped>
.van-list {
  width: 10rem;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.8rem;
  .listBox {
    width: 5rem;
    & > img {
      width: 5rem;
      height: 5rem;
    }
    div {
      height: 1.866667rem;
      text-align: center;
      font-size: 0.2rem;
    }
  }
}
.van-swipe-item {
  width: 10rem;
  img {
    width: 100%;
    height: 5rem;
  }
}
</style>

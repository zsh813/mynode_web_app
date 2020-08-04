<template>
  <div class="my-user">
    <!-- 个人信息 -->
    <van-row>
      <van-col span="6">
        <van-image cover round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </van-col>
      <van-col span="18">
        <div>用户名</div>
        <div>zhanghao123</div>
        <div>京享值<span>8888</span>小白信用<span>100.0</span><span>></span></div>
      </van-col>
    </van-row>
    <!-- 收货信息 -->
        <van-grid :column-num="4">
          <van-grid-item icon="home-o" text="文字" dot />
          <van-grid-item icon="search" text="文字" badge="99+" />
          <van-grid-item icon="shopping-cart-o" text="文字" dot />
          <van-grid-item icon="friends-o" text="文字" badge="99+" />
        </van-grid>
    <!--  -->
    <MyTabbar />
  </div>
</template>

<script>
import { MyTabbar } from "@/components/index";
import { Col, Row, Image,Grid, GridItem } from "vant";
export default {
  components: {
    MyTabbar,
    [Col.name]: Col,
    [Row.name]: Row,
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  }
};
</script>

<style lang='scss' scoped>

.my-user{
  .van-row{
    height: 3rem;
    background: rgb(204, 41, 41);
    .van-col{
      padding: .3rem 0 0 .3rem;
      font-size: 0.4rem;
      color: #eee;
    }
    div{
      margin: 0.133333rem 0;
    }
    span{
      margin: 0 0.133333rem;
    }
  }
}
</style>

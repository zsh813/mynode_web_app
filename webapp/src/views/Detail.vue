<template>
  <div class="my-detail">
    <div>
      <!-- 标题栏 -->
      <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
      <!-- 详情 -->
      <div class="detailBox">
        <van-image width="10rem" height="10rem" :src="'http://10.36.135.69:9999/'+list.imgs" />
        <div>
          <p class="detailText">{{list.goodsname}}</p>
          <h2>
            <span>￥{{list.price}}</span>
          </h2>
          <p class="detailDesc">{{list.desc}}</p>
        </div>
      </div>

      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-icon icon="cart-o" text="购物车" to="/cart" />
        <van-goods-action-button type="warning" text="加入购物车" @click="add" />
        <van-goods-action-button type="danger" text="立即购买" @click="buy" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Image,
  NavBar,
  Toast
} from "vant";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [GoodsAction.name]: GoodsAction,
    [NavBar.name]: NavBar,
    [Image.name]: Image,
    [Toast.name]: Toast
  },
  methods: {
    buy() {
      let token = localStorage.getItem("token");
      if (!token) {
        this.$router.push("/login");
      } else {
        let data = {
          good_id: this.list._id
        };
        this.$http.fetchAddToCart(data).then(() => {
          setTimeout(() => {
            this.$router.push('/cart');
          }, 800);
        });
      }
    },
    add() {
      let data = {
        good_id: this.list._id
      };
      this.$http.fetchAddToCart(data);
      Toast.success("添加成功");
    },
    onClickLeft() {
      this.$router.back();
    }
  },
  mounted() {
    let _this = this;
    let params = { good_id: _this.$route.params.id };
    _this.$http.fetchGoodDetail(params).then(res => {
      _this.list = res;
    });
  }
};
</script>

<style lang='scss' scoped>
.detailBox {
  width: 10rem;
}
.detailText{
  font-size: 22px;
  margin: 0;
  padding: 0;
}
h2{
  margin: 0;
  padding: 0;
}
.detailDesc {
  margin: 0;
  font-size: 14px;
  padding:0 15px;
}
</style>

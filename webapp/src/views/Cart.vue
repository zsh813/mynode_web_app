<template>
  <div class="my-home">
    <!-- top -->
    <van-nav-bar fixed placeholder z-index="999" title="购物车" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <!-- 商品卡片 -->
    <div class="cartBox">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div class="cartList" v-for="(item) in list" :key="item._id">
          <van-row>
            <van-swipe-cell>
              <van-col span="3">
                <van-checkbox :name="item._id"></van-checkbox>
              </van-col>
              <van-col span="21">
                <van-card
                  :num="item.num"
                  :price="item.good.price"
                  :desc="item.good.desc"
                  :title="item.good.name"
                  :thumb="item.good.img"
                >
                  <template #tags>
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
                  </template>
                  <template #footer>
                    <button @click="sub(item.num,item._id)" class="mini">-</button>
                    <button @click="add(item.num,item._id)" class="mini">+</button>
                  </template>
                </van-card>
              </van-col>
              <template #right>
                <van-button
                  @click="deleteCart(item._id)"
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                />
              </template>
            </van-swipe-cell>
          </van-row>
        </div>
      </van-checkbox-group>
    </div>
    <!-- 结算 -->
    <van-submit-bar safe-area-inset-bottom :price="oneAllPrice" button-text="提交订单">
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
      <template #tip v-if="address==0">
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import {
  CheckboxGroup,
  Card,
  Button,
  Tag,
  NavBar,
  SubmitBar,
  Checkbox,
  Col,
  Row,
  SwipeCell,
  NoticeBar
} from "vant";

export default {
  data() {
    return {
      result: [],
      list: [],
      address: 1,
      // checkedList: [],
      checked: false
    };
  },
  computed:{
    oneAllPrice(){
      let price = 0
      for (let i = 0; i < this.list.length; i++) {
        for (let j = 0; j < this.result.length; j++) {
          if(this.list[i]._id==this.result[j]){
            price+=this.list[i].good.price*this.list[i].num*100
          }
        }
      }
      return price
    }
  },
  components: {
    [CheckboxGroup.name]: CheckboxGroup,
    [NoticeBar.name]: NoticeBar,
    [Card.name]: Card,
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Tag.name]: Tag,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Col.name]: Col,
    [Row.name]: Row,
    [SwipeCell.name]: SwipeCell
  },
  methods: {
    checkAll() {
      console.log(this.result);
      if (!this.checked) {
        this.$refs.checkboxGroup.toggleAll(false);
      } else {
        this.$refs.checkboxGroup.toggleAll(true);
      }
    },
    onClickLeft() {
      this.$router.back();
    },
    add(num, id) {
      let Num = num + 1;
      let data = { num: Num, id };
      this.$http.fetchUpdateNum(data).then(() => {
        console.log(Num);
      });
      this.getData();
    },
    sub(num, id) {
      if (num <= 1) {
        return;
      }
      let Num = num - 1;
      let data = { num: Num, id };
      this.$http.fetchUpdateNum(data);
      this.getData();
    },
    onClickEditAddress() {},
    deleteCart(id) {
      let data = { id };
      this.$http.fetchDeleteGood(data).then(() => {
        this.getData();
      });
    },
    getData() {
      let _this = this;
      _this.$http.fetchCartList().then(res => {
        console.log(res);
        _this.list = res;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang='scss'>
.van-nav-bar {
  .van-nav-bar__title {
    font-size: 0.48rem;
  }
}
.van-submit-bar__tip {
  span {
    color: #1989fa;
  }
}
.cartList {
  border-bottom: 1px solid #eee;
}
.cartBox {
  padding-bottom: 1.333333rem;
  .van-checkbox {
    line-height: 3.386667rem;
    height: 3.386667rem;
    text-align: center;
    background: #fafafa;
    .van-checkbox__icon {
      margin: auto;
    }
  }
}

.mini {
  border: 1px solid #ddd;
  margin-left: 0.166667rem;
  border-radius: 0.1rem;
  text-align: center;
  color: #999;
  width: 0.6rem;
  font-size: 0.433333rem;
}
.delete-button {
  line-height: 3.386667rem;
  height: 3.386667rem;
}
</style>

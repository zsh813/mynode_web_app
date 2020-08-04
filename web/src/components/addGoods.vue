<template>
  <div class="addGoods">
    <h1>商品新增</h1>
    <div class="goods-news">
      <el-row>
        <el-col :span="4">商品名称：</el-col>
        <el-col :span="20">
          <el-input v-model="info.goodsname" placeholder="商品名"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">商品描述：</el-col>
        <el-col :span="20">
          <el-input type="textarea" :rows="2" placeholder="商品描述：" v-model="info.desc"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">商品价格：</el-col>
        <el-col :span="20">
          <el-input v-model="info.price" placeholder="商品价格"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">商品品类：</el-col>
        <el-col :span="20">
          <el-select v-model="info.cates" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">商品图片：</el-col>
        <el-col :span="20">
          <el-upload
            class="avatar-uploader"
            action="http://10.36.135.69:8090/api/v1/upload/img"
            :show-file-list="false"
            :on-success="handleUpload"
          >
            <img v-if="info.imgs" :src="'http://10.36.135.69:9999'+info.imgs" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">是否热销：</el-col>
        <el-col :span="20">
          <el-switch v-model="info.hot" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">商品排名：</el-col>
        <el-col :span="20">
          <el-input-number v-model="info.rank" :min="1" :max="100000" label="描述文字"></el-input-number>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4"></el-col>
        <el-col :span="20">
          <el-button @click="addGood" type="primary" round>提交信息</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      info: {
        goodsname: "",
        cates: "",
        imgs: "",
        price: "",
        desc: "",
        hot: false,
        rank: "",
      },
    };
  },
  methods: {
    handleUpload(res) {
      this.info.imgs = res.data.url
    },
    addGood() {
      this.$http.addGoods(this.info).then((res) => {
        if (!res) {
          this.$message({
            message: "添加成功！",
            type: "success",
          });
          this.info={
            goodsname: "",
            cates: "",
            imgs: "",
            price: "",
            desc: "",
            hot: false,
            rank: "",
          }
        } else {
          this.$message.error("商品名称和价格不能为空！");
        }
      });
    },
  },
  mounted() {
    this.$http.getCates().then((res) => {
      for (let item in res.list) {
        this.options.push({
          value: res.list[item]._id,
          label: res.list[item].cates_zh,
        });
      }
    });
  },
};
</script>

<style lang="scss">
.addGoods {
  height: 50px;
  h1 {
    color: #efefef;
  }
  .goods-news {
    margin: auto;
    width: 400px;
    padding: 25px 20%;
    .el-col-4 {
      margin-top: 10px;
      width: 100px;
      height: 60px;
      line-height: 60px;
      color: #fff;
      font-size: 18px;
    }
    .el-col-20 {
      margin-top: 10px;
      width: 300px;
      line-height: 60px;
    }
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<template>
  <div class="goods">
    <h1>商品列表</h1>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-select v-model="tag" placeholder="类型查询">
          <el-option v-for="item in tags" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="goodName" placeholder="商品名查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="filterGoods">查询</el-button>
      </el-form-item>
    </el-form>

    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="create_time" label="创建时间" width="80px"></el-table-column>
        <el-table-column prop="name" label="商品" width="150px">
          <template slot-scope="scope">
            <div class="goods-img">
              <img :src="img.imgBaseUrl+scope.row.imgs" :alt="scope.row.goodsname" />
            </div>
            <span class="goods-name">{{scope.row.goodsname}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="desc" label="商品描述" width="300px"></el-table-column>
        <el-table-column prop="cates" label="商品品类"></el-table-column>
        <el-table-column prop="price" label="商品价格"></el-table-column>
        <el-table-column prop="rank" label="商品排名"></el-table-column>
        <el-table-column label="操作" fixed="right" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="deletGoods(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <el-pagination
      hide-on-single-page
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
import img from "@/utils/img";
export default {
  data() {
    return {
      img,
      tag: "所有",
      goodName: "",
      tags: [],
      tableData: [],
      total: 10,
      page:1,
    };
  },
  watch: {
    tag(newVal) {
      this.getGoodsList(newVal);
      this.getTotal({cates:newVal})
    },
  },
  methods: {
    deletGoods(id) {
      this.$http.goodsDelet({id:id})
      this.getGoodsList();
    },
    changePage(res) {
      this.page = res;
      this.getGoodsList();
    },
    filterGoods() {
      let _this=this
      let data = {
        name: _this.goodName,
        page: _this.page,
        limit: 4,
      };
      _this.$http.nameGetGoods(data).then((res) => {
        _this.tableData = res.arr;
      });
      _this.getTotal({name: _this.goodName});
    },
    getcates() {
      this.$http.getCates().then((res) => {
        this.tags = res.list.map((cate) => {
          return cate.cates_zh;
        });
        this.tags.unshift("所有");
      });
    },
    getGoodsList(cate) {
      let data = {
        cates: cate,
        page: this.page,
        limit: 4,
      };
      this.$http.getGoods(data).then((res) => {
        this.tableData = res.arr;
      });
      this.getTotal({cates:cate});
    },
    getTotal(val) {
      let data = val
        this.$http.goodsAll(data).then(res=>{
        this.total = res.list.length*10/4
      })
    }
  },
  mounted() {
    this.getcates();
    this.getGoodsList();
    this.getTotal();
  },
};
</script>

<style lang="scss">
.goods {
  height: 50px;
  h1 {
    color: #efefef;
  }
  .goods-img {
    height: 100px;
    img {
      width: 100%;
    }
  }
}
.goods-name {
  display: block;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}
.el-table_1_column_3 {
  color: #999;
  padding: 0 60px;
}
.el-table_1_column_1 {
  color: #66b1ff;
}
.el-table_1_column_4 {
  color: #66b1ff;
}
.cell {
  text-align: center;
}
.el-main{
  position: relative;
}
.el-pagination{
  position: absolute;
  bottom: 10px;
  width: 95%;
  text-align: right;
}
</style>
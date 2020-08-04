<template>
  <div class="addCates">
    <h1>类型新增</h1>
    <div class="cates-news">
      <el-row>
        <el-col :span="4">中&nbsp;文：</el-col>
        <el-col :span="20">
          <el-input v-model="cates_zh" placeholder="类型名"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">English：</el-col>
        <el-col :span="20">
          <el-input v-model="cates" placeholder="Type Name"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4"></el-col>
        <el-col :span="20" :push='5'>
          <el-button @click="addcates"  type="primary" round>提交信息</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="cates-list">
       <el-divider>EXSITING</el-divider>
       <div class="cates-tags">
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          closable
          @close="handleClose(tag)"
          :type="tag.type">
          {{tag.name}}
        </el-tag>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cates_zh: '',
      cates:'',
      tags: [],
    };
  },
  methods: {
    handleClose(tag){
      this.$http.catesDelet({name:tag.name})
      this.getcates()
    },
    addcates() {
      let data = {
        cates:this.cates,
        cates_zh:this.cates_zh
      }
      this.$http.addCates(data).then(res=>{
        if(!res){
          this.$message({
            message: '添加成功！',
            type: 'success'
          });
          this.cates_zh= ''
          this.cates=''
          this.getcates();
        }else{
          this.$message.error(res.msg);
        }
      })
    },
    getcates() {
      this.$http.getCates().then(res=>{
        this.tags = res.list.map(cate=>{
          return {name:cate.cates_zh,type:'success'}
        })
    })
    }
  },
  mounted () {
    this.getcates()
  }
};
</script>

<style lang="scss">
.addCates {
  height: 50px;
  h1 {
    color: #efefef;
  }
  .cates-news {
    margin: auto;
    width: 400px;
    transform: translateX(-35px);
    padding: 25px 20%;
    .el-col-4 {
      margin-top: 10px;
      width: 100px;
      height: 60px;
      line-height: 60px;
      color: #fff;
      font-size: 18px;
      text-align: center;
    }
    .el-col-20 {
      margin-top: 10px;
      width: 300px;
      height: 60px;
      line-height: 60px;
    }
  }
  .el-divider__text {
    font-size: 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    background: #32874C;
    color: #fff;
  }
}
.cates-tags {
  text-align: center;
  padding-top: 20px;
}
.el-tag{
  margin: 0 5px;
}
</style>
<template>
  <div>
    <header>
      <div class="top">
        <h1>ToDoList</h1>
        <input type="text" v-model="message" @keyup.enter="add" placeholder="添加ToDo" />
      </div>
    </header>
    <main>
      <div class="box">
        <dl>
          <dt>
            正在进行
            <span>{{ddList.length}}</span>
          </dt>
          <div>
            <dd v-for="(item,index) in ddList" :key="index">
              <input @click.prevent.self="finish(index)" type="checkbox" />
              <input class="changeList" v-model="item.txt" type="text" />
              <a @click="remove(index)" href="javascript:;">-</a>
            </dd>
          </div>
        </dl>
        <dl>
          <dt>
            已经完成
            <span>{{doneList.length}}</span>
          </dt>
          <dd v-for="(item,index) in doneList" :key="index">
            <input type="checkbox" v-on:click.prevent.self="cencel(index)" checked />
            <input class="changeList" v-model="item.txt" type="text" />
            <a @click="removeDone(index)" href="javascript:;">-</a>
          </dd>
        </dl>
      </div>
    </main>
    <footer>
      <div class="foot">
        Copyright © 2014 todolist.cn
        <a href>clear</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      ddList: [],
      doneList: [],
    };
  },
  methods: {
    add() {
      if (this.message) {
        this.ddList.push({ txt: this.message });
        this.message = "";
        this.count++;
      }
    },
    finish(index) {
      this.doneList.push({ txt: this.ddList[index].txt });
      this.doneCount++;
      this.ddList.splice(index, 1);
      this.count--;
    },
    cencel(index) {
      this.ddList.push({ txt: this.doneList[index].txt });
      this.count++;
      this.doneList.splice(index, 1);
      this.doneCount--;
    },
    remove(index) {
      this.ddList.splice(index, 1);
      this.count--;
    },
    removeDone(index) {
      this.doneList.splice(index, 1);
      this.doneCount--;
    }
  }
};
</script>

<style scoped>


header {
  height: 40px;
  background-color: #323232;
}

a {
  text-decoration: none;
  color: #999;
}

.foot {
  width: 600px;
  margin: auto;
  text-align: center;
}

.top {
  width: 600px;
  margin: 0 auto;
}

.top h1 {
  float: left;
  font-size: 20px;
  font-weight: normal;
  color: #dddddd;
  line-height: 40px;
}

.top input {
  float: right;
  height: 24px;
  border: 0;
  border-radius: 5px;
  width: 355px;
  padding-left: 10px;
  font-size: 12px;
  margin-top: 8px;
  outline: none;
  box-shadow: 0px 0px 5px 1px #b4b4b4 inset;
}

.box {
  width: 600px;
  margin: auto;
  padding-bottom: 20px;
}

.box dl {
  padding-top: 20px;
}

.box dt {
  font-size: 22px;
  font-weight: 900;
  padding-bottom: 10px;
}

.box span {
  font-size: 14px;
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #e6e6fa;
  text-align: center;
}

.box dd {
  height: 34px;
  border-radius: 2px;
  border-left: 5px solid #629a9c;
  background-color: #fff;
  margin-top: 10px;
  line-height: 34px;
  padding-left: 40px;
  position: relative;
}

.box dd input {
  position: absolute;
  top: 6px;
  left: 10px;
  width: 22px;
  height: 22px;
}

.box dd a {
  position: absolute;
  top: 6px;
  right: 5px;
  width: 14px;
  height: 12px;
  border-radius: 14px;
  border: 6px double #fff;
  background: #ccc;
  line-height: 14px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
}

.box dl:last-of-type dd {
  opacity: 0.5;
}
.box dd .changeList {
  position: unset;
  width: 500px;
  height: 24px;
  border: 0;
  padding-left: 10px;
}
</style>

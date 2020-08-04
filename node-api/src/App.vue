<template>
  <div id="app">
    <div class="top">
      <router-link to="./todo">TODO</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import todolist from "./views/todolist.vue";

export default {
  components: {
    // todolist
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

body {
  background-color: #cdcdcd;
}
</style>
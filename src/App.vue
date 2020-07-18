<template>
  <div id="app">
    <router-view @test="handleTest($event)"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleTest: console.log,
  }
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

ul {
  margin: 0;
}

html,
body {
  background-color: #ffead9;
  margin: 0;
  padding: 0;
}
</style>

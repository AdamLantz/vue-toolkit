<template>
  <div>
    <div class="nav" :style="{boxShadow: getShadow(4)}">
      <ul>
        <li>
          <router-link to="/birthdays">Birthdays</router-link>
        </li>
        <li>
          <router-link to="/groceries">Groceries</router-link>
        </li>
      </ul>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
import getShadow from "./ui/helpers/getShadow";

export default {
  name: "Navigation",
  methods: {
    getShadow
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #236e96;
  font-weight: bold;
  text-decoration: none;
}
.nav {
  height: 48px;
  width: 100%;
  position: fixed;
  background-color: #ffd700;
}
.spacer {
  height: 48px;
  margin-bottom: 2rem;
}
</style>

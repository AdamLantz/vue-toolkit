<template>
  <div>
    <div class="nav" :style="{boxShadow: getShadow(4)}">
      <div class="nav-primary">
        <ul>
          <li>
            <router-link to="/birthdays">Birthdays</router-link>
          </li>
          <li>
            <router-link to="/groceries">Groceries</router-link>
          </li>
        </ul>
      </div>
      <div v-if="showSecondaryNav" class="nav-secondary">
        <div class="nav-secondary-inner">
          <slot name="secondaryNav"></slot>
        </div>
      </div>
    </div>
    <div :class="{spacer: true, double: showSecondaryNav}"></div>
  </div>
</template>

<script>
import getShadow from "./ui/helpers/getShadow";

export default {
  name: "Navigation",
  props: {
    showSecondaryNav: Boolean
  },
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
  width: 100%;
  position: fixed;
}

.nav-primary {
  height: 48px;
  background-color: #ffd700;
  position: relative;
}

.nav-secondary {
  height: 48px;
  background-color: #ffffff;
  position: relative;
}

.nav-secondary-inner {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 10px;
}

.spacer {
  height: 48px;
  margin-bottom: 2rem;
}

.spacer.double {
  height: 96px;
}
</style>

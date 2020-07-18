<template>
  <div class="container" :style="{height: size, width: size}">
    <img :src="url" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: String,
    firstName: String,
    lastName: String,
    size: {
      type: String,
      default: "150px",
    },
  },
  computed: {
    alt() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};
</script>

<style>
.container {
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex: 0 0 auto;
}
</style>
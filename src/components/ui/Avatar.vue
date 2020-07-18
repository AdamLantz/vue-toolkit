<template>
  <div class="container">
    <img :src="url" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: String,
    firstName: String,
    lastName: String
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
    height: 150px;
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}
</style>
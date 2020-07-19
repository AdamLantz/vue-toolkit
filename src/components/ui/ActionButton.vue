<template>
  <button :type="type" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
};
</script>

<style scoped>
button {
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  background-color: #236e96;
  border-radius: 6px;
  color: #ffffff;
  min-width: 80px;
  cursor: pointer;
}
</style>
<template>
  <div
    :role="isClickable ? 'button' : null"
    :class="{card: true, clickable: isClickable}"
    :style="{
        boxShadow: hover ? getHoverShadow(elevation) : getShadow(elevation),
        padding: `${padding}px`,
    }"
    @mouseover="handleHover"
    @mouseleave="handleUnhover"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>

<script>
import { getShadow, getHoverShadow } from "./helpers/getShadow";

export default {
  name: "Card",
  data: () => ({
    hover: false
  }),
  props: {
    elevation: {
      type: Number,
      default: 0
    },
    isClickable: Boolean,
    padding: Number,
  },
  methods: {
    getShadow,
    getHoverShadow,
    handleHover() {
      if (this.isClickable) {
        this.hover = true;
      }
    },
    handleUnhover() {
      if (this.isClickable) {
        this.hover = false;
      }
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 6px;
  background-color: #ffffff;
}

.clickable {
  cursor: pointer;
}
</style>
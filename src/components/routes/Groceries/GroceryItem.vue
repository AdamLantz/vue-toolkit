<template>
  <Card :elevation="2" @click="$emit('click',$event)" :class="{item: true, checked}" is-clickable>
    <div class="inner">{{name}}</div>
  </Card>
</template>

<script>
import Card from "../../ui/Card";
export default {
  name: "GroceryItem",
  components: {
    Card
  },
  props: {
    name: String,
    checked: Boolean
  }
};
</script>

<style>
.checked {
  text-decoration: line-through;
}

.item {
  font-size: 1.5rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.checked .inner {
  opacity: 0.4;
}
</style>
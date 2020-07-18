<template>
  <div class="row">
    <label :class="{focused}">{{label}}</label>
    <input
      v-model="item"
      type="text"
      @keypress.enter="addItem()"
      @focus="focused = true"
      @blur="focused = false"
    />
    <ActionButton @click="addItem()">Add</ActionButton>
  </div>
</template>

<script>
import ActionButton from "../../ui/ActionButton";

export default {
  name: "NewItemInput",
  components: {
    ActionButton
  },
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      item: "",
      focused: false
    };
  },
  methods: {
    addItem() {
      this.$emit("item-added", this.item);
      this.item = "";
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}

input {
  height: 3rem;
  font-size: 1.5rem;
  border: none;
  outline: none;
  border: 1px solid #236e96;
  border-radius: 6px;
  color: #2c3e50;
  margin-right: 1rem;
  width: 100%;
  padding: 0 0.5rem;
}

input:focus {
  border-width: 2px;
}

label {
  position: absolute;
  color: #236e96;
  background-color: #ffffff;
  top: -10px;
  left: 1rem;
  padding: 0 0.25rem;
}

label.focused {
  font-weight: bold;
}
</style>
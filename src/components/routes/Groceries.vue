<template>
  <div>
    <div class="entry">
      <Card class="entry-card" :elevation="2" :padding="16">
        <NewItemInput @item-added="handleItemAdded($event)" label="Grocery Item" />
      </Card>
    </div>
    <div class="list" v-if="uncheckedItems.length">
      <GroceryItem
        v-for="item in uncheckedItems"
        :key="item.id"
        :name="item.name"
        @click="toggleGroceryItem(item)"
      ></GroceryItem>
    </div>
    <div class="divider" v-if="uncheckedItems.length && checkedItems.length">
      <div class="divider-inner"></div>
    </div>
    <div class="list" v-if="checkedItems.length">
      <GroceryItem
        checked
        v-for="item in checkedItems"
        :key="item.id"
        :name="item.name"
        @click="toggleGroceryItem(item)"
      ></GroceryItem>
    </div>
  </div>
</template>

<script>
import Card from "../ui/Card";
import NewItemInput from "./Groceries/NewItemInput";
import GroceryItem from "./Groceries/GroceryItem";

export default {
  components: {
    Card,
    NewItemInput,
    GroceryItem
  },
  computed: {
    checkedItems: function() {
      return this.$store.state.groceryItems.filter(function(i) {
        return i.checked;
      });
    },
    uncheckedItems: function() {
      return this.$store.state.groceryItems.filter(function(i) {
        return !i.checked;
      });
    }
  },
  methods: {
    handleItemAdded(name) {
      this.$store.commit("addGroceryItem", name);
    },
    toggleGroceryItem(item) {
      this.$store.commit("toggleGroceryItem", item);
    }
  }
};
</script>

<style scoped>
.list {
  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.entry {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.entry-card {
  min-width: 300px;
  width: 40vw;
  max-width: 800px;
}

.divider {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.divider > .divider-inner {
  width: 80vw;
  height: 2px;
  background-color: #2c3e50;
}
</style>
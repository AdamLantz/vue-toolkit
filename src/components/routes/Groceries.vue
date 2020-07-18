<template>
  <div>
    <div class="entry">
      <Card class="entry-card" :elevation="2" :padding="16">
        <NewItemInput @item-added="handleItemAdded($event)" label="Grocery Item" />
      </Card>
    </div>
    <template v-for="(items, index) in [uncheckedItems, checkedItems]">
      <div :key="index" class="list" v-if="items.length">
        <GroceryItem
          v-for="item in items"
          :key="item.id"
          :name="item.name"
          :checked="item.checked"
          @click="toggleGroceryItem(item)"
        ></GroceryItem>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../ui/Card";
import NewItemInput from "./Groceries/NewItemInput";
import GroceryItem from "./Groceries/GroceryItem";

export default {
  components: {
    Card,
    NewItemInput,
    GroceryItem
  },
  created(){
    this.$store.dispatch('fetchGroceryItems');
  },
  computed: {
    ...mapGetters({
      checkedItems: "checkedGroceryItems",
      uncheckedItems: "uncheckedGroceryItems"
    })
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
</style>
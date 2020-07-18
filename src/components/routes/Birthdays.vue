<template>
  <div>
    <Navigation />
    <div class="list">
      <PersonCard v-for="person in people" :key="person.id" :person="person" @click="viewDetails(person)" />
    </div>
  </div>
</template>

<script>
import Navigation from "../Navigation";
import PersonCard from "./Birthdays/PersonCard";
import birthdayMockData from '../../mock_data/birthdays';

export default {
  name: "Birthdays",
  methods: {
    viewDetails(person) {
      console.log(person);
    }
  },
  data: function() {
    return {
      people: birthdayMockData,
    };
  },
  components: {
    Navigation,
    PersonCard
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
</style>>
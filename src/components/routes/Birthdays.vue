<template>
  <div>
    <Navigation :showSecondaryNav="$route.params.id !== undefined">
      <template v-slot:secondaryNav>
          <router-link to="/birthdays">Back</router-link>
      </template>
    </Navigation>
    <div class="details-container">
      <router-view></router-view>
    </div>
    <div class="loading" v-if="!people.length">Loading...</div>
    <div class="list" v-if="!$route.params.id">
      <PersonCard
        v-for="person in people"
        :key="person.id"
        :person="person"
        @click="viewDetails(person)"
      />
    </div>
  </div>
</template>

<script>
import Navigation from "../Navigation";
import PersonCard from "./Birthdays/PersonCard";
import { actions, getters } from "../../store/modules/birthdays/index";

export default {
  name: "Birthdays",
  created() {
    if (!this.$store.state.birthdays.peopleInitialized) {
      this.$store.dispatch(actions.FETCH_SUMMARY);
    }
  },
  computed: {
    people() {
      return this.$store.getters[getters.getBirthdaySummary];
    }
  },
  methods: {
    viewDetails(person) {
      this.$router.push({ path: `/birthdays/${person.id}` });
    }
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
  padding: 0 1rem;
}
.details-container {
  margin: 0 1rem;
}
.loading{
  padding: 0 1rem;
  font-size: 2rem;
}
</style>>
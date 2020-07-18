<template>
  <Card :elevation="2" class="info">
    <div v-if="details" class="row">
      <Avatar :url="details.photoURL" :firstName="details.firstName" :lastName="details.lastName" />
      <div class="column">
        <div class="name">{{`${details.firstName} ${details.lastName}`}}</div>
        <div class="birthdate">{{`${writtenDate}`}}</div>
        <div v-if="!details.likes || !details.dislikes">Loading...</div>
        <div class="row must" v-else>
          <div class="likes column" v-if="details.likes && details.likes.length">
            <div>{{`${details.firstName} likes:`}}</div>
            <ul>
              <li v-for="like in details.likes" :key="like">{{like}}</li>
            </ul>
          </div>
          <div class="dislikes column" v-if="details.dislikes && details.dislikes.length">
            <div>{{`${details.firstName} dislikes:`}}</div>
            <ul>
              <li v-for="dislike in details.dislikes" :key="dislike">{{dislike}}</li>
            </ul>
          </div>
          <div
            v-if="!details.likes.length && !details.dislikes.length"
          >{{`There's no data for ${details.firstName}'s likes or dislikes. Maybe you should get to know them better!`}}</div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </Card>
</template>

<script>
import { actions, getters } from "../../../store/modules/birthdays";
import Card from "../../ui/Card";
import Avatar from "../../ui/Avatar";
import writtenDate from "../../ui/helpers/writtenDate";

export default {
  name: "BirthdayDetails",
  components: {
    Card,
    Avatar
  },
  created() {
    this.$store.dispatch(actions.FETCH_DETAILS, this.$props.id);
  },
  computed: {
    details() {
      const detailedInfo = this.$store.getters[getters.getBirthdayDetails](
        this.$props.id
      );
      if (detailedInfo.loaded && !detailedInfo.error) {
        return detailedInfo;
      }
      if (this.$store.state.birthdays.peopleInitialized) {
        const summaryInfo = this.$store.getters[
          getters.getBirthdaySummary
        ].find(p => p.id === this.$props.id);
        return { ...summaryInfo, likes: null, dislikes: null };
      }
      return null;
    },
    writtenDate: function() {
      return writtenDate(this.details.dateOfBirth);
    }
  },
  props: {
    id: Number
  }
};
</script>

<style>
.info {
  padding: 1rem;
}

.row > *:not(:first-child) {
  margin-left: 1rem;
}

.column > *:not(:first-child) {
  margin-top: 0.5rem;
}

.row {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.name {
  font-size: 2rem;
}

.birthdate {
  font-size: 1.5rem;
}

@media screen and (max-width: 500px) {
  .row:not(.must) , .column {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
  .row > *:not(:first-child){
      margin-left: 0;
  }
}
</style>
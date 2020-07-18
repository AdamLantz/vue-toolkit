<template>
  <Card class="person" :elevation="2" @click="$emit('click', $event)" is-clickable>
    <Avatar :url="person.photoURL" :firstName="person.firstName" :lastName="person.lastName" />
    <div class="name">{{`${person.firstName} ${person.lastName}`}}</div>
    <div>{{writtenDate}}</div>
  </Card>
</template>

<script>
import Card from "../../ui/Card";
import Avatar from "../../ui/Avatar";
export default {
  name: "PersonCard",
  components: {
    Card,
    Avatar,
  },
  computed: {
    writtenDate: function() {
      return this.person.dateOfBirth.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  },
  props: {
    person: {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      photoURL: {
        type: String,
        required: false
      },
      dateOfBirth: {
        type: Date,
        required: true
      }
    }
  }
};
</script>

<style>
.person {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem 1.5rem 1rem;
}
.name {
    margin-top: 1rem;
    font-size: 1.25rem;
}
</style>
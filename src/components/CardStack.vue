<template>
  <div class="cardstack">
    <Card
      v-for="(card, dataa) in cards"
      :key="dataa"
      :cardData="card"
      v-on:setactivecard="$emit('setactivecard', card)"
    />
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "CardStack",

  components: {
    Card,
  },

  props: {
    cards: Array,
  },
};
</script>

<style>
.cardstack {
  margin: 2rem 0 12rem 0;
  display: grid;
  grid-auto-rows: 4rem;
}
</style>

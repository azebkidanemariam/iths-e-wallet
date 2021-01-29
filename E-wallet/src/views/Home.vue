<template>
  <main id="home">
    <Top :title="title" :cardType="cardType" />
    <Card :cardData="activeCard" />
    <CardStack :cards="cards" v-on:setactivecard="setActiveCard" />
    <a href="#" class="addcard-button" @click="toggleView">Add New Card</a>
  </main>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";

export default {
  name: "Home",

  props: {
    cards: Array,
    activeCard: Object,
  },

  components: {
    Top,
    Card,
    CardStack,
  },

  data() {
    return {
      title: "E-wallet",
      cardType: "active card",
    };
  },

  methods: {
    toggleView() {
      this.$emit("toggleview");
    },

    setActiveCard(card) {
      this.$emit("setactivecard", card);
    },
  },
};
</script>

<style>
a.addcard-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 2rem 0;
}

a.addcard-button:hover {
  background: #000;
  color: #ddd;
}

a.addcard-button:active {
  background: #000;
  color: #fff;
}
</style>

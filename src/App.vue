<template>
  <div id="app">
    <Home
      v-if="views.home"
      :cards="cards"
      :activeCard="activeCard"
      v-on:toggleview="views.home = !views.home"
      v-on:setactivecard="setActiveCard"
    />
    <AddCard
      v-if="!views.home"
      v-on:toggleview="views.home = !views.home"
      v-on:addcard="addCard"
    />
  </div>
</template>

<script>
import Home from "./views/Home";
import AddCard from "./views/AddCard";

export default {
  name: "App",
  components: {
    Home,
    AddCard,
  },

  data() {
    return {
      views: {
        home: true,
      },

      activeCard: {
        vendor: "Bitcoin Inc",
        cardHolder: "Christoffer Wallenberg",
        cardNumber: "1234 5678 9101 1123",
        validUntil: { year: "22", month: "12" },
      },

      cards: [
        {
          vendor: "Ninja Bank",
          cardHolder: "Christoffer Wallenberg",
          cardNumber: "5544 5678 1212 1121",
          validUntil: { year: "20", month: "09" },
        },
        {
          vendor: "Blockchain Inc",
          cardHolder: "Christoffer Wallenberg",
          cardNumber: "1234 5678 9101 1121",
          validUntil: { year: "23", month: "12" },
        },
        {
          vendor: "Evil Corp",
          cardHolder: "Christoffer Wallenberg",
          cardNumber: "6666 6666 6666 6666",
          validUntil: { year: "23", month: "10" },
        },
      ],
    };
  },

  methods: {
    addCard(card) {
      this.cards.push(card);
    },

    setActiveCard(card) {
      this.activeCard = card;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=PT+Mono|Source+Sans+Pro:600,700&display=swap");

body {
  margin: 0;
}

#app {
  max-width: 24rem;
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: "PT Mono", monospace;
  padding: 1rem;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3 {
  font-family: "Source Sans Pro", sans-serif;
}
</style>

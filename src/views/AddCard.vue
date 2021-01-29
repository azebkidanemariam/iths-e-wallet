<template>
  <div id="addcard">
    <Top :title="title" :cardType="cardType" />
    <Card :cardData="card" />
    <CardForm @updatecard="updateCard" />
    <a href="#" class="addcardbtn" @click="addCard">Add Card</a>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";

export default {
  name: "AddCard",
  components: {
    Top,
    Card,
    CardForm,
  },

  data() {
    return {
      title: "Add new card",
      cardType: "New card",
      card: {
        vendor: "Blank",
        cardHolder: "",
        cardNumber: "",
        validUntil: { year: "YY", month: "MM" },
      },
    };
  },

  methods: {
    updateCard(updatedCard) {
      this.card = updatedCard;
    },

    addCard() {
      this.$emit("addcard", this.card);

      this.card = {
        vendor: "Blank",
        cardHolder: "",
        cardNumber: "",
        validUntil: { year: "YY", month: "MM" },
      };

      this.$emit("toggleview");
    },
  },
};
</script>

<style>
a.addcardbtn {
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

a.addcardbtn:hover {
  background: #000;
  color: #ddd;
}

a.addcardbtn:active {
  background: #000;
  color: #fff;
}
</style>
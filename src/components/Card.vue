<template>
  <div class="card" :class="vendorTypes" v-on:click="setActiveCard">
    <header>
      <img
        v-if="cardData.vendor == 'Bitcoin Inc'"
        src="@/assets/chip-dark.svg"
        alt="chip"
      />

      <img
        v-if="cardData.vendor !== 'Bitcoin Inc'"
        src="@/assets/chip-light.svg"
        alt="chip"
      />

      <img
        v-if="cardData.vendor == 'Evil Corp'"
        src="@/assets/vendor-evil.svg"
        alt="Evil Corp"
      />

      <img
        v-if="cardData.vendor == 'Blockchain Inc'"
        src="@/assets/vendor-blockchain.svg"
        alt="Blockchain Inc"
      />

      <img
        v-if="cardData.vendor == 'Ninja Bank'"
        src="@/assets/vendor-ninja.svg"
        alt="Ninja Bank"
      />

      <img
        v-if="cardData.vendor == 'Bitcoin Inc'"
        src="@/assets/vendor-bitcoin.svg"
        alt="Bitcoin Inc"
      />
    </header>

    <section class="card-number">
      {{ cardData.cardNumber }}
    </section>

    <section class="holder-info">
      <div class="holder-name">
        <span>Cardholder Name</span>

        <p>{{ cardData.cardHolder }}</p>
      </div>

      <div class="valid">
        <span>Valid until</span>

        <p>{{ cardData.validUntil.month }}/{{ cardData.validUntil.year }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    cardData: Object,
  },

  data() {
    return {};
  },

  methods: {
    setActiveCard() {
      if (this.cardData.vendor !== "Blank") {
        this.$emit("setactivecard", this.cardData);
      }
    },
  },

  computed: {
    vendorTypes() {
      if (this.cardData.vendor === "Evil Corp") {
        return "evil";
      } else if (this.cardData.vendor === "Bitcoin Inc") {
        return "bitcoin";
      } else if (this.cardData.vendor === "Ninja Bank") {
        return "ninja";
      } else if (this.cardData.vendor === "Blockchain Inc") {
        return "blockchain";
      } else {
        return "blank";
      }
    },
  },
};
</script>

<style>
.card {
  max-width: 384px;
  height: 220px;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 0.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-auto-rows: 2.8rem;
}

.bitcoin {
  background: #ffae34;
  color: #222;
}

.card header {
  display: flex;
  grid-column: auto / span 2;
  grid-row: auto / span 2;
  justify-content: space-between;
  align-items: flex-start;
}

.card header img {
  opacity: 0.8;
}

.card header [alt="chip"] {
  align-self: flex-end;
  opacity: 1;
}

.card section.card-number {
  grid-column: auto / span 2;
  grid-row: auto / span 1;
  display: flex;
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0 0;
  text-transform: uppercase;
}

.ninja {
  background: #222222;
  color: white;
}

.blank {
  background: #d0d0d0;
}

.card section.holder-info {
  display: flex;
  grid-column: auto / span 2;
  grid-row: auto / span 1;
}

.card section div span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem 0;
}

.card section div.valid span {
  text-align: right;
}

.card section div p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}

.card section div.valid p {
  text-align: right;
}

.card section.info div.holder-name {
  flex: 1;
}

.evil {
  background: #f33355;
  color: white;
}

.blockchain {
  background: #8b58f9;
  color: white;
}
</style>


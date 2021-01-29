<template>
  <section class="clientInformationForm">
    <label for="number" class="cardInfo-1">Card Number</label>

    <input
      type="text"
      name="number"
      class="cardInfo-1"
      v-model="card.cardNumber"
      maxlength="16"
      @keyup="updateCard"
      placeholder="XXXX XXXX XXXX XXXX"
    />

    <label for="cardholder" class="col-2">Cardholder Name</label>

    <input
      type="text"
      name="cardholder"
      class="cardInfo-1"
      v-model="card.cardHolder"
      @keyup="updateCard"
      placeholder="Firstname Lastname"
    />

    <label for="month" class="carddInfo-2">Month</label>

    <label for="year" class="carddInfo-2">Year</label>

    <select
      name="month"
      v-model="card.validUntil.month"
      class="carddInfo-2"
      @change="updateCard"
    >
      <option value="01">01</option>

      <option value="02">02</option>

      <option value="03">03</option>

      <option value="04">04</option>

      <option value="05">05</option>

      <option value="06">06</option>

      <option value="07">07</option>

      <option value="08">08</option>

      <option value="09">09</option>

      <option value="10">10</option>

      <option value="11">11</option>

      <option value="12">12</option>
    </select>

    <select
      name="month"
      v-model="card.validUntil.year"
      class="carddInfo-2"
      @change="updateCard"
    >
      <option value="21">21</option>

      <option value="22">22</option>

      <option value="23">23</option>

      <option value="24">24</option>
    </select>

    <label for="vendor" class="col-2">Vendor</label>

    <select
      name="vendor"
      class="cardInfo-1"
      v-model="card.vendor"
      @change="updateCard"
    >
      <option value="Bitcoin Inc">Bitcoin Inc</option>

      <option value="Blockchain Inc">Blockchain Inc</option>

      <option value="Evil Corp">Evil Corp</option>

      <option value="Ninja Bank">Ninja Bank</option>
    </select>
  </section>
</template>

<script>
export default {
  name: "ClientInformationForm",

  props: {
    cardData: Object,
  },

  data() {
    return {
      card: {
        vendor: "Blank",

        cardHolder: "",

        cardNumber: "",

        validUntil: {
          year: "YY",

          month: "MM",
        },
      },
    };
  },

  methods: {
    validFormatter() {
      if (this.card.validUntil.length === 2) {
        this.card.validUntil += "/";
      }
    },

    updateCard() {
      let card = {
        vendor: this.card.vendor,

        cardHolder: this.card.cardHolder,

        cardNumber: this.spaceBtwnCardnum,

        validUntil: this.card.validUntil,
      };

      this.$emit("updatecard", card);
    },
  },

  computed: {
    spaceBtwnCardnum() {
      let numberSpace = " ";
      for (let i = 0; i < this.card.cardNumber.length; i++) {
        numberSpace += this.card.cardNumber[i];
        if ((i + 1) % 4 == 0) {
          numberSpace += " ";
        }
      }
      return numberSpace;
    },
  },
};
</script>

<style>
.clientInformationForm {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 0 1rem;
}

.clientInformationForm label {
  padding: 0.25rem 0;

  font-size: 0.7rem;

  text-transform: uppercase;
}

.clientInformationForm input,
select {
  border: 1px solid black;

  border-radius: 0.25rem;

  padding: 0.5rem;

  height: 2.6rem;

  box-sizing: border-box;

  font-size: 1rem;
}

.cardInfo-2 {
  grid-column: auto / span 1;
}

.cardInfo-1 {
  grid-column: auto / span 2;
}
</style>

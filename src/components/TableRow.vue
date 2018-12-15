<template>
  <div class="table-row">
    <div class="column">{{ id }}</div>
    <div class="column">{{ name }}</div>
    <div class="column">{{ description }}</div>
    <div class="column">{{ date }}</div>
    <div class="column">{{ convertedCurrency }}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    date: {
      required: true,
      type: String
    },
    amount: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      currencyFormatter: Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
    }
  },
  computed: {
    convertedCurrency() {
      // const currencyFormatter = new Intl.NumberFormat('en-US', {
      //   style: 'currency',
      //   currency: 'USD',
      //   minimumFractionDigits: 2
      // })
      return this.currencyFormatter.format(this.amount / 100)
      // return this.amount < 0 ? `-$${Math.abs((this.amount / 100).toFixed(2))}` : `$${(this.amount / 100).toFixed(2)}`
    }
  }
}
</script>

<style lang="scss">
.table-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  .column {
    padding: 0.5rem;
  }
}
</style>

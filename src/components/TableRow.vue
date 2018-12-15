<template>
  <div class="table-row">
    <div class="column">{{ id }}</div>
    <div class="column">{{ name }}</div>
    <DescriptionForm :id="id" :description="description" />
    <div class="column">{{ formattedDate }}</div>
    <div class="column">{{ formattedCurrency }}</div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import DescriptionForm from '@/components/DescriptionForm'

export default {
  components: {
    DescriptionForm
  },
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
    formattedCurrency() {
      return this.currencyFormatter.format(this.amount / 100)
    },
    formattedDate() {
      return dayjs(this.date).format('MMM DD YYYY h:mmA')
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

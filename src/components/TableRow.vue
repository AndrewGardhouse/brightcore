<template>
  <div class="table-row">
    <div class="column">
      <p>{{ id }}</p>
    </div>
    <div class="column">
      <p>{{ name }}</p>
    </div>
    <DescriptionForm :id="id" :description="description" />
    <div class="column">
      <p>{{ formattedDate }}</p>
    </div>
    <div class="column">
      <p>{{ formattedCurrency }}</p>
    </div>
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
    display: flex;
    p {
      margin-top: auto;
      margin-bottom: auto;
    }
  }
}
</style>

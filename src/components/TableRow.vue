<template>
  <div class="table-row">
    <div class="column">
      <p class="mobile-label">ID:</p>
      <p class="column-text" v-text="id"></p>
    </div>
    <div class="column">
      <p class="mobile-label">Name:</p>
      <p class="column-text" v-text="name"></p>
    </div>
    <DescriptionForm :id="id" :description="description" />
    <div class="column">
      <p class="mobile-label">Date:</p>
      <p class="column-text" v-text="formattedDate"></p>
    </div>
    <div class="column">
      <p class="mobile-label">Amount:</p>
      <p class="column-text" v-text="formattedCurrency"></p>
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
@import '../assets/variables';

.table-row {
  display: grid;
  grid-template-columns: 1fr;
  .column {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    .mobile-label {
      font-weight: bold;
      margin-bottom: 0.25rem;
    }
    .column-text {
      margin-top: auto;
      margin-bottom: auto;
    }
  }
  @media #{$breakpoint-md-and-up} {
    grid-template-columns: repeat(5, 1fr);
    .column {
      .mobile-label {
        display: none;
      }
    }
  }
}
</style>

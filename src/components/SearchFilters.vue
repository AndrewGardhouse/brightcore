<template>
  <form class="search-filters" @submit.prevent="searchByFilters">
    <h2 class="filter-title">Filters:</h2>
    <div class="row">
      <div class="field">
        <label class="main-label" for="search-text">Keyword: </label>
        <input id="main-label" type="text" name="search-text" v-model="filters.searchText">
      </div>
      <div class="field">
        <label class="main-label">Date: </label>
        <div class="ranges">
          <div class="range min">
            <label for="min-date">Min: </label>
            <input id="min-date"
                   type="date"
                   name="min-date"
                   v-model="filters.dateRangeMin"
                   :min="lowestDate"
                   :max="highestDate">
          </div>
          <div class="range max">
            <label for="max-date">Max: </label>
            <input id="max-date"
                   type="date"
                   name="max-date"
                   v-model="filters.dateRangeMax"
                   :min="lowestDate"
                   :max="highestDate">
          </div>
        </div>
      </div>
      <div class="field">
        <label class="main-label">Amount($): </label>
        <div class="ranges">
          <div class="range min">
            <label for="min-amount">Min: </label>
            <input id="min-amount"
                   type="number"
                   name="min-amount"
                   v-model="filters.amountRangeMin"
                   :min="lowestAmount"
                   :max="highestAmount"
                   step=".01">
          </div>
          <div class="range max">
            <label for="max-amount">Max: </label>
            <input id="max-amount"
                   type="number"
                   name="max-amount"
                   v-model="filters.amountRangeMax"
                   :min="lowestAmount"
                   :max="highestAmount"
                   step=".01">
          </div>
        </div>
      </div>
    </div>
    <div class="buttons-wrapper">
      <button type="submit" class="btn submit">Search</button>
      <button type="reset" class="btn cancel" @click="clearFilters">Clear Filters</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import dayjs from 'dayjs'

export default {
  data() {
    return {
      filters: {
        searchText: '',
        amountRangeMin: '',
        amountRangeMax: '',
        dateRangeMin: '',
        dateRangeMax: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'lowestAmount',
      'highestAmount',
      'lowestDate',
      'highestDate'
    ]),
    ...mapState([
      'searchText',
      'amountRangeMin',
      'amountRangeMax',
      'dateRangeMin',
      'dateRangeMax'
    ])
  },
  mounted() {
    if (this.searchText) {
      this.filters.searchText = this.searchText
    }
    if (this.amountRangeMin) {
      this.filters.amountRangeMin = this.amountRangeMin / 100
    }
    if (this.amountRangeMax) {
      this.filters.amountRangeMax = this.amountRangeMax / 100
    }
    if (this.dateRangeMin) {
      this.filters.dateRangeMin = dayjs(this.dateRangeMin).format('YYYY-MM-DD')
    }
    if (this.dateRangeMax) {
      this.filters.dateRangeMax = dayjs(this.dateRangeMax).format('YYYY-MM-DD')
    }
  },
  methods: {
    ...mapActions([
      'setSearchFilters'
    ]),
    formatAmount(amount) {
      return amount ? amount * 100 : ''
    },
    formatDate(date) {
      return date ? new Date(date) : ''
    },
    clearFilters() {
      Object.keys(this.filters).forEach(filter => this.filters[filter] = '')
      this.setSearchFilters(this.filters)
    },
    searchByFilters() {
      this.setSearchFilters({
        ...this.filters,
        amountRangeMin: this.formatAmount(this.filters.amountRangeMin),
        amountRangeMax: this.formatAmount(this.filters.amountRangeMax),
        dateRangeMin: this.formatDate(this.filters.dateRangeMin),
        dateRangeMax: this.formatDate(this.filters.dateRangeMax)
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/variables';

.search-filters {
  margin-bottom: 1.5rem;
  .filter-title {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .row {
    margin-bottom: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    .field {
      display: flex;
      flex-direction: column;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      margin-bottom: 1rem;
      .main-label {
        margin-bottom: 0.5rem;
      }
      .ranges {
        display: flex;
        .range {
          display: flex;
          width: 100%;
          label {
            margin-top: auto;
            margin-bottom: auto;
            font-size: 0.9rem;
          }
          &.min {
            margin-right: 0.25rem;
          }
          &.max {
            margin-left: 0.25rem;
          }
          input {
            width: 100%;
            margin-left: 0.25rem;
          }
        }
      }
    }
    @media #{$breakpoint-md} {
      .field {
        margin-bottom: 0;
        .ranges {
          flex-direction: column;
          .range {
            justify-content: space-between;
            &.min {
              margin-bottom: 0.25rem;
              margin-right: 0;
            }
            &.max {
              margin-left: 0;
            }
            input {
              width: 75%;
            }
          }
        }
      }
    }
    @media #{$breakpoint-md-and-up} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
}
</style>

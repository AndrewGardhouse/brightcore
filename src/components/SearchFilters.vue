<template>
  <form class="search-filters">
    <h2>Search Filters:</h2>
    <div class="row">
      <div class="field">
        <label class="main-label" for="search-text">Search By Keyword: </label>
        <input type="text" name="search-text" v-model="searchText">
      </div>
      <div class="field">
        <label class="main-label">Search By Date: </label>
        <div class="ranges">
          <div class="range min">
            <label for="min-date">Min: </label>
            <input type="date" name="min-date" v-model="minDate">
          </div>
          <div class="range max">
            <label for="max-date">Max: </label>
            <input type="date" name="man-date" v-model="maxDate">
          </div>
        </div>
      </div>
      <div class="field">
        <label class="main-label">Search By Amount: </label>
        <div class="ranges">
          <div class="range min">
            <label for="min-amount">Min: </label>
            <input type="number" name="min-amount" v-model="minAmount">
          </div>
          <div class="range max">
            <label for="max-amount">Max: </label>
            <input type="number" name="max-amount" v-model="maxAmount">
          </div>
        </div>
      </div>
    </div>
    <div class="buttons-wrapper">
      <button>Search</button>
      <button>Clear Filters</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      minAmount: '',
      maxAmount: '',
      minDate: '',
      maxDate: '',
    }
  }
}
</script>

<style lang="scss">
.search-filters {
  margin-bottom: 1.5rem;
  h2 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .row {
    margin-bottom: 0.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .field {
      display: flex;
      flex-direction: column;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      .main-label {
        margin-bottom: 0.5rem;
      }
      .ranges {
        display: flex;
        .range {
          display: flex;
          width: 100%;
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

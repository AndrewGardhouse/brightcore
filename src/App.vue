<template>
  <div id="app">
    <h1 class="title">Brightcore Table</h1>
    <SearchFilters />
    <Table />
  </div>
</template>

<script>
import Table from './components/Table.vue'
import SearchFilters from './components/SearchFilters.vue'

export default {
  name: 'app',
  components: {
    SearchFilters,
    Table
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(26,26,26,.7);
  margin-left: 4rem;
  margin-right: 4rem;
}

.title {
  text-align: center;
}
</style>

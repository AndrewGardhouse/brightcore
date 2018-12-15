<template>
  <div id="app">
    <h1 class="title">Brightcore Table</h1>
    <Table />
  </div>
</template>

<script>
import Table from './components/Table.vue'

export default {
  name: 'app',
  components: {
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
  margin-top: 60px;
}

.title {
  text-align: center;
}
</style>

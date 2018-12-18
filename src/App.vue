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

textarea, input {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  padding: 0.25rem;
  color: rgba(26, 26, 26, .9);
  border-color: rgba(26, 26, 26, 0.7);
  border-width: 1px;
  resize: none;
}

input[type="date"] {
  height: 16px;
}

.title {
  text-align: center;
}

.btn {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  border: none;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  &.submit {
    background-color: rgba(63, 137, 56, 0.7);
    &:hover {
      background-color: rgba(63, 137, 56, 1);
    }
  }
  &.cancel {
    background-color: rgba(201, 58, 51, 0.7);
    &:hover {
      background-color: rgba(201, 58, 51, 1);
    }
  }
}
</style>

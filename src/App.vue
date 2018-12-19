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
@import './assets/variables';

body {
  margin: 0;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  @media #{$breakpoint-md} {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media #{$breakpoint-lg} {
    margin-left: 4rem;
    margin-right: 4rem;
  }
}

textarea, input {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  padding: 0.25rem;
  color: $font;
  border-color: $font;
  border-width: 1px;
  resize: none;
  outline: none;
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
  line-height: 1.7;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s;
  &.submit {
    background-color: $btn-submit;
    &:hover {
      background-color: $btn-submit-hover;
    }
  }
  &.cancel {
    background-color: $btn-cancel;
    &:hover {
      background-color: $btn-cancel-hover;
    }
  }
}
</style>

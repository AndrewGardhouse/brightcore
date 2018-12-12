<template>
  <div class="table-row">
    <div class="column">{{ id }}</div>
    <div class="column">{{ name }}</div>
    <div class="column">{{ description }}</div>
    <div class="column">{{ date }}</div>
    <div class="column">{{ amount }}</div>
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

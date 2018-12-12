<template>
  <div class="table-header" :style="{ gridTemplateColumns: `repeat(${tableHeaders.length}, 1fr)` }">
    <div v-for="(header, index) in tableHeaders"
         :key="index"
         class="header-column">
      <p class="text">{{ header }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'tableHeaders'
    ])
  }
}
</script>

<style lang="scss">
.table-header {
  display: grid;
  border-bottom: 1px solid #2c3e50;
  .header-column {
    display: flex;
    padding: 0.5rem;
    .text {
      margin: 0;
    }
  }
}
</style>

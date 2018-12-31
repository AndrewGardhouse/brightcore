<template>
  <div class="table-row-count" v-if="tableRowCount > 0">
    <h2 v-text="tableRowCountText"></h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'tableRowCount'
    ]),
    tableRowCountText() {
      if (this.tableRowCount == 1) {
        return '1 Row'
      } else {
        return `${this.tableRowCount} Rows`
      }
    }
  }
}
</script>

<style lang="scss">
</style>

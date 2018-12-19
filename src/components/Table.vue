<template>
  <div class="table-wrapper">
    <TableHeaders />
    <div class="row-wrapper" v-if="filteredSortedTableData.length > 0">
      <TableRow v-for="row in filteredSortedTableData"
                :key="row['ID']"
                :id="row['ID']"
                :name="row['Name']"
                :description="row['Description']"
                :date="row['Date']"
                :amount="row['Amount']" />
    </div>
    <div v-else>
      <h2 class="no-rows">0 matches</h2>
    </div>
  </div>
</template>

<script>
import TableHeaders from './TableHeaders.vue'
import TableRow from './TableRow.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TableHeaders,
    TableRow
  },
  computed: {
    ...mapGetters([
      'filteredSortedTableData'
    ])
  }
}
</script>

<style lang="scss">
.table-wrapper {
  border: 1px solid #2c3e50;
  .row-wrapper {
    overflow: scroll;
    .table-row:nth-child(even) {
      background-color: #e6eeef;
    }
  }
  .no-rows {
    text-align: center;
  }
}
</style>

<template>
  <div class="table-wrapper">
    <TableHeaders />
    <TableRow v-for="row in filteredSortedTableData"
              :key="row['ID']"
              :id="row['ID']"
              :name="row['Name']"
              :description="row['Description']"
              :date="row['Date']"
              :amount="row['Amount']" />
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
  .table-row:nth-child(even) {
    background-color: #e6eeef;
  }
}
</style>

<template>
  <div class="table-wrapper">
    <TableHeaders />
    <TableRow v-for="row in sortedTableData"
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
      'sortedTableData'
    ])
  }
}
</script>

<style lang="scss">
.table-wrapper {
  border: 1px solid #2c3e50;
  margin-left: 4rem;
  margin-right: 4rem;
  .table-row:nth-child(even) {
    background-color: #e6eeef;
  }
}
</style>

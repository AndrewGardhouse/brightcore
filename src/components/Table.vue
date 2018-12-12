<template>
  <div class="table-wrapper">
    <TableHeader />
    <TableRow v-for="row in tableData"
              :key="row['ID']"
              :id="row['ID']"
              :name="row['Name']"
              :description="row['Description']"
              :date="row['Date']"
              :amount="row['Amount']" />
  </div>
</template>

<script>
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import { mapState } from 'vuex'

export default {
  components: {
    TableHeader,
    TableRow
  },
  computed: {
    ...mapState([
      'tableData'
    ])
  }
}
</script>

<style lang="scss">
.table-wrapper {
  border: 1px solid #2c3e50;
  margin-left: 4rem;
  margin-right: 4rem;
}
</style>

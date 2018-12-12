<template>
  <div class="table-wrapper">
    <TableHeader />
  </div>
</template>

<script>
import TableHeader from './TableHeader.vue'
import { mapState } from 'vuex'

export default {
  components: {
    TableHeader
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

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
</style>

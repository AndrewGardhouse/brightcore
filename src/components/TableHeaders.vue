<template>
  <div class="table-headers" :style="{ gridTemplateColumns: `repeat(${tableHeaderNames.length}, 1fr)` }">
    <Header v-for="(header, index) in tableHeaderNames"
            :key="index"
            :ref="header"
            @isClicked="resetSortIndexes"
            :header="header" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Header
  },
  computed: {
    ...mapState([
      'sortBy'
    ]),
    ...mapGetters([
      'tableHeaderNames'
    ])
  },
  methods: {
    resetSortIndexes() {
      this.tableHeaderNames.forEach((name) => {
        if (this.sortBy !== name) {
          this.$refs[name][0].sortDirectionIndex = 0
        }
      })
    }
  }
}
</script>

<style lang="scss">
.table-headers {
  display: grid;
  border-bottom: 1px solid #2c3e50;
  @media (max-width: 599px) {
    grid-template-columns: 1fr 1fr !important;
  }
}
</style>

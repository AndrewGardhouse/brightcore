<template>
  <div class="table-headers" :style="{ gridTemplateColumns: `repeat(${tableHeaderNames.length}, 1fr)` }">
    <Header v-for="(header, index) in tableHeaderNames"
            :key="index"
            :header="header" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mapGetters } from 'vuex'

export default {
  components: {
    Header
  },
  computed: {
    ...mapGetters([
      'tableHeaderNames'
    ])
  },
}
</script>

<style lang="scss">
.table-headers {
  display: grid;
  border-bottom: 1px solid #2c3e50;
}
</style>

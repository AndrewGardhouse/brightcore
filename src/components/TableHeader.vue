<template>
  <div class="table-header">

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
</style>

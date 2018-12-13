<template>
  <div class="table-headers" :style="{ gridTemplateColumns: `repeat(${tableHeaderNames.length}, 1fr)` }">
    <div v-for="(header, index) in tableHeaderNames"
         :key="index"
         class="header-column">
      <p class="text">{{ header }}</p>
      <button class="sort-column">
        <span class="desc">&#9663;</span>
        <span class="asc">&#9663;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'tableHeaderNames'
    ])
  },
}
</script>

<style lang="scss">
.table-header {
  display: grid;
  border-bottom: 1px solid #2c3e50;
  .header-column {
    display: flex;
    padding: 0.5rem;
    .text {
      margin: 0;
      margin-right: 0.5rem;
    }
    .sort-column {
      display: flex;
      flex-direction: column;
      padding: 0;
      background: transparent;
      border: none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      .desc, .asc {
        font-size: 1.2rem;
        line-height: 0.2;
        &.active {
          color: blue;
        }
      }
      .desc {
        transform: rotate(180deg);
        margin-top: auto;
      }
      .asc {
        margin-bottom: auto;
      }
    }
  }
}
</style>

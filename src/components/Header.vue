<template>
  <div class="header-column">
    <p class="text">{{ header }}</p>
    <button class="sort-column" @click="sortColumn">
      <span class="desc">&#9663;</span>
      <span class="asc">&#9663;</span>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    header: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      sortDirections: ['', 'asc', 'desc'],
      sortDirectionIndex: 0
    }
  },
  methods: {
    ...mapMutations([
      'setSortBy',
      'setSortDirection',
    ]),
    incrementSortIndex() {
      this.sortDirectionIndex++
      if (this.sortDirectionIndex > 2) {
        this.sortDirectionIndex = 0
      }
    },
    sortColumn() {
      this.incrementSortIndex()
      this.setSortBy(this.header)
      this.setSortDirection(this.sortDirections[this.sortDirectionIndex])
    }
  }
}
</script>

<style lang="scss">
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
        font-weight: bold;
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
</style>

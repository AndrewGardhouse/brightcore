<template>
  <div class="header-column" :class="{ active: sortBy === header && sortDirection }">
    <p class="text">{{ header }}</p>
    <button class="sort-column" @click="sortColumn">
      <span class="desc" :class="{ active: sortDirection == 'desc'  }">&#9663;</span>
      <span class="asc" :class="{ active: sortDirection == 'asc'  }">&#9663;</span>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
  computed: {
    ...mapState([
      'sortBy',
      'sortDirection'
    ])
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
      this.$emit('isClicked', this.header)
    }
  }
}
</script>

<style lang="scss">
.header-column {
  display: flex;
  padding: 0.5rem;
  &.active {
    .desc, .asc {
      &.active {
        color: rgba(33, 157, 166, 0.7);
        font-weight: bold;
      }
    }
  }
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

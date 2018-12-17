export default {
  updateTableRow(state, payload) {
    const row = state.tableData.find(row => row['ID'] === payload['ID'])
    Object.assign(row, payload);
  },
  setSortBy(state, value) {
    state.sortBy = value
  },
  setSortDirection(state, value) {
    state.sortDirection = value
  },
  setSearchText(state, value) {
    state.searchText = value
  },
  setAmountRangeMin(state, value) {
    state.amountRangeMin = value
  },
  setAmountRangeMax(state, value) {
    state.amountRangeMax = value
  },
  setDateRangeMin(state, value) {
    if (value === '') {
      state.dateRangeMin = ''
    } else {
      state.dateRangeMin = new Date(value)
    }
  },
  setDateRangeMax(state, value) {
    if (value === '') {
      state.dateRangeMax = ''
    } else {
      state.dateRangeMax = new Date(value)
    }
  }
}

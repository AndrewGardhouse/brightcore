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
  }
}

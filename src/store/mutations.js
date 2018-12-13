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
  sortByColumn(state, payload) {
    if (payload.direction) {
      const tableDataClone = JSON.parse(JSON.stringify(state.tableData))
      state.filteredTableData = tableDataClone.sort((a, b) => {
        if (payload.direction == 'desc') {
          if(a[payload.column] < b[payload.column]) { return 1 }
          if(a[payload.column] > b[payload.column]) { return -1 }
          return 0
        } else {
          if(a[payload.column] > b[payload.column]) { return 1 }
          if(a[payload.column] < b[payload.column]) { return -1 }
          return 0
        }
      })
    } else {
      state.filteredTableData = []
    }
  }
}

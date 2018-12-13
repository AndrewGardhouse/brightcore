export default {
  updateTableRow(state, payload) {
    const row = state.tableData.find(row => row['ID'] === payload['ID'])
    Object.assign(row, payload);
  },
  sortByColumn(state, payload) {
    if (payload.direction) {
      const tableDataClone = JSON.parse(JSON.stringify(state.tableData))
      state.filteredTableData = tableDataClone.sort((a, b) => {
        if (payload.direction == 'desc') {
          return a[payload.column] < b[payload.column]
        } else if (payload.direction == 'asc') {
          return a[payload.column] > b[payload.column]
        }
      })
    } else {
      state.filteredTableData = []
    }
  }
}

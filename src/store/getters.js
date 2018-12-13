export default {
  tableHeaderNames(state) {
    return Object.keys(state.tableData[0])
  },
  sortedTableData(state) {
    if (state.sortBy && state.sortDirection) {
      return [...state.tableData].sort((a, b) => {
        if (state.sortDirection == 'desc') {
          if(a[state.sortBy] < b[state.sortBy]) { return 1 }
          if(a[state.sortBy] > b[state.sortBy]) { return -1 }
          return 0
        } else {
          if(a[state.sortBy] > b[state.sortBy]) { return 1 }
          if(a[state.sortBy] < b[state.sortBy]) { return -1 }
          return 0
        }
      })
    } else {
      return state.tableData
    }
  }
}

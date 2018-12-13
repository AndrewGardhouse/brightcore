export default {
  tableHeaderNames(state) {
    return Object.keys(state.tableData[0])
  },
  sortedTableData(state) {
    return state.filteredTableData.length > 0 ? state.filteredTableData : state.tableData
  }
}

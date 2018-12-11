export default {
  updateTableDescription(state, payload) {
    const row = state.tableData.find(row => row['ID'] === payload['ID'])
    Object.assign(row, payload);
  }
}

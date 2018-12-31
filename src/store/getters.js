import dayjs from 'dayjs'

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
  },
  tableDataBySearchText(state, getters) {
    if (state.searchText) {
      return [...getters.sortedTableData].filter((row) => {
        return row['ID'].toLowerCase().includes(state.searchText.toLowerCase()) ||
               row['Description'].toLowerCase().includes(state.searchText.toLowerCase()) ||
               row['Name'].toLowerCase().includes(state.searchText.toLowerCase())
      })
    } else {
      return getters.sortedTableData
    }
  },
  tableDataByAmountRange(state, getters) {
    const amountRangeMinIsNumber = typeof(state.amountRangeMin) == 'number'
    const amountRangeMaxIsNumber = typeof(state.amountRangeMax) == 'number'

    if (amountRangeMinIsNumber || amountRangeMaxIsNumber) {
      return [...getters.tableDataBySearchText].filter((row) => {
        if (amountRangeMinIsNumber && amountRangeMaxIsNumber) {
          return row['Amount'] >= state.amountRangeMin && row['Amount'] <= state.amountRangeMax
        }
        if (amountRangeMinIsNumber) {
          return row['Amount'] >= state.amountRangeMin
        }
        if (amountRangeMaxIsNumber) {
          return row['Amount'] <= state.amountRangeMax
        }
      })
    } else {
      return getters.tableDataBySearchText
    }
  },
  tableDataByDateRange(state, getters) {
    if (state.dateRangeMin || state.dateRangeMax) {
      return [...getters.tableDataByAmountRange].filter((row) => {
        const rowDate = new Date(row['Date'])
        if (state.dateRangeMin && state.dateRangeMax) {
          return rowDate >= new Date(state.dateRangeMin) && rowDate <= new Date(state.dateRangeMax)
        }
        if (state.dateRangeMin) {
          return rowDate >= new Date(state.dateRangeMin)
        }
        if (state.dateRangeMax) {
          return rowDate <= new Date(state.dateRangeMax)
        }
      })
    } else {
      return getters.tableDataByAmountRange
    }
  },
  filteredSortedTableData(state, getters) {
    return getters.tableDataByDateRange
  },
  tableRowCount(state, getters) {
    return getters.filteredSortedTableData.length
  },
  lowestAmount(state) {
    if (state.tableData) {
      const amount = state.tableData.reduce((min, row) => {
        return row['Amount'] < min ? row['Amount'] : min
      }, state.tableData[0]['Amount']) / 100

      return amount.toFixed(2)
    }
  },
  highestAmount(state) {
    if (state.tableData) {
      const amount = state.tableData.reduce((max, row) => {
        return row['Amount'] > max ? row['Amount'] : max
      }, state.tableData[0]['Amount']) / 100

      return amount.toFixed(2)
    }
  },
  lowestDate(state) {
    if (state.tableData) {
      const date = state.tableData.reduce((min, row) => {
        return row['Date'] < min ? row['Date'] : min
      }, state.tableData[0]['Date'])

      return dayjs(date).format('YYYY-MM-DD')
    }
  },
  highestDate(state) {
    if (state.tableData) {
      const date = state.tableData.reduce((max, row) => {
        return row['Date'] > max ? row['Date'] : max
      }, state.tableData[0]['Date'])

      return dayjs(date).format('YYYY-MM-DD')
    }
  }
}

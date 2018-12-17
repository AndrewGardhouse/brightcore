import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'

Vue.use(Vuex)

describe('getters', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        searchText: '',
        sortBy: '',
        sortDirection: '',
        amountRangeMin: '',
        amountRangeMax: '',
        dateRangeMin: '',
        dateRangeMax: '',
        tableData: [
          {
            'ID': '3471DA17-401F-9633-BF81-4CADA6FD5C79',
            'Name': 'Kyra Lester',
            'Description': 'Curabitur dictum. Phasellus in',
            'Date': '2017-07-23T04:24:49-07:00',
            'Amount': 34554
          },
          {
            'ID': '9F5C9912-936A-FB85-1EDB-9DA87BE7FF1E',
            'Name': 'Buckminster Alvarado',
            'Description': 'dui, in sodales elit erat vitae risus. Duis a mi',
            'Date': '2018-11-08T05:44:15-08:00',
            'Amount': 67708
          },
          {
            'ID': 'B743AC82-3613-13A2-2E42-E0C1F5CBF8A6',
            'Name': 'Athena Smith',
            'Description': 'massa lobortis ultrices. Vivamus rhoncus.',
            'Date': '2018-11-11T06:19:57-08:00',
            'Amount': 7367
          },
          {
            'ID': '74749D4F-A43F-34E8-A687-D54924B17251',
            'Name': 'Cameron Thompson',
            'Description': 'dolor. Fusce mi lorem, vehicula et, rutrum eu,',
            'Date': '2019-09-30T06:56:15-07:00',
            'Amount': 80760
          }
        ]
      },
      getters,
      mutations
    })
  })

  it('tableHeaderNames', () => {
    const expected = ['ID', 'Name', 'Description', 'Date', 'Amount']
    expect(store.getters.tableHeaderNames).toEqual(expected)
  })

  it('sortedTableData', () => {
    expect(store.getters.sortedTableData[0]['Amount']).toEqual(34554)
    expect(store.getters.sortedTableData[1]['Amount']).toEqual(67708)
    expect(store.getters.sortedTableData[2]['Amount']).toEqual(7367)
    expect(store.getters.sortedTableData[3]['Amount']).toEqual(80760)

    store.commit('setSortBy', 'Amount')
    store.commit('setSortDirection', 'desc')

    expect(store.getters.sortedTableData[0]['Amount']).toEqual(80760)
    expect(store.getters.sortedTableData[1]['Amount']).toEqual(67708)
    expect(store.getters.sortedTableData[2]['Amount']).toEqual(34554)
    expect(store.getters.sortedTableData[3]['Amount']).toEqual(7367)

    store.commit('setSortBy', 'Amount')
    store.commit('setSortDirection', 'asc')

    expect(store.getters.sortedTableData[0]['Amount']).toEqual(7367)
    expect(store.getters.sortedTableData[1]['Amount']).toEqual(34554)
    expect(store.getters.sortedTableData[2]['Amount']).toEqual(67708)
    expect(store.getters.sortedTableData[3]['Amount']).toEqual(80760)

    store.commit('setSortBy', '')
    store.commit('setSortDirection', '')

    expect(store.getters.sortedTableData[0]['Amount']).toEqual(34554)
    expect(store.getters.sortedTableData[1]['Amount']).toEqual(67708)
    expect(store.getters.sortedTableData[2]['Amount']).toEqual(7367)
    expect(store.getters.sortedTableData[3]['Amount']).toEqual(80760)
  })

  it('tableDataBySearchText', () => {
    // Name
    store.commit('setSearchText', 'Kyra')

    expect(store.getters.tableDataBySearchText.length).toEqual(1)

    // Description
    store.commit('setSearchText', 'Curabitur dictum.')

    expect(store.getters.tableDataBySearchText.length).toEqual(1)

    // ID
    store.commit('setSearchText', '9F5C9912-936A-FB85-1EDB-9DA87BE7FF1E')

    expect(store.getters.tableDataBySearchText.length).toEqual(1)

    // No searchText
    store.commit('setSearchText', '')

    expect(store.getters.tableDataBySearchText.length).toEqual(4)
  })

  it('tableDataByAmountRange with min and max', () => {
    const minAmount = 30000
    const maxAmount = 70000

    expect(store.getters.tableDataByAmountRange.length).toEqual(4)

    store.commit('setAmountRangeMin', minAmount)
    store.commit('setAmountRangeMax', maxAmount)

    expect(store.getters.tableDataByAmountRange.length).toEqual(2)
    expect(store.getters.tableDataByAmountRange).toContain(store.state.tableData[0])
    expect(store.getters.tableDataByAmountRange).toContain(store.state.tableData[1])

    store.commit('setSortBy', 'Amount')
    store.commit('setSortDirection', 'desc')

    expect(store.getters.tableDataByAmountRange[0]).toMatchObject(store.state.tableData[1])
    expect(store.getters.tableDataByAmountRange[1]).toMatchObject(store.state.tableData[0])

    store.commit('setSortDirection', 'asc')

    expect(store.getters.tableDataByAmountRange[0]).toMatchObject(store.state.tableData[0])
    expect(store.getters.tableDataByAmountRange[1]).toMatchObject(store.state.tableData[1])
  })

  it('tableDataByAmountRange with min', () => {
    const minAmount = 40000

    expect(store.getters.tableDataByAmountRange.length).toEqual(4)

    store.commit('setAmountRangeMin', minAmount)

    expect(store.getters.tableDataByAmountRange.length).toEqual(2)
    expect(store.getters.tableDataByAmountRange).toContain(store.state.tableData[1])
    expect(store.getters.tableDataByAmountRange).toContain(store.state.tableData[3])

    store.commit('setSortBy', 'Amount')
    store.commit('setSortDirection', 'desc')

    expect(store.getters.tableDataByAmountRange[0]).toMatchObject(store.state.tableData[3])
    expect(store.getters.tableDataByAmountRange[1]).toMatchObject(store.state.tableData[1])

    store.commit('setSortDirection', 'asc')

    expect(store.getters.tableDataByAmountRange[0]).toMatchObject(store.state.tableData[1])
    expect(store.getters.tableDataByAmountRange[1]).toMatchObject(store.state.tableData[3])
  })

  it('tableDataByAmountRange with max', () => {
    const maxAmount = 40000

    expect(store.getters.tableDataByAmountRange.length).toEqual(4)

    store.commit('setAmountRangeMax', maxAmount)

    expect(store.getters.tableDataByAmountRange.length).toEqual(2)
    expect(store.getters.tableDataByAmountRange).toContain(store.state.tableData[0])
    expect(store.getters.tableDataByAmountRange).toContain(store.state.tableData[2])

    store.commit('setSortBy', 'Amount')
    store.commit('setSortDirection', 'desc')

    expect(store.getters.tableDataByAmountRange[0]).toMatchObject(store.state.tableData[0])
    expect(store.getters.tableDataByAmountRange[1]).toMatchObject(store.state.tableData[2])

    store.commit('setSortDirection', 'asc')

    expect(store.getters.tableDataByAmountRange[0]).toMatchObject(store.state.tableData[2])
    expect(store.getters.tableDataByAmountRange[1]).toMatchObject(store.state.tableData[0])
  })

  it('tableDataByDateRange with min and max', () => {
    const minDate = '2017-07-24'
    const maxDate = '2019-09-29'

    expect(store.getters.tableDataByDateRange.length).toEqual(4)

    store.commit('setDateRangeMin', minDate)
    store.commit('setDateRangeMax', maxDate)

    expect(store.getters.tableDataByDateRange.length).toEqual(2)
    expect(store.getters.tableDataByDateRange).toContain(store.state.tableData[1])
    expect(store.getters.tableDataByDateRange).toContain(store.state.tableData[2])

    store.commit('setSortBy', 'Date')
    store.commit('setSortDirection', 'desc')

    expect(store.getters.tableDataByDateRange[0]).toMatchObject(store.state.tableData[2])
    expect(store.getters.tableDataByDateRange[1]).toMatchObject(store.state.tableData[1])

    store.commit('setSortDirection', 'asc')

    expect(store.getters.tableDataByDateRange[0]).toMatchObject(store.state.tableData[1])
    expect(store.getters.tableDataByDateRange[1]).toMatchObject(store.state.tableData[2])
  })

  it('tableDataByDateRange with min', () => {
    const minDate = '2018-11-11'

    expect(store.getters.tableDataByDateRange.length).toEqual(4)

    store.commit('setDateRangeMin', minDate)

    expect(store.getters.tableDataByDateRange.length).toEqual(2)
    expect(store.getters.tableDataByDateRange).toContain(store.state.tableData[2])
    expect(store.getters.tableDataByDateRange).toContain(store.state.tableData[3])

    store.commit('setSortBy', 'Date')
    store.commit('setSortDirection', 'desc')

    expect(store.getters.tableDataByDateRange[0]).toMatchObject(store.state.tableData[3])
    expect(store.getters.tableDataByDateRange[1]).toMatchObject(store.state.tableData[2])

    store.commit('setSortDirection', 'asc')

    expect(store.getters.tableDataByDateRange[0]).toMatchObject(store.state.tableData[2])
    expect(store.getters.tableDataByDateRange[1]).toMatchObject(store.state.tableData[3])
  })

  it('tableDataByDateRange with max', () => {
    const maxDate = '2018-11-11'

    expect(store.getters.tableDataByDateRange.length).toEqual(4)

    store.commit('setDateRangeMax', maxDate)

    expect(store.getters.tableDataByDateRange.length).toEqual(2)
    expect(store.getters.tableDataByDateRange).toContain(store.state.tableData[0])
    expect(store.getters.tableDataByDateRange).toContain(store.state.tableData[1])

    store.commit('setSortBy', 'Date')
    store.commit('setSortDirection', 'desc')

    expect(store.getters.tableDataByDateRange[0]).toMatchObject(store.state.tableData[1])
    expect(store.getters.tableDataByDateRange[1]).toMatchObject(store.state.tableData[0])

    store.commit('setSortDirection', 'asc')

    expect(store.getters.tableDataByDateRange[0]).toMatchObject(store.state.tableData[0])
    expect(store.getters.tableDataByDateRange[1]).toMatchObject(store.state.tableData[1])
  })

  it('filteredSortedTableData', () => {
    const minDate = '2017-07-24'
    const maxDate = '2019-09-29'
    const amount = 20000

    expect(store.getters.filteredSortedTableData.length).toEqual(4)

    store.commit('setDateRangeMin', minDate)
    store.commit('setDateRangeMax', maxDate)

    expect(store.getters.filteredSortedTableData.length).toEqual(2)
    expect(store.getters.filteredSortedTableData).toContain(store.state.tableData[1])
    expect(store.getters.filteredSortedTableData).toContain(store.state.tableData[2])

    store.commit('setAmountRangeMin', amount)

    expect(store.getters.filteredSortedTableData.length).toEqual(1)
    expect(store.getters.filteredSortedTableData[0]).toMatchObject(store.state.tableData[1])
  })

  it('filteredSortedTableData2', () => {
    const minAmount = 30000
    const maxAmount = 70000

    expect(store.getters.tableDataByAmountRange.length).toEqual(4)

    store.commit('setAmountRangeMin', minAmount)
    store.commit('setAmountRangeMax', maxAmount)

    expect(store.getters.tableDataByAmountRange.length).toEqual(2)
    expect(store.getters.tableDataByAmountRange).toContain(store.state.tableData[0])
    expect(store.getters.tableDataByAmountRange).toContain(store.state.tableData[1])

    store.commit('setSearchText', 'Kyra')

    expect(store.getters.tableDataByAmountRange.length).toEqual(1)
    expect(store.getters.tableDataByAmountRange).toContain(store.state.tableData[0])
  })
})

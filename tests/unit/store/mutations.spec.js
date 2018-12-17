import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'

Vue.use(Vuex)

describe('mutations', () => {
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
      mutations
    })
  })

  it('updateTableRow', () => {
    const ID = '3471DA17-401F-9633-BF81-4CADA6FD5C79'
    const Description = 'new description'
    const updatedRow = store.state.tableData.find(row => row['ID'] === ID)

    expect(updatedRow['Description']).not.toEqual(Description)

    store.commit('updateTableRow', {
      ID,
      Description
    })

    expect(updatedRow['Description']).toEqual(Description)
  })

  it('setSortBy', () => {
    expect(store.state.sortBy).toEqual('')

    store.commit('setSortBy', 'Description')

    expect(store.state.sortBy).toEqual('Description')
  })

  it('setSortDirection', () => {
    expect(store.state.sortDirection).toEqual('')

    store.commit('setSortDirection', 'desc')

    expect(store.state.sortDirection).toEqual('desc')
  })

  it('setSearchText', () => {
    const searchText = 'Kyra'
    expect(store.state.searchText).toEqual('')

    store.commit('setSearchText', searchText)

    expect(store.state.searchText).toEqual(searchText)
  })

  it('setAmountRangeMin', () => {
    const amountRangeMin = 5000
    expect(store.state.amountRangeMin).toEqual('')

    store.commit('setAmountRangeMin', amountRangeMin)

    expect(store.state.amountRangeMin).toEqual(amountRangeMin)
  })

  it('setAmountRangeMax', () => {
    const amountRangeMax = 50000
    expect(store.state.amountRangeMax).toEqual('')

    store.commit('setAmountRangeMax', amountRangeMax)

    expect(store.state.amountRangeMax).toEqual(amountRangeMax)
  })

  it('setDateRangeMin', () => {
    const dateRangeMin = new Date('2018-11-11')
    expect(store.state.dateRangeMin).toEqual('')

    store.commit('setDateRangeMin', dateRangeMin)

    expect(store.state.dateRangeMin).toEqual(dateRangeMin)

    store.commit('setDateRangeMin', '')
    expect(store.state.dateRangeMin).toEqual('')
  })

  it('setDateRangeMax', () => {
    const dateRangeMax = new Date('2018-11-11')
    expect(store.state.dateRangeMax).toEqual('')

    store.commit('setDateRangeMax', dateRangeMax)

    expect(store.state.dateRangeMax).toEqual(dateRangeMax)

    store.commit('setDateRangeMax', '')
    expect(store.state.dateRangeMin).toEqual('')
  })
})

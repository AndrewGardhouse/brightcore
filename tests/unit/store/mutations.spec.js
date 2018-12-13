import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'

Vue.use(Vuex)

describe('mutations', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        sortBy: '',
        sortDirection: '',
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

  // it('sortByColumn with Amount', () => {
  //   store.commit('sortByColumn', {
  //     column: 'Amount',
  //     direction: 'desc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['Amount']).toEqual(80760)
  //   expect(store.state.filteredTableData[1]['Amount']).toEqual(67708)
  //   expect(store.state.filteredTableData[2]['Amount']).toEqual(34554)
  //   expect(store.state.filteredTableData[3]['Amount']).toEqual(7367)
  //
  //   store.commit('sortByColumn', {
  //     column: 'Amount',
  //     direction: 'asc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['Amount']).toEqual(7367)
  //   expect(store.state.filteredTableData[1]['Amount']).toEqual(34554)
  //   expect(store.state.filteredTableData[2]['Amount']).toEqual(67708)
  //   expect(store.state.filteredTableData[3]['Amount']).toEqual(80760)
  // })
  //
  // it('sortByColumn with ID', () => {
  //   store.commit('sortByColumn', {
  //     column: 'ID',
  //     direction: 'desc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['ID']).toEqual('B743AC82-3613-13A2-2E42-E0C1F5CBF8A6')
  //   expect(store.state.filteredTableData[1]['ID']).toEqual('9F5C9912-936A-FB85-1EDB-9DA87BE7FF1E')
  //   expect(store.state.filteredTableData[2]['ID']).toEqual('74749D4F-A43F-34E8-A687-D54924B17251')
  //   expect(store.state.filteredTableData[3]['ID']).toEqual('3471DA17-401F-9633-BF81-4CADA6FD5C79')
  //
  //   store.commit('sortByColumn', {
  //     column: 'ID',
  //     direction: 'asc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['ID']).toEqual('3471DA17-401F-9633-BF81-4CADA6FD5C79')
  //   expect(store.state.filteredTableData[1]['ID']).toEqual('74749D4F-A43F-34E8-A687-D54924B17251')
  //   expect(store.state.filteredTableData[2]['ID']).toEqual('9F5C9912-936A-FB85-1EDB-9DA87BE7FF1E')
  //   expect(store.state.filteredTableData[3]['ID']).toEqual('B743AC82-3613-13A2-2E42-E0C1F5CBF8A6')
  // })
  //
  // it('sortByColumn with Name', () => {
  //   store.commit('sortByColumn', {
  //     column: 'Name',
  //     direction: 'desc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['Name']).toEqual('Kyra Lester')
  //   expect(store.state.filteredTableData[1]['Name']).toEqual('Cameron Thompson')
  //   expect(store.state.filteredTableData[2]['Name']).toEqual('Buckminster Alvarado')
  //   expect(store.state.filteredTableData[3]['Name']).toEqual('Athena Smith')
  //
  //   store.commit('sortByColumn', {
  //     column: 'Name',
  //     direction: 'asc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['Name']).toEqual('Athena Smith')
  //   expect(store.state.filteredTableData[1]['Name']).toEqual('Buckminster Alvarado')
  //   expect(store.state.filteredTableData[2]['Name']).toEqual('Cameron Thompson')
  //   expect(store.state.filteredTableData[3]['Name']).toEqual('Kyra Lester')
  // })
  //
  // it('sortByColumn with Description', () => {
  //   store.commit('sortByColumn', {
  //     column: 'Description',
  //     direction: 'desc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['Description']).toEqual('massa lobortis ultrices. Vivamus rhoncus.')
  //   expect(store.state.filteredTableData[1]['Description']).toEqual('dui, in sodales elit erat vitae risus. Duis a mi')
  //   expect(store.state.filteredTableData[2]['Description']).toEqual('dolor. Fusce mi lorem, vehicula et, rutrum eu,')
  //   expect(store.state.filteredTableData[3]['Description']).toEqual('Curabitur dictum. Phasellus in')
  //
  //   store.commit('sortByColumn', {
  //     column: 'Description',
  //     direction: 'asc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['Description']).toEqual('Curabitur dictum. Phasellus in')
  //   expect(store.state.filteredTableData[1]['Description']).toEqual('dolor. Fusce mi lorem, vehicula et, rutrum eu,')
  //   expect(store.state.filteredTableData[2]['Description']).toEqual('dui, in sodales elit erat vitae risus. Duis a mi')
  //   expect(store.state.filteredTableData[3]['Description']).toEqual('massa lobortis ultrices. Vivamus rhoncus.')
  // })
  //
  // it('sortByColumn with Date', () => {
  //   store.commit('sortByColumn', {
  //     column: 'Date',
  //     direction: 'desc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['Date']).toEqual('2019-09-30T06:56:15-07:00')
  //   expect(store.state.filteredTableData[1]['Date']).toEqual('2018-11-11T06:19:57-08:00')
  //   expect(store.state.filteredTableData[2]['Date']).toEqual('2018-11-08T05:44:15-08:00')
  //   expect(store.state.filteredTableData[3]['Date']).toEqual('2017-07-23T04:24:49-07:00')
  //
  //   store.commit('sortByColumn', {
  //     column: 'Date',
  //     direction: 'asc'
  //   })
  //
  //   expect(store.state.filteredTableData[0]['Date']).toEqual('2017-07-23T04:24:49-07:00')
  //   expect(store.state.filteredTableData[1]['Date']).toEqual('2018-11-08T05:44:15-08:00')
  //   expect(store.state.filteredTableData[2]['Date']).toEqual('2018-11-11T06:19:57-08:00')
  //   expect(store.state.filteredTableData[3]['Date']).toEqual('2019-09-30T06:56:15-07:00')
  // })
  //
  // // it('sortByColumn with no direction should empty filteredTableData', () => {
  // //   expect(store.state.filteredTableData).toHaveLength(0)
  // //
  // //   store.commit('sortByColumn', {
  // //     column: 'Description',
  // //     direction: 'desc'
  // //   })
  // //
  // //   expect(store.state.filteredTableData).toHaveLength(store.state.tableData.length)
  // //
  // //   store.commit('sortByColumn', {
  // //     column: 'Description',
  // //     direction: ''
  // //   })
  // //
  // //   expect(store.state.filteredTableData).toHaveLength(0)
  // // })
})

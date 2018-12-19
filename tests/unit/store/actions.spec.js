import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

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
      mutations,
      actions
    })
  })

  it('setSearchFilters', () => {
    const searchText = 'Athena'
    const amountRangeMin = 4000;
    const amountRangeMax = 5000;
    const dateRangeMin = new Date('12-11-2018');
    const dateRangeMax = new Date('11-12-2018');

    store.dispatch('setSearchFilters', {
      searchText,
      amountRangeMin,
      amountRangeMax,
      dateRangeMin,
      dateRangeMax
    })

    expect(store.state.searchText).toEqual(searchText)
    expect(store.state.amountRangeMin).toEqual(amountRangeMin)
    expect(store.state.amountRangeMax).toEqual(amountRangeMax)
    expect(store.state.dateRangeMin).toEqual(dateRangeMin)
    expect(store.state.dateRangeMax).toEqual(dateRangeMax)
  })

  it('setSearchFilters can set amountRangeMin and amountRangeMax to 0', () => {
    const searchText = ''
    const amountRangeMin = 0;
    const amountRangeMax = 0;
    const dateRangeMin = '';
    const dateRangeMax = '';

    store.dispatch('setSearchFilters', {
      searchText,
      amountRangeMin,
      amountRangeMax,
      dateRangeMin,
      dateRangeMax
    })

    expect(store.state.searchText).toEqual(searchText)
    expect(store.state.amountRangeMin).toEqual(amountRangeMin)
    expect(store.state.amountRangeMax).toEqual(amountRangeMax)
    expect(store.state.dateRangeMin).toEqual(dateRangeMin)
    expect(store.state.dateRangeMax).toEqual(dateRangeMax)
  })
})

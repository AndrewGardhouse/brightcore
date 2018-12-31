import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import TableRowCount from '@/components/TableRowCount'

describe('TableRowCount.vue', () => {
  let localVue
  let store
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)

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
      mutations,
      getters
    })

    wrapper = shallowMount(TableRowCount, {
      store,
      localVue
    })
  })

  it('should show the correct table row count', () => {
    const tableRowCountWrapper = wrapper.find('.table-row-count')
    const tableRowCountText = wrapper.find('h2')

    expect(tableRowCountText.text()).toBe('4 Rows')

    store.commit('setSearchText', 'Kyra')
    expect(tableRowCountText.text()).toBe('1 Row')

    store.commit('setSearchText', 'this does not match anything')
    expect(wrapper.find('.table-row-count').exists()).toBe(false)
  })
})

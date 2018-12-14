import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import getters from '@/store/getters'
import mutations from '@/store/mutations'

import TableHeaders from '@/components/TableHeaders'
import Header from '@/components/Header'

describe('TableHeaders.vue', () => {
  let wrapper
  let localVue
  let store

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)

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
      getters,
      mutations
    })

    wrapper = mount(TableHeaders, {
      store,
      localVue
    })
  })

  it('should have the tableHeaderNames getter from store', () => {
    expect(wrapper.vm.tableHeaderNames.length).toBe(store.getters.tableHeaderNames.length)
  })

  it('resetSortIndexes() should set sortDirectionIndexes of every header to 0 expect the header name passed', () => {
    const headers = wrapper.findAll(Header)
    const firstHeader = headers.at(0)
    const secondHeader = headers.at(1)

    firstHeader.find('.sort-column').trigger('click')

    expect(firstHeader.vm.sortDirectionIndex).toBe(1)
    expect(secondHeader.vm.sortDirectionIndex).toBe(0)

    secondHeader.find('.sort-column').trigger('click')

    expect(firstHeader.vm.sortDirectionIndex).toBe(0)
    expect(secondHeader.vm.sortDirectionIndex).toBe(1)
  })
})

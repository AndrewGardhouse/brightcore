import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import Header from '@/components/Header'

describe('Header.vue', () => {
  let localVue
  let store
  let wrapper
  let sortButton

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
      mutations
    })

    wrapper = shallowMount(Header, {
      propsData: {
        header: 'Description'
      },
      store,
      localVue
    })

    sortButton = wrapper.find('.sort-column');
  })

  it('incrementSortIndex() should increment the index and not go above 2', () => {
    expect(wrapper.vm.sortDirectionIndex).toEqual(0)

    sortButton.trigger('click')

    expect(wrapper.vm.sortDirectionIndex).toEqual(1)

    sortButton.trigger('click')

    expect(wrapper.vm.sortDirectionIndex).toEqual(2)

    sortButton.trigger('click')

    expect(wrapper.vm.sortDirectionIndex).toEqual(0)
  })

  it('clicking sort button emits isClicked with header name', () => {
    sortButton.trigger('click')

    expect(wrapper.emitted().isClicked).toBeTruthy()
    expect(wrapper.emitted().isClicked[0]).toEqual([wrapper.vm.header])
  })

  it('clicking sort button adds .active classes', () => {
    const headerColumn = wrapper.find('.header-column')
    const descArrow = sortButton.find('.desc')
    const ascArrow = sortButton.find('.asc')

    sortButton.trigger('click')

    expect(headerColumn.classes()).toContain('active')
    expect(ascArrow.classes()).toContain('active')

    sortButton.trigger('click')

    expect(descArrow.classes()).toContain('active')

    sortButton.trigger('click')

    expect(ascArrow.classes()).not.toContain('active')
    expect(descArrow.classes()).not.toContain('active')
  })
})

describe('Header mounted()', () => {
  it('should set the correct sortDirectionIndex if sortDirection and sortBy exist in state', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
      state: {
        sortBy: 'Description',
        sortDirection: 'asc',
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

    const descriptionWrapper = shallowMount(Header, {
      propsData: {
        header: 'Description'
      },
      store,
      localVue
    })

    const nameWrapper = shallowMount(Header, {
      propsData: {
        header: 'Name'
      },
      store,
      localVue
    })

    expect(descriptionWrapper.vm.sortDirectionIndex).toBe(1)
    expect(nameWrapper.vm.sortDirectionIndex).toBe(0)
  })
})

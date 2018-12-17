import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import SearchFilters from '@/components/SearchFilters'


describe('SearchFilters', () => {
  let wrapper
  let localVue
  let store

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
      actions,
      mutations
    })

    wrapper = shallowMount(SearchFilters, {
      store,
      localVue
    })
  })

  it('searchByFilters will set filter fields in state', () => {
    wrapper.setData({
      filters: {
        searchText: 'text',
        amountRangeMin: 123,
        amountRangeMax: 567,
        dateRangeMin: '11-12-2018',
        dateRangeMax: '12-11-2018'
      }
    })

    wrapper.vm.searchByFilters()

    expect(store.state.searchText).toBe(wrapper.vm.filters.searchText)
    expect(store.state.amountRangeMin).toBe(wrapper.vm.filters.amountRangeMin * 100)
    expect(store.state.amountRangeMax).toBe(wrapper.vm.filters.amountRangeMax * 100)
    expect(store.state.dateRangeMin).toEqual(new Date(wrapper.vm.filters.dateRangeMin))
    expect(store.state.dateRangeMax).toEqual(new Date(wrapper.vm.filters.dateRangeMax))
  })


  it('clearFilters will reset all fields to empty strings and state filters', () => {
    wrapper.setData({
      filters: {
        searchText: 'text',
        amountRangeMin: 1234,
        amountRangeMax: 5678,
        dateRangeMin: '11-12-2018',
        dateRangeMax: '12-11-2018'
      }
    })

    wrapper.vm.searchByFilters()

    expect(store.state.searchText).toBe(wrapper.vm.filters.searchText)
    expect(store.state.amountRangeMin).toBe(wrapper.vm.filters.amountRangeMin * 100)
    expect(store.state.amountRangeMax).toBe(wrapper.vm.filters.amountRangeMax * 100)
    expect(store.state.dateRangeMin).toEqual(new Date(wrapper.vm.filters.dateRangeMin))
    expect(store.state.dateRangeMax).toEqual(new Date(wrapper.vm.filters.dateRangeMax))

    wrapper.vm.clearFilters()

    expect(wrapper.vm.filters.searchText).toBe('')
    expect(wrapper.vm.filters.amountRangeMin).toBe('')
    expect(wrapper.vm.filters.amountRangeMax).toBe('')
    expect(wrapper.vm.filters.dateRangeMin).toBe('')
    expect(wrapper.vm.filters.dateRangeMax).toBe('')

    expect(store.state.searchText).toBe('')
    expect(store.state.amountRangeMin).toBe('')
    expect(store.state.amountRangeMax).toBe('')
    expect(store.state.dateRangeMin).toBe('')
    expect(store.state.dateRangeMax).toBe('')
  })

  it('amountRangeMinCents returns the amountRangeMin in cents', () => {
    wrapper.setData({
      filters: {
        amountRangeMin: 100
      }
    })

    expect(wrapper.vm.amountRangeMinCents).toBe(wrapper.vm.filters.amountRangeMin * 100)

    wrapper.setData({
      filters: {
        amountRangeMin: ''
      }
    })

    expect(wrapper.vm.amountRangeMinCents).toBe('')
  })

  it('amountRangeMaxCents returns the amountRangeMax in cents', () => {
    wrapper.setData({
      filters: {
        amountRangeMax: 1000
      }
    })

    expect(wrapper.vm.amountRangeMaxCents).toBe(wrapper.vm.filters.amountRangeMax * 100)

    wrapper.setData({
      filters: {
        amountRangeMax: ''
      }
    })

    expect(wrapper.vm.amountRangeMaxCents).toBe('')
  })

  it('amount range fields should submit amount in cents', () => {
    const minAmount = 100
    const maxAmount = 1000
    const minAmountField = wrapper.find('#min-amount')
    const maxAmountField = wrapper.find('#max-amount')

    minAmountField.setValue(minAmount)
    maxAmountField.setValue(maxAmount)

    wrapper.vm.searchByFilters()

    expect(store.state.amountRangeMin).toEqual(minAmount * 100)
    expect(store.state.amountRangeMax).toEqual(maxAmount * 100)
  })

  it('formattedDateRangeMin returns formatted date', () => {
    wrapper.setData({
      filters: {
        dateRangeMin: '11-11-2018'
      }
    })

    expect(wrapper.vm.formattedDateRangeMin).toEqual(new Date(wrapper.vm.filters.dateRangeMin))

    wrapper.setData({
      filters: {
        dateRangeMin: ''
      }
    })

    expect(wrapper.vm.formattedDateRangeMin).toBe('')
  })

  it('formattedDateRangeMax returns formatted date', () => {
    wrapper.setData({
      filters: {
        dateRangeMax: '11-11-2018'
      }
    })

    expect(wrapper.vm.formattedDateRangeMax).toEqual(new Date(wrapper.vm.filters.dateRangeMax))

    wrapper.setData({
      filters: {
        dateRangeMax: ''
      }
    })

    expect(wrapper.vm.formattedDateRangeMax).toBe('')
  })

  it('date range fields should submit formatted date', () => {
    const minDate = '2018-11-11'
    const maxDate = '2018-11-11'

    const minDateField = wrapper.find('#min-date')
    const maxDateField = wrapper.find('#max-date')

    minDateField.setValue(minDate)
    maxDateField.setValue(maxDate)

    expect(wrapper.vm.filters.dateRangeMin).toBe(minDate)
    expect(wrapper.vm.filters.dateRangeMax).toBe(maxDate)

    wrapper.vm.searchByFilters()

    expect(store.state.dateRangeMin).toEqual(new Date(minDate))
    expect(store.state.dateRangeMax).toEqual(new Date(maxDate))
  })
})

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import dayjs from 'dayjs'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import getters from '@/store/getters'
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
      mutations,
      getters
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

  it('formatAmount returns amount in cents', () => {
    const amountRangeMin = 100

    expect(wrapper.vm.formatAmount(amountRangeMin)).toBe(amountRangeMin * 100)
    expect(wrapper.vm.formatAmount('')).toBe('')
    expect(wrapper.vm.formatAmount(0)).toBe(0)
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

  it('formatDate returns formatted date', () => {
    const dateString = '2018-11-11'

    expect(wrapper.vm.formatDate(dateString)).toEqual(new Date(dateString))
    expect(wrapper.vm.formatDate('')).toEqual('')
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

  it('range inputs have highest and lowest getters for min and max', () => {
    const minDateField = wrapper.find('#min-date')
    const maxDateField = wrapper.find('#max-date')
    const minAmountField = wrapper.find('#min-amount')
    const maxAmountField = wrapper.find('#max-amount')

    expect(minDateField.attributes('min')).toEqual(store.getters.lowestDate)
    expect(minDateField.attributes('max')).toEqual(store.getters.highestDate)

    expect(maxDateField.attributes('min')).toEqual(store.getters.lowestDate)
    expect(maxDateField.attributes('max')).toEqual(store.getters.highestDate)

    expect(minAmountField.attributes('min')).toEqual(store.getters.lowestAmount)
    expect(minAmountField.attributes('max')).toEqual(store.getters.highestAmount)

    expect(minAmountField.attributes('min')).toEqual(store.getters.lowestAmount)
    expect(minAmountField.attributes('max')).toEqual(store.getters.highestAmount)
  })
})

describe('SearchFilters mounted()', () => {
  it('should set the data filters to the store filters if they exist', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const minDateString = '2017-12-11'
    const maxDateString = '2018-12-11'
    const store = new Vuex.Store({
      state: {
        searchText: 'word',
        sortBy: '',
        sortDirection: '',
        amountRangeMin: 10000,
        amountRangeMax: 40000,
        dateRangeMin: new Date(minDateString),
        dateRangeMax: new Date(maxDateString),
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
      getters
    })

    const wrapper = shallowMount(SearchFilters, {
      store,
      localVue
    })

    expect(wrapper.vm.filters.searchText).toEqual(store.state.searchText)
    expect(wrapper.vm.filters.amountRangeMin).toEqual(store.state.amountRangeMin / 100)
    expect(wrapper.vm.filters.amountRangeMax).toEqual(store.state.amountRangeMax / 100)
    expect(wrapper.vm.filters.dateRangeMin).toEqual(dayjs(store.state.dateRangeMin).format('YYYY-MM-DD'))
    expect(wrapper.vm.filters.dateRangeMax).toEqual(dayjs(store.state.dateRangeMax).format('YYYY-MM-DD'))
  })
})

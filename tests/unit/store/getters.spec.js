import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'

Vue.use(Vuex)

describe('getters', () => {
  it('tableHeaders', () => {
    const store = new Vuex.Store({
      state,
      getters
    })

    const expected = ['ID', 'Name', 'Description', 'Date', 'Amount']
    expect(store.getters.tableHeaders).toEqual(expected)
  })
})

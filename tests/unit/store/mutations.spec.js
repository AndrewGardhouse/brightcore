import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import mutations from '@/store/mutations'

Vue.use(Vuex)

describe('mutations', () => {
  it('updateTableRow', () => {
    const store = new Vuex.Store({
      state,
      mutations
    })

    const ID = '3471DA17-401F-9633-BF81-4CADA6FD5C79'
    const Description = 'new description'
    const updatedRow = state.tableData.find(row => row['ID'] === ID)

    expect(updatedRow['Description']).not.toEqual(Description)

    store.commit('updateTableRow', {
      ID,
      Description
    })

    expect(updatedRow['Description']).toEqual(Description)
  })
})

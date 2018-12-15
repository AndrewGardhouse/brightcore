import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import DescriptionForm from '@/components/DescriptionForm'

describe('DescriptionForm', () => {
  let localVue
  let store
  let wrapper

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
        ]
      },
      mutations
    })

    wrapper = mount(DescriptionForm, {
      propsData: {
        id: store.state.tableData[0]['ID'],
        description: store.state.tableData[0]['Description']
      },
      store,
      localVue
    })
  })

  it('clicking edit description button opens edit form', () => {
    expect(wrapper.find('.edit-description').exists()).toBe(false)

    wrapper.find('.edit-button').trigger('click')

    expect(wrapper.find('form').exists()).toBe(true)

    wrapper.find('.cancel-button').trigger('click')

    expect(wrapper.find('form').exists()).toBe(false)
  })

  it('closing edit description form after editing description will not edit description', () => {
    const newDescription = 'new description'

    wrapper.find('.edit-button').trigger('click')

    const textarea = wrapper.find('textarea')
    textarea.setValue(newDescription)

    expect(wrapper.vm.editDescrpition).toBe(newDescription)

    wrapper.find('.cancel-button').trigger('click')

    expect(wrapper.vm.description).not.toBe(newDescription)
  })

  it('submitting edit description form will edit description', () => {
    const newDescription = 'new description'

    wrapper.find('.edit-button').trigger('click')

    const textarea = wrapper.find('textarea')
    textarea.setValue(newDescription)

    expect(wrapper.vm.editDescrpition).toBe(newDescription)

    wrapper.find('form').trigger('submit.prevent')

    expect(store.state.tableData[0]['Description']).toBe(newDescription)
    expect(wrapper.find('.edit-description').exists()).toBe(false)
  })
})

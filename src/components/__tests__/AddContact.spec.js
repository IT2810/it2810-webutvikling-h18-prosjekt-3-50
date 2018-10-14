/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AddContact } from '../AddContact'
import 'native-base'
import { findByID } from '../../testUtils.js'

import initial_state_mock from '../../assets/initial_state_mock.js'
import configureStore from 'redux-mock-store'

describe('AddContact', () => {
  const initialState = initial_state_mock
  const mockStore = configureStore()
  let wrapper
  let store
  let dispatchAddContactMock = jest.fn()
  let navigation
  let goBackMock

  beforeEach(() => {
    store = mockStore(initialState)
    goBackMock = jest.fn()
    navigation = {goBack: goBackMock}
    wrapper = shallow(<AddContact navigation={navigation} store={store} addExercise={dispatchAddContactMock} addContact={dispatchAddContactMock} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('_add', () => {
    it('calls _add when button is pressed', () => {
      let _addMock = jest.fn()
      let wrapper = shallow(<AddContact navigation={navigation} store={store} _add={_addMock} />)

      wrapper.instance()._add = _addMock

      wrapper.instance().forceUpdate()

      let button = findByID(wrapper, 'addContactButton')
      button.props().onPress()

      expect(_addMock.mock.calls.length).toBe(1)
    })

    it('dispatches addContact', () => {
      var contact = { name: 'Test contact' }
      wrapper.instance()._add(contact)

      expect(dispatchAddContactMock.mock.calls.length).toBe(1)
    })

    it('navigates to CreateSession', () => {
      wrapper.instance()._add()

      expect(goBackMock.mock.calls.length).toBe(1)
    })
  })

})

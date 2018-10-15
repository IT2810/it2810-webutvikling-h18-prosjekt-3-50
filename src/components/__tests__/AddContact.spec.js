/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AddContact } from '../AddContact'
import { findByID } from '../../testUtils.js'

describe('AddContact', () => {
  let wrapper
  let dispatchAddContactMock = jest.fn()
  let navigation
  let goBackMock

  beforeEach(() => {
    goBackMock = jest.fn()
    navigation = {goBack: goBackMock}
    wrapper = shallow(<AddContact navigation={navigation} addContact={dispatchAddContactMock} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('_add', () => {
    it('calls _add when button is pressed', () => {
      let _addMock = jest.fn()
      let wrapper = shallow(<AddContact navigation={navigation} _add={_addMock} ddContanct={dispatchAddContactMock} />)

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

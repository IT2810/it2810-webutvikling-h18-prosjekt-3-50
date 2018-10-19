/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ContactList from '../ContactList'
import { findByID } from '../../testUtils.js'

describe('ContactList', () => {
  let wrapper
  let navigation
  let dispatchRemoveContactMock
  let contacts

  beforeEach(() => {
    dispatchRemoveContactMock = jest.fn()
    navigateMock = jest.fn()
    navigation = { navigate: navigateMock }
    contacts = [{name: 'Test Name'}]
    wrapper = shallow(<ContactList
      navigation={navigation}
      removeContact={dispatchRemoveContactMock}
      contacts={contacts} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

})

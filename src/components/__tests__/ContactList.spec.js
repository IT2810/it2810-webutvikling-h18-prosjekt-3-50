/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { ContactList } from '../ContactList'
import toJson from 'enzyme-to-json'

import { findByID } from '../../testUtils.js'

describe('ContactList', () => {
  let wrapper
  let navigation
  let dispatchRemoveContactMock

  beforeEach(() => {
    dispatchRemoveContactMock = jest.fn()
    navigateMock = jest.fn()
    navigation = { navigate: navigateMock }
    wrapper = shallow(<ContactList navigation={navigation} removeContact={dispatchRemoveContactMock} contacts={[]} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('_add', () => {
    it('called when clicking on add contact button', () => {
      let _addMock = jest.fn()
      wrapper.instance()._add = _addMock
      wrapper.instance().forceUpdate()

      let addContactButton = findByID(wrapper, 'addContactButton')
      addContactButton.props().onPress()

      expect(_addMock.mock.calls.length).toBe(1)
    })

    it('navigates to AddContact', () => {
      wrapper.instance()._add()

      expect(navigateMock.mock.calls.length).toBe(1)
    })
  })

  // Should be moved to AddContact
  /*describe('availableContacts', () => {
    it('contact allready added is not shown in picker list', () => {
      wrapper.setState({ availableContacts: ['Ola Nordmann', 'Kari Nordmann', 'Petter Larsen', 'Kristine Hansen'] })
      wrapper.setState({ addedContacts: ['Ola Nordmann'] })

      let availableContacts = wrapper.instance().availableContacts()

      expect(availableContacts.indexOf('Ola Nordmann')).toEqual(-1)

      wrapper.instance()._add('Petter Larsen')
      availableContacts = wrapper.instance().availableContacts()

      expect(availableContacts.indexOf('Ola Nordmann')).toEqual(-1)
      expect(availableContacts.indexOf('Petter Larsen')).toEqual(-1)
    })
  })*/

  describe('_remove', () => {
    it('called when clicking on add contact button', () => {
      const contacts = [{name: 'Test contact'}]
      wrapper = shallow(<ContactList navigation={navigation} removeContact={dispatchRemoveContactMock} contacts={contacts} />)
    
      let _removeMock = jest.fn()
      wrapper.instance()._remove = _removeMock
      wrapper.instance().forceUpdate()

      let removeContactButton = findByID(wrapper, 'removeContactButton')
      removeContactButton.props().onPress()

      expect(_removeMock.mock.calls.length).toBe(1)
    })

    it('dispatches removeExercise ', () => {
      var exerciseRemoved = { name: 'Pullup', sets: '4', reps: '12' }
      wrapper.instance()._remove(exerciseRemoved)

      expect(dispatchRemoveContactMock.mock.calls.length).toBe(1)
    })

    /*it('can remove contact', () => {
      wrapper.setState({ addedContacts: ['Ola Nordmann', 'Kristine Hansen'] })

      wrapper.instance()._remove('Kristine Hansen')
      expect(wrapper.state('addedContacts')).toEqual(['Ola Nordmann'])
    })*/
  })
})

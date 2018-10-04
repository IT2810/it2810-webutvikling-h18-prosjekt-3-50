/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import ContactList from '../ContactList'
import toJson from 'enzyme-to-json';
import 'native-base'

import renderer from 'react-test-renderer';

describe('ContactList', () => {
  let wrapper
  const navigation = {navigate: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<ContactList navigation={navigation}/>)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('_add', () => {
    it('can add a contact', () => {
      wrapper.setState({availableContacts: ["Ola Nordmann", "Kari Nordmann", "Petter Larsen", "Kristine Hansen"]})
      wrapper.setState({addedContacts: ["Ola Nordmann"]})

      wrapper.instance()._add("Kristine Hansen")
      expect(wrapper.state('addedContacts')).toEqual(["Ola Nordmann", "Kristine Hansen"])
    })
  })

  describe('availableContacts', () => {
    it('contact allready added is not shown in picker list', () => {
      wrapper.setState({availableContacts: ["Ola Nordmann", "Kari Nordmann", "Petter Larsen", "Kristine Hansen"]})
      wrapper.setState({addedContacts: ["Ola Nordmann"]})

      let availableContacts = wrapper.instance().availableContacts()

      expect(availableContacts.indexOf("Ola Nordmann")).toEqual(-1)

      wrapper.instance()._add("Petter Larsen")
      availableContacts = wrapper.instance().availableContacts()

      expect(availableContacts.indexOf("Ola Nordmann")).toEqual(-1)
      expect(availableContacts.indexOf("Petter Larsen")).toEqual(-1)
    })
  })

  describe('_remove', () => {
    it('can remove contact', () => {
      wrapper.setState({addedContacts: ["Ola Nordmann", "Kristine Hansen"]})


      wrapper.instance()._remove("Kristine Hansen")
      expect(wrapper.state('addedContacts')).toEqual(["Ola Nordmann"])
  
    })
  })

})
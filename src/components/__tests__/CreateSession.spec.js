/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import CreateSession from '../CreateSession'
import toJson from 'enzyme-to-json';
import 'native-base'

import renderer from 'react-test-renderer';

describe('CreateSession', () => {
  let wrapper
  const navigation = {navigate: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<CreateSession navigation={navigation}/>)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  // TODO: Date is set when calender is changed

  // TODO: calling saveSession

  // TODO: validating session
  describe('validateSession', () => {
    it('returns false if name is not given', () => {
      wrapper.instance().showToast = jest.fn()
      wrapper.state().name = null
      wrapper.state().exercises = ['Exercise 1', 'Exercise 2']
      wrapper.state().date = 'A date'

      expect(wrapper.instance().validateSession()).toBeFalsy()
    })

    it('returns false if no date', () => {
      wrapper.instance().showToast = jest.fn()
      wrapper.state().name = 'TestName'
      wrapper.state().exercises = ['Exercise 1', 'Exercise 2']
      wrapper.state().date = null

      expect(wrapper.instance().validateSession()).toBeFalsy()
    })


    it('returns false if no exercises', () => {
      wrapper.instance().showToast = jest.fn()
      wrapper.state().name = 'TestName'
      wrapper.state().exercises = null
      wrapper.state().date = 'A date'

      expect(wrapper.instance().validateSession()).toBeFalsy()
    })

    it('returns true if name and exercises are given', () => {
      wrapper.instance().showToast = jest.fn()
      wrapper.state().name = 'TestName'
      wrapper.state().exercises = ['Exercise 1', 'Exercise 2']
      wrapper.state().date = 'A date'

      expect(wrapper.instance().validateSession()).toBeTruthy()
    })
  })

   
})
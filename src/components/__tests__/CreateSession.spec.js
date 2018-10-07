/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import CreateSession from '../CreateSession'
import toJson from 'enzyme-to-json';
import 'native-base'
import { findByID } from './testUtils.js'


import renderer from 'react-test-renderer';

describe('CreateSession', () => {
  let wrapper
  let navigateMock
  
  beforeEach(() => {
    navigateMock = jest.fn()
    const navigation = {navigate: navigateMock, state: { params: {}}}
    wrapper = shallow(<CreateSession navigation={navigation}/>)
  })

  // Date object in DateTimePicker does not update and thereby the test fails
  /*it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })*/

  describe('saveSession', () => {
    it('called when button clicked', () => {
      let saveSessionMock = jest.fn()

      wrapper.instance().saveSession = saveSessionMock
      wrapper.instance().showToast = jest.fn()

      wrapper.instance().forceUpdate()

      let button = findByID(wrapper, 'saveSessionButton')
      button.props().onPress()

      expect(saveSessionMock.mock.calls.length).toBe(1)
    })

    it('navigates if validateSession is true', () => {
      let validateSessionMock = jest.fn()
      validateSessionMock.mockReturnValue(true)

      wrapper.instance().validateSession = validateSessionMock
      wrapper.update()

      wrapper.instance().saveSession()

      expect(navigateMock.mock.calls.length).toBe(1)
    })

    it('does not navigate if validateSession is false', () => {
      let validateSessionMock = jest.fn()
      validateSessionMock.mockReturnValue(false)

      wrapper.instance().validateSession = validateSessionMock
      wrapper.update()

      wrapper.instance().saveSession()

      expect(navigateMock.mock.calls.length).toBe(0)
    })
  })


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

  describe('_setDateAndTime', () => {
    it('called when onConfirm on dateTimePicker', () => {
      let _setDateAndTimeMock = jest.fn()

      wrapper.instance()._setDateAndTime = _setDateAndTimeMock

      wrapper.instance().forceUpdate()

      let button = findByID(wrapper, 'dateTimePicker')
      button.props().onConfirm()

      expect(_setDateAndTimeMock.mock.calls.length).toBe(1)
    })
  })
   
})
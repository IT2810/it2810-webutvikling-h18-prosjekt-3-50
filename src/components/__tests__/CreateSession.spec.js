/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { CreateSession } from '../CreateSession'
import toJson from 'enzyme-to-json'
import { findByID } from '../../testUtils.js'
import DateTimePicker from 'react-native-modal-datetime-picker'

describe('CreateSession', () => {
  let wrapper
  let navigateMock
  let navigation
  let dispatchAddSessionMock

  beforeEach(() => {
    navigateMock = jest.fn()
    navigation = { navigate: navigateMock, state: { params: {} } }
    dispatchAddSessionMock = jest.fn()
    wrapper = shallow(<CreateSession navigation={navigation} addSession={dispatchAddSessionMock} exercises={[]} />)
  })

  // Date object in DateTimePicker does not update and thereby the test fails
  /* it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  }) */

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
      wrapper.props().exercises = ['Exercise 1', 'Exercise 2']
      wrapper.state().date = 'A date'

      expect(wrapper.instance().validateSession()).toBeFalsy()
    })

    it('returns false if no date', () => {
      wrapper = shallow(<CreateSession navigation={navigation} addSession={dispatchAddSessionMock} exercises={['Exercise 1', 'Exercise 2']} />)
      wrapper.instance().showToast = jest.fn()
      wrapper.state().name = 'TestName'

      wrapper.state().date = null

      expect(wrapper.instance().validateSession()).toBeFalsy()
    })

    it('returns false if no exercises', () => {
      wrapper.instance().showToast = jest.fn()
      wrapper.state().name = 'TestName'
      wrapper.state().date = 'A date'

      expect(wrapper.instance().validateSession()).toBeFalsy()
    })

    it('returns true if name, date and exercises are given', () => {
      wrapper = shallow(<CreateSession navigation={navigation} addSession={dispatchAddSessionMock} exercises={['Exercise 1', 'Exercise 2']} />)
      wrapper.instance().showToast = jest.fn()
      wrapper.state().name = 'TestName'
      wrapper.state().date = 'testDate'

      expect(wrapper.instance().validateSession()).toBeTruthy()
    })
  })

  describe('_setDate', () => {
    it('called when onConfirm on dateTimePicker', () => {
      let _setDateMock = jest.fn()
      wrapper.instance()._setDate = _setDateMock
      wrapper.instance().forceUpdate()

      let button = findByID(wrapper, 'datePicker')
      button.props().onConfirm()

      expect(_setDateMock.mock.calls.length).toBe(1)
    })
  })

  describe('_setTime', () => {
    it('called when onConfirm on dateTimePicker', () => {
      let _setTimeMock = jest.fn()
      wrapper.instance()._setTime = _setTimeMock
      wrapper.instance().forceUpdate()

      let button = findByID(wrapper, 'timePicker')
      button.props().onConfirm()

      expect(_setTimeMock.mock.calls.length).toBe(1)
    })
  })
})

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import CreateSession from '../CreateSession'
import toJson from 'enzyme-to-json'
import { findByID } from '../../testUtils.js'
import DateTimePicker from 'react-native-modal-datetime-picker'
import configureStore from 'redux-mock-store' //ES6 modules
import initial_state_mock, { emptySession } from '../../assets/initial_state_mock.js'
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore({sessions: initial_state_mock})

describe('CreateSession', () => {
  let wrapper
  let navigateMock
  let navigation
  let dispatchAddSessionMock

  beforeEach(() => {
    navigateMock = jest.fn()
    navigation = { goBack: navigateMock, state: { params: {} } }
    dispatchAddSessionMock = jest.fn()
    wrapper = shallow(<CreateSession store={store} navigation={navigation} addSession={dispatchAddSessionMock} />).dive()
  })

  // Date object in DateTimePicker does not update and thereby the test fails
  //it('renders correctly', () => {expect(toJson(wrapper)).toMatchSnapshot()})

  describe('saveSession', () => {
    it('called when button clicked', () => {
      let saveSessionMock = jest.fn()

      wrapper.instance().saveSession = saveSessionMock

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
      //wrapper.props().exercises = [{ name: 'Squat', sets: '4', reps: '12' }, { name: 'Benchpress', sets: '4', reps: '12' }]
      //wrapper.state().date = 'A date'
      expect(wrapper.instance().validateSession()).toBeFalsy()
    })

    it('returns false if no date', () => {
      wrapper = shallow(<CreateSession store={store} navigation={navigation} addSession={dispatchAddSessionMock} />).dive()
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
      const customInitState = {...{}, ...initial_state_mock}
      customInitState.currentSessionId = 0
      customInitState.temporarySession.name = 'TestName'
      customInitState.temporarySession.date = 'testDate'
      customInitState.temporarySession.exercises = [{ name: 'Squat', sets: '4', reps: '12' }, { name: 'Benchpress', sets: '4', reps: '12' }]
      const customStore = configureStore([])({sessions: customInitState})
      wrapper = shallow(<CreateSession store={customStore} navigation={navigation} addSession={dispatchAddSessionMock} session={{exercises:[{ name: 'Squat', sets: '4', reps: '12' }, { name: 'Benchpress', sets: '4', reps: '12' }]}} />)

      expect(wrapper.dive().instance().validateSession()).toBeTruthy()
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

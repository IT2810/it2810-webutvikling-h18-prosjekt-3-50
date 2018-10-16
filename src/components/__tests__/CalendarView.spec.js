/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { CalendarView } from '../CalendarView'
import toJson from 'enzyme-to-json'
import { findByID } from '../../testUtils.js'

const initial_state_mock = require('../../assets/initial_state_mock.js')

describe('CalendarView', () => {
  let wrapper
  let navigateMock
  let navigation
  let dispatchSelectDateMock
  let sessionDates
  const sessions = initial_state_mock.sessions

  beforeEach(() => {
    sessionDates = []
    navigateMock = jest.fn()
    navigation = {navigate: navigateMock}
    dispatchSelectDateMock = jest.fn()
    dispatchCreateNewSessionMock = jest.fn()
    wrapper = shallow(<CalendarView
      navigation={navigation}
      selectDate={dispatchSelectDateMock}
      createNewSession={dispatchCreateNewSessionMock}
      sessionDates={sessionDates}
      sessions={sessions}
      />
    )
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('addSession', () => {
    it('called when long press on day in calendar', () => {
      let addSessionMock = jest.fn()

      wrapper.instance().addSession = addSessionMock

      wrapper.instance().forceUpdate()

      let date = findByID(wrapper, 'calendar')
      date.props().onDayLongPress('2018-10-18')

      expect(addSessionMock.mock.calls.length).toBe(1)
    })

    it('calls selectDate and navigate with date as param', () => {
      const wrapper = shallow(<CalendarView navigation={navigation} selectDate={dispatchSelectDateMock} createNewSession={dispatchCreateNewSessionMock} sessions={sessions}/>)

      let date = findByID(wrapper, 'calendar')
      date.props().onDayLongPress('2018-10-18')

      expect(dispatchSelectDateMock.mock.calls.length).toBe(1)
      expect(navigateMock.mock.calls.length).toBe(1)
      expect(navigateMock.mock.calls[0][0]).toBe('CreateSession')
    })
  })

  describe('selectDate', () => {
    it('called when press on day in calendar', () => {
      let selectDateMock = jest.fn()

      wrapper.instance().selectDate = selectDateMock
      wrapper.instance().showToast = jest.fn()

      wrapper.instance().forceUpdate()

      let calendar = findByID(wrapper, 'calendar')
      calendar.props().onDayPress('2018-10-18')

      expect(selectDateMock.mock.calls.length).toBe(1)
    })

    it('setting date in state', () => {
      let dateString = '2018-10-18'
      let date = { dateString: dateString }
      let calendar = findByID(wrapper, 'calendar')
      calendar.props().onDayPress(date)

      expect(wrapper.state('date')).toBe(date)
    })

    it('add date to markedDates with select as true', () => {
      let dateString = '2018-10-18'
      let date = { dateString: dateString }
      let calendar = findByID(wrapper, 'calendar')
      calendar.props().onDayPress(date)

      let dateInMarkedDates = wrapper.state('markedDates')[date.dateString]
      expect(dateInMarkedDates.selected).toBe(true)
    })

    it('set selected date as marked if it is marked', () => {
      let dateString = '2018-10-18'
      let date = { dateString: dateString }
      let sessionDateObject = { [dateString]: { marked: true } }

      wrapper = shallow(<CalendarView
        navigation={navigation}
        selectDate={dispatchSelectDateMock}
        createNewSession={dispatchCreateNewSessionMock}
        sessionDates={sessionDateObject}
        sessions={sessions}
        />
      )
      let calendar = findByID(wrapper, 'calendar')
      calendar.props().onDayPress(date)

      let dateInMarkedDates = wrapper.state('markedDates')[dateString]
      expect(dateInMarkedDates.selected).toBe(true)
      expect(dateInMarkedDates.marked).toBe(true)
    })
  })
})

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import ShowSession from '../ShowSession'
import toJson from 'enzyme-to-json'
import Moment from 'react-moment'
import { Card, Text, CardItem, Body, Right, Left } from 'native-base'

import configureStore from 'redux-mock-store' //ES6 modules
import initial_state_mock, { emptySession } from '../../assets/initial_state_mock.js'
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore({sessions: initial_state_mock})

describe('ShowSession', () => {
  let wrapper, navigateMock, navigation, dispatchMarkSessionAsDoneMock, dispatchUpdateCurrentSessionIdMock

  beforeEach(() => {
    navigateMock = jest.fn()
    dispatchMarkSessionAsDoneMock = jest.fn()
    dispatchUpdateCurrentSessionIdMock = jest.fn()
    navigation = { navigate: navigateMock }

    wrapper = shallow(<ShowSession
      navigation={navigation}
      store={store}
      markSessionAsDone={dispatchMarkSessionAsDoneMock}
      updateCurrentSessionId={dispatchUpdateCurrentSessionIdMock}
      />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })


})

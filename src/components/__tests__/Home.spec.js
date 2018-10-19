/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import Home from '../Home'
import toJson from 'enzyme-to-json'
import { findByID } from '../../testUtils.js'

import configureStore from 'redux-mock-store' //ES6 modules
import initial_state_mock, { emptySession } from '../../assets/initial_state_mock.js'
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore({sessions: initial_state_mock})

describe('Home', () => {
  let wrapper
  let navigateMock
  let dispatchCreateNewSessionMock

  beforeEach(() => {
    navigateMock = jest.fn()
    dispatchCreateNewSessionMock = jest.fn()
    const navigation = { navigate: navigateMock }
    wrapper = shallow(<Home store={store} navigation={navigation} createNewSession={dispatchCreateNewSessionMock} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  it('navigates when add session button is pressed', () => {
    let addSessionButton = findByID(wrapper.dive(), 'addSessionButton')
    addSessionButton.props().onPress()

    expect(navigateMock.mock.calls.length).toBe(1)
  })
})

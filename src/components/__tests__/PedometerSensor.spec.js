/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme'
import PedometerSensor from '../PedometerSensor'
import toJson from 'enzyme-to-json'
import 'native-base'

import configureStore from 'redux-mock-store' //ES6 modules
import initial_state_mock, { emptySession } from '../../assets/initial_state_mock.js'
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore({sessions: initial_state_mock})

 describe('PedometerSensor', () => {
    let wrapper
    const navigation = { navigate: jest.fn() }

    beforeEach(() => {
      wrapper = shallow(<PedometerSensor store={store} navigation={navigation}/>)
    })
     it('renders correctly', () => {
      expect(toJson(wrapper.dive())).toMatchSnapshot()
    })
     it('Check buttons', () => {
      expect(wrapper.dive().instance().getButtonsLength()).toBe(5)
    })
    
 })

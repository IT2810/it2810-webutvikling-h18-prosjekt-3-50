/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import PedometerSensor from '../PedometerSensor'
import toJson from 'enzyme-to-json'
import 'native-base'
import {shallow} from 'enzyme';

describe('PedometerSensor', () => {
    let wrapper
    const navigation = { navigate: jest.fn() }
  
    beforeEach(() => {
      wrapper = shallow(<PedometerSensor navigation={navigation}/>)
    })

    it('renders correctly', () => {
      expect(toJson(wrapper.dive())).toMatchSnapshot()
    })

    test('Check buttons', () => {
      expect(getButtonsLength()).toBe(6)
    })

    describe('_change_target', () => {
      it('can change target', () => {
        wrapper.setState({ isPedometerAvailable: "checking" })
        wrapper.setState({ pastStepCount: 3000 })
        wrapper.setState({ currentStepCount: 500 })
        wrapper.setState({ totalStepCount: 3500 })
        wrapper.setState({ target: 5000 })

  
        wrapper.instance()._change_target(20000)
        expect(wrapper.state('target')).toEqual(20000)
      })
    })

    it('returns false if target is not met', () => {

      wrapper.instance().showToast = jest.fn()

      wrapper.state().isPedometerAvailable = "checking",
      wrapper.state().pastStepCount = 50
      wrapper.state().currentStepCount = 0
      wrapper.state().totalStepCount = 50
      wrapper.state().target = 5000
      
      expect(wrapper.instance().isTargetReached()).toBeFalsy()
    })

})  
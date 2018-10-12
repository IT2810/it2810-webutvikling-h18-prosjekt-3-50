/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import PedometerSensor from '../PedometerSensor'
import toJson from 'enzyme-to-json'
import 'native-base'


describe('ContactList', () => {
    let wrapper
    const navigation = { navigate: jest.fn() }

  
    beforeEach(() => {
      wrapper = shallow(<PedometerSensor navigation={navigation}/>)
    })

    

})  
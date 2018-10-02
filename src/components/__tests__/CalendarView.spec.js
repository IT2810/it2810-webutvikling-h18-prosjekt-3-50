/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import CalendarView from '../CalendarView'
import toJson from 'enzyme-to-json';
import 'native-base'

import renderer from 'react-test-renderer';

describe('CalendarView', () => {
  let wrapper
  const navigation = {navigate: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<CalendarView navigation={navigation}/>)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

})
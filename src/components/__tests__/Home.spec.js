/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import Home from '../Home'
import toJson from 'enzyme-to-json';
import 'native-base'

import renderer from 'react-test-renderer';

describe('Home', () => {
  let wrapper
  const navigation = {navigate: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<Home navigation={navigation}/>)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })


  // Todo: navigates to CreateSession if click on button

})
/**
 * @jest-environment jsdom
 */

import 'react-native'
import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'
import NavigationTestUtils from 'react-navigation/NavigationTestUtils'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

beforeEach(() => {
  global.window.addEventListener = jest.fn()
})

describe('App snapshot', () => {
  console.log('In app-test')
  /*  jest.useFakeTimers();
  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  }); */

  it('renders the loading screen', async () => {
    const wrapper = shallow(<App />)
    const component = wrapper.dive()

    expect(toJson(component)).toMatchSnapshot()
  })

  // it('renders the root without loading screen', async () => {
  //   const tree = renderer.create(<App skipLoadingScreen />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
})

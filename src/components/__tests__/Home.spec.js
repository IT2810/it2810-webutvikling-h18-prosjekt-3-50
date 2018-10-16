/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { Home } from '../Home'
import toJson from 'enzyme-to-json'
import { findByID } from '../../testUtils.js'

describe('Home', () => {
  let wrapper
  let navigateMock
  let dispatchCreateNewSessionMock

  beforeEach(() => {
    navigateMock = jest.fn()
    dispatchCreateNewSessionMock = jest.fn()
    const navigation = { navigate: navigateMock }
    wrapper = shallow(<Home navigation={navigation} createNewSession={dispatchCreateNewSessionMock} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  it('navigates when add session button is pressed', () => {
    let addSessionButton = findByID(wrapper, 'addSessionButton')
    addSessionButton.props().onPress()

    expect(navigateMock.mock.calls.length).toBe(1)
  })
})

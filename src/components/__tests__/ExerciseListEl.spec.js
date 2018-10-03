/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import ExerciseListEl from '../ExerciseListEl'
import toJson from 'enzyme-to-json';
import 'native-base'

import renderer from 'react-test-renderer';

describe('ExerciseListEl', () => {
  let wrapper
  const navigation = {navigate: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<ExerciseListEl navigation={navigation}/>)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  // TODO: Can delete from list
})
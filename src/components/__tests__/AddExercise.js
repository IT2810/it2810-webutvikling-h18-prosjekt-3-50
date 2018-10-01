/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import AddExercise from '../AddExercise'
import toJson from 'enzyme-to-json';

console.log("Before test")
it('renders correctly', () => {
  const wrapper = shallow(<AddExercise />)
  const component = wrapper.dive()

  expect(toJson(wrapper)).toMatchSnapshot()
})

it('calls addExercise when button is pressed', () => {
  const wrapper = shallow(<AddExercise />)
  const spy = jest.spyOn(wrapper.dive(), 'addExercise')
  const component = wrapper.dive()

  component.find('#addExerciseButton').simulate('click')

  expect(spy).toHaveBeenCalled()
})
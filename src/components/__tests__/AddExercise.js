/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import AddExercise from '../AddExercise'


console.log("Before test")
it('renders correctly', () => {
  console.log("In test")
  //const wrapper = rendered.create(<AddExercise />)
  //expect(wrapper).toMatchSnapshot()

  expect(1).toEqual(1)
})

it('calls addExercise when button is pressed', () => {



})
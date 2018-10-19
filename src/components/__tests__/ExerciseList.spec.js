/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import ExerciseList from '../ExerciseList'
import toJson from 'enzyme-to-json'
import { findByID } from '../../testUtils.js'

describe('ExerciseList', () => {
  let wrapper
  let navigateMock
  let dispatchRemoveExerciseMock
  let navigation
  let exercises

  beforeEach(() => {
    dispatchRemoveExerciseMock = jest.fn()
    navigateMock = jest.fn()
    navigation = { navigate: navigateMock }
    exercises = []
    wrapper = shallow(<ExerciseList navigation={navigation} removeExercise={dispatchRemoveExerciseMock} exercises={exercises} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

})

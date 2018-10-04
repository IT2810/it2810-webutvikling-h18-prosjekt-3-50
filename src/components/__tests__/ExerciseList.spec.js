/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import ExerciseList from '../ExerciseList'
import toJson from 'enzyme-to-json';
import 'native-base'

import renderer from 'react-test-renderer';

describe('ExerciseList', () => {
  let wrapper
  const navigation = {navigate: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<ExerciseList navigation={navigation}/>)
    wrapper.instance().showToast = jest.fn()
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('_remove', () => {
    it('removes from list', () => {

      wrapper.setState({exercises: [
        {name: 'Squat', sets: '4', reps: '12'},
        {name: 'Benchpress', sets: '4', reps: '12'},
        {name: 'Pullup', sets: '4', reps: '12'},
        {name: 'Row', sets: '4', reps: '12'}
      ]})

      var exerciseRemoved = {name: 'Pullup', sets: '4', reps: '12'}
      wrapper.instance()._remove(exerciseRemoved)

      expect(wrapper.state('exercises').indexOf(exerciseRemoved)).toEqual(-1)
      expect(wrapper.state('exercises')).toHaveLength(3)
    })
  })

  describe('_add', () => {
    it('navigates to AddExercise', () => {

      // TODO
    })

  })
})
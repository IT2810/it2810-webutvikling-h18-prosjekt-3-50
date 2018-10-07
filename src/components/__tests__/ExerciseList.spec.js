/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import ExerciseList from '../ExerciseList'
import toJson from 'enzyme-to-json';
import 'native-base'
import { findByID } from '../../testUtils.js'

describe('ExerciseList', () => {
  let wrapper
  let navigateMock
  
  beforeEach(() => {
    navigateMock = jest.fn()
    const navigation = {navigate: navigateMock}
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
    it('called when clicking on add exercise button', () => {
      let _addMock = jest.fn()
      wrapper.instance()._add = _addMock
      wrapper.instance().forceUpdate()

      let addExerciseButton = findByID(wrapper, 'addExerciseButton')
      addExerciseButton.props().onPress()

      expect(_addMock.mock.calls.length).toBe(1)
    })
    
    it('navigates to AddExercise', () => {
      wrapper.instance()._add()

      expect(navigateMock.mock.calls.length).toBe(1)
    })

  })
})
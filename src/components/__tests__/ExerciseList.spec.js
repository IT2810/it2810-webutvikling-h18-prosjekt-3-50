/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { ExerciseList } from '../ExerciseList'
import toJson from 'enzyme-to-json'
import { findByID } from '../../testUtils.js'

describe('ExerciseList', () => {
  let wrapper
  let navigateMock
  let dispatchRemoveExerciseMock
  let navigation

  beforeEach(() => {
    dispatchRemoveExerciseMock = jest.fn()
    navigateMock = jest.fn()
    navigation = { navigate: navigateMock }
    wrapper = shallow(<ExerciseList navigation={navigation} removeExercise={dispatchRemoveExerciseMock} exercises={[]} />)
    wrapper.instance().showToast = jest.fn()
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('_remove', () => {
    it('called when clicking on add exercise button', () => {
      const exercises = [{name: 'Test exercise', reps: '12', sets: '4'}]
      wrapper = shallow(<ExerciseList navigation={navigation} removeExercise={dispatchRemoveExerciseMock} exercises={exercises} />)
    
      let _removeMock = jest.fn()
      wrapper.instance()._remove = _removeMock
      wrapper.instance().forceUpdate()


      let removeExerciseButton = findByID(wrapper, 'removeExerciseButton')
      removeExerciseButton.props().onPress()

      expect(_removeMock.mock.calls.length).toBe(1)
    })

    it('dispatches removeExercise ', () => {
      var exerciseRemoved = { name: 'Pullup', sets: '4', reps: '12' }
      wrapper.instance()._remove(exerciseRemoved)

      //expect(wrapper.state('exercises').indexOf(exerciseRemoved)).toEqual(-1)
      expect(dispatchRemoveExerciseMock.mock.calls.length).toBe(1)
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

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow, mount } from 'enzyme'
import AddExercise from '../AddExercise'
import toJson from 'enzyme-to-json';
import 'native-base'

import renderer from 'react-test-renderer';

describe('AddExercise', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AddExercise />)
  })

  /*it('renders correctly', () => {
    //const wrapper = renderer.create(<AddExercise />).toJSON()
    const wrapper = shallow(<AddExercise />).dive()


    //expect(wrapper).toMatchSnapshot()
    expect(toJson(wrapper)).toMatchSnapshot()
  })*/
  /*

  it('calls addExercise when button is pressed', () => {
    let addExerciseMock = jest.fn()
    let wrapper = shallow(<AddExercise />)

    //AddExercise.prototype.addExercise = addExerciseMock
    console.log("Before adding mocks")
    //wrapper.instance().addExercise = addExerciseMock //jest.fn(() => console.log("Mock function"))
    wrapper.instance().showToast = jest.fn()
    console.log(wrapper.instance().addExercise)
    console.log(addExerciseMock)


    wrapper.update()
    //let spy = jest.spyOn(wrapper.instance(), 'addExercise').mockImplementation(() => { console.log('second mock')})

    //console.log(wrapper.instance().addExercise)

    //wrapper.update()
    let spy = jest.spyOn(wrapper.instance(), 'addExercise')

    console.log(wrapper.instance().addExercise)
    console.log(spy)
    //wrapper.instance().addExercise()

    //wrapper.instance().addExercise()
    wrapper.find('Styled(Button)').simulate('press')
    console.log("Before press")
    //wrapper.find('Styled(Button)').props().onPress()
    console.log("After press")
    expect(spy).toHaveBeenCalled()
    expect(wrapper.instance().addExercise).toHaveBeenCalled()
    expect(addExerciseMock).toHaveBeenCalled()
  })
  */

 describe('validate', () => {

    it('exercise is valid if both name, sets and reps are given', () => {
      wrapper.instance().showToast = jest.fn()
      wrapper.state().name = 'TestName'
      wrapper.state().reps = '10'
      wrapper.state().sets = '4'

      expect(wrapper.instance().validateExercise()).toBeTruthy()
    })

    it('exercise is not valid if either name, sets and/or reps are missing', () => {
      wrapper.instance().showToast = jest.fn()

      wrapper.state().name = 'TestName'
      expect(wrapper.instance().validateExercise()).toBeFalsy()

      wrapper.state().reps = '10'
      expect(wrapper.instance().validateExercise()).toBeFalsy()

      wrapper.state().reps = null
      wrapper.state().sets = '4'
      expect(wrapper.instance().validateExercise()).toBeFalsy()
    })

  })
})
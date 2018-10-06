/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import AddExercise from '../AddExercise'
import 'native-base'
import { findByID } from './testUtils.js'
//import { View, Text, Container, Header, Content, Form, Item, Input, Button, Label, Card, CardItem, Toast, H3, H4, Row} from 'native-base';


import renderer from 'react-test-renderer';

describe('AddExercise', () => {
  let wrapper

  beforeEach(() => {
    //wrapper = shallow(<AddExercise />)
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

  describe('state updated when giving input', () => {
    it('name of exercise', () => {
      let wrapper = shallow(<AddExercise />)
      
      let input = 'Squat'      
      let nameInput = findByID(wrapper, 'nameInput')
      nameInput.props().onChangeText(input)

      expect(wrapper.state('name')).toEqual(input)
    })

    it('sets of exercise', () => {
      let wrapper = shallow(<AddExercise />)
      
      let input = '4'      
      let sets = findByID(wrapper, 'setsInput')
      sets.props().onChangeText(input)

      expect(wrapper.state('sets')).toEqual(input)
    })

    it('reps of exercise', () => {
      let wrapper = shallow(<AddExercise />)
      
      let input = '12'      
      let repsInput = findByID(wrapper, 'repsInput')
      repsInput.props().onChangeText(input)

      expect(wrapper.state('reps')).toEqual(input)
    })

    it('kg of exercise', () => {
      let wrapper = shallow(<AddExercise />)
      
      let input = '60'      
      let kgInput = findByID(wrapper, 'kgInput')
      kgInput.props().onChangeText(input)

      expect(wrapper.state('kg')).toEqual(input)
    })

  })

  /*describe('validate', () => {

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

  })*/
})

/*let findByID = function(wrapper, testID) {
  if (wrapper.props() && wrapper.props().testID === testID) {
    return wrapper
  }
  if (wrapper.children() && wrapper.children().length > 0) {
    let childs = wrapper.children()
    for (let i = 0; i < childs.length; i++) {
      let item = findByID(wrapper.childAt(i), testID)
      if (typeof(item) !== 'undefined') {
        return item
      }
    }
  }
}*/
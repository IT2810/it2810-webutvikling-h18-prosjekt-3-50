/**
 * @jest-environment jsdom
 */
import { ADD_SESSION, SELECT_DATE, ADD_CONTACT, REMOVE_CONTACT, ADD_EXERCISE, REMOVE_EXERCISE } from '../types'
import { addSession, selectSession, selectDate, addContact, removeContact, addExercise, removeExercise } from '../sessions'

describe('session actions', () => {
  it('should create an action to add session', () => {
    const session = {name: 'Test session'}

    const expectedAction = {
      type: ADD_SESSION,
      payload: session
    }

    expect(addSession(session)).toEqual(expectedAction)
  })

  it('should create an action to selectDate', () => {
    const date = new Date(2018, 10, 12)

    const expectedAction = {
      type: SELECT_DATE,
      payload: date
    }

    expect(selectDate(date)).toEqual(expectedAction)
  })

  it('should create an action to addContact', () => {
    const contact = {name: 'Test contact'}

    const expectedAction = {
      type: ADD_CONTACT,
      payload: contact
    }

    expect(addContact(contact)).toEqual(expectedAction)
  })

  it('should create an action to removeContact', () => {
    const contact = {name: 'Test contact'}

    const expectedAction = {
      type: REMOVE_CONTACT,
      payload: contact
    }

    expect(removeContact(contact)).toEqual(expectedAction)
  })

  it('should create an action to addExercise', () => {
    const exercise = {name: 'Test exercise'}

    const expectedAction = {
      type: ADD_EXERCISE,
      payload: exercise
    }

    expect(addExercise(exercise)).toEqual(expectedAction)
  })

  it('should create an action to removeExercise', () => {
    const exercise = {name: 'Test exercise'}

    const expectedAction = {
      type: REMOVE_EXERCISE,
      payload: exercise
    }

    expect(removeExercise(exercise)).toEqual(expectedAction)
  })

})

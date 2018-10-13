/**
 * @jest-environment jsdom
 */
import { ADD_SESSION, SELECT_SESSION, SELECT_DATE } from '../types'
import { addSession, selectSession, selectDate } from '../sessions'

describe('session actions', () => {
  it('should create an action to add session', () => {
    const session = {name: 'Test session'}

    const expectedAction = {
      type: ADD_SESSION,
      payload: session
    }

    expect(addSession(session)).toEqual(expectedAction)
  })

  it('should create an action to select session', () => {
    const id = 1

    const expectedAction = {
      type: SELECT_SESSION,
      payload: id
    }

    expect(selectSession(id)).toEqual(expectedAction)
  })

  it('should create an action to selectDate', () => {
    const date = new Date(2018, 10, 12)

    const expectedAction = {
      type: SELECT_DATE,
      payload: date
    }

    expect(selectDate(date)).toEqual(expectedAction)
  })
})
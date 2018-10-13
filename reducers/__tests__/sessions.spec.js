/**
 * @jest-environment jsdom
 */

import { ADD_SESSION, SELECT_SESSION, SELECT_DATE } from '../../actions/types'
import reducer from '../sessions'
import initial_state_mock from '../../src/assets/initial_state_mock.js'

describe('session reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initial_state_mock)
  })

  describe('should handle ADD_SESSION', () => {
    it('with an empty state', () => {
      expect(reducer({sessions: []}, {
        type: ADD_SESSION,
        payload: {name: 'Test session'}
      })).toEqual({
        sessions: [{name: 'Test session'}] 
      })
    })

    it('with an existing state', () => {
      expect(reducer({sessions: [{name: "Another test session"}]}, {
        type: ADD_SESSION,
        payload: {name: 'Test session'}
      })).toEqual({
        sessions: [{name: "Another test session"}, {name: "Test session"}]
      })
    })
  })

  describe('should handle SELECT_SESSION', () => {
    it('with an empty state', () => {
      expect(reducer({sessions: []}, {
        type: SELECT_SESSION,
        payload: 0
      })).toEqual({sessions: [], activeSession: undefined})
    })

    it('with an existing state', () => {
      expect(reducer(initial_state_mock, {
        type: SELECT_SESSION,
        payload: 0
      }).activeSession).toEqual({
          id: 0,
          date: '2018-10-02',
          time: '13:40',
          name: 'Session one',
          exercises: [
              { name: 'Squat', sets: '4', reps: '12' },
              { name: 'Benchpress', sets: '4', reps: '12' },
              { name: 'Pullup', sets: '4', reps: '12' },
              { name: 'Row', sets: '4', reps: '12' }
          ],
          contacts: [
              {name: 'Ola Nordmann'},
              {name: 'Kari Hansen'}
          ]
      })
    })
  })

  describe('should handle SELECT_DATE', () => {
    /*it('with an empty state', () => {
      expect(reducer({sessions: []}, {
        type: SELECT_SESSION,
        payload: new Date(2018, 10, 2)
      }).selectedDate).toEqual({
         new Date(2018, 10, 2)
      })
    })*/
  })
})
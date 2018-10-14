/**
 * @jest-environment jsdom
 */

import { ADD_SESSION, SELECT_SESSION, SELECT_DATE, ADD_CONTACT, REMOVE_CONTACT, ADD_EXERCISE, REMOVE_EXERCISE } from '../../actions/types'
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
          date: new Date(2018, 9, 2, 13, 40),
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

  describe('should handle ADD_CONTACT', () => {
    it('with no contacts to activeSession', () => {
      expect(reducer({activeSession: {contacts: []}}, {
        type: ADD_CONTACT,
        payload: {name: 'Test contact'}
      })).toEqual({
        activeSession: {
          contacts: [{name: 'Test contact'}] 
        }
      })
    })

    it('with existing contacts', () => {
      expect(reducer({activeSession: {
          contacts: [{name: 'Test contact'}] 
        }}, {
        type: ADD_CONTACT,
        payload: {name: 'Test contact two'}
      })).toEqual({
        activeSession: {
          contacts: [{name: 'Test contact'}, {name: 'Test contact two'}] 
        }
      })
    })
  })

  describe('should handle REMOVE_CONTACT', () => {
    it('returns state if no contacts', () => {
      expect(reducer({activeSession: {contacts: []}}, {
        type: REMOVE_CONTACT,
        payload: {name: 'Test contact'}
      })).toEqual({
        activeSession: {
          contacts: [] 
        }
      })
    })

    it('returns state if contact not found', () => {
      expect(reducer({activeSession: {contacts: [{name: 'Test contact two'}]}}, {
        type: REMOVE_CONTACT,
        payload: {name: 'Test contact'}
      })).toEqual({
        activeSession: {
          contacts: [{name: 'Test contact two'}] 
        }
      })
    })

    it('returns new state if contact successfully removed', () => {
      expect(reducer({activeSession: {
          contacts: [{name: 'Test contact'}, {name: 'Test contact two'}] 
        }}, {
        type: REMOVE_CONTACT,
        payload: {name: 'Test contact two'}
      })).toEqual({
        activeSession: {
          contacts: [{name: 'Test contact'}] 
        }
      })
    })
  })

  describe('should handle ADD_EXERCISE', () => {
    it('with no exercises to activeSession', () => {
      expect(reducer({activeSession: {exercises: []}}, {
        type: ADD_EXERCISE,
        payload: {name: 'Test exercise'}
      })).toEqual({
        activeSession: {
          exercises: [{name: 'Test exercise'}] 
        }
      })
    })

    it('with existing exercises', () => {
      expect(reducer({activeSession: {
          exercises: [{name: 'Test exercise'}] 
        }}, {
        type: ADD_EXERCISE,
        payload: {name: 'Test exercise two'}
      })).toEqual({
        activeSession: {
          exercises: [{name: 'Test exercise'}, {name: 'Test exercise two'}] 
        }
      })
    })
  })

  describe('should handle REMOVE_EXERCISE', () => {
    it('returns state if no exercises', () => {
      expect(reducer({activeSession: {exercises: []}}, {
        type: REMOVE_EXERCISE,
        payload: {name: 'Test exercise'}
      })).toEqual({
        activeSession: {
          exercises: [] 
        }
      })
    })

    it('returns state if exercise not found', () => {
      expect(reducer({activeSession: {exercises: [{name: 'Test exercise two'}]}}, {
        type: REMOVE_EXERCISE,
        payload: {name: 'Test exercise'}
      })).toEqual({
        activeSession: {
          exercises: [{name: 'Test exercise two'}] 
        }
      })
    })

    it('returns new state if exercise successfully removed', () => {
      expect(reducer({activeSession: {
          exercises: [{name: 'Test exercise'}, {name: 'Test exercise two'}] 
        }}, {
        type: REMOVE_EXERCISE,
        payload: {name: 'Test exercise two'}
      })).toEqual({
        activeSession: {
          exercises: [{name: 'Test exercise'}] 
        }
      })
    })
  })
})
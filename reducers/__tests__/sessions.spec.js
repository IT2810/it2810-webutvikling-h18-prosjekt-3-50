/**
 * @jest-environment jsdom
 */

import {
  ADD_SESSION,
  SELECT_SESSION,
  SELECT_DATE,
  ADD_CONTACT,
  REMOVE_CONTACT,
  ADD_EXERCISE,
  REMOVE_EXERCISE
} from '../../actions/types'
import reducer from '../sessions'
import initial_state_mock, { emptySession } from '../../src/assets/initial_state_mock.js'

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
        sessions: [{
          name: 'Test session',
          id: 1
        }],
        currentSessionId: -1,
        temporarySession: {...{}, ...emptySession}
      })
    })

    it('with an existing state', () => {
      expect(reducer({sessions: [{name: "Another test session", id: 1}]}, {
        type: ADD_SESSION,
        payload: {name: 'Test session'}
      })).toEqual({
        sessions: [ {name: 'Another test session', id: 1}, {name: 'Test session', id: 2} ],
        currentSessionId: -1,
        temporarySession: {...{}, ...emptySession}
      })
    })
  })

  describe('should handle ADD_CONTACT', () => {
    it('with no contacts to temporarySession', () => {
      expect(reducer({temporarySession: {contacts: []}}, {
        type: ADD_CONTACT,
        payload: {name: 'Test contact'}
      })).toEqual({
        temporarySession: {
          contacts: [{name: 'Test contact'}]
        }
      })
    })

    it('with existing contacts', () => {
      expect(reducer({temporarySession: {
          contacts: [{name: 'Test contact'}]
        }}, {
        type: ADD_CONTACT,
        payload: {name: 'Test contact two'}
      })).toEqual({
        temporarySession: {
          contacts: [{name: 'Test contact'}, {name: 'Test contact two'}]
        }
      })
    })
  })

  describe('should handle REMOVE_CONTACT', () => {
    it('returns state if no contacts', () => {
      expect(reducer({temporarySession: {contacts: []}}, {
        type: REMOVE_CONTACT,
        payload: {name: 'Test contact'}
      })).toEqual({
        temporarySession: {
          contacts: []
        }
      })
    })

    it('returns state if contact not found', () => {
      expect(reducer({temporarySession: {contacts: [{name: 'Test contact two'}]}}, {
        type: REMOVE_CONTACT,
        payload: {name: 'Test contact'}
      })).toEqual({
        temporarySession: {
          contacts: [{name: 'Test contact two'}]
        }
      })
    })

    it('returns new state if contact successfully removed', () => {
      expect(reducer({temporarySession: {
          contacts: [{name: 'Test contact'}, {name: 'Test contact two'}]
        }}, {
        type: REMOVE_CONTACT,
        payload: {name: 'Test contact two'}
      })).toEqual({
        temporarySession: {
          contacts: [{name: 'Test contact'}]
        }
      })
    })
  })

  describe('should handle ADD_EXERCISE', () => {
    it('with no exercises to temporarySession', () => {
      expect(reducer({temporarySession: {exercises: []}}, {
        type: ADD_EXERCISE,
        payload: {name: 'Test exercise'}
      })).toEqual({
        temporarySession: {
          exercises: [{name: 'Test exercise'}]
        }
      })
    })

    it('with existing exercises', () => {
      expect(reducer({temporarySession: {
          exercises: [{name: 'Test exercise'}]
        }}, {
        type: ADD_EXERCISE,
        payload: {name: 'Test exercise two'}
      })).toEqual({
        temporarySession: {
          exercises: [{name: 'Test exercise'}, {name: 'Test exercise two'}]
        }
      })
    })
  })

  describe('should handle REMOVE_EXERCISE', () => {
    it('returns state if no exercises', () => {
      expect(reducer({temporarySession: {exercises: []}}, {
        type: REMOVE_EXERCISE,
        payload: {name: 'Test exercise'}
      })).toEqual({
        temporarySession: {
          exercises: []
        }
      })
    })

    it('returns state if exercise not found', () => {
      expect(reducer({temporarySession: {exercises: [{name: 'Test exercise two'}]}}, {
        type: REMOVE_EXERCISE,
        payload: {name: 'Test exercise'}
      })).toEqual({
        temporarySession: {
          exercises: [{name: 'Test exercise two'}]
        }
      })
    })

    it('returns new state if exercise successfully removed', () => {
      expect(reducer({temporarySession: {
          exercises: [{name: 'Test exercise'}, {name: 'Test exercise two'}]
        }}, {
        type: REMOVE_EXERCISE,
        payload: {name: 'Test exercise two'}
      })).toEqual({
        temporarySession: {
          exercises: [{name: 'Test exercise'}]
        }
      })
    })
  })
})

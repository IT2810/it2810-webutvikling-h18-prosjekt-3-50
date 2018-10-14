//const initial_state_mock = require('../src/assets/initial_state_mock.json')
import initial_state_mock from '../src/assets/initial_state_mock.js'

import { isSameDay } from '../src/assets/utils'

const INITIAL_STATE = initial_state_mock

const addSession = (state, session) => {
  // Returnes a new state, doesn't edit the existing one
  return { ...state, sessions: [...state.sessions, session.payload] }
}

const selectSession = (state, action) => {
  let session = state.sessions.find(session => session.id == action.payload)
  return { ...state, activeSession: session}
}

const selectDate = (state, action) => {
  const date = action.payload
  let activeSession = state.sessions.find(session => isSameDay(session.date, date))

  return { ...state, selectedDate: action.payload, activeSession: activeSession}
}

// If no state is given, state is set to INITIAL_STATE
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_SESSION':
      return addSession(state, action)
    case 'SELECT_SESSION':
      return selectSession(state, action)
    case 'SELECT_DATE':
      return selectDate(state, action)
    default:
      return state
  }
}
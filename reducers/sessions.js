//const initial_state_mock = require('../src/assets/initial_state_mock.json')
import initial_state_mock from '../src/assets/initial_state_mock.js'

import { isSameDay } from '../src/assets/utils'

const INITIAL_STATE = initial_state_mock

const addSession = (state, session) => {
  // Returnes a new state, doesn't edit the existing one
  return { ...state, sessions: [...state.sessions, session.payload] }
}

const selectDate = (state, action) => {
  console.log("selectDate")
  console.log(action.payload)
  const date = action.payload
  let activeSession = state.sessions.find(session => isSameDay(session.date, date))
  console.log("Active session: ")
  console.log(activeSession)
  return { ...state, selectedDate: action.payload, activeSession: activeSession}
}

// If no state is given, state is set to INITIAL_STATE
export default function (state = INITIAL_STATE, action) {
  console.log("In reducer")
  switch (action.type) {
    case 'ADD_SESSION':
      console.log('Adding session in reducers')
      console.log(action)
      return addSession(state, action)
    case 'GET_SESSION':
      // TODO
    case 'SELECT_DATE':
      console.log("Selecting date")
      console.log(action.payload)
      return selectDate(state, action)
    default:
      return state
  }
}

function todoApp (state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}

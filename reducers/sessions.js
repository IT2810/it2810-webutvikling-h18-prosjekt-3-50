// const initial_state_mock = require('../src/assets/initial_state_mock.json')
import initial_state_mock, { emptySession } from '../src/assets/initial_state_mock.js'

import * as types from '../actions/types'

import { toISOString } from '../src/assets/utils'

const INITIAL_STATE = initial_state_mock


const addSession = (state, action) => {
  let previousMaxId = 0
  state.sessions.forEach(session => {
    if (session.id > previousMaxId) previousMaxId = session.id
  })
  const newSession = {...{id: previousMaxId + 1}, ...action.payload}
  return {
    ...state,
    ...{
      temporarySession: {...{}, ...emptySession},
      currentSessionId: -1
    },
    sessions: [...state.sessions, newSession]
  }
}

const updateSession = (state, action) => {
  let newState = {...{}, ...state}
  const updateIndex = newState.sessions.findIndex(session => session.id == newState.currentSessionId)
  newState.sessions[updateIndex] = action.payload
  newState.temporarySession = {...{}, ...emptySession}
  newState.currentSessionId = -1
  return newState
}

const createNewSession = (state, action) => {
  return { ...state,
    temporarySession: {...{}, ...emptySession},
    currentSessionId: -1
  }
}

const selectDate = (state, action) => {
  return { ...state, selectedDate: action.payload}
}

const addContact = (state, action) => {
  let newState = {...{}, ...state}
  newState.temporarySession.contacts = [...newState.temporarySession.contacts, action.payload]
  return newState
}

const removeContact = (state, action) => {
  let newState = {...{}, ...state}
  newState.temporarySession.contacts = newState.temporarySession.contacts.filter(contact => contact.name != action.payload.name)
  return newState
}

const addExercise = (state, action) => {
  let newState = {...{}, ...state}
  newState.temporarySession.exercises = [...newState.temporarySession.exercises, action.payload]
  return newState
}

const removeExercise = (state, action) => {
  let newState = {...{}, ...state}
  newState.temporarySession.exercises = newState.temporarySession.exercises.filter(exercise => exercise.name != action.payload.name)
  return newState
}

const markSessionAsDone = (state, action) => {
  let newState = {...{}, ...state}
  newState.sessions.find(session => session.id == action.payload).done = true
  return newState
}

const updateCurrentSessionId = (state, action) => {
  const currentSessionId = action.payload
  const temporarySession = currentSessionId == -1 ? emptySession : state.sessions.find(session => session.id == currentSessionId)
  return { ...state, currentSessionId, temporarySession }
}

// If no state is given, state is set to INITIAL_STATE
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_SESSION:
      return addSession(state, action)
    case types.UPDATE_SESSION:
      return updateSession(state, action)
    case types.CREATE_NEW_SESSION:
      return createNewSession(state, action)
    case types.ADD_CONTACT:
      return addContact(state, action)
    case types.REMOVE_CONTACT:
      return removeContact(state, action)
    case types.ADD_EXERCISE:
      return addExercise(state, action)
    case types.REMOVE_EXERCISE:
      return removeExercise(state, action)
    case types.SELECT_DATE:
      return selectDate(state, action)
    case types.MARK_SESSION_AS_DONE:
      return markSessionAsDone(state, action)
    case types.UPDATE_CURRENT_SESSION_ID:
      return updateCurrentSessionId(state, action)
    default:
      return state
  }
}

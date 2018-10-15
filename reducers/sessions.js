// const initial_state_mock = require('../src/assets/initial_state_mock.json')
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

const createNewSession = (state, action) => {
  return { ...state,
    activeSession: {
      date: null,
      name: null,
      exercises: [],
      contacts: []
    }}
}

const selectDate = (state, action) => {
  const date = action.payload
  let activeSession = state.sessions.find(session => isSameDay(session.date, date))
  return { ...state, selectedDate: action.payload, activeSession: activeSession}
}

const addContact = (state, action) => {
  let activeSession = state.activeSession
  if (activeSession.contacts) {
    activeSession.contacts = [...activeSession.contacts, action.payload]
  } else {
    activeSession.contacts = [action.payload]
  }
  return { ...state, activeSession: activeSession }
}

const removeContact = (state, action) => {
  let activeSession = state.activeSession
  activeSession.contacts = activeSession.contacts.filter(contact => contact.name != action.payload.name)
  return { ...state, activeSession: activeSession }
}

const addExercise = (state, action) => {
  let activeSession = state.activeSession
  activeSession.exercises = [...activeSession.exercises, action.payload]
  return { ...state, activeSession: activeSession }
}

const removeExercise = (state, action) => {
  let activeSession = state.activeSession
  activeSession.exercises = activeSession.exercises.filter(exercise => exercise.name != action.payload.name)
  return { ...state, activeSession: activeSession }
}

// If no state is given, state is set to INITIAL_STATE
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_SESSION':
      return addSession(state, action)
    case 'SELECT_SESSION':
      return selectSession(state, action)
    case 'CREATE_NEW_SESSION':
      return createNewSession(state, action)
    case 'ADD_CONTACT':
      return addContact(state, action)
    case 'REMOVE_CONTACT':
      return removeContact(state, action)
    case 'ADD_EXERCISE':
      return addExercise(state, action)
    case 'REMOVE_EXERCISE':
      return removeExercise(state, action)
    case 'SELECT_DATE':
      return selectDate(state, action)
    default:
      return state
  }
}

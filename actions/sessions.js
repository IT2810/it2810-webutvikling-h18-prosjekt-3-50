import { ADD_SESSION, SELECT_SESSION, SELECT_DATE, CREATE_NEW_SESSION, ADD_CONTACT, REMOVE_CONTACT, ADD_EXERCISE, REMOVE_EXERCISE, MARK_SESSION_AS_DONE } from './types'

export const addSession = (session) => {
  return {
    type: ADD_SESSION,
    payload: session
  }
}

export const selectSession = (id) => {
  return {
    type: SELECT_SESSION,
    payload: id
  }
}

export const createNewSession = () => {
  return {
    type: CREATE_NEW_SESSION
  }
}

export const selectDate = (date) => {
  return {
    type: SELECT_DATE,
    payload: date
  }
}

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact
  }
}

export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    payload: id
  }
}

export const addExercise = (exercise) => {
  return {
    type: ADD_EXERCISE,
    payload: exercise
  }
}

export const removeExercise = (id) => {
  return {
    type: REMOVE_EXERCISE,
    payload: id
  }
}

export const markSessionAsDone = (id) => {
  return {
    type: MARK_SESSION_AS_DONE,
    payload: id
  }
}

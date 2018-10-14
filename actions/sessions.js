import { ADD_SESSION, SELECT_SESSION, SELECT_DATE, ADD_CONTACT, REMOVE_CONTACT, ADD_EXERCISE, REMOVE_EXERCISE } from './types'

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
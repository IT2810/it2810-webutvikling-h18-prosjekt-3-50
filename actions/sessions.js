import {
  ADD_SESSION,
  UPDATE_SESSION,
  SELECT_DATE,
  CREATE_NEW_SESSION,
  ADD_CONTACT,
  REMOVE_CONTACT,
  ADD_EXERCISE,
  REMOVE_EXERCISE,
  MARK_SESSION_AS_DONE,
  UPDATE_CURRENT_SESSION_ID,
  UPDATE_TODAYS_TARGET,
  UPDATE_TODAYS_RESULT
} from './types'

export const addSession = (session) => {
  return {
    type: ADD_SESSION,
    payload: session
  }
}

export const updateSession = (session) => {
  return {
    type: UPDATE_SESSION,
    payload: session
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

export const updateCurrentSessionId = id => {
  return {
    type: UPDATE_CURRENT_SESSION_ID,
    payload: id
  }
}

export const updateTodaysTarget = value => {
  return {
    type: UPDATE_TODAYS_TARGET,
    payload: value
  }
}

export const updateTodaysResult = value => {
  return {
    type: UPDATE_TODAYS_RESULT,
    payload: value
  }
}
